<?php

  switch($_SESSION['state'])
  {

    case 0: ?>

        <script type="text/javascript">
        makeMeVisible("survey");
        </script>

      <?
      break;

    case 1: ?>

        <script type="text/javascript">
        makeMeVisible("score");
        </script>

      <?
      break;

    case 2: ?>

        <script type="text/javascript">
        makeMeVisible("reg_send");
        </script>

      <?
      break;

    case 3: ?>

        <script type="text/javascript">
        makeMeVisible("reg");
        </script>

      <?
      break;


    case 4: ?>

        <script type="text/javascript">
        makeMeVisible("login");
        log_out_invis();
        </script>

      <?
      break;

    case 5: ?>

        <script type="text/javascript">
        hideAll();
        start_game();
        log_out_vis();
        </script>

      <?
      break;

  }}}
?>
