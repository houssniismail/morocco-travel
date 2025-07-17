import React from 'react'

const MoroccoComponent = () => {
    const tour_guides = []
    return (
        <div>
            <div className='tours '>
                <div className=' py-20'>
                    <div>
                        <p className=' text-center font-bold text-[68px] '>About The Best of Morocco</p>
                    </div>
                    <div>
                        <p className=' font-light text-[20px] text-center'>Things You Must Know Before Visiting Morocco – Travel Tips</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className=' text-center font-bold text-[50px] py-10 '>News & Guides</p>
                </div>
                <div className="grid grid-cols-3 gap-10 justify-center items-stretch">
                    {
                        tour_guides?.map((item, index) => (
                            <div key={index} className="flex flex-col bg-white rounded-[10px] overflow-hidden min-h-[520px]">
                                {/* Image */}
                                <div className="h-[250px] w-full">
                                    <img className="w-full h-full object-cover rounded-[10px]" src={item.image} alt="" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between flex-1 bg-gray-100 px-5 py-6">
                                    <div>
                                        <p className="text-[#a6843d] duration-1000 hover:text-[#1e3a5f]">{item.category}</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-[#1e3a5f] text-[30px] duration-1000 hover:text-[#a6843d] ">
                                            {item.name}
                                        </p>
                                    </div>

                                    <div className="mt-6 p-[1px] bg-gradient-to-b from-white to-[#a6843d] rounded">
                                        <button className="w-full bg-gray-50 text-[18px] font-medium flex items-center justify-center text-black py-4 rounded duration-300">
                                            continue reading <BiRightArrowAlt size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MoroccoComponent