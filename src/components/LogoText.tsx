import RoundedItem from './RoundedItem';

interface Props {
  isHeader: boolean;
}

export const LogoText = ({ isHeader }: Props) => {
  return (
    <a href="/">
      <div className="flex items-end">
        <RoundedItem
          content={
            <div className="max-w-10 max-h-10">
              <img src="/logo.ico" alt="Crypto" />
            </div>
          }
        />

        {isHeader ? (
          <h1 className="text-[var(--text-primary)] text-xl font-bold tracking-tight ml-2">
            LegitCrypto
          </h1>
        ) : (
          <h2 className="text-[var(--text-primary)] text-xl font-bold tracking-tight ml-2">
            LegitCrypto
          </h2>
        )}
      </div>
    </a>
  );
};
