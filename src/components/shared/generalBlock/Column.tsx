const Column: React.FC<{ children: any; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`lg:mx-4 my-4 w-full ${
          className !== undefined ? className : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export { Column };
