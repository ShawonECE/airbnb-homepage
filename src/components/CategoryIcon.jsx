import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CategoryContext } from '../App';

const CategoryIcon = ({category}) => {
    const { title, icon } = category;
    const [currentCategory, setCurrentCategory] = useContext(CategoryContext);
    return (
        <div className={`cursor-pointer hover:border-b-2 pb-2 ${currentCategory == title ? 'border-black border-b-2' : ''}`} onClick={() => setCurrentCategory(title)}>
            <span className="text-2xl flex justify-center text-gray-500 hover:text-gray-800">{ icon }</span>
            <h4 className='text-center afacad-flux-font hover:text-gray-800'>{ title }</h4>
        </div>
    );
};

CategoryIcon.propTypes = {
    category: PropTypes.object.isRequired,
};

export default CategoryIcon;