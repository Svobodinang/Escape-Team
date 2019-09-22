<template>
	<div>
		<div v-if="serial">
			<h1>{{ serial.show.name }}</h1>

			<div class="about_film">
				<div class="card">
					<div class="card-image waves-effect waves-block waves-light">
						<img :src="serial.show.image.original">
					</div>
				</div>
				<table>
					<tbody>
						<tr>
							<td class="title">Язык:</td>
							<td>{{ serial.show.language }}</td>
						</tr>
						<tr>
							<td class="title">Список жанров:</td>
							<td>
								<p v-for="genre in serial.show.genres">{{ genre }}</p>
							</td>
						</tr>	
						<tr>
							<td class="title">Статус сериала:</td>
							<td>{{ status }}</td>
						</tr>	
						<tr>
							<td class="title">Ссылка на сайт сериала:</td>
							<td>
								<a :href="serial.show.officialSite" target="_blank">
									{{ serial.show.officialSite }}
								</a>
							</td>
						</tr>
						<tr>
							<td class="title">Рейтинг:</td>
							<td>
								<star-rating :rating="rating" :max-rating="max_rating" :read-only="read_only" :star-size="star_size">
								</star-rating>
							</td>
						</tr>	
						<tr>
							<td class="title">Описание сериала</td>
							<td>{{ serial.show.summary.split('>')[1].split('<')[0] }}</td>
						</tr>
						<tr>
							<td class="title"></td>
							<td><a class="btn" @click="back">К списку сериалов</a></td>
						</tr>		
					</tbody>
				</table>						
			</div>
		</div>
		<div v-else>
			<h2>Serial not found!!!</h2>
			<a class="btn" @click="back">К списку сериалов</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import StarRating from 'vue-star-rating'

export default {
	name: 'serial',
	components: {
		StarRating
	},	
	data(){
		return {
			serial: {},
			rating: 0,
			max_rating: 10,
			read_only: true,
			star_size: 30,
			status: '',
		}
	},
	created: function(){
		this.serial = this.$store.getters.getSerial(this.$route.params.id);
		this.rating = this.serial.show.rating.average;
		this.status = this.$store.getters.getStatus[this.serial.show.status];
	},
	methods: {
		back(){
			this.$router.push('/list');
		}
	}
}

</script>

<style lang="scss" scoped>
	.about_film{
		display: flex;
		justify-content: space-between;
	}
	table{
		margin-left: 10rem;
	}
	.title{
		width: 50%;
		white-space: nowrap;
		vertical-align: top;
	}
	.card{
		height: 10rem;
	}
</style>
