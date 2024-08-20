import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        alt="lodder"
        width={32}
        height={32}
        className="animate-spin"
      />
      Lodding...
    </div>
  );
};

export default Loader;
