import { NAV_ITEMS } from "../constants";

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#1a1b26] border-t border-[#414868]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9aa5ce] text-center md:text-left">
            © 2026 Long' s Portfolio. Crafted with ⚽ passion and 💻 code.
          </p>
          <div className="flex gap-4 text-sm text-[#9aa5ce]">
            {NAV_ITEMS.map((item, index) => (
              <span key={item} className="flex items-center gap-4">
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#7aa2f7] transition-colors">
                  {item}
                </a>
                {index < NAV_ITEMS.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
