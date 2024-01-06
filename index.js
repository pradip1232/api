import express, { Router, json } from 'express';
import serverless from 'serverless-http';
const app = express();
const router = Router();
require('dotenv').config();

app.use(json());

router.get('/webhook', (req, res) => {
    console.log('Hello, this is the webhook URL');
    res.sendStatus(200);
});

// Other routes can be defined here using router

app.use('/.netlify/functions/api', router);

// Use a dynamic port or a default value
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

export const handler = serverless(app);
