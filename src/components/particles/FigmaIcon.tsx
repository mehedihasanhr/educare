import { motion } from "framer-motion";

const FigmaIcon = () => {
  return (
    <motion.div
      className="w-16 h-16 z-20 bg-white absolute right-16 bottom-10 p-3 flex items-center justify-center rounded-lg shadow-lg shadow-[rgba(50,131,131,0.17)]"
      animate={{ y: [0, -5, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <div>
        <svg
          width="39"
          height="58"
          viewBox="0 0 39 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          <path
            d="M20.625 19.4243H9.625C4.30925 19.4243 0 15.1066 0 9.78052C0 4.45439 4.30925 0.136719 9.625 0.136719H20.625V19.4243Z"
            fill="#E64A19"
          />
          <path
            d="M19.25 38.7119H9.625C4.30925 38.7119 0 34.3942 0 29.0681C0 23.742 4.30925 19.4243 9.625 19.4243H19.25V38.7119Z"
            fill="#7C4DFF"
          />
          <path
            d="M9.625 57.9995C4.30925 57.9995 0 53.6818 0 48.3557C0 43.0296 4.30925 38.7119 9.625 38.7119H19.25V48.3557C19.25 53.6818 14.9408 57.9995 9.625 57.9995Z"
            fill="#66BB6A"
          />
          <path
            d="M28.875 19.4243H19.25V0.136719H28.875C34.1908 0.136719 38.5 4.45439 38.5 9.78052C38.5 15.1066 34.1908 19.4243 28.875 19.4243Z"
            fill="#FF7043"
          />
          <path
            d="M28.875 38.7119C34.1907 38.7119 38.5 34.3942 38.5 29.0681C38.5 23.742 34.1907 19.4243 28.875 19.4243C23.5593 19.4243 19.25 23.742 19.25 29.0681C19.25 34.3942 23.5593 38.7119 28.875 38.7119Z"
            fill="#29B6F6"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default FigmaIcon;
