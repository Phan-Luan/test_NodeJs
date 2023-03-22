import express from "express";
import { add, getAll, getOne, remove, update } from "../controllers/product";
const route = express.Router();

route.get("/products", getAll);
route.get("/products/:id", getOne);
route.post("/products", add);
route.delete("/products/:id", remove);
route.put("/products/:id", update);

export default route;
