// models
const category = require('../../../models').category

class Update { 
    updateCategory(params, body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            category.update(
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