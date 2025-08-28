<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Edit MyON Minutes</title>
  <script>
    function updateMinutes() {
      const newMinutes = document.getElementById("minutesInput").value;
      if (!isNaN(newMinutes) && Number(newMinutes) >= 0) {
        document.getElementById("displayMinutes").textContent = newMinutes;
      } else {
        alert("Please enter a valid number of minutes.");
      }
    }
  </script>
</head>
<body>
  <h2>MyON Reading Tracker</h2>
  <p>Your reading minutes: <span id="displayMinutes">0</span></p>
  <input type="number" id="minutesInput" placeholder="Enter new minutes" min="0">
  <button onclick="updateMinutes()">Update Minutes</button>
</body>
</html>
