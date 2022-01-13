const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener("click", processFormData);

function processFormData() {
        const nameElement = document.getElementById("username");
        const name = nameElement.value;
        const passElement = document.getElementById("pass");
        const pass = passElement.value;
        if(name == "admin" & pass == 123456){
                document.form1.action = "adminIndex.html"
        }
        else if(name == "user" & pass == 654321){
                document.form1.action = "user.html"
        }
        else{
                alert("wrong");
                document.form1.action = "index.html"
        }
        // alert("yor account is  " + name + "\npassword is " + email);
}
