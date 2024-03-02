import React from "react";
import Link from "next/link";
import { SiGithub, SiX, SiLinkedin } from "react-icons/si";

interface SocialItem {
  Link: string;
  Label: string;
  Icon: React.ComponentType<any>;
}

const socials: SocialItem[] = [
  {
    Link: "https://github.com/Rahul577503",
    Label: "GitHub",
    Icon: SiGithub,
  },
  {
    Link: "https://twitter.com/RahulMa09588359",
    Label: "X",
    Icon: SiX,
  },
  {
    Link: "https://www.linkedin.com/in/rahul-maurya-6abb491b8",
    Label: "LinkedIn",
    Icon: SiLinkedin,
  },
];

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0  z-10 bg-black bg-opacity-50 backdrop-blur-lg animate-move-down">
      <nav className="flex justify-between	 items-center py-5 px-2 lg:px-36 md:px-4">
        <h1 className=" text-xl md:xl lg:text-2xl font-bold underline underline-offset-8 decoration-amber-400 -rotate-2 text-white">
          <Link href={"/"}>Rahul Maurya. 🧑‍💻</Link>
        </h1>
        <div className="flex items-center lg:gap-7 gap-2">
          <Link href="/blog" className="text-gray-200">
            Blog
          </Link>
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.Link} key={index} aria-label={social.Label}>
                <Icon className="lg:w-6 lg:h-6 h-4 w-4 hover:scale-125 duration-150 transition-all text-white" />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
