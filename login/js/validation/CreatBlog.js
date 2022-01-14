//  document.querySelector("#image").addEventListener("change", function() {
//      const reader = new FileReader();
//      reader.readAsDataURL(this.files[0]);
//      reader.addEventListener("load", () => {
//          console.log(reader.result);
//      })
//  });

function ceatBlog(event) {
    event.preventDefault();
    var title = document.getElementById("title");
    var image = document.getElementById("image");
    var message = document.getElementById("body");



    var image_invalid = document.getElementById("image_invalid");

    var title_invalid = document.getElementById("title_invalid");
    var blog_invalid = document.getElementById("body");

    if (title.value == "" && message.value == "" && image.value == "") {
        title.style.border = "solid 1px red";
        image.style.border = "solid 1px red";
        message.style.border = "solid 1px red";

        image_invalid.style.display = "block";
        blog_invalid.style.display = "block";
        title_invalid.style.display = "block";

    } else {

        var obj = {
            Title: title.value,
            message: message.value,
            image: image.value,
            islogin: "blog"
        }
        console.log(obj.Title);
        console.log(obj.message);
        console.log(obj.image);
        localStorage.setItem(obj.Title, JSON.stringify(obj));
    }

}