export default function Enquiry({ video, title }) {
  return (
    <div className="h-full h-screen bg-black">
      <div className="absolute w-full h-full inset-0 overflow-hidden">
        <video autoPlay muted loop className="min-h-full min-w-full absolute" style={{
          top: "50%",
        	left: "50%",
        	transform: "translate(-50%, -50%)",
        	objectFit: "cover",
        }} src={process.env.NEXT_PUBLIC_STRAPI_URL + video.url} type="video/mp4" />
      </div>
      <div className="absolute w-full h-full inset-0 flex flex-col justify-center items-center" style={{
        backgroundColor: "rgba(0,0,0,0.75)"
      }}>
        <h1 className="text-3xl text-white font-medium mb-4">{title}</h1>
        <a href="mailto:nasser.maronie@gmail.com" className="mb-4"><button className="p-4 px-6 bg-blue-300 rounded hover:bg-white font-medium text-2xl">Let&lsquo;s get in touch</button></a>
        <p className="text-white text-xs">I will get back to you as soon as possible :)</p>
      </div>
    </div>
  )
}
