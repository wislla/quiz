import pool from  '../database';


class Level {
    id: number;
    order: number;

    constructor( order: number) {
        this.order = order;
    }
    async create(): Promise<Level> {
        const sql = 'INSERT INTO niveis (ordem) VALUES($1) RETURNING *';
        const level = await pool.query(sql, [this.order]).then(res=> res.rows[0]);
        return level;
    }
    static async getLevelByid(id: number): Promise<Level> {
        const sql = 'SELECT * FROM niveis WHERE id = $1 ORDER BY id ASC';
         const result = await pool.query(sql, [id]).then(res=> res.rows[0]);
         console.log(result);
        return result;

    }
}
export default Level;