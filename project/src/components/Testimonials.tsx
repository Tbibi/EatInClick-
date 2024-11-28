import React from 'react';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Loved by restaurants worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what restaurant owners say about our platform
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-red-600">{testimonial.role}</div>
                    {testimonial.restaurant && (
                      <div className="text-sm text-gray-500">{testimonial.restaurant}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}