#!/usr/bin/env sh
###
 # @Descripttion: 
 # @version: 
 # @Author: by_mori
 # @Date: 2021-10-24 22:17:05
 # @LastEditors: by_mori
 # @LastEditTime: 2021-10-26 21:15:01
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
echo 'blog.ioinn.cn' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:bymori/ioinn.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://ioinn:${GITHUB_TOKEN}@github.com/bymori/ioinn.git
  git config --global user.name "bymori"
  git config --global user.email "by_mori@163.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

# deploy to coding pages
echo 'blog.ioinn.cn' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:bymori/website/ioinn.git
else
  codingUrl=https://by_mori:${CODING_TOKEN}git@e.coding.net:bymori/website/ioinn.git
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vuepress/dist



# #!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
# set -e

# # 生成静态文件
# npm run build

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# # 如果是发布到自定义域名
# echo 'blog.ioinn.cn' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # 如果发布到 https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:bymori/ioinn.git master:gh-pages

# cd -
# rm -rf docs/.vuepress/dist # 上传完成后删除本地dist文件夹