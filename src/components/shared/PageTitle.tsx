const PageTitle: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <h2 className="text-6xl border-b-4 border-black">{props.title}</h2>
    </>
  );
};

export { PageTitle };