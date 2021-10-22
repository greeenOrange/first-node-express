const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
app.get('/', (req, res)=>{
    res.send('wow! I am excited to learn Node and Express')
})

const users = [{
    "id": 1,
    "first_name": "Vernon",
    "email": "vregitz0@samsung.com",
    "gender": "Male"
  }, {
    "id": 2,
    "first_name": "Dayna",
    "email": "dmatzen1@yellowbook.com",
    "gender": "Male"
  }, {
    "id": 3,
    "first_name": "Durante",
    "email": "dtrendle2@posterous.com",
    "gender": "Agender"
  }, {
    "id": 4,
    "first_name": "Mala",
    "email": "mbacks3@dmoz.org",
    "gender": "Polygender"
  }, {
    "id": 5,
    "first_name": "Carmelita",
    "email": "cnewarte4@paginegialle.it",
    "gender": "Agender"
  }, {
    "id": 6,
    "first_name": "Nathaniel",
    "email": "nbeckerleg5@princeton.edu",
    "gender": "Non-binary"
  }, {
    "id": 7,
    "first_name": "Sibyl",
    "email": "stinan6@cdc.gov",
    "gender": "Genderqueer"
  }, {
    "id": 8,
    "first_name": "Tobiah",
    "email": "tjanse7@multiply.com",
    "gender": "Male"
  }, {
    "id": 9,
    "first_name": "Pooh",
    "email": "pmayward8@bizjournals.com",
    "gender": "Genderqueer"
  }, {
    "id": 10,
    "first_name": "Roderigo",
    "email": "rjurkiewicz9@purevolume.com",
    "gender": "Non-binary"
  }]

app.get('/', (req, res) =>{
    res.send('Hi Node This is second Node I can win');
});
app.get('/users',(req, res) =>{
    res.send(users)
});
app.get('/users/:id',(req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.listen(port, ()=>{
    console.log('list to port', port);
})
//app.METHOD
app.post('/users',(req,res)=>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser)
    console.log('Hello node post', req.body);
    // res.send('inside')
    res.json(newUser)
})