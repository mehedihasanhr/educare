import { Link } from "react-router-dom";

const Card = ({ product }: any) => {
  const discountPrice = (product.price * product.discount) / 100;

  return (
    <div className="shadow-lg shadow-black/5 z-10">
      <div>
        <div className="">
          <img src={product.image} alt="" className="rounded-t-lg" />
        </div>
        <div className="px-5 py-3 bg-white rounded-b-lg">
          <div className="py-3">
            <span className="block px-2 w-fit text-xs font-semibold rounded-xl text-[#237979] bg-[rgba(50,131,131,0.15)]">
              {product.level}
            </span>
          </div>

          <div className="flex items-center justify-between ">
            <div className="">
              <img
                src={require(`../../assets${product.lecturerImage}`)}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
            <h5 className="mr-auto px-2 text-[#687070] font-medium">
              {product.lecturer}
            </h5>

            <div className="text-sm">
              <span className="text-orange-300">
                {product.rating}
                <i className="bi bi-star-fill" />
              </span>
              <span className="text-[#BDBDBD]">(20K)</span>
            </div>
          </div>
          <Link
            to={`${product.title}`}
            className="block text-xl font-medium my-3 text-gray-600 hover:underline"
          >
            Digital Marketing Masterclass (2022 Edition)
          </Link>

          <div className="flex items-center justify-between text-sm text-[#7E8989] pb-5 border-b">
            <span>
              <i className="bi bi-people text-xl text-teal-600" /> &nbsp;
              <span className="whitespace-nowrap">
                {product.students} Students
              </span>
            </span>

            <span>
              <i className="bi bi-person-video3 text-xl text-orange-400" />{" "}
              &nbsp;
              <span className="whitespace-nowrap">
                {product.lectures} Lectures
              </span>
            </span>

            <span>
              <i className="bi bi-clock text-xl text-red-500" /> &nbsp;
              <span className="whitespace-nowrap">{product.durations}</span>
            </span>
          </div>

          <div className="py-3 flex items-center justify-between">
            <h3 className="text-[#328383]">
              ${discountPrice.toFixed(2)} USD
              <del className="ml-3 text-red-400 font-medium">
                <sub>${product.price.toFixed(2)} USD</sub>
              </del>
            </h3>

            <button
              aria-label="cartIcon"
              className="text-[#86898d] hover:text-[#328383]"
            >
              <i className="bi bi-cart-plus-fill text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
