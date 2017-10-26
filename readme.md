### Build Instructions For Local Environment

1. Clone repo to local machine.
2. run ```npm install``` to install node dependencies
3. Start local [MongoDB]
4. Provide MongoDB credentials in environment variables file '.env' ( Do not commit .env file ) 
5. Run ```grunt build-all``` to compile sass and write concatenated css and javascript to dist directory ( Not Yet Implemented)


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


[MongoDB]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
[Grunt Install]: https://gruntjs.com/getting-started