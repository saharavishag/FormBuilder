import sqlite3
import sys
import atexit
import os

def getFormSubmissions(form_id):

    conn = sqlite3.connect('WixDatabase.db')
    cursor = conn.cursor()

    cursor.execute("""
                    SELECT f.formname,
                        fs.UserName,
                        ff.inputname,
                        fs.value,
                        fs.date
                    FROM [WixProj.Forms] f
                        JOIN
                        [WixProj.FormSubmissions] fs ON f.formid = fs.formid
                        JOIN
                        [WixProj.FormsFields] ff ON fs.formfieldid = ff.formfieldid
                    WHERE f.formid = ?;""",[form_id])

    data = cursor.fetchall()

    for row in data:
        print(row[0], row[1], row[2], row[3], row[4])

    conn.commit()                
    conn.close()

# getFormSubmissions(1)