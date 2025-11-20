import React from 'react'
import { FaUser, FaRobot } from 'react-icons/fa'


export default function MessageBubble({ who, text }) {
const isUser = who === 'user'
const wrapperClass = isUser ? 'justify-end' : 'justify-start'
const bubbleClass = isUser ? 'bg-indigo-600 text-white' : 'bg-white text-slate-800'


return (
<div className={`flex ${wrapperClass} mb-3`}>
{!isUser && (
<div className="mr-3 self-end text-slate-500"><FaRobot/></div>
)}


<div className={`max-w-[78%] p-3 rounded-2xl shadow ${bubbleClass}`}>
{typeof text === 'string' ? (
text.split('\n').map((line, i) => <div key={i} className="whitespace-pre-wrap">{line}</div>)
) : (
text
)}
</div>


{isUser && (
<div className="ml-3 self-end text-white"><FaUser/></div>
)}
</div>
)
}