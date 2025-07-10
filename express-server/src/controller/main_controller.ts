import { Request, Response } from 'express';


export const mainController = (req:Request, res:Response) => {

    res.status(200).send('WELCOME! This is the main route of the application.');
}