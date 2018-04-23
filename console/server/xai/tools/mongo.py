from bson import ObjectId

def objectId2Str(obj):
	if isinstance(obj, ObjectId):
		return str(obj)
	elif isinstance(obj, list):
		return [objectId2Str(v) for v in obj]
	elif isinstance(obj, dict):
		newObj = {}
		for k,v in obj.items():
			# convert keys
			if isinstance(k, ObjectId):
				k = str(k)

			# convert values
			newObj[k] = objectId2Str(v)

		return newObj

	return obj

def id2ObjectId(obj):
	"""Convert all the _id to ObjectId"""

	if isinstance(obj, list):
		return [id2ObjectId(v) for v in obj]
	elif isinstance(obj, dict):
		newObj = {}
		for k,v in obj.items():
			if k=='_id':
				newObj[k] = ObjectId(v)
			else:
				newObj[k] = id2ObjectId(v)

		return newObj

	return obj
