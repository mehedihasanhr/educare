import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Item = ({ item }: any) => {
  return (
    <>
      <li className="py-1.5">
        <Link
          to={item.url}
          className="text-gray-500 font-medium hover:text-gray-700 block"
        >
          {item.icon ? <FontAwesomeIcon icon={item.icon} /> : "- "} {item.text}
          {item.title}
        </Link>
      </li>
    </>
  );
};

export default Item;
