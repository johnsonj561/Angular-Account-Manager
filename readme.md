### Build Instructions For Local Environment

1. Clone repo to local machine.
2. run ```npm install``` to install node dependencies
3. Start local [MongoDB]
4. Provide MongoDB credentials in environment variables file '.env' ( Do not commit .env file ) 
5. Run ```grunt build-all``` to compile sass and write concatenated css and javascript to dist directory
6. Run ```npm run start``` to start application
7. Point browser at localhost:3000


### Grunt Task Runner Instructions
1. Grunt must be installed on local machine. See [Grunt Install].
To use Grunt you must have ruby and sass installed on your machine and on your path.
Confirm that they are installed.
```
ruby -v         --> ruby 2.4.2p198
sass -v         --> outputs Sass 3.5.2
```

#### Grunt Commands
1. Compile sass to css, minify all css and write result to public/dist/main.min.css
```
grunt build-css
```
2. Concatenate javascript, babelize, and minify result to public/dist/main.min.js/main.min.js 
```
grunt build-js
```
3. Combine both 1 and 2 with Build All
```
grunt build-all
```
4. Watch javascript, sass, and css files for changes. On change, execute Build All
```
grunt watch
// or
grunt
```


[MongoDB]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
[Grunt Install]: https://gruntjs.com/getting-started