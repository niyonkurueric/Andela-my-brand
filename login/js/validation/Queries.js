const queryCollection = document.querySelector('.queries')

var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

while (i--) {
    values.push(localStorage.getItem(keys[i]));
}
console.log(values);
let split = [];
values.forEach(value => {
    console.log(JSON.parse(value))
    split.push(JSON.parse(value));


})

let message = split.filter(respond => { return respond.islogin == false });
console.log(message);

function display(doc) {
    let div = document.createElement('div');
    div.setAttribute('class', 'query');

    let h4 = document.createElement('h4');

    let p = document.createElement('p');

    let span = document.createElement('span');

    h4.textContent = doc.Name;
    p.textContent = doc.Message;
    span.textContent = doc.Email;

    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(span)

    queryCollection.appendChild(div)
}

message.forEach(messages => {
    display(messages);
})