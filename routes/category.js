var express = require('express');
var router = express.Router();
const {saveCat, updateCat, deleteCat}=require('../service/v1/category/category');

/* GET home page. */
router.get('/', function(req, res, next) {
    let roleData=req.session.roleData;
    res.render('category/index',{roleData:roleData});
  });


router.post('/save', async(req,res)=>{
    try
    {
        console.log('######### req #########', req.body);
        const saveCategoryResult = await saveCat(req.body);
        res.status(200).json({
            message: 'Data Saved Successfully!!',
            result: saveCategoryResult,
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
        const updateCategoryResult = await updateCat(req.body);
        res.status(200).json({
            message: 'Data Updated Successfully!!',
            result: updateCategoryResult,
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
        const deleteCategoryResult = await deleteCat(req.body);
        res.status(200).json({
            message: 'Data Deleted Successfully!!',
            result: deleteCategoryResult,
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




module.exports = router;

