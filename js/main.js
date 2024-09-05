let divData = document.getElementById("divData");

function getData(){

    const promesa = fetch("https://freetestapi.com/api/v1/products", {method: "GET"}); //En la pagina puedo agarrar la seccion en donde solo haya 5 productos o 12 o alguna limitante    //Por defaul es un metodo get pero lo vamos a recalcar
    promesa.then( (response) => {
        //.json regresa una nueva promesa
        response.json().then(  //La promesa del json no será cumplida cuando la estructuras de los datos sea rara o mal redactado y ese error los cacha esto de JSON, que haya problemas con la esrtuctura de los datos
            (data)=>{
                console.log(data);
                createCards(data);
            }).catch((error)=> console.log("Problema con el json", error));
         }).catch((err)=> console.log("Existió un problema con la solicitud", err));

}//getData

 function createCards(products){
  console.log(products.length);
    console.log(products[0].name);
    //Crear una card por cada producto con sus datps escenciales
    //forEach de preferencia: nombre description, image, price
    products.forEach(element => {
    
        divData.innerHTML += ` 
        <div class="card" style="width: 18rem; display: inline-flex;">
        <img src= ${element.image} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <a href="#" class="btn btn-primary">${element.price}</a>
      </div>
    </div>
        
        `;
    
      });
    



 }//Createcards

getData();








































