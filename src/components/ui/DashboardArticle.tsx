import type { PropsWithChildren } from 'react';

type DashboardArticleProps = PropsWithChildren<
  React.HTMLAttributes<HTMLElement>
>;

export const DashboardArticle = ({
  children,
  className,
  ...props
}: DashboardArticleProps) => {
  return (
    <article
      {...props}
      className={`rounded-xl border border-primary bg-tertiary px-4 py-6 ${className}`}
    >
      {children}
    </article>
  );
};
