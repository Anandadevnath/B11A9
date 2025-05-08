import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import Footer from './../Footer/Footer';
import NavBar from './../NavBar/NavBar';

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

const categories = [
    { name: 'Tech', icon: 'fas fa-laptop-code' },
    { name: 'Art & Culture', icon: 'fas fa-palette' },
    { name: 'Music & Concerts', icon: 'fas fa-music' },
    { name: 'Food & Drink', icon: 'fas fa-utensils' },
    { name: 'Sports', icon: 'fas fa-football-ball' },
];

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div>
            <NavBar />
            <div className='mt-16'>
                {/* Slider Section */}
                <section className="slider-section mb-10" data-aos="fade-up">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                    >
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="https://i.postimg.cc/FHMqtJDT/Screenshot-2025-05-08-153302.png" alt="Slide 1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="https://i.postimg.cc/W3jHzcRr/Screenshot-2025-05-08-153315.png" alt="Slide 2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="https://i.postimg.cc/VNXhzLhm/Screenshot-2025-05-08-153328.png" alt="Slide 3" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                {/* Upcoming Events Section */}
                <section className="upcoming-events-section mb-10" data-aos="fade-up">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className="card bg-white shadow-lg rounded-lg overflow-hidden"
                                    data-aos="fade-up"
                                >
                                    <img src={event.thumbnail} alt={event.name} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                                        <p className="text-sm text-gray-500 mb-4">{event.category}</p>
                                        <div className="flex items-center text-gray-600 text-sm mb-2">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            {event.date}
                                        </div>
                                        <div className="flex items-center text-gray-600 text-sm mb-2">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            {event.location}
                                        </div>
                                        <div className="flex items-center text-gray-600 text-sm mb-4">
                                            <i className="fas fa-dollar-sign mr-2"></i>
                                            {event.entryFee}
                                        </div>
                                        <Link
                                            to={`/event/${event.id}`}
                                            className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Explore by Category Section */}
                <section className="explore-category-section mb-10" data-aos="fade-up">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Explore by Category</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="category-card bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition"
                                    data-aos="fade-up"
                                >
                                    <i className={`${category.icon} text-4xl text-blue-600 mb-4`}></i>
                                    <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Never Miss Out Section */}
                <section className="never-miss-out-section bg-gray-100 py-10" data-aos="fade-up">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Never Miss Out!</h2>
                            <p className="text-gray-600 mb-6">
                                Local Pulse is your ultimate guide to the vibrant life of your city. Discover hidden gems,
                                connect with your community, and create unforgettable memories. Sign up today to get
                                personalized event recommendations and exclusive offers.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
                                    Get Started
                                </button>
                                <button className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition">
                                    Explore Events
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src="https://i.postimg.cc/FHMqtJDT/Screenshot-2025-05-08-153302.png"
                                alt="Never Miss Out"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;