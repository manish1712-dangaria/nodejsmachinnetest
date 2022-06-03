// models
const product = require('../../../models').product

class Delete { 
    deleteProduct(id){
        // console.log(body);
        return new Promise((resolve, reject) => {
            product.destroy({
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