import Rating from "../Rating";
import h3 from "../../assets/profile-3.png";
import { motion } from "framer-motion";

const HComment = () => {
  return (
    <>
      {/* hero section comment particle */}
      <motion.div
        animate={{ y: [0, -5, 5, 0] }}
        transition={{ duration: 4, yoyo: Infinity, ease: "easeInOut" }}
        className="absolute left-20 bottom-0 bg-white z-10 w-80 py-2 px-3 rounded-md shadow-lg shadow-[rgba(50,131,131,0.08)]"
      >
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-full">
            <img
              src={h3}
              alt=""
              className="w-full h-full rounded-full object-fill"
            />
          </div>

          <div className="mr-auto px-3">
            <h5 className="text-[#328383] font-semibold">Mrs Tithi</h5>
            <span className="block text-xs text-slate-500 font-medium -mt-0.5">
              Graphics Designer
            </span>
          </div>

          {/* rating icons */}
          <Rating
            rating={4.5}
            styleStar="w-3 h-3 mb-auto mt-0.5 fill-[#328383]"
          />
        </div>

        <p className="text-xs py-2 font-medium text-slate-500">
          Graphics Online learning and teaching market place with 5K+
        </p>
      </motion.div>
    </>
  );
};

export default HComment;
