
  function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML = now.toLocaleTimeString();
  }

  
  updateClock();
  setInterval(updateClock, 1000);



document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  
  if (name && email && subject && message) {
    alert("✅ Success! Your message has been sent.");
    this.reset(); 
  } else {
    alert("⚠️ Please fill in all fields before submitting.");
  }
});