var getFormsList = function (formName, formFields){
    // stable connection
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./WixDatabase.db', sqlite3.OPEN_READWRITE,
    (err) => {
        if (err) {
        return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    // here we add the sql procedure
    var data = [];
    let sql1 = `SELECT f.formid,
                       f.formname,
                       count(DISTINCT formsubmissionid) cnt
                    FROM [WixProj.Forms] f
                        JOIN
                        [WixProj.FormSubmissions] fs ON f.formId = f.formId;`;
    db.each(sql1, (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        data.push(row);
    });;

    // close database
    db.close(
        (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Close the database connection.');
    });
    callback(data);
}
module.exports = getFormsList;