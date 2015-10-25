## Readme

### Initialise
1. Install tools: Typescript, Typescript definitions, and Bower

        npm install -g typescript        
        npm install -g tsd
        npm install -g bower
                
1. Install dependencies via tsd and bower

        tsd install
        bower install 

### Configure VSCode                   
1. tsconfig.json
        
	{
                "compilerOptions": {
                "target": "ES5",
                "module": "commonjs",
                "sourceMap": true
            }
        }
        
1. .vscode/settings.json

        {                
                "files.exclude": {
                "**/*.js": { "when": "$(basename).ts"}, // Hide tsd generated .js files
                "**/*.js.map": {} // Hide .map files
                }
        }             


                
                
                      