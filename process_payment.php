<?php
// Підключення до бази даних SQLite
$db = new PDO('sqlite:payment_data.db');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Отримання даних з форми
$name = $_POST['name'];
$email = $_POST['email'];
$card_number = $_POST['card-number'];
$expiry_month = $_POST['expiry-month'];
$expiry_year = $_POST['expiry-year'];
$cvv = $_POST['cvv'];

// SQL-запит для вставки даних
$stmt = $db->prepare("INSERT INTO payments (name, email, card_number, expiry_month, expiry_year, cvv) 
                      VALUES (:name, :email, :card_number, :expiry_month, :expiry_year, :cvv)");

$stmt->bindParam(':name', $name);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':card_number', $card_number);
$stmt->bindParam(':expiry_month', $expiry_month);
$stmt->bindParam(':expiry_year', $expiry_year);
$stmt->bindParam(':cvv', $cvv);

// Виконання запиту
if ($stmt->execute()) {
    echo "Payment data saved successfully!";
} else {
    echo "Error saving data.";
}
?>
