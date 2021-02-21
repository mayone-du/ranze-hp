const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <main className="overflow-x-hidden">
        {children}
      </main>
    </>
  );
}

export { Wrapper };