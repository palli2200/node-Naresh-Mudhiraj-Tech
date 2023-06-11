const express= require('express')
const app = express()  // application level 
const PORT = 3000;

app.use(express.json())// built in middlware 

// writing api 
// app.get('/persion', (req,res,next)=>{
//     let persion = {
//         name:"palli",
//         "addr":"Eluru"
//     }
//     res.send(persion)
// })

// get method with params 

// app.get('/persion/:id',(req,res,next)=>{
//     let _id=req.params.id
//     let persion_list = [
//         {"name":"palli", "addr":"eluru", "id":"1"},
//         {"name":"palli-1", "addr":"eluru-1", "id":"2"},
//         {"name":"palli-2", "addr":"eluru-2", "id":"1"}
//     ]
//     persion_list=persion_list.filter(x=>x.id==_id)
//     res.send(persion_list)
// })

// app.get('/persion',(req,res,next)=>{
//     let persion_list = [
//         {"name":"ravi", "addr":"eluru", "id":"1"},
//         {"name":"palli-1", "addr":"eluru-1", "id":"2"},
//         {"name":"palli", "addr":"eluru-1", "id":"2"},
//         {"name":"palli-2", "addr":"eluru-2", "id":"1"},
//         {"name":"palli-3", "addr":"eluru-3", "id":"2"},
//         {"name":"palli-4", "addr":"eluru-4", "id":"1"}
//     ]

//     // let _id=req.query.id;
    
//     // persion_list = persion_list.filter(x=>x.id==_id);
//     // res.send(persion_list)

//     let _query = req.query
//     persion_list = persion_list.filter(z=>z.id == _query.id & z.name == _query.name)
//     res.send(persion_list)

// })

// app.post('/persion',(req,res,next)=>{
//     let _body=req.body
//     let persion_listpost = [
//                 {"name":"ravi", "addr":"eluru", "id":1},
//                 {"name":"palli-1", "addr":"eluru-1", "id":"2"},
//                 {"name":"palli", "addr":"eluru-1", "id":"2"},
//                 {"name":"palli-2", "addr":"eluru-2", "id":"1"},
//                 {"name":"palli-3", "addr":"eluru-3", "id":"2"},
//                 {"name":"palli-4", "addr":"eluru-4", "id":"1"}
//             ];
//             // persion_listpost=persion_listpost.filter(x=>x.id == _body.id)
//             persion_listpost=persion_listpost.filter(x=>x.id == _body.id && x.name == _body.name)
//             res.send(persion_listpost)

// })

// app.put('/person',(req,res,next)=>{

//     let _body = req.body

//     let person_listput = [
//         {"name":"palli Naga", "addr":"eluru-3", "id":1},
//         {"name":"palli-4", "addr":"eluru-4", "id":2}
//     ]

//     let index = person_listput.findIndex(x=>x.id == _body.id)
//     if(index!=-1){
//         person_listput[index]=_body
//     }
//     res.send(person_listput)

// })

app.delete('/person',(req,res,next)=>{

    let _body=req.body
    let person_listDel = [
        {"name":"palli Naga", "addr":"eluru-3", "id":1},
        {"name":"palli-4", "addr":"eluru-4", "id":2}
    ]

    let index = person_listDel.findIndex(x=>x.id == _body.id)
    if(index!=-1){
        person_listDel.splice(index,1)
    }
    res.send(person_listDel)
})

app.listen(PORT,()=>{
    console.log("SERVER ON:"+PORT)
})

