const PageTitle: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <h1 className="text-6xl border-b-4 border-black">{props.title}</h1>
    </>
  );
};

export { PageTitle };