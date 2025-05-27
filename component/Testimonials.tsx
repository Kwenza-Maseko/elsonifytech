import React from 'react';
import { Quote } from "lucide-react";
import { testimonials } from '@/constants';

const Testimonials = () => {
    return (
        <div className="text-gray-400 my-12 flex flex-col items-center">
            <h3 className="text-gray-300 text-2xl font-bold mb-4">What Our <span className="text-cyan-400">Clients</span> Say</h3>
            
            <div className="flex flex-wrap justify-center gap-6 mt-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="max-w-md bg-gray-900 p-6 rounded-lg border-2 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Quote className="text-purple-400 text-3xl mb-3" />
                        <p className="text-gray-300 italic">"{testimonial.text}"</p>
                        <div className="mt-4">
                            <p className="text-blue-400 font-semibold">{testimonial.name}</p>
                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
