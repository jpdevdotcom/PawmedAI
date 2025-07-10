
import { Request, Response, NextFunction } from 'express';


export const register = (req:Request, res:Response) => { 
    
    res.status(200).send('Welcome to the registration page!');
}

export const login = (req:Request, res:Response) => {
    
    res.status(200).send('Welcome to the login page!');
}