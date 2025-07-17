import React from 'react'
import Image_1 from "../../assets/aboutUs/3992-min-1200x800 (1).jpg"


const AboutUsComponent = () => {
    const data = [
        {
            id: 1,
            name: "Tour Packages",
            description: "From our immense experience of Morocco, we are able to advise you on an itinerary/tour to suit your particular interests and preferences. We wok hard to give you a rewarding, authentic, and unique cultural experience. As a specialist tour operator in Morocco, we work with individuals or small gatherings of friends or family. We can help book entire riads to ensure your group has the privacy and freedom of an entire area."
        },
        {
            id: 2,
            name: "Coach tours",
            description: "We do occasionally have escorted coach tours for those who prefer this type of holiday – please let us know if you are interested. The vast majority of our clients do prefer our tailor made itineraries which can cover the same routes as the traditional coach tours (‘The South’, ‘Imperial Cities’ and ‘Best of Morocco’), while being more rewarding than travelling with 40 or 50 other people and offering a much greater choice of traditional accommodation."
        },
        {
            id: 3,
            name: "Activities",
            description: "We can arrange activities such as Camel Treks, Walking Treks in the High Atlas Mountains, Moroccan cooking courses, the ropes slides and Gorge monkey bridges at the Eco Adventure Park, Surfing, Ballooning, desert camps, star gazing/astronomy, and far more, as part of an overall inclusive itinerary. If you are holidaying in Morocco for a particular activity please consult our advisors."
        },
        {
            id: 4,
            name: "Weddings",
            description: "We are often asked to help arrange weddings and receptions for large parties and for guests travelling to Morocco from various parts of the world. Getting married in Morocco is not easy nor straightforward. Jewish, Muslim and Roman Catholic weddings are possible but, but we are not able to make the wedding arrangements. More information on our Honeymoons And Weddings page."
        },
        {
            id: 5,
            name: "Other Hotels",
            description: "As our staff personally visit all of the accommodation we feature and recommend, we prefer not to make reservations at other hotels. However, if you have been recommended a particular hotel or location, please talk to our advisors who can make arrangements with that hotel or suggest more suitable alternatives. It is also possible for you to make your own arrangements for a segment of a more complex itinerary arranged by us."
        },
        {
            id: 6,
            name: "Conference & incentive groups",
            description: "We can arrange accommodation for small groups and general activities (see above). For larger groups, or specialist team-building activities, we have found that it is probably better for a corporate organisations to contact specialists in this area."
        },
        {
            id: 7,
            name: "Advice",
            description: "We can help you select the hotels and riads / resorts from our large range which are appropriate for you and your desired style of holiday.Eemail us for advice and general queries , or call us by telephone (00212 617 393 665)"
        }
    ];

    return (
        <div>
            <div className='tours '>
                <p className=' text-center font-bold text-[68px] py-20'>About The Best of Morocco</p>
            </div>

            <div className=' px-[40px] grid grid-cols-2 gap-10 py-10'>
                <div className=' pb-6'>
                    <img className=' h-full rounded-[10px]' src={Image_1} alt="image" />
                </div>
                <div className='border-b border-dashed pt-6'>
                    <div className=' '>
                        <button className=' px-10 py-3 bg-gray-200 rounded font-medium' >About Morocco</button>
                    </div>
                    <div>
                        <p className=' text-[32px] font-bold'>Morocco’s premier in-country tour operator</p>
                    </div>
                    <div className=' py-4 space-y-10'>
                        <p className='text-[18px] text-gray-700 leading-8 font-medium '>Since 1966 we at The Best Of Morocco are proud to be Morocco’s premier in-country luxury tour operator who work hard to give you a rewarding, authentic, and unique cultural experience. Throughout your private tours in Morocco you’ll be in great hands; our expert drivers and guides work with you to keep each day flexible, take you off-the-beaten path to see the best places, enjoy the history and culture, lounge in luxury trendy riads, meet the friendliest people and above all have the best Moroccan experience you will treasure forever.</p>
                        <p className='text-[18px] text-gray-700 leading-8 font-medium'>Whether you’re planning a short journey in Morocco or a multi-centre holiday taking in the varied landscape and cities of Morocco, we can help you arrange exciting personal itinerary packages through the real Morocco customized to your needs & budget</p>
                    </div>
                </div>
            </div>

            <div className='aboutUs '>
                <div>
                    <p className=' text-center text-white font-bold text-[68px] py-10'>About The Best of Morocco</p>
                </div>
                <div className='px-[40px]  '>
                    <p className=' text-[20px] text-white text-center'>As specialist tour operators, we (The Best of Morocco Ltd) put together tailor made holidays to Morocco for individuals or small groups (families, friends) which would normally include:-</p>
                </div>
                <div className=' grid grid-cols-2 px-[40px] gap-10 space-y-10 py-10'>
                    {
                        data?.map((item, index) => (
                            <div key={index}>
                                <div>
                                    <p className=' text-white text-[32px] font-bold'>{item.name}</p>
                                </div>
                                <div>
                                    <p className='text-white text-[16px] font-medium'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default AboutUsComponent