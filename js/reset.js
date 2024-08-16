//--------------- import array  from local storage ----------------------------------------//

if(localStorage.getItem('user')!== null){
    userArr  = JSON.parse(localStorage.getItem('user'));
  }
  else{
    userArr=[];
  }

console.log(userArr)
  //---------------------------------select Elements----------------------------------------------------------------//
  var userEmailReset = document.getElementById('userEmailReset')
  var userPasswordReset = document.getElementById('userPasswordReset')
  var passIcon = document.getElementById('passIcon');
  var back = document.getElementById('back')
  var updateBtn = document.getElementById('updateBtn')

  //----------------------------------------------------------------------------------------//

  userEmailReset.addEventListener('input',function(){
    checkEmail();
    if(userArr.length==0){
      userEmailReset.classList.add('is-invalid');
        userEmailReset.classList.remove('is-valid');
        userEmailReset.nextElementSibling.classList.replace('d-none','d-block');
    }
  })
  userPasswordReset.addEventListener('input',validateNewPassword)

    //--------------------------------------update password-----------------------------------------------//

  updateBtn.addEventListener('click',function(){
    if (userEmailReset.value === "" || userPasswordReset.value === "") {
      swal({
        text: "All inputs are required",
        icon:"warning"
      });
    }
    var index = userArr.map((o) => o.userEmail.toLowerCase()).indexOf(userEmailReset.value.toLowerCase());
    console.log(index)
    if(checkEmail()&&validateNewPassword()){
        userArr[index].userPassword=userPasswordReset.value;
        localStorage.setItem('user',JSON.stringify(userArr));
          swal({
            text: "password updated successfully",
            icon:'success'
          });
          resetForm()
    }
    console.log(userArr)
  })

//--------------check if email exists---------------------------------------------------------------//
  function checkEmail(){
    for (var i=0;i<userArr.length;i++){
      if(userArr[i].userEmail.toLowerCase() === userEmailReset.value.toLowerCase()){
      userEmailReset.classList.add('is-valid');
      userEmailReset.classList.remove('is-invalid');
      userEmailReset.nextElementSibling.classList.replace('d-block','d-none');
      localStorage.setItem("userName", userArr[i].userName);
      return true;
      }
    else{
      userEmailReset.classList.add('is-invalid');
      userEmailReset.classList.remove('is-valid');
      userEmailReset.nextElementSibling.classList.replace('d-none','d-block');
    }
 
  }
  }
  //--------------------------------------check validation new password-----------------------------//

function validateNewPassword(){
var regexNewPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
if (regexNewPass.test(userPasswordReset.value)==true){
    userPasswordReset.classList.add('is-valid');
    userPasswordReset.classList.remove('is-invalid');
    userPasswordReset.nextElementSibling.classList.replace('d-block','d-none');
  return true;
}
else{
    userPasswordReset.classList.add('is-invalid');
    userPasswordReset.classList.remove('is-valid');
    userPasswordReset.nextElementSibling.classList.replace('d-none','d-block');
    return false;
}
}
// -------------------make password visible----------------------------------------------------------------------------//

passIcon.addEventListener('click',function(){
  passIcon.classList.toggle('fa-eye');
  if (userPasswordReset.type === "password") {
      userPasswordReset.type = "text";
    } else {
      userPasswordReset.type = "password";
    }
  
})
//----------------------------------style eye icon---------------------------------------------------------------------//

userPasswordReset.addEventListener('input',function(){

if(userPasswordReset.classList.contains('is-invalid')){
 
  passIcon.style.right='2rem';
}
else if(userPasswordReset.classList.contains('is-valid')){
  passIcon.style.right='2rem';

}
})

///--------------------clean form------------------------------------
function resetForm(){
  userEmailReset.value=null;
  userPasswordReset.value=null;
  userEmailReset.classList.remove('is-valid');
  userPasswordReset.classList.remove('is-valid');
  }
  //--------------------------if array empty-------------------------------------------
  