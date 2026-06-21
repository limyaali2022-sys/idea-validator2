
"use client"
import { useState } from "react";
export default function Home() {
const [userText,setuserText]=useState("");
const [aiRes, setaiRes]=useState<any>("");

async function handleValidate() {
  const response = await fetch("/api/evaluate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ idea: userText })
})
const data = await response.json()
  setaiRes(data)

}
  return (
    <div style={{ backgroundColor: "#fdfdfd" }}>
      <div className = "p-8">
    
      <h1 className="text-4xl mt-4" ><strong>Idea Validator</strong></h1>
      <p className="text-1xl mt-4 font-serif">Is your idea great enough? Submit it and get the insights now!</p>
      
      
      <textarea  className="mt-6 border border-black rounded p-1 block"
        name="submitIdea"
        placeholder="Describe your idea..."
        value={userText}
        onChange={(event) => setuserText(event.target.value)}
        rows={4}
        cols={40}>
           
        </textarea>

      <button className="bg-black text-white mt-3 border border-black rounded p-1" onClick={handleValidate}>Validate</button>
  
          <hr className="mt-2"></hr>

        <h2 className="mt-2 text-2xl"><strong>Results</strong></h2>
        <p className="mt-2">{aiRes ? aiRes.summary : "No results yet."}</p>
      </div>
    
    </div>


  )
}