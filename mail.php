<?php
$name = $_POST['NAME'];
$email = $_POST['E-MAIL'];
$message = $_POST['MESSAGE'];
$formcontent=" From:";
$recipient = "aratcha.mm@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='about.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>