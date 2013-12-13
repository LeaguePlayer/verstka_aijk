$(function(){

	ymaps.ready(init);
    var myMap,
        firstPlacemark,
        secondPlacemark,
        adress;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [ 57.149381, 65.544136 ],
            zoom: 17,
        });

        firstPlacemark = new ymaps.Placemark([57.149352 ,65.54199], { 
            hintContent: 'г. Тюмень, ул. Орджоникидзе, д. 63', 
            balloonContent: 'г. Тюмень, ул. Орджоникидзе, д. 63</h3><p>Россия, Тюменская область, Тюмень</p>' 
        });

        secondPlacemark = new ymaps.Placemark([57.113394, 65.566317], { 
            hintContent: 'улица Николая Зелинского, 23/1', 
            balloonContent: '<h3>улица Николая Зелинского, 23/1</h3><p>Россия, Тюменская область, Тюмень</p>' 
        });

        myMap.geoObjects.add(firstPlacemark);
        myMap.geoObjects.add(secondPlacemark);
        myMap.controls.add('mapTools');
        myMap.controls.add('zoomControl');

        adress = $('.main-map .adress');

        adress.find('.adr2').click(function(){
        	adress.find('.active').removeClass('active');
        	$(this).parent().addClass('active');
			myMap.panTo([
			    [ 57.113318, 65.568077 ]
			]);
			return false;
        });

        adress.find('.adr1').click(function(){
        	adress.find('.active').removeClass('active');
        	$(this).parent().addClass('active');
			myMap.panTo([
			    [ 57.149381, 65.544136 ]
			]);
			return false;
        });

    }

});