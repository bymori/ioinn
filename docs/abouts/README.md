# about

测试一下热更新

解决vuepress不能热更新

修改package.json文件的dev字段，将：

```json
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "test": "echo \"Error: no test specified\" && exit 1",
    "deploy": "bash deploy.sh"
  },
```

改为以下：

```json
   "scripts": {
    "dev": "vuepress dev docs --temp .temp",
    "build": "vuepress build docs",
    "test": "echo \"Error: no test specified\" && exit 1",
    "deploy": "bash deploy.sh"
  },
```

其他文章
[vuepress 热更新失效研究](https://blog.csdn.net/alnorthword/article/details/109456547)