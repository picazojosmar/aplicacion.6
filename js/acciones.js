// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#bee').tap(function(){
			navigator.notification.beep (3);
		});//tap beep
		
		$('#vibrar').tap(function(){
			navigator.notification.vibrate (1000);
		});//tap vibrar
		
	},false);//deviceready
});//ready
			