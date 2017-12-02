# OnlinePSO

Required Installations (OSX):

Node.js (newest version)
Python (newest version)
Atom (text Editor)
Atom Runner (script package for atom)
GitHub account
Browserify http://browserify.org (Needed to use external libraries in javascript)


Running Code on your Computer:

1. Download your child copy of the code to mess with and place in a new folder on your desktop called OnlinePSO
2. Make changes to the code, SAVE THE FILE WHEN DONE
3. Open terminal, navigate to your OnlinePSO folder (use cd command)
$ browserify main.js -o bundle.js
$ python -m SimpleHTTPServer 8000
4. Open browser, go to URL: http://localhost:8000

IF YOU MAKE ANY CHANGES TO THE CODE: You have to stop the server in terminal (CTRL - C) and retype:
$ browserify main.js -o bundle.js
$ python -m SimpleHTTPServer 8000
