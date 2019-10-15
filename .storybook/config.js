import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|md|mdx)$/), module);
//configure(require.context('../dist', true, /\.stories\.js$/), module);
// configure(
// 	[
// 		// require.context('../blitzino', true, /\.stories\.js$/),
// 		// require.context('../casinostugan', true, /\.stories\.js$/),
// 		require.context('../comeon', true, /\.stories\.(js|md|mdx)$/),
// 		// require.context('../folkeautomaten', true, /\.stories\.js$/),
// 		// require.context('../galaksino', true, /\.stories\.js$/),
// 		// require.context('../getlucky', true, /\.stories\.js$/),
// 		// require.context('../hajper', true, /\.stories\.js$/),
// 		// require.context('../mobilautomaten', true, /\.stories\.js$/),
// 		// require.context('../mobilebet', true, /\.stories\.js$/),
// 		// require.context('../pzbuk', true, /\.stories\.js$/),
// 		// require.context('../snabbare', true, /\.stories\.js$/),
// 		// require.context('../suomikasino', true, /\.stories\.js$/)
// 	],
// 	module
// );
