gen:
	openapi-generator batch configs/*.yaml

publish-npm:
	cd libs/typescript && npm install && npm publish --access public


