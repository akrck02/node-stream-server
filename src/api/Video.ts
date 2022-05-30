import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export default class Video {

    public static async stream(file: string, req : Request, res : Response) {
        const range = req.headers.range;
        if (!range) {
            res.status(400).send("Requires Range header");
            return;
        }

        const videoSize = fs.statSync(file).size;

        const CHUNK_SIZE = 10 ** 6; // 1MB
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        const contentLength = end - start + 1

        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };

        res.writeHead(206, headers);
        const videoStream = fs.createReadStream(file, { start, end });
        videoStream.pipe(res);
    }


}