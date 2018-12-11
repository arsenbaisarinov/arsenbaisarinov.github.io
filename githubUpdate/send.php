<?php
$nameofOrder = $_POST['nameofOrder'];
$phone = $_POST['phone'];
$nameofOrder = htmlspecialchars($nameofOrder);
$phone = htmlspecialchars($phone);
$nameofOrder = urldecode($nameofOrder);
$phone = urldecode($phone);
$nameofOrder = trim($nameofOrder);
$phone = trim($phone);

if (mail("ars1.04kz@gmail.com", "Заявка с сайта", "Имя: ".$nameofOrder.". Телефон: ".$phone ,"From: madi.orynbassar@gmail.com \r\n")){
    echo "сообщение успешно отправлено";
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>