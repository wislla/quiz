import pool from  '../database';

class Question {
    id: number;
    user_id: number;
    nivel_id: number;
    description: string;
    active: boolean;

    constructor( user_id: number, nivel_id: number, description: string, active: boolean = false){
        this.nivel_id = nivel_id;
        this.user_id = user_id;
        this.description = description;
        this.active = active;
    }

    //const ong_id = request.headers.authorization;
    async create(): Promise<Number> {
        const sql = 'INSERT INTO perguntas ("id_usuario", "id_nivel", "descricao") VALUES ($1, $2, $3) RETURNING id';
        const values = [
            this.user_id,
            this.nivel_id,
            this.description,
        ]

        const { id } = await pool.query(sql, values).then(res=> res.rows[0]);
        return id;
    }
}

export default Question;