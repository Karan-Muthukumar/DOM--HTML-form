
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
   const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pinCode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
   
  
    const foods = [];
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((food) => {
        foods.push(food.value);
      });
   
    if (foods.length < 2) {
      alert("Please select at least two food options.");
      return;
    }
  
     const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${email}</td>
          <td>${address}</td>
          <td>${pinCode}</td>
          <td>${gender}</td>
          <td>${foods.join(", ")}</td>
          <td>${state}</td>
          <td>${country}</td>
      `;
  
    document.getElementById("dataTable").appendChild(newRow);
  
    document.getElementById("form").reset();
  });