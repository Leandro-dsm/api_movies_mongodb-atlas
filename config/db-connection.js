import mongoose from "mongoose";

const dbUser = "leandrosueoka_db_user";
const dbPassword = "hffYd8Ha6QYJB1S0";


//User:leandrosueoka_db_user    Password:hffYd8Ha6QYJB1S0
//String de Conexão:mongodb+srv://leandrosueoka_db_user:<db_password>@cluster0.wlzobev.mongodb.net/api_movies_mongodb-atlas?retryWrites=true&w=majority&appName=Cluster0
const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.wlzobev.mongodb.net/api_movies_mongodb-atlas?retryWrites=true&w=majority&appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.")
    });
    connection.on("open", () =>{
        console.log("Conectando com o mongoDB com sucesso!");
    });
};
connect();
export default mongoose;