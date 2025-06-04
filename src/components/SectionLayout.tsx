import type { JSX, ReactNode } from 'react';

interface Props {
  title: string | JSX.Element;
  subTitle?: string | JSX.Element;
  children: ReactNode;
}

export const SectionLayout = ({ title, subTitle, children }: Props) => {
  return (
    <section className="flex flex-col">
      <div className="section-title mb-8">
        <h2 className="xl:text-3xl text-xl text-[var(--text-primary)] font-bold mb-2 xl:text-left text-center">
          {title}
        </h2>
        {subTitle && (
          <p className="xl:text-lg text-sm text-[var(--text-secondary)] xl:text-left text-center">
            {subTitle}{' '}
          </p>
        )}
      </div>

      {children}
    </section>
  );
};
