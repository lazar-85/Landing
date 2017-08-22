jQuery(document).ready(function($){
	//Местоположение: долгота, широта и коэффициент увеличения
	var latitude = 49.848735,
		longitude = 24.020597,
		map_zoom = 17;

	//Адрес до иконки с маркером
	var marker_url = 'img/adress.png';
		
	
	var	main_color = '#efebe2', //основной цвет
		saturation_value= 3, //насыщенность
		brightness_value= 3; //яркость

	//Стили для элементов на карте
	var style= [ 
		{
			//Насыщенность обозначений на карте
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},  
	    {	//Скрываем обозначения станций метро, вокзалов, аэропортов и прочих транспортных узов на карте
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "on"}
			]
		},
		{
			//Скрываем обозначение дорог на карте
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "on"}
	        ]
	    }, 
		{ 	
			//Скрываем обозначение локальных дорог
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "on"} 
			] 
		},
		{ 
			//Скрываем обозначение магистрали на карте
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "on"}
			] 
		},
		{
			//Скрываем дорожные обозначения на карте
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "on"}
			]
		}, 
		//Стили для разных элементов на карте
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: "#000" },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: "#000" },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: "#407b39" },
				{ visibility: "on" }, 
				{ lightness: "2" }, 
				{ saturation: "2" }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: "#407b39"},
				{ visibility: "on" }, 
				{ lightness: "2" }, 
				{ saturation: "2" }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: "#000" },
				{ visibility: "on" }, 
				{ lightness: "2" }, 
				{ saturation: "2" }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: "#fffd8b" },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}
	];
		
	//Создание точки на карте
	var map_options = {
      	center: new google.maps.LatLng(49.850021, 24.020618),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style
    }
    //Инициализация карты
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	//Добавляем свой маркер местонахождения на карту (свою иконку)			
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(49.849433, 24.020583),
	    map: map,
	    visible: true,
	 	icon: 'img/adress.png',
	});

	//Добавляем свои иконки для кнопок увеличить/уменьшить на карту
	function CustomZoomControl(controlDiv, map) { 
	  	var controlUIzoomIn= document.getElementById('zoom-in'),
	  		controlUIzoomOut= document.getElementById('zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		//Делаем привязку для кнопок увеличить/уменьшить при клике
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//Помещаем кнопки увеличить/уменьшить на карту в левый верхний угол
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});

  