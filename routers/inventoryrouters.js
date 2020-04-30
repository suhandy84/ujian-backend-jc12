const express=require('express')
const {InventoryControllers}=require('./../controllers')
const router=express.Router()

router.get('/allstok',InventoryControllers.allstok)
router.post('/addstok',InventoryControllers.addstok)
router.delete('/deletestok/:id',InventoryControllers.deletestok)
router.put('/editstok/:id',InventoryControllers.editstok)


module.exports=router