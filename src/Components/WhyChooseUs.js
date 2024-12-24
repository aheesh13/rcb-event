import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Why Choose us?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        
        {/* Card 1 */}
        <div className="p-6 bg-white shadow-md rounded-lg text-center flex flex-col items-center">
          <div className="w-12 h-12 mb-4 flex items-center justify-center bg-purple-500 rounded-full">
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Expert Instructors</h3>
          <p className="text-gray-500 mt-2">
            Learn from industry professionals with tons of experience combined.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center transform scale-105 flex flex-col items-center">
          <div className="w-12 h-12 mb-4 flex items-center justify-center bg-orange-500 rounded-full">
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Comprehensive Curriculum</h3>
          <p className="text-gray-500 mt-2">
            Courses designed to cover everything from basics to advanced topics.
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="p-6 bg-white shadow-md rounded-lg text-center flex flex-col items-center">
          <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-500 rounded-full">
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Flexible Scheduling</h3>
          <p className="text-gray-500 mt-2">
            Classes available online at your comfort that fit your schedule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;