export const lintConfig = `
{
   "env": {
     "browser": true,
     "es2021": true,
     "node": true
   },
   "extends": [
     "eslint:recommended",
     "plugin:react/recommended",
     "plugin:prettier/recommended",
     "prettier",
     "plugin:@typescript-eslint/eslint-recommended",
     "plugin:@typescript-eslint/recommended"
   ],
   "plugins": [
     "react",
     "react-hooks",
     "prettier",
     "@typescript-eslint",
     "import"
   ],
   "rules": {
     "@typescript-eslint/no-explicit-any": "off",
     "react/react-in-jsx-scope": "off",
     "react-hooks/rules-of-hooks": "error",
     "react-hooks/exhaustive-deps": "warn",
     "react/prop-types": "off",
     
     "prettier/prettier": [
       "warn",
       {
         "endOfLine": "auto",
         "tabWidth": 2,
         "useTabs": true,
         "semi": true,
         "singleQuote": false,
         "trailingComma": "all",
         "printWidth": 120,
         "bracketSameLine": false
       }
     ],
     "no-unused-vars": "off",
     "import/order": [
       "error",
       {
         "newlines-between": "always",
         "groups": [
           ["builtin", "external"],
           "internal",
           ["parent", "sibling"],
           "index"
         ],
         "alphabetize": { "order": "asc", "caseInsensitive": true },
         "pathGroups": [
           {
             "pattern": "react",
             "group": "external",
             "position": "before"
           },
           {
             "pattern": "@/components/**",
             "group": "internal",
             "position": "before"
           }
         ],
         "pathGroupsExcludedImportTypes": ["builtin"]
       }
     ]
   },
   "overrides": [
     {
       "files": ["**/*.ts", "**/*.tsx"],
       "rules": {
         "@typescript-eslint/no-unused-vars": [
           "warn",
           { "argsIgnorePattern": "^_" }
         ]
       }
     }
   ],
   "parser": "@typescript-eslint/parser",
   "parserOptions": {
     "ecmaFeatures": {
       "jsx": true
     },
     "ecmaVersion": 12,
     "sourceType": "module"
   },
   "settings": {
     "react": {
       "version": "detect"
     }
   }
 }
`;

export const vscConfig = `
{
	"workbench.colorTheme": "Dracula Theme",
	"security.workspace.trust.untrustedFiles": "open",
	"liveServer.settings.donotShowInfoMsg": true,
	"workbench.iconTheme": "material-icon-theme",
	"editor.fontSize": 16,
	"editor.wordWrap": "wordWrapColumn",
	"editor.tabSize": 2,
	"prettier.endOfLine": "auto",
	"prettier.tabWidth": 2,
	"prettier.useTabs": true,
	"prettier.semi": true,
	"prettier.singleQuote": false,
	"prettier.trailingComma": "all",
	"prettier.printWidth": 120,
	"prettier.bracketSameLine": false,
	"editor.codeActionsOnSave": {
		"source.fixAll": "explicit"
	},
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnPaste": true,
	"editor.formatOnSave": true,
	"editor.formatOnType": true,
	"html.format.enable": false,
	"files.associations": {
		"*.js": "javascriptreact",
		"*.css": "css",
		"css": "css"
	},
	"[vue]": {
		"editor.defaultFormatter": "Vue.volar"
	},
	"[prisma]": {
		"editor.defaultFormatter": "Prisma.prisma",
		"editor.formatOnSave": true
	},
	"diffEditor.ignoreTrimWhitespace": false,
	"javascript.updateImportsOnFileMove.enabled": "always",
	"typescript.updateImportsOnFileMove.enabled": "always",
	"remote.SSH.remotePlatform": {
		"18.222.102.134": "linux",
		"18.224.40.166": "linux",
		"alias": "linux",
		"3.141.165.126": "linux"
	},
	"editor.accessibilitySupport": "off",
	"explorer.confirmDelete": false,
	"[python]": {
		"editor.formatOnType": true
	},
	"extensions.ignoreRecommendations": true,
	"sass.format.deleteWhitespace": false,
	"editor.trimAutoWhitespace": false,
	"editor.smartSelect.selectLeadingAndTrailingWhitespace": false,
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.formatOnSave": true
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.formatOnSave": true
	},
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.formatOnSave": true
	},
	"[css]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"vue.codeActions.savingTimeLimit": 3000,
	"files.eol": "\n",
	"css.styleSheets": [],
	"[postcss]": {
		"emmet.includeLanguages": {
			"postcss": "css"
		}
	},
	"window.customTitleBarVisibility": "windowed",
	"liveshare.accessibility.soundsEnabled": false,
	"window.menuBarVisibility": "compact",
	"prisma.showPrismaDataPlatformNotification": false,
	"[typescriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.formatOnPaste": true,
		"editor.formatOnSave": true
	},
	"files.autoSave": "afterDelay",
	"terminal.integrated.env.windows": {},
	"console-ninja.featureSet": "Community"
}
`;
