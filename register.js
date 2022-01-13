const submitBtn = document.querySelector('[data-action="submit"]');
submitBtn.addEventListener("click", processFormData);

function processFormData() {
        const nameElement = document.getElementById("username");
        const name = nameElement.value;
        const passElement = document.getElementById("pass");
        const pass = passElement.value;
        const comfirmElement = document.getElementById("passcomfirm")
        const comfirmpass = comfirmElement.value;
        if(name == "user" & pass == 654321 &comfirmpass == 654321 ){
                alert("Account create success");
                document.form2.action = "index.html"
        }
        else{
                alert("wrong");
                document.form2.action = "register.html"
        }
        // alert("yor account is  " + name + "\npassword is " + email);
}