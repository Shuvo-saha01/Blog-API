import { Router } from "express";

const articleRoute = Router();


//ROUTE: /api/v1/articles/
//METHOD: GET
//OBJECTIVE: to get all articles
articleRoute.get("/", );

//ROUTE: /api/v1/articles/:id
//METHOD: GET
//OBJECTIVE: to get article by id
articleRoute.get("/:id", );

//ROUTE: /api/v1/articles/
//METHOD: POST
//OBJECTIVE: to publish a article
articleRoute.post('/', );

//ROUTE: /api/v1/articles/:id
//METHOD: PUT
//OBJECTIVE: to update an article
articleRoute.put("/:id", );

//ROUTE: /api/v1/articles/:id
//METHOD: DELETE
//OBJECTIVE: to delete an article
articleRoute.delete("/:id", );



export default articleRoute;