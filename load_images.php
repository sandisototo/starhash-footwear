<?php
$filenameArray = [];

if (isset($_POST['page'])) {
  $page = $_POST['page'];

  $directory = null;
  if( $page === "men.html"){
    $directory = '/images/s/categories/men_all/';
  }else if($page === "women.html"){
    $directory = '/images/s/categories/women_all/';
  }

}

if (isset($_POST['cat'])){
      $cat = $_POST['cat'];
      $directory = '/images/s/categories/'.$cat.'/';
  }

  $handle = opendir(dirname(realpath(__FILE__)).$directory);
        while($file = readdir($handle)){
            if($file !== '.' && $file !== '..'){
                array_push($filenameArray, $directory.$file);
            }
        }

  echo json_encode($filenameArray);


?>
