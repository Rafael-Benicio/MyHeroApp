const express=require('express')
const routes=require('./routes')
const cors=require('cors')
const app=express()


app.use(cors())
// serve para dizer ao express que o conteudo recebidor sera em json
app.use(express.json())
// serve para usar o conteudo do aruivo router.js
app.use(routes)


app.listen(3334)


