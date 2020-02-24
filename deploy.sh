#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
yarn prod

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git config --local user.name "micromechanika"
git config --local user.email "micromechanika@gmail.com"

git add -A
git commit -m 'deploy'
#git remote add origin git@github.com:micromechanika/vueresumedeploy.git

# если вы публикуете по адресу https://<USERNAME>.github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master


# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:micromechanika/starnavi-test.git master:gh-pages


cd -
