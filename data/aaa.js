module.exports = exports = {"content":"\n>前言：一直都觉得只有java才能谈多线程这么高逼格的话题，可惜java和javascript的关系就好比雷锋跟雷峰塔的关系\n\n#### js的单线程特性\n<!-- more -->\nJavaScript引擎是单线程运行的，JavaScript中耗时的I/O操作都被处理为异步操作，它们包括键盘、鼠标I/\n\n\n``` js\nvar worker = new Worker(\"worker.js\");\nworker.postMessage(data);\nworker.onmessage = function(ev){\n\tvar data = ev.data;\n};\n\n```\n\n##### [案例源码地址](https://github.com/formattedzzz/H5-web-Worker-exploer)\n","data":{"title":"初步探索webworker","date":"2017-11-07T15:20:55.000Z","tags":["webworker","H5","canvas"],"categories":["实践","干货"]},"excerpt":"\n>前言：一直都觉得只有java才能谈多线程这么高逼格的话题，可惜java和javascript的关系就好比雷锋跟雷峰塔的关系\n\n#### js的单线程特性\n"}