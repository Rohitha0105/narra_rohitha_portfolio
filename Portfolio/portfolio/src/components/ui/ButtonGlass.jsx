export default function ButtonGlass({ children, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass inline-flex items-center gap-3 px-4 py-2 rounded-md text-sm
           hover:scale-105 hover:shadow-xl transition-all duration-300"

    >
      {children}
    </a>
  );
}
