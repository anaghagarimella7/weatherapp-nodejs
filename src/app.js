const path=require('path')
const express=require('express')
const hbs=require('hbs')
const forecast=require('./utils/forecast')
const geocode=require('./utils/geocode')

const app=express()
const port=process.env.PORT || 3000

const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)

app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather APP',
        name:'Anagha Garimella'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Anagha Garimella'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'help text',
        title:'Help Page',
        name:'Anagha Garimella'
    })
})


app.get('/weather',(req,res)=>{
if(!req.query.address){
    return res.send({
        error:'Address has to be provided'
    })
}

 geocode(req.query.address,(error,data={})=>{
     if(error){
         res.send('Enter a valid location')
     }
     else{
             forecast(data.latitude,data.longitude,(error,data)=>{
                 res.send({
                     temp:data.temperature,
                     rainfall:data.rain,
                     sum:data.summary
                 })
             })
         
        }
 })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'No page'
    })
})

app.listen(port,()=>{
    console.log('Server is up!'+port)
})