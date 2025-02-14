// Navbar Toggle for Responsiveness (ADDED)
document.getElementById("menuToggle").addEventListener("click", function() {
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden"); // Toggle visibility
});

document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;
    
    if (!name || !email || !phone || !country) {
        alert("Please fill in all fields.");
        return;
    }
    
    if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Invalid name format.");
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Invalid email format.");
        return;
    }
    
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Invalid phone number. Must be 10 digits.");
        return;
    }
    
     // Insert data into the table
     let table = document.getElementById("submissionTable").getElementsByTagName("tbody")[0];
     let newRow = table.insertRow();
 
     newRow.innerHTML = `
         <td class="border p-2">${name}</td>
         <td class="border p-2">${email}</td>
         <td class="border p-2">${phone}</td>
         <td class="border p-2">${country}</td>
     `;
 

    alert("Form submitted successfully!");
    this.reset();
});

// Scroll to form on 'Get Started' button click
document.getElementById("getStartedBtn").addEventListener("click", function() {
    document.getElementById("leadForm").scrollIntoView({ behavior: "smooth" });
});