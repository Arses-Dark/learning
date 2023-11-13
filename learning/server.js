const dotenv=require('dotenv')
const morgan=require('morgan')
const express=require('express')
const app=express()


dotenv.config({
    path:'config/config.env'
})
if (process.env.NODE_ENV==="development"){
app.use(morgan('dev'))
}
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))


const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})