import {json, Request, Response} from 'express';
import db from '../database';

class ClientController{

    public async list(req:Request,res: Response){
        const clients=await db.query("SELECT * FROM cliente");
        res.json(clients);
    }

    public async getOne(req:Request,res: Response){
        const {id}=req.params;
        const clients=await db.query('SELECT * FROM cliente WHERE CODIGOCLIENTE = ?',[id]);
        if(clients.length > 0)
        {
            return res.json(clients[0]);
        }else{
            res.status(404).json({text:"Cliente no encontrado"});
        }
    }
    public async create(req:Request,res: Response){
        await db.query("INSERT INTO cliente set ?",[req.body]);
        res.json({message:"Juego Guardado"});
    }

    public async delete(req:Request,res: Response){
        const{id}=req.params;
        await db.query("DELETE FROM cliente WHERE CODIGOCLIENTE= ?", [id]);
        res.json({name:"El cliente fue eliminado con exito"});
    }
    public async update(req:Request, res:Response)
    {
        const{id}=req.params;
        await db.query("UPDATE cliente set ? WHERE CODIGOCLIENTE= ?",[req.body,id]);
        res.json({name:"El cliente fue modificado con exitoJ con exito"});
    }
}
export const clientController=new ClientController();