import Link from 'next/link';
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
} from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';

type SocialProps = {
  Icon: React.ElementType;
  link: string;
};

const Socials: SocialProps[] = [
  {
    Icon: SiFacebook,
    link: 'https://www.facebook.com/Jan.dacallos',
  },
  {
    Icon: SiInstagram,
    link: 'https://www.instagram.com/',
  },
  {
    Icon: Linkedin,
    link: 'https://www.linkedin.com/in/jan-phillip-dacallos-2a486b1a9/',
  },
  {
    Icon: SiGithub,
    link: 'https://github.com/jpdevdotcom',
  },
];

export const FooterLayout = () => {
  return (
    <div>
      <div className="w-full bottom-0 md:py-20 py-10 lg:px-24 px-7 z-10 border border-t bg-gray-950 space-y-10">
        <div className="flex md:flex-row flex-col text-left justify-between text-gray-300">
          <div className="md:mb-0 mb-5">
            <h5 className="text-3xl font-bold text-[#FF7800]">PawMed AI</h5>
            <p className="text-sm">
              Revolutionizing Pet Healthcare with Artificial Intelligence
            </p>
          </div>
          <div className="flex flex-col">
            <Link href={'/'} className="hover:text-orange-300">
              Home
            </Link>
            <Link href={'/about'} className="hover:text-orange-300">
              About Us
            </Link>
            <Link href={'/classify-disease'} className="hover:text-orange-300">
              Classify Disease
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href={'/'} className="hover:text-orange-300">
              Queries
            </Link>
            <Link href={'/'} className="hover:text-orange-300">
              Some Bug Reports
            </Link>
            <Link href={'/'} className="hover:text-orange-300">
              Changes or Suggestions
            </Link>
          </div>
          <div className="flex flex-col md:pt-0 pt-10">
            <p className="text-xs">GOT A PROJECT IN MIND?</p>
            <h2 className="text-6xl">Let&apos;s talk!</h2>
          </div>
        </div>

        <hr className="opacity-50" />

        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-5">
            {Socials.map((social, idx) => (
              <Link
                href={social.link}
                target="_blank"
                key={idx}
                className="hover:opacity-100 opacity-50 transition-all duration-300"
              >
                <social.Icon color="white" size={25} className="text-red-400" />
              </Link>
            ))}
          </div>
          <p className="text-white opacity-50">
            &copy; 2025 PawMed AI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
