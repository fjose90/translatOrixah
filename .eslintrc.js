module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": ["react", "jsx-a11y", "import"],
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "global-require": "off",
        "import/prefer-default-export": "off",
        "no-unused-expressions": ["error", { "allowTaggedTemplates": true }]
    }
