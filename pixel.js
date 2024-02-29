// b0wYJrko7bc1lnLfpJgMsNxkARt2Jrq8pk0w2bQtIO2Ow8wcE5yctDwC        api keys

const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const imgAll=document.querySelectorAll("img");  // da i nodi 
const cardAll=document.querySelectorAll("cardAll");  
const btnHide=document.querySelectorAll("hide");  

btn1.onclick=function(){
call("bee")
}
btn2.onclick=function(){
call("flowers")
}




 
    
function call(animale) {

    fetch(`https://api.pexels.com/v1/search?query=[${animale}]`,{
    
        method: 'GET', // Metodo HTTP (GET, POST, ecc...)
        headers: {
          'Authorization': 'b0wYJrko7bc1lnLfpJgMsNxkARt2Jrq8pk0w2bQtIO2Ow8wcE5yctDwC' // Inserisci  autorizzazione qui
        }
    
    
    })
    
    
        
      
    
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ERRORE NEL REPERIMENTO DATI");
        }
    })
    .then((oggetti) => {
        // console.log(oggetti.photos);
        imgAll.forEach((img,index)=>{
            img.setAttribute("src",oggetti.photos[index].src.tiny)
        })
        
    })
    .catch((error) => console.log(error));
    
}
    
    
// function call(animale) {

//     fetch(`https://api.pexels.com/v1/search?query=[${animale}]`,{
    
//         method: 'GET', // Metodo HTTP (GET, POST, ecc...)
//         headers: {
//           'Authorization': 'b0wYJrko7bc1lnLfpJgMsNxkARt2Jrq8pk0w2bQtIO2Ow8wcE5yctDwC' // Inserisci  autorizzazione qui
//         }
    
    
//     })

// then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("ERRORE NEL REPERIMENTO DATI");
//         }
//     })
//     .then((tigersData) => {
//         // console.log(tigersData.photos[1].url);
//         tigersData.photos.forEach((photo)=>{
//             const imgURL= photo.url;
//             console.log(imgURL);
//         })
        
//     })
//     .catch((error) => console.log(error));
    
// }


// funzione hide card sfrutto il fatto che lindice dei bottoni e card è lo stesso e con query select all diventano erray
btnHide.forEach((bottoneHide,index)=>{
    bottoneHide.onclick=()=>{
         cardAll[index].remove();
     }
 })




