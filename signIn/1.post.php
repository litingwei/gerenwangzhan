<?php
header('content-type:text/html;charset="utf-8" ');
error_reporting(0);
//$_REQUEST能接受get或post提交的数据
$username=$_POST['username'];
$value=time();
setcookie("username",$username);
//print_r($_COOKIE);
$arr2=array('username'=>$username,'code'=>0,'info'=>'successIn');
echo json_encode($arr2);
