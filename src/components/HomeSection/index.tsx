import dior from '@/assets/images/dior.jpg';
import dior111 from '@/assets/images/dior111.jpg';
import diorMen from '@/assets/images/dior-men.jpg';

function HomeSection() {
  return (
    <div className="relative bg-white  max-h-screen h-auto lg:h-screen overflow-hidden">
      <div className="pt-4 pb-80 sm:pt-0 sm:pb-40 lg:pt-0 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static md:flex md:flex-row">
          <div className="md:w-3/5 h-auto ">
            <div className="py-0 flex justify-center items-center flex-column flex-wrap">
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
              <div className="w-full pr-2 overflow-hidden lg:opacity-100">
                <img
                  src={dior}
                  alt=""
                  className="w-full h-full rounded-lg object-center object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-2/5 h-screen">
            <div className="h-2/3">
              <div className="w-full  md:h-full mt-8 overflow-hidden lg:opacity-100 ">
                <img
                  src={dior111}
                  alt=""
                  className="w-full h-full  rounded-lg object-center object-cover"
                />
              </div>
              <div className="w-full flex flex-wrap flex-row items-center justify-between mt-2">
                <div className="ml-2 flex-1 pr-2">
                  <p className="mt-2 text-md text-gray-700 font-normal  ">
                  Dior branded tongue and Wings logo, and a silver “Air Dior” hang tag completes the design. 
                  </p>
                </div>

                <button
                  type="submit"
                  className=" bg-transparent border border-gray-600 rounded-md py-3 px-12 flex items-center justify-center text-base font-medium text-gray-600 hover:bg-gray-200  focus:outline-none hover:text-gray-700"
                >
                  Pre order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
