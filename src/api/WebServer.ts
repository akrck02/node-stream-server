import { Request, Response } from "express";
import path from "path";
import { FileFormatUtils } from "../utils/FileFormats";
import { FileNotFoundError } from "./errors/FileNotFoundError";
import Video from "./Video";
import fs from "fs";

export default class WebServer {
    
    /**
     * Serves the index.html file
     * @param req 
     * @param res 
     */
    public static async index(req : Request, res : Response){
        res.sendFile(path.resolve("web/index.html"))
    }

    /**
     * Serves the files in the web folder
     */
    public static async serve( req: Request, res : Response ,file : string ) {

        // Get the relative path
        file = path.resolve("web/" + file);

        // If the file is not found, throw an error
        if(!fs.existsSync(file)){
            throw new FileNotFoundError(file);
        }


        //if isDirectory
        if(fs.lstatSync(file).isDirectory()){
            res.sendFile(path.resolve("web/index.html"));
            return;
        }

        //get the file extension
        const ext = file.split(".").pop();

        if(!ext) {
            throw new FileNotFoundError("No file extension found.");
        }

        //get the file type
        const fileType = FileFormatUtils.getFileFormat(ext);
        const type = FileFormatUtils.getMimeType(fileType);

        if(FileFormatUtils.isVideo(fileType)) {
            return Video.stream(file,req,res);
            return;
        }

        


    }
}