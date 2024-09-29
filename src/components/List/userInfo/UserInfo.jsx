const UserInfo = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="flex items-center justify-center gap-4">
        <img className="w-10 h-10 rounded-full cursor-pointer" src="./avatar.png" alt="" />
        <h2>John smith</h2>
      </div>
      <div className="flex gap-8">
        <img className="w-5 h-5 cursor-pointer" src="./more.png" alt="" />
        <img className="w-5 h-5 cursor-pointer" src="./video.png" alt="" />
        <img className="w-5 h-5 cursor-pointer" src="./edit.png" alt="" />
      </div>
    </div>
  )
}

export default UserInfo
