const Row: React.FC<{ children: any; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`flex w-11/12 mx-auto ${
          className !== undefined ? className : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export { Row };
