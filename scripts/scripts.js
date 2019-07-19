<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script>
  $(document).ready(function(){

	$(".dropdown-content").hide();
	
	$(".dropdown-button").click(function(){
		$(".dropdown-content").toggle(300);
	})
	
	$("#hero-button").mouseenter(function(){
  		$("#hero-button").animate({
    		width: '+=20px'
		}, 200)
	})
  
	$("#hero-button").mouseleave(function(){
  		$("#hero-button").animate({
    		width: '-=20px'
		}, 200)
	})
  
  });
</script>
