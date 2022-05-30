import { Request, Response } from "express";
import { ErrorHandler } from "./ErrorHandler";
import WebServer from "./WebServer";

const express = require("express");
const fs = require("fs");
const path = require("path");

export default class API {

    private static PORT = 8000;
    
    public static async start() {

        const app = express();

        // Index file
        app.get("/", (req: Request, res: Response) => API.handleRequest("/",req,res,WebServer.index as any));
        
        // Serve files
        app.get("/*", (req: Request, res: Response) => API.handleRequest(req.originalUrl,req,res,((req : Request,res : Response) => WebServer.serve(req,res,req.originalUrl)) as any));

        // Listen on port
        app.listen(API.PORT,() => console.log(`Listening on port ${API.PORT}!`));
    }

    

    /**
     * Handle the requests to the API
     * @param key 
     * @param req 
     * @param res 
     * @param callback 
     */
    private static handleRequest(
        key : string,
        req : Request,
        res : Response,
        callback :  (req : Request, res : Response) => Promise<any> 
    ) {

        console.log("Streaming","Request: " + key + "/");
        const promise = callback(req,res);

        promise.then((data)  => {
           console.log("OK.");
        })
        .catch((err: any) => ErrorHandler.handleError(err,req,res));
    }
}
