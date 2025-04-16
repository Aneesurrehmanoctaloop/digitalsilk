import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const locationData = [
  {
    id: 1,
    number: '01',
    name: 'Miami',
    description: 'Founded in Miami, Digital Silk helps Floridian businesses grow their brands online. Our services stem from a Miami-Dade County hub, while our global team serves brands from across the U.S. and internationally.									',
    clients: 'Worked with 100+ clients in the region.',
    address: '123 Ocean Drive, Miami, FL',
    phone: '(305) 123-4567',
    bgImage: 'url(https://www.digitalsilk.com/wp-content/uploads/2023/12/california.jpg.webp)',
  },
  {
    id: 2,
    number: '02',
    name: 'New York',
    description: 'NYC hub of innovation and brand strategy.',
    clients: 'Delivering top-tier services in Manhattan.',
    address: '789 Broadway, New York, NY',
    phone: '(212) 987-6543',
    bgImage: 'url(https://www.digitalsilk.com/wp-content/uploads/2023/12/new-york.jpg.webp)',
  },
  {
    id: 3,
    number: '03',
    name: 'Los Angeles',
    description: 'Creative studio based in LA.',
    clients: 'Over 150+ satisfied clients.',
    address: '456 Sunset Blvd, Los Angeles, CA',
    phone: '(213) 555-7890',
    bgImage: 'url(https://www.digitalsilk.com/wp-content/uploads/2023/12/chicago.jpg.webp)',
  },
  {
    id: 4,
    number: '04',
    name: 'Los Angeles',
    description: 'Creative studio based in LA.',
    clients: 'Over 150+ satisfied clients.',
    address: '456 Sunset Blvd, Los Angeles, CA',
    phone: '(213) 555-7890',
    bgImage: 'url(https://www.digitalsilk.com/wp-content/uploads/2023/12/miami-1.jpg.webp)',
  },
];

const Locations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='bg-gradient-to-r from-[#9536E5] to-[#3B7BCE] text-white px-6 py-16'>
      <div className="text-center max-w-2xl mx-auto">
        <h3 className='text-4xl font-bold'>Locations</h3>
        <p className="mt-4 text-lg">
          With multiple locations throughout the United States, Digital Silk delivers
          localized strategies that complement your brand’s national presence.
        </p>
      </div>

      <div className="mt-12 flex gap-4 overflow-hidden">
        {locationData.map((location, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={location.id}
              onClick={() => setActiveIndex(index)}
              className={`transition-all h-[500px] duration-700 ease-in-out relative cursor-pointer text-white p-4 bg-cover bg-center bg-[#00000] flex flex-col justify-between ${
                isActive ? 'flex-1' : 'w-36 flex-shrink-0'
              }`}
              style={{ backgroundImage: location.bgImage }}
            >
              {isActive ? (
                <div className="space-y-4  mt-auto mb-10 px-10">
                  <div>
                  <p className="text-4xl font-bold text-[#18CCFC]">{location.number}</p>
                  <p className="text-xl font-bold mt-2 ">{location.name}</p>
                  </div>
                  <p className="text-lg">{location.description}</p>
                  <div>
                    <h4 className="font-semibold uppercase">Clients</h4>
                    <p className="text-lg">{location.clients}</p>
                  </div>
                  <div className="bg-white text-[#5F6568] p-3  flex gap-4 text-sm items-center justify-around h-20">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#5F6568]" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="" />
                      <span>{location.phone}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute bottom-8 left-4">
                  <p className="text-4xl font-bold text-[#18CCFC]">{location.number}</p>
                  <p className="text-xl font-bold mt-2 ">{location.name}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;
