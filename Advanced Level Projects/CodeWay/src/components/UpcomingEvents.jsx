// src/components/UpcomingEvents.jsx
import React, { useEffect, useState } from "react";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/utils/upcomingEvents.json")
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error("Error loading events:", err));
    }, []);

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#1A1E63] mb-8 text-center">
                    Upcoming Events
                </h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {events.map((event) => (
                        <div key={event.id} className="bg-gray-100 rounded-xl p-5 shadow hover:shadow-lg transition">
                            <img src={event.image} alt={event.title} className="rounded mb-4 w-full h-40 object-cover" />
                            <h3 className="text-xl font-semibold text-[#1A1E63]">{event.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{event.date} | {event.time}</p>
                            <p className="text-gray-700 mt-2 text-sm">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
