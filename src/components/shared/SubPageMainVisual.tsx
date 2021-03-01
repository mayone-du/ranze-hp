const SubPageMainVisual: React.VFC<{ title: string }> = ({ title }) => {
  return (
    <>
      <article>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-6xl border-b-4 border-black">{title}</h1>
        </section>
      </article>
    </>
  );
};

export { SubPageMainVisual };
