mkdir ./lib

echo "Downloading java libraries ..."
echo "Coursera Algorithms library"
curl -o ./lib/algs4.jar http://algs4.cs.princeton.edu/code/algs4.jar
echo "JUnit"
curl -o ./lib/junit-4.11.jar http://search.maven.org/remotecontent?filepath=junit/junit/4.11/junit-4.11.jar
curl -o ./lib/hamcrest-core-1.3.jar http://search.maven.org/remotecontent?filepath=org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar