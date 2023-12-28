const express= require('express')
const port= process.env.PORT || 3000

const app= express()

const path= require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/review', (req, res)=>{

    /* res.send(req.query.id) */

    res.sendFile(path.join(__dirname, ('public/review.html')))
})

app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`)
})