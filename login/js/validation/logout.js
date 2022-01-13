logout.addEventListener("log", () => {
    localStorage.removeItem("userInfo", JSON.stringify(obj));
    window.location.replace("http://127.0.0.1:5500/login/login.html");
})