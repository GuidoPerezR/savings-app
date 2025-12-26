interface ProfileProps {
  alt: string;
  url: string;
}

export function Profile({ alt, url }: ProfileProps) {
  return (
    <div
      className="size-10 overflow-hidden rounded-full border-2 border-secondary bg-cover bg-center"
      data-alt={alt}
      style={{
        backgroundImage: `url('${url}')`,
      }}
    ></div>
  );
}
