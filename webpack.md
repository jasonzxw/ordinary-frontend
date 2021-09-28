1. 常见的代码分离方式
手动配置entry分离代码 
防止重复：使用 Entry dependencies(depend on) 或者 SplitChunksPlugin 去重和分离 chunk

2. 三方库的缓存
第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，同时还能保证 client 代码和 server 代码版本一致。 这可以通过使用 SplitChunksPlugin 示例 2 中演示的 SplitChunksPlugin 插件的 cacheGroups 选项来实现。

3. 文件修改重新打包三方库hash值变化
vendor hash 发生变化要修复。我们将 optimization.moduleIds 设置为 'deterministic'：

4. webpack提高打包性能
将 loader 应用于最少数量的必要模块,通过include 

使用 DllPlugin 为更改不频繁的代码生成单独的编译结果。这可以提高应用程序的编译速度，尽管它增加了构建过程的复杂度

5. tree shaking
如果所有代码都不包含副作用，我们就可以简单地将该属性标记为 false，来告知 webpack 它可以安全地删除未用到的 export。"side effect(副作用)" 的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export,代码确实有一些副作用，可以改为提供一个数组

5. loader、plugin区别

