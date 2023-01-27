

const ul = document.querySelector(".splide__list");


async function getImages(){
await fetch("https://rickandmortyapi.com/api/character")
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
       
            
            data.results.forEach(result => {
                ul.innerHTML += `
                    
                     <li class="splide__slide">
                         <img src=${result.image} alt="">
                         <div class="card-details">
                         <span class="left">${result.name}</span>
                         <div id="right">
                           
                            <span id="circle" class=${result.status === "unknown" ? "gray": (result.status==="Dead" ? "red" : "green")}></span>
                            <span id="status">${result.status}-${result.species}</span>
                         </div>
                         
                        </div>
                        
                    </li>
                   `
            })
                            
        })


    new Splide( '#image-carousel', {
        perPage    : 3,

        breakpoints: {
            640: {
                perPage: 1,
            },
        },
  } ).mount();

}


getImages();

