<template lang="html">
	<div class='animation-writing'>
      <span :class='`animation-writing_${classType}`' v-for="(text, i) in name" :key='i' :style='{animationDelay: `${i * .05 + 0.5}s`}'>{{text}}</span>
  </div>
</template>
<script>
export default {
  name: 'heviAnimationWriting',
  data(){
    return {
      name: this.$slots.default[0].text
    };
  },
  props: {
    classType: {
      type: String,
      default: 'one'
    }
  },
  computed: {
  },
  mounted(){
    console.log(this.$slots, 'console.log(this.$slots.default)')
  },
  methods: {
  }
};
</script>
<style lang="scss">
@import '../../style/animation/writing.scss';
</style>
