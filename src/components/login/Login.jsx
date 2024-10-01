import React, { useState } from "react"
import { toast } from "react-toastify"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"
import { auth, db } from "../../lib/firebase"
import upload from "../../lib/upload"
import { doc, setDoc } from "firebase/firestore"

const Login = () => {
  const [loading, setLoading] = useState(false)

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

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const { username, email, password } = Object.fromEntries(formData)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const imgUrl = await upload(avatar.file)

      await setDoc(doc(db, "user", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: []
      })
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: []
      })
      toast.success("Login success")
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success("Login success")
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Login */}
      <form
        className="flex flex-col gap-5 items-center justify-center m-auto"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
        />
        <button
          className="bg-blue w-full p-2 mx-4 mb-4 rounded"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>

      {/* Signup */}
      <form
        className="flex flex-col gap-5 items-center justify-center m-auto "
        onSubmit={handleRegister}
      >
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
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none bg-blue_blur"
          name="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border-none border-slate-200 rounded-lg py-3 px-5 outline-none  bg-blue_blur"
          name="password"
        />
        <button
          className="bg-blue w-full p-2 mx-4 mb-4 rounded"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </>
  )
}

export default Login
