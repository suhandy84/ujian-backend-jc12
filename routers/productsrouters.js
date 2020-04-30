const express=require('express')
const {ProductControllers}=require('./../controllers')
const router=express.Router()

router.get('/allproduct',ProductControllers.allproducts)
router.post('/addproduct',ProductControllers.addproducts)
router.delete('/deleteproduct/:id',ProductControllers.deleteproducts)
router.put('/editproduct/:id',ProductControllers.editproducts)



module.exports=router