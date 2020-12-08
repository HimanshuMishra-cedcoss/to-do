// console.log("hello");
var str;

 var c='<input type="checkbox" class="check1">'

 var b2='<button class="del">DEL</button>'
 // var b1='<button class="done">Done</button>'
var editstr;
$(document).ready(function(){
	$("#add").on("click",function(){
		$(".dataget").val(str);
		 str=$("#task").val();
		$(".data").append("<li contenteditable='true'>  "+str+" "+b2+"</li>");
			$(".del").on("click",function(){
    		$(this).parent().remove();
  			});
  		$(document).on("dblclick","li",function(){
  				console.log("cdbc")
  				var x=$(this).remove();
  				$(".donetask").append(x);
  				$(".del").on("click",function(){
    		$(this).parent().remove();
  			});
  			})
		})
	})
		
