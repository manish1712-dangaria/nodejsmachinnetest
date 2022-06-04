// models
const models = require('../../../models');
const productb = models.product;

class Update { 
    updateProduct(params, body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            productb.update(
                { 
                 p_name :body.pname,
                 pc_name: body.pcname,
                }, 
                {
                where: {
                  p_id: params
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
    UpdateClass: Update,
};