function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_is9a8w9";
    const templateID = "template_8bgrg9u";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
    
  
  }



  function sendMail1() {
    var params = {
      email: document.getElementById("email").value,
    };
  
    const serviceID = "service_is9a8w9";
    const templateID = "template_8bgrg9u";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("email").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
    
  
  }