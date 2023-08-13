<?php 
if(isset($_POST['submit'])){
    $email_to = "kavinthant@gmail.com"; 
    $email_from = $_POST['email'];
    $name = $_POST['name'];
    $subject = "Form submission from $name";
    $phone=$_POST['phonenumber'];
    $message = $_POST['message'];
    $text = "NAME: $name<br>
             EMAIL: $email_from<br>
             PHONE: $phone<br>
             MESSAGE: $message";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html; charset=utf-8\r\n";
    $headers .= "From:" . $email_from;
    
    mail($email_to,$subject,$text,$headers);
	
	echo("Mail Sent.");

    }
?>