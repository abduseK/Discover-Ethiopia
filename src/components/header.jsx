function Header(props) {
  return (
    <header className="p-4 bg-black bg-opacity-0 flex items-center">
      <h1 className="text-black ml-5 mt-4 text-2xl font-bold font-poppins">
        {props.title}
      </h1>
    </header>
  );
}

export default Header;
