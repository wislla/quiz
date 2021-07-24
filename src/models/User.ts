import { QueryResult } from 'pg';
import pool from  '../database';

class User {

    id: number;
    nome: string;
    sobrenome: string;
    nickname: string;
    senha: string;

    constructor(
        id: number = 0,
        nome: string = '',
        sobrenome: string = '',
        nickname: string = '', 
        senha: string = ''
    ){
        this.id = id;
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
                    user.id,
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

    static async getUserById(id: Number): Promise<User>{
        const sql = 'SELECT * FROM usuario WHERE id = $1 ORDER BY id ASC';
        return await pool.query(sql, [id]).then(res=> res.rows[0]);

    } 

    async createUser(): Promise<User>{

        const sql = 'INSERT INTO usuario (nome, sobrenome, nickname, senha) VALUES($1, $2, $3, $4) RETURNING *';
        
        const values = [ 
            this.nome, 
            this.sobrenome, 
            this.nickname, 
            this.senha
        ];

        const {
            id,
            nome, 
            sobrenome, 
            nickname, 
            senha
        } = await pool.query(sql, values).then(res=> res.rows[0]);

        const user = new User(
            id,
            nome, 
            sobrenome, 
            nickname, 
            senha,
        );
        return user;
    }

    async updateUser(id: number): Promise<number> {

        const sql = 'UPDATE usuario SET nome = $1, sobrenome = $2, nickname = $3, senha = $4 WHERE id = $5';
        
        const values = [ 
            this.nome, 
            this.sobrenome, 
            this.nickname, 
            this.senha,
            id
        ];

        const res = await pool.query(sql, values).then(res=> res.rowCount);
        return res;
    }

    static async  deleteUser (id: Number): Promise<number>{
        const sql = 'DELETE FROM usuario WHERE id = $1';
        const result = await pool.query(sql, [id]).then(res=> res.rowCount);
        return result;
    }
}

export default User;