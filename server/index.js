import { execSync } from 'child_process';
import express from 'express'

const app = express();

app.get('/api', (req, res)=>{
    return res.send(req.query);
});

app.get('/vulnerable', (req, res)=>{
    const userName = req.query.name;

    try {
        const result = execSync(userName, {encoding: 'utf-8'});
        return res.send(result);
    } catch (error) {
        return res.send(error);
    }
});

app.listen(3000, ()=>{
    console.log('Running on port 3000');
});