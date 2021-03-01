import Link from "next/link";

const CustomButton: React.VFC<{
  toLink: string;
  text: string;
  size: "small" | "medium" | "large";
  outline: boolean;
  className?: string;
  // type?: "zip";
}> = ({ toLink, text, size, outline, className }) => {
  return (
    <>
      <Link href={toLink}>
        <a
          className={`
          ${
            outline === true
              ? "border border-red-300 text-red-300 hover:bg-gray-100"
              : "bg-red-300 text-white hover:bg-red-400"
          }
          px-4 py-2 mx-2 font-light rounded transition block max-w-2xl
          ${size === "large" ? "px-24 py-4 text-xl"
          : size === "medium" ? "px-16" : ""}
          ${className ? className : ""}
          `}
        >
          {text}
        </a>
      </Link>
    </>
  );
};

export { CustomButton };
