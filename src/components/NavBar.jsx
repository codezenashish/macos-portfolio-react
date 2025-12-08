import { navLinks, navIcons } from "../constants";
import dayjs from "dayjs";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center fixed top-0 w-full   p-2 px-5 bg-white/30 backdrop-blur-xl border border-white/20  ">
      <div className=" flex gap-4 ">
        <img className="size-6" src="/images/logo.svg" alt="" />
        <p className="font-bold text-lg text-white">Ashish'c portfolio</p>
        <ul className="flex gap-2 capitalize justify-center items-center ">
          {navLinks.map(({ id, name }) => (
            <li className=" cursor-pointer" key={id}>
              {" "}
              <p className="hover:underline text-base">{name}</p>{" "}
            </li>
          ))}
        </ul>

        <div className=""></div>
      </div>

      <div className="flex justify-center items-center gap-2 ">
        <ul className="flex gap-3 text-white ">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time className="text-white">
          {dayjs().format("ddd MMM D h:mm A")}{" "}
        </time>
      </div>
    </nav>
  );
};

export default NavBar;
