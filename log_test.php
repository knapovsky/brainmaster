<?php
 
if ($_POST['log_test']) {

  $email = $_POST['logMail'];
  $pass = $_POST['logMailPass'];


  // osetreni chyb ve formulari
  
  $mail_err = 0;
  $pass_err = 0;
  $state_err = 0;
  $chyba = 1;
    
  // osetreni prazdnosti jmena
  if (empty($email)) {
    $chyba = 0;
    $mail_err = 1;
  }   
                                      
  // kontrola emailove adresy
  if (empty($pass)) {
    $chyba = 0;
    $pass_err = 1;
  }

  // otestovani uzivatelskych udaju v DB
  $vysledek=mysql_query("SELECT * FROM users WHERE email = '$email'");
  $row = mysql_fetch_array($vysledek);
  
  if (empty($row)) {
    $chyba = 0;
    $mail_err = 1;
  } else {
    $pass_db = $row['password'];
    
    if (!($pass_db === md5($pass))) {
      $chyba = 0;
      $pass_err = 1;
    }
    if ($row['state'] == 0) {
      $chyba = 0;
      $state_err = 1;
    }  
  }
  
  if ($chyba) {
  
    $_SESSION['userID'] = $row['id'];
    $_SESSION['state'] = 5;  // play game
    $_SESSION['GUI'] = 2;  // GUI2
    
  // Nalogovani se - klik na log in tlacitko
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','4')"; 
  mysql_query($insert); 
      
   ?>   
    <script>
      location.replace("index.php");
    </script>  
    ?>
 <?php } else {
          //echo "<span style=\"color: red; font-size: 12px;\">Bad login details.</span><br />";
          
          if($mail_err){ $_SESSION['ERRMAIL'] = 1;}
          if($pass_err){ $_SESSION['ERRPASS'] = 1;}
          if($state_err){
          	echo("<div id='not_verified'>Your account has not been verified. Please check your E-Mail.</div>");
          }
          	
      }

}  ?>
    
