<?php 
    $drink = (isset($_POST['drink'])) ? $_POST['drink'] : '';
    switch ($come) {
        case "Виски": $radio = "Виски";
            break;
        case "Водка": $radio = "Водка";
            break;
        case "Вино": $radio = "Вино";
            break;
        case "Шампанское": $radio = "Шампанское";
            break;
        case "Мартини": $radio = "Мартини";
            break;
        case "Безалкогольные напитки": $radio = "Безалкогольные напитки";
            break;                
        default: $radio = "";
            break;
    }

    $come = (isset($_POST['come'])) ? $_POST['come'] : '';
    switch ($come) {
        case "Приду": $radio = "Я приду";
            break;
        case "Затрудняюсь ответить": $radio = "Затрудняюсь ответить";
            break;
        case "Не приду": $radio = "Я не приду";
            break; 
    default: $radio = "";
            break;
 }

    if(isset($_POST['submit'])) {
        $to = "shura.lepilow@yandex.ru";
        $subject = "Опрос для свадьбы";
        $name = $_POST['name'];
        $come = $_POST['come'];
        $drink = $_POST['drink'];

        $body = "Имя: $name\n Присутствие: $come\n Напиток:\n $drink ";

       $sent = mail($to, $subject, $body);
       if($sent){
       echo "<script style:'color:rgb(184, 149, 53); text-aling:center;' type=\"text/javascript\">alert('Спасибо за помощь в организации свадьбы. Будем счастливы видеть вас!');</script>";
       } else {
       echo "Спасибо за помощь в организации свадьбы. Будем счастливы видеть вас!";
    }
    }
?>
