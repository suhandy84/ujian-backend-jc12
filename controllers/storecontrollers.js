const { db } = require('./../connection')

module.exports={
    allstore: (req, res) => {
        console.log(req)
        db.query('select * from store', (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(res)
            return res.status(200).send(result)
        })
    },
    addstore: (req,res) => {
        var sql = `insert into store set ?`
        db.query(sql, req.body, (err, result) => {
            if (err) res.status(500).send(err)
            // res.status(200).send(result)
            sql = `select * from store`
            db.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result1)
            })
        })
    },
    deletestore:(req,res)=>{
        var sql=`delete from store where id=${req.params.id}`
        db.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            db.query('select * from store', (err, result1) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    },
    editstore:(req,res)=>{
        var sql=`update store set ? where id=${req.params.id}`
        db.query(sql, req.body, (err, result) => {
            if (err) return res.status(500).send(err)
            db.query('select * from store', (err, result1) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    }
}