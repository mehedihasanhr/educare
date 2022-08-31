import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo, exploreLinks, socialLink, usefulLinks } from "./links";
import Item from "./Item";

const Footer = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            <div>
              <div className="py-3">
                <img src={Logo} alt="logo" className="home-logo" />
              </div>
              <div className="my-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores expedita saepe similique, tempore nobis nesciunt
                  dignissimos qui, vel architecto consequuntur omnis sapiente!
                </p>

                <Link
                  to="/#"
                  className="text-gray-500 hover:underline hover:text-gray-700"
                >
                  Learn More →
                </Link>
              </div>

              <div className="flex items-center my-8">
                {socialLink.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="mr-3 w-10 h-10 flex items-center justify-center text-xl bg-gray-100 rounded-sm text-gray-500 hover:bg-[#328383] hover:text-white transition-all duration-500"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="py-5 px-3">
              <h3 className="mb-8">Explore</h3>
              <ul>
                {exploreLinks.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-2">
            <div className="py-5 px-3">
              <h3 className="mb-8">Useful Links</h3>
              <ul>
                {usefulLinks.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-4">
            <div className="py-5 px-3">
              <h3 className="mb-8">Contact Info</h3>
              <ul>
                {contactInfo.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
