// models
const product = require('../../../models').product

class Find { 
    findAll(cOffset){
        return new Promise((resolve, reject) => {  
            product.findAll({
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