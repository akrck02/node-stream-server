import { Request, Response } from "express";
import path from "path";

export default class WebServer {
    public static async index(req : Request, res : Response){
        res.sendFile(path.resolve("web/index.html"))
    }
}