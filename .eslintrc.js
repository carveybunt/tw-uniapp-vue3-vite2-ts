module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'], // 禁止尾部使用分号“ ; ”
    'no-var': 'error', // 禁止使用 var
    indent: ['error', 2], // 缩进2格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    quotes: [2, 'single'], // 使用单引号
    'linebreak-style': [2, 'windows'], // 如果一直出错，设置为 [2,'windows'] 回车符使用windows风格（CRLF），默认是LF:使用mac风格
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    'vue/singleline-html-element-content-newline': 'off', // 不强制换行
    'space-before-function-paren': [2, 'never'], // 方法名紧跟括号，无空格
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 5 }, // vue template模板元素第一行最多5个属性
        multiline: { max: 5 }
      }
    ],
    'vue/multi-word-component-names': 'off' // vue/multi-word-component-names 报错关闭
  }
}
