import mobx ,{ extendObservable } from 'mobx'

export default class {
	constructor(args) {
		extendObservable(this, {
			isFetchingReverse: false,

			input: "",
			messages: []
		})
	}

	/**
	 * Reverse the input string
	 * @param  {string} s
	 * @return {Promise}
	 */
	reverse (s) {
		this.isFetchingReverse = true

		return fetch(`${window.CONFS.apiServer}/reverse_echo?s=${encodeURI(s)}`)
		.then((response) => response.json())
		.then((response) => {
			if (response.status==='OK') {
				this.messages.push("Server said: "+response.result)
			} else {
				this.messages.push("Server error: "+response.message)
			}

			this.isFetchingReverse = false
		})
		.catch((err) => {
			this.messages.push("Server error: "+err)
			this.isFetchingReverse = false
		})
	}
}
