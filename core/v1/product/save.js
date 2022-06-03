//models
const product =require('../../../models').product
class Save { 
    saveProduct(body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            product.create({
                p_name :body.pname,
                pc_name : body.pcname,
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                // console.error(err);
                reject(err);
            });
        });
    }
}

module.exports = {
    SaveClass: Save,
};