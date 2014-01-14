#!/bin/sh
cd /Users/rule146/Library/Mail/V2/IMAP-paul.jean.letourneau@imap.gmail.com/[Gmail].mbox/All\ Mail.mbox/A2AE7A8A-125F-45FA-A000-DDD9372AE843/Data/Messages
grep -E -H "To: hackerschool-w2014@googlegroups.com" *.emlx | grep -o -E "\\d+.emlx" | xargs -I % grep -o -E "(\\s|\()@[a-zA-z0-9]+" % | tr "(" " " | sort | uniq