import { DataTypes } from "sequelize";
import connection from "./index.js";

const userModel = connection.define("users",{

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },

    name : {
        type: DataTypes.STRING,
        allowNull: false,

        get(){
           return this.getDataValue("name")+ " Welcome"
        }
    },

    location :{
        type: DataTypes.STRING,
        allowNull: false,

        set(value){
            this.setDataValue("location", value+ ",Nepal")
        }

    },

    email : {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default userModel