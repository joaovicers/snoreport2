/*
Author: JOAO VICTOR DE A OLIVEIRA
Organization: University Of Brasília and Federal Institute of Brasília
*/

$('.download').on('click',function(){
	$.get('download.html',function(data){
		$('.main').html(data);
	});
});


$('.starter').on('click',function(){
	$.get('starter.html',function(data){
		$('.main').html(data);
	});
});

