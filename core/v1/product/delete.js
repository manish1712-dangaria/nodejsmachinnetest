// models
const models = require('../../../models')
const productb = models.product;

class Delete { 
    deleteProduct(id){
        // console.log(body);
        return new Promise((resolve, reject) => {
            productb.destroy({
                where: {
                  p_id: id
                }
              }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                // console.error(err);
                reject(err)
            });
        });
    }
}

module.exports = {
    DeleteClass: Delete,
};