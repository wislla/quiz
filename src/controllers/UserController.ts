import { Request , Response } from 'express';
import User from '../models/User';

export async function  index (request: Request, response: Response){
    const users = new User();
    const allUsers: User[] = await users.getAllUsers();
    response.status(200).json(allUsers);
}

export async function  create (request: Request, response: Response){

    const {
        nome,
        sobrenome,
        nickname,
        senha,
    } = request.body;

    const user = new User(nome, sobrenome, nickname, senha);
    const result = await user.create();
    response.status(200).json(result);
}