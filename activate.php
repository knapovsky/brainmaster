<?php

  include 'config.php';
 
  if (!(empty($_GET['act']))) { 
  
  
    $link = $_GET['act'];
  
    // vytazeni zaznamu uzivatele
    $vysledek=mysql_query("SELECT * FROM users WHERE hash = '$link'");
    $row = mysql_fetch_array($vysledek);
    
    if (!(empty($row))) {
      $user = $row['id'];
      $update = "UPDATE users SET state = '1' WHERE id = '$user'";
      mysql_query($update); 
    }
  }
    
  $_SESSION['state'] = 4
  ?>
  
  <script>
    location.replace("index.php");
  </script>  
  
  <?
      
  /*
  $chyba = 1;
        
  // osetreni prazdnosti jmena
  if (empty($nick)) {
    $chyba = 0;
    echo "<span style=\"color: red; font-size: 12px;\">Empty nick.</span><br />";
  }   
                                      
  // kontrola emailove adresy
  if (!(ereg("^.+@.+\..+$", $mail))) {
    $chyba = 0;
    echo "<span style=\"color: red; font-size: 12px;\">Wrong email.</span><br />";
  }

  // kontrola veku
  if (!(is_numeric($age))) {
    $chyba = 0;
    echo "<span style=\"color: red; font-size: 12px;\">Wrong age format.</span><br />";
  }

  // osetreni prazdnosti hesla
  if (empty($pass)) {
    $chyba = 0;
    echo "<span style=\"color: red; font-size: 12px;\">Empty password.</span><br />";
  } 

  // osetreni prazdnosti hesla
  if (empty($repass)) {
    $chyba = 0;
    echo "<span style=\"color: red; font-size: 12px;\">Empty password check.</span><br />";
  }  
                         
  // osetreni totoznosti hesla
  if (!($pass === $repass)) {
    $chyba = 0;
    echo "<span style=\"color: red; font-size: 12px;\">Passwords are not identical.</span><br />";
  }  
  
  
  // nastaveni session pro zobrazeni prislusneho divu 
  
  if ($chyba) {
  
    // vygenerovani retezce
    $rand_hash = rand(0,1000000);
    $link = md5($rand_hash);
    
    // zasifrovani pass
    $pass = md5($repass);
    
    // zapsani noveho uzivatele do DB
    $insert = "INSERT INTO users VALUES ('','$nick','$pass','$mail','$age','','$link','0')"; 
    mysql_query($insert);
    
    // odeslani registrace - klik na send (statistika)
    $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','6')"; 
    mysql_query($insert);
  
    $_SESSION['mail'] = $mail;  // predani emailu
    $_SESSION['state'] = 2;  // registracni link
    

    // odeslani emailu      
    $mail = new PHPMailer();
    $mail->IsHTML(true);
    $mail->IsSMTP();  // k odesl??n?? e-mailu pou??ijeme SMTP server
    $mail->Host = "mail.cesy.cz";  // zad??me adresu SMTP serveru
    $mail->SMTPAuth = true;               // nastav??me true v p????pad??, ??e server vy??aduje SMTP autentizaci
    $mail->Username = "smtp@cesy.cz";   // u??ivatelsk?? jm??no pro SMTP autentizaci
    $mail->Password = "123456";            // heslo pro SMTP autentizaci
    $mail->From = "";   // adresa odes??latele skriptu
    $mail->FromName = "BrainMaster"; // jm??no odes??latele skriptu (zobraz?? se vedle adresy odes??latele)
                      
    $mail->AddAddress($mail);  // p??id??me p????jemce
                      
    $mail->Subject = "Activation link BrainMaster";    // nastav??me p??edm??t e-mailu
    $mail->Body = "To activate you account click on URL below:<br /><a href=\"http://itu.cesy.cz/activate.php?act=".$link."\">http://itu.cesy.cz/activate.php?act=".$link."</a>";
    $mail->WordWrap = 50;   // je vhodn?? taky nastavit zalomen?? (po 50 znac??ch)
    $mail->CharSet = "utf-8";   // nastav??me k??dov??n??, ve kter??m odes??l??me e-mail
                      
    if(!$mail->Send()) {  // ode??leme e-mail
       echo 'Do??lo k chyb?? p??i odesl??n?? e-mailu.';
       echo 'Chybov?? hl????ka: ' . $mail->ErrorInfo;
    }  
    */

    
