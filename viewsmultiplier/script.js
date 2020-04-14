

function visit(){
		var a=document.getElementById("entersite").value;
		var b=document.getElementById("enternumber").value;
		var c="file:///C:/Users/User/Desktop/Duplicate_Views/index.html";
		if(a!=null)
			for(var i=1;i<=b;i++){
				location.replace(a);
				location.replace(c);
			}
		
}



