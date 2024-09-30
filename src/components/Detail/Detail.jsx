const Detail = () => {
  return (
    <div className="flex-[1] flex flex-col ">
      {/* Top */}
      <div className="flex flex-col items-center gap-2 border-b p-4">
        <img
          src="./avatar.png"
          alt=""
          className="w-20 h-20 rounded-full object-cover mt-3 "
        />
        <h2 className="text-base font-semibold">Maria Nelson</h2>
        <span className="text-sm">Lorem ipsum dolor sit amet.</span>
      </div>
      {/* Middle */}
      <div className="p-3 gap-3 flex flex-col ">
        <div className="flex items-center justify-between">
          <h4>Chat setting</h4>
          <img src="./arrowDown.png" alt="" className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-between">
          <h4>Privacy and help</h4>
          <img src="./arrowDown.png" alt="" className="w-4 h-4" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4>Share photos</h4>
            <img src="./arrowDown.png" alt="" className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between">
            <img src="./avatar.png" alt="" className="w-12 h-12" />
            <img src="./download.png" alt="" className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between">
            <img src="./avatar.png" alt="" className="w-12 h-12" />
            <img src="./download.png" alt="" className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between">
            <img src="./avatar.png" alt="" className="w-12 h-12" />
            <img src="./download.png" alt="" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h4>Share files</h4>
          <img src="./arrowDown.png" alt="" className="w-4 h-4" />
        </div>
      </div>
      <button className="bg-red mt-auto p-2 mx-4 rounded">Block User</button>
      <button className="bg-blue mt-auto p-2 mx-4 mb-4 rounded">Logout</button>
    </div>
  )
}

export default Detail
