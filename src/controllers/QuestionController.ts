import { Request , Response } from 'express';
import Alternative from '../models/Alternative';
import Question from '../models/Question';
import QuestionAlternative from '../models/QuestionAlternative';

export async function  create (request: Request, response: Response){

    const {user_id, nivel_id, description, alternatives} = request.body;

    //const question = new Question(user_id, nivel_id, description);
    const a = alternatives.map((alternative: Alternative) =>{
        return new Alternative(alternative.description, alternative.isRight);
    })
    const questionAlternative = new QuestionAlternative(
        new Question(user_id, nivel_id, description), a
        );

        const result = await questionAlternative.create();
 
    //const result = await question.create(1);
    response.status(200).json(result);
}