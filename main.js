$(document).ready(function(){
	$('.contact').on('submit' , function(e){
		e.preventDefault();
	
		
		$('form input, form textarea').each(function(){
			let type = $(this).attr('type');
			if($type.val()===''){
				$type.addClass('error') 
			  $type.siblings('.error-message').fadeIn();
				return;

			}

		})
		 $currentField.removeClass('error');
         $currentField.siblings('.error-message').hide();
	})
})
