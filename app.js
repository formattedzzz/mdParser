
let path = require('path')

let md = require('markdown').markdown

let matter = require('gray-matter')

let fs = require('fs')

let postpath = path.resolve(__dirname, 'markdown')

let excerpt_sign = require('./config.js').excerpt_sign

let excerpt_num = require('./config.js').excerpt_num

// let filelist =  fs.readdirSync(mdpath)

// console.log(filelist)

let postArr = []

let excerptor = function(file, options) { 
	file.excerpt = file.content.substr(0, excerpt_num)
}

let filelist = fs.readdirSync(postpath)
//读取markdown文件夹下所有md文件的文件名

filelist.forEach(function (file) {

	let mdpath = path.join(postpath, file)

	let raw = fs.readFileSync(mdpath, 'utf-8')

	let filename = file.substr(0, file.length - 3)
	// console.log(raw)
	let re = new RegExp(excerpt_sign)
	
	let options = null 

	if (re.test(raw)) {
		options = {excerpt_separator: excerpt_sign}
	} else {
		options = {excerpt: excerptor}
	}

	// console.log(options)

	let mdobj = matter(raw, options)

	let mdhtml = md.toHTML(raw)

	postArr.push({name: filename,mdobj, mdhtml})

})

if(!fs.existsSync(__dirname + 'dist')){
	fs.mkdirSync('./dist')
	// console.log('已经存在') fs.existss已经废弃，无法判断
}
if(!fs.existsSync(__dirname + 'data')){
	fs.mkdirSync('./data')
}

postArr.forEach(function(post){

	let newpath = path.join(__dirname, 'dist', post.name+'.html')

	fs.writeFileSync(newpath, post.mdhtml, 'utf-8')

	let newpath2 = path.join(__dirname, 'data', post.name+'.js')

	fs.writeFileSync(newpath2, 'module.exports = exports = '+ JSON.stringify(post.mdobj), 'utf-8')

})

//下一步工作，遍历data文件夹，生成不同标签、日期对应的文章数据结构