#!/usr/bin/env sh
###
 # @Descripttion: io小栈 —— ioinn.cn
 # @version: 0.0.1
 # @Author: by_mori
 # @Date: 2021-10-24 22:17:05
 # @LastEditors: by_mori
 # @LastEditTime: 2021-11-02 21:07:50
### 

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://blog.ioinn.cn&token=T5PEAzhGaPNbjQ2X"

rm -rf urls.txt # 删除文件
