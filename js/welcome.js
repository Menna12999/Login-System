var welcomeUser = document.getElementById('LoginUser');
var nameValue = localStorage.getItem("userName");
welcomeUser.innerHTML = nameValue[0].toUpperCase()+ nameValue.substring(1);

