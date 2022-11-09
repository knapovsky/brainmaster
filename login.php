<?php

  include 'config.php';

  $_SESSION['state'] = 5;
    
  // Nalogovani se - klik na log in tlacitko
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','4')"; 
  mysql_query($insert);
  
?>
    
  <script>
    location.replace("index.php");
  </script>
    
