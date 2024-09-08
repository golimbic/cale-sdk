gen:
	openapi-generator batch configs/*.yaml

publish-npm:
	cd libs/typescript-fetch && npm install && npm publish --access public


