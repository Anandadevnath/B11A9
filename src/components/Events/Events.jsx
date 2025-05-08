import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './../Footer/Footer';
import NavBar from './../NavBar/NavBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const events = [
    {
        id: 1,
        thumbnail: 'https://i.postimg.cc/FHMqtJDT/Screenshot-2025-05-08-153302.png',
        name: 'Tech Conference 2025',
        category: 'Tech',
        date: 'May 15, 2025',
        location: 'San Francisco, CA',
        entryFee: '$50',
    },
    {
        id: 2,
        thumbnail: 'https://i.postimg.cc/B6SRNPSt/images-3.jpg',
        name: 'Art Exhibition',
        category: 'Art',
        date: 'June 10, 2025',
        location: 'New York, NY',
        entryFee: 'Free',
    },
    {
        id: 3,
        thumbnail: 'https://i.postimg.cc/HxnBVwW0/sports-tools-53876-138077.avif',
        name: 'Sports Meetup',
        category: 'Sports',
        date: 'July 20, 2025',
        location: 'Los Angeles, CA',
        entryFee: '$20',
    },
    {
        "id": 4,
        "thumbnail": "https://i.postimg.cc/Qd5LMrYN/images-2.jpg",
        "name": "Music Festival",
        "category": "Music",
        "date": "August 5, 2025",
        "location": "Austin, TX",
        "entryFee": "$100"
    },
    {
        "id": 5,
        "thumbnail": "https://i.postimg.cc/FHMqtJDT/Screenshot-2025-05-08-153302.png",
        "name": "Food & Wine Expo",
        "category": "Food",
        "date": "September 12, 2025",
        "location": "Chicago, IL",
        "entryFee": "$30"
    },
    {
        "id": 6,
        "thumbnail": "https://i.postimg.cc/3x3QzSGq/Screenshot-2025-05-08-153340.png",
        "name": "Wellness & Yoga Workshop",
        "category": "Wellness",
        "date": "October 18, 2025",
        "location": "Denver, CO",
        "entryFee": "$25"
    },
];

function Events() {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find((event) => event.id === parseInt(id));

    const [formData, setFormData] = useState({ name: '', email: '' });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (!event) {
            navigate('/404');
        }
    }, [event, navigate]);

    if (!event) {
        return null;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage('Seat reserved successfully!');
        toast.success('Seat reserved successfully!');
        setFormData({ name: '', email: '' });
    };

    return (
        <>
            <NavBar />
            <div className="container mx-auto px-4 py-10 mt-8">
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="btn bg-teal-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-teal-700 transition"
                    >
                        Back
                    </button>

                    {/* Event Details */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <img
                            src={event.thumbnail}
                            alt={event.name}
                            className="rounded-lg w-full md:w-1/3 shadow-md"
                        />
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
                            <p className="mb-2">
                                <strong className="text-teal-600">Category:</strong> {event.category}
                            </p>
                            <p className="mb-2">
                                <strong className="text-teal-600">Date:</strong> {event.date}
                            </p>
                            <p className="mb-2">
                                <strong className="text-teal-600">Location:</strong> {event.location}
                            </p>
                            <p className="mb-2">
                                <strong className="text-teal-600">Entry Fee:</strong> {event.entryFee}
                            </p>
                            <p className="mb-4">{event.description}</p>
                        </div>
                    </div>
                </div>

                {/* Reservation Form */}
                <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center text-teal-600">Reserve Your Seat</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md w-full transition"
                        >
                            Reserve Seat
                        </button>
                    </form>
                    {successMessage && (
                        <p className="text-green-500 mt-4 text-center font-semibold">{successMessage}</p>
                    )}
                </div>
            </div>
            <Footer />
            <ToastContainer /> {/* Add this component */}
        </>
    );
}

export default Events;