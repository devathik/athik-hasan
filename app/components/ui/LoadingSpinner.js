const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-gray-700" />
      <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-500 border-t-transparent animate-spin" />
    </div>
  </div>
);

export default LoadingSpinner; 