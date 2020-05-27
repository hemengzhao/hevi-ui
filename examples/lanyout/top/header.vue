<template>
	<div class="req-header">
		<p>
			HeVi-UI
		</p>
		<div></div>
	</div>
</template>
<script>
export default {
	name: "reqHeader",
	data() {
		return {};
	}
};
</script>
<style scoped lang="scss">
.req-header {
	height: 100px;
	border-bottom: 1px solid #999;
	line-height: 100px;

	display: flex;
	& > p {
		margin: 0;
		width: 200px;
	}
	& > div {
		flex: 1;
	}
}
</style>
