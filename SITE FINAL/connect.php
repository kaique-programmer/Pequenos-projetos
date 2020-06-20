<?php
if(!@$con = mysql_connect('localhost','root','')){
	echo "Erro na base de dados";
}
if(!mysql_select_db('bd_veiculos', $con)){
	echo "Erro ao selecionar base de dados!";
}
mysql_query("SET NAMES utf8");
?>
