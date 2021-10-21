  document.getElementById("login").addEventListener("click" , loginFun)

  function loginFun(){
      window.location = "login.html"
  }
  
  function saveData(){

    var name = document.getElementById("name")
    var password = document.getElementById("password")
    var age = document.getElementById("age")
    var email = document.getElementById("email")

    var arr = []
    var arrStr = ""
    
    if(localStorage.getItem("Users")!==null){

        arrStr = localStorage.getItem("Users")//getting key from local storage in string variable
        arr = JSON.parse(arrStr)//parsing string to JSON format and storing in array
        
        //checking if the email already exists
        var emailExists = arr.filter(function(item){//learn filter more
            if(item.email === email.value){
                return true
            }
            else{
                return false
            }
        })
        if(emailExists){
            alert("Email already exists")
        }
        else{
            //creating new JSON object and storing new values in key-values pair, which users enter into the fields
            var arrJson = {"email" : email.value , "password" : password.value , "name" : name.value , "age" : age.value}
            arr.push(arrJson)//adding the new JSON object into the arr array
            //After this, now our array has all the previous values of key from local storage and the new values which user=>
            //=>entered also.
            localStorage.removeItem("Users")//removing key from local storage, so that the new array, which has=>
            //=>all the previous and new values can be stored into the local storage
            localStorage.setItem("Users" , JSON.stringify(arr))//saving our new array into the local storage in the form of string
        }
    }
    else{
        //creating new JSON object and storing new values in key-values pair, which users enter into the fields
        var arrJson = {"email" : email.value , "password" : password.value , "name" : name.value , "age" : age.value}
        arr.push(arrJson)//adding the new JSON object into the arr array
        localStorage.setItem("Users" , JSON.stringify(arr))//saving our new array into the local storage in the form of string
    }
    
}