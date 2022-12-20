import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ratingOrder, updateOrderStatus } from '../../actions/OrdersActions';
import { getServices } from '../../actions/ServicesActions';

const Rate = ({orderId}) => {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const dispatch = useDispatch();
    const handleRating = (value) => {
        setCurrentValue(value);
        ratingOrder(dispatch, {rate: value, orderId})
        getServices(dispatch)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };
  return (
    <div className="flex items-center my-5 ml-1">
                    {stars.map((star, index) => (
                        <FaStar
                            key={index}
                            size={20}
                            style={{
                                marginRight: 3,
                                cursor: "pointer",
                            }}
                            color={index < (hoverValue || currentValue) ? "#ffc107" : "#e4e5e9"}
                            onClick={() => handleRating(index + 1)}
                            // onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
  )
}

export default Rate