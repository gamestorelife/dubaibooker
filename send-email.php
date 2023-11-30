<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\PHPMailerAutoload;



require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/PHPMailerAutoload.php';

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['subject'];
$pickupDate = $_POST['pickup-date'];
$dropoffDate = $_POST['dropoff-date'];
$brand = $_POST['brand'];
$insurance = $_POST['insurance'];
$comments = $_POST['message'];

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
   $mail->Host = 'smtp.hostinger.com';
   $mail->Port = 465;
   $mail->SMTPAuth = true;
   $mail->Username = 'no-reply@mykonosbooker.com';
   $mail->Password = 'Nomykonos11!';
   $mail->SMTPSecure = 'ssl';   

    //Recipients
    $mail->setFrom('no-reply@mykonosbooker.com', 'Mykonos Booker');
    $mail->addAddress('info@mykonosbooker.com'); // Replace with your recipient email address

    // Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'New rental car booking';
    $mail->Body = "Name: $name<br>Email: $email<br>Phone: $phone<br>Pickup Date: $pickupDate<br>
    Drop-off Date: $dropoffDate<br>Brand: $brand<br>Insurance: $insurance <br>Comment: $comments";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
