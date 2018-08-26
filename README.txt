set-up for client:
run:
npm install
go to Client\cli-quickstart directory and run:
npm start
go to: http://localhost:4200/
---------------------------------
set-up for Database:
install python
install sqlite3
go to server directory and run:
create_database.py
---------------------------------
set-up for Server:
run:
server.py
---------------------------------
#######
Comments:
*** The communication between client and server is not stable ***
*** That means that each one works by itself but I didn't manage to send requests from client yet.***
Client:
the frontend is written with Angular6, typescrips, html

Server:
the backend is written with python.

Database:
the database is SQLite.
the Database contains 3 tables.
