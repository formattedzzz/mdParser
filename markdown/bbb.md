---
title: 初步都是
date: 2017-11-07 15:20:55
tags: [webworker,H5]
categories: [实践, 垃圾]
---

>前言：阿斯顿法国规划局快乐，可惜java和javascript的关系就好比雷锋

#### js的单线程特性

JavaScript引擎是单线程运行的，J按时发达的萨芬的I跟雷峰塔的关系


``` js
var worker = new Worker("worker.js");
worker.postMessage(data);
worker.onmessage = function(ev){
	var data = ev.data;
};

```

##### [案例源码地址](https://github.com/formattedzzz/H5-web-Worker-exploer)
