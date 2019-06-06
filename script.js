fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6', {mode: 'cors'}) 
.then(function (data){
   return data.json();
})
.then(function(beers){
   
    const container =  document.getElementById("container");
    const info = document.getElementById("info");
    for( let beer of beers) { 
        let text = `<div class="card m-2" style="width: 18rem;">
        <div class="text-center mt-2" style="width: 100%;">
        <img class="mx-auto" src="${beer.image_url}" alt="Card image cap" height= "150px"  >
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
      info.classList.toggle("d-none")
       
      info.innerHTML = `<div class="card m-2">
      <div class="row no-gutters">
      <div class="text-center pt-2 col-md-4">
      <img class="mx-auto" src="${beer.image_url}" alt="Card image cap" height= "150px"  >
      </div>
      <div class="col-md-8">
      <div class="card-body text-center">
        <h5 class="card-title">${beer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${beer.tagline}</h6>
        <a href="#" class="btn btn-dark">more info</a>
        </div>
      </div>
      </div>
    </div>`;
      
          })
      container.appendChild(child);
    }
})

function parseHTML(temp){

 let tempdoc = document.implementation.createHTMLDocument(); 
     tempdoc.body.innerHTML = temp;
 return tempdoc.body.children[0];

}
