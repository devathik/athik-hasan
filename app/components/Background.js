const Button = ({ children, loading, disabled, className = '' }) => (
  <button
    type="submit"
    disabled={loading || disabled}
    className={`w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-indigo-400 via-purple-400 to-red-400 
      text-white text-sm md:text-base font-medium relative overflow-hidden group disabled:opacity-70 ${className}`}
  >
    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    <span className="relative">{children}</span>
  </button>
);

export default Button;