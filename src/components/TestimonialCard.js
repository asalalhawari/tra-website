import React from 'react';

export const TestimonialCard = ({ name, role, comment, rating, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 mx-auto rounded-full mb-4"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{role}</p>
      <p className="text-gray-700">{comment}</p>
      <p className="mt-2 text-yellow-400">{'★'.repeat(rating)}</p>
    </div>
  );
};
