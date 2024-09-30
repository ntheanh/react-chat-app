import React, { useState } from "react"
import { toast } from "react-toastify"

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  })

  const handleAvatar = (e) => {
    setAvatar({
      file: e?.target?.files[0],
      url: URL.createObjectURL(e?.target?.files[0])
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // toast.success("Login success")
  }

  return (
    <>
      {/* Login */}
      <form
        className="flex flex-col gap-5 items-center justify-center m-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
        />
        <button className="bg-blue w-full p-2 mx-4 mb-4 rounded">
          Sign in
        </button>
      </form>

      {/* Signup */}
      <form className="flex flex-col gap-5 items-center justify-center m-auto ">
        <h2 className="text-2xl font-semibold">Create an account</h2>
        <div className="flex items-center gap-4">
          <img
            src={avatar.url || "./avatar.png"}
            alt=""
            className="w-16 h-16 rounded-full object-cover  "
          />
          <label htmlFor="file" className="cursor-pointer">
            Upload an image
          </label>
        </div>
        <input
          type="file"
          id="file"
          className="hidden"
          onChange={handleAvatar}
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
        />
        <button className="bg-blue w-full p-2 mx-4 mb-4 rounded">
          Sign Up
        </button>
      </form>
    </>
  )
}

export default Login
