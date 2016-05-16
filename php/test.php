<?php
    
    header('Content-type: text/json');
    
    $fruits = array (
        "fruits"  => array("title" => "hj", "description" => "haojie"),
        "holes"   => array("title" => "gf", "description" => "guofeng")
    );
    
    $arr = array(
                    array("title" => "hj", "description" => "haojie"),
                    array("title" => "gf", "description" => "guofeng")
                );
    
    echo json_encode($arr);
    
?>