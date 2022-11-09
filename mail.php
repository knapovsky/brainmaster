<?php

require ("class.phpmailer.php");

    // vygenerovani retezce
    $rand_hash = rand(0,1000000);
    $link = md5($rand_hash);

    $mail_addr = "martin@knapovsky.com";

                        $mail = new PHPMailer();
                        $mail->IsHTML(true);
                        $mail->IsSMTP();  // k odeslání e-mailu použijeme SMTP server
                        $mail->Host = "mail.cesy.cz";  // zadáme adresu SMTP serveru
                        $mail->SMTPAuth = true;               // nastavíme true v případě, že server vyžaduje SMTP autentizaci
                        $mail->Username = "smtp@cesy.cz";   // uživatelské jméno pro SMTP autentizaci
                        $mail->Password = "123456";            // heslo pro SMTP autentizaci
                        $mail->From = "";   // adresa odesílatele skriptu
                        $mail->FromName = "BrainMaster"; // jméno odesílatele skriptu (zobrazí se vedle adresy odesílatele)

                        $mail->AddAddress($mail_addr);  // přidáme příjemce

                          $mail->Subject = "Activation link BrainMaster";    // nastavíme předmět e-mailu
                          $mail->Body = "To activate you account click on URL below:<br><a href=\"http://itu.cesy.cz/activate.php?act=".$link."\">http://itu.cesy.cz/activate.php?act=".$link."</a>";
                        $mail->WordWrap = 50;   // je vhodné taky nastavit zalomení (po 50 znacích)
                        $mail->CharSet = "utf-8";   // nastavíme kódování, ve kterém odesíláme e-mail

                        if(!$mail->Send()) {  // odešleme e-mail
                           echo 'Došlo k chybě při odeslání e-mailu.';
                           echo 'Chybová hláška: ' . $mail->ErrorInfo;
                        }
                        else
                        {
                           echo "<span style=\"color: green; font-size: x-small;\">Dotaz byl úspěšně odeslán.</span>";
                        }

?>
