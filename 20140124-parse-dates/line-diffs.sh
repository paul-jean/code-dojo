#!/bin/sh
echo "compiling ..."
javac ParseDates.java
echo "parsing dates ..."
java ParseDates < dates.txt
echo "taking successive differences between lines ..."
java ParseDates < dates.txt | awk 'NR==1{old = $1; next}; {print $1 - old; old = $1}'