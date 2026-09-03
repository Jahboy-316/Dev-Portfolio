import { Mail } from "lucide-react"
import { Download } from "lucide-react"

function HeroSection() {
    return (
        <div className="relative z-10 pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
            <div className="relative z-10 px-6 w-full flex flex-col justify-center items-center mx-auto mb-8 max-w-350 " >
                <div className="text-4xl md:text-7xl font-Poppins font-medium text-text-highlighted text-center mb-8">
                    Software Developer & Designer building
                    <span className="italic font-light font-serif tracking-wide"> modern scalable applications </span>
                    across web and mobile.
                </div>
                <p className="text-sm font-medium font-Poppins md:text-lg max-w-2xl mx-auto px-4 mb-12 text-center">Open to new opportunities, collaborations, and exciting projects.
                    Let's build something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-5 md:mb-14">
                    <a href="#" className="uppercase font-Poppins text-white bg-text-basic flex items-center gap-3 px-8 py-4 rounded-full shadow-xl font-medium tracking-wide hover:scale-102 active:scale-98 transition-all">
                        <Mail className="w-6 h-auto" />
                        Contact Me
                    </a>
                    <a href="#" className="uppercase font-Poppins border border-gray-300 text-text-highlighted bg-transparent flex items-center gap-3 px-8 py-4 rounded-full shadow-xl font-medium tracking-wide hover:scale-102 active:scale-98 hover:border-black transition-all">
                        <Download className="w-6 h-auto" />
                        Download CV
                    </a>
                </div>
            </div>

            <div className="w-full relative flex flex-col md:flex-row items-center md:items-end justify-between max-w-8xl mx-auto px-4 md:px-0 gap-8 md:gap-0">
                <div className="flex items-center justify-center gap-3 z-30 md:mb-12 md:pl-4">
                    <span className="relative flex w-4 h-4">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-4 h-4 rounded-full bg-green-400 border-2 border-white"></span>
                    </span>

                    <span className="text-sm md:text-lg font-medium tracking-tight text-text-highlighted font-Poppins">
                        Available for Work
                    </span>
                </div>

            </div>




        </div>

    )

}
export default HeroSection