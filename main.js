const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', async (req, res, err) => {
	res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
});