<?php


$fromemail ="success@kalpayfinancials.com"; // Set your from Gmail address here;
$toemail="success@kalpayfinancials.com"; // Set your to Gmail address here;

    $statusMsg='';
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject = "This is massage from KalPay website.";
    $message = $_POST['message'];
    
    
    $email_message = '<p><b>Name:</b> <br/>'.$name.'</p>
                        <p><b>Email:</b> <br/>'.$email.'</p>
                        <p><b>Phone:</b> <br/>'.$phone.'</p>
                        <p><b>Message:</b><br/>'.$message.'</p>';

                        if($_FILES["file"]["name"]!= ""){
                            $email_message.="Please find the attachment";
                        }

    
    $semi_rand = md5(uniqid(time()));
    $headers = "From: ".$fromemail;
    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
 
    $headers .= "\nMIME-Version: 1.0\n" .
    "Content-Type: multipart/mixed;\n" .
    " boundary=\"{$mime_boundary}\"";
 
    if($_FILES["file"]["name"]!= ""){  
        $strFilesName = $_FILES["file"]["name"];  
        $strContent = chunk_split(base64_encode(file_get_contents($_FILES["file"]["tmp_name"])));  
        $email_message .= "This is a multi-part message in MIME format.\n\n" .
        "--{$mime_boundary}\n" .
        "Content-Type:text/html; charset=\"iso-8859-1\"\n" .
        "Content-Transfer-Encoding: 7bit\n\n" .
        $email_message .= "\n\n";
        $email_message .= "--{$mime_boundary}\n" .
        "Content-Type: application/octet-stream;\n" .
        " name=\"{$strFilesName}\"\n" .
        //"Content-Disposition: attachment;\n" .
        //" filename=\"{$fileatt_name}\"\n" .
        "Content-Transfer-Encoding: base64\n\n" .
        $strContent  .= "\n\n" .
        "--{$mime_boundary}--\n";
    } else {
        $email_message .= "This is a multi-part message in MIME format.\n\n" .
        "--{$mime_boundary}\n" .
        "Content-Type:text/html; charset=\"iso-8859-1\"\n" .
        "Content-Transfer-Encoding: 7bit\n\n" .
        $email_message .= "\n\n";
        $email_message .= "--{$mime_boundary}\n" ;
    }

    if(mail($toemail, $subject, $email_message, $headers)){
        echo $statusMsg= "Email send successfully";
        // header('Location: ../contact.html');
    }else{
        echo $statusMsg= "Not sent";
    }


?>
   