// Retrieve the user details from storage
const userDetails = JSON.parse(localStorage.getItem('userDetails'));
if (userDetails) {
  const userName = userDetails.name;
  const userEmail = userDetails.email;
  const emailStatus = userDetails.emailstatus;

  // Display the user details on the new-page.html using DOM manipulation
  const userDetailsContainer = document.getElementById('user-details');
  userDetailsContainer.innerHTML = `
    <p>Name: ${userName}</p>
    <p>Email: ${userEmail}</p>
    <p>Email Status: ${emailStatus}</p>
  `;
} 
else{
    console.log("details not available")
}
