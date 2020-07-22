export interface Mappable{
	location: {
		lat: number;
		lng: number;
	}
	markerContent(): string
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor() {
		this.googleMap = new google.maps.Map(document.getElementById('map'), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}
	//my approach
	// addUserMarker({ location: { lng, lat } }: { location: { lng: number; lat: number } }) {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: lat,
	// 			lng: lng
	// 		}
	// 	});
	// }
	addUserMarker(mappable: Mappable) {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			}
		});

		marker.addListener('click', ()=>{
			const newInfo = new google.maps.InfoWindow({content: mappable.markerContent()})
			newInfo.open(this.googleMap, marker)
		})
	}
}
