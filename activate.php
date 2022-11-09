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
    $mail->IsSMTP();  // k odeslání e-mailu použijeme SMTP server
    $mail->Host = "mail.cesy.cz";  // zadáme adresu SMTP serveru
    $mail->SMTPAuth = true;               // nastavíme true v případě, že server vyžaduje SMTP autentizaci
    $mail->Username = "smtp@cesy.cz";   // uživatelské jméno pro SMTP autentizaci
    $mail->Password = "123456";            // heslo pro SMTP autentizaci
    $mail->From = "";   // adresa odesílatele skriptu
    $mail->FromName = "BrainMaster"; // jméno odesílatele skriptu (zobrazí se vedle adresy odesílatele)
                      
    $mail->AddAddress($mail);  // přidáme příjemce
                      
    $mail->Subject = "Activation link BrainMaster";    // nastavíme předmět e-mailu
    $mail->Body = "To activate you account click on URL below:<br /><a href=\"http://itu.cesy.cz/activate.php?act=".$link."\">http://itu.cesy.cz/activate.php?act=".$link."</a>";
    $mail->WordWrap = 50;   // je vhodné taky nastavit zalomení (po 50 znacích)
    $mail->CharSet = "utf-8";   // nastavíme kódování, ve kterém odesíláme e-mail
                      
    if(!$mail->Send()) {  // odešleme e-mail
       echo 'Došlo k chybě při odeslání e-mailu.';
       echo 'Chybová hláška: ' . $mail->ErrorInfo;
    }  
    */

    
