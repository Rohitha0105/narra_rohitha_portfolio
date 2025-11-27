export default function ButtonPrimary({ children, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-md text-sm font-semibold
           bg-gradient-to-br from-[#B7A6FF] to-[#7BEAFF] text-black shadow-md
           hover:scale-105 hover:shadow-xl transition-all duration-300"

    >
      {children}
    </a>
  );
}
