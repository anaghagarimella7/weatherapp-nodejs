const request=require('request')

const forecast=(lat,long,callback)=>{
//const url='https://api.darksky.net/forecast/7290f2d5e381f29d36a740bc0b243f80/37.8267,-122.4233?'
const url='https://api.darksky.net/forecast/7290f2d5e381f29d36a740bc0b243f80/'+lat+','+long+'?'

request({url,json:true},(error,{body})=>{
    if(error){
        callback('No location')
    }
    else if(body.error){
        callback('Error in response')
    }
    else{
        callback(undefined,{
            temperature:body.currently.temperature,
            rain:body.currently.precipProbability,
            summary:body.currently.summary
        })
    }
})

}

module.exports=forecast

//forecast(-75.7088, 44.1545, (error, data) => {
  //  console.log('Error', error)
   // console.log('Data', data)
  //})