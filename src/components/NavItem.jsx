const NavItem = ({ name, href, navActive, setNavActive }) => {
  return (
    <li
      onClick={() => setNavActive(navActive)}
      className={`w-fit group/${name}`}
    >
      <a href={href} className="flex items-center gap-2">
        <span
          className={`block ${
            navActive === name ? 'w-20 bg-light' : 'w-10 bg-secondary'
          } group-hover/${name}:w-20 group-hover/${name}:bg-light h-[0.2px] transition-all ease-in-out duration-150`}
        ></span>
        <span
          className={`${
            navActive === name ? 'text-light' : 'text-secondary'
          } group-hover/${name}:text-light text-sm font-semibold cursor-pointer`}
        >
          {' '}
          {name.toUpperCase()}
        </span>
      </a>
    </li>
  );
};

export default NavItem;
