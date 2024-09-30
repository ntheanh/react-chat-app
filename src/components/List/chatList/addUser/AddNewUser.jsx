import React from "react"

const AddNewUser = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 w-max h-max bg-black m-auto rounded-md p-4">
      <input
        type="text"
        placeholder="Enter your username"
        className=" rounded-lg py-2 px-4 outline-none bg-white"
      />
      <button className="bg-blue p-2 mx-2 rounded">Search</button>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          <img
            src="./avatar.png"
            alt=""
            className="w-12 h-12 rounded-full border"
          />
          <h2>Jane Doe</h2>
        </div>
        <button className="bg-blue p-2 mx-2 rounded">Add User</button>
      </div>
    </div>
  )
}

export default AddNewUser
