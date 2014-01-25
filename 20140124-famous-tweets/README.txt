FamousTweets - uses the Twitter REST API to find 10 tweets exchanged between famous people

Done in my spare time for fun.


INSTRUCTIONS:

1. cd into the directory FamousTweets/:

cd FamousTweets/

2. Compile and run the java code using the shell script:

./run.sh

Or do it manually like so:

javac -cp lib/json-20090211.jar:lib/commons-io-2.1.jar:bin:. -d bin src/com/rule146/FamousTweets.java
java -cp lib/json-20090211.jar:lib/commons-io-2.1.jar:bin:. com.rule146.FamousTweets

3. The output you should see (some tweets might be different of course since the Twitter stream is always being updated):

pjl:FamousTweets pjl$ java -cp
lib/json-20090211.jar:lib/commons-io-2.1.jar:bin:.
com.rule146.FamousTweets
Getting users for category: music
Total uber-celebrity users kept: 78
Searching uber-celebrity tweets ...
uber-celeb: 79293791
uber-celeb: 21447363
conversations kept: 1
remaining API hits: 125

+++++++++++++++++++++++++++++++++++
User A: @katyperry
User B: @CHRISDJMOYLES
B -> A text:
Hey @katyperry, I'm CRAY for your Live Lounge this morning. Shabba!
Fancy a pint later? Chris.
#schwing
B link: https://twitter.com/CHRISDJMOYLES/status/181677500345221120
B date: Mon Mar 19 09:44:26 +0000 2012
A -> B text:
@CHRISDJMOYLES st. Patties day was TWO days ago... #Schhwwwwwing!
A link: https://twitter.com/katyperry/status/181679603432161280
A date: Mon Mar 19 09:52:47 +0000 2012
+++++++++++++++++++++++++++++++++++

conversations kept: 2
remaining API hits: 123

+++++++++++++++++++++++++++++++++++
User A: @katyperry
User B: @MarinasDiamonds
B -> A text:
*puts ear to ground* Wait, the universe just told me to binge on
chocolate pancakes?? "@katyperry: The universe is speaking. Listen to
it."
B link: https://twitter.com/MarinasDiamonds/status/180549369966231552
B date: Fri Mar 16 07:01:38 +0000 2012
A -> B text:
It says only mickey mouse shaped ones, listen close! @MarinasDiamonds
A link: https://twitter.com/katyperry/status/180550761208483843
A date: Fri Mar 16 07:07:10 +0000 2012
+++++++++++++++++++++++++++++++++++

conversations kept: 3
remaining API hits: 120

+++++++++++++++++++++++++++++++++++
User A: @katyperry
User B: @NiallOfficial
B -> A text:
Guys you are unreal, directioners are incredible, love you all xx
B link: https://twitter.com/NiallOfficial/status/179419126392045568
B date: Tue Mar 13 04:10:27 +0000 2012
A -> B text:
@NiallOfficial congratulations, you didn't let me down! xo
A link: https://twitter.com/katyperry/status/179443746558054400
A date: Tue Mar 13 05:48:17 +0000 2012
+++++++++++++++++++++++++++++++++++

uber-celeb: 35787166
uber-celeb: 27260086
conversations kept: 4
remaining API hits: 113

+++++++++++++++++++++++++++++++++++
User A: @justinbieber
User B: @carlyraejepsen
B -> A text:
Meeting Ellen was a dream come true. She has the bluest eyes!
@TheEllenShow thanks for having me. It airs TMR
B link: https://twitter.com/carlyraejepsen/status/183001784787271681
B date: Fri Mar 23 01:26:40 +0000 2012
A -> B text:
make sure everyone watches @carlyraejepsen on @TheEllenShow tomorrow.
and yeah we played 15 seconds of #BOYFRIEND too.
A link: https://twitter.com/justinbieber/status/183005707199721472
A date: Fri Mar 23 01:42:15 +0000 2012
+++++++++++++++++++++++++++++++++++

conversations kept: 5
remaining API hits: 111

+++++++++++++++++++++++++++++++++++
User A: @justinbieber
User B: @pattiemallette
B -> A text:
Had the BEST mother-son date ever w @justinbieber. Dinner &amp; a
movie &amp; gave me &amp; early bday present - he wrote me a song!
#MomentsToCherish
B link: https://twitter.com/pattiemallette/status/182362700020596736
B date: Wed Mar 21 07:07:10 +0000 2012
A -> B text:
@pattiemallette love u
A link: https://twitter.com/justinbieber/status/182364186817470465
A date: Wed Mar 21 07:13:04 +0000 2012
+++++++++++++++++++++++++++++++++++

conversations kept: 6
remaining API hits: 109

+++++++++++++++++++++++++++++++++++
User A: @justinbieber
User B: @aplusk
B -> A text:
Epic rant award winner for 2012  http://t.co/8NnHNhlJ
B link: https://twitter.com/aplusk/status/182235127492001792
B date: Tue Mar 20 22:40:14 +0000 2012
A -> B text:
@aplusk i think the world is ready for us. #prankstersontheloose
A link: https://twitter.com/justinbieber/status/182288220611018753
A date: Wed Mar 21 02:11:13 +0000 2012
+++++++++++++++++++++++++++++++++++

conversations kept: 7
remaining API hits: 106

+++++++++++++++++++++++++++++++++++
User A: @justinbieber
User B: @ComplexMag
B -> A text:
If you missed it, here's @JustinBieber's full Complex story and bloody
cover shoot: http://t.co/d765J0me
B link: https://twitter.com/ComplexMag/status/181928564101349376
B date: Tue Mar 20 02:22:04 +0000 2012
A -> B text:
@ComplexMag u should of seen the other guy
A link: https://twitter.com/justinbieber/status/181933172563509248
A date: Tue Mar 20 02:40:23 +0000 2012
+++++++++++++++++++++++++++++++++++

conversations kept: 8
remaining API hits: 104

+++++++++++++++++++++++++++++++++++
User A: @justinbieber
User B: @carlyraejepsen
B -> A text:
Playing a FREE concert in LA! Sat, April14th@8PM Come say hi. X
5 TOWERS ON UNIVERSAL CITYWALKSM  Details here: https://t.co/9Fn2Rl8C
B link: https://twitter.com/carlyraejepsen/status/181930645256282112
B date: Tue Mar 20 02:30:20 +0000 2012
A -> B text:
@carlyraejepsen see u this week on @THEELLENSHOW . Im ready! CANADA
REPRESENT!! haha. #8 and rising!! http://t.co/WlGXkYGw
A link: https://twitter.com/justinbieber/status/181932353860542466
A date: Tue Mar 20 02:37:07 +0000 2012
+++++++++++++++++++++++++++++++++++

conversations kept: 9
remaining API hits: 98

+++++++++++++++++++++++++++++++++++
User A: @justinbieber
User B: @scooterbraun
B -> A text:
just got off chatting with @justinbieber in the studio. He is making
that UPTEMPO smash.
B link: https://twitter.com/scooterbraun/status/181131485275893760
B date: Sat Mar 17 21:34:46 +0000 2012
A -> B text:
@scooterbraun this is what we do! and dont worry i wont be late to
rehearsal...maybe a little late.
A link: https://twitter.com/justinbieber/status/181132217471344640
A date: Sat Mar 17 21:37:40 +0000 2012
+++++++++++++++++++++++++++++++++++

conversations kept: 10
remaining API hits: 96

+++++++++++++++++++++++++++++++++++
User A: @justinbieber
User B: @PerezHilton
B -> A text:
Billboard magazine calls me "stacked"! http://t.co/pdtVt8xm Ha! Nice!
B link: https://twitter.com/PerezHilton/status/180833314893074432
B date: Sat Mar 17 01:49:56 +0000 2012
A -> B text:
@PerezHilton thanks for the shoutout to #WETOPIA - we are
#makingachange. thanks - http://t.co/snmpqF6q
A link: https://twitter.com/justinbieber/status/180837387214143490
A date: Sat Mar 17 02:06:07 +0000 2012
+++++++++++++++++++++++++++++++++++