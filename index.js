const express = require('express');
const app = express();

app.use(express.json());

let items = [];

app.get('/api/items',(req ,res) =>{
     res.json({
        message : "Product list",
        data: items
    });
});

app.post('/api/items',(req,res) =>{
    const {name,price} = req.body; //รับข้อมูลจาก ฺbody ที่ส่งมา
    if (name && price) {
        // สร้างผลิตภัณฑ์ใหม่
        const newItem = { name, price };
        // เพิ่มผลิตภัณฑ์ใหม่ลงในอาร์เรย์ items
        items.push(newItem);
        // ส่งกลับข้อมูลที่ได้รับจากคำขอ POST
        res.status(201).json({
            message: 'Product created',
            data: newItem
        });
    } else {
        res.status(400).json({ message: 'Missing name or price' });
    }
});


app.listen(3000,()=>{
    console.log('Server running on port 3000');
});