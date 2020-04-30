const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const cors=require('cors')



const PORT = 5000
app.use(cors())//izin ke frontend apapun buat akses backend
app.use(bodyparser.json())//buat user kirim data ke server
app.use(bodyparser.urlencoded({ extended: false }))//buat user kirim data ke server
app.use(express.static('public'))


app.get('/',(req,res)=>{
    return res.send('<h1>Ujian Backend JC12</h1>')
})

const {StoreRouters,ProductRouters,InventoryRouters}=require('./routers')

app.use('/store',StoreRouters)
app.use('/product',ProductRouters)
app.use('/stok',InventoryRouters)



app.listen(PORT, () => console.log('server jalan di ' + PORT))