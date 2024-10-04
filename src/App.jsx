import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { auth } from "./lib/firebase"
import { useEffect } from "react"
import { useUserStore } from "./lib/userStore"
import { onAuthStateChanged } from "firebase/auth"
import { useChatStore } from "./lib/chatStore"

function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore()
  const { chatId } = useChatStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid)
    })

    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  if (isLoading)
    return <div className="p-10 text-xl rounded bg-blue_blur">Loading....</div>

  return (
    <div className="w-[80vw] h-[90vh] rounded-lg bg-blue_blur  backdrop-blur-lg backdrop-saturate-200 border-solid flex">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  )
}

export default App
