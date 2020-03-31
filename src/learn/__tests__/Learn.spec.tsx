import assertionTemplate from '@dojo/framework/testing/assertionTemplate';
import harness from '@dojo/framework/testing/harness';
import { tsx } from '@dojo/framework/core/vdom';
import i18n from '@dojo/framework/core/middleware/i18n';

import Menu from '../../menu/Menu';

import createI18nMock from '../../test/mockI18n';

import LearnContent from '../LearnContent';
import * as css from '../Learn.m.css';
import Learn from '../Learn';

describe('Learn', () => {
	const baseAssertion = assertionTemplate(() => (
		<div classes={css.root}>
			<Menu
				assertion-key="menu"
				desktopStyle="side"
				links={[
					{
						label: 'Overview',
						to: 'learn',
						params: {
							guide: 'overview',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'overview' }
					},
					{
						label: 'Creating Widgets',
						to: 'learn',
						params: {
							guide: 'creating-widgets',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'creating-widgets' }
					},
					{
						label: 'Middleware',
						to: 'learn',
						params: {
							guide: 'middleware',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'middleware' }
					},
					{
						label: 'Building',
						to: 'learn',
						params: {
							guide: 'building',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'building' }
					},
					{
						label: 'I18n',
						to: 'learn',
						params: {
							guide: 'i18n',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'i18n' }
					},
					{
						label: 'Styling',
						to: 'learn',
						params: {
							guide: 'styling',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'styling' }
					},
					{
						label: 'Stores',
						to: 'learn',
						params: {
							guide: 'stores',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'stores' }
					},
					{
						label: 'Routing',
						to: 'learn',
						params: {
							guide: 'routing',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'routing' }
					},
					{
						label: 'Testing',
						to: 'learn',
						params: {
							guide: 'testing',
							repo: 'dojo/framework',
							branch: 'master'
						},
						matchParams: { guide: 'testing' }
					}
				]}
			/>
			<main classes={css.main}>
				<LearnContent
					key="content"
					url="url/to/page"
					repo="dojo/framework"
					path="docs/:locale:/outline"
					branch="master"
					language="en"
					locale="en"
				/>
			</main>
		</div>
	));

	it('renders overview', () => {
		const h = harness(() => <Learn guideName="overview" url="url/to/page" />);

		h.expect(baseAssertion);
	});

	it('renders non-overview guide', () => {
		const h = harness(() => <Learn guideName="middleware" url="url/to/page" />);

		h.expect(baseAssertion.setProperty('@content', 'path', 'docs/:locale:/middleware'));
	});

	it('renders in another language', () => {
		const mockI18n = createI18nMock('zh-cn');

		const h = harness(() => <Learn guideName="outline" url="url/to/page" />, {
			middleware: [[i18n, mockI18n]]
		});

		h.expect(baseAssertion.setProperty('@content', 'language', 'zh').setProperty('@content', 'locale', 'zh-cn'));
	});

	it('renders from a different repo and branch', () => {
		const mockI18n = createI18nMock('zh-cn');

		const h = harness(
			() => <Learn guideName="outline" url="url/to/page" repo="repo/somewhere" branch="branchName" />,
			{
				middleware: [[i18n, mockI18n]]
			}
		);

		h.expect(
			baseAssertion
				.setProperty('@content', 'language', 'zh')
				.setProperty('@content', 'locale', 'zh-cn')
				.setProperty('@content', 'repo', 'repo/somewhere')
				.setProperty('@content', 'branch', 'branchName')
		);
	});
});
