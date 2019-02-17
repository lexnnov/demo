<template>
    <div class="count">
        <div v-if="amount" class="count_amount">{{amount}}</div>
        <div v-if="text" class="count_text">{{text}}</div>
        <v-icon v-if="icon" style="max-width: 16px" size="16" color="#8796a5" >{{icon}}</v-icon>
    </div>
</template>

<script>
	export default {
		name: 'Count',
		props: ['text', 'icon', 'amount'],
	};
</script>

<style lang="scss">

</style>
