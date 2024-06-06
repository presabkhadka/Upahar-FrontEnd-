function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var phone = document.getElementById("phone").value.trim();

    // Check if Name field is empty
    if (name === "") {
      alert("Please enter your name");
      return false;
    }
    
    // Check if Email field is empty or not in valid format
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    
    // Check if Message field is empty
    if (message === "") {
      alert("Please enter your message");
      return false;
    }

    // Optional: Check if Phone field is not empty and contains only digits
    if (phone === "") {
      alert("Please enter your phone number");
      return false;
    }

    document.getElementById("contactForm").submit();

    return true;

  }

