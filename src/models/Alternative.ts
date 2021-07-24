import pool from  '../database';

class Alternative {

    id: Number;
    question_id : Number;
    description: string;
    isRight: boolean;

    constructor( description: string, isRight: boolean = false) {
        this.description = description;
        this.isRight = isRight;
    }

    async create(question_id: Number): Promise<Number> {

        this.question_id = question_id;

        const sql = 'INSERT INTO alternativas (id_pergunta, descricao, correta) VALUES ($1, $2, $3) RETURNING id';
        
        const values = [
            this.question_id,
            this.description,
            this.isRight,
        ]
        const {idQuestion} = await pool.query(sql, values).then(res=> res.rows[0]);
        return idQuestion;
    }

}

export default Alternative;