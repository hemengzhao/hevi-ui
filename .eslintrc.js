module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  // "off"或者0    //关闭规则关闭
  // "warn"或者1    //在打开的规则作为警告（不影响退出代码）
  // "error"或者2    //把规则作为一个错误（退出代码触发时为1）
  rules: {
    "no-multiple-empty-lines": [2, {
      'max': 1,
      'maxEOF': 2
    }], //空行最多不能超过2行
    "semi": [0, "always"], //必须分号结束！
    "indent": [0, 4], //tab键4个空格
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-var": 0, //禁用var，用let和const代替
    "curly": [0, "all"], //必须使用 if(){} 中的{}
    "prefer-const": 2, //首选const
    "quotes": [0, "single"], //引号类型 `` "" ''
    "no-multi-spaces": 2, //不能用多余的空格

    "no-irregular-whitespace": 2, //不能有不规则的空格
    "no-mixed-spaces-and-tabs": [2, false], //禁止混用tab和空格
    "no-undef": 2, //不能有未定义的变量
    "no-undef-init": 2, //变量初始化时不能直接给它赋值为undefined
    "no-trailing-spaces": 2, //一行结束后面不要有空格

    'arrow-parens': 0, // 允许箭头函数不使用圆括号
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }], //分号前后空格
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }], // 统一逗号周围空格风格
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used"
    }], //不能有声明后未被使用的变量或参数
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }], //对象字面量中冒号的前后空格
    "space-unary-ops": [2, {
      "words": true,
      "nonwords": true
    }], //一元运算符的前/后要不要加空格
  }
};