function Image({ className, hasLink, height = '300', keepAspectRatio, onClick, title, url }) {
  return (
    <img
      alt={title}
      title={title}
      src={url}
      className={`w-100 rounded ${hasLink ? 'has-link' : ''} ${className ? className : ''}`}
      onClick={onClick}
      style={{
        objectFit: keepAspectRatio ? 'cover' : undefined,
        height: `${height}px`,
      }}
    />
  );
}

export default Image;
