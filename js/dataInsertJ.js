jQuery(document).ready(function(){
	jQuery.ajax({
		url: insertrating_ajax.ajax_url,
		data: {
			action: 'initial_data'
		},
		type: 'post',
		success: function(result)
		{
			jQuery('#tihom_rating_div').html(result);
		}
	});
});
jQuery(document).ready(function(){ 
	jQuery('#tihom_rating_div').on('click', '#one', function() { 
		var post_id = jQuery('#tihom-rating-post-id').val();
		jQuery.ajax
		({ 
			url: insertrating_ajax.ajax_url,
			data: {
				action: 'star_rating',
				postid: post_id, 
				rating: 1
			},
			type: 'post',
			success: function(result)
			{
				res = result.split("-");
				if(res[0]>0 && res[0]<=0.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
				}
				if(res[0]>0.25 && res[0]<=0.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
				}				
				if(res[0]>0.75 && res[0]<=1.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.25 && res[0]<=1.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.75 && res[0]<=2.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.25 && res[0]<=2.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.75 && res[0]<=3.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.25 && res[0]<=3.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.75 && res[0]<=4.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.25 && res[0]<=4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}
				if(res[1] !== undefined) {
					var tihom_rating_text = parseFloat(res[0]);
					jQuery('#tihom-rating-text').html("<em>"+tihom_rating_text.toFixed(2) + " Ratings By " + res[1] + " Readers</em>");
				} else {
					jQuery('#tihom-rating-text').html("<em>You have already voted.</em>");
				}
			},
            error: function( error ){
                console.log(error);
            }
		});
	});
	jQuery('#tihom_rating_div').on('click', '#two', function() { 
		var post_id = jQuery('#tihom-rating-post-id').val();
		jQuery.ajax
		({ 
			url: insertrating_ajax.ajax_url,
			data: {
				action: 'star_rating',
				postid: post_id, 
				rating: 2
			},
			type: 'post',
			success: function(result)
			{
				res = result.split("-");
				if(res[0]>0 && res[0]<=0.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
				}
				if(res[0]>0.25 && res[0]<=0.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
				}				
				if(res[0]>0.75 && res[0]<=1.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.25 && res[0]<=1.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.75 && res[0]<=2.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.25 && res[0]<=2.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.75 && res[0]<=3.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.25 && res[0]<=3.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.75 && res[0]<=4.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.25 && res[0]<=4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}
				if(res[1] !== undefined) {
					var tihom_rating_text = parseFloat(res[0]);
					jQuery('#tihom-rating-text').html("<em>"+tihom_rating_text.toFixed(2) + " Ratings By " + res[1] + " Readers</em>");
				} else {
					jQuery('#tihom-rating-text').html("<em>You have already voted.</em>");
				}
			}
		});
	});
	jQuery('#tihom_rating_div').on('click', '#three', function() { 
		var post_id = jQuery('#tihom-rating-post-id').val();
		jQuery.ajax
		({ 
			url: insertrating_ajax.ajax_url,
			data: {
				action: 'star_rating',
				postid: post_id, 
				rating: 3
			},
			type: 'post',
			success: function(result)
			{
				res = result.split("-");
				if(res[0]>0 && res[0]<=0.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
				}
				if(res[0]>0.25 && res[0]<=0.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
				}				
				if(res[0]>0.75 && res[0]<=1.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.25 && res[0]<=1.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.75 && res[0]<=2.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.25 && res[0]<=2.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.75 && res[0]<=3.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.25 && res[0]<=3.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.75 && res[0]<=4.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.25 && res[0]<=4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}
				if(res[1] !== undefined) {
					var tihom_rating_text = parseFloat(res[0]);
					jQuery('#tihom-rating-text').html("<em>"+tihom_rating_text.toFixed(2) + " Ratings By " + res[1] + " Readers</em>");
				} else {
					jQuery('#tihom-rating-text').html("<em>You have already voted.</em>");
				}
			}
		});
	});
	jQuery('#tihom_rating_div').on('click', '#four', function() { 
		var post_id = jQuery('#tihom-rating-post-id').val();
		jQuery.ajax
		({ 
			url: insertrating_ajax.ajax_url,
			data: {
				action: 'star_rating',
				postid: post_id, 
				rating: 4
			},
			type: 'post',
			success: function(result)
			{
				res = result.split("-");
				if(res[0]>0 && res[0]<=0.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
				}
				if(res[0]>0.25 && res[0]<=0.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
				}				
				if(res[0]>0.75 && res[0]<=1.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.25 && res[0]<=1.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.75 && res[0]<=2.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.25 && res[0]<=2.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.75 && res[0]<=3.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.25 && res[0]<=3.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.75 && res[0]<=4.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.25 && res[0]<=4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}
				if(res[1] !== undefined) {
					var tihom_rating_text = parseFloat(res[0]);
					jQuery('#tihom-rating-text').html("<em>"+tihom_rating_text.toFixed(2) + " Ratings By " + res[1] + " Readers</em>");
				} else {
					jQuery('#tihom-rating-text').html("<em>You have already voted.</em>");
				}
			}
		});
	});
	jQuery('#tihom_rating_div').on('click', '#five', function() { 
		var post_id = jQuery('#tihom-rating-post-id').val();
		jQuery.ajax
		({ 
			url: insertrating_ajax.ajax_url,
			data: {
				action: 'star_rating',
				postid: post_id, 
				rating: 5
			},
			type: 'post',
			success: function(result)
			{
				res = result.split("-");
				if(res[0]>0 && res[0]<=0.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
				}
				if(res[0]>0.25 && res[0]<=0.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
				}				
				if(res[0]>0.75 && res[0]<=1.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.25 && res[0]<=1.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>1.75 && res[0]<=2.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.25 && res[0]<=2.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>2.75 && res[0]<=3.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.25 && res[0]<=3.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>3.75 && res[0]<=4.25) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.25 && res[0]<=4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star-half-full checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}				
				if(res[0]>4.75) {
					jQuery('#five').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#four').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#three').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#two').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
					jQuery('#one').removeClass('fa fa-star fa-star-half-full checked').addClass('fa fa-star checked');
				}
				if(res[1] !== undefined) {
					var tihom_rating_text = parseFloat(res[0]);
					jQuery('#tihom-rating-text').html("<em>"+tihom_rating_text.toFixed(2) + " Ratings By " + res[1] + " Readers</em>");
				} else {
					jQuery('#tihom-rating-text').html("<em>You have already voted.</em>");
				}
			}
		});
	});

});