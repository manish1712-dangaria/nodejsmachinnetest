// models
const models = require('../../../models');
const categorydb = models.category;

class Update { 
    updateCategory(params, body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            categorydb.update(
                { 
                 c_name :body.cname,
                }, 
                {
                where: {
                  c_id: params
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