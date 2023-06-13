import Image from "next/image";

const Logo = () => (
  <div className="relative h-[15px] w-[80px]">
    <Image
      src="/logo.svg"
      alt="Climatic Logo"
      fill
      className="object-left object-contain"
    />
  </div>
);

export default Logo;
