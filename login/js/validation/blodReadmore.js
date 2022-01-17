const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");
let Blog = document.querySelector(".article-details");
let rightBlog = document.querySelector(".recommended-list");
const getblog = JSON.parse(localStorage.getItem("blog")).sort().reverse();
var Readmessage = getblog[id];

Blog.innerHTML = `
        
        <img src="${Readmessage.image}" class="article-image" />
            <div class="article-content">
                <h2 class="article-title">
                ${Readmessage.Title}
                </h2>
                <p class="article-text">
                ${Readmessage.message}
                </p>
                <div class="article-icon">
                    <div class="icon">
                        <span class="ti-heart icon-article"></span>
                        <span class="icon-number">12</span>
                    </div>
                </div>
                <div class="article-comments">
                   
                    </div>
                    <form class="comment-form" onsubmit="commet(event)">
                        <div class="form-group">
                            <input type="text" id="name" class="form-input" placeholder="Names" />
                            <span class="text-invalid" id="Name_invalid">invalid Name</span>
                        </div>
                        <div class="form-group">
                            <textarea name="" id="message" class="form-input" placeholder="Leave a comment..."></textarea>
                            <span class="text-invalid" id="message">invalid Message</span>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
console.log(Readmessage.comments);
let BlogComment = document.querySelector(".article-comments");
let div = document.createElement('div');

Readmessage.comments.forEach((comment) => {
    console.log(Readmessage.comments);
    let BlogComment = document.querySelector(".article-comments");
    let div = document.createElement('div');

    div.innerHTML = `
<h3 class="comments-title">5 Comments</h3>
<div class="comments">
    <div class="comment">
        <h3 class="comment-name">${comment.Name}</h3>
        <div class="comment-body">
        ${comment.message}
        </div>
    </div> `;
    BlogComment.appendChild(div);
});



getblog.forEach((Readmessage, idx) => {
    if (!(idx == id)) {
        let div = document.createElement('div');
        div.innerHTML = `
        <a href="#" class="recommended-article">
                    <img src="${Readmessage.image}" class="recommended-image" />
                    <div class="recommended-title">
                    ${Readmessage.Title}
                    </div>
                </a>
        `;
        rightBlog.appendChild(div);

    }
});

function commet(event) {
    event.preventDefault();
    var fname = document.getElementById("name");
    var message = document.getElementById("message");

    var Name_invalid = document.getElementById("Name_invalid");
    var Message_invalid = document.getElementById("message");
    const bloges = JSON.parse(localStorage.getItem("blog")).sort().reverse();

    bloges.forEach((Element, idx) => {
        if (id == idx) {
            var Commentobj = {
                Name: fname.value,
                message: message.value
            }
            Element.comments.push(Commentobj);

            console.log(Element);

        }

    })
    var pushex = JSON.stringify(bloges);
    localStorage.setItem("blog", pushex);


}