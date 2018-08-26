import sqlite3
import sys
import atexit
import os

if not os.path.exists('WixDatabase.db'):
    # connect to the DB
    connection = sqlite3.connect('WixDatabase.db')

	# define close DB
    def _close_db():
        connection.commit()
        connection.close()

    # register a function to be 
	# called immediately when the interpreter terminates
    atexit.register(_close_db)

	# this function creates the DB scheme if needed
	# according to the structure that was provided in the pdf
    def create_tables():
        connection.executescript("""           
			
			CREATE TABLE IF NOT EXISTS [WixProj.Forms] (
                FormId   INT      PRIMARY KEY,
                FormName VARCHAR (32) 
            );
            CREATE TABLE IF NOT EXISTS [WixProj.FormsFields] (
                FormId      INT,
                FormFieldId INT       PRIMARY KEY,
                Label       NVARCHAR (32) NOT NULL,
                InputName   NVARCHAR (32) NOT NULL,
                InputType   NVARCHAR (32) NOT NULL
            );			
			CREATE TABLE IF NOT EXISTS [WixProj.FormSubmissions] (
                FormSubmissionId INT        PRIMARY KEY,
                UserName         NVARCHAR (256),
                FormId           INT,
                FormFieldId      INT,
                Value            NVARCHAR (256),
                Date             DATETIME
            );		   
        """)

    create_tables()




