import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <ul>
          <li>
            <Link href="/">
              <a className="text-white">ホーム</a>
            </Link>
          </li>
        </ul>
        <p className="text-white text-center py-6">copyright&copy;Ranze</p>
      </footer>
    </>
  );
};

export { Footer };
