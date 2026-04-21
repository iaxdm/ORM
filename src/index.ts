import "reflect-metadata";
import express, { Application } from "express";
import { AppDataSource } from "./data-source";
import { userRoutes } from "./routes/userRoutes";
import { postRoutes } from "./routes/postRoutes";
import { errorMiddleWare } from "./middlewares/erroMiddleware";

const app: Application = express();
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use(errorMiddleWare);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado!");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar no banco: ", error));

// async function main() {
//   try {
//     await AppDataSource.initialize();
//     console.log("Banco conectado!");

//     const userRepository = AppDataSource.getRepository(User);

//     const newUser = userRepository.create({
//       firstName: "Marco",
//       lastName: "Hansen",
//     });
//     await userRepository.save(newUser);
//     const allUsers = await userRepository.find();
//     console.log("Usuários cadastrados: ", allUsers);
//   } catch (error) {
//     console.log("Erro:", error);
//   }
// }
// main();
