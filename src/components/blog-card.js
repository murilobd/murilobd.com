import React from "react";
import { Link } from "gatsby";

const BlogCard = ({ slug, title, date, excerpt, datetime }) => (
	<article className="space-y-2 ">
		<dl>
			<dt className="sr-only">Published on</dt>
			<dd className="text-xs leading-3 text-gray-500">
				<time dateTime={datetime}>{date}</time>
			</dd>
		</dl>
		<div className="space-y-5 xl:col-span-3">
			<div className="space-y-6">
				<h2 className="text-2xl leading-8 font-bold tracking-tight">
					<a className="text-gray-900">{title}</a>
				</h2>
				<div className="prose text-gray-500">
					<p>{excerpt}</p>
				</div>
			</div>
			<div className="text-base leading-6 font-medium">
				<Link
					to={slug}
					className="text-teal-500 hover:text-teal-600"
					aria-label={`Read "${title}"`}
				>
					Read more →
				</Link>
			</div>
		</div>
	</article>
);

export default BlogCard;
