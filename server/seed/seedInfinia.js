import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import Property from '../models/Property.js';
import mongoose from 'mongoose';

dotenv.config();

const infinia = {
  name: 'Infinia',
  tagline: 'The New Standard of Imperial Living',
  location: {
    plot: 'Plot No. 8, Ganesh Vihar No. 2',
    layout: 'Near Jagadare Layout',
    city: 'Amravati',
    pincode: '444604',
  },
  configuration: '3 BHK',
  superBuiltUpArea: 1375,
  structure: 'G + 6',
  flatNumbers: ['101', '201', '301', '401', '501', '601'],
  vastuZones: [
    { direction: 'NE', name: 'Ishanya Corner', room: 'Puja Room', element: '—', description: 'Aligned with the sacred north-east zone for peace, positivity & divine blessings.' },
    { direction: 'N', name: 'North Entrance', room: 'Entrance', element: 'Wealth & Opportunity', description: 'The gateway to prosperity, welcoming career growth & dynamic abundance.' },
    { direction: 'N', name: 'North Zone', room: 'Guest Room', element: 'Wealth & Opportunity', description: 'Designed to encourage financial growth, focus & positive energy.' },
    { direction: 'NW', name: 'Vayavya', room: 'Kids Bedroom', element: 'Air', description: 'Promotes dynamic energy, social success & continuous movement.' },
    { direction: 'SE', name: 'Agneya', room: 'Kitchen', element: 'Fire', description: 'Auspicious kitchen — supports health, vigor & nourishing energy.' },
    { direction: 'C', name: 'Brahmasthan', room: 'Family Gathering', element: 'Free-Flowing Energy', description: 'Open core diffusing positive energy for family unity & social bonding.' },
    { direction: 'SW', name: 'Nairutya', room: "Master's Retreat", element: 'Earth', description: 'Grounded stability, leadership & deep restorative sleep.' },
  ],
  roomDimensions: [
    { room: 'Bedroom 01', dimensions: "11'0\" x 13'6\"" },
    { room: 'Bedroom 02', dimensions: "11'6\" x 11'1.5\"" },
    { room: 'Bedroom 03', dimensions: "11'6\" x 10'0\"" },
    { room: 'Living / Dining', dimensions: "11'0\" x 21'1.5\"" },
    { room: 'Kitchen', dimensions: "12'0\" x 8'9\"" },
    { room: 'Puja', dimensions: "4'7\" x 5'3\"" },
    { room: 'Store', dimensions: "5'6\" x 5'0\"" },
    { room: 'Toilet 1', dimensions: "7'4.5\" x 4'0\"" },
    { room: 'Toilet 2', dimensions: "6'0\" x 6'0\"" },
    { room: 'Toilet 3', dimensions: "7'1.5\" x 5'6\"" },
  ],
  amenities: [
    'Modular Kitchen', 'CCTV Camera', 'Designer False Ceiling', 'Kitchen Chimney',
    'Smart Lights in Common Areas', 'Water Purifier', 'Jaquar Bathroom Fittings',
    'Video Door Bell', 'UPVC Windows', 'Solar System for Common Area',
    'Solar Courtyard', 'Decorated Lobbies',
  ],
  specifications: [
    { category: 'Structure', details: 'RCC framed structure with external walls of 6" thick & internal walls of 4" thick in red brick work.' },
    { category: 'Doors', details: 'Decorative main door with both side laminations with teakwood frame or plywood frame.' },
    { category: 'Electric Solar Panels', details: 'Electric solar for use of electricity in common areas.' },
    { category: 'Electrical', details: 'Concealed wiring with premium modular switches. A.C. point in all bedrooms & hall inverter points in each room.' },
    { category: 'Plumbing', details: 'Concealed plumbing with hot & cold mixer/diverter unit in each toilet. Premium range sanitary fitting in all the toilets.' },
    { category: 'Water Tank', details: 'Common overhead & underground water tank with separate partition for domestic use & potable water with electric motor.' },
    { category: 'Kitchen', details: 'Kitchen platform in granite top with S.S. sink, modular kitchen trolley & chimney. Wall tiles up to lintel level & provision of exhaust fan.' },
    { category: 'Painting', details: 'Internal - Wall putty for internal walls. External - Premium quality acrylic paint for external walls.' },
    { category: 'Parking', details: 'Parking space with paving blocks/parking tiles/tremix.' },
    { category: 'Flooring', details: 'Premium quality vitrified tiles/wooden flooring (optional). Toilet dado & common passage in premium quality tiles.' },
    { category: 'Windows', details: 'UPVC sliding windows with mosquito net (for better noise reduction) & granite window sill on all 4 sides.' },
  ],
  connectivity: [
    { place: 'D-Mart', distance: '2.2 km' },
    { place: 'Delhi Public School', distance: '400 m' },
    { place: 'Rajapeth Bus Stand', distance: '2.3 km' },
    { place: 'Tapadia Mall', distance: '2.2 km' },
    { place: 'Sai Mandir', distance: '2.3 km' },
    { place: 'Badnera Railway Station', distance: '8.4 km' },
  ],
  contact: {
    bookingPhone: '7972 383011',
    email: 'kurheestates@gmail.com',
    office: 'Rathi Nagar, Lane-2, Amravati',
  },
};

async function run() {
  await connectDB(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/kurhe-estates');
  await Property.deleteMany({ name: 'Infinia' });
  await Property.create(infinia);
  console.log('Seeded Infinia property document.');
  await mongoose.disconnect();
  process.exit(0);
}

run();
