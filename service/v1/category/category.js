
const save = require('../../../core/v1/category/save');
const update = require('../../../core/v1/category/update');
const deleted = require('../../../core/v1/category/delete');

const {saveCategory} = new save.SaveClass();
const {updateCategory} = new update.UpdateClass();
const {deleteCategory} = new deleted.DeleteClass();


const saveCat = async(body)=>{
    const result = await saveCategory(body);
    return result;
}

const updateCat = async(params, body)=>{
    const result = await updateCategory(params, body);
    return result;
}

const deleteCat = async(id)=>{
    const result = await deleteCategory(id);
    return result;
}

module.exports =  {saveCat, updateCat, deleteCat};