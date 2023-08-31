<?php

if (isset($_POST['submit'])){

  $name = $_REQUEST ['name'];
  $email = $_REQUEST ['email'];
  $message = $_REQUEST ['message'];
  
  // Set your email address where you want to receive emails. 
  $to = "cputera4@gmail.com";
  $mailheader = "From: ".$name." <".$email."> \r\n";

  $send_email = mail($to,$message,$mailheader);

  echo($send_email) ? 'Pesan Terkirim' : 'Error';

}
?>