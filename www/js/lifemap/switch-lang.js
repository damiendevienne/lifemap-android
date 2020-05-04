function SwitchToFR() {
	$("#searchinput").attr('placeholder', 'Chercher une espèce, un clade, ...');
	$("#gototuto").html('Tutoriel');
	$("#thetol").html("L'arbre du vivant")
	$("#about").html("À propos")
	$("#contact").html("Contact")
	$("#share").html("Partager")
	$("#flybutton").html('"Voler" dans l\'arbre')
	$("#flytext").html("Si cette case est cochée, le déplacement dans l'arbre après une recherche se fait par une animation.")
	$("#langchosen").html('Langue : FR')
}
function SwitchToEN() {
	$("#searchinput").attr('placeholder', 'Search species, clades, ...');
	$("#gototuto").html('Tutorial');
	$("#thetol").html("The Tree of Life")
	$("#about").html("About")
	$("#contact").html("Contact")
	$("#share").html("Share")
	$("#flybutton").html('"Fly" to new locations')
	$("#flytext").html('When checked, zooming to new locations after a search in the search bar will be done by a smooth animation')
//	$("#langchosen").html('Langage : EN')
}
