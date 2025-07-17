import React, { useState } from 'react';
import TripIccon from "../../assets/icon.svg"

const EvaluationList = ({ evaluation }) => {
    const amountOfWords = 10;
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (index) => {
        setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className=" ">
            <div>
                {evaluation?.map((item, index) => {
                    const splittedText = item.comment.split(' ');
                    const isLong = splittedText.length > amountOfWords;
                    const isExpanded = expanded[index];

                    const displayedText = isExpanded
                        ? item.comment
                        : splittedText.slice(0, amountOfWords).join(' ') + (isLong ? '...' : '');

                    return (
                        <div key={index} className="relative bottom-0 duration-1000 hover:bottom-2 w-64 bg-gray-200 flex flex-col items-center m-20 rounded">
                            <div className=' flex items-end justify-end relative -top-10'>
                                <div>
                                    <img className=' w-20 h-20 rounded-full' src={item.image} alt="" />
                                </div>
                                <div className=' absolute  border-2 rounded-full border-[#ffff] w-[25px] h-[25px]'>
                                    <img src={TripIccon} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <p>{item.date}</p>
                            </div>
                            <div className='flex justify-center items-center border-2 rounded-full border-[#00a680] w-[25px] h-[25px]'>
                                <div className='bg-[#00a680] rounded-full w-[15px] h-[15px]'></div>
                            </div>
                            <div className="mt-2 text-center">
                                <p className="text-sm">{displayedText}</p>
                                {isLong && (
                                    <button
                                        className="text-blue-600 mt-1 text-xs underline"
                                        onClick={() => toggleReadMore(index)}
                                    >
                                        {isExpanded ? 'Read less' : 'Read more'}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EvaluationList;
