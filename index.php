<?php

  include 'config.php';

  if (empty($_SESSION['GUI'])) {
    // rozhodnuti o typu hry


    // ulozeni informace o GUI do session
    $_SESSION['GUI'] = 1;


    // ulozeni ID uzivatele do session
    $_SESSION['userID'] = 1;  // pro host

    $_SESSION['state'] = 5;  // login


  }


    include 'game.php';



    // nacteni prislusne GUI
    /*
    switch ($_SESSION['GUI'])
    {
      case "1":


        // ulozeni nactene GUI do DB pro statistiky
        //$insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','1')";

        //mysql_query($insert);


        //include 'game1.php';
        //echo "1";




        break;
      case "2":


        // ulozeni nactene GUI do DB pro statistiky
        //$insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','1')";

        //mysql_query($insert);



        //echo "2";

        //include 'game2.php';

        break;


      default:
        echo "Nepodařilo se zvolit GUI hry.";
        break;
    }
/*





/*
PROTOTYPY PRO SBER STATISTIK

  Spusteni libovolne hry - klik na start
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','2')";

  mysql_query($insert);


  Nacteni logovaci stranky
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','3')";

  mysql_query($insert);


  Nalogovani se - klik na log in tlacitko
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','4')";

  mysql_query($insert);



  Nacteni registracni stranky
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','5')";

  mysql_query($insert);


5) odeslani registrace - klik na send
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','6')";

  mysql_query($insert);


6) zruseni registrace - klik na krizek
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','7')";

  mysql_query($insert);


7) skonceni hry - nacteni top10
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','8')";

  mysql_query($insert);


8) nacteni stranky s dotaznikem
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','9')";

  mysql_query($insert);


9) zruseni vyplnovani dotazniku
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','10')";

  mysql_query($insert);

10) odeslani vyplneneho dotazniku
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','11')";

  mysql_query($insert);

11) spusteni pathfinderu
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','12')";

  mysql_query($insert);



12) spusteni colour challenge
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','13')";

  mysql_query($insert);



  odhlaseni uzivatele
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','14')";

  mysql_query($insert);


 ukonceni top10
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','15')";

  mysql_query($insert);



  zruseni prihlaseni
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','16')";

  mysql_query($insert);



  // nacteni logovaci stranky po kliku na sign in
  $insert = "INSERT INTO record VALUES ('','$_SESSION[userID]','$_SESSION[GUI]','17')";

  mysql_query($insert);

*/





?>
