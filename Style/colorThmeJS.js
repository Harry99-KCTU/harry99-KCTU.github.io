// JavaScript Document


var testBool = true;

document.getElementById("theme-color").onclick = function() {  

	Boolean (testBool);
	function thmelogic() {
		 testBool = !testBool;
         console.log('Toggled bool is', testBool);
		
		if (testBool == false) {
			reset()
		}
		
		else {
			dark()
		}
		
	}
	thmelogic()	
}
	
document.getElementById("color").onclick = function() {  
	reset()
}


function dark() {
 document.body.style.backgroundColor="black";
 document.body.style.color = "white";
 document.getElementById("head").style.backgroundColor="#263CA7";
 document.getElementById("foot").style.backgroundColor="#263CA7";
 document.getElementById("main").style.color="#d0b430";	
}

function reset() {
 document.body.style.backgroundColor="white";
 document.body.style.color = "black";
 document.getElementById("head").style.backgroundColor="#304BD0";
 document.getElementById("foot").style.backgroundColor="#304BD0";
 document.getElementById("main").style.color="#A79026";	
}




