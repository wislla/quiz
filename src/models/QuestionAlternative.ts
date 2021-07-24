import pool from  '../database';
import Alternative from './Alternative';
import Question from './Question';

type resultQuestionId = {
    id: Number,
}

class QuestionAlternative {

    question: Question;
    alternatives: Alternative[];

    constructor(question: Question, alternatives: Alternative[]) {
        this.question = question;
        this.alternatives = alternatives;
    }

    async create(): Promise<any>{
        const  id: Number = await this.question.create();

        this.alternatives.forEach( async (alternative: Alternative) => {

             await alternative.create(id);
            
        })
        return {"msg": "salvo"};
    }
}

export default QuestionAlternative;