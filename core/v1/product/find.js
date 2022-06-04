// models
const models = require('../../../models')
const productb = models.product;

class Find { 
    findAll(cOffset){
        return new Promise((resolve, reject) => {  
            productb.findAll({
                order: [['id', 'DESC']],
				limit: 10,
				offset: parseInt(cOffset),
				raw: true
            }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            });
        });
    }
}

module.exports = {
    FindClass: Find,
};