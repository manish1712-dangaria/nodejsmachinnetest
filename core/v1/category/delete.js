// models
const models = require('../../../models')
const categorydb = models.category;

class Delete { 
    deleteCategory(id){
        // console.log(body);
        return new Promise((resolve, reject) => {
            categorydb.destroy({
                where: {
                  c_id: id
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