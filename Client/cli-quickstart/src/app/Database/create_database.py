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
			
			CREATE TABLE [WixProj.Forms] (
                FormId   INTEGER      PRIMARY KEY,
                FormName VARCHAR (32) 
            );
            CREATE TABLE [WixProj.FormsFields] (
                FormId      INTEGER,
                FormFieldId INTEGER       PRIMARY KEY,
                Label       NVARCHAR (32) NOT NULL,
                InputName   NVARCHAR (32) NOT NULL,
                InputType   NVARCHAR (32) NOT NULL
            );			
			CREATE TABLE [WixProj.FormSubmissions] (
                FormSubmissionId INTEGER        PRIMARY KEY,
                FormId           INTEGER,
                FormFieldId      INTEGER,
                Value            NVARCHAR (256),
                Date             DATETIME
            );		   
        """)

    create_tables()

	# the 3 following methods handle the data insertion from the config files
    def insert_form(formId, formName):
        connection.execute("""
               insert into [WixProj.Forms] (FormId, FormName)
                            VALUES (?, ?);
				""", [formId, formName])

	# by default the worker status will be idle
    def insert_form_field(FormId, FormFieldId, Label, InputName, InputType):
        connection.execute("""
                insert into [WixProj.FormsFields] (FormId, FormFieldId, Label, InputName, InputType)
                            VALUES (1,1001, 'Age', 'Age', 'number');
                """, [FormId, FormFieldId, Label, InputName, InputType])

    def insert_form_submit(FormSubmissionId, FormId, FormFieldId, Value, Date):
        connection.execute("""
                insert into [WixProj.FormSubmissions] (FormSubmissionId, FormId, FormFieldId, Value, Date)
                            VALUES (1, 1, 1001, 23, CURRENT_TIMESTAMP);
                """, [FormSubmissionId, FormId, FormFieldId, Value, Date])

    config_file = sys.argv[1]
    file = open(config_file)




