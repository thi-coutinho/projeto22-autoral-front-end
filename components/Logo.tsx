// import { clsx } from 'clsx';

type props = {
  size: "small" | "big";
};

export default function Logo({ size }: props) {
  const variants = {
    small: "text-2xl mr-8",
    big: "text-8xl",
  };
  return (
    <h1
      className={`font-extrabold tracking-wider text-transparent ${variants[size]} bg-clip-text bg-gradient-to-r from-accent to-primary`}
    >
      brAIn pal
    </h1>
  );
}
