<template>
  <div class="req-button">
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>
   <div>
     <hevi-Button>默认按钮</hevi-Button>
     <hevi-Button  type="primary">主要按钮</hevi-Button>
   </div>
   <div>
      <hevi-Button plain>朴素按钮</hevi-Button>
      <hevi-Button plain type="primary">主要按钮</hevi-Button>
   </div>
   <div>
      <hevi-Button round>朴素按钮</hevi-Button>
      <hevi-Button round type="primary">主要按钮</hevi-Button>
   </div>
   <div>
      <hevi-Button circle>朴素按钮</hevi-Button>
      <hevi-Button circle type="primary">主要按钮</hevi-Button>
   </div>
   <hevi-Button  type="primary" :loading="true">加载中</hevi-Button>
  </div>
</template>
<script>
export default {
  name: 'reqButton',
  data() {
      return {
          clor: 0
      };
  },
};
</script>

<style lang="scss">
// @import '../../style/button/index.scss';

</style>
