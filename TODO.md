**待优化**

- locale?
- 使用 scss 并且响应式布局

---

问题
0. done-登录成功后就应该无法返回登录页了。
   - 路由加上 replace
1. reducer 应该在初始化时被 store 调用一次，现在被调用了三次。

2. done-目前路由这里只能使用 hook 获取，没有很好的办法通过 antd 导航组件的 api 获取
   ```
   const location = useLocation();
   const path = `${location.pathname}${location.search}`;
   ```
3. done-登录页面 input 框的 placeholder 位置没居中

4. 数据分析上传页左右位置问题

5. done-目前看来好像 g6 和 bizcharts 不兼容，所以词云考虑用 g2 做。
   - 安装 g6 不能 npm install g6。。介是另一个库。要执行 npm install @antv/g6，坑死我了。
   - 另外 bizcharts 和 react 的版本还要一直，不然报 invalid hooks 错误。

6. done-之前 reducer 返回的内容没有作为 props，而且在初始化的时候通过 store.getState()也查不到初始化 state。
   原因是在 reducer 中没有返回 init_state

7. done-为什么 reducer 返回的内容自动被封装成了一个对象，对象名是 Reducer 的名字。
   - 一切都因为 combineReducer

8. webpack打包后bizcharts报错