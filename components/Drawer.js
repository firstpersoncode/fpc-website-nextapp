export default function ComponentDrawer({ open, onClose, children }) {
  return (
    <>
      {open ? <div onClick={onClose} className="fixed z-50 inset-0 w-full h-full" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} /> : null}
      <div className="fixed p-10 bg-white rounded bottom-0 left-0 right-0 w-full transition duration-500 ease-in-out z-50 overflow-y-auto" style={{
        transform: open ? "translateY(0)" : "translateY(100%)",
        opacity: open ? 1 : 0,
        maxHeight: "40vh"
      }}>
        <button onClick={onClose} className="absolute border border-gray-300 rounded border-b-4 right-0 left-0 m-auto top-4" style={{ width: 100 }}></button>
        {children}
      </div>
    </>
  )
}
