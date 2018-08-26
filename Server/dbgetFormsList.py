import sqlite3
import sys
import atexit
import os

def getFormsList():

    conn = sqlite3.connect('WixDatabase.db')
    cursor = conn.cursor()

    cursor.execute("""SELECT f.formid,
                            f.formname,
                            count(formsubmissionid) cnt
                        FROM [WixProj.Forms] f
                            LEFT OUTER JOIN
                            [WixProj.FormSubmissions] fs ON f.formId = fs.formId
                        GROUP BY f.formid,
                                f.formname;""")

    data = cursor.fetchall()

    for row in data:
        print(row[0], row[1], row[2])

    conn.commit()                
    conn.close()