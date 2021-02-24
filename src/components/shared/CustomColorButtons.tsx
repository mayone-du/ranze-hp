import Link from "next/link";

const CustomButton: React.FC<{ toLink: string; text: string, outline: boolean, color: string }> = ({
  toLink,
  text,
  outline,
  color,
}) => {
  return (
    <>
      <Link href={toLink}>
        <a className={`
          ${outline === true ? "border" : "bg-red-600" }
          `
        }>{text}</a>
      </Link>
    </>
  );
};

export { CustomButton };
