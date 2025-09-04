import { Calculator, Lightbulb, Zap, ArrowDown, Mail, BookOpen } from "lucide-react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Floating Math Icons */}
      <div className="absolute top-20 right-20 text-[#915EFF]/30">
        <Calculator size={60} />
      </div>

      <div className="absolute top-1/3 left-20 text-[#915EFF]/40">
        <Lightbulb size={40} />
      </div>

      <div className="absolute bottom-1/3 right-1/4 text-[#915EFF]/35">
        <Zap size={50} />
      </div>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Math at your <span className='text-[#915EFF]'>fingertips</span>
          </h1>
          
          <div className="mt-8 space-y-6">
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Graspable Math turns equations into an interactive experience <br className='sm:block hidden' />
              making problem-solving fun and intuitive.
            </p>
            
            <p className="text-[#915EFF] font-medium text-lg leading-relaxed">
              Solve equations visually • Manipulate variables directly • Transform abstract concepts into tangible interactions
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-[#915EFF] text-white font-semibold rounded-full shadow-2xl shadow-[#915EFF]/30 hover:shadow-[#915EFF]/50 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <BookOpen size={20} />
                  Learn More
                </span>
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-8 py-4 bg-transparent border-2 border-[#915EFF] text-[#915EFF] font-semibold rounded-full hover:bg-[#915EFF]/10 hover:border-[#915EFF]/80 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Mail size={20} />
                  Contact Us
                </span>
                <div className="absolute inset-0 rounded-full bg-[#915EFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Interactive", "Visual", "Intuitive", "Engaging"].map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-[#915EFF]/30 rounded-full text-sm text-[#915EFF]/80 font-medium hover:bg-[#915EFF]/10 hover:border-[#915EFF]/50 transition-all duration-300 cursor-pointer"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-white/5 backdrop-blur-sm hover:border-[#915EFF] hover:scale-110 transition-all duration-300'>
            <div className='w-3 h-3 rounded-full bg-secondary mb-1 shadow-lg shadow-[#915EFF]/50' />
          </div>
        </a>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#915EFF]/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i * 8}%`,
          }}
        />
      ))}
    </section>
  );
};

export default Hero;