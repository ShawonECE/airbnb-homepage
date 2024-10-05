import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './../hooks/useAxiosPublic';
import DestinationCard from './DestinationCard';
import { useContext } from 'react';
import { CategoryContext, DurationContext, EssentialsContext, GuestsContext, MaxPriceContext, MinPriceContext, SearchContext, TypeContext } from '../App';

const Destinations = () => {
    const axiosPublic = useAxiosPublic();
    const [currentCategory,] = useContext(CategoryContext);
    const [type,] = useContext(TypeContext);
    const [minPrice,] = useContext(MinPriceContext);
    const [maxPrice,] = useContext(MaxPriceContext);
    const [essentials,] = useContext(EssentialsContext);
    const [guests,] = useContext(GuestsContext);
    const [search,] = useContext(SearchContext);
    const [duration,] = useContext(DurationContext);

    const { isPending, data } = useQuery({ queryKey: [`destinations-category:${currentCategory}-type:${type}-min_price:${minPrice}-max_price:${maxPrice}-essentials:${JSON.stringify(essentials)}-guests:${guests.reduce((acc, curr) => acc + curr, 0)}-search:${search}-duration:${duration}`], queryFn: async() => {
        const data = await axiosPublic.get(`/destinations?category=${currentCategory}&type=${type}&min_price=${minPrice}&max_price=${maxPrice}&essentials=${JSON.stringify(essentials)}&guests=${guests.reduce((acc, curr) => acc + curr, 0)}&search=${search}&duration=${duration}`);
        return data.data;
    } });

    if (isPending) {
        return (
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                    <div className="skeleton h-48"></div>
                    <div className="skeleton h-48"></div>
                    <div className="skeleton h-48"></div>
                    <div className="skeleton h-48"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-2 pt-4">
            {
                data.length ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 mt-10">
                {
                    data.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                } 
                </div> :
                <h1 className='text-xl font-bold text-center'>Sorry! No destinations found!</h1>
            }
        </div>
    );
};

export default Destinations;