module.exports = {
  "extends": [
    "airbnb",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react",
    "react-hooks"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 10,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "semi": ["error", "always"],
    "camelcase": ["error", {
      "properties": "never"
    }],
    "consistent-return": 0,
    "constructor-super": "error",
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline"
    }],
    "object-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 1
    }],
    "eol-last": ["error", "always"],
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "import/prefer-default-export": 0,
    "indent": ["error", 4, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1
      },
      "CallExpression": {
        "arguments": 1
      },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoredNodes": ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
      "ignoreComments": false
    }],
    "no-param-reassign": ["error", {
      "props": false
    }],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["warn", "as-needed", {
      "requireForBlockBody": false
    }],
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "no-const-assign": "error",
    "no-underscore-dangle": ["error", {
      "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    }],
    "no-unused-expressions": [2, {
      "allowShortCircuit": true
    }],
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "warn",
    "no-useless-rename": ["error", {
      "ignoreDestructuring": false,
      "ignoreImport": false,
      "ignoreExport": false
    }],
    "no-var": "warn",
    "object-curly-newline": ["error", {
      "consistent": true
    }],
    "prefer-arrow-callback": ["warn", {
      "allowUnboundThis": true
    }],
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": true
    }],
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": "error",
    "yield-star-spacing": ["error", "after"],
    "prefer-spread": "error",
    "generator-star-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "symbol-description": "error",
    "max-len": ["error", {
      "code": 100
    }],
    "sort-keys": ["error", "asc"],
    "react/display-name": [0, {
      "ignoreTranspilerName": true
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-danger": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/destructuring-assignment": [0, {
      "ignoreClassFields": false
    }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "react/void-dom-elements-no-children": "error",
    "react/jsx-tag-spacing": "error",
    "react/jsx-no-literals": "error",
    "react/jsx-wrap-multilines": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/prefer-stateless-function": [0, {
      "ignorePureComponents": true
    }],
    "react/require-default-props": [0, {
      "forbidDefaultForRequired": false
    }],
    "react/prop-types": [0, {
      "ignore": true
    }]
  },
  "settings": {
    "react": {
      "version": "latest"
    }
  }
};
