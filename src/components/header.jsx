function Header(props) {
  return (
    <header className="p-2 bg-black bg-opacity-0 flex">
      <h1 className="text-black mt-4 text-2xl font-bold font-poppins">
        {props.title}
      </h1>
    </header>
  );
}

export default Header;
