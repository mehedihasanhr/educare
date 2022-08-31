import { motion } from "framer-motion";

const Angular = () => {
  return (
    <motion.div
      className="w-16 h-16 z-20 bg-white absolute left-14 top-0 p-3 flex items-center justify-center rounded-lg shadow-lg shadow-[rgba(50,131,131,0.17)]"
      animate={{ x: [0, -5, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <div>
        <svg
          width="53"
          height="56"
          viewBox="0 0 53 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          <path
            d="M26.4155 0.517578L0 9.60291L4.17438 43.4288L26.4432 55.3912L48.8269 43.2666L53 9.44203L26.4155 0.517578Z"
            fill="#BDBDBD"
          />
          <path
            d="M50.2465 11.1518L26.5 3.18018V52.5166L46.4785 41.694L50.2465 11.1518Z"
            fill="#B71C1C"
          />
          <path
            d="M26.4255 3.15521L2.75221 11.2977L6.52152 41.8511L26.4382 52.549L26.5 52.5165V3.18016L26.4255 3.15521Z"
            fill="#DD2C00"
          />
          <path
            d="M26.5 5.5011V17.3588L37.3246 40.4257H42.8884L26.5 5.5011Z"
            fill="#BDBDBD"
          />
          <path
            d="M10.1117 40.4257H15.6754L26.5 17.3588V5.5011L10.1117 40.4257Z"
            fill="#EEEEEE"
          />
          <path
            d="M26.5 27.9544H34.0714V32.9429H26.5V27.9544Z"
            fill="#BDBDBD"
          />
          <path
            d="M18.9286 27.9544H26.5V32.9429H18.9286V27.9544Z"
            fill="#EEEEEE"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default Angular;
