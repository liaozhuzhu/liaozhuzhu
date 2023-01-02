function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}  

let currURL = window.location.href;
let checkURL = currURL.substring(currURL.indexOf("index"));

if (checkURL === "index") {
    window.history.pushState('', '', "/");
}
else {
    console.log(checkURL);
}