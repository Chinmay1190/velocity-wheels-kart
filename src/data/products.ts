
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Hyperspeed X1000RR",
    brand: "VelocityWheels",
    category: "sport",
    price: 1650000,
    description: "The Hyperspeed X1000RR is a cutting-edge superbike designed for racing enthusiasts who demand peak performance. With carbon fiber components and advanced aerodynamics, this bike delivers exceptional speed and handling on both track and road. The state-of-the-art electronics package includes multiple riding modes, traction control, and wheelie control to ensure optimal performance in all conditions.",
    shortDescription: "Ultimate racing machine with 1000cc engine and carbon fiber frame",
    specs: {
      engine: "1000cc Inline-4",
      power: "205 HP",
      torque: "113 Nm",
      weight: "196 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "16 liters",
      seatHeight: "830 mm"
    },
    rating: 4.9,
    reviewCount: 128,
    stock: 5,
    images: [
      "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg",
      "https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg",
      "https://images.pexels.com/photos/40904/bmw-k-1300-metallic-motorcycle-40904.jpeg"
    ],
    featured: true,
    colors: ["Red", "Black", "Blue"]
  },
  {
    id: "2",
    name: "Thunder Bolt 750",
    brand: "Lightning Motors",
    category: "cruiser",
    price: 1150000,
    description: "The Thunder Bolt 750 combines classic cruiser styling with modern performance. Its powerful V-twin engine delivers smooth power delivery and a distinctive exhaust note that turns heads. Featuring a comfortable ergonomic design, this bike is perfect for long-distance touring while maintaining the presence and authority expected from a premium cruiser.",
    shortDescription: "Classic cruiser with modern technology and ultimate comfort",
    specs: {
      engine: "750cc V-Twin",
      power: "76 HP",
      torque: "98 Nm",
      weight: "245 kg",
      topSpeed: "220 km/h",
      fuelCapacity: "19 liters",
      seatHeight: "720 mm"
    },
    rating: 4.7,
    reviewCount: 95,
    stock: 8,
    images: [
      "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg",
      "https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg",
      "https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg"
    ],
    colors: ["Matte Black", "Chrome Silver", "Burgundy"]
  },
  {
    id: "3",
    name: "NitroStrike 600",
    brand: "VelocityWheels",
    category: "sport",
    price: 980000,
    salePrice: 899999,
    description: "The NitroStrike 600 is the perfect entry into the world of supersport motorcycles. Built for agility and responsiveness, this middleweight sport bike features a high-revving engine and track-focused ergonomics. Advanced rider aids including switchable ABS and traction control make this an accessible option for riders looking to improve their skills.",
    shortDescription: "Agile middleweight sport bike with track-ready performance",
    specs: {
      engine: "599cc Inline-4",
      power: "118 HP",
      torque: "69 Nm",
      weight: "187 kg",
      topSpeed: "262 km/h",
      fuelCapacity: "17 liters",
      seatHeight: "820 mm"
    },
    rating: 4.6,
    reviewCount: 87,
    stock: 12,
    images: [
      "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg",
      "https://images.pexels.com/photos/5462303/pexels-photo-5462303.jpeg",
      "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg"
    ],
    new: true,
    colors: ["Racing Blue", "Matte Gray", "Neon Yellow"]
  },
  {
    id: "4",
    name: "Phantom GT 1400",
    brand: "RoyalRide",
    category: "touring",
    price: 2100000,
    description: "The Phantom GT 1400 is the ultimate touring motorcycle, designed for riders who demand luxury and performance on long journeys. Featuring a powerful 1400cc engine, electronically adjustable suspension, and a comprehensive infotainment system with GPS navigation, this bike transforms long-distance riding into a premium experience. The spacious panniers and top box provide ample storage for extended trips.",
    shortDescription: "Luxury touring motorcycle with advanced comfort features",
    specs: {
      engine: "1400cc Inline-6",
      power: "160 HP",
      torque: "170 Nm",
      weight: "305 kg",
      topSpeed: "250 km/h",
      fuelCapacity: "25 liters",
      seatHeight: "750 mm"
    },
    rating: 4.9,
    reviewCount: 63,
    stock: 3,
    images: [
      "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg",
      "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg",
      "https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg"
    ],
    featured: true,
    colors: ["Midnight Blue", "Pearl White", "Metallic Gray"]
  },
  {
    id: "5",
    name: "Desert Hawk 900 ADV",
    brand: "TrailMaster",
    category: "adventure",
    price: 1350000,
    description: "The Desert Hawk 900 ADV is engineered to tackle any terrain with confidence. This adventure motorcycle combines highway comfort with off-road capability thanks to its long-travel suspension and robust chassis. The tall windscreen and comfortable upright riding position make long journeys a pleasure, while the advanced electronics suite includes off-road specific riding modes to enhance control in challenging conditions.",
    shortDescription: "Go-anywhere adventure bike with all-terrain capability",
    specs: {
      engine: "898cc Parallel Twin",
      power: "105 HP",
      torque: "92 Nm",
      weight: "230 kg",
      topSpeed: "220 km/h",
      fuelCapacity: "23 liters",
      seatHeight: "850 mm"
    },
    rating: 4.8,
    reviewCount: 74,
    stock: 6,
    images: [
      "https://images.pexels.com/photos/67909/pexels-photo-67909.jpeg",
      "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
      "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg"
    ],
    colors: ["Desert Sand", "Military Green", "Matte Black"]
  },
  {
    id: "6",
    name: "Urban Glide 400",
    brand: "CityRider",
    category: "naked",
    price: 520000,
    description: "The Urban Glide 400 is a versatile naked bike perfect for city commuting and weekend joyrides. With its upright riding position and nimble handling, this bike excels in urban environments while still providing enough power for exciting rides on twisty roads. The LED lighting package and digital display add modern touches to this practical yet fun motorcycle.",
    shortDescription: "Versatile and agile naked bike for urban riding",
    specs: {
      engine: "399cc Parallel Twin",
      power: "44 HP",
      torque: "37 Nm",
      weight: "168 kg",
      topSpeed: "180 km/h",
      fuelCapacity: "14 liters",
      seatHeight: "785 mm"
    },
    rating: 4.5,
    reviewCount: 112,
    stock: 15,
    images: [
      "https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg",
      "https://images.pexels.com/photos/5610630/pexels-photo-5610630.jpeg",
      "https://images.pexels.com/photos/2935592/pexels-photo-2935592.jpeg"
    ],
    new: true,
    colors: ["Orange", "White", "Teal"]
  },
  {
    id: "7",
    name: "Sonic Lightning 1000",
    brand: "ElectroRider",
    category: "electric",
    price: 1800000,
    description: "The Sonic Lightning 1000 represents the future of motorcycling with its all-electric powertrain. This innovative machine delivers instant torque and near-silent operation with zero emissions. Multiple riding modes and regenerative braking allow riders to customize performance and range for different scenarios. The advanced battery technology provides impressive range on a single charge, eliminating range anxiety.",
    shortDescription: "High-performance electric superbike with futuristic design",
    specs: {
      motor: "Permanent Magnet AC",
      power: "177 HP",
      torque: "200 Nm",
      weight: "220 kg",
      topSpeed: "250 km/h",
      range: "270 km",
      chargingTime: "45 minutes (fast charge)"
    },
    rating: 4.8,
    reviewCount: 42,
    stock: 4,
    images: [
      "https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg",
      "https://images.pexels.com/photos/11805867/pexels-photo-11805867.jpeg",
      "https://images.pexels.com/photos/8294554/pexels-photo-8294554.jpeg"
    ],
    featured: true,
    colors: ["Electric Blue", "Matte Silver", "Neon Green"]
  },
  {
    id: "8",
    name: "Retro Classic 650",
    brand: "HeritageMotors",
    category: "classic",
    price: 750000,
    description: "The Retro Classic 650 combines vintage aesthetics with modern reliability. This classic motorcycle features timeless styling cues like spoked wheels, a teardrop tank, and a single round headlight, while incorporating modern conveniences such as fuel injection and ABS. The air-cooled parallel-twin engine produces a satisfying exhaust note and smooth power delivery that suits the bike's character perfectly.",
    shortDescription: "Modern classic with retro styling and reliable performance",
    specs: {
      engine: "649cc Parallel Twin",
      power: "47 HP",
      torque: "52 Nm",
      weight: "202 kg",
      topSpeed: "170 km/h",
      fuelCapacity: "14 liters",
      seatHeight: "790 mm"
    },
    rating: 4.7,
    reviewCount: 89,
    stock: 10,
    images: [
      "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg",
      "https://images.pexels.com/photos/2549942/pexels-photo-2549942.jpeg",
      "https://images.pexels.com/photos/541450/pexels-photo-541450.jpeg"
    ],
    colors: ["British Racing Green", "Vintage Red", "Chrome"]
  },
  {
    id: "9",
    name: "Track Demon 1200",
    brand: "SpeedForce",
    category: "sport",
    price: 2350000,
    description: "The Track Demon 1200 is a no-compromise superbike designed primarily for track use but remains street legal. Using lightweight materials throughout and featuring aerodynamic winglets derived from MotoGP racing, this motorcycle is built for pure speed and cornering performance. The comprehensive electronics package includes cornering ABS, launch control, and a quick-shifter for lightning-fast gear changes.",
    shortDescription: "Track-focused superbike with racing technology",
    specs: {
      engine: "1198cc V4",
      power: "221 HP",
      torque: "131 Nm",
      weight: "188 kg",
      topSpeed: "320 km/h",
      fuelCapacity: "16 liters",
      seatHeight: "845 mm"
    },
    rating: 5.0,
    reviewCount: 36,
    stock: 2,
    images: [
      "https://images.pexels.com/photos/1309433/pexels-photo-1309433.jpeg",
      "https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg",
      "https://images.pexels.com/photos/2747583/pexels-photo-2747583.jpeg"
    ],
    featured: true,
    colors: ["Racing Red", "Carbon Black", "Championship Yellow"]
  },
  {
    id: "10",
    name: "Vortex 750 Streetfighter",
    brand: "RoadWarrior",
    category: "naked",
    price: 1050000,
    salePrice: 950000,
    description: "The Vortex 750 Streetfighter combines aggressive styling with high performance in a naked bike package. The upright riding position and wide handlebars provide excellent control for aggressive street riding, while the powerful engine delivers thrilling acceleration. Semi-active suspension adapts to road conditions automatically, ensuring optimal handling in all situations.",
    shortDescription: "Aggressive naked bike with streetfighter styling",
    specs: {
      engine: "749cc Triple",
      power: "140 HP",
      torque: "85 Nm",
      weight: "192 kg",
      topSpeed: "265 km/h",
      fuelCapacity: "15 liters",
      seatHeight: "825 mm"
    },
    rating: 4.6,
    reviewCount: 58,
    stock: 7,
    images: [
      "https://images.pexels.com/photos/5801981/pexels-photo-5801981.jpeg",
      "https://images.pexels.com/photos/2519390/pexels-photo-2519390.jpeg",
      "https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg"
    ],
    colors: ["Urban Gray", "Toxic Green", "Stealth Black"]
  },
  {
    id: "11",
    name: "Cruiser King 1800",
    brand: "AmericanLegend",
    category: "cruiser",
    price: 1850000,
    description: "The Cruiser King 1800 is a premium heavyweight cruiser motorcycle embodying the spirit of open road freedom. Its massive V-twin engine produces enormous torque from low revs, making highway cruising effortless. The low seat height, forward controls, and pulled-back handlebars create a relaxed riding position ideal for covering long distances in comfort and style.",
    shortDescription: "Heavyweight cruiser with massive V-twin engine",
    specs: {
      engine: "1802cc V-Twin",
      power: "95 HP",
      torque: "160 Nm",
      weight: "358 kg",
      topSpeed: "190 km/h",
      fuelCapacity: "21 liters",
      seatHeight: "695 mm"
    },
    rating: 4.8,
    reviewCount: 65,
    stock: 4,
    images: [
      "https://images.pexels.com/photos/595808/pexels-photo-595808.jpeg",
      "https://images.pexels.com/photos/1413414/pexels-photo-1413414.jpeg",
      "https://images.pexels.com/photos/210043/pexels-photo-210043.jpeg"
    ],
    colors: ["Midnight Black", "Cherry Red", "Two-tone Blue/Silver"]
  },
  {
    id: "12",
    name: "Rally Pro 450",
    brand: "DirtDevil",
    category: "offroad",
    price: 650000,
    description: "The Rally Pro 450 is a competition-ready off-road motorcycle designed for serious enthusiasts and professional racers. The lightweight frame and powerful engine combine to deliver exceptional performance on rough terrain. Advanced suspension components with long travel soak up jumps and bumps with ease, while the hydraulic clutch provides precise control in technical sections.",
    shortDescription: "Competition-ready dirt bike for serious off-road riding",
    specs: {
      engine: "449cc Single",
      power: "63 HP",
      torque: "45 Nm",
      weight: "112 kg",
      suspension: "310mm travel",
      fuelCapacity: "8 liters",
      seatHeight: "960 mm"
    },
    rating: 4.9,
    reviewCount: 47,
    stock: 8,
    images: [
      "https://images.pexels.com/photos/163407/motorcycle-racer-racing-race-163407.jpeg",
      "https://images.pexels.com/photos/1493586/pexels-photo-1493586.jpeg",
      "https://images.pexels.com/photos/2948258/pexels-photo-2948258.jpeg"
    ],
    new: true,
    colors: ["Factory Yellow", "Red/White", "Monster Green"]
  },
  {
    id: "13",
    name: "Carbon Racer VR",
    brand: "TrackMaster",
    category: "accessories",
    price: 65000,
    description: "The Carbon Racer VR helmet represents the pinnacle of motorcycle helmet technology. Constructed with a full carbon fiber shell for maximum strength with minimal weight, this premium helmet offers superior protection and comfort. The advanced ventilation system keeps riders cool during intense riding, while the anti-fog visor provides clear vision in all weather conditions.",
    shortDescription: "Premium carbon fiber racing helmet with advanced features",
    specs: {
      material: "Carbon Fiber",
      weight: "1250g",
      certification: "ECE 22.05, DOT, SNELL",
      features: "Pinlock ready, Emergency quick release, Multiple vents",
      sizes: "XS-XXL"
    },
    rating: 4.9,
    reviewCount: 83,
    stock: 12,
    images: [
      "https://images.pexels.com/photos/9817255/pexels-photo-9817255.jpeg",
      "https://images.pexels.com/photos/2868335/pexels-photo-2868335.jpeg",
      "https://images.pexels.com/photos/9557797/pexels-photo-9557797.jpeg"
    ],
    colors: ["Gloss Carbon", "Matte Carbon", "Race Graphic"]
  },
  {
    id: "14",
    name: "Pro Tech Riding Jacket",
    brand: "SafeRider",
    category: "accessories",
    price: 28000,
    salePrice: 24999,
    description: "The Pro Tech Riding Jacket combines style with comprehensive protection for serious motorcyclists. Featuring CE-approved armor at the shoulders, elbows, and back, this jacket offers excellent impact protection without compromising comfort. The waterproof yet breathable construction keeps you dry in wet conditions while allowing heat and moisture to escape during intense riding.",
    shortDescription: "All-season motorcycle jacket with premium protection",
    specs: {
      material: "Cordura 600D, leather panels",
      armor: "CE Level 2 shoulders, elbows, back",
      waterproofing: "Removable waterproof liner",
      ventilation: "Chest and back vents with YKK zippers",
      sizes: "S-3XL"
    },
    rating: 4.7,
    reviewCount: 124,
    stock: 20,
    images: [
      "https://images.pexels.com/photos/6130359/pexels-photo-6130359.jpeg",
      "https://images.pexels.com/photos/6130355/pexels-photo-6130355.jpeg",
      "https://images.pexels.com/photos/6130391/pexels-photo-6130391.jpeg"
    ],
    colors: ["Black", "Black/Red", "Black/Blue"]
  },
  {
    id: "15",
    name: "Race Pro Gloves",
    brand: "MotoGrip",
    category: "accessories",
    price: 8500,
    description: "The Race Pro Gloves offer premium protection and tactile control for sport and track riding. Constructed with kangaroo leather palms for maximum feel and goatskin for flexibility, these gloves incorporate carbon fiber knuckle protection and palm sliders for comprehensive crash protection. Pre-curved fingers and external seams prevent fatigue and discomfort during long rides.",
    shortDescription: "Premium racing gloves with maximum protection",
    specs: {
      material: "Kangaroo leather palm, goatskin construction",
      protection: "Carbon fiber knuckles, SuperFabric® reinforcement",
      features: "Touch screen compatible, palm sliders, wrist retention",
      sizes: "S-2XL"
    },
    rating: 4.8,
    reviewCount: 76,
    stock: 15,
    images: [
      "https://images.pexels.com/photos/3414348/pexels-photo-3414348.jpeg",
      "https://images.pexels.com/photos/8721308/pexels-photo-8721308.jpeg",
      "https://images.pexels.com/photos/7518660/pexels-photo-7518660.jpeg"
    ],
    colors: ["Black", "Red", "Blue"]
  },
  {
    id: "16",
    name: "SkyView 360 Action Camera",
    brand: "RideVision",
    category: "accessories",
    price: 35000,
    description: "The SkyView 360 Action Camera is specially designed for motorcyclists who want to capture every moment of their ride in stunning detail. With 4K resolution, electronic image stabilization, and a weatherproof design, this camera delivers exceptional footage regardless of conditions. The helmet and motorcycle mounts included allow for versatile mounting options.",
    shortDescription: "4K action camera with motorcycle-specific features",
    specs: {
      resolution: "4K at 60fps, 1080p at 120fps",
      stabilization: "Advanced electronic stabilization",
      batteryLife: "4 hours recording time",
      storage: "MicroSD up to 256GB",
      connectivity: "WiFi, Bluetooth, GPS"
    },
    rating: 4.6,
    reviewCount: 53,
    stock: 12,
    images: [
      "https://images.pexels.com/photos/3617717/pexels-photo-3617717.jpeg",
      "https://images.pexels.com/photos/9039695/pexels-photo-9039695.jpeg",
      "https://images.pexels.com/photos/3060232/pexels-photo-3060232.jpeg"
    ],
    new: true
  },
  {
    id: "17",
    name: "UltraPerform Racing Boots",
    brand: "TrackMaster",
    category: "accessories",
    price: 22000,
    description: "The UltraPerform Racing Boots provide maximum protection and feel for sport and track riders. Featuring a microfiber and TPU construction with replaceable toe sliders, these boots are designed to withstand the demands of aggressive riding. The hinged ankle system allows natural movement while preventing hyperextension in a crash.",
    shortDescription: "Professional-grade racing boots with advanced protection",
    specs: {
      material: "Microfiber and TPU construction",
      protection: "Shin guard, ankle support system, toe sliders",
      closure: "Zipper with velcro security strap",
      features: "Shock-absorbing heel, replaceable parts",
      sizes: "38-48 EU"
    },
    rating: 4.9,
    reviewCount: 41,
    stock: 8,
    images: [
      "https://images.pexels.com/photos/1200959/pexels-photo-1200959.jpeg",
      "https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg",
      "https://images.pexels.com/photos/3195648/pexels-photo-3195648.jpeg"
    ],
    colors: ["Black", "Black/White", "Black/Red"]
  },
  {
    id: "18",
    name: "Tornado 1100 Special Edition",
    brand: "VelocityWheels",
    category: "sport",
    price: 1950000,
    description: "The Tornado 1100 Special Edition is a limited-production superbike featuring exclusive components and a unique color scheme. The Öhlins suspension, Brembo brakes, and lightweight forged wheels complement the powerful engine to deliver an extraordinary riding experience. Each bike comes with a numbered plaque and certificate of authenticity.",
    shortDescription: "Limited edition superbike with premium components",
    specs: {
      engine: "1103cc V4",
      power: "214 HP",
      torque: "124 Nm",
      weight: "184 kg",
      topSpeed: "310 km/h",
      fuelCapacity: "16 liters",
      production: "Limited to 500 units worldwide"
    },
    rating: 5.0,
    reviewCount: 12,
    stock: 1,
    images: [
      "https://images.pexels.com/photos/4062231/pexels-photo-4062231.jpeg",
      "https://images.pexels.com/photos/2949296/pexels-photo-2949296.jpeg",
      "https://images.pexels.com/photos/13693627/pexels-photo-13693627.jpeg"
    ],
    featured: true,
    colors: ["Special Edition Tricolor"]
  },
  {
    id: "19",
    name: "Mountain Explorer 850",
    brand: "TrailMaster",
    category: "adventure",
    price: 1280000,
    description: "The Mountain Explorer 850 is designed for riders who want to venture beyond paved roads. This adventure motorcycle offers a perfect balance of on-road comfort and off-road capability with its robust chassis and advanced electronic suspension. The tall windscreen, heated grips, and cruise control make long-distance travel comfortable in all conditions.",
    shortDescription: "Versatile adventure motorcycle for all terrains",
    specs: {
      engine: "853cc Parallel Twin",
      power: "95 HP",
      torque: "88 Nm",
      weight: "229 kg",
      groundClearance: "250 mm",
      fuelCapacity: "23 liters",
      seatHeight: "860 mm"
    },
    rating: 4.7,
    reviewCount: 68,
    stock: 5,
    images: [
      "https://images.pexels.com/photos/5604966/pexels-photo-5604966.jpeg",
      "https://images.pexels.com/photos/8526608/pexels-photo-8526608.jpeg",
      "https://images.pexels.com/photos/3378570/pexels-photo-3378570.jpeg"
    ],
    new: true,
    colors: ["Adventure Green", "Titanium Gray", "Expedition White"]
  },
  {
    id: "20",
    name: "Satellite Navigation Pro",
    brand: "RideGuide",
    category: "accessories",
    price: 28000,
    description: "The Satellite Navigation Pro is a motorcycle-specific GPS unit designed to withstand all weather conditions while providing clear, glove-friendly operation. The anti-glare screen remains visible in direct sunlight, and the robust mounting system absorbs vibrations for a stable view. Preloaded with motorcycle-friendly routes and points of interest, this unit enhances every journey.",
    shortDescription: "Weatherproof motorcycle GPS with advanced routing",
    specs: {
      display: "5-inch anti-glare touchscreen",
      waterproofing: "IPX7 rating",
      batteryLife: "8 hours",
      connectivity: "Bluetooth for helmet audio, smartphone integration",
      features: "Motorcycle-specific routing, group ride tracking"
    },
    rating: 4.5,
    reviewCount: 59,
    stock: 10,
    images: [
      "https://images.pexels.com/photos/3855953/pexels-photo-3855953.jpeg",
      "https://images.pexels.com/photos/9597729/pexels-photo-9597729.jpeg",
      "https://images.pexels.com/photos/3068097/pexels-photo-3068097.jpeg"
    ]
  }
];

// Additional products up to 55 can be added here following the same structure as above
