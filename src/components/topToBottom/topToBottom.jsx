import { Link } from "react-scroll";

export const TopToBottom = () => {
  return (
    <div>
      <div className="absolute top-36 right-0 w-full h-auto text-center">
        <h1 className="text-5xl uppercase tracking-widest leading-18 text-white">We are creatives</h1>
            <div className="w-full h-auto grid place-items-center mt-20">
            <Link to="footer" className="cursor-pointer" smooth={true} duration={1600}>
                <img src="./icon-arrow-down.svg" alt="/" className="animate-bounce w-14"/>
            </Link>
            </div>
      </div>
    </div>
  );
};
