//models
const category =require('../../../models').category
class Save { 
    saveCategory(body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            category.create({
                c_name :body.cname,
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