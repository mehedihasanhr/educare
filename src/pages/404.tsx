const NotFound = () => {
  return (
    <div className="home-bg">
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="text-[72px] font-bold text-[#0C6C7A]">404</div>
        <div className="px-3">
          <h2 className="text-red-500">Oops!</h2>
          <span className="font-medium text-teal-700">Page Not Found</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
