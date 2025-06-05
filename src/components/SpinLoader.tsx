interface Props {
  size: string;
}

export const SpinLoader = ({ size }: Props) => {
  return (
    <div
      className="w-[20px] aspect-square rounded-full animate-loader"
      style={{ border: '2px solid var(--color-muted)', width: size, height: size }}
    />
  );
};
