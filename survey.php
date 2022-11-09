<?php

  include 'config.php';

  $_SESSION['state'] = 0;
    
  // nacteni stranky s dotaznikem
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','9')"; 
  mysql_query($insert);
  
?>
    
  <script>
    location.replace("index.php");
  </script>
    
