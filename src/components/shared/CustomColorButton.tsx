import Link from "next/link";

const CustomButton: React.VFC<{
  toLink: string;
  text: string;
  size: "small" | "medium" | "large";
  outline: boolean;
  className?: string;
}> = ({ toLink, text, size, outline, className }) => {
  return (
    <>
      <Link href={toLink}>
        <a
          className={`
          ${
            outline === true
              ? "border border-custom-lightgray text-custom-lightgray hover:bg-gray-100"
              : "bg-custom-lightgray text-white hover:bg-custom-darkgray"
          }
          px-4 py-2 mx-2 font-light rounded transition block max-w-2xl shadow hover:shadow-md
          ${
            size === "large"
              ? "lg:px-24 px-10 py-4 text-xl"
              : size === "medium"
              ? "px-16"
              : ""
          }
          ${className !== undefined ? className : ""}
          `}
        >
          {text}
        </a>
      </Link>
    </>
  );
};

export { CustomButton };
