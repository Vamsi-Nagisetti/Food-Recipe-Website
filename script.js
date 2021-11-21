 myfunction = (videoLink) =>
{  

    const html = `<div><iframe width="480px" height="480px"  id ="videoPlayer" src='${videoLink.replace("watch?v=","embed/")}'
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
     encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>`
  document.getElementById("videopop").innerHTML = html;


};
function fetchData(query )
{  
    if(query== null || query == "")
    {
        query = "c";
    }
   query = query.toLowerCase();
    if(query.includes("chicken biryani") )
    {
        query = "lamb biryani";
        
    }
    if(query.includes("cakes"))
    {
        query ="cake";
    }
   
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then(r =>r.json()).then(
        data => {
            try
            {

              console.log(data);  

            const html = data.meals.map(item => {
                let s =`${item.strMeal}`
                s = s.toLowerCase();
                if((s).includes("beef") || s.includes("pork"))
                {
                  return;
                }
                
                return `<div class ="inline-flex ml-3" >
                <h4 style ="color:yellow; margin:1rem;">${item.strMeal}</h4>                
                 <img src ="${item.strMealThumb}" id = "display" class ="img-fluid"  />
                 <button  
                  class="btn btn-outline-warning" style ="border-radius: 21px; margin-bottom:3rem;"
                  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onclick ='myfunction("${item.strYoutube}")'>
                  <i class="bi bi-play-btn-fill"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                </svg>
                  Watch Now 
                  </button>
    
               </div> <br>`
            }
           )
           .join("");
           document.querySelector("#anim").style.display = "none";
           document.querySelector("#de").style.display ="none";
           document.querySelector(".loading").style.display ="";
           setTimeout(() =>{
             document.getElementById("anim").style.display ="none";
             document.querySelector(".loading").style.display ="none";
             document.querySelector("#de").style.display ="";
             document.querySelector("#de").innerHTML = html},2000);
        
        } 
        catch(err)
        {
            console.log("empty");
            document.querySelector("#de").style.display ="none";
                document.querySelector(".loading").style.display = "";
           setTimeout(() =>{document.querySelector("#anim").style.display = "";
          
           document.querySelector(".loading").style.display = "none";

          
          },2000);
        }
            }
            
            
    )
    
   
}




/*let search =document.querySelector('input');

search.addEventListener('keyup' , (e) => {
    if(e.keyCode === 13)
    {
        console.log("im here ");
        fetchData(e.target.value);
    }
        
       
       
})

/* 
function fetchData(){
    fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a22b55ca67msh8bc40c89fa0057ep1d309djsn3dc3c1461c6c",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
})
.then(r => r.json())
.then(data => {
    console.log(data);
    const image = data.poster;
    
  document.querySelector("#de").setAttribute('src',image);
 
})
.catch(err => {
	console.error(err);
});
}
<button  class="btn btn-outline-warning" style ="border-radius: 21px; margin-bottom:3rem;"><a href ="${item.strYoutube}" style="text-decoration : none;"> Watch Now </a></button>
document.getElementById("#inn").setAttribute =("text" , "hello");
*/
var defauleElement = null;
fetchData(defauleElement);



var form = document.getElementById("form");
form.addEventListener('submit' , (event) =>{
  event.preventDefault();
 var search = document.getElementById("bar").value 
 
 fetchData(search);
})

 closeVideo = () =>
{
  document.getElementById("videoPlayer").setAttribute("src" , "") ;
}
