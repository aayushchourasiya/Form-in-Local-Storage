document.getElementById("signup").addEventListener("click" , goToHome)
function goToHome(){
    window.location = "homepage.html"
}

async function getData(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var checkLogin = await localStorage.getItem("All Users")
    var checkObj = await JSON.parse(checkLogin)
    // let isUser = checkObj.filter((item) => item.email === email && item.password === password)
    // if(isUser){
    //     alert("Login Successful!")
    // }else{
    //     alert("Wrong Credentials!")
    // }
    loop : {
        for(var i = 0 ; i<=checkObj.length-1 ; i++){
            if(checkObj[i].email === email && checkObj[i].password === password){
                alert("Login Successful!")
                break loop
            }
            else{
                alert("Wrong Credentials!")
                break loop //wrong code
            }
        }
    }
}