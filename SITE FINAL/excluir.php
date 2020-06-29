<?php
include('connect.php');
$codigo = $_GET['codigo'];
$busca = mysql_query("Select * from `tb_veiculos` where `codigo` = '$codigo'");
$veiculo = mysql_fetch_array($busca);
if(mysql_query("Delete from `tb_veiculos` where `codigo` = '$codigo';")){
	unlink($veiculo['foto']);
}

?>