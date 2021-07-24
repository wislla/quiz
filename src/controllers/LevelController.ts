import { Request, Response } from 'express';
import Level from '../models/Level';

export async function createLevel(request: Request, response: Response){
    const { order } = request.body;
    const level = new Level(order);
    const result = await level.create();
    response.status(200).json(result);
}

export async function getLevelById (request: Request, response: Response){
    const { id } = request.params;
    const result =  await Level.getLevelByid(Number(id));
    console.log(result);
    response.status(200).json(result);
    
}