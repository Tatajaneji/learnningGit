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
    if (name && price) { // สร้างผลิตภัณฑ์ใหม่
        const newItem = { id: items.length+1,name, price }; // เพิ่ม id product
        items.push(newItem); // ส่งกลับข้อมูลที่ได้รับจากคำขอ POST
        res.status(201).json({
            message: 'Product created',
            data: newItem
        });
    } else {
        res.status(400).json({ message: 'Missing name or price' });
    }
});
app.put('/api/items/:id',(req,res) => {
    const {id}=req.params; //รับ id จาก  url
    const {name ,price} = req.body; //รับข้อมูลที่ต้องการอัพเดต
    const item = items.find(item=>item.id=== Number(id)); // หาผลิตภัณฑ์ที่มี id ตรงกัน // แปลง id number
    if (!item){
        return res.status(404).json({message: 'Product not found'});
    }
    //update data product
    if (name) item.name = name;
    if (price) item.price = price;

    res.status(200).json({
        message: 'Product update',
        data: item
    });
})


app.listen(3000,()=>{
    console.log('Server running on port 3000');
});