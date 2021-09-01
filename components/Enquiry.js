import ComponentVideoBG from "./VideoBG"

export default function ComponentEnquiry({ data }) {
  const { video } = data

  return (
    <>
      <ComponentVideoBG poster="/img/enquiry.png" video={video} />

      <div className="absolute w-full h-full inset-0 flex flex-col justify-center items-center">
        <a href="mailto:nasser.maronie@gmail.com" className="mb-4">
          <button className="p-4 px-6 bg-blue-300 rounded hover:bg-white font-medium text-2xl">Let&lsquo;s get in touch</button>
        </a>
        <p className="text-white text-xs">I will get back to you as soon as possible :)</p>
      </div>
    </>
  )
}
