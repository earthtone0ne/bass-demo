Vue.component('page-head', {
  template: '#page-head'
})

Vue.component('grid', {
  template: '#grid',
  props: ['colors']

})

Vue.component('animal-list', {
	data: function () {
			return { 
				animals: [
					{name: "Fred", id: 101, img: "http://lorempixel.com/180/150/cats"}, 
					{name: "Bob", id: 33, img: "http://lorempixel.com/181/150/animals"}, 
					{name: "Linda", id: 13, img: "http://lorempixel.com/180/151/animals"}]
			}
	},
	template: `<div>
			<h4>Animals looking for homes:</h4>
			<animal-item v-for="animal, i in animals" v-bind:key="animal.id" :animal="animal" class="animal-item"></animal-item>
	</div>`
	}					
)

Vue.component('animal-item', {
	template: `<div >
			<img :src="animal.img">
			<label>
				<h6>Am animal {{animal.name}}</h6>
				<p>Have very nice teef and like to eat and run.</p>
		</label>
		</div>`,
	props: ['animal']
})