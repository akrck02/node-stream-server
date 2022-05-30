import { Request, Response } from "express";
import { Router } from "./Router";

const express = require("express");
const fs = require("fs");
const path = require("path");

export default class API {

    private static PORT = 8000;
    
    public static async start() {

        const app = express();
        const paths = await Router.start();

        for (const key in paths) {
            const callback = paths[key];
            app.get(Router.API + key + "/", (req: Request, res: Response) => {
                API.handleRequest(key,req,res,callback as any);
            })
              
        }
        
        app.listen(API.PORT,() => console.log(`Listening on port ${API.PORT}!`));
    }

     
    private static handleRequest(
        key : string,
        req : Request,
        res : Response,
        callback :  (req : Request, res : Response) => Promise<any> 
    ) {

        console.log("Streaming","Request: " + Router.API + key + "/");
        const promise = callback(req,res);

        promise.then((data)  => {
           console.log("OK.");
        })
        .catch((err: any) => {
            console.log("error",err);
            res.statusCode = 500;
            res.send({
                "success" : false,
                "status": "failed",
                "message": err.message,
                "code" : 500
            });
        });
    }
}
