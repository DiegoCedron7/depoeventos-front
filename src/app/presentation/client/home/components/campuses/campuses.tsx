import "./campuses.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Campuses({ slide }: any) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {slide.map((item: any, index: any) => (
        <SwiperSlide key={index}>
          <div className="Wrapper" id={item.id}>
            <div className="container">
              <div className="lightBg">
                <div className="container">
                  <div className="Advertising flexSpaceCenter">
                    <div className="AddLeft">
                      <h4 className="font15 semiBold">{item.direction}</h4>
                      <h2 className="font40 extraBold">{item.title}</h2>
                      <p style={{ paddingBottom: "60px" }} className="font12">
                        {item.description}
                      </p>
                    </div>
                    <div className="AddRight">
                      <div className="AddRightInner">
                        <div className="flexNullCenter">
                          <div className="AddImgWrapp1 flexCenter">
                            <img src={item.img1} alt="office" />
                          </div>
                          <div className="AddImgWrapp2">
                            <img src={item.img2} alt="office" />
                          </div>
                        </div>
                        <div className="flexNullCenter">
                          <div className="AddImgWrapp3">
                            <img
                              src={item.img3}
                              alt="office"
                              style={{ height: "125", width: "112" }}
                            />
                          </div>
                          <div className="AddImgWrapp4">
                            <img src={item.img4} alt="office" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
