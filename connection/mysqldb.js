const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'handy',
    password: 'suhand13712',
    database: 'ujianbackend_jc12',
    port: '3306'
})

// const db = mysql.createConnection({
//     host: 'db4free.net',
//     user: 'handy84',
//     password: 'zG75RCMC5g@BFGc',
//     database: 'hokihokibento',
//     port: '3306'
// })

db.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log('connect sudah')
})

module.exports=db