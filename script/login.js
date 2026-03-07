document.getElementById("signin").addEventListener("click", function () {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    
    if (email === "admin"){
        if(pass === "admin123"){
            window.location.assign('./public/home.html')
        }
        else{
            alert('password is wrong');
            return
        }
    }
    else{
        alert("username not exist")
        return
    }
})