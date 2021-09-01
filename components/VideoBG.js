export default function ComponentVideoBG({ video }) {
  const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_URL

  return (
    <div className="relative h-screen overflow-hidden">
      {video && video.url ? <video autoPlay muted loop playsinline className="lazy min-h-full min-w-full absolute" style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        objectFit: "cover",
      }}>
        <source data-src={STRAPI_HOST + video.url} type="video/mp4" />
      </video> : null}
      <div className="absolute w-full h-full inset-0" style={{
        backgroundColor: "rgba(0,0,0,0.75)"
      }} />
    </div>
  )
}
