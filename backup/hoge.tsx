import Link from "next/link";

const Hoge: React.VFC<{
  toLink: string;
  text: string;
  size: "small" | "medium" | "large";
  outline: boolean;
  className?: string;
}> = ({ toLink, text, size, outline, className }) => {

  const handleClick = (e) => {

    if (e.target.children.length !== 0) {
      e.target.removeChild(e.target.children[0])
    }
    const X = e.pageX - e.target.offsetLeft;
    const Y = e.pageY - e.target.offsetTop;
    const newDiv = document.createElement("div");
    newDiv.classList.add("ripple");
    newDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
    e.target.appendChild(newDiv);
  }

  return (
    <>
      <Link href={toLink}>
        <a
          onClick={handleClick}
          className={`
          ${
            outline === true
              ? "border border-red-300 text-red-300 hover:bg-gray-100"
              : "bg-red-300 text-white hover:bg-red-400"
          }
          px-4 py-2 mx-2 font-light rounded transition block max-w-2xl overflow-hidden relative
          ${
            size === "large"
              ? "lg:px-24 px-10 py-4 text-xl"
              : size === "medium"
              ? "px-16"
              : ""
          }
          ${className !== undefined ? className : ""}
          `}
        >{text}
        </a>
      </Link>
    </>
  );
};

export { Hoge };
