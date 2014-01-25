#!/bin/bash

echo "FamousTweets ...."

echo "compiling ..."
javac -cp lib/json-20090211.jar:lib/commons-io-2.1.jar:bin:. -d bin src/com/rule146/FamousTweets.java

echo "running ..."
java -cp lib/json-20090211.jar:lib/commons-io-2.1.jar:bin:. com.rule146.FamousTweets
