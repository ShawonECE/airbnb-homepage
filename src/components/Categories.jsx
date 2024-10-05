import { MdStarRate } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { GiCaveEntrance } from "react-icons/gi";
import { MdOutlineSurfing } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiVillage } from "react-icons/gi";
import { GiSpaceship } from "react-icons/gi";
import { GiRiver } from "react-icons/gi";
import { FaBed } from "react-icons/fa6";
import { PiMountains } from "react-icons/pi";
import { FaRegSnowflake } from "react-icons/fa";
import { GiIsland } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiGrandPiano } from "react-icons/gi";
import { GiSailboat } from "react-icons/gi";
import { GiWaterPolo } from "react-icons/gi";
import { LuSparkles } from "react-icons/lu";
import { SiHomeadvisor } from "react-icons/si";
import { MdOutlineHouseboat } from "react-icons/md";
import { MdOutlineCabin } from "react-icons/md";
import { PiParkDuotone } from "react-icons/pi";
import CategoryIcon from "./CategoryIcon";
import { IoOptionsOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useContext, useEffect, useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { EssentialsContext, MaxPriceContext, MinPriceContext, TotalContext, TypeContext } from "../App";
import { Slider } from "@mui/material";

const Categories = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const [total, setTotal] = useContext(TotalContext);
    const [type, setType] = useContext(TypeContext);
    const [minPrice, setMinPrice] = useContext(MinPriceContext);
    const [maxPrice, setMaxPrice] = useContext(MaxPriceContext);
    const [essentials, setEssentials] = useContext(EssentialsContext);
    const [value2, setValue2] = useState([0, 100]);
    useEffect(() => {
        setMinPrice(value2[0] * 100);
        setMaxPrice(value2[1] * 100);
    }, [value2, setMinPrice, setMaxPrice]);

    const categories = [
        {
            title: "Icons",
            icon: <MdStarRate />
        },
        {
            title: "Camping",
            icon: <GiCampingTent />
        },
        {
            title: "Amazing pools",
            icon: <MdOutlinePool />
        },
        {
            title: "Caves",
            icon: <GiCaveEntrance />
        },
        {
            title: "Surfing",
            icon: <MdOutlineSurfing />
        },
        {
            title: "Tropical",
            icon: <GiPalmTree />
        },
        {
            title: "Rooms",
            icon: <MdOutlineBedroomParent />
        },
        {
            title: "Countryside",
            icon: <GiVillage />
        },
        {
            title: "OMG!",
            icon: <GiSpaceship />
        },
        {
            title: "Amazing views",
            icon: <GiRiver />
        },
        {
            title: "Bed and breakfasts",
            icon: <FaBed />
        },
        {
            title: "Top of the world",
            icon: <PiMountains />
        },
        {
            title: "Arctic",
            icon: <FaRegSnowflake />
        },
        {
            title: "Islands",
            icon: <GiIsland />
        },
        {
            title: "Beachfront",
            icon: <FaUmbrellaBeach />
        },
        {
            title: "Grand pianos",
            icon: <GiGrandPiano />
        },
        {
            title: "Boats",
            icon: <GiSailboat />
        },
        {
            title: "Lakefront",
            icon: <GiWaterPolo />
        },
        {
            title: "New",
            icon: <LuSparkles />
        },
        {
            title: "Tiny homes",
            icon: <SiHomeadvisor />
        },
        {
            title: "Houseboats",
            icon: <MdOutlineHouseboat />
        },
        {
            title: "Cabins",
            icon: <MdOutlineCabin />
        },
        {
            title: "National parks",
            icon: <PiParkDuotone />
        }
    ];

    const handleEssentials = (essential) => {
        const index = essentials.indexOf(essential);
        // console.log(index);
        if (index < 0) {
            const newEssentials = [...essentials, essential];
            setEssentials(newEssentials);
        } else {
            // console.log(index);
            const newEssentials = [...essentials];
            newEssentials.splice(index, 1);
            setEssentials(newEssentials); 
        }
    };

    const minDistance = 1;

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
    return (
        <div className="border-b-[1px]">
        <div className="container mx-auto px-2 pt-4 grid grid-cols-7 gap-6">
            <div className="relative col-span-5">
                <Swiper
                    breakpoints={{
                        350: {
                            slidesPerView: 3,
                        },
                        640: {
                            slidesPerView: 5,
                        },
                        768: {
                            slidesPerView: 8,
                        },
                        1024: {
                            slidesPerView: 12,
                        },
                    }}
                    centeredSlides={false}
                    spaceBetween={10}
                    navigation={{ prevEl: prevButtonRef.current, nextEl: nextButtonRef.current, }}
                    modules={[Pagination, Navigation]}
                    onSwiper={(swiper) => {
                        swiper.params.navigation.prevEl = prevButtonRef.current;
                        swiper.params.navigation.nextEl = nextButtonRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {
                        categories.map((category, idx) => <SwiperSlide key={idx}><CategoryIcon category={category}></CategoryIcon></SwiperSlide>)
                    }
                </Swiper>
                <button ref={prevButtonRef} className="btn btn-sm btn-circle absolute left-5 top-1/2 transform -translate-y-1/2 z-10">❮</button>
                <button ref={nextButtonRef} className="btn btn-sm btn-circle absolute right-5 top-1/2 transform -translate-y-1/2 z-10">❯</button>
            </div>
            <div className="col-span-2 flex justify-between">
                <button onClick={() => setModalOpen(true)} className="btn bg-white hover:bg-white"><IoOptionsOutline className="text-xl" />Filters</button>
                <button onClick={() => setTotal(!total)} className="btn bg-white hover:bg-white">Display total before taxes <input type="checkbox" className="toggle toggle-sm" checked={total} /></button>
            </div>
        </div>
        {/* filter modal */}
            <input type="checkbox" checked={modalOpen} id="my_modal_6" className="modal-toggle" readOnly />
            <div className="modal" role="dialog">
                <div className="modal-box px-0">
                    <form method="dialog">
                        <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute left-2 top-5">✕</button>
                    </form>
                    <h3 className="text-center text-lg font-bold border-b-2 pb-6">Filters</h3>
                    <h2 className="text-xl font-bold pl-4 py-6">Type of place</h2>
                    <div className="grid grid-cols-3 mx-4 border-2 p-1 rounded-xl">
                        <div onClick={() => setType('')} className={`col-span-1 border-r-2 p-3 cursor-pointer hover:bg-gray-100 rounded-lg ${type == '' ? 'border-black border-2' : ''}`}><p className="text-center">Any type</p></div>
                        <div onClick={() => setType('entire home')} className={`col-span-1 p-3 cursor-pointer hover:bg-gray-100 rounded-lg ${type == 'entire home' ? 'border-black border-2' : ''}`}><p className="text-center">Entire home</p></div>
                        <div onClick={() => setType('room')} className={`col-span-1 border-l-2 p-3 cursor-pointer hover:bg-gray-100 rounded-lg ${type == 'room' ? 'border-black border-2' : ''}`}><p className="text-center">Room</p></div>
                    </div>
                    <div className="border-y-2 px-4 py-6 mt-8">
                        <h2 className="text-xl font-bold">Price range</h2>
                        <p>Total prices before taxes</p>
                                                
                        <Slider
                            getAriaLabel={() => 'Minimum distance shift'}
                            value={value2}
                            onChange={handleChange2}
                            disableSwap
                        />
                        <div className="flex justify-between">
                            <div>
                                <p>Minimum</p>
                                <p className="px-5 py-2 border-black border-2 rounded-3xl mt-2">{minPrice}</p>
                            </div>
                            <div>
                                <p>Maximum</p>
                                <p className="px-5 py-2 border-black border-2 rounded-3xl mt-2">{maxPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-6">
                        <h2 className="text-xl font-bold">Amenities</h2>
                        <div className="flex flex-wrap gap-2">
                            <p onClick={() => handleEssentials('wifi')} className={`px-5 py-2 border-2 hover:border-black rounded-3xl mt-2 cursor-pointer ${essentials.includes('wifi') ? 'border-black' : ''}`}>Wifi</p>
                            <p onClick={() => handleEssentials('air conditioning')} className={`px-5 py-2 border-2 hover:border-black rounded-3xl mt-2 cursor-pointer ${essentials.includes('air conditioning') ? 'border-black' : ''}`}>Air conditioning</p>
                            <p onClick={() => handleEssentials('kitchen')} className={`px-5 py-2 border-2 hover:border-black rounded-3xl mt-2 cursor-pointer ${essentials.includes('kitchen') ? 'border-black' : ''}`}>Kitchen</p>
                            <p onClick={() => handleEssentials('iron')} className={`px-5 py-2 border-2 hover:border-black rounded-3xl mt-2 cursor-pointer ${essentials.includes('iron') ? 'border-black' : ''}`}>Iron</p>
                            <p onClick={() => handleEssentials('heating')} className={`px-5 py-2 border-2 hover:border-black rounded-3xl mt-2 cursor-pointer ${essentials.includes('heating') ? 'border-black' : ''}`}>Heating</p>
                            <p onClick={() => handleEssentials('tv')} className={`px-5 py-2 border-2 hover:border-black rounded-3xl mt-2 cursor-pointer ${essentials.includes('tv') ? 'border-black' : ''}`}>Tv</p>
                            <p onClick={() => handleEssentials('washer')} className={`px-5 py-2 border-2 hover:border-black rounded-3xl mt-2 cursor-pointer ${essentials.includes('washer') ? 'border-black' : ''}`}>Washer</p>
                            <p onClick={() => handleEssentials('dryer')} className={`px-5 py-2 border-2 hover:border-black rounded-3xl mt-2 cursor-pointer ${essentials.includes('dryer') ? 'border-black' : ''}`}>Dryer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;