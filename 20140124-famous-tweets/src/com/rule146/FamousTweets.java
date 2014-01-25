package com.rule146;

import java.net.*;
import java.io.*;
import org.json.*;
import java.util.ArrayList;
import org.apache.commons.io.*;

public class FamousTweets {

	public static int MIN_FOLLOWERS_A = 1000000;
	public static int MIN_FOLLOWERS_B = 125000;
	public static int NUM_CONVERSATIONS = 10;
	public static String cache_dir = "/tmp";
	public static boolean USE_CACHE = false;
	
	public static String readCachedURL(String url) throws IOException {
		// if the url contents are cached, grab them from the cache:
		String urlhash = new Long(url.hashCode()).toString();
		File cacheFile = new File(cache_dir, "cache-"+urlhash);

		if(cacheFile.exists()) {
			return FileUtils.readFileToString(cacheFile);
		} else {
			// open the URL
			URL urlToCache = new URL(url);
			URLConnection connection = urlToCache.openConnection();
			// read the contents of the page into a String
			BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
			String inputLine;
			String pageContents = "";
			while ((inputLine = in.readLine()) != null) pageContents += inputLine;
			in.close();
			// write the page contents to the cache file:
			FileUtils.writeStringToFile(cacheFile, pageContents);
			return pageContents;
		}
		
	}

	public static String callTwitterNoCache(String url) throws Exception {
		
		URL twitterstatus = new URL(url);
		URLConnection connection = twitterstatus.openConnection();
		BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		String inputLine;
		String jsonString = "";
		while ((inputLine = in.readLine()) != null) jsonString += inputLine;
		in.close();
		
		return jsonString;
		
	}
	
	public static String callTwitter(String url) throws Exception {
		
		if (USE_CACHE) {
			return readCachedURL(url);
		}
		else {
			return callTwitterNoCache(url);
		}
		
	}
	
	public static void printTweetExchangeSummary(JSONObject tweetAB, JSONObject tweetBA) throws JSONException {

		JSONObject userA = tweetAB.getJSONObject("user");
		JSONObject userB = tweetBA.getJSONObject("user");
		String userAScreenName = userA.getString("screen_name");
		String userBScreenName = userB.getString("screen_name");
		long tweetABID = tweetAB.getLong("id");
		long tweetBAID = tweetBA.getLong("id");
		String tweetABText = tweetAB.getString("text");
		String tweetBAText = tweetBA.getString("text");
		String tweetABDate = tweetAB.getString("created_at");
		String tweetBADate = tweetBA.getString("created_at");
	
		System.out.println();
		System.out.println("+++++++++++++++++++++++++++++++++++");
		System.out.println("User A: @" + userAScreenName);
		System.out.println("User B: @" + userBScreenName);
		System.out.println("B -> A text:\n" + tweetBAText);
		System.out.println("B link: " + twitterLink(userBScreenName, tweetBAID));
		System.out.println("B date: " + tweetBADate);
		System.out.println("A -> B text:\n" + tweetABText);
		System.out.println("A link: " + twitterLink(userAScreenName, tweetABID));
		System.out.println("A date: " + tweetABDate);
		System.out.println("+++++++++++++++++++++++++++++++++++");
		System.out.println();
	}

	public static int remainingAPICalls() throws Exception {
		
		JSONObject response = new JSONObject(callTwitter("https://api.twitter.com/1/account/rate_limit_status.json"));
		return response.getInt("remaining_hits");

	}
	
	public static String twitterLink(String screenName, long id) {
		Long ID = new Long(id);
		return "https://twitter.com/" + screenName + "/status/" + ID.toString();  
	}

//	public static void main1(String[] args) throws Exception {
//		
//		if(args.length >= 1) cache_dir = args[0];
//		
//		String url = "https://api.twitter.com/1/account/rate_limit_status.json";
//		String status = readCachedURL(url);
//		System.out.println(status);
//		JSONObject statusjson = new JSONObject(status);
//		System.out.printf("remaining_hits = %d\n", statusjson.getInt("remaining_hits"));
//		
//	}	
	
	
	public static void main(String[] args) throws Exception {

		// get a list of slugs for recommended categories of tweets:
		JSONArray suggestions = new JSONArray(callTwitter("https://api.twitter.com/1/users/suggestions.json"));
		int numSuggestions = suggestions.length();
		String slugs[] = new String[numSuggestions];
		for (int i=0; i<numSuggestions; i++) {
			slugs[i] = suggestions.getJSONObject(i).getString("slug");
		}
		
		// get the recommended users in each category
		// because these users tend to be famous people with > 1 million followers
		// then select just the users with > 1 million followers (uber-celebs)
		
		String categorySlug;
		ArrayList<JSONObject> userATweetsToKeep = new ArrayList<JSONObject>(NUM_CONVERSATIONS);
		ArrayList<JSONObject> userBTweetsToKeep = new ArrayList<JSONObject>(NUM_CONVERSATIONS);
		// loop over categories:
		for (int i=0; i<slugs.length; i++){
			
			if (userATweetsToKeep.size() >= NUM_CONVERSATIONS) break;
			
			// from my prototyping I know that there are about 400 users in all categories combined,
			// and there are about 20 categories, so about 20 users per category:
			ArrayList<Long> userIDs = new ArrayList<Long>(20);

			// for this category slug, e.g "music", "sports", etc. ...
			// get the list of recommended users under this category
			
			// get the users for this category: 
			categorySlug = slugs[i];
			System.out.println("Getting users for category: " + categorySlug);
			JSONObject categoryjson = new JSONObject(callTwitter("https://api.twitter.com/1/users/suggestions/" + categorySlug + ".json"));
			JSONArray userArray = categoryjson.getJSONArray("users");
			
			// retain just the celebrity users in this category
			// (users with > 1 million followers)
			long id;
			int followersCount;
			JSONObject user;
			// loop over all users in this category:
			for (int j=0; j<userArray.length(); j++){
				user = userArray.getJSONObject(j);
				// get the id for this user:
				id = user.getLong("id");
				followersCount = user.getInt("followers_count");
				// if this user is a celebrity with > MIN_FOLLOWERS_A followers, keep their id:
				if(followersCount >= MIN_FOLLOWERS_A) {
					userIDs.add(new Long(id));
				}
			}

			int userCount = userIDs.size();
			System.out.printf("Total uber-celebrity users kept: %d\n", userCount);

			// run through the list of uber-celebs and grab their most recent tweets
			// the uber-celeb is user A
			// from the recent tweets of user A, select the tweets where they are replying 
			// to a user with > 125 k followers (semi-celeb)
			// the semi-celeb is user B

			int k=0;
			System.out.println("Searching uber-celebrity tweets ...");
			// loop over users:
			while (k < userCount && userATweetsToKeep.size() < NUM_CONVERSATIONS) {
				ArrayList<JSONObject> conversationTweets = new ArrayList<JSONObject>(20);
				Long userAID = userIDs.get(k);
				System.out.println("uber-celeb: " + userAID.toString());
				// grab most recent tweets by the uber-celeb since March 5:
				String timelineURL = 
					"https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&user_id=" + 
					userAID.toString() + 
					"&count=200&since_id=176562260972552192";
				JSONArray userARecentTweets = new JSONArray(callTwitter(timelineURL));

				// select tweets from the uber-celeb where they are replying to a tweet from another user:
				for (int n=0; n<userARecentTweets.length(); n++) {
					JSONObject tweet = userARecentTweets.getJSONObject(n);
					if (!tweet.isNull("in_reply_to_user_id") && !tweet.isNull("in_reply_to_status_id")) {
						conversationTweets.add(tweet);
					}
				}

				// from the uber-celeb's tweets, select ones that are replying to a semi-celeb with at least MIN_FOLLOWERS_B followers:
				// loop over tweets for this user:
				int l=0;
				while (l < conversationTweets.size() && userATweetsToKeep.size() < NUM_CONVERSATIONS) {
					JSONObject tweet = conversationTweets.get(l);
					Long inReplyToUserID = new Long(tweet.getLong("in_reply_to_user_id"));
					String userBURL = "https://api.twitter.com/1/users/show.json?user_id=" + inReplyToUserID.toString() + "&include_entities=true";
					JSONObject userBJSON;
					try{
						userBJSON = new JSONObject(callTwitter(userBURL));
					} catch (IOException e) {
						// don't consider this tweet if the semi-celeb user profile isn't accessible (http 403 error)
						// may also be an http 400 error if there are no more allowed API calls 
						System.out.println("Warning: couldn't access user id " + inReplyToUserID.toString());
						l++;
						continue;
					}
					int userBFollowersCount = userBJSON.getInt("followers_count");
					if (userBFollowersCount >= MIN_FOLLOWERS_B) {
						// this is a tweet to a semi-celeb user with at least MIN_FOLLOWERS_B followers
						JSONObject replyToTweet;
						try{
							Long statusID = new Long(tweet.getLong("in_reply_to_status_id"));
							String replyToTweetURL = "https://api.twitter.com/1/statuses/show.json?id=" + statusID.toString() + "&include_entities=true";
							replyToTweet = new JSONObject(callTwitter(replyToTweetURL));
						} catch (IOException e) {
							// don't keep this tweet exchange if the semi-celeb tweet isn't accessible (http 403 error) 
							// may also be an http 400 error if there are no more allowed API calls
							l++;
							continue;
						}
						
						userATweetsToKeep.add(tweet);
						userBTweetsToKeep.add(replyToTweet);
						System.out.printf("conversations kept: %d\n", userATweetsToKeep.size());
						System.out.printf("remaining API hits: %d\n", remainingAPICalls());

//						System.out.println("user A id: " + new Long(tweet.getJSONObject("user").getLong("id")).toString() );
//						System.out.println("user A tweet id: " + new Long(tweet.getLong("id")).toString());
//						System.out.println("user B id: " + new Long(replyToTweet.getJSONObject("user").getLong("id")).toString());
//						System.out.println("user B tweet id: " + new Long(replyToTweet.getLong("id")).toString());
						
						printTweetExchangeSummary(tweet, replyToTweet);

					}
					l++;
				}
				k++;
			}
			
			
		}
				
//		System.out.println("Summary of famous tweet exchanges: ");
//		for (int i=0; i<userATweetsToKeep.size(); i++) {
//			printTweetExchangeSummary(userATweetsToKeep.get(i), userBTweetsToKeep.get(i));
//		}

	}

}
