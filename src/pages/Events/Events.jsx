import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventBanner from "./EventBanner";


const Events = () => {
    const [allEvents, setAllEvents] = useState([]);


    useEffect(() => {
        fetch('event_data.json')
            .then(res => res.json())
            .then(data => setAllEvents(data))
    }, [])
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(-45deg, rgba(255, 51, 102, 0.8), rgba(255, 153, 51, 0.5))`,
                backgroundSize: 'cover',
            }}
            className="py-6 md:py-14">
            <EventBanner></EventBanner>
            {
                allEvents.map((event, idx) => <div
                    key={event.id}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="flex justify-center my-6 mx-2 md:mt-10">
                        <div className=" md:mx-4 stat flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg ">
                            <div className="p-2 flex items-center">
                                <div className="text-5xl mx-auto font-bold ">0{idx + 1}</div>
                            </div>

                            <div className="stat ">
                                <div className="text-2xl text-center">
                                    <h2 className="font-bold">{event?.name}</h2>
                                </div>
                                <div className="grid md:grid-cols-9 md:gap-4 items-center">
                                    <div className="my-4 col-span-4 grid md:grid-cols-2 items-center gap-6 text-center md:text-start">
                                        <div className="">
                                            <>{event?.date_and_time?.date}</><br></br><>{event?.date_and_time?.time}</> <br />
                                            <p className="badge badge-accent">${event?.price}</p>
                                        </div>
                                        <div className=" ">
                                            <>{event?.location?.buildings}, </><>{event?.location?.city}</>
                                        </div>
                                    </div>
                                    <div className="mx-auto col-span-5">
                                        <h3 className="text-center">Main Speakers</h3>
                                        <div className=" avatar-group -space-x-6 rtl:space-x-reverse">
                                            {
                                                event.speakers.map((speaker, idx) => <section key={idx}>
                                                    {<div className="avatar">
                                                        <div className="w-12">
                                                            <img src={speaker?.spk_img} alt="img" />

                                                        </div>
                                                    </div>}

                                                </section>

                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stat-actions mx-auto my-auto">
                                <Link
                                    to={`/event/${event.id}`}
                                >
                                    <button className="btn btn-sm md:btn-md lg:btn-lg  btn-info">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default Events;