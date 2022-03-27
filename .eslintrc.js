module.exports = {
    env: {
        node: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript/recommended',
        'prettier',
    ],
    rules: {
        // Override/add rules here
    },
};
