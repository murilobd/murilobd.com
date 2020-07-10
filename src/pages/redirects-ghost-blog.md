---
title: "How to create a redirect.json file for your Ghost blog posts"
date: "2020-07-10"
excerpt: "You have changed the routes for your blog posts and want to redirect old routes to the new ones? Here's a script that will do that for you"
tags: "javascript"
---

So you have updated your ghost blog layout and one of the changes was in the routes for each blog post. Before, to see a blog post you would access domain.com/great-blog-post but now, you decided to start using categories for a better SEO, to see the post you have to access domain.com/tips/great-blog-post.

The way to fix that is: you have to use redirects ([tutorial from Ghost](https://ghost.org/tutorials/implementing-redirects/)). In the tutorial, examples are pretty clear what we have to do: create a json file that will map the old routes to new routes

```json
[
	{
		"from": "/great-blog-post",
		"to": "/tips/great-blog-post",
		"permanent": true
	}
]
```

After running some simple tests, I realized this kind of structure works only for pages, but not for posts (if you try this for posts, you'll see ghost enters in an infinite loop). To fix that, we use a regex to specify the start and end from _from_ parameter.

```json
[
	{
		"from": "^\\/great-blog-post(\\/?)$",
		"to": "/tips/great-blog-post",
		"permanent": true
	}
]
```

Cool! We know what to do now! Next step is to automatically get all blog posts with categories and output a json file with all redirects. To do that we use a Content API provided by Ghost (you'll have to create an API key in order to do that. You can create it by going to domain.com/ghost/#/settings/integrations - create a new integration and you'll see the API key).

From the code below, just replace the 2 first lines with URL from your blog and the API key and run it! You should see a nicely created JSON (and, of course, add any changes you need to do, just code them)

```js
const blog_url = ""; // blog url. ex: https://blog.domaing.com
const content_api_key = ""; // get content api key in: blog_url/ghost/#/settings/integrations

// get all posts
async function getPosts() {
	const response = await fetch(
		`${blog_url}/ghost/api/v3/content/posts/?key=${content_api_key}&limit=all&include=tags`
	);
	const jsonResponse = response.json();
	return jsonResponse;
}

getPosts()
	.then(allPosts => {
		allPosts = allPosts.posts;

		const finalJson = [];
		for (const post of allPosts) {
			const primary_tag = post.primary_tag;
			const post_slug = post.slug;

			// primary_tag is mandatory for new url structure, so if post doesn't have it, return an error showing which post miss tag
			if (!primary_tag)
				return console.error("post without primary_tag", post);

			finalJson.push({
				from: `^\\/${post_slug}(\\/?)$`,
				to: `/${primary_tag.slug}/${post_slug}`,
				permanent: true,
			});
		}
		console.log(finalJson);
	})
	.catch(console.error);
```

I've posted this code slightly different on [Ghost forum](https://forum.ghost.org/t/how-to-redirect-blog-post-slug-to-primary-tag-slug/15740) to adapt to my needs.
