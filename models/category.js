var Sequelize = require('sequelize');
module.exports = function(connection, DataType){

	let category = connection.define('category', {
		c_id: {
            type:DataType.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
		c_name:{
			type: Sequelize.STRING,
		}
	},

	{
		classMethods: {
					
		},
    freezeTableName: true,
});

	return category;
};
