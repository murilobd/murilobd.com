---
title: "Find non-duplicated items in list"
date: "2020-07-03"
excerpt: "You have a list with many items and you want to find out which ones are not duplicated"
tags: "javascript"
---

Imagine this: you have a list of many items you bought on supermarket and you want to know which ones are not duplicated.

With **indexOf** and **lastIndexOf**, we can do that easily.
[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) will return the first occurence of the item in the array.
[lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) will return the item's last position of the last occurence.

```js
var list = ["javascript", "php", "mysql", "javascript", "php", "javascript"];

list.indexOf("javscript"); // 0
list.lastIndexOf("javascript"); //5

list.indexOf("php"); // 1
list.lastIndexOf("php"); //4

list.indexOf("mysql"); // 2
list.lastIndexOf("mysql"); //2
```

When `indexOf == lastIndexOf` means the item is unique. So, with that, we can create a function that will return an array with non-duplicated items:

```js
function nomDuplicatedItens(arr) {
	if (arr.length == 0) return [];
	if (arr.length == 1) return arr[0];

	const nomduplicated = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]))
			nomduplicated.push(arr[i]);
	}

	return nomduplicated;
}
```
