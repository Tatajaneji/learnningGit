const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/items',(req ,res) =>{
    res.send('Product all');
});

app.listen(3000,()=>{
    console.log('Server running on port 3000');
});