var Sequelize = require('sequelize');
module.exports = function(connection, DataType){

	var product = connection.define('product', {
		p_id: {
            type:DataType.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
		p_name: Sequelize.STRING,
        pc_name: Sequelize.STRING,
        
	},

	{
		classMethods: {
				associate: function(models) {
		product.hasMany(models.category, {foreignKey: 'pc_name'})
  		}
		},
    freezeTableName: true,
});

	return product;
};