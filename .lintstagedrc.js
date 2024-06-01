import { ESLint } from 'eslint'

const getFileList = (files) => files.map((file) => `"${file}"`).join(' ')

const removeIgnoredFiles = async (files) => {
	const eslint = new ESLint()
	const isIgnored = await Promise.all(
		files.map((file) => {
			return eslint.isPathIgnored(file)
		})
	)
	return files
		.filter((_, i) => !isIgnored[i])
		.map((file) => `"${file}"`)
		.join(' ')
}

export default {
	'**/*.ts?(x)': () => 'tsc --noEmit --incremental --project tsconfig.json',

	'**/*.ts?(x)': async (files) => {
		const filesToLint = await removeIgnoredFiles(files)
		return [
			`eslint --fix --cache --report-unused-disable-directives --max-warnings 0 ${filesToLint}`,
		]
	},

	'*': (files) => [
		`prettier --write --ignore-unknown --cache --cache-location=.prettiercache ${getFileList(files)}`,
		`cspell --show-suggestions --relative --no-must-find-files --cache ${getFileList(files)}`,
	],
}
