const queryCollection = document.querySelector('.queries')
let a = localStorage.getItem("queries");
let split = JSON.parse(a);
let message = split.sort().reverse();
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
    console.log(messages);
})