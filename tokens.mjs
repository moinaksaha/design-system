import StyleDictionaryPackage from 'style-dictionary';
import fs from 'fs';
const { readdir } = fs.promises;

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand) {
	const buildPath = `dist/${brand}/`;
	return {
		source: [`tokens/${brand}/**/*.json`],
		platforms: {
			scss: {
				transformGroup: 'scss',
				buildPath,
				files: [
					{
						destination: '_variables.scss',
						format: 'scss/variables'
					}
				]
			},
			js: {
				transforms: [
					'attribute/cti',
					'name/ti/constant',
					'size/rem',
					'color/css'
				],
				buildPath,
				files: [
					{
						format: 'javascript/es6',
						destination: 'constants.mjs'
					}
				]
			},
			web: {
				transformGroup: 'web',
				buildPath,
				files: [
					{
						destination: 'custom-properties.css',
						format: 'css/variables'
					}
				]
			}
		}
	};
}
async function build() {
	const brands = await readdir('./tokens');

	console.log('Build started...');

	// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

	brands.map(function(brand) {
		['web', 'scss', 'js'].map(function(platform) {
			console.log('\n==============================================');
			console.log(`\nProcessing: [${platform}] [${brand}]`);

			const StyleDictionary = StyleDictionaryPackage.extend(
				getStyleDictionaryConfig(brand)
			);

			StyleDictionary.buildPlatform(platform);

			console.log('\nEnd processing');
		});
	});

	console.log('\n==============================================');
	console.log('\nBuild completed!');
}
build();