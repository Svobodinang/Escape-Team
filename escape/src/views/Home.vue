<template>
	
	<div class="row">
		<div class="col s6 offset-s3">
			
			<form @submit.prevent="findSerial">
				<div class="input-field">
				    <input id="find" type="text" v-model="find">
				    <label for="find">Find Serial</label>
				</div>	
				<button class="btn" type="submit">Find serial</button>			
			</form>

		</div>		
	</div>	
</template>

<script>
import axios from 'axios'


export default {
	name: 'home',
	data(){
    return {
			  serials: [],
			  serialName: '',
    	}
	},	
	methods: {
		findSerial() {
			this.serialName = this.find;
			
			if (this.$store.getters.getSerials[0]){
				this.serials = this.$store.getters.getSerials;
			}
			else{
				axios.get(this.$store.getters.getLink).then((response) => {
					this.serials = response.data;
					this.$store.dispatch('setSerials', this.serials);
				});
			}

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
	},
	destroyed(){

	}
}
</script>

<style lang="scss" scoped>
	form{
		padding-top: 10rem;
	}
</style>
