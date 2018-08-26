import sqlite3
import sys
import atexit
import os

def getForm(form_id):

    conn = sqlite3.connect('WixDatabase.db')
    cursor = conn.cursor()

    cursor.execute("""SELECT ff.formid,
                            f.formName,
                            ff.label,
                            ff.inputname,
                            ff.inputtype
                        FROM [WixProj.Forms] f
                            JOIN
                            [WixProj.FormsFields] ff ON f.formId = ff.formId
                        WHERE f.formid = ?;""",[form_id])
    data = cursor.fetchall()

    for row in data:
        print(row[0], row[1], row[2], row[3],row[4])

    conn.commit()                
    conn.close()

#getForm(1)