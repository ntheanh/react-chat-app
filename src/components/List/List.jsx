import UserInfo from "./userInfo/UserInfo"
import ChatList from "./chatList/ChatList"
const List = () => {
  return (
    <div className="flex-[1] w-14 h-14">
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default List
