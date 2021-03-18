const Block: React.FC<{
  children: any;
  sectionTitle?: string;
  sectionSubText?: string;
  addArticleClassName?: string;
  addSectionClassName?: string;
}> = ({
  children,
  sectionTitle,
  sectionSubText,
  addArticleClassName,
  addSectionClassName,
}) => {
  return (
    <>
      <article
        className={`container mx-auto ${
          addArticleClassName !== undefined ? addArticleClassName : ""
        }`}
      >
        <section
          className={`md:py-16 py-10 ${
            addSectionClassName !== undefined ? addArticleClassName : ""
          }`}
        >
          {sectionSubText !== undefined ? (
            <p className="text-center text-custom-darkgray">{sectionSubText}</p>
          ) : (
            <></>
          )}
          {sectionTitle !== undefined ? (
            <h2 className="lg:text-4xl text-2xl tracking-wide font-bold text-center lg:py-2 py-1 text-custom-darkgray font-custom-fontFamily ">
              {sectionTitle}
            </h2>
          ) : (
            <></>
          )}
          {children}
        </section>
      </article>
    </>
  );
};

export { Block };
