<template functional>
	<div class="v-card-title type-label"><slot /></div>
</template>

<style lang="scss" scoped>
.v-card-title {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: var(--v-card-padding);
}
</style>
