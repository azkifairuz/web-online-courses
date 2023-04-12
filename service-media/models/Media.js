module.exports = (sequelize,DataTypes) => {
    const Media = sequelize.define('media', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
          },
          image: {
            type:DataTypes.STRING,
            allowNull:false
          },
          createdAt:{
            field: 'update_at',
            type:DataTypes.DATE,
            allowNull:false
          },
          updateAt:{
            field: 'update_at',
            type:DataTypes.DATE,
            allowNull:false
          }
        });
        return Media
    }