
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
let uniqueArr = function (array) {

	return Array.from(new Set(array));

}

let mdfilelist = fs.readdirSync(postpath)
//读取markdown文件夹下所有md文件的文件名

mdfilelist.forEach(function (file) {

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

if(fs.existsSync(__dirname + 'dist')){
	console.log('已经存在1')
	fs.mkdirSync('./dist')
	
}
if(fs.existsSync(__dirname + 'data')){
	console.log('已经存在2')
	fs.mkdirSync('./data')
	
}

postArr.forEach(function(post){

	let newpath = path.join(__dirname, 'dist', post.name+'.html')

	fs.writeFileSync(newpath, post.mdhtml, 'utf-8')

	let newpath2 = path.join(__dirname, 'data', post.name+'.js')

	fs.writeFileSync(newpath2, 'module.exports = exports = '+ JSON.stringify(post.mdobj), 'utf-8')

})

let datapath = path.resolve(__dirname, 'data')

let totalData = {
	Tags: [],
	Cates: [],
	Dates: [],
	Titles: [],
	Briefs: [],
	Contents: []
}

let mdDatas = []

let mddatalist = fs.readdirSync(datapath)

mddatalist.forEach(function(item, index){

	let mddata = require(path.join(datapath, item))

	mdDatas.push(mddata)
	// console.log(mddata)

	totalData.Titles.push(mddata.data.title)

	totalData.Tags.push(mddata.data.tags)

	totalData.Cates.push(mddata.data.categories)

	totalData.Dates.push(mddata.data.date)

	totalData.Briefs.push(mddata.excerpt)

	totalData.Contents.push(mddata.content)

})

let alltag = []
let allcate = []

totalData.Tags.forEach(function(item){

	item.forEach(function(subitem){

		alltag.push(subitem)

	})
})
totalData.Cates.forEach(function(item){

	item.forEach(function(subitem){

		allcate.push(subitem)

	})
})

totalData.Tags = uniqueArr(alltag)

totalData.Cates = uniqueArr(allcate)

// console.log(totalData.Tags)
// console.log(totalData.Cates)

let Tags = {}

let Cates = {}

totalData.Tags.forEach(function(item){

	Tags[item] = []

	mdDatas.forEach(function(subitem){

		if (subitem.data.tags.indexOf(item) !== -1) {

			Tags[item].push(subitem)
			
		}
	})
})

totalData.Cates.forEach(function(item){
				
	Cates[item] = []

	mdDatas.forEach(function(subitem){

		if (subitem.data.categories.indexOf(item) !== -1) {

			Cates[item].push(subitem)

		}
	})
})
// console.log(Tags)
module.exports = exports = {
	totalData,
	mdDatas,
	Tags,
	Cates
}

