import React from 'react';

function LogoSection() {
  return (
    <div className="h-auto">
      <div className="container relative py-12">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          All Miczone Services
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-x-14 mt-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <a className="block relative" href="#1" target="blank">
              <div className="pb-[30%]"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  className="w-full h-full object-contain"
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
