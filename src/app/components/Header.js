import DarkModeButton from "./DarkMode";
import Link from "next/link";

const Header = () => {
    return (
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">ouhammou</h1>
            <ul className="flex items-center">
              <li>
                <DarkModeButton/>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.canva.com/design/DAFzgezZW-Y/utOC7KaynHn40EjqtvO9QA/view?utm_content=DAFzgezZW-Y&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
    );
};

export default Header;
