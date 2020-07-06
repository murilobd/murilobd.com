---
title: "How to reverse a string?"
date: "2020-07-06"
excerpt: "Different approaches to reverse a string"
tags: "javascript"
---

Some different ways to reverse a string

1. **_Array method_**

    ```js
    const string = "Let's reverse this";
    return string.split("").reverse().join("");
    ```

2. **_For-loop_**

    ```js
    function reverse(str) {
    	let final = "";
    	for (let i = str.length - 1; i >= 0; i--) {
    		final += str[i];
    	}
    	return final;
    }
    ```

3. **_For-of-loop_**

    ```js
    function reverse(str) {
    	let reversed = "";
    	for (let character of str) {
    		reversed = character + reversed;
    	}

    	return reversed;
    }
    ```

4. **_reduce()_**

    ```js
    function reverse(str) {
    	return str.split("").reduce((rev, char) => char + rev, "");
    }
    ```
