from xai import app
import requests
import json

GOOGLE_API_KEY='' # To be filled. You can get this from google api console
GOOGLE_GEOCODING_URL='https://maps.googleapis.com/maps/api/geocode/json?'

def getPlaceInfoFromGoogle(address):
	initValue = {
		'location': {
			"lat": 35.7544369,
			"lng": 139.4019369
		},
		'place_id': 'ChIJDXxXa8TVfJYRwdjCIQPbedg',
		'country': 'Taiwan',
		'formatted_address': address
	}

	params = {
		'key': GOOGLE_API_KEY,
		'address': address
	}

	r = requests.get(GOOGLE_GEOCODING_URL, params=params)
	result = json.loads(r.text)

	if result['status'] == 'OK':
		info = result['results'].pop(0)
		for addressComp in info['address_components']:
			if 'country' in addressComp['types']:
				initValue['country'] = addressComp['long_name']

		initValue['formatted_address'] = info['formatted_address']
		initValue['location'] = info['geometry']['location']
		initValue['place_id'] = info['place_id']

	return initValue
