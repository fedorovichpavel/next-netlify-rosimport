<?php 
	
if (isset($_POST['g-recaptcha-response'])) {
$url_to_google_api = "https://www.google.com/recaptcha/api/siteverify";
$secret_key = '6LdxTM0ZAAAAABOLJxItwWN12S3qecpg4GCYTOvJ';
$query = $url_to_google_api . '?secret=' . $secret_key . '&response=' . $_POST['g-recaptcha-response'] . '&remoteip=' . $_SERVER['REMOTE_ADDR'];
$data = json_decode(file_get_contents($query));
    if ($data->success) {
        // Продолжаем работать с данными для авторизации из POST массива
    } else {
        exit('Извините но похоже вы робот');
    }
} else {
    exit('Вы не прошли валидацию reCaptcha');
}

/*
Вы скачали её с сайта Epic Blog 
*/
if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
$to = 'info@rosimport.ru'; // Здесь нужно написать e-mail, куда будут приходить письма   
$from = "no-reply@rosimport.ru"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net
 
/* Указываем переменные, в которые будет записываться информация с формы */


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject_mail = $_POST['subject_mail'];
$message = $_POST['message'];
$subject = "Письмо РОСИМПОРТ";

  
/* Проверка правильного написания e-mail адреса */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
     
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Прочтите сообщение
---------------------------
Имя отправителя: $name
E-mail: $email
Номер телефона: $phone
Тема: $subject_mail
Текст сообщения: $message
---------------------------
Сообщение из https://rosimport.ru/contacts.html";   
     
$headers = "From: $from \r\n";
     
/* Отправка сообщения, с помощью функции mail() */
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
echo "Сообщение отправлено. " . $name . ", Спасибо";
echo "<br /><br /><a href='https://rosimport.ru'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 5 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://rosimport.ru/message_send.html");}
window.setTimeout("changeurl();",0001);
</script>