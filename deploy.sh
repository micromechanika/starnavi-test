#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

yarn prod
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:micromechanika/starnavi-test.git master:gh-pages
cd -
