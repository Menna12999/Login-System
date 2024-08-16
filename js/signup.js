//-----------selsect elements----------------------------------------------------------------------------------------------//
var userName = document.getElementById('userName');
var userEmail =document.getElementById('userEmail');
var userPassword =document.getElementById('userPassword');
var selectedInput= document.getElementsByTagName('input');
var passIcon = document.getElementById('passIcon');
var signupBtn = document.getElementById('signupBtn');

// -------------------make password visible----------------------------------------------------------------------------//
passIcon.addEventListener('click',function(){
    passIcon.classList.toggle('fa-eye');
    if (userPassword.type === "password") {
        userPassword.type = "text";
      } else {
        userPassword.type = "password";
      }
    
})
//----------------------------------style eye icon---------------------------------------------------------------------//

userPassword.addEventListener('input',function(){
  
  if(userPassword.classList.contains('is-invalid')){
   
    passIcon.style.right='2rem';
  }
  else if(userPassword.classList.contains('is-valid')){
    passIcon.style.right='2rem';

  }
})
//--------------------------------Validation----------------------------------------------------------------------------//
for (var i=0;i<selectedInput.length;i++){
    selectedInput[i].addEventListener('input',function(e){
    var inputId = e.target.id;
    var inputValue = e.target.value;
    validation(inputId,inputValue);
    })
}
function validation(id,value){
var regex ={
    userName:/^[a-z]{3,15}$/i,
    userEmail:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    userPassword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
}
var element= document.getElementById(id);
if (regex[id].test(value)==true){
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    element.nextElementSibling.classList.replace('d-block','d-none');
    return true;
  }
  else{
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    element.nextElementSibling.classList.replace('d-none','d-block');
  return false;
  }
  
}
//-----------------------------------check Validation----------------------------------------------------//
function checkValidtion(){
    if (validation(userName.id,userName.value)
        &&validation(userEmail.id,userEmail.value)
        &&validation(userPassword.id,userPassword.value)){
            return true;
        }
        else{
            return false;
        }
}

//----------------------------------push to array and localstorage ---------------------------------------------------------//

var userArr=[];

var user;
function pushToArr(){
user = {
    userName:userName.value,
    userEmail:userEmail.value,
    userPassword:userPassword.value,
  }
    if(checkEmpty()&&checkValidtion()&&preventDuplication()){
    userArr.push(user);
    console.log(userArr)
   
    }
    localStorage.setItem('user',JSON.stringify(userArr));

}
//----------------check localstorage---------------------------------------------------------------------------------//
if(localStorage.getItem('user')!== null){
    userArr  = JSON.parse(localStorage.getItem('user'));
  }
  else{
    userArr=[];
  }
  
//----------------handling on click button signUp--------------------------------------------=------------------------//

  signupBtn.addEventListener('click',function(){
    if(checkEmpty()&&checkValidtion()&&preventDuplication()){
      pushToArr();
      swal({
        text: "Sign up successful",
        icon:"success"
      });
    resetForm();
    setTimeout(()=>{
      window.location.href = "index.html";
    },2000)
    }
    
  });
  function resetForm(){
    userName.value=null;
    userEmail.value=null;
    userPassword.value=null;
    userName.classList.remove('is-valid');
    userEmail.classList.remove('is-valid');
    userPassword.classList.remove('is-valid');
    }
    
    //----------------------------------check empty-----------------------------------------//
    function checkEmpty(){
        if(userName.value!==''&&userEmail.value!==''
            &&userPassword.value!==''){

                return true;
                }
                else{
                  swal({
                    text: "All inputs are required",
                    icon:"warning"
                  });
                  return false
                }
    }
    
 //------------------------------------check if email already in use & prevent enter duplicate email------------------//
    function preventDuplication(){
       
      for (var i=0;i<userArr.length;i++){
        if(userArr[i].userEmail.toLowerCase()=== userEmail.value.toLowerCase()){
        // console.log(userArr[i].userEmail)
        swal({
          text: "Email is already in use",
          icon:"warning"
        });
        return false;
}

         
        }
        return true
      
    }
   

//-------------------------------------------------------------------------------------------------------------------


   
    


 
  







