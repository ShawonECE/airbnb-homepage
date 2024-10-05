import { IoSearchOutline } from "react-icons/io5";
import { DurationContext, GuestsContext, SearchContext } from "../App";
import { useContext, useEffect } from "react";
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Searchbar = () => {
    const [guests, setGuests] = useContext(GuestsContext);
    const [, setSearch] = useContext(SearchContext);
    const [, setDuration] = useContext(DurationContext);
    const [searchText, setSearchText] = useState('');
    const [checkinDate, setCheckinDate] = useState(new Date());
    const [checkoutDate, setCheckoutDate] = useState(new Date());
    const increaseGuests = (idx) => {
        const newGuests = [...guests];
        newGuests[idx] += 1;
        setGuests(newGuests);
    };

    const decreaseGuests = (idx) => {
        const newGuests = [...guests];
        newGuests[idx] -= 1;
        setGuests(newGuests);
    };

    const handleSearch = (e) => {
        e.stopPropagation();
        setSearch(searchText);
    };

    useEffect(() => {
        if(checkinDate && checkoutDate && checkoutDate.getTime() > checkinDate.getTime()) {
            let duration = Math.round((checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24));
            setDuration(duration);
        }
    }, [checkinDate, checkoutDate, setDuration]);

    return (
        <div className="border-b-[1px] pb-4">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-10 mx-auto w-4/5 rounded-full shadow-xl border-[1px]">
                <div className="col-span-3 border-gray-300">
                    <div className="rounded-full hover:bg-gray-200 p-2">
                        <p className="pl-4 afacad-flux-font font-medium">Where</p>
                        <input value={searchText} onChange={(e) => {setSearchText(e.target.value)}} type="text" placeholder="Search destinations" className="input input-ghost w-full max-w-xs focus:outline-none focus:border-0 focus:bg-transparent -my-2 -mt-4" />
                    </div>
                </div>
                <div className="col-span-2 border-gray-300 dropdown">
                    <div tabIndex={0} role="button" className="rounded-full hover:bg-gray-200 p-2">
                        <p className="pl-4 afacad-flux-font font-medium">Check in</p>
                        <p className="pl-4 afacad-flux-font text-lg">Add dates</p>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[20] max-w-md p-4 shadow">
                        <p className="font-bold">Select date</p>
                        <DatePicker dateFormat="dd/MM/yyyy" minDate={new Date()} selected={checkinDate} onChange={(date) => setCheckinDate(date)} />
                    </ul>
                </div>
                <div className="col-span-2 border-gray-300 dropdown">
                    <div tabIndex={0} role="button" className="rounded-full hover:bg-gray-200 p-2">
                        <p className="pl-4 afacad-flux-font font-medium">Check out</p>
                        <p className="pl-4 afacad-flux-font text-lg">Add dates</p>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[20] max-w-md p-4 shadow">
                        <p className="font-bold">Select date</p>
                        <DatePicker dateFormat="dd/MM/yyyy" minDate={checkinDate} selected={checkoutDate} onChange={(date) => setCheckoutDate(date)} />
                    </ul>
                </div>
                <div className="col-span-3 border-gray-300 relative rounded-full hover:bg-gray-200">
                    <div className="p-2 dropdown dropdown-bottom">
                        <div className="flex justify-between">
                            <div tabIndex={0} role="button">
                                <p className="pl-4 afacad-flux-font font-medium">Who</p>
                                <p className="pl-4 afacad-flux-font text-lg">{guests.reduce((acc, curr) => acc + curr, 0) > 0 ? guests.reduce((acc, curr) => acc + curr, 0) : 'Add'} guests</p>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[20] max-w-md p-4 shadow">
                                <li className="border-b-2 py-4">
                                    <div className="flex items-center justify-between gap-10">
                                    <div>
                                        <p className="font-bold text-lg">Adults</p>
                                        <p>13 or above</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => decreaseGuests(0)} className="btn btn-sm btn-circle btn-outline" disabled={guests[0] == 0}>-</button>
                                        <p>{guests[0]}</p>
                                        <button onClick={() => increaseGuests(0)} className="btn btn-sm btn-circle btn-outline">+</button>
                                    </div>
                                    </div>
                                </li>
                                <li className="border-b-2 py-4">
                                    <div className="flex items-center justify-between gap-10">
                                    <div>
                                        <p className="font-bold text-lg">Children</p>
                                        <p>Ages 2-12</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => decreaseGuests(1)} className="btn btn-sm btn-circle btn-outline" disabled={guests[1] == 0}>-</button>
                                        <p>{guests[1]}</p>
                                        <button onClick={() => increaseGuests(1)} className="btn btn-sm btn-circle btn-outline">+</button>
                                    </div>
                                    </div>
                                </li>
                                <li className="border-b-2 py-4">
                                    <div className="flex items-center justify-between gap-10">
                                    <div>
                                        <p className="font-bold text-lg">Infants</p>
                                        <p>Under 2</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => decreaseGuests(2)} className="btn btn-sm btn-circle btn-outline" disabled={guests[2] == 0}>-</button>
                                        <p>{guests[2]}</p>
                                        <button onClick={() => increaseGuests(2)} className="btn btn-sm btn-circle btn-outline">+</button>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={handleSearch} className="btn btn-circle bg-[#FF4869] hover:bg-[#d91a3d] absolute right-[10px] top-1/2 transform -translate-y-1/2"><IoSearchOutline className="text-xl text-white font-extrabold" /></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Searchbar;