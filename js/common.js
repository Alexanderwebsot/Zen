$(document).ready(function () {
  

  jQuery(function($){
  	$(document).mouseup(function (e){ // событие клика по веб-документу
  		var div = $(".modal-menu"); // тут указываем ID элемента
  		if (!div.is(e.target) // если клик был не по нашему блоку
  		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
  			$('.modal-menu').removeClass('modal-menu_active');
  		}
  	});
  });
  $('.header-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.header-arrow__left'),
    nextArrow: $('.header-arrow__right'),
  });
  $('.header-menu').on('click', function() {
  	$('.modal-menu').addClass('modal-menu_active');
  })
})