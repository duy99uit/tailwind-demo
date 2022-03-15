import dior from '@/assets/images/dior.jpg';
import dior111 from '@/assets/images/dior111.jpg';
import diorMen from '@/assets/images/dior-men.jpg';

/* This example requires Tailwind CSS v2.0+ */
function HomeSection() {
  return (
    <div className="relative bg-white  max-h-screen h-auto md:h-screen overflow-hidden">
      <div className="pt-4 pb-80 sm:pt-0 sm:pb-40 lg:pt-0 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static md:flex md:flex-row">
          <div className="md:w-3/5  ">
            <div className="py-0 flex justify-center items-center flex-column flex-wrap">
              <div className="w-full overflow-hidden lg:opacity-100">
                <img
                  src={dior}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="w-full py-4  flex flex-wrap flex-row items-center justify-between pr-16">
                <div>
                  <p className="mt-4 text-4xl text-gray-500 font-bold ">
                    Dior x Air Jordan
                  </p>
                  <p className="mt-2 text-xl text-gray-700 font-normal ">
                    All the details about the new release
                  </p>
                </div>

                <button
                  type="submit"
                  className=" bg-gray-600 border border-transparent rounded-md py-3 px-12 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 h-auto">
            <div className=" bg-gray-100 ">
              <div className="w-full h-screen md:h-auto rounded-b-lg overflow-hidden lg:opacity-100 ">
                <img
                  src={dior111}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <p className="mt-4 text-3xl text-gray-500">Dior x Air Jordan</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
