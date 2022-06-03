var express = require('express');
var router = express.Router();
const {findPro, savePro, updatePro, deletePro}=require('../service/v1/product/product');

/* GET home page. */
router.get('/', function(req, res, next) {
    let roleData=req.session.roleData;
    res.render('product/product',{roleData:roleData});
  });


router.post('/save', async(req,res)=>{
    try
    {
        console.log('######### req #########', req.body);
        const saveProductResult = await savePro(req.body);
        res.status(200).json({
            message: 'Data Saved Successfully!!',
            result: saveProductResult,
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(404).json({
            message: 'Req.body is Empty',
        })
    }  
});

router.post('/update/:id', async(req,res)=>{
    try
    {
        console.log('######### req #########', req.body);
        const updateProductResult = await updatePro(req.body);
        res.status(200).json({
            message: 'Data Updated Successfully!!',
            result: updateProductResult,
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(404).json({
            message: 'Id Not Found',
        })
    }  
});
router.post('/delete/:id', async(req,res)=>{
    try
    {
        console.log('######### req #########', req.body);
        const deleteProductResult = await deletePro(req.body);
        res.status(200).json({
            message: 'Data Deleted Successfully!!',
            result: deleteProductResult,
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(404).json({
            message: 'Id Not Found',
        })
    }  
});

router.post('/fetchNextData/:offset', async(req, res, next) =>{
    let offset = parseInt(req.params.offset);
    const data = await findPro(offset);
    res.json({ _data: data, cOffset: offset, user: req.session.user });
});

router.post('/fetchPreviousData/:offset', async(req, res, next) =>{
    let offset = parseInt(req.params.offset);
    const data = await findPro(offset);
    res.json({ _data: data, cOffset: offset, user: req.session.user });
});






module.exports = router;
