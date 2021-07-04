import { QueryResult } from 'pg';
import pool from  '../database';

class User {

    //id: number = 0;
    nome: string;
    sobrenome: string;
    nickname: string;
    senha: string;

    constructor(
        nome: string = '',
        sobrenome: string = '',
        nickname: string = '', 
        senha: string = ''
    ){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nickname = nickname;
        this.senha = senha;
    }

    async getAllUsers(): Promise<User[]> {
        const result: QueryResult = await pool.query('SELECT * FROM usuario ORDER BY id ASC');
        let allUsers: User [] = []; 

        if (result.rows){
            result.rows.forEach(user => {
                const userTemp : User = new User(
                    user.nome, 
                    user.sobrenome, 
                    user.nickname, 
                    user.senha
                );
                allUsers.push(userTemp);
            })
        }
        return allUsers;
    }

    async create(): Promise<User>{
        
        const sql = 'INSERT INTO usuario (nome, sobrenome, nickname, senha) VALUES($1, $2, $3, $4) RETURNING *';
        
        const values = [ 
            this.nome, 
            this.sobrenome, 
            this.nickname, 
            this.senha
        ];

        const {
            name, 
            sobrenome, 
            nickname, 
            senha
        } = await pool.query(sql, values).then(res=> res.rows[0]);

        const user = new User(
            name, 
            sobrenome, 
            nickname, 
            senha,
        );
        return user;
    }

}

export default User;