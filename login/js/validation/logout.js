const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    console.log("logout");
    const logout = JSON.parse(localStorage.getItem("userInfo"));
    logout.islogin = false;
    localStorage.setItem("userInfo", JSON.stringify(logout));
    window.location.replace("http://127.0.0.1:5500/login/login.html");
})