function PageTitle({ children, includeLineBreak = true }) {
  return (
    <>
      <h1 className='h3'>{children}</h1>
      {includeLineBreak && <hr className='border-secondary pb-2' />}
    </>
  );
}

export default PageTitle;
