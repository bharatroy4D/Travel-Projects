import React from 'react';

const PopularTour = ({ popularTour }) => {
    const { name, image, category, location , description} = popularTour;
    return (
        <div>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularTour;