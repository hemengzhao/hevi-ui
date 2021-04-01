import heviAnimationWriting from './src/index.vue';

heviAnimationWriting.install = function (Vue) {
    Vue.component(heviAnimationWriting.name, heviAnimationWriting);
};

export default heviAnimationWriting;

// // 导入组件
// import colorPicker from '../color-picker/src/color-picker.vue';

// // 为组件提供 install 安装方法，供按需引入
// colorPicker.install = function (Vue) {
//     Vue.component(colorPicker.name, colorPicker);
// };

// // 默认导出组件
// export default colorPicker;