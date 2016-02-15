      var map;
      // координаты карты
      var oz = new google.maps.LatLng(55.805044,38.976746);
      var MY_MAPTYPE_ID = 'custom_style';
      function initialize() {
       // стили 
       var featureOpts = [ 
            { "stylers": 
                [ { "hue": "#0000ff" }, 
                  { "saturation": 50 }, 
                  { "lightness": 10 }, 
                  { "gamma": 1 }, 
                  { "visibility": "on" }, 
                  { "weight": 0.5 }
                ] 
            } ];
        var mapOptions = {
          zoom: 13,
          center: oz,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
          },
          mapTypeId: MY_MAPTYPE_ID
        };
 
        map = new google.maps.Map(document.getElementById('location__map'), mapOptions);
        var styledMapOptions = {
          name: 'Custom Style'
        };
        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
      }
