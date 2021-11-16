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




webpack
谈谈你对webpack的看法
webpack是一个模块打包工具，可以使用它管理项目中的模块依赖，并编译输出模块所需的静态文件。它可以很好地管理、打包开发中所用到的HTML,CSS,JavaScript和静态文件（图片，字体）等，让开发更高效。对于不同类型的依赖，webpack有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生成优化的静态资源。

webpack的基本功能和工作原理？
代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等等
文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等
代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
模块合并：在采用模块化的项目有很多模块和文件，需要构建功能把模块分类合并成一个文件
自动刷新：监听本地源代码的变化，自动构建，刷新浏览器
代码校验：在代码被提交到仓库前需要检测代码是否符合规范，以及单元测试是否通过
自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。
webpack构建过程
从entry里配置的module开始递归解析entry依赖的所有module
每找到一个module，就会根据配置的loader去找对应的转换规则
对module进行转换后，再解析出当前module依赖的module
这些模块会以entry为单位分组，一个entry和其所有依赖的module被分到一个组Chunk
最后webpack会把所有Chunk转换成文件输出
在整个流程中webpack会在恰当的时机执行plugin里定义的逻辑
webpack打包原理
将所有依赖打包成一个bundle.js，通过代码分割成单元片段按需加载

什么是webpack，与gulp,grunt有什么区别
webpack是一个模块打包工具，可以递归地打包项目中的所有模块，最终生成几个打包后的文件。
区别：webpack支持代码分割，模块化（AMD,CommonJ,ES2015），全局分析
什么是entry,output?
entry 入口，告诉webpack要使用哪个模块作为构建项目的起点，默认为./src/index.js
output 出口，告诉webpack在哪里输出它打包好的代码以及如何命名，默认为./dist
什么是loader，plugins?
loader是用来告诉webpack如何转换某一类型的文件，并且引入到打包出的文件中。
plugins(插件)作用更大，可以打包优化，资源管理和注入环境变量
什么是bundle,chunk,module?
bundle是webpack打包出来的文件，chunk是webpack在进行模块的依赖分析的时候，代码分割出来的代码块。module是开发中的单个模块
