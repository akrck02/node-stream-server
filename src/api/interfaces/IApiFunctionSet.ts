import { Request, Response } from "express";

export default interface IApiFunctionSet {
    [key: string]: (req: Request, res: Response) => Promise<any>;
}