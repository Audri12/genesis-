import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'; // Import the Navigation module
import 'swiper/css';
import 'swiper/css/navigation'; // Import the Navigation styles

const testimonials = [
  {
    id: 1,
    name: 'Seymour Buts',
    designation: 'CEO, Google Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0000_Layer-8.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 2,
    name: 'Seymour Buts',
    designation: 'CEO, Google Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0003_Layer-5.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 3,
    name: 'Robert Jhon',
    designation: 'CEO, Apple Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0007_Layer-1.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 4,
    name: 'Robert Jhon',
    designation: 'CEO, Apple Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0006_Layer-2.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 5,
    name: 'Selina Andrey',
    designation: 'CEO, Google Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0005_Layer-3.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
];

const T = () => {
  return (
    <div className="py-12">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="font-semibold text-lg font-rajdhani text-[#FF7907] underline pb-3.5 text-center">
            Our Testimonials
          </p>
        </div>
        <h2 className="text-5xl text-white text-center font-bold font-rajdhani leading-[58px] mb-10">
          What Clients and People Think About Us
        </h2>
      </div>
      
      {/* Swiper Component */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={true} // Enable navigation
        modules={[Navigation]} // Add the Navigation module
        className="grid grid-cols-1 md:grid-cols-2 p-3"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="flex justify-center">
            <div className="p-8 rounded-lg text-center">
              <p className="text-white text-lg mb-6 border shadow-3xl rounded-lg bg-[#1d3045] bg-opacity-45 border-[#1d3045] text-center p-10 border-t-[#ff7906]">
                {testimonial.testimonial}
              </p>
              <div className="flex">
                <div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-xl mb-2"
                  />
                </div>
                <div className="px-5">
                  <h5 className="font-bold text-white text-2xl">{testimonial.name}</h5>
                  <p className="text-[#ff7906]">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons (Optional) */}
      <div className="flex justify-between mt-4">
        <button className="swiper-button-prev text-white bg-[#ff7906] rounded-full p-2">Prev</button>
        <button className="swiper-button-next text-white bg-[#ff7906] rounded-full p-2">Next</button>
      </div>
    </div>
  );
};

export default T;
