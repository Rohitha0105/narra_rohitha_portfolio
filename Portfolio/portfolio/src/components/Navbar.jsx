import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = [
    { id: "hero", label: "Home" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "internships", label: "Internships" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  /* ----------------------------------------- */
  /*      DARK MODE: load saved preference     */
  /* ----------------------------------------- */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  /* ----------------------------------------- */
  /*      Scrollspy using IntersectionObserver  */
  /* ----------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );

    items.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* ----------------------------------------- */
  /*      Hide navbar on scroll down           */
  /* ----------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 10) {
        setHidden(false);
      } else if (current > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar container */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 glass backdrop-blur-xl py-3"
      >
        <div className="container-md flex items-center justify-between px-4">

          {/* Logo */}
          <a
            href="#hero"
            className="text-lg font-bold text-[#6D4CFF] dark:text-[#A98CFF]"
          >
            Portfolio
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`px-3 py-1 rounded-md transition ${
                    active === item.id
                      ? "bg-[#6D4CFF] dark:bg-[#A98CFF] text-white shadow-md"
                      : "hover:opacity-80 dark:text-gray-200"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDark}
              className="glass px-3 py-2 rounded-md dark:text-gray-200"
            >
              {document.documentElement.classList.contains("dark") ? "☀️" : "🌙"}
            </button>
          </ul>

          {/* Mobile menu + dark button */}
          <div className="md:hidden flex items-center gap-3">

            <button
              onClick={toggleDark}
              className="glass px-3 py-2 rounded-md dark:text-gray-200"
            >
              {document.documentElement.classList.contains("dark") ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="glass px-3 py-2 rounded-md"
            >
              ☰
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/40">
          <div
            className="absolute inset-0"
            onClick={() => setMobileOpen(false)}
          ></div>

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 right-5 w-64 glass p-4 rounded-xl"
          >
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 rounded-md ${
                    active === item.id
                      ? "bg-[#6D4CFF] dark:bg-[#A98CFF] text-white"
                      : "dark:text-gray-200"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
}
