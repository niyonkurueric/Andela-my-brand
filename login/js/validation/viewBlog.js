const cards = document.querySelector(".cards");

let information = localStorage.getItem("userInfo");
console.log(information);

var blog = [],
    keys = Object.keys(localStorage),
    i = keys.length;

while (i--) {
    blog.push(localStorage.getItem(keys[i]));
}
console.log(blog);
let split = [];
blog.forEach(blogs => {
    console.log(JSON.parse(blogs))
    split.push(JSON.parse(blogs));
})
let informations = split.filter(respond => { return respond.islogin == "blog" });
console.log(informations);


function view(info) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card');

    let a = document.createElement('a');
    a.setAttribute('class', 'card-img');


    let divcard = document.createElement('div');
    divcard.setAttribute('class', 'card-details');

    let atitle = document.createElement('a');
    atitle.setAttribute('class', 'card-title');

    a.textContent = info.image;
    atitle.textContent = info.Title;

    div.appendChild(a)
    div.appendChild(divcard)
    div.appendChild(atitle)

    cards.appendChild(div);
}
informations.forEach(message => {
    view(message);
})