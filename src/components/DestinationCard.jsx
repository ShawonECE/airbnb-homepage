import PropTypes from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TotalContext } from '../App';

const DestinationCard = ({ destination }) => {
    const { img_1, img_2, img_3, img_4, img_5, title, hosted_by, price_per_night, total_price } = destination;
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperRef = useRef(null);
    const [total,] = useContext(TotalContext);

    useEffect(() => {
        if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
            const swiper = swiperRef.current.swiper; // Access the Swiper instance
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [prevButtonRef, nextButtonRef]);
    return (
        <div>
            <div className="relative">
                <Swiper className='rounded-lg'
                    ref={swiperRef}
                    modules={[Navigation, Pagination, EffectFade]}
                    slidesPerView={1}
                    navigation={{ prevEl: prevButtonRef.current, nextEl: nextButtonRef.current, }}
                    autoHeight={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                // onSwiper={(swiper) => {
                //     swiper.params.navigation.prevEl = prevButtonRef.current;
                //     swiper.params.navigation.nextEl = nextButtonRef.current;
                //     swiper.navigation.init();
                //     swiper.navigation.update();
                // }}
                >
                    <SwiperSlide><img className='w-full' src={img_1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img_2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img_3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img_4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img_5} alt="" /></SwiperSlide>
                </Swiper>
                <button ref={prevButtonRef} className="btn btn-circle btn-sm absolute left-5 top-1/2 transform -translate-y-1/2 z-10">❮</button>
                <button ref={nextButtonRef} className="btn btn-circle btn-sm absolute right-5 top-1/2 transform -translate-y-1/2 z-10">❯</button>
            </div>
            <h4 className='font-medium mt-2'>{title}</h4>
            <h5 className='-mt-1'>Hosted by {hosted_by}</h5>
            <h5 className='-mt-1'><span className='font-medium'>${!total ? price_per_night : total_price}</span> {!total ? 'per night' : 'total before taxes'}</h5>
        </div>
    );
};

DestinationCard.propTypes = {
    destination: PropTypes.object.isRequired,
};

export default DestinationCard;