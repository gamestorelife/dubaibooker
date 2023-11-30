

<?php
   
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   use PHPMailer\PHPMailer\SMTP;
   use PHPMailer\PHPMailer\PHPMailerAutoload;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/PHPMailerAutoload.php';

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$comments = $_POST['message'];
$phone = $_POST['subject'];


   $mail = new PHPMailer();
   $mail->isSMTP();
   $mail->Host = 'smtp.hostinger.com';
   $mail->Port = 465;
   $mail->SMTPAuth = true;
   $mail->Username = 'no-reply@mykonosbooker.com';
   $mail->Password = 'Nomykonos11!';
   $mail->SMTPSecure = 'ssl';
   $mail->isHTML(true);
   $mail->setFrom('no-reply@mykonosbooker.com', 'Mykonos Booker');
   $mail->addAddress('info@mykonosbooker.com', $name);
   $mail->Subject = 'Client Has been submit on MykonosBooker';

   $mail->Body = "Name: $name <br>Email: $email<br>Phone: $phone<br>Comment: $comments";


   //$mail->Body = 'A Clint has been submit our Form. Kindly contact ASAP';
   //$mail->msgHTML(file_get_contents('message.html'), __DIR__);
  // $mail->addReplyTo('info@mykonosbooker.com', 'Mykonos Booker');
   // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
   
   //$mail->addAttachment('attachment.txt');
   
  if(!$mail->send()) {
    echo 'Email could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo '<center><h1>Email has been sent.</h1></center>';
}






?>