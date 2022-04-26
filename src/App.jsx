// 请从课程简介里下载本代码
import React, {useState, useContext} from 'react'

const appContext = React.createContext(null)
export const App = () => {
  const [appState, setAppState] = useState({
    user: {name: 'frank', age: 18}
  })
  const contextValue = {appState, setAppState} // 封装成对象 给appContext上下文
  return (
    <appContext.Provider value={contextValue}>
      <大儿子/>
      <二儿子/>
      <幺儿子/>
    </appContext.Provider>
  )
}
const 大儿子 = () => <section>大儿子<User/></section>
const 二儿子 = () => <section>二儿子<UserModifier/></section>
const 幺儿子 = () => <section>幺儿子</section>
// 令User 从上下文里 获取信息name:frank 
const User = () => {
  const contextValue = useContext(appContext)
  return <div>User:{contextValue.appState.user.name}</div>

}
// 令UserModifier 从上下文 修改/设置信息，即调用setAppState()
const UserModifier = () => {
  const contextValue = useContext(appContext)
  const onChange = (e) => {
    contextValue.appState.user.name = e.target.value // 将用户输入的value赋值给user.name，也就是修改username
    setAppState({...contextValue.appState})
  }
  return <div>
    <input value={contextValue.appState.user.name}
      onChange={onChange}/>
  </div>
}