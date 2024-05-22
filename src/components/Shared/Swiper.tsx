// // import Swiper core and required modules
// import { Navigation } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import Testimonial from "../Testimonials/Testimonial";

// export default function TestimonalSwiper({ testimonials, setActiveSlide }) {
//   return (
//     <Swiper
//       modules={[Navigation]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation={{
//         nextEl: "#testimonial-button-next",
//         prevEl: "#testimonial-button-previous",
//       }}
//       onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
//     >
//       {testimonials.map((testimonial, index) => (
//         <SwiperSlide
//           className="rounded-[30px] border-2 border-zinc-600 p-[50px] mobile:p-10"
//           key={index}
//         >
//           <Testimonial testimonial={testimonial} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
