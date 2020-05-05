//variables that need to be set first
var wikilang = "null"
var wikimoreon = "null"
var wikinoarticle = "null"
var wikinopicture = "null"

function SwitchLanguage(inter1,tree1, wiki1) {
	$("#"+inter1).click();
	$("#"+tree1).click();
	$("#"+wiki1).click();
}

function SwitchInterfaceToFR() {
	//barres de recherche
	$("#searchinput").attr('placeholder', 'Chercher une espèce, un clade, ...');
	$("#searchinput2").attr('placeholder', 'Espèce ou clade de départ...');
	$("#searchinput3").attr('placeholder', "Espèce ou clade d'arrivée...");

	//menu de gauche
	$("#gototuto").html('À propos');
	$("#thetol").html("L'arbre du vivant")
	$("#about").html("À propos")
	$("#contact").html("Contact")
	$("#share").html("Partager")
	$("#flybutton").html('"Voler" dans l\'arbre')
	$("#flytext").html("Si cette case est cochée, le déplacement dans l'arbre après une recherche se fait par une animation.")
	$("#settings").html('Paramètres')
	$("#langs").html('Langue')
	//menu de choix des langues
	$("#langfortree").html('Arbre')
	$("#int-fr").html('français')
	$("#int-en").html('anglais')
	$("#tree-fr").html('français')
	$("#tree-en1").html('anglais (serveur 1)')
	$("#tree-en2").html('anglais (serveur 2)')
	$("#wiki-fr").html('français')
	$("#wiki-en").html('anglais')
	$("#wiki-ru").html('russe')
	$("#wiki-it").html('italien')
	$("#wiki-es").html('espagnol')
	$("#wiki-ca").html('catalan')
	//wiki modal 
	wikimoreon = "lire la suite sur "
	wikinoarticle = "Pas d'article concernant ce groupe dans <i class='fa fa-wikipedia-w'></i>ikipedia."
	wikinopicture = "Pas de photo associée dans <i class='fa fa-wikipedia-w'></i>ikipedia."
	//button-names
	$("#closelangchoice, #closemodalwikidescription, #closedetails2, #BigLeftMenu").html("Fermer")
	$("#viewfullancestry").html("Voir tout le lignage")
	//Tuto text
	$("#tuto-page1").html("<b>Lifemap</b> est un outil interactif pour explorer l'arbre du vivant. Le concept utilisé dans <b>Lifemap</b> est simple : l'explorations se fait en zoomant dans l'arbre comme sur une carte géographique.</p>");
	$("#tuto-page2").html("<br><br>La version actuelle de l'arbre contient environ 1,8 million d'espèces. Elle est basée sur la taxonomie publiée par le <a href='https://www.ncbi.nlm.nih.gov'>NCBI</a>. Cette taxonomie est mise à jour régulièrement.</p>")
	$("#tuto-page3").html("Tous les noeuds dans l'arbre sont cliquables. Ceci donne accès à des informations (description et photo) provenant de <i class='fa fa-wikipedia-w'></i>ikipedia. <br>Des \"trajets\" dans l'arbre peuvent être affichés en cliquant sur la flèche (<i class='fa fa-level-up'></i>) dans le coin en bas à droite et en indiquent le nom d'une espèce de départ et d'une espèce d'arrivée. Ceci permet d'identifier facilement l'ancêtre commun le plus récent (MRCA) entre deux lignées.</p>")
	$("#tuto-page4").html("Lifemap a été écrit et est maintenu par Damien de Vienne. Les serveurs hébergeant Lifemap sont fournis par le Laboratoire de Biométrie et Biologie Évolutive. Le soutien technique concernant ces serveurs est assuré par Bruno Spataro et Stephane Delmotte.<br><br>")
	$("#tuto-page5").html("<span xmlns:dct='http://purl.org/dc/terms/'' property='dct:title'>Lifemap</span> est sous sous licence CC-BY-NC :<br><a rel='license' href='http://creativecommons.org/licenses/by-nc/4.0/'>Creative Commons Attribution-NonCommercial 4.0 International License</a>.")

}
function SwitchInterfaceToEN() {
	//barres de recherche
	$("#searchinput").attr('placeholder', 'Search species, clades, ...');
	$("#searchinput2").attr('placeholder', 'From species, clade...');
	$("#searchinput3").attr('placeholder', "To species, clade...");
	//menu de gauche
	$("#gototuto").html('About');
	$("#thetol").html("The Tree of Life")
	$("#about").html("About")
	$("#contact").html("Contact")
	$("#share").html("Share")
	$("#flybutton").html('"Fly" to new locations')
	$("#flytext").html('When checked, zooming to new locations after a search in the search bar will be done by a smooth animation')
	$("#settings").html('Settings')
	$("#langs").html('Language')
	//menu de choix des langues
	$("#langfortree").html('Tree')
	$("#int-fr").html('french')
	$("#int-en").html('english')
	$("#tree-fr").html('french')
	$("#tree-en1").html('english (server 1)')
	$("#tree-en2").html('english (server 2)')
	$("#wiki-fr").html('french')
	$("#wiki-en").html('english')
	$("#wiki-ru").html('russian')
	$("#wiki-it").html('italian')
	$("#wiki-es").html('spanish')
	$("#wiki-ca").html('catalan')
	//wiki modal 
	wikimoreon = "more on "
	wikinoarticle = "No article concerning this group in <i class='fa fa-wikipedia-w'></i>ikipedia."
	wikinopicture = "No associated picture on <i class='fa fa-wikipedia-w'></i>ikipedia."
	//button-names
	$("#closelangchoice").html("Close")
	$("#closemodalwikidescription").html("Close")
	//button-names
	$("#closelangchoice, #closemodalwikidescription, #closedetails2, #BigLeftMenu").html("Close")
	$("#viewfullancestry").html("View full ancestry")
	//Tuto text
	$("#tuto-page1").html("<b>Lifemap</b> is an interactive tool to explore the Tree of Life. The concept used in <b>Lifemap</b> is simple: exploring is done by zooming and panning just like for a geographic map.");
	$("#tuto-page2").html("<br><br>The current tree contains 199 917 species and is based on the taxonomy published by the <a href='https://www.ncbi.nlm.nih.gov'>NCBI</a>. The taxonomy is updated regularly.")
	$("#tuto-page3").html("All the nodes in the tree can be clicked. It displays information (description and picture) concerning the taxa (retrieved from the <i class='fa fa-wikipedia-w'></i>ikipedia page, if any). <br>\"Routes\" in the taxonomy can also be displayed by clicking on <i class='fa fa-level-up'></i> on the bottom right corner and entering a source and a destination. This allows identifying easily the most recent common ancestor (MRCA) of two lineages.")
	$("#tuto-page4").html("Lifemap was written and is maintained by Damien de Vienne. Servers hosting Lifemap are provided by the Laboratory of Biometry and Evolutionary Biology (LBBE, Lyon, France). Technical support concerning these servers is ensured by Bruno Spataro and Stephane Delmotte.")
	$("#tuto-page5").html("<span xmlns:dct='http://purl.org/dc/terms/'' property='dct:title'>Lifemap</span> is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by-nc/4.0/'>Creative Commons Attribution-NonCommercial 4.0 International License</a>.")

}
function SwitchTreeVersion(treeversion) {
	console.log(treeversion)
	if (treeversion==="tree-fr") ServerAddress = "lifemap-fr.univ-lyon1.fr";
	if (treeversion==="tree-en1") ServerAddress = "lifemap.univ-lyon1.fr";		
	if (treeversion==="tree-en2") ServerAddress = "lifemap-ncbi.univ-lyon1.fr";
	setmaplayer('http://'+ServerAddress+'/retina_tiles/{z}/{x}/{y}.png');
	loadSearchFunction() //reload search functions with correct server address based on tree language. 
}
function SwitchWikiVersion(wikiversion) {
	wikilang = wikiversion.split("-")[1];
}



// console.log(wikilang)

// <script src="server-address.js" type="text/javascript"></script>

// server-address.js

function chooselang(x) {
	if (!$(x).hasClass('selectedlang')) {
		console.log("il faut faire qqch")
		$(x).siblings().removeClass("selectedlang");
		$(x).addClass("selectedlang");
		if (x.id==="int-fr") SwitchInterfaceToFR()
		if (x.id==="int-en") SwitchInterfaceToEN()
		if (x.parentNode.id==="treelang") SwitchTreeVersion(x.id)
		if (x.parentNode.id==="wikilang") SwitchWikiVersion(x.id)
		//AND EVERYTIME THEIR IS A SWITCH OF THE LANGUAGE, 
		//WE STORE THE NEW COMBINATION OF CHOICES FOR LATER START.
		savelang = $("#interfacelang > .selectedlang").attr('id')+"+"+$("#treelang > .selectedlang").attr('id')+"+"+$("#wikilang > .selectedlang").attr('id');
		window.localStorage.setItem("lang", savelang);
	}
	else {
		console.log("rien à faire")

	}
}

