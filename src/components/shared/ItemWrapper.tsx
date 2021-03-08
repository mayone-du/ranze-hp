const ItemWrapper: React.FC<{ children: any, className?: string }> = ({ children, className }) => {
  return (
    <>
    {/* row */}
      <div className="flex w-11/12 mx-auto">

        {/* col */}
        <div className="lg:mx-4 my-4 lg:w-screen"></div>
      </div>
    </>
  );
};

export { ItemWrapper };