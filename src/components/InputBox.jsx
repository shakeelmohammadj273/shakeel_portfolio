import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'


export default function InputBox({ onSend }) {
const [value, setValue] = useState('')


function submit(e) {
e?.preventDefault()
if (!value.trim()) return
onSend(value.trim())
setValue('')
}


return (
<form onSubmit={submit} className="flex gap-2 items-center">
<input
value={value}
onChange={e => setValue(e.target.value)}
placeholder="Type a message... e.g. 'projects'"
className="flex-1 p-3 rounded-xl border border-white/60 bg-white/70 focus:outline-none"
/>
<button type="submit" className="p-3 rounded-xl bg-indigo-600 text-white flex items-center gap-2">
<FaPaperPlane /> Send
</button>
</form>
)
}