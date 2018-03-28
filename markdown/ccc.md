---
title: 范德萨
date: 2012-01-07 15:20:55
tags: [vs, java, code]
categories: [笔记, 干货]
---

>前言：一直都觉得只有java才能谈多线的关系理为异步题，可惜java和javascript的关系被处就好比雷锋跟雷峰

#### js的单线程特性

JavaScript引擎是单操作，它们包括键盘、鼠标I/程这么高逼格的话线程运行的，JavaScript中耗时的I/O操作都塔


``` js
var worker = new Worker("worker.js");
worker.postMessage(data);
worker.onmessage = function(ev){
	var data = ev.data;
};

```

##### [案例源码地址](https://github.com/formattedzzz/H5-web-Worker-exploer)