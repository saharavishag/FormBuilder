//var saveForm = function (formName, formFields){
    // stable connection
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./WixDatabase.db');
    console.log("connected...");

    //here we add the sql procedure
    let sql1 = `SELECT MAX(FormId)+1 formid
                FROM [WixProj.Forms];`;
    var formId = db.exec(sql1);   
    console.log(formId);

    let sql2 = `insert into [WixProj.Forms] (FormId, FormName) VALUES (?, ?);`
    db.run(sql2, [formId, formName]);
    
    let sql3 = `insert into [WixProj.FormsFields] (FormId, FormFieldId, Label, InputName, InputType)
                VALUES (?, ?, ?, ?, ?);`;
    let formFieldId = 1;
    for(let formField of formFields){
        this.db.run(sql3, [formId, 
                    formId * 1000 + formFieldId, 
                    formField.label,
                    formField.inputName,
                    formField.inputType]);
        formFieldId++;
    }
    // close database
    db.close(
        (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Close the database connection.');
    });
//}
//saveForm("","");
//module.exports = saveForm;