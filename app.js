import express from "express";
import { PORT } from "./env_variables/env.export.js";
import articleRoute from "./routes/article.route.js";

const app = express();
const port = PORT || 5000;

//route
app.use('/api/v1/articles',articleRoute);

app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})