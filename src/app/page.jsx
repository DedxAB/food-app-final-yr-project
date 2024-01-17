"use client"
import { useState } from "react"

export default function Home() {
  const [name,setName]=useState("")
    return (
    <main>
      <h1 className="text-4xl font-bold text-center">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <button className="btn btn-primary">Primary</button>
      <a href="/about">ABOUT</a>
    </main>
  )
}
