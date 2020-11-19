const mongoose=require('mongoose');
const Product=require('./models/product');
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("MONGO CONNECTION OPEN");
})
.catch(err=>{
    console.log('MONGO CONNECTION ERROR');
})

const seedProducts=[
    {
        name: 'Apple',
        price: 12.1,
        category: 'fruit'
    },
    {
        name: 'Banana',
        price: 10.1,
        category: 'fruit'
    },
    {
        name: 'Carrot',
        price: 12.19,
        category: 'vegetable'
    },
    {
        name: 'Bread',
        price: 10.1,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})