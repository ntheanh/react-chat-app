import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"

function App() {
  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-blue_blur  backdrop-blur-lg backdrop-saturate-200 border-solid flex">
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App
