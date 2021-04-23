<?php 
if(isset($_POST['submit'])){

$to = 'info@rosimport.ru'; 
$from = "noreply@rosimport.ru";  

$email = $_POST['email'];

$subject = "Запрос прайс-листа";
$mail_to_myemail = "Отправьте прайс-лист
Почтовый адрес: $email

---------------------------
Обратный звонок";        
$headers = "From: $from \r\n";     
/* Отправка сообщения, с помощью функции mail() */
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
echo "Сообщение отправлено. " . $first_name . ", Наш менеджер свяжется с Вами для уточнения деталей";
echo "<br /><br /><a href='https://rosimport.ru'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 5 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://rosimport.ru/message_send.html");}
window.setTimeout("changeurl();",0001);
</script>