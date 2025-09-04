"use client"
import { motion } from "framer-motion"

const consultancyServices = [
  {
    title: "Math Foundation Consultancy",
    description:
      "We provide expert guidance in building strong foundations in algebra, geometry, calculus, trigonometry, and mathematical reasoning for students of all levels.",
    icon: "📚",
    buttonStyle: "outline",
    bulletPoints: ["Algebra & Geometry Mastery", "Calculus & Trigonometry Support", "Logical & Problem-Solving Skills"],
    isRecommended: false,
  },
  {
    title: "Advanced Math Consultancy",
    description:
      "We offer specialized support in advanced mathematics including pure math, applied math, linear algebra, statistics, and differential equations for academic excellence.",
    icon: "📈",
    buttonStyle: "primary",
    bulletPoints: ["Linear Algebra & Statistics", "Differential Equations & Probability", "Applied & Pure Mathematics"],
    isRecommended: true,
  },
  {
    title: "Exam & Competition Prep",
    description:
      "We provide focused coaching for mathematics exams, Olympiads, SAT, GRE, and other competitive tests to maximize performance and confidence.",
    icon: "🎯",
    buttonStyle: "outline",
    bulletPoints: ["Math Olympiad Preparation", "SAT & GRE Math Coaching", "Tailored Practice & Mock Tests"],
    isRecommended: false,
  },
]

const ConsultancyCard = ({ title, description, icon, buttonStyle, bulletPoints, index, isRecommended }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className={`relative group h-full ${isRecommended ? "md:scale-105 z-10" : ""}`}
  >
    {isRecommended && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          ⭐ Most Popular
        </div>
      </div>
    )}

    <div
      className={`relative backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col transition-all duration-300 ${
        isRecommended
          ? "bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-2 border-blue-400/30 shadow-2xl shadow-blue-500/20"
          : "bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8"
      }`}
    >
      <div className="mb-6">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl border transition-all duration-300 ${
            isRecommended
              ? "bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-blue-400/30"
              : "bg-white/10 backdrop-blur-sm border-white/20 group-hover:bg-white/15"
          }`}
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-white text-2xl font-bold mb-4 leading-tight">{title}</h3>
        <p className="text-gray-300 leading-relaxed mb-6 text-balance">{description}</p>

        <ul className="space-y-3 mb-8">
          {bulletPoints.map((point, idx) => (
            <li key={idx} className="text-gray-300 flex items-start group/item">
              <span
                className={`mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                  isRecommended ? "bg-blue-400" : "bg-white/60"
                }`}
              ></span>
              <span className="group-hover/item:text-white transition-colors duration-200">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <button
          className={`w-full py-4 px-6 rounded-3xl font-semibold transition-all duration-300 hover:scale-[1.02] transform shadow-lg ${
            buttonStyle === "primary"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-blue-500/25"
              : "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm hover:border-white/30"
          }`}
        >
          Get Started →
        </button>
      </div>
    </div>
  </motion.div>
)

const ConsultancySection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-purple-900 via-black to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Expert Math Consultancy</h1>
          <h2 className="text-xl md:text-2xl text-blue-300 mb-8 font-medium">
            Master Mathematics with Professional Guidance
          </h2>
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="flex text-yellow-400 text-lg">{"★".repeat(5)}</div>
            <span className="text-gray-300">4.9 from 2,847 students</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners who have strengthened their math skills and achieved academic success with our
            expert consultancy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {consultancyServices.map((service, index) => (
            <ConsultancyCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-gray-400 mb-6">Trusted by students worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-white/40 font-semibold">5000+ Learners</div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-white/40 font-semibold">98% Success Rate</div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-white/40 font-semibold">24/7 Math Support</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ConsultancySection
