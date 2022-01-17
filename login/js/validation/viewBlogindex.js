const cards = document.querySelector(".cards");

let a = localStorage.getItem("blog");
let split = JSON.parse(a);
let informations = split.sort().reverse();
console.log(informations);


function view(info, idx) {
    let div = document.createElement('div');
    div.innerHTML = `<div class="card">
 <a class="card-img" href="blog_details.html?id=${idx}"><img src="${info.image}" alt="Image"></a>
 <div class="card-details">
 <a href="blog_details.html" class="card-title">${info.Title}</a> 
 <div class="card-icons"> <div class="icon">
 <i class="ti-heart">${info.likes}</i>
 <span class="icon-number">0</span>
 </div><div class="icon">
  <i class="ti-comment"></i>
  <span class="icon-number">0</span>
  </div> <div class = "icon" >
  <i class = "ti-eye" > </i> <span class= "icon-number"> 0 </span> </div> </div></div> 
  </div>`;

    cards.appendChild(div);
}
informations.forEach((message, idx) => {
    view(message, idx);

})