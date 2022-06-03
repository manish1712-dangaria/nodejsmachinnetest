let Sequelize = require('sequelize');

module.exports = function(connection, DataType){

	let product = connection.define('product', {
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
    // associations can be defined here
   			lesseeName.hasMany(models.c_id, {foreignKey: 'pc_name'})
  		}
		},
    freezeTableName: true,
});

	return product;
};