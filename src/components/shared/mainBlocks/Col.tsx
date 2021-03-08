const Col: React.FC<{ children: any; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`lg:mx-4 my-4 lg:w-screen ${
          className !== undefined ? className : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export { Col };
