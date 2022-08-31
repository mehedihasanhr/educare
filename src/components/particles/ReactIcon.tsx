import { motion } from "framer-motion";

const ReactIcon = () => {
  return (
    <div className="w-16 h-16 z-20 bg-white absolute right-24 top-0 p-3 flex items-center justify-center rounded-lg shadow-lg shadow-[rgba(50,131,131,0.17)]">
      <div>
        <motion.svg
          width="61"
          height="55"
          viewBox="0 0 61 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          layout
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ originX: "center", originY: "center" }}
        >
          <path
            d="M30.1831 40.5702C13.2543 40.5702 0 34.7847 0 27.4215C0 20.0582 13.2543 14.2728 30.1831 14.2728C47.1118 14.2728 60.3661 20.0582 60.3661 27.4215C60.3661 34.7847 47.1118 40.5702 30.1831 40.5702ZM30.1831 16.9025C13.648 16.9025 2.62461 22.2935 2.62461 27.4215C2.62461 32.5495 13.648 37.9404 30.1831 37.9404C46.7181 37.9404 57.7415 32.5495 57.7415 27.4215C57.7415 22.2935 46.7181 16.9025 30.1831 16.9025Z"
            fill="#60BAC6"
          />
          <path
            d="M18.5035 54.5078C17.1912 54.5078 16.1414 54.2449 15.0915 53.5874C8.6612 49.9058 10.3672 35.5737 18.766 20.8472C22.7029 14.0098 27.5584 8.2244 32.2827 4.54277C37.4007 0.598157 41.9938 -0.585226 45.1433 1.25559C48.4241 3.09641 49.6052 7.69846 48.8178 14.1413C48.0304 20.1897 45.4058 27.29 41.4689 34.1273C37.532 40.9647 32.6764 46.7501 27.9521 50.4317C24.5401 53.0615 21.2594 54.5078 18.5035 54.5078ZM41.8626 2.96492C39.7629 2.96492 37.007 4.14831 33.9887 6.51507C29.5269 10.0652 24.9338 15.5877 21.1281 22.162C12.8606 36.4941 12.0732 48.8539 16.4038 51.3521C18.6347 52.667 22.3092 51.4836 26.3774 48.3279C30.8392 44.7778 35.4323 39.2553 39.238 32.681C43.0437 26.1066 45.537 19.4008 46.3244 13.7469C46.9806 8.48738 46.1932 4.80574 43.9623 3.49087C43.3061 3.2279 42.65 2.96492 41.8626 2.96492Z"
            fill="#60BAC6"
          />
          <path
            d="M41.9938 54.5078C35.4322 54.5078 25.9836 46.4871 18.8972 33.9958C10.3672 19.2693 8.66118 4.9372 15.0915 1.25556C21.5218 -2.42608 33.0701 6.12058 41.6001 20.8471C45.537 27.6845 48.1616 34.7848 48.949 40.8332C49.8676 47.276 48.5553 51.7466 45.2745 53.7189C44.2247 54.2448 43.1749 54.5078 41.9938 54.5078ZM16.4038 3.49084C12.0732 5.98909 12.8606 18.3489 21.1281 32.681C29.3956 47.0131 39.6316 53.8504 43.9622 51.3521C46.1932 50.0373 46.9805 46.3556 46.3244 41.0961C45.537 35.4422 43.0436 28.7364 39.2379 22.162C30.9704 7.82991 20.7344 0.992587 16.4038 3.49084Z"
            fill="#60BAC6"
          />
          <path
            d="M30.1831 32.681C33.0822 32.681 35.4323 30.3262 35.4323 27.4215C35.4323 24.5167 33.0822 22.162 30.1831 22.162C27.284 22.162 24.9339 24.5167 24.9339 27.4215C24.9339 30.3262 27.284 32.681 30.1831 32.681Z"
            fill="#60BAC6"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default ReactIcon;
