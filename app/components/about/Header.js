const Header = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        About
        <span className="bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text">
          {" "}
          Me
        </span>
      </h1>
      <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
        السلام عليكم ورحمة الله وبركاته
        <br />
        Thank you for exploring my portfolio. Let&apos;s create something
        amazing together.
      </p>
    </div>
  );
};

export default Header;
