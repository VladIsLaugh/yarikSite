const requestURL = "https://abonements.herokuapp.com/api/books/";
const container = document.getElementById("wrapperBlock");

document.addEventListener("DOMContentLoaded", (e) => {
  
    console.log("12312");
    
  draw();
});

async function draw() {
  let response = await fetch(requestURL, {mode: 'cors'});

  if (response.ok) {
    let json = await response.json();
    console.log(json);
    json.forEach((el) => {
      createBlock(el);
    });
    createClicks()
    //console.log(document.getElementsByClassName("openWin"));

  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}

function createClicks(e){
  document.getElementsByClassName("openWin")
  
  for(let i=0; i<document.getElementsByClassName("openWin").length; i++){
    document.getElementsByClassName("openWin")[i].addEventListener("click", (e)=>{
      console.log(e.target.classList.contains("1class"));

       
    })
  }

}


function createBlock(el) {
  var block = document.createElement("div");
  block.classList.add("col-md-3");
  block.classList.add("col-sm-6");
  block.classList.add("openWin");
  block.classList.add(`${el.id+"class"}`);
  block.setAttribute("data-toggle", "modal")
 block.setAttribute("data-target", `#modalQuickView${el.id}`)



  block.innerHTML = `
   <div class="feature-inner ${el.id+"class"}">
        <div class="mu-book-overview-single ${el.id+"class"}">
            <span class="mu-book-overview-icon-box ${el.id+"class"}">
                <img src="./../images/book.png" class=${el.id+"class"} /> 
            </span>
            <h4 class=${el.id+"class"}>${el.author}</h4>
            <p class=${el.id+"class"}>${el.name}</p>
        </div>
    </div>`;
  container.appendChild(block);
var modal = document.createElement("div");


modal.innerHTML = `
<div>
<div class="modal book-modal fade" id="modalQuickView${el.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <img src="./../images/book.png" alt="" style="text-align: center; display: block; margin: auto;">
  <h2 class="md-title" style="text-align: center; display: block; margin: auto;">${el.name}</h2> 
  <h3 class="md-title" style="text-align: center; display: block; margin: auto;">${el.author}</h3> 
  <h4 class="md-desc" style="text-align: center; display: block; margin: auto;">${el.description}</h4> 
</div>
</div>
`
document.body.appendChild(modal)

}



let card = document.getElementsByClassName("mu-book-overview-content")[0]





