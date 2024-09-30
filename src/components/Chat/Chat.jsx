import EmojiPicker from "emoji-picker-react"
import { useState, useRef, useEffect } from "react"

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState("")
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    // setOpenEmoji(false)
  }
  return (
    <div className="flex-[2] border-r border-l flex flex-col ">
      {/*Top */}
      <div className="flex items-center justify-between border-b pb-2 p-4">
        <div className="flex items-center gap-4">
          <img
            src="./avatar.png"
            alt=""
            className="w-12 h-12 rounded-full object-cover "
          />
          <div>
            <h2 className="text-base font-semibold">Maria Nelson</h2>
            <span className="text-sm">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
        <div className="flex gap-4">
          <img src="./phone.png" alt="" className="w-5 h-5 cursor-pointer " />
          <img src="./video.png" alt="" className="w-5 h-5 cursor-pointer " />
          <img src="./info.png" alt="" className="w-5 h-5 cursor-pointer " />
        </div>
      </div>
      {/*Middle */}
      <div className="flex-[1] flex flex-col p-4 gap-5 overflow-scroll no-scrollbar">
        <div className=" flex gap-4 max-w-[70%] ">
          <img src="./avatar.png" alt="" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col gap-2">
            <span className="bg-blue_blur p-2 rounded-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              inventore?
            </span>
            <span className="text-xs font-light">10 minutes ago</span>
          </div>
        </div>{" "}
        <div className=" flex gap-4 max-w-[70%] own">
          <div className="flex flex-col gap-2">
            <img
              src="./avatar.png"
              alt=""
              className="max-w-[70%] object-cover rounded-lg "
            />
            <span className="bg-blue p-2 rounded-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              inventore?
            </span>
            <span className="text-xs font-light">10 minutes ago</span>
          </div>
        </div>{" "}
        <div className=" flex gap-4 max-w-[70%] ">
          <img src="./avatar.png" alt="" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col gap-2">
            <span className="bg-blue_blur p-2 rounded-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              inventore?
            </span>
            <span className="text-xs font-light">10 minutes ago</span>
          </div>
        </div>{" "}
        <div className=" flex gap-4 max-w-[70%] own">
          <div className="flex flex-col gap-2">
            <span className="bg-blue p-2 rounded-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              inventore?
            </span>
            <span className="text-xs font-light">10 minutes ago</span>
          </div>
        </div>{" "}
        <div className=" flex gap-4 max-w-[70%] ">
          <img src="./avatar.png" alt="" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col gap-2">
            <span className="bg-blue_blur p-2 rounded-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              inventore?
            </span>
            <span className="text-xs font-light">10 minutes ago</span>
          </div>
        </div>
        <div className=" flex gap-4 max-w-[70%] own">
          <div className="flex flex-col gap-2">
            <span className="bg-blue p-2 rounded-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              inventore?
            </span>
            <span className="text-xs font-light">10 minutes ago</span>
          </div>
        </div>{" "}
        <div className=" flex gap-4 max-w-[70%] ">
          <img src="./avatar.png" alt="" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col gap-2">
            <span className="bg-blue_blur p-2 rounded-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              inventore?
            </span>
            <span className="text-xs font-light">10 minutes ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      {/* Bottom */}
      <div className="flex items-center justify-between p-4 mt-auto border-t">
        <div className="flex items-center gap-3">
          <img src="./img.png" alt="" className="w-5 h-5 cursor-pointer" />
          <img src="./camera.png" alt="" className="w-5 h-5 cursor-pointer" />
          <img src="./mic.png" alt="" className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="flex-[2] mx-4">
          <input
            type="text"
            placeholder="Type a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-blue_blur border-none outline-none rounded p-2 w-full text-sm"
          />
        </div>
        <div className="flex items-center gap-3 ">
          <img
            src="./emoji.png"
            alt=""
            className="w-5 h-5 cursor-pointer relative"
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="absolute bottom-12 right-0">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
          <button className="border-none outline-none p-2 bg-purple rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
