import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function MyFiles({ data }) {
	console.log(data);
	return (
		<Layout title="My Files">
			<div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
				<table>
					<thead>
						<tr>
							<th>relativePath</th>
							<th>prettySize</th>
							<th>extension</th>
							<th>birthTime</th>
						</tr>
					</thead>
					<tbody>
						{data.allFile.edges.map(({ node }, index) => (
							<tr key={index}>
								<td>{node.relativePath}</td>
								<td>{node.prettySize}</td>
								<td>{node.extension}</td>
								<td>{node.birthTime}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query {
		allFile {
			edges {
				node {
					relativePath
					prettySize
					extension
					birthTime(fromNow: true)
				}
			}
		}
	}
`;
