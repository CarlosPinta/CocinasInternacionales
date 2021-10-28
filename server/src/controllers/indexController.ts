import {Request, Response} from 'express';

class IndexController{

    public index(req:Request,res: Response){
        res.json({text:"Esto es un controlador de index"}); 
    } 
}
export const indexController=new IndexController();