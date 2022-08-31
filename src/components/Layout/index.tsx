import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

type TProps = {
  children: React.ReactElement | React.ReactElement[];
};

const Layout = ({ children }: TProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
