import { QueryResult } from 'pg';
import { Request , Response } from 'express';
import User from '../models/User';
import pool from  '../database';


export async function  index (request: Request, response: Response){
    const user: QueryResult = await pool.query('SELECT * FROM usuario ORDER BY id ASC');
    await pool.end();
    response.status(200).json(user.rows);
}

export async function  create (request: Request, response: Response){
    //let useri: User = new User();
    const {
        nome,
        sobrenome,
        nickname,
        senha,
    } = request.body;

    const text = 'INSERT INTO usuario (nome, sobrenome, nickname, senha) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [ nome, sobrenome, nickname, senha];

    pool.query(text, values, (err, res) => {
    if (err) {
        console.log(err.stack)
        response.status(200).json(err.stack);
    } else {
        console.log(res.rows[0])
        response.status(200).json(res.rows[0]);
    }
    });


    // const user: QueryResult = await pool.query('INSERT INTO usuario (nome, sobrenome, nickname, senha) VALUES ($1)');
    // await pool.end();
}