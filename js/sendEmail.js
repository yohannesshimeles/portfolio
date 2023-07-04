function sendEmail(){
    Email.send({
      // SecureToken:"6d8b4a8c-9ea5-4f7d-be25-358414ee83ea",
        Host : "smtp.gmail.com",
        Username : "ystd1993@gmail.com",
        Password : "Zh783737/Zh783737/",
        To : 'yohannesshimeles1993@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "Name: " + document.getElementById("name").value + 
        "<br> Email: " + document.getElementById("email").value +
        "<br> Phone no: " + document.getElementById("phone").value + 
        "<br> Message: " + document.getElementById("message").value 
    }).then(
      message => alert("Message Sent Succesfully")
    );
}