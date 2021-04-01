<template lang="html">
	<button
		class="hevi-button"
		@click="handleClick"
		:disabled="buttonDisabled || loading"
		:autofocus="autofocus"
		:type="nativeType"
		:class="[
			type ? 'hevi-button--' + type : '',
			buttonSize ? 'hevi-button--' + buttonSize : '',
			{
				'is-disabled': buttonDisabled,
				'is-loading': loading,
				'is-plain': plain,
				'is-round': round,
				'is-circle': circle
			}
		]"
	>
  <i class="el-icon-loading" v-if="loading"></i>
  <i :class="icon" v-if="icon && !loading"></i>
  <slot></slot>
  </button>
  <!-- <button>sdsaudfhu</button> -->
</template>
<script>
export default {
  name: 'heviButton',
  data(){
    return {
    };
  },

  inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

  props: {
    type: {
        type: String,
        default: 'default'
    },
    plain: Boolean,
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled(){
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
<style lang="scss">
@import '../../style/button/index.scss';
</style>
