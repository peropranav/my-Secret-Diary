# my-Secret-Diary
NODEJS project, you can save as many notes as you want! Secured authentication through passportJS!

## USED TECHNOLOGIES
* express
* nodeJs
* mongoDB , mongoose
* passportJs
* ejs
* many npm like cookie-parser etc.
## How To Run:
* install node from https://nodejs.org/en/
* install mongoDB from https://www.mongodb.com/
* you have to set the path for mongo, create a folder name as mongoData
* run the following ./mongod mongo/bin --dbpath ~"path for mongoData
* go the project dir and run `npm install`
* go to dir server
* node server.js
* app will start on localhost:4000


## About
* Signup page will save the data to database with secured authentication using local passport strategy!
* After login , you are directed to profile page, which will show no. of notes and name coming from database!
* On dashboard all the notes saved by you will be displayed to you.

## Future Add on
* improve profile and dashboard design.
* adding delete feature.
* dragging of up-down notes.
