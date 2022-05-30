import { Request, Response } from "express";
import { FileNotFoundError } from "./errors/FileNotFoundError";

export class ErrorHandler {
    
        /**
        * Handles the error
        * @param error 
        */
        public static handleError(error : Error , req : Request, res : Response) {
          
            if(error instanceof(FileNotFoundError)){
                res.status(404).send({
                    "success" : false,
                    "status": "failed",
                    "message" : "File not found : " + error.message,
                    "code" : 404
                });
                return;
            }

            console.log(error);

            res.statusCode = 500;
            res.send({
                "success" : false,
                "status": "failed",
                "message": error.message,
                "code" : 500
            });

        }
}