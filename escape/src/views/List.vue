<template>
	<div>

		<div class="col s6 offset-s3">
			
			<form @submit.prevent="findSerial">
				<div class="input-field">
				    <input id="find" type="text" v-model="find">
				    <label for="find">Find Serial</label>
				</div>	
				<button class="btn" type="submit">Find serial</button>			
			</form>

			<div class="col s12 m6 cards">
				<div class="card" v-for="(serial, index) in serials" :key="serial.show.id">
					<div class="card-image">
						<img :src="serial.show.image.original">
						<span class="card-title" style="position: static; color: black;">{{ serial.show.name }}</span>
					</div>
					<div class="card-action">
						<router-link
							v-bind:to="'serial/' + serial.show.id">
							<a href="#">Подробнее о сериале</a>
						</router-link>
					</div>
				</div>
			</div>			

		</div>

		
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'list',
	data(){
    return {
			serials: [],
			serialName: '',
    	}
	},
	created: function(){
		if (this.$store.getters.getSerials[0]){
			this.serials = this.$store.getters.getSerials;
		}
		else{
			axios.get(this.$store.getters.getLink).then((response) => {
				this.serials = response.data;
				this.$store.dispatch('setSerials', this.serials);
			});
		}
	},
	methods: {
		findSerial(){
			this.serialName = this.find;
			let find = false;
			for (let i = 0; i < this.serials.length; i++){
				if (this.serials[i].show.name == this.serialName){
					find = true;
					this.$router.push('/serial/' + this.serials[i].show.id);
					break;
				}
			}
			if (find == false){
				this.$router.push('/serial/none');
			}
		},
	}
}

</script>

<style lang="scss" scoped>
	.cards{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 2rem;
	}
	.card{
		width: 20rem;
	}
	.card-image{
		position: static;
	}
</style>
