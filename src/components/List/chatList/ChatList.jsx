import { useState } from "react"
import AddNewUser from "./addUser/AddNewUser"

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
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
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddddddf6] border-b pb-4 ">
        <img
          src="./avatar.png"
          alt=""
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="flex flex-col gap-2 ">
          <h2 className="font-semibold">John smith</h2>
          <span className="text-sm text-gray-500">good luck</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mt-4 border-solid border-[#ddd] border-b pb-2 ">
        <img src="./avatar.png" alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h2>John smith</h2>
          <span>good luck</span>
        </div>
      </div>
      {addMode && <AddNewUser />}
    </div>
  )
}

export default ChatList
