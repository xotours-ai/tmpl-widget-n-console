const path = require('path')
const fs = require('fs')

let cssFolder = path.resolve(__dirname, '../build/static/css')
let jsFolder = path.resolve(__dirname, '../build/static/js')

// var jsfiles = fs.readdirSync()

// read in css content
var cssContent = null
fs.readdirSync(cssFolder).forEach(file => {
	if (file.match(/^main\.[0-9a-zA-Z]+\.css$/)) {
		cssContent = fs.readFileSync(path.resolve(cssFolder, file), "utf8")
	}
})

if ( !cssContent) {
	throw Exception("Cannot find the compiles css files at", cssFolder)
}

// inject to js file
var jsContent = null
fs.readdirSync(jsFolder).forEach(file => {
	if (file.match(/^main\.[0-9a-zA-Z]+\.js$/)) {
		let jsPath = path.resolve(jsFolder, file)
		console.log('inject into file: ', jsPath);

		jsContent = fs.readFileSync(jsPath, "utf8")
		jsContent = jsContent.replace("_CSS_CONTENT_", cssContent.replace(/\n/g, ' ').replace(/[\\$'"]/g, "\\$&"))

		fs.writeFileSync(path.resolve(jsFolder, '../thrid-party.js'), jsContent)
	}
})

if ( !jsContent) {
	throw Exception("Cannot find the compiles js files at", jsFolder)
}
