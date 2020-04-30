const { db } = require('./../connection')

module.exports={
    addstok : (req,res) => {
        var sql = `insert into inventory set ?`
        db.query(sql, req.body, (err, result) => {
            if (err) res.status(500).send(err)
            // res.status(200).send(result)
            sql = `select i.id, p.nama as Product, s.branch_name as BranchName, i.inventory as Stock from inventory i 
                    join product p on i.id_product = p.id 
                    join store s on i.id_store = s.id`
            db.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result1)
            })
        })
    },
    allstok : (req,res) => {
        var sql= `select i.id, p.nama as Product, s.branch_name as BranchName, i.inventory as Stock from inventory i 
                    join product p on i.id_product = p.id 
                    join store s on i.id_store = s.id`
        db.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(res)
            return res.status(200).send(result)
        })
    },
    deletestok : (req,res) => {
        var sql=`delete from inventory where id=${req.params.id}`
        db.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            sql = `select i.id, p.nama as Product, s.branch_name as BranchName, i.inventory as Stock from inventory i 
                    join product p on i.id_product = p.id 
                    join store s on i.id_store = s.id`
            db.query(sql, (err, result1) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    },
    editstok : (req,res) => {
        var sql=`update inventory set ? where id=${req.params.id}`
        db.query(sql, req.body, (err, result) => {
            if (err) return res.status(500).send(err)
            sql = `select i.id, p.nama as Product, s.branch_name as BranchName, i.inventory as Stock from inventory i 
                    join product p on i.id_product = p.id 
                    join store s on i.id_store = s.id`
            db.query(sql, (err, result1) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    }
}