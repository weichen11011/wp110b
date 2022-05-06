<?php
$email = $_REQUEST['email']
$password = $_REQUEST['password']

if(preg_match('/@/'),$email){
    echo '電子信箱',$email,'格式正確。'
}
else{
    echo '電子信箱',$email,'格式不正確。'
}

if(preg_match('/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-z9])[a-zA-Z0-9]{8,}/'),$password){
    echo '密碼',$password,'格式正確。'
}
else{
    echo '密碼',$password,'格式不正確。'
}
?>