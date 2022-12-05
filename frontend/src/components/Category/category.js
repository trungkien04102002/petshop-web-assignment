import React from 'react';

const Category = ({cate}) => {
    return (
        <>
            <button className={`bg-${cate.color}-100 rounded-xl items-center text-center px-12 py-10 shadow shadow-lg hover:scale-105 ease-in-out duration-300 hover:shadow-xl`}>
                <div className="p-3 rounded-full bg-pink-100 shadow shadow-lg ">
                    <img src={cate.image} alt="category" className="w-20 h-20"/>
                </div>
                <p className="font-extrabold text-lg mt-4 text-gray-700">{cate.title}</p>
            </button>
        </>
    );
}

export default Category;
