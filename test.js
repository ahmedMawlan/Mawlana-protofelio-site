// button hamburger

let menu = document.getElementById("menue")

let action = document.getElementById("actions")

menu.onclick = function(){
    menu.classList.toggle("is-active")
    action.classList.toggle("is-active")
}


// Alert for blogs

let blogs = document.getElementById("blog")

blogs.onclick = function(){
    alert("Sorry Blogs Is Not Available currently")
}


// Alert for Cv

let cv_download = document.getElementById("download")

cv_download.onclick = function(){
    alert("Sorry Cv Is Not Available currently")
}

// Alert for my linkdin

let email_lnkdn = document.getElementById("lnkdn")

email_lnkdn.onclick = function(){
    alert("Sorry My Email in Linkdin Is Not Available currently")
}