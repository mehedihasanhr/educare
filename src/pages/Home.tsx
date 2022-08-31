import "../styles/home.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import book from "../assets/book.svg";
import homePlusBook from "../assets/home-plus-book.svg";
import { Link } from "react-router-dom";
import casual1 from "../assets/casual-1.png";
import casual2 from "../assets/casual-2.png";
import casual3 from "../assets/casual-3.png";
import CircleDot from "../components/particles/circleDot";
import StarIcon from "../components/particles/start";
import EightDot from "../components/particles/EightDot";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";
import Card from "../components/Card";
import { products } from "../dummyData";
import Comment from "../components/Comments/Comment";

const Index = () => {
  return (
    <div className="home-bg">
      <Layout>
        <HeroSection />

        {/* about section */}
        <section className="relative">
          <div className="container mx-auto py-20">
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="">
                  <div className="w-full max-w-lg">
                    <span className="text-base font-semibold text-[#328383]">
                      About Us
                    </span>
                    <h1 className="block mt-3 text-[#516060]">
                      Creating A Community Of Life Long Learners
                    </h1>
                  </div>

                  <div className="text-sm my-8 border-l-4 border-[#32838388] pl-4 w-full max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde molestias vel dolores non corrupti ratione omnis,
                    aliquid quia necessitatibus magni, debitis qui placeat?
                    Obcaecati fugit, eum provident sed molestiae placeat?
                  </div>

                  <div>
                    <div>
                      <div className="flex items-start py-4">
                        <img src={book} alt="bookIcon" />
                        <div className="px-3">
                          <h4 className="text-[#545F5F]">Flexible Classes</h4>
                          <p className="text-sm text-[#545F5F] max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec nunc null liobortis nibh porttitor.
                            Facilisi arcu, nibh vel risus, morbi pharetra.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start py-4">
                        <img src={homePlusBook} alt="bookIcon" />
                        <div className="px-3">
                          <h4 className="text-[#545F5F]">Learn From Home</h4>
                          <p className="text-sm text-[#545F5F] max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec nunc null liobortis nibh porttitor.
                            Facilisi arcu, nibh vel risus, morbi pharetra.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/register-now"
                    className="btn block w-fit h-btn py-3 px-6 rounded-lg my-10"
                  >
                    Learn more about us →
                  </Link>
                </div>
              </div>
              <div className="col-span-6">
                <div className="z-10">
                  <div className="grid grid-cols-12 grid-rows-2 gap-5">
                    <div className="col-span-6 row-span-1 border flex items-center justify-center bg-[rgba(50,131,131,0.15)]">
                      <img src={casual1} alt="" />
                    </div>

                    <div className="col-span-6 row-span-2 my-5 border flex items-center justify-center py-5 bg-[rgba(255,112,67,0.09)]">
                      <img src={casual3} alt="" />
                    </div>

                    <div className="col-span-6 row-span-1 flex justify-center">
                      <div className="flex items-center border justify-center px-10 bg-[rgba(0,0,0,0.20)]">
                        <img src={casual2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* hero section  particle */}
          <CircleDot className="about-circle-dot" data-index="0" />
          <CircleDot className="about-circle-dot" data-index="1" />
          <CircleDot className="about-circle-dot" data-index="2" />

          <StarIcon className="about-star-icon" data-index="0" />
          <StarIcon className="about-star-icon" data-index="1" />
          <StarIcon className="about-star-icon" data-index="2" />

          <EightDot className="about-eight-dot" data-index="0" />
          <EightDot className="about-eight-dot" data-index="1" />
        </section>

        {/* POPULAR COURSES */}
        <section className="py-10 relative">
          <div className="container mx-auto z-10">
            <div className="text-center mb-16">
              <h5 className="text-[#328383]">POPULAR COURSES</h5>
              <h1 className="text-[#516060]">Our Trending Courses</h1>
            </div>

            <div className="grid grid-cols-12 gap-5">
              {products?.map((product) => (
                <div
                  key={product.id}
                  className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
                >
                  <Card product={product} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center my-5">
              <Link
                to="/register-now"
                className="btn block w-fit h-btn py-3 px-6 rounded-lg my-10"
              >
                Learn more about us →
              </Link>
            </div>
          </div>

          {/* testimonial section  particle */}
          <CircleDot className="about-circle-dot -z-10" data-index="0" />
          <CircleDot className="about-circle-dot -z-10" data-index="1" />
          <CircleDot className="about-circle-dot -z-10" data-index="2" />

          <StarIcon
            className="about-star-icon testimonial-star-icon -z-10"
            data-index="0"
          />
          <StarIcon className="about-star-icon -z-10" data-index="1" />
          <StarIcon className="about-star-icon -z-10" data-index="2" />

          <EightDot className="about-eight-dot -z-10" data-index="0" />
          <EightDot className="about-eight-dot -z-10" data-index="1" />
        </section>

        {/* testimonial section */}
        <section className="relative">
          <div className="testimonial-section py-28">
            <div className="container mx-auto">
              <div className="grid grid-cols-12">
                {/* left section */}
                <div className="col-span-6">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                      <Comment
                        profileImage={profile1}
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa
        quisquam delectus quidem cupiditate porro, cumque voluptate autem
        temporibus minus molestias numquam sit saepe doloribus quam praesentium
        corrupti pariatur quas!"
                      />
                    </div>

                    <div className="col-span-1">
                      <Comment
                        profileImage={profile2}
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa
        quisquam delectus quidem cupiditate porro,  quas!"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1">
                      <Comment
                        profileImage={profile3}
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa
        quisquam delectus quidem cupiditate porro,  quas!"
                      />
                    </div>
                    <div className="col-span-2 pt-3">
                      <Comment
                        profileImage={profile2}
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa
        quisquam delectus quidem cupiditate porro, cumque voluptate autem
        temporibus minus molestias numquam sit saepe doloribus quam praesentium
        corrupti pariatur quas!"
                      />
                    </div>
                  </div>
                </div>

                {/* right section */}
                <div className="col-span-6 h-full">
                  <div className="flex flex-col justify-center h-full">
                    <div className="px-10">
                      <h1 className="text-4xl mb-3">
                        Some Valuable feedback from our students
                      </h1>
                      <p>
                        Supposing so be resolving breakfast am or perfectly. It
                        drew a hill from me. Valley by oh twenty direct me so.
                        Departure defective arranging rapturous did believe him
                        all had supported. Family months lasted simple set
                        nature vulgar him. Picture for attempt joy excited ten
                        carried manners talking how.
                      </p>

                      <Link
                        to="/#"
                        className="btn block w-fit h-btn py-3 px-6 rounded-lg my-10"
                      >
                        View Reviews →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* testimonial section  particle */}
          <CircleDot className="about-circle-dot -z-10" data-index="0" />
          <CircleDot className="about-circle-dot -z-10" data-index="1" />
          <CircleDot className="about-circle-dot -z-10" data-index="2" />

          <StarIcon
            className="about-star-icon testimonial-star-icon -z-10"
            data-index="0"
          />
          <StarIcon className="about-star-icon -z-10" data-index="1" />
          <StarIcon className="about-star-icon -z-10" data-index="2" />

          <EightDot className="about-eight-dot -z-10" data-index="0" />
          <EightDot className="about-eight-dot -z-10" data-index="1" />
        </section>
      </Layout>
    </div>
  );
};

export default Index;
