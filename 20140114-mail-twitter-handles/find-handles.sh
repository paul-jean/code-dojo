#!/bin/sh
outfile="./thread-files.txt"
maildir="/Users/rule146/Library/Mail"
if [ ! -e $outfile ] 
then
    echo "finding matching email files ..."
    grep -E -H -r --include "*.emlx" "To: hackerschool-w2014@googlegroups.com" $maildir > $outfile
fi
echo "extracting twitter handles ..."
cat $outfile | cut -d':' -f1,1 | xargs -I % sed -n -E 's/.*(@[[:alnum:]]*)[^[:alnum:]].*/\1/gp' % | sort | uniq