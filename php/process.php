<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = trim($_POST['name']);
  $email = trim($_POST['email']);
  $phone = trim($_POST['phone']);
  $message = trim($_POST['message']);

  // Validasi email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
    exit;
  }

  // Validasi nomor telepon (harus hanya angka dan minimal 10 digit)
  
  if (!preg_match('/^[0-9]{12,}$/', $phone)) {
    echo "Invalid phone number. It must be at least 12 digits and contain only numbers.";
    exit;
  }

  // Validasi input kosong
  if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo "All fields are required";
    exit;
  }

  // Simpan ke database
  $stmt = $conn->prepare("INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $name, $email, $phone, $message);

  if ($stmt->execute()) {
    echo "Success";
  } else {
    echo "Error: " . $conn->error;
  }

  $stmt->close();
  $conn->close();
}
