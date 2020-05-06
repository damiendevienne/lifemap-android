function AddTaxidToBox(e, taxid, el) {
	$(el).addClass("badge-success")
	$(el).attr("title", "Added")
	$(el).text("ok")
	//get taxid and copy.
	$("#textarea").val($("#textarea").val() + ' ' + taxid);			
	e.stopPropagation();
}

$("#clickonfavostar").click(function() {
	//CHANGER L'ICONE DE L'ÉTOILE
	$(this).find('i').toggleClass('fa-star-o fa-star')
	$(this).find('i').toggleClass('unsavedfavo savedfavo')

	console.log("j'ai cliqué")
})
//This will contain what concerns the saving (restoring is in action.js) of favorites
WWW = document.querySelector("#favoritesdiv").innerHTML
console.log(WWW)
//window.localStorage.setItem("favoris", WWW)
$("#favoritesdiv").append(WWW);
//console.log($("#favoritesdiv").html());
