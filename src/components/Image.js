function Image({
  className,
  hasLink,
  height = '300',
  isRounded,
  keepAspectRatio,
  onClick,
  title,
  url,
}) {
  return (
    <img
      alt={title}
      title={title}
      src={url}
      className={`rounded shadow-md img-fluid w-100 ${hasLink ? 'has-link' : ''} ${
        className ? className : ''
      } ${isRounded ? 'rounded-circle px-4' : ''}`}
      onClick={onClick}
      style={{
        objectFit: keepAspectRatio ? 'cover' : undefined,
        height: `${height}px`,
      }}
    />
  );
}

export default Image;
