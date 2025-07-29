"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section 
	
	className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-transparent">
      <div className="text-center">
        <div className="mb-6 sm:mb-8">
          <Image
            src="/portrait.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-gray-50 shadow-lg"
          />
        </div>
       <div className="bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto mt-12 animate-fade-in text-center">
  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
    👋 Hello, I’m <span className="text-[#38bdf8]">Md Arbaaz Hussain</span>
  </h1>
  <p className="text-lg md:text-xl font-medium leading-relaxed">
    I’m a <span className="font-bold text-white">Full Stack Developer</span> passionate about creating
    <span className="text-[#facc15] font-semibold"> real-time</span>,
    <span className="text-[#34d399] font-semibold"> scalable</span>, and
    <span className="text-[#f472b6] font-semibold"> responsive</span> web applications.
    <br />
    I specialize in:
  </p>

  <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm md:text-base font-medium">
    <span className="bg-[#38bdf8] text-[#0f172a] px-4 py-1 rounded-full shadow-sm">JavaScript</span>
    <span className="bg-[#61dafb] text-[#0f172a] px-4 py-1 rounded-full shadow-sm">React</span>
    <span className="bg-[#7c3aed] text-white px-4 py-1 rounded-full shadow-sm">Redux Toolkit</span>
    <span className="bg-[#10b981] text-white px-4 py-1 rounded-full shadow-sm">Node.js</span>
    <span className="bg-[#f97316] text-white px-4 py-1 rounded-full shadow-sm">Express.js</span>
    <span className="bg-[#16a34a] text-white px-4 py-1 rounded-full shadow-sm">MongoDB</span>
    <span className="bg-[#0ea5e9] text-white px-4 py-1 rounded-full shadow-sm">Socket.IO</span>
    <span className="bg-[#a855f7] text-white px-4 py-1 rounded-full shadow-sm">WebRTC</span>
    <span className="bg-[#e11d48] text-white px-4 py-1 rounded-full shadow-sm">HLS Streaming</span>
  </div>
</div>

      </div>
    </section>
  );
}
