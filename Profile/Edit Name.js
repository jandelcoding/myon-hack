<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Change Name on Myon</title>
  <script>
    function changeName() {
      const newName = document.getElementById("nameInput").value;
      if (newName.trim() !== "") {
        document.getElementById("displayName").textContent = newName;
      } else {
        alert("Please enter a valid name.");
      }
    }
  </script>
</head>
<body>
  <h2>Welcome to Myon!</h2>
  <p>Your name: <span id="displayName">Guest</span></p>
  <input type="text" id="nameInput" placeholder="Enter your new name">
  <button onclick="changeName()">Change Name</button>
</body>
</html>
