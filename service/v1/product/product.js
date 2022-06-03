
const find = require('../../../core/v1/product/find');
const save = require('../../../core/v1/product/save');
const update = require('../../../core/v1/product/update');
const deleted = require('../../../core/v1/product/delete');

const {findAll} = new find.FindClass();
const {saveProduct} = new save.SaveClass();
const {updateProduct} = new update.UpdateClass();
const {deleteProduct} = new deleted.DeleteClass();

const findPro = async()=>{
    const result = await findAll(offset);
    return result;
}

const savePro = async(body)=>{
    const result = await saveProduct(body);
    return result;
}

const updatePro = async(params, body)=>{
    const result = await updateProduct(params, body);
    return result;
}

const deletePro = async(id)=>{
    const result = await deleteProduct(id);
    return result;
}

module.exports =  {findPro, savePro, updatePro, deletePro};