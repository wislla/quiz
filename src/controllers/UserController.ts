import { Request , Response } from 'express';
import User from '../models/User';

export async function  index (request: Request, response: Response){
    const users = new User();
    const allUsers: User[] = await users.getAllUsers();
    response.status(200).json(allUsers);
}

export async function  findById (request: Request, response: Response){
    const id = Number(request.params.id);
    const user: User = await User.getUserById(id);
    response.status(200).json(user);
}

export async function  create (request: Request, response: Response){

    const {
        nome,
        sobrenome,
        nickname,
        senha,
    } = request.body;

    const user = new User(0,nome, sobrenome, nickname, senha);
    const result = await user.createUser();
    response.status(200).json(result);
}

export async function update (request: Request, response: Response){

    const {
        nome,
        sobrenome,
        nickname,
        senha,
    } = request.body;
    const id = Number(request.params.id);

    const user = new User(0,nome, sobrenome, nickname, senha);
    const result = await user.updateUser(id);
    response.status(200).json(result);

}

export async function deleteUser (request: Request, response: Response){
    const id = Number(request.params.id);
    const result = await User.deleteUser(id);
    response.status(200).json(result);

}