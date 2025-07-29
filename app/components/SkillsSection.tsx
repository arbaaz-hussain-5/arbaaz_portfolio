export default function SkillsSection() {
  const skills = [
    "JavaScript ",
    "React",
    "Redux Toolkit",
    "Tailwind CSS",
    "shadcn UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs",
  ];
const skillColors = {
  "JavaScript": "from-yellow-100 to-yellow-200 border-yellow-400 text-yellow-800",
  "React": "from-blue-100 to-blue-200 border-blue-400 text-blue-900",
  "Redux Toolkit": "from-purple-100 to-purple-200 border-purple-400 text-purple-900",
  "Tailwind CSS": "from-cyan-100 to-cyan-200 border-cyan-400 text-cyan-900",
  "shadcn UI": "from-gray-100 to-gray-200 border-gray-400 text-gray-900",
  "Node.js": "from-lime-100 to-lime-200 border-lime-400 text-lime-900",
  "Express.js": "from-neutral-100 to-neutral-200 border-neutral-400 text-neutral-900",
  "MongoDB": "from-green-100 to-green-200 border-green-400 text-green-900",
  "RESTful APIs": "from-orange-100 to-orange-200 border-orange-400 text-orange-900",
};



  return (
    <section className="bg-transparent py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full flex justify-center my-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl blur-2xl opacity-30 scale-110"></div>
          <h2 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-br from-black via-zinc-900 to-neutral-800 px-6 py-3 rounded-xl shadow-lg text-center animate-fade-in-up">
            Technical Skills
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {skills.map((skill) => (
           <div
  key={skill}
  className={`bg-gradient-to-br ${skillColors[skill] || "from-white to-slate-100 border-slate-300 text-gray-900"} p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out`}
>
  {skill}
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
