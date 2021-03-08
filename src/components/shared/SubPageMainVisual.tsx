const SubPageMainVisual: React.VFC<{ title: string, subText: string }> = ({ title, subText }) => {
  return (
    <>
      <article className="bg-gray-200">
        <section className="py-40 flex flex-col items-center justify-center">
          <h1 className="text-6xl border-b-4 border-black">{title}</h1>
          <p className="py-4">{subText}</p>
        </section>
      </article>
    </>
  );
};

export { SubPageMainVisual };
