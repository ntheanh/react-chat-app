import { useEffect, useState } from "react"
import AddNewUser from "./addUser/AddNewUser"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../lib/firebase"
import { useUserStore } from "../../../lib/userStore"
import { useChatStore } from "../../../lib/chatStore"

const ChatList = () => {
  const [chats, setChats] = useState([])
  const [addMode, setAddMode] = useState(false)

  const { currentUser } = useUserStore()
  const { changeChat } = useChatStore()

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "user", item.receiverId)
          const userDocSnap = await getDoc(userDocRef)

          const user = userDocSnap.data()

          return { ...item, user }
        })

        const chatData = await Promise.all(promises)

        setChats(chatData.sort((a, b) => b.updateAt - a.updateAt))
      }
    )

    return () => {
      unSub()
    }
  }, [currentUser.id])

  const handleSelect = async (chat)=>{
    changeChat(chat.chatId, chat.user)
  }

  return (
    <div className="p-4 flex-[1] overflow-y-scroll max-h-[calc(100vh-20vh)] no-scrollbar">
      <div className="flex items-center gap-4 ">
        <div className="flex items-center gap-2 bg-blue_blur p-2 rounded-lg flex-[1]">
          <img src="/search.png" alt="" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className=" outline-none border-none bg-transparent"
          />
        </div>
        <div className="bg-blue_blur p-3 rounded-lg cursor-pointer">
          <img
            src={addMode ? "./minus.png" : "./plus.png"}
            alt=""
            className=" w-4 h-4"
            onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
      </div>
      {chats.map((chat) => (
        <div
          key={chat.chatId}
          onClick={() => handleSelect(chat)}
          className="flex items-center gap-4 mt-4 border-solid border-[#ddddddf6] border-b pb-4 "
        >
          <img
            src={chat.user.avatar || "./avatar.png"}
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="flex flex-col gap-2 ">
            <h2 className="font-semibold">{chat.user.username}</h2>
            <span className="text-sm text-gray-500">{chat.lastMessage}</span>
          </div>
        </div>
      ))}

      {addMode && <AddNewUser />}
    </div>
  )
}

export default ChatList
