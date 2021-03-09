const SubPageMainVisual: React.VFC<{ title: string; subText: string }> = ({
  title,
  subText,
}) => {
  return (
    <>
      <article className="bg-gray-200">
        <section className="md:py-40 pt-44 pb-24 flex flex-col items-center justify-center">
          <h1 className="md:text-6xl text-4xl border-b-4 border-black">{title}</h1>
          <p className="py-4">{subText}</p>
        </section>
      </article>
    </>
  );
};

export { SubPageMainVisual };
