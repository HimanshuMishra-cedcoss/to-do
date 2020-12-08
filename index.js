// console.log("hello");
var str;
var j1=0;
 var c='<input type="checkbox" class="check1">'

 var b2='<button class="del">DEL</button>'
 
var editstr;
$(document).ready(function(){
	$("#add").on("click",function(){
		 var b1=`<button id="edit${j1}" onclick="edit(this.id)">EDIT</button>`
		 var i='<input type="text" name="" class="dataget">'
		 str=$("#task").val();
		// console.log(str)
		$("ul").append("<li>"+c+" "+str+i+" "+b1+" "+b2+"</li>");
			j1++;
			console.log(j1,"hnjsifu")
		    
			
		

			$(".del").on("click",function(){
				console.log("cdsv");
    		$(this).parent().remove();
    		
  			});
		})
	})
		

function edit(x){
	console.log(x)
	
			console.log("button clicked")
			$(".dataget").val(str);
			console.log(str);
			
}