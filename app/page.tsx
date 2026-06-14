"use client"

export default function Home() {
  return (
    <div>
      <h1>Idea Validator</h1>
      <p>Is your idea great enough? Submit it and get the insights now!</p>
      <textarea
        name="submitIdea"
        defaultValue="Describe your idea..."
        rows={4}
        cols={40}
      />
    </div>
  )
}