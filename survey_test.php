<?php

if ($_POST['save_survey']) {

  $id = $_SESSION['userID'];

  $sex = $_POST['sex'];
  $gui_score = $_POST['GUI_value'];
  $note = $_POST['navrhy'];
  $gui_type = $_SESSION['GUI'];

  $chyba = 1;
  // pokud se jedna o hosta, zpracuj i vek
  if ($id == 1) {
    $age = $_POST['surAge'];

  if (!(is_numeric($age))) {
    $chyba = 0;
    echo "<span style=\"color: red; font-size: 12px;\">Wrong age format.</span><br />";
  }

  } else {  // jedna se o logovaneho uzivatele, vytahni pohlavi
    $vysledek=mysqli_query($con, "SELECT * FROM users WHERE id = '$id'");
    $row = mysqli_fetch_array($con, $vysledek);

    $age = $row['age'];

  }

  // pokud je vse OK, zapis do DB a presmeruj na novou hru
  if ($chyba) {

    // zapsani noveho dotazniku
    $insert = "INSERT INTO survey VALUES ('','$sex','$age','$gui_type','$gui_score','$note')";
    mysql_query($insert);

    // odeslani vyplneneho dotazniku
    $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','11')";
    mysql_query($insert);

   $_SESSION['state'] = 5;  // play game


    ?>
    <script>
      location.replace("index.php");
    </script>
    <?


  }

}  ?>
