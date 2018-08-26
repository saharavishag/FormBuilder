import sqlite3
import sys
import atexit
import os

def save_form(form_name, form_fields):
    conn = sqlite3.connect('WixDatabase.db')
    cursor = conn.cursor()

    cursor.execute("SELECT MAX(FormId)+1 formid FROM [WixProj.Forms];")
    item = cursor.fetchone()
    formid = item[0]

    # print(formid)

    def insert_form(formidparam, formnameparam):
        cursor.execute("""INSERT INTO [WixProj.Forms] (FormId, FormName) VALUES (?, ?);""", [formidparam, formnameparam])

    insert_form(formid, form_name)

    def insert_form_field(FormId, FormFieldId, Label, InputName, InputType):
        cursor.execute("""
                INSERT INTO [WixProj.FormsFields] (FormId, FormFieldId, Label, InputName, InputType)
                            VALUES (?,?,?,?,?);
                """, [FormId, FormFieldId, Label, InputName, InputType])

    formFieldId = 1
    for field in form_fields:
        insert_form_field(formid, formid*1000 + formFieldId, field[0], field[1], field[2])          
        formFieldId += 1

    conn.commit()                
    conn.close()

save_form("test3",[["age", "age", "number"],["name", "name", "text"]])