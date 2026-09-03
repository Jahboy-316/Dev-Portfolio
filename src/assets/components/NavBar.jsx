import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50  
                transition-all duration-700 backdrop-blur-md
                ${
                    scrolled
                        ? "border-b border-black/20 py-6"
                        : "border-b border-transparent py-8"
                }
            `}
        >
            <div className="px-6 mx-auto md:px-40 w-full flex justify-between items-center">
                <h1 className="font-Poppins text-2xl tracking-wide">
                    Jahdev
                </h1>

                <Menu className="w-8 h-auto" />
            </div>
        </header>
    );
}

export default NavBar;