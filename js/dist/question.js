$(function(){
	$("#question").on("click",function(){
		if($.cookie("username")){
			$("#questionModal").modal("show");
		}else{
			$("#needLogin").modal("show");
			setTimeout(function(){
				$("#needLogin").modal("hide");
				$("#login-modal").modal("show");
			},1000)
		}
	});
	
	$(".uEditorCustom").summernote({
		height: 300, 
		minHeight: 300,
		maxHeight: 300,
		focus: true,
	});

});
