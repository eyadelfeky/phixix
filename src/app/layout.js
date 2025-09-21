import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Phixix",
  description: "Online Physics Courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="  text-white">
        <nav className="bg-purple-700 flex flex-row justify-between p-4 fixed w-full z-5">
          <div className="p-1 bg-purple-500 rounded-xl" title="phixix">
            <Link href='/'>
              <Image src='/Phixix.png' width={30} height={30} className="rounded-lg" alt="phixix"/>
            </Link>
          </div>
          <ul className="flex flex-row justify-around md:w-1/3 w-full font-medium">
            <li className="navElement">
              <Link href='/'>Home</Link>
            </li>
            <li className="navElement">
              <Link href='/courses'>Courses</Link>
            </li>
            <li className="navElement">About</li>
            <li className="navElement">Contact</li>
          </ul>
      </nav>    
        {children}
      </body>
    </html>
  );
}
