document.getElementById("formdata").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("nameError").textContent = "";
  document.getElementById("ageError").textContent = "";
  document.getElementById("classError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("mathsError").textContent = "";
  document.getElementById("chemError").textContent = "";

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const classA = document.getElementById("class").value;
  const email = document.getElementById("email").value;
  const maths = document.getElementById("maths").value;
  const chemistry = document.getElementById("chem").value;

  let isValid = true;

  if (name == "") {
    document.getElementById("nameError").textContent = "name is required";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  if (!age) {
    document.getElementById("ageError").textContent = "age is required";
    isValid = false;
  }

  if (classA == "") {
    document.getElementById("classError").textContent = "class id required";
    isValid = false;
  } else if (classA > 12 || classA < 0) {
    document.getElementById("classError").textContent = "invalid class";
    isValid = false;
  }

  if (!maths) {
    document.getElementById("mathsError").textContent = "required";
    isValid = false;
  }

  if (!chemistry) {
    document.getElementById("chemError").textContent = "required";
    isValid = false;
  }

  if (isValid) {
    // Retrieve existing data from local storage or initialize an empty array
    const data = JSON.parse(localStorage.getItem("formData")) || [];

    // Add new record
    const newRecord = { name, age, classA, email, maths, chemistry };
    data.push(newRecord);

    // Save updated data back to local storage
    localStorage.setItem("formData", JSON.stringify(data));

    // Update the table with the new data
    addToTable(newRecord);

    // Clear the form
    document.getElementById("dataform").reset();

    alert("Form submitted and data saved!");
  }
});
// Function to add a row to the table
function addToTable(record) {
  const tableBody = document.querySelector("#dataTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${record.name}</td>
      <td>${record.age}</td>
      <td>${record.classA}</td>
      <td>${record.email}</td>
      <td>${record.maths}</td>
      <td>${record.chemistry}</td>
    `;
  tableBody.appendChild(row);
}

// Load data from local storage and populate the table on page load
window.addEventListener("load", function () {
  const data = JSON.parse(localStorage.getItem("formData")) || [];
  data.forEach(addToTable);
});
