<?php
$name       = @trim(stripslashes($_POST['name']));
$from       = @trim(stripslashes($_POST['emaild']));
$subject    = @trim(stripslashes($_POST['subject']));

$message    = $name." says: \r\n".@trim(stripslashes($_POST['message']));
$to   		= 'info@starhashfootwear.co.za';//replace with your email

$headers =  'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1 ". "\r\n";
$headers .= "From: Website Notification <{$from}>". "\r\n";
$headers .= "Reply-To: <{$from}> ". "\r\n ";
$headers .= "Subject: {$subject} ". "\r\n ";
$headers .= "X-Mailer: PHP/".phpversion();

mail($to, $subject, $message, $headers);

die("Email sent to: ".$to);
