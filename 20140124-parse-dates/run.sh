#!/bin/sh
echo "compiling ..."
javac ParseDates.java
echo "parsing dates ..."
java ParseDates < dates.txt