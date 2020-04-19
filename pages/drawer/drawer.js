//index.js


Component({
	methods: {
		showModal(e) {
			this.setData({
				modalName: e.currentTarget.dataset.target
			})
		},
		hideModal(e) {
			this.setData({
				modalName: null
			})
		},
	}
})
