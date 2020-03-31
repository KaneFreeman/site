import * as fetch from 'node-fetch';
import { v } from '@dojo/framework/core/vdom';

import contentBlock from '../content.block';

const introFile = `
# Header 1

Content for 1!

# Header 2

Content for 2!
`;

const supplementalFile = `
# Header 3

Content for 3!

# Header 4

Content for 4!
`;

const expectedOutput = v(
	'div',
	{
		key: 'compiled-27'
	},
	[
		v(
			'section',
			{
				key: 'compiled-8'
			},
			[
				v(
					'h1',
					{
						id: 'header-1',
						key: 'compiled-6'
					},
					[
						v(
							'a',
							{
								key: 'compiled-5',
								'aria-hidden': 'true',
								href: '#header-1'
							},
							[
								v(
									'svg',
									{
										classes: 'refguide-link',
										height: '16',
										key: 'compiled-4',
										width: '16'
									},
									[
										v('path', {
											d:
												'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
											key: 'compiled-3'
										})
									]
								)
							]
						),
						'Header 1'
					]
				),
				v(
					'p',
					{
						key: 'compiled-7'
					},
					['Content for 1!']
				)
			]
		),
		`
`,
		v(
			'section',
			{
				key: `compiled-14`
			},
			[
				v(
					'h1',
					{
						id: 'header-2',
						key: `compiled-12`
					},
					[
						v(
							'a',
							{
								key: `compiled-11`,
								'aria-hidden': 'true',
								href: '#header-2'
							},
							[
								v(
									'svg',
									{
										classes: 'refguide-link',
										height: '16',
										key: `compiled-10`,
										width: '16'
									},
									[
										v('path', {
											d:
												'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
											key: `compiled-9`
										})
									]
								)
							]
						),
						'Header 2'
					]
				),
				v(
					'p',
					{
						key: `compiled-13`
					},
					['Content for 2!']
				)
			]
		),
		`
`,
		v(
			'section',
			{
				key: 'compiled-20'
			},
			[
				v(
					'h1',
					{
						id: 'header-3',
						key: 'compiled-18'
					},
					[
						v(
							'a',
							{
								key: 'compiled-17',
								'aria-hidden': 'true',
								href: '#header-3'
							},
							[
								v(
									'svg',
									{
										classes: 'refguide-link',
										height: '16',
										key: 'compiled-16',
										width: '16'
									},
									[
										v('path', {
											d:
												'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
											key: 'compiled-15'
										})
									]
								)
							]
						),
						'Header 3'
					]
				),
				v(
					'p',
					{
						key: 'compiled-19'
					},
					['Content for 3!']
				)
			]
		),
		`
`,
		v(
			'section',
			{
				key: `compiled-26`
			},
			[
				v(
					'h1',
					{
						id: 'header-4',
						key: `compiled-24`
					},
					[
						v(
							'a',
							{
								key: `compiled-23`,
								'aria-hidden': 'true',
								href: '#header-4'
							},
							[
								v(
									'svg',
									{
										classes: 'refguide-link',
										height: '16',
										key: `compiled-22`,
										width: '16'
									},
									[
										v('path', {
											d:
												'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
											key: `compiled-21`
										})
									]
								)
							]
						),
						'Header 4'
					]
				),
				v(
					'p',
					{
						key: `compiled-25`
					},
					['Content for 4!']
				)
			]
		)
	]
);

const settings = {
	repo: 'dojo/framework',
	branch: 'master',
	path: 'path/to/file/:locale:',
	language: 'en',
	locale: 'en'
};

jest.mock('fs');
jest.mock('node-fetch');

describe('content block', () => {
	const mockFetch = jest.spyOn(fetch, 'default');

	beforeEach(() => {
		jest.resetAllMocks();
		mockFetch
			.mockResolvedValueOnce({
				ok: true,
				text: () => introFile
			} as any)
			.mockResolvedValueOnce({
				ok: true,
				text: () => supplementalFile
			} as any);
	});

	it('gets content for static page', async () => {
		const result = await contentBlock(settings);

		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/en/introduction.md'
		);
		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/en/supplemental.md'
		);

		expect(result).toEqual(expectedOutput);
	});

	it('returns null if page not found', async () => {
		mockFetch.mockReset();
		mockFetch.mockResolvedValue({
			ok: false
		} as any);
		const result = await contentBlock(settings);

		expect(result).toEqual(null);
	});

	it('gets content for a different language', async () => {
		const result = await contentBlock({
			...settings,
			language: 'zh',
			locale: 'zh-CN'
		});

		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/zh/introduction.md'
		);
		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/zh/supplemental.md'
		);

		expect(result).toEqual(expectedOutput);
	});

	it('gets content from locale when language file not found', async () => {
		mockFetch.mockReset();
		mockFetch
			// Fetching introduction
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: true,
				text: () => introFile
			} as any)
			// Fetching supplemental
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: true,
				text: () => supplementalFile
			} as any);
		const result = await contentBlock({
			...settings,
			language: 'zh',
			locale: 'zh-CN'
		});

		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/zh-CN/introduction.md'
		);
		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/zh/supplemental.md'
		);

		expect(result).toEqual(expectedOutput);
	});

	it('defaults to english when language and locale files not found', async () => {
		mockFetch.mockReset();
		mockFetch
			// Fetching introduction
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: true,
				text: () => introFile
			} as any)
			// Fetching supplemental
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: true,
				text: () => supplementalFile
			} as any);
		const result = await contentBlock(settings);

		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/en/introduction.md'
		);
		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/en/supplemental.md'
		);

		expect(result).toEqual(expectedOutput);
	});

	it('gets content for partially translated docs', async () => {
		mockFetch.mockReset();
		mockFetch
			// Fetching introduction
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: true,
				text: () => introFile
			} as any)
			// Fetching supplemental
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: false
			} as any)
			.mockResolvedValueOnce({
				ok: true,
				text: () => supplementalFile
			} as any);
		const result = await contentBlock({
			...settings,
			language: 'zh',
			locale: 'zh'
		});

		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/zh/introduction.md'
		);
		expect(mockFetch).toHaveBeenCalledWith(
			'https://raw.githubusercontent.com/dojo/framework/master/path/to/file/en/supplemental.md'
		);

		expect(result).toEqual(expectedOutput);
	});
});
