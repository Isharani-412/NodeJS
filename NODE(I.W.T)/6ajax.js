document.addEventListener("DOMContentLoaded",function(){
    fetch('http://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(data=>{
        const dogImage=document.getElementById('dogImage');
        dogImage.src=data.message;

    })
    .catch(error=>console.error('error fetching thec dog image:',error));
})