#!/bin/sh
outfile="./thread-files.txt"
maildir="/Users/rule146/Library/Mail"
if [ ! -e $outfile ] 
then
    echo "finding matching email files ..."
    grep -E -H -r --include "*.emlx" "To: hackerschool-w2014@googlegroups.com" $maildir > $outfile
fi
echo "extracting twitter handles ..."
cat $outfile | cut -d':' -f1,1 | xargs -I % sed -E 's/[^@[:alnum:]_]/ /g' % | sed -E 's/[[:blank:]]+/ /g' | tr ' ' '\n' | sed -n -E 's/^(@[[:alnum:]]*)/\1/gp' | sort | uniq | grep -v -E "google|gmail"