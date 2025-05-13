import { Router } from "express";
import { deleteArticle, getAllArticles, getArticle, postArticle, updateArticle } from "../controller/article.controller.js";

const articleRoute = Router();


//ROUTE: /api/v1/articles/
//METHOD: GET
//OBJECTIVE: to get all articles
articleRoute.get("/", getAllArticles);

//ROUTE: /api/v1/articles/:id
//METHOD: GET
//OBJECTIVE: to get article by id
articleRoute.get("/:id", getArticle);

//ROUTE: /api/v1/articles/
//METHOD: POST
//OBJECTIVE: to publish a article
articleRoute.post('/', postArticle);

//ROUTE: /api/v1/articles/:id
//METHOD: PUT
//OBJECTIVE: to update an article
articleRoute.put("/:id", updateArticle);

//ROUTE: /api/v1/articles/:id
//METHOD: DELETE
//OBJECTIVE: to delete an article
articleRoute.delete("/:id", deleteArticle);







export default articleRoute;