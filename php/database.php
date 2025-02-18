<?php
$host = "localhost";
$user = "root"; // Ganti sesuai dengan database Anda
$password = ""; // Ganti dengan password database Anda
$database = "portfolio";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
