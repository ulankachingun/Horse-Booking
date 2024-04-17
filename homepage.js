let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.92238894019336, lng: 106.92329165369512},
    zoom: 15
  });
}

document.getElementById('location-select').addEventListener('change', function() {
  const selectedLocation = this.value;
  displayLocation(selectedLocation);
});

function displayLocation(location) {
  let coordinates;

  switch(location) {
    case 'location1':
      coordinates = {lat: 48.52678701827392, lng: 101.36871605635336}; // Location 1 coordinates, done
      break;
    case 'location2':
      coordinates = {lat: 46.18929573820606, lng: 100.70630218922993}; // Location 2 coordinates, done
      break;
    case 'location3':
      coordinates = {lat: 48.97878134584384, lng: 89.93362156479844}; // Location 2 coordinates, , done
      break;

      case 'location4':
        coordinates = {lat: 48.81546182144604, lng: 103.52781072131413}; // Location 1 coordinates, , done
        break;
      case 'location5':
        coordinates = {lat: 49.46192580653259, lng: 105.97031368551555}; // Location 2 coordinates, done
        break;
      case 'location6':
        coordinates = {lat: 48.08158842886465, lng: 114.54212432946062}; // Location 2 coordinates,  done
        break;
        case 'location7':
            coordinates = {lat: 44.90151359793974, lng: 110.13696117501792}; // Location 1 coordinates, done
            break;
          case 'location8':
            coordinates = {lat: 45.76622865942127, lng: 106.26643528385624}; // Location 2 coordinates, done
            break;
          case 'location9':
            coordinates = {lat: 45.565391088568, lng: 95.86498085278733}; // Location 2 coordinates, done
            break;
      
            case 'location10':
              coordinates = {lat: 46.35816126174359, lng: 108.36167925723805}; // Location 1 coordinates, done govisumber
              break;
            case 'location11':
              coordinates = {lat: 47.32264918952108, lng: 110.65311737396902}; // Location 2 coordinates, kentii done
              break;
            case 'location12':
              coordinates = {lat: 47.111657469855544, lng: 92.84598499580693}; // Location 2 coordinates, khovd , done
              break;

              case 'location13':
                coordinates = {lat: 50.428954647051285, lng: 100.15196250855817}; // Location 2 coordinates, khovsgol done
                break;
              case 'location14':
                coordinates = {lat: 49.03232998098558, lng: 104.07915435847349}; // Location 2 coordinates, orkhon , done
                break;
          
                case 'location15':
                  coordinates = {lat: 43.563342151071666, lng: 104.40293503699557}; // Location 1 coordinates, omnogovi , donev
                  break;
                case 'location16':
                  coordinates = {lat: 46.24702372847023, lng: 102.78416773546198}; // Location 2 coordinates, ovorknahnai , done
                  break;
                case 'location17':
                  coordinates = {lat: 50.233262537486674, lng: 106.2353912745948}; // Location 2 coordinates, slenge , done
                  break;
                  case 'location18':
                      coordinates = {lat: 46.684515147996336, lng: 113.27787705304885}; // Location 1 coordinates, sukhbaatar , done
                      break;
                    case 'location19':
                      coordinates = {lat: 47.867351779475996, lng: 105.2529966043251}; // Location 2 coordinates, tOv , done
                      break;
                    case 'location20':
                      coordinates = {lat: 49.728578611564316, lng: 93.26925475298901}; // Location 2 coordinates, uvs , done
                      break;
                
                      case 'location21':
                        coordinates = {lat: 48.11507615708412, lng: 96.76630909483842}; // Location 1 coordinates, zavkhan , done
                        break;
                      case 'location0':
                        coordinates = {lat: 47.92117449233672, lng: 106.92796108833159}; // Location 2 coordinates, ulaanbaatar , done
                        break;
                      
    default:
        coordinates = {lat: 47.92117449233672, lng: 106.92796108833159}; // Default coordinates
  }

  map.setCenter(coordinates);
  map.setZoom(15); // Adjust zoom level as needed

  new google.maps.Marker({
    position: coordinates,
    map: map,
    title: 'Selected Location'
  });
}
