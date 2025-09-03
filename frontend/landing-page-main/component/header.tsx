import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white/20 backdrop-blur-md text-soft-brown py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          Codevin
        </Link>
        <ul className="flex space-x-13">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
