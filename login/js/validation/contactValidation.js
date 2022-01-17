function Contact(event) {
    event.preventDefault();
    var fname = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var email_invalid = document.getElementById("email_invalid");

    var Name_invalid = document.getElementById("Name_invalid");
    var Message_invalid = document.getElementById("message");

    if (fname.value == "" && message.value == "") {
        fname.style.border = "solid 1px red";

        message.style.border = "solid 1px red";

        Name_invalid.style.display = "block";
        Message_invalid.style.display = "block";

    } else if (!check_email(email.value)) {
        email.style.border = "solid 1px red";
        email_invalid.style.display = "block";

    } else {
        var obj = {
            Name: fname.value,
            Email: email.value,
            Message: message.value
        }
        let queries = localStorage.getItem("queries");
        if (queries) {

            var convert = JSON.parse(queries);
            convert.push(obj);
            localStorage.setItem("queries", JSON.stringify(convert));

        } else {
            var queryarray = [obj];
            localStorage.setItem("queries", JSON.stringify(queryarray));
        }
    }
}

function check_email(email) {
    if (!email.match(/\S+@\S+\.\S+/)) {
        return false;
    }
    if (email.indexOf(' ') != -1 || email.indexOf('..') != -1) {
        return false;
    }
    return true;
}