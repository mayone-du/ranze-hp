const Block: React.FC<{
  children: any;
  addArticleClassName?: string;
  addSectionClassName?: string;
}> = ({ children, addArticleClassName, addSectionClassName }) => {
  return (
    <>
      <article
        className={`container mx-auto ${
          addArticleClassName !== undefined ? addArticleClassName : ""
        }`}
      >
        <section className={`md:py-16 py-10`}>{children}</section>
      </article>
    </>
  );
};

export { Block };
