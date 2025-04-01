import { FC, useState } from "react";
import { routeMap } from "../../router/routeMap.tsx";

export const Navbar: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubpages = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="relative">
      <ul className="flex items-center p-6 gap-3">
        {routeMap.map((item, index) => (
          <li key={index} className="relative">
            <button
              onClick={() => toggleSubpages(index)}
              className="focus:outline-none"
            >
              {item.name}
            </button>
            {item.subpages && openIndex === index && (
              <ul className="absolute left-0 mt-2 bg-gray-800 shadow-lg">
                {item.subpages.map((subItem, subIndex) => (
                  <li key={subIndex} className="hover:bg-gray-100">
                    <a
                      href={subItem.path}
                      className="block px-4 py-2 whitespace-no-wrap"
                    >
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}