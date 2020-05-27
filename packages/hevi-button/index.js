import heviButton from './src/button.vue';

heviButton.install = function (Vue) {
    Vue.component(heviButton.name, heviButton);
};

export default heviButton;

// // 导入组件
// import colorPicker from '../color-picker/src/color-picker.vue';

// // 为组件提供 install 安装方法，供按需引入
// colorPicker.install = function (Vue) {
//     Vue.component(colorPicker.name, colorPicker);
// };

// // 默认导出组件
// export default colorPicker;