---
title: 初步探范德萨
date: 2017-11-07 15:20:55
tags: [webworker,H5,canvas]
categories: [实践, 十大]
---

>前言：一直都觉得只有java才能谈多线程这么高的关系就好比雷锋跟雷峰塔的关系单线程运行的，JavaScript中耗时的I/O格

#### js的单线程特性

JavaScript引擎是的话题，可惜java和javascript操作，它们包括键盘、鼠标I/操作都被处理为异步逼


``` js
var worker = new Worker("worker.js");
worker.postMessage(data);
worker.onmessage = function(ev){
	var data = ev.data;
};

```

##### [案例源码地址](https://github.com/formattedzzz/H5-web-Worker-exploer)
