import { useState } from "react"

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className="p-4">
      <div className="flex items-center gap-4 ">
        <div className="flex items-center gap-2 bg-blue_blur p-2 rounded-lg flex-[1]">
          <img src="/search.png" alt="" className="w-4 h-4" />
          <input type="text" placeholder="Search" className=" outline-none border-none bg-transparent" />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="bg-blue_blur w-8 h-8 p-2 rounded-lg cursor-pointer" onClick={() => setAddMode(prev => !prev)} />
      </div>
    </div>
  )
}

export default ChatList
