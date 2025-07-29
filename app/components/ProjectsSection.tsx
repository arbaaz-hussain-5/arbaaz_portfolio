import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full flex justify-center my-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl blur-2xl opacity-30 scale-110"></div>

          <h2 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-br from-black via-zinc-900 to-neutral-800 px-6 py-3 rounded-xl shadow-lg text-center animate-fade-in-up">
        Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
  {["WECONNECT", "MUSIFUN"].map((project) => (
    <div
      key={project}
      className="bg-black rounded-lg shadow-md overflow-hidden 
      transform transition duration-300 hover:scale-105 hover:shadow-xl group"
    >
      <div className="aspect-video bg-gray-100 relative">
        <Image
          src={project === "WECONNECT" ? `/p2.png` : `/p1.png`}
          alt={`Project ${project}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">
          {project}
        </h3>
        <p className="text-sm sm:text-base text-white mb-4 transition-opacity duration-300 group-hover:opacity-90">
          A brief description of the project and the technologies used in its development.
        </p>
        <div className="flex gap-4">
          <a
            href={`https://github.com/arbaaz-hussain-5/${project}.git`}
            className="text-blue-500 underline hover:text-blue-300 font-medium text-sm sm:text-base transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={
              project === "WECONNECT"
                ? "https://weconnect-ten.vercel.app/"
                : "https://drive.google.com/file/d/1WPi_0KLuO6Utk4vq5muAsusiAFpWFE9b/view?usp=sharing"
            }
            className="text-blue-500 underline hover:text-blue-300 font-medium text-sm sm:text-base transition-colors duration-300"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
