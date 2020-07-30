---
title: "Game creator #3 - Loading a file in Vue 3"
date: "2020-07-29"
excerpt: "Learning the basics from Composition API and loading a file in Vue 3"
tags: "javascript,vue 3,composition api"
---

While my research how Vue 3 works, I found through twitter the beta version for Vue 3 documentation: [https://v3.vuejs.org/](https://v3.vuejs.org/)
What really pleased me was the fact that it’s very similar to Vue 2! That’s completely different from what Angular did when they released Angular 2. Super cool!

I could stick to what I know about Vue and use the standard way of creating components

```js
export default {
    name: “ComponentName”,
    methods: {
        fileChanged(file) {
            /* … */
        }
    }
}
```

But I want to use the hottest feature: Composition API!

My way to learn stuffs is:

1. read the basics to have some understanding on how to use it and how it works
2. use it

So, based on that, I read the [documentation](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) and tried some stuffs. In the end, to load a file in Vue 3 using Composition API, we will need that:

```html
<template>
	<span>Filename selected: {{ filename }}</span>
	<input
		type="“file”"
		accept="image/png” @change="
		selectedImage($event.target.files[0])”
	/>
</template>
```

```js
<script>
import { ref } from "vue";
export default {
    setup() {
        const filename = ref("");

        function selectedImage(file) {
            filename.value = file.name;
        }

        return { filename, selectedImage };
    }
};
</script>
```

All right! This doesn’t look bad, right?! A few lines of code and it works!

Next step: let’s integrate Phaser into Vue 3!
