Notes App Challenge
===================

Features:
-------
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can create a new note
So I can record something I need to remember

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```




Technical Approach:
-----



Notes on functionality (once all user stories are implemented):
------

## Domain model


**Access Page and show Notes**
```sequence {theme="hand"}
user->browser: view the word hello
browser->localhost(server): url route ('./')
localhost(server)->browser: index.html
browser->user: rendered index.html
```

## Terminal instructions for downloading and running the app

* git clone git@github.com:mariacuffaro/js-notes-app.git
* npm install
* node node_modules/http-server/bin/http-server

## Setting up the database
