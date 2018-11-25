<?php
$nameofOrder = $_POST['nameofOrder'];
$email = $_POST['email'];
$nameofOrder = htmlspecialchars($nameofOrder);
$email = htmlspecialchars($email);
$nameofOrder = urldecode($nameofOrder);
$email = urldecode($email);
$nameofOrder = trim($nameofOrder);
$email = trim($email);

if (mail("ars1.04kz@gmail.com", "Заявка с сайта", "ФИО:".$nameofOrder.". E-mail: ".$email ,"From: madi.orynbassar@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>