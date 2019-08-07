$(document).ready(function() {
	$(".hamburger-icon").click(function() {
		$(".side").animate({
			width: 280
		});
		$(".hamburger-icon, .sign, .user-icon").hide();
		$(".close-icon, .menu, .cabinet").show();
	});
	$(".close-icon").click(function() {
		$(".side").animate({
			width: 98
		});
		$(".close-icon, .menu, .cabinet").hide();
		$(".hamburger-icon, .sign, .user-icon").show();
	});

	// $('#pagepiling').pagepiling({
	// 	navigation: false,
	// 	menu: '#menu',
	// 	anchors: ['page1', 'page2', 'page3', 'page4', 'page5']
	// });

	$("#fullpage").fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		menu:'#menu',
		anchors: ['main', 'about', 'catalog', 'services', 'contacts'],
		scrollOverflow: false,
		navigation: false,
		paddingTop: '55px',
		paddingBottom: '20px',
		responsiveHeight: 768,
		responsiveWidth: 1400

	});

	$('.point').magnificPopup({type:'inline'});

	$('.catalog-hamberger').on('click', function(){
        
        $('.catalog-dropdown').slideToggle(300, function(){
            
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
        	}
        
    	});
    
 	});

});
