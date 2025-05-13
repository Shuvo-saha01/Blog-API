import express from "express";
import { PORT } from "./env_variables/env.export.js";
import articleRoute from "./routes/article.route.js";
import errorHandler from "./middleware/error.middleware.js";
import { connectToDatabase } from "./database/monodb.js";

const app = express();
const port = PORT || 5000;

//middleware
app.use(express.json());
app.use(errorHandler);

//routes
app.use('/api/v1/articles',articleRoute);


app.listen(port, async() => {
    console.log(`server is running in port ${port}`)
    await connectToDatabase();
})