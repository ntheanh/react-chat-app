import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"

function App() {
  const user = true
  return (
    <div className="w-[80vw] h-[90vh] rounded-lg bg-blue_blur  backdrop-blur-lg backdrop-saturate-200 border-solid flex">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  )
}

export default App
