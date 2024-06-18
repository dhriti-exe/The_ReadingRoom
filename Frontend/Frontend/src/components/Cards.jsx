import React from 'react'

const Cards = ({item}) => {
    console.log(item)
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title flex-col lg:flex-row">
                            <div>{item.name}</div>
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-start mt-1">
                            <div className="badge badge-outline">{item.type}</div> 
                            <div className="badge badge-outline">Rs. {item.price}</div>
                        </div>
                        <div className="card-actions justify-end">
                            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
