<?php

$to = "polocoolpass@gmail.com";

$subject = "New Order";

$name  = isset($_POST['name'])  ? $_POST['name'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$color = isset($_POST['color']) ? $_POST['color'] : '';
$title = isset($_POST['title']) ? $_POST['title'] : '';
$size  = isset($_POST['size'])  ? $_POST['size'] : '';
$mail  = isset($_POST['mail'])  ? $_POST['mail'] : false;
$message = (!$mail)? '<h2>Оформлен новый заказ!</h2><table>
					<tbody>
						<tr>
							<td><b>Имя</b>:</td><td>' . $name . '</td>
						</tr>
						<tr>
							<td><b>Телефон</b>:</td><td>' . $phone . '</td>
						</tr>
						<tr>
							<td><b>Название</b>:</td><td>' . $title. '</td>
						</tr>
						<tr>
							<td><b>Цвет</b>:</td><td>' . $color . '</td>
						</tr>
						<tr>
							<td><b>Размер</b>:</td><td>' . $size . '</td>
						</tr>
					</tbody>
				</table>' : '<h2>Клиент оcтавил свои данные, перезвоните ему!</h2><table>
					<tbody>
						<tr>
							<td><b>Имя</b>:</td><td>' . $name . '</td>
						</tr>
						<tr>
							<td><b>Телефон</b>:</td><td>' . $phone . '</td>
						</tr>						
						<tr>
							<td><b>E-mail</b>:</td><td>' . $mail . '</td>
						</tr>
					</tbody>
				</table>';

$header = "From:" . $to ." \r\n";

$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html; charset='utf-8';\r\n";

$retval = mail($to, $subject, $message, $header);
if ($retval == true) {
    echo "Success";
} else {
    echo 'Error';
}
