const container =  document.getElementById("container");
const info = document.getElementById("info");

for (let i = 1; i <= 13; i++) {
fetch(`https://api.punkapi.com/v2/beers?page=${i}`, {mode: 'cors'}) 
.then(function (data){
   return data.json();
})
.then(function(beers){
    
   console.log(beers);
    for( let beer of beers) { 
        let text = `<div class="card m-2" style="width: 18rem;">
        <div class="text-center bg-light" style="width: 100%;">
        <img class="mx-auto my-3" src="${beer.image_url}" alt="${beer.name}" height= "150px"  >
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">${beer.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${beer.tagline}</h6>
          <a href="#" class="btn btn-dark">more info</a>
        </div>
      </div>`;
      let child = parseHTML(text);
      let button = child.getElementsByTagName('a')[0];
          button.addEventListener("click", function(){
      container.classList.toggle("d-none");
      container.classList.toggle("d-flex");
      info.classList.toggle("d-none");
      info.classList.toggle("d-flex");
       
      info.innerHTML = `<div class="card m-4" style= "width: 600px;">
      <div class="row no-gutters">
      <div class="text-center col-md-4 bg-light py-4">
      <img class="mx-auto" src="${beer.image_url}" alt="${beer.name}" height= "150px"  >
      </div>
      <div class="col-md-8 py-4">
      <div class="card-body text-center">
        <h5 class="card-title">${beer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${beer.tagline}</h6>
        <h6 class="card-subtitle mb-2">${beer.description}</h6>
        <ul class="list-group">
        <li class="list-group-item"> <b>abv: </b>${beer.abv}%</li>
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        </li>
        </ul>
        <a href="#" class="btn btn-dark">more info</a>
        </div>
      </div>
      </div>
    </div>`;
      
          })
      container.appendChild(child);
    }
})
}
function parseHTML(temp){
 let tempdoc = document.implementation.createHTMLDocument(); 
     tempdoc.body.innerHTML = temp;
 return tempdoc.body.children[0];
}
