import { app } from "./app.js";
import { port } from "./constants.js";
import { connectDB } from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`Server listening at ${port}`));
    app.on("error", (error) => {
      console.error("Error : ", error);
      throw error;
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed! ", error);
  });
