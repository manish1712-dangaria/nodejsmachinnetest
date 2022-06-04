//models
const models =require('../../../models')
const productb = models.product;
class Save { 
    saveProduct(body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            productb.create({
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