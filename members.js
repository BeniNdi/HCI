function getAlert(){
	if(confirm("You want to be directed to the official website?!")){
		txt= "You pressed OK";
		document.getElementById('btn')=goto('www.yahoo.fr');

	}
	else{
		txt="You pressed cancel";
	}
}