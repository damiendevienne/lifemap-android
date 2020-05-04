/*
Functions that deal with navigation and language switch
*/
function onLoad() {
	console.log(navigator.language)
	//UNCOMMENT WHAT FOLLOWS WHEN THE FR VERSION IS READY. AND TERMINATE THE TRANSLATION (TODO)
	if (navigator.language==="fr-FR") {
	 	SwitchToEN()
	}
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {	    	
	// testCon();
	flyvalue = window.localStorage.getItem("fly")
	if ( flyvalue=== null) {
		window.localStorage.setItem("fly", "false")
	}
	if ( flyvalue=== "true") { //la case était coché en quittant l"appli la dernière fois
		$("#ChoiceExplo").find('i').toggleClass('fa-square-o fa-check-square-o')
	}
	//IL FAUT LA COCHER
	//GESTION DE LA LANGUE
}

