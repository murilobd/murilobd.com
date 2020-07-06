---
title: "Creating this blog"
date: "2020-07-05"
excerpt: "Technical and personal decisions I took to create this blog"
tags: ""
---

I used to have a ghost blog hosted on Digital Ocean with a low cost of 5 USD/month. Well... In the beginning I was posting almost every Friday and it was usually a post with some interesting articles/projects I saw in the week (personally, I enjoyed doing that! I was often visiting those posts to re-read some of the articles). But, as usually, I stopped writing on it (maybe because only me was reading? hehe)

So, even 5 bucks/month (55/year) will not, thankfully, be such a huge difference, is still 5 bucks/month! So, let's save it, right? But, I have a bigger plan in my mind! I use so much of the developers community to code and grow as a person and professional that I really want to give it back somehow! How? Trying to teach other people what I know (as I learn from other people that knows more and different stuff than me).

So, I'll try my best to explain what I did to have this blog up and running in a github-netlify environment free of charge (thanks github and netlify to allow us to host open source codes freely).

## Technical details

This blog is developed using [GatsbyJS](https://www.gatsbyjs.org/). Why?

-   with a feel tweaks (or even none if you prefer to use their awesome (starter-kits templates)[https://www.gatsbyjs.org/starters/?v=2]) you have a blog up and running
-   it uses ReactJS, so it's a good way to learn and improve this skill
-   it's well known for generating fast & seo-friendly static websites (all a blog needs and wants)
-   I can host it on github for free and use netlify to deploy it
-   If I want, there's a ready CMS UI ([netlify-cms](https://www.netlifycms.org/)) that's it's almost plug-and-play

And the process I took to develop/style was:

-   I started with the [starter default](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) because I wanted to learn some inner details of how it works and what I would have to do to implement anything on it
-   As my first contact with GraphQL, I felt it would be a good idea to have it configured to me already
-   It's a started default, so it's configured correctly to work

After following the instructions to start the default template, I followed all 8 steps from the [tutorial pages](https://www.gatsbyjs.org/tutorial/) to learn the basics of gatsby (and after finishing it, I had this blog ready and running - and a really good feeling about GatsbyJS!)

I'll use their implementation idea for the blog posts:

-   all blog posts will be a .md (or .mdx if needed to use any component in the post) and they will be place under /src/pages folder
-   for images, I'll host them under /src/assets/images
-   Styling will be done using [TailwindCSS](https://tailwindcss.com/)

## In a nutshell

-   blog created with GatsbyJS
-   style using TailwindCSS (basically a copy&paste from their blog! No shame on that as I suck on styling, so copied from the best!)
-   deploy with netlify
-   hosted on github
