<?php
header('content-type:text/html;charset="utf-8" ');
error_reporting(0);
//$_REQUEST能接受get或post提交的数据
$username=$_POST['username'];
$value=time();
setcookie("username",'',time()-1);
$arr2=array('code'=>0,'info'=>'successOut');
echo json_encode($arr2);