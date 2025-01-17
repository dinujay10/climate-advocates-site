"use client";

export default function BackgroundVideo() {
  return (
    <div className="relative top-0 left-0 h-screen overflow-hidden">
      {/* YouTube Video with sound enabled */}
      <iframe
        src="https://www.youtube.com/embed/wyAfQBSOeFg?autoplay=1&loop=1&playlist=wyAfQBSOeFg&controls=0&modestbranding=1&rel=0&mute=0"
        title="YouTube background video"
        allow="autoplay; fullscreen"
        style={{ border: 0 }}
        className="absolute top-0 left-0 w-[calc(100vw+100px)] h-[calc(100vh+200px)] -translate-x-[50px] -translate-y-[50px] z-0"
      ></iframe>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-end justify-center z-10">
        <section className="relative z-20 flex flex-col items-center justify-end gap-5 h-full pb-20 mt-20">
        <h1 className="text-4xl font-bold mb-6 pt-16 text-center w-full">
          Climate Advocates
        </h1>
          <p className="text-xl text-gray-300">Advocating for a better world</p>
          <button className="px-5 py-3 bg-green-500 text-white rounded-lg font-bold">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}
