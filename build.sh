#!/bin/sh

echo "\033[34;5m *****build project***** \033[0m"
npm run build
zip -r -o './dist/lingmissing' './dist'
echo "\033[32;5m *************Success************* \033[0m"