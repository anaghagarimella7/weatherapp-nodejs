const request=require('request')

const geocode=(address,callback)=>{
    
//const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiZGFya2hvcmNydXgiLCJhIjoiY2p1emF5N2FsMDY5cDQzb2s1OWdnaW5oNCJ9.6Mb39thUD_F7IJjvYSR_Qg"
const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiZGFya2hvcmNydXgiLCJhIjoiY2p1emF5N2FsMDY5cDQzb2s1OWdnaW5oNCJ9.6Mb39thUD_F7IJjvYSR_Qg"
   request({url,json:true},(error,{body})=>{
       if(error){
           callback('Cant find location')
       }
       else if(body.features.length===0){
           callback('No features')
       }
       else{
           callback(undefined,{
             latitude : body.features[0].center[1],
             longitude: body.features[0].center[0],
             place:body.features[0].place_name
           })
       }
   })
}

module.exports=geocode

//geocode('Hyderabad',(error,data)=>{
  //console.log(error)
  //console.log('Data ',data)

//})