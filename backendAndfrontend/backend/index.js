import express from 'express'
const app = express()

app.get('/test', (req, res) => {
    let user = {
        id : 1,
        title: 'tesing',
        dec: 'tesing mode',
        AuthorName: 'sarfaraz'
    }
    res.send(user)
  })

  app.listen(4000, ()=>{
    console.log('working well !')
  })