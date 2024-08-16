  
//--------------- import array  from local storage ----------------------------------------//

if(localStorage.getItem('user')!== null){
    userArr  = JSON.parse(localStorage.getItem('user'));
  }
  else{
    userArr=[];
  }

  console.log(userArr);

  //---------------------------------------------------------------------------------------//

var userEmailLogin = document.getElementById('userEmailLogin');
var userPasswordLogin= document.getElementById('userPasswordLogin');
var passIcon = document.getElementById('passIcon');
var loginBtn = document.getElementById('loginBtn');
  
    //-----------------------------------------------------------------------------------------------//
    passIcon.addEventListener('click',function(){
      passIcon.classList.toggle('fa-eye');
      if (userPasswordLogin.type === "password") {
          userPasswordLogin.type = "text";
        } else {
          userPasswordLogin.type = "password";
        }
      
    })
    userPasswordLogin.addEventListener('input',function(){
      
      if(userPasswordLogin.classList.contains('is-invalid')){
       
        passIcon.style.right='2rem';
      }
      else if(userPasswordLogin.classList.contains('is-valid')){
        passIcon.style.right='2rem';
    
      }
    })

    //---------------------------------------------------------------------------------------------------//

loginBtn.addEventListener('click',function(){
  
  if(checkEmail()&&checkPassword()){
    window.open('welcome_page.html');
    resetForm();
  }
  else{
    swal({
      text: "this email isn't exist or passsword is incorrect",
      icon:"warning"
    });
    if (userEmailLogin.value === "" || userPasswordLogin.value === "") {
      swal({
        text: "All inputs are required",
        icon:"warning"
      });
    }
  }
 
})
    //----------------------check if password & email of input email exist----------------------------------------

      userEmailLogin.addEventListener('input',function(){
        checkEmail();
        if(userArr.length==0){
          userEmailLogin.classList.add('is-invalid');
            userEmailLogin.classList.remove('is-valid');
            userEmailLogin.nextElementSibling.classList.replace('d-none','d-block');
        }
      });
      userPasswordLogin.addEventListener('input',checkPassword);
     
      function checkEmail(){
      for (var i=0;i<userArr.length;i++){
        if(userArr[i].userEmail.toLowerCase() === userEmailLogin.value.toLowerCase()){
        userEmailLogin.classList.add('is-valid');
        userEmailLogin.classList.remove('is-invalid');
        userEmailLogin.nextElementSibling.classList.replace('d-block','d-none');
        localStorage.setItem("userName", userArr[i].userName);
        return true;
        }
      else{
        userEmailLogin.classList.add('is-invalid');
        userEmailLogin.classList.remove('is-valid');
        userEmailLogin.nextElementSibling.classList.replace('d-none','d-block');
      }
   
    }
    }
    function checkPassword(){
      var index = userArr.map((o) => o.userEmail.toLowerCase()).indexOf(userEmailLogin.value.toLowerCase());
      console.log("index : " + index);
      if(index==-1){
        incorrectAlert();
        return false;
      }
      if (userArr[index].userPassword === userPasswordLogin.value){
        userPasswordLogin.classList.add('is-valid');
        userPasswordLogin.classList.remove('is-invalid');
        userPasswordLogin.nextElementSibling.classList.replace('d-block','d-none');
        return true; 
      }
      else{
        incorrectAlert();
        return false;
      }
    }
    function incorrectAlert(){
      userPasswordLogin.classList.add('is-invalid');
      userPasswordLogin.classList.remove('is-valid');
      userPasswordLogin.nextElementSibling.classList.replace('d-none','d-block');
    }
    ///--------------------clean form------------------------------------
    function resetForm(){
      userEmailLogin.value=null;
      userPasswordLogin.value=null;
      userEmailLogin.classList.remove('is-valid');
      userPasswordLogin.classList.remove('is-valid');
      }
      //---------------------------------------------------------------------

  
    



    
   

    

