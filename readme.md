### Build Instructions For Local Environment

1. Clone repo to local machine.
2. run ```npm install``` to install node dependencies
3. Start local [MongoDB]
4. Provide MongoDB credentials in environment variables file '.env' ( Do not commit .env file ) 
5. Run ```grunt build-all``` to compile sass and write concatenated css and javascript to dist directory
6. Run ```npm run start``` to start application
7. Point browser at localhost:3000

### MongoDB Installation Instructions
[MongoDB Install Instructions]


### Grunt Task Runner Instructions
1. Grunt must be installed on local machine. See [Grunt Install].
To use Grunt you must have ruby and sass installed on your machine and on your path.
Confirm that they are installed.
```
ruby -v         --> ruby 2.4.2p198
sass -v         --> outputs Sass 3.5.2
```

##### Compiling Sass, Concat CSS, and Minify CSS
1. Compiless sass files from public/styles/sass/ and writes css output to public/styles/css/
2. Concat css and minify to output file public/dist/main.min.css
```
grunt build-css
```

##### Concat JS, Babelize, and Uglify
1. Concats js vendor files and angular application files
2. Babelizes, compiling es6 -> es5
3. Uglifies/minifies the concated/babelized file and writes output to public/dist/main.min.js 

Note - Uglify is temporarily disabled. Need to find work around that will prevent uglify from breaking Angular app.


[MongoDB]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
[MongoDB Install Instructions]: https://treehouse.github.io/installation-guides/mac/mongo-mac.html
[Grunt Install]: https://gruntjs.com/getting-started
