# 导入 GitHub 项目

请先解压 ZIP。需要上传的是解压后的文件，GitHub 不会把仓库中的 ZIP 自动展开成网页。

## 方式一：独立的新项目

1. 在新仓库上传本目录内的全部文件，使 `index.html` 位于仓库根目录。
2. 如需在线访问，进入仓库 **Settings**，打开 **Pages**。
3. 发布来源选择 **Deploy from a branch**，选择保存文件的分支，例如 `main`，目录选择 **/(root)**，然后保存。
4. 以后更新该分支里的网页文件，站点会按已配置的发布方式更新。

网页文件已经可以直接使用，本方式不需要再上传 `dist/`。

## 方式二：已有的 React / Vite 项目

在现有项目的 `public` 中新建 `grammar-atlas/`，复制下面 33 个文件：

- `index.html`
- `app.js`
- `content.js`
- `content-additions.js`
- `content-detail-nouns.js`
- `content-detail-lexis.js`
- `content-detail-clauses.js`
- `lesson-details-lexis.js`
- `lesson-details-verbs.js`
- `atlas.js`
- `graph.js`
- `nebula-graph.js`
- `nebula.css`
- `video-resources.js`
- `video-resources.css`
- `animation-content-nouns.js`
- `animation-content-lexis.js`
- `animation-content-syntax.js`
- `animation-content-verbs.js`
- `animation-content-clauses.js`
- `grammar-animations.js`
- `grammar-animations.css`
- `pane-resize.js`
- `pane-resize.css`
- `beginner-guide.js`
- `beginner-guide.css`
- `progress.js`
- `games-content.js`
- `games.js`
- `styles.css`
- `responsive.css`
- `games.css`
- `.nojekyll`

现有项目的入口、构建命令和 `package.json` 继续使用原配置。本包的脚本主要用于独立运行时的预览和检查。

在 React 页面里添加一个入口：

```jsx
const grammarUrl = `${import.meta.env.BASE_URL}grammar-atlas/index.html#map`;

<a href={grammarUrl}>打开英语语法思维导图</a>
```

或创建一个页面组件，在现有项目内显示：

```jsx
export default function GrammarAtlasPage() {
  const src = `${import.meta.env.BASE_URL}grammar-atlas/index.html#map`;
  return (
    <iframe
      title="语法漫游"
      src={src}
      style={{ display: "block", width: "100%", height: "100dvh", border: 0 }}
    />
  );
}
```

`BASE_URL` 让入口跟随现有 Vite 项目的部署目录。组件放到哪个路由，由现有路由配置决定。

## 方式三：已有的纯静态网站

在原网站的发布目录下新建 `grammar-atlas/`，复制同样的 33 个网页文件，再链接到 `grammar-atlas/index.html#map`。资源路径以该页面所在文件夹为起点，知识点导航使用 URL 的 `#` 部分；游戏可直接链接到 `#games` 或 `#games/drag/1`。

知识星云由 `nebula-graph.js` 与 `nebula.css` 提供布局和视觉样式，需要和其他资源一并部署。它包含 166 个知识节点、10 个模块枢纽及 441 条真实关系（179 条上下级关系、262 条知识关联），支持星点拖拽、空白平移、缩放、Aa 标签显隐、模块聚焦与跨模块邻居探索。点击知识点可打开讲解，已学节点显示为金色；手机竖屏按实际画布比例布局。

## 交给 Codex 接入

可以把下面这段任务发给项目里的 Codex：

> 将 grammar-atlas 源码接入当前项目。先检查现有技术栈、入口和发布方式。保留现有首页与构建配置；把语法网站作为独立页面接入，并添加导航入口。保留手机、平板、电脑布局、十模块总图谱、知识卡片、知识星云、50 关词性积木游戏、题库、错题、笔记和记录备份。语法内容位于 content.js 与 atlas.js；知识星云布局和样式位于 nebula-graph.js 与 nebula.css；游戏内容位于 games-content.js；加载入口所引用的全部 33 个静态文件。

## 参考的官方文档

- [GitHub Pages 发布来源设置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Vite 的 public 目录](https://vite.dev/guide/assets.html#the-public-directory)
- [Vite 部署目录与 BASE_URL](https://vite.dev/guide/build.html#public-base-path)
