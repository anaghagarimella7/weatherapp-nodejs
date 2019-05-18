console.log('Java Script client')
const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const msg1=document.querySelector('#msg1')
msg1.textContent=''

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc=search.value
    const url='http://localhost:3000/weather?address='+loc

    fetch(url).then((response)=>{
   response.json().then((data)=>{
       if(data.error){
        msg1.textContent=data.error
       }
       else{
        msg1.textContent='Temperature in '+loc+' is'+data.temp
       }
   })
})

})