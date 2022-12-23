function sendMail() {
    var params = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,

    };
    const serviceId = "service_rjxzjp7";
    
    const templateId = "template_slecst6";
    
    emailjs
    .send(serviceId, templateId, params).
    then((res) => {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch(err=>console.log(err));
  }