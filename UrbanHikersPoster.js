import React from 'react';
import { Clock, Map, Users, Star, Leaf, Footprints, Building, TreeDeciduous } from 'lucide-react';

const CincinnatiLocation = ({ title, description, imageSrc }) => (
  <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const InfoBox = ({ icon, text }) => (
  <div className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
    {icon}
    <span className="ml-2">{text}</span>
  </div>
);

const QRCode = () => (
  <div className="bg-white p-4 rounded-lg">
    <div className="w-32 h-32 bg-black flex items-center justify-center">
      <p className="text-white text-xs text-center">QR Code Placeholder</p>
    </div>
  </div>
);

const ImpactMetric = ({ icon, value, label }) => (
  <div className="flex flex-col items-center bg-green-100 p-4 rounded-lg">
    {icon}
    <span className="text-2xl font-bold text-green-700 mt-2">{value}</span>
    <span className="text-sm text-green-600 text-center">{label}</span>
  </div>
);

const UrbanHikersPoster = () => (
  <div className="bg-white p-8 max-w-4xl mx-auto">
    <div className="bg-white border-4 border-black p-8 rounded-lg shadow-2xl">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">Urban Hikers: Discover Cincinnati</h1>
      <h2 className="text-2xl mb-8 text-center text-yellow-400">StartupCincy Week 2024</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CincinnatiLocation
          title="Mt. Adams"
          description="Panoramic city views from Cincinnati's highest point"
          imageSrc="/api/placeholder/400/300?text=Mt.+Adams+Skyline"
        />
        <CincinnatiLocation
          title="Findlay Market"
          description="Historic market with bustling stalls and local flavors"
          imageSrc="/api/placeholder/400/300?text=Findlay+Market"
        />
        <CincinnatiLocation
          title="Fountain Square"
          description="Central hub featuring a beautiful, illuminated fountain"
          imageSrc="/api/placeholder/400/300?text=Fountain+Square"
        />
      </div>
      
      <div className="text-center mb-8">
        <p className="text-lg mb-2 text-black">Join us for guided and self-guided walks through Cincinnati's iconic locations!</p>
        <p className="text-sm mb-4 text-gray-600">Follow the yellow stickers to explore the city at your own pace</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <InfoBox icon={<Clock size={20} />} text="Under 40 min walks" />
          <InfoBox icon={<Map size={20} />} text="Approx. 2 miles" />
          <InfoBox icon={<Users size={20} />} text="Max 20 people per guided walk" />
        </div>
      </div>
      
      <div className="bg-yellow-400 text-black p-4 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-2 text-center">Walk Schedule</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>3 guided walks daily</li>
          <li>Self-guided routes available all day</li>
          <li>Tours start from Fountain Square</li>
        </ul>
        <p className="font-bold text-center">Guided Walk Start Times:</p>
        <p className="text-center">10:00 AM | 2:00 PM | 6:00 PM</p>
      </div>
      
      <div className="bg-black text-white p-4 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-2 text-center text-yellow-400">Special Features</h3>
        <ul className="list-none pl-0">
          <li className="flex items-center mb-2">
            <Star className="mr-2 text-yellow-400" size={20} />
            Expert local guides with deep knowledge of Cincinnati's history
          </li>
          <li className="flex items-center mb-2">
            <Star className="mr-2 text-yellow-400" size={20} />
            Exclusive access to hidden gems and local favorites
          </li>
          <li className="flex items-center">
            <Star className="mr-2 text-yellow-400" size={20} />
            Interactive mobile app for enhanced self-guided experience
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-center text-green-600">Environmental Impact</h3>
        <p className="text-center mb-4 text-gray-600">Join us in making a positive impact on our city and environment!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ImpactMetric 
            icon={<Leaf className="text-green-500" size={32} />}
            value="500 lbs"
            label="CO2 Emissions Saved"
          />
          <ImpactMetric 
            icon={<Footprints className="text-green-500" size={32} />}
            value="1M+"
            label="Steps Taken"
          />
          <ImpactMetric 
            icon={<Building className="text-green-500" size={32} />}
            value="50+"
            label="Local Businesses Supported"
          />
          <ImpactMetric 
            icon={<TreeDeciduous className="text-green-500" size={32} />}
            value="100"
            label="Trees Planted"
          />
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-2 text-center text-black">Urban Hiking Bingo Challenge</h3>
        <p className="text-center mb-4">Complete these activities during your walks for a chance to win prizes!</p>
        <div className="grid grid-cols-3 gap-2 text-sm">
          {['Spot a mural', 'Visit a local cafe', 'Take a selfie with a landmark', 
            'Attend a street performance', 'Try a local delicacy', 'Identify 3 types of architecture', 
            'Find a hidden park', 'Spot 5 different birds', 'Learn a historical fact'].map((item, index) => (
            <div key={index} className="bg-white p-2 rounded border border-gray-300 text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg mb-4 text-black">Experience Cincinnati's rich history and vibrant energy!</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors">
            Register Now
          </button>
        </div>
        <div className="flex flex-col items-center">
          <QRCode />
          <p className="mt-2 text-sm text-black">Scan to Register</p>
        </div>
      </div>
    </div>
  </div>
);

export default UrbanHikersPoster;