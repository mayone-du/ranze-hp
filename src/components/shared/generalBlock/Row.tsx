const Row: React.FC<{ children: any; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`lg:flex w-11/12 mx-auto ${
          className !== undefined ? className : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export { Row };
