<template>
	<nav>
	    <div class="nav-wrapper">
	    	<router-link to="/" class="brand-logo">Serials</router-link>
	    	<ul class="right hide-on-med-and-down">
	    		
			    <router-link
					tag="li"
					to="/"
					axact
					active-class="active"
			    >
			    	<a href="#">Main</a>
			    </router-link>

			    <router-link
					tag="li"
					to="/list"
					active-class="active"
			    >
			    	<a href="#">List</a>
			    </router-link>		    			    
	    	</ul>
	    </div>
	</nav>
</template>


<script>
export default {
	methods: {

	}
}
</script>

<style lang="scss" scoped>
	nav {
		padding: 0 2rem;
	}
</style>