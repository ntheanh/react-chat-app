import { useState } from "react"
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore"
import { db } from "../../../../lib/firebase"
import { create } from "zustand"
import { useUserStore } from "../../../../lib/userStore"

const AddNewUser = () => {
  const [user, setUser] = useState(null)

  const { currentUser } = useUserStore()
  const handleSearch = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const username = formData.get("username")

    try {
      const userRef = collection(db, "user")

      const q = query(userRef, where("username", "==", username))

      const querySnapShot = await getDocs(q)

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleAdd = async () => {
    const chatRef = collection(db, "chats")
    const userChatsRef = collection(db, "userchats")

    try {
      const newChatRef = doc(chatRef)

      await setDoc(newChatRef, {
        createAt: serverTimestamp(),
        message: []
      })

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updateAt: Date.now()
        })
      })

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updateAt: Date.now()
        })
      })
      console.log(newChatRef.id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 w-max h-max bg-black m-auto rounded-md p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          className=" rounded-lg py-2 px-4 outline-none bg-white text-black"
        />
        <button className="bg-blue p-2 mx-2 rounded">Search</button>
      </form>
      {user && (
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar || "./avatar.png"}
              alt=""
              className="w-12 h-12 rounded-full border"
            />
            <h2>{user.username}</h2>
          </div>
          <button className="bg-blue p-2 mx-2 rounded" onClick={handleAdd}>
            Add User
          </button>
        </div>
      )}
    </div>
  )
}

export default AddNewUser
