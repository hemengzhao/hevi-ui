<template>
  <div class="req-Animation-writing">
    <h1>文字动画</h1>
    <div>
        <heviAnimationWriting v-if='showOne' classType='one'>
            12344556
        </heviAnimationWriting>
        <hevi-Button @click="switchFn('showOne')">重载</hevi-Button>
    </div>
     <div>
        <heviAnimationWriting v-if='showTwo' classType='two'>
            12344556
        </heviAnimationWriting>
        <hevi-Button @click="switchFn('showTwo')">重载</hevi-Button>
    </div>
     <div>
        <heviAnimationWriting v-if='showThree' classType='three'>
            12344556
        </heviAnimationWriting>
        <hevi-Button @click="switchFn('showThree')">重载</hevi-Button>
    </div>
     <div>
        <heviAnimationWriting v-if='showFour' classType='four'>
            12344556
        </heviAnimationWriting>
        <hevi-Button @click="switchFn('showFour')">重载</hevi-Button>
    </div>
     <div>
        <heviAnimationWriting v-if='showFive' classType='five'>
            12344556
        </heviAnimationWriting>
        <hevi-Button @click="switchFn('showFive')">重载</hevi-Button>
    </div>
     <div>
        <heviAnimationWriting v-if='showSix' classType='six'>
            12344556
        </heviAnimationWriting>
        <hevi-Button @click="switchFn('showSix')">重载</hevi-Button>
    </div>
     <div>
        <heviAnimationWriting v-if='showSeven' classType='seven'>
            12344556
        </heviAnimationWriting>
        <hevi-Button @click="switchFn('showSeven')">重载</hevi-Button>
    </div>
    <div>
        <heviAnimationWriting v-if='showEight' classType='eight'>
            12344556
        </heviAnimationWriting>
        <hevi-Button @click="switchFn('showEight')">重载</hevi-Button>
    </div>

  </div>
</template>
<script>
export default {
  name: 'animationWriting',
  data() {
      return {
          showOne: true,
          showTwo: true,
          showThree: true,
          showFour: true,
          showFive: true,
          showSix: true,
          showSeven: true,
          showEight: true,
      };
  },
  methods: {
    switchFn(type){
      this[type] = false;
      setTimeout(() => {
        this[type] = true;
      }, 100)
    }
  }
};
</script>

<style lang="scss">
// @import '../../style/button/index.scss';
.req-Animation-writing{
  font-size: 50px;
}
</style>
