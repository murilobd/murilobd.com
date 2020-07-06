---
title: "How to find most used character in a string"
date: "2020-07-06"
excerpt: "Let's find out which character is the most used one in a string"
tags: "javascript"
---

How can we find out what's the most used character in a sentence? Well... lots and lots of ways to do that. I'll show you here 2 (disclaimer that I'm a really big fan of reduce):

1. **_Using reduce()_**

    ```js
    function mostUsedCharacter(str) {
    	let obj = {};
    	let max = 0;

    	return str.split("").reduce((acc, char) => {
    		obj[char] = obj[char] + 1 || 1; // +1 to the char in obj
    		if (obj[char] > max) {
    			// if current char > max
    			max = obj[char]; // set max = amount of times char appeared
    			return char; // return char
    		}

    		// if current char < current max amount of times a char appeared, return current max
    		return acc;
    	}, str[0]);
    }
    ```

2. **_Using for-loop_**

    ```js
    function mostUsedCharacter(str) {
    	let obj = {};
    	let max = 0;
    	let mostUsedChar = str[0];

    	for (let char of str) {
    		obj[char] = obj[char] + 1 || 1;
    		if (obj[char] > max) {
    			max = obj[char];
    			mostUsedChar = char;
    		}
    	}

    	return mostUsedChar;
    }
    ```

The basic idea of both methods is:

-   store somewhere a list with each character and the amount of times it has been used
-   return the biggest number from the list
