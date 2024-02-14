(function($) { "use strict";	

	/* Parallax effect */
	
	if ($(window).width() > 1199) {
		$().enllax();
	}
	

	//Loading page animation

	$(".animsition").animsition({
		inClass: 'fade-in-down-sm',
		outClass: 'fade-out-down-sm',
		inDuration: 400,
		outDuration: 400,
		linkElement: '.animsition-link',
		// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		unSupportCss: ['animation-duration',
		  '-webkit-animation-duration',
		  '-o-animation-duration'
		],
		//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

		overlay: false,

		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body'
	});
	

	/* Page scroll to id */
    
	$(window).load(function(){"use strict";
		
		/* Page Scroll to id fn call */
		$(".home-side-nav a.btn-user-profile,.navbar a.link,.one-page-nav a.nav-link,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"a.link, .one-page-nav a.nav-link, .home-side-nav a.btn-user-profile",
			offset: 70,
			scrollSpeed: 800,
			scrollEasing: "easeInOutCubic"
		});
		
		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		if ($(window).width() < 1200) {
			$(".navbar a.link,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
				offset: -30,
			});
		}
	
		//Animation after load
		
		$('body.triger-anime').removeClass('triger-anime');		
		
	});


	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();
	
	/* Shop filters */

	$(function(){
		$('.shop-mix-wrapper-1').mixItUp( {
			selectors: {
				target: '.shop-mix-wrap-1'
			},
			animation: {
				duration: 700
			}
		});	
	});
	
	//Input number
	
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.on('click', function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.on('click', function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
			
	
	$(document).ready(function(){"use strict";
		
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 350;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
				
	});
	
 
	/* DebouncedResize Function */
	
	(function ($) { 
		var $event = $.event, 
			$special, 
			resizeTimeout;				
		$special = $event.special.debouncedresize = { 
			setup : function () { 
				$(this).on('resize', $special.handler);
			}, 
			teardown : function () { 
				$(this).off('resize', $special.handler);
			}, 
			handler : function (event, execAsap) { 
				var context = this, 
					args = arguments, 
					dispatch = function () { 
						event.type = 'debouncedresize';
						
						$event.dispatch.apply(context, args);
					};								
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}								
				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			}, 
			threshold : 150 
		};
	} )(jQuery);
	
	
    
    
})(jQuery); 