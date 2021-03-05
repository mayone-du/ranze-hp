const ItemRow: React.FC = ({ children }) => {
  return (
    <>
      <article className="container mx-auto">
        <section className="py-16">
          <div className="flex w-11/12 mx-auto">
            {children}
          </div>
        </section>
      </article>
    </>
  );
};

export { ItemRow };
