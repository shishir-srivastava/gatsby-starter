module.exports = {
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
             "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
}
