import express, { json } from 'express';
import "dotenv/config";
import routes from './routes/index';
import './database/index';

const app = express();  
app.use(express.json());

app.use("/api", routes );

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port 3000');
})