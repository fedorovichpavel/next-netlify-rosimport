<?php 
/*
Вы скачали её с сайта Epic Blog 
*/
if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
$to = 'info@rosimport.ru'; 


$from = "noreply@rosimport.ru";  
/* Указываем переменные, в которые будет записываться информация с формы */
$name = $_POST['name'];
$phone = $_POST['phone'];
$subject = "Обратный звонок РОСИМПОРТ";
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Перезвоните по указанному номеру
Имя отправителя: $name
Номер телефона: $phone
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