// import React from 'react'
// import ChatWindow from './components/ChatWindow'
// import Sidebar from './components/Sidebar'


// export default function App() {
// return (
// <div className="min-h-screen flex items-center justify-center p-6">
// <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
// <Sidebar className="md:col-span-1" />
// <main className="md:col-span-2 p-6">
// <ChatWindow />
// </main>
// </div>
// </div>
// )
// }
export default function App() {
  return (
    <div className="min-h-screen w-full p-2 md:p-6">
      <div className="
        w-full max-w-5xl
        mx-auto
        bg-white/70 backdrop-blur-md 
        rounded-2xl 
        shadow-2xl 
        overflow-hidden 
        
        grid 
        grid-cols-1 
        md:grid-cols-3
      ">
        
        {/* Sidebar on top for mobile */}
        <aside className="order-1 md:order-none">
          <Sidebar />
        </aside>

        {/* Chat full width on mobile */}
        <main className="md:col-span-2 p-4 sm:p-6">
          <ChatWindow />
        </main>
      </div>
    </div>
  );
}
