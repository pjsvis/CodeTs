## Readme

### Initialise
1. Install Typescript, Typescript definitions, and Bower


        npm install -g typescript        
        npm install -g tsd
        npm install -g bower
                
1. Initialise tsd and bower

        tsd init
        bower init

1. Install dependencies

        bower install angular --save
        bower install 

### Configure                        
1. Create tsconfig.json

		{
            "compilerOptions": {
                "target": "ES5",
                "module": "amd",
                "sourceMap": true
            }
        }
        
1. Create a hello.ts file
1. Create tasks.json
        
                Ctrl+Shift+P Configure Task Runner

1. Run the build task

                Ctrl+Shit+B                


                
                
                      