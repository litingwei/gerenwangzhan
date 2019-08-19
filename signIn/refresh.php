<?php
header('content-type:text/html;charset="utf-8" ');
error_reporting(0);

if($_COOKIE['username']){
    $arr2=array('username'=>$_COOKIE['username'],'code'=>0,'info'=>'successIn');
    echo json_encode($arr2);
}else{
    $arr2=array('username'=>$_COOKIE['username'],'code'=>1,'info'=>'failIn');
    echo json_encode($arr2);
}