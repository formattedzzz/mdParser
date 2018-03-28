---
title: 初步探索webworker
date: 2017-11-07 15:20:55
tags: [webworker,H5,canvas]
categories: [实践, 干货]
---

>前言：一直都觉得只有java才能谈多线程这么高逼格的话题，可惜java和javascript的关系就好比雷锋跟雷峰塔的关系

#### js的单线程特性
<!-- more -->
JavaScript引擎是单线程运行的，JavaScript中耗时的I/O操作都被处理为异步操作，它们包括键盘、鼠标I/


``` js
var worker = new Worker("worker.js");
worker.postMessage(data);
worker.onmessage = function(ev){
	var data = ev.data;
};

```

##### [案例源码地址](https://github.com/formattedzzz/H5-web-Worker-exploer)
