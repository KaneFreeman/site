import fetch from 'node-fetch';

import markdown from '../common/markdown';

export interface CompileRemoteBlockOptions {
	repo: string;
	branch: string;
	path: string;
	language: string;
	locale: string;
}

const url = (repo: string, branch: string, pagePath: string, docPage: string) => {
	return `https://raw.githubusercontent.com/${repo}/${branch}/${pagePath}/${docPage}`;
};

async function fetchDoc(options: CompileRemoteBlockOptions, docPage: string) {
	const { repo, branch, path, language, locale } = options;
	let pagePath = path.replace(/:locale:/g, language);
	let response = await fetch(url(repo, branch, pagePath, docPage));
	if (!response.ok) {
		pagePath = path.replace(/:locale:/g, locale);
		response = await fetch(url(repo, branch, pagePath, docPage));
		if (!response.ok) {
			pagePath = path.replace(/:locale:/g, 'en');
			response = await fetch(url(repo, branch, pagePath, docPage));
		}
	}

	return response;
}

export default async function(options: CompileRemoteBlockOptions) {
	const responseIntro = await fetchDoc(options, 'introduction.md');
	const responseSupplemental = await fetchDoc(options, 'supplemental.md');

	if (!responseIntro.ok || !responseSupplemental.ok) {
		return null;
	}

	const content = `${await responseIntro.text()}\n${await responseSupplemental.text()}`;
	const nodes = markdown(content);
	return nodes;
}
