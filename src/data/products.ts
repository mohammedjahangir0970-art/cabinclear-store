export interface Review {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  verified?: boolean;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice: number;
  cost: number;
  profit: number;
  category: string;
  badge: string | null;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: string[];
  stock: number;
  reviews: Review[];
  cjSearch: string;
  problemSolved: string;
  tiktokHook: string;
}

export interface Bundle {
  id: number;
  name: string;
  products: number[];
  price: number;
  worth: number;
  savings: number;
  profit: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "car-cleaning-gel",
    name: "Car Cleaning Gel (Slime)",
    shortName: "Cleaning Gel",
    price: 6.49,
    originalPrice: 16.99,
    cost: 4.35,
    profit: 2.14,
    category: "Cleaning",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewCount: 2847,
    description: "The most satisfying car cleaning tool you'll ever use. Press this reusable gel into vents, cup holders, gear stick areas and all those tiny gaps where dust and crumbs hide. Peel it off and watch the dirt disappear. Reusable until it changes colour. Perfect for OCD car owners.",
    shortDescription: "Reusable cleaning gel that pulls dirt from vents, cup holders and gaps like magic.",
    features: [
      "Reusable until colour changes — no waste",
      "Reaches deep into vents and tiny crevices",
      "Picks up dust, crumbs, hair and debris",
      "Non-toxic and safe for all car interiors",
      "Satisfying ASMR cleaning experience",
      "Works on keyboards, laptops and electronics too"
    ],
    specifications: [
      { label: "Weight", value: "160g per tub" },
      { label: "Material", value: "Eco-friendly biodegradable gel" },
      { label: "Colours", value: "Yellow, Blue, Green, Pink" },
      { label: "Reusable", value: "Yes — until colour darkens" },
      { label: "Safe for", value: "All car interiors, plastics, leather" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600717535275-aa8f44994bf5?w=800&h=800&fit=crop"
    ],
    stock: 47,
    reviews: [
      { name: "James M.", avatar: "JM", rating: 5, date: "12 Jun 2026", text: "I was genuinely shocked how much dirt this pulled out of my vents. My 2018 Golf looks brand new inside. Already ordered 3 more for gifts.", verified: true },
      { name: "Sarah L.", avatar: "SL", rating: 5, date: "8 Jun 2026", text: "Best £6.49 I've ever spent on my car. Used it on the dashboard, gear stick area, and even my air vents. The satisfying peel is addictive!", verified: true },
      { name: "Oliver K.", avatar: "OK", rating: 4, date: "3 Jun 2026", text: "Great product, works exactly as described. Lost one star because I wish it came in a bigger tub. Will definitely reorder.", verified: true },
      { name: "Emma W.", avatar: "EW", rating: 5, date: "28 May 2026", text: "Bought for my boyfriend's birthday and he hasn't stopped cleaning his car since. Best passive-aggressive gift ever!", verified: true }
    ],
    cjSearch: "1005005995540884",
    problemSolved: "Dust and crumbs in impossible-to-reach vents and gaps",
    tiktokHook: "I was today years old when I found out about this"
  },
  {
    id: 2,
    slug: "seat-gap-filler",
    name: "Car Seat Gap Filler (2-Pack)",
    shortName: "Gap Filler",
    price: 7.99,
    originalPrice: 24.99,
    cost: 5.55,
    profit: 2.44,
    category: "Organisation",
    badge: "BESTSELLER",
    rating: 4.8,
    reviewCount: 1956,
    description: "Stop dropping your phone, keys, coins and food into the dreaded seat gap forever. This premium leather-look gap filler creates a seamless pocket that catches everything before it falls. Fits between seat and centre console of 99% of cars. Comes as a 2-pack for both driver and passenger sides.",
    shortDescription: "Premium leather-look gap filler that stops items falling into the seat gap. 2-pack for both sides.",
    features: [
      "Fits the gap between seat and centre console",
      "Catches phones, keys, coins, cards before they fall",
      "Premium leather-look finish blends with any interior",
      "Universal fit — works in 99% of cars",
      "2-pack included — both driver and passenger sides",
      "Easy 10-second installation — no tools needed"
    ],
    specifications: [
      { label: "Pack size", value: "2 pieces (driver + passenger)" },
      { label: "Material", value: "Premium PU leather with foam core" },
      { label: "Dimensions", value: "30 x 20 x 8 cm each" },
      { label: "Fits", value: "Most cars, SUVs, vans" },
      { label: "Installation", value: "Slide-in, no tools required" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e543b53a8?w=800&h=800&fit=crop"
    ],
    stock: 32,
    reviews: [
      { name: "David R.", avatar: "DR", rating: 5, date: "10 Jun 2026", text: "I've dropped my phone in the gap at least 50 times. This completely solved it. Installation took literally 5 seconds. Both sides fit perfectly in my BMW 3 Series.", verified: true },
      { name: "Priya S.", avatar: "PS", rating: 5, date: "5 Jun 2026", text: "My husband laughed at me for buying this. Two days later he asked me to order a set for his car too. The pockets are actually useful for parking cards and coins.", verified: true },
      { name: "Tom H.", avatar: "TH", rating: 4, date: "1 Jun 2026", text: "Great product, prevents the drop. Slightly tight fit in my Fiat 500 but works. Quality is surprisingly good for the price.", verified: true }
    ],
    cjSearch: "car seat gap filler organizer 2 pack leather",
    problemSolved: "Phones, keys and coins falling into the seat gap",
    tiktokHook: "Dropped my phone in the gap ONE LAST TIME"
  },
  {
    id: 3,
    slug: "pet-hair-remover",
    name: "Pet Hair Remover Roller",
    shortName: "Pet Hair Remover",
    price: 6.49,
    originalPrice: 19.99,
    cost: 4.52,
    profit: 1.97,
    category: "Cleaning",
    badge: "TRENDING",
    rating: 4.7,
    reviewCount: 3421,
    description: "The ultimate weapon against pet hair on car seats, carpets and upholstery. This reusable roller picks up dog and cat hair with a simple back-and-forth motion — no batteries, no refills, no waste. The self-cleaning base empties the roller with one dip. If you have a dog, you need this.",
    shortDescription: "Reusable pet hair roller that picks up fur from seats and carpets with zero waste. No refills needed.",
    features: [
      "Reusable — no batteries, no refills, no waste",
      "Picks up dog and cat hair from any fabric",
      "Self-cleaning base — one dip empties the roller",
      "Works on car seats, home sofas, carpets, clothes",
      "Better than vacuuming for embedded hair",
      "Eco-friendly — no disposable sticky sheets"
    ],
    specifications: [
      { label: "Material", value: "ABS plastic + nylon bristles" },
      { label: "Dimensions", value: "19 x 7 x 7 cm" },
      { label: "Weight", value: "170g" },
      { label: "Reusable", value: "Yes — unlimited uses" },
      { label: "Cleaning", value: "Self-cleaning base included" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518710843675-2540dd1593c5?w=800&h=800&fit=crop"
    ],
    stock: 23,
    reviews: [
      { name: "Jessica T.", avatar: "JT", rating: 5, date: "11 Jun 2026", text: "I have two Labradors and my car was a fur disaster. This roller is MAGIC. Picks up hair my Dyson misses. The self-cleaning base is genius.", verified: true },
      { name: "Mark B.", avatar: "MB", rating: 5, date: "7 Jun 2026", text: "Bought as a joke for my wife who complains about my dog's hair. She now uses it daily and says it's better than the £80 pet vacuum we bought.", verified: true },
      { name: "Chloe A.", avatar: "CA", rating: 4, date: "2 Jun 2026", text: "Works brilliantly on fabric seats. Less effective on leather but still decent. For the price it's unbeatable.", verified: true }
    ],
    cjSearch: "1005005543370362",
    problemSolved: "Pet hair embedded in car seats and carpets",
    tiktokHook: "My dog sheds everywhere — this is the ONLY thing that works"
  },
  {
    id: 4,
    slug: "dashboard-mat",
    name: "Silicone Car Dashboard Anti-Slip Mat",
    shortName: "Dashboard Mat",
    price: 5.99,
    originalPrice: 12.99,
    cost: 3.81,
    profit: 2.18,
    category: "Accessories",
    badge: null,
    rating: 4.6,
    reviewCount: 876,
    description: "Stop your phone, sunglasses, keys and coins sliding around the dashboard every time you turn. This premium silicone mat grips everything in place with zero adhesive — just lay it down and it stays. Heat-resistant, washable, and leaves zero residue. The perfect impulse buy that solves a daily annoyance.",
    shortDescription: "Premium silicone mat that grips phone, keys and sunglasses to your dashboard. No adhesive, zero residue.",
    features: [
      "Premium silicone grips phone, keys, sunglasses instantly",
      "No adhesive — leaves zero residue on dashboard",
      "Heat-resistant up to 200°C — won't melt in sun",
      "Washable — rinse under tap when dusty",
      "Universal size fits any car dashboard",
      "Non-slip even on sharp turns and braking"
    ],
    specifications: [
      { label: "Material", value: "Premium silicone rubber" },
      { label: "Dimensions", value: "27 x 15 cm" },
      { label: "Heat resistance", value: "Up to 200°C" },
      { label: "Adhesive", value: "None — natural grip" },
      { label: "Washable", value: "Yes — rinse under water" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&h=800&fit=crop"
    ],
    stock: 61,
    reviews: [
      { name: "Ryan P.", avatar: "RP", rating: 5, date: "9 Jun 2026", text: "My phone used to slide off the dash every time I turned a corner. This mat completely stopped it. Even works in the heatwave we've been having.", verified: true },
      { name: "Amy C.", avatar: "AC", rating: 4, date: "4 Jun 2026", text: "Does exactly what it says. Phone stays put. Sunglasses don't slide. Only wish it was slightly bigger for my wide dash.", verified: true }
    ],
    cjSearch: "1005007038876006",
    problemSolved: "Phone and items sliding off the dashboard",
    tiktokHook: "My phone used to slide off the dashboard EVERY turn"
  },
  {
    id: 5,
    slug: "seat-back-organizer",
    name: "Car Seat Back Organizer with Tablet Holder",
    shortName: "Seat Back Organizer",
    price: 9.99,
    originalPrice: 29.99,
    cost: 7.54,
    profit: 2.45,
    category: "Organisation",
    badge: "POPULAR",
    rating: 4.5,
    reviewCount: 1543,
    description: "Transform your back seat into an organised oasis. This premium back-of-seat organizer features a tablet holder for kids, 9+ storage pockets for toys, snacks, wipes and bottles, plus a foldable tray. Perfect for road trips, daily school runs, or keeping the kids entertained on long drives. Parents call it a 'life-saver'.",
    shortDescription: "Back-of-seat organizer with tablet holder, 9+ pockets and foldable tray. Road trip essential for parents.",
    features: [
      "Touch-screen tablet pocket for iPad and tablets",
      "9+ storage pockets for toys, snacks, bottles, wipes",
      "Foldable tray for drawing, snacks, activities",
      "Premium Oxford fabric — waterproof and durable",
      "Adjustable straps fit any car seat headrest",
      "Keeps back seat organised and clutter-free"
    ],
    specifications: [
      { label: "Material", value: "600D Oxford fabric + mesh" },
      { label: "Dimensions", value: "56 x 41 cm" },
      { label: "Pockets", value: "9+ including tablet holder" },
      { label: "Tablet fit", value: "Up to 10.5 inch iPad" },
      { label: "Waterproof", value: "Yes — spill-resistant coating" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&h=800&fit=crop"
    ],
    stock: 18,
    reviews: [
      { name: "Laura M.", avatar: "LM", rating: 5, date: "13 Jun 2026", text: "Bought for our trip to Cornwall with two kids under 5. The tablet holder was a godsend on the M25. Pockets fit snacks, wipes, and their small toys. Back seat has never been this tidy.", verified: true },
      { name: "Hassan A.", avatar: "HA", rating: 5, date: "8 Jun 2026", text: "My wife said it was the best £9.99 I've ever spent. Our 7-year-old can reach everything herself now. No more 'Dad, pass me my water' every 5 minutes.", verified: true },
      { name: "Nicole F.", avatar: "NF", rating: 4, date: "3 Jun 2026", text: "Great quality, lots of pockets. The tablet holder fits our iPad mini perfectly. Took 30 seconds to attach. Only wish the tray was a bit bigger.", verified: true }
    ],
    cjSearch: "1005006678236198",
    problemSolved: "Back seat chaos — toys, snacks, tablets everywhere",
    tiktokHook: "Road trip hack every parent needs"
  },
  {
    id: 6,
    slug: "usb-car-charger",
    name: "5-Port USB Car Charger with Cable Organizer",
    shortName: "USB Car Charger",
    price: 7.49,
    originalPrice: 22.99,
    cost: 5.15,
    profit: 2.34,
    category: "Accessories",
    badge: "NEW",
    rating: 4.7,
    reviewCount: 987,
    description: "Charge up to 5 devices simultaneously at full speed. This premium aluminium charger fits in your cup holder and features 5 fast-charging USB ports plus a built-in cable organizer that keeps cords tidy. The subtle LED indicators show charging status without being distracting at night. Perfect for families, Uber drivers, and anyone with too many devices.",
    shortDescription: "5-port fast USB charger with built-in cable organizer. Fits cup holder. Charges 5 devices at full speed.",
    features: [
      "5 fast-charging USB ports — charge 5 devices at once",
      "Built-in cable organizer keeps cords tidy",
      "Fits standard car cup holder perfectly",
      "Premium aluminium body — heat dissipates quickly",
      "Subtle LED indicators — not distracting at night",
      "Smart IC chip prevents overcharging and overheating"
    ],
    specifications: [
      { label: "Ports", value: "5 x USB-A fast charging" },
      { label: "Total output", value: "36W (7.2A max)" },
      { label: "Material", value: "Premium aluminium alloy" },
      { label: "LED", value: "Blue soft-glow indicators" },
      { label: "Safety", value: "Overcharge, overheat, short-circuit protection" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600717535275-aa8f44994bf5?w=800&h=800&fit=crop"
    ],
    stock: 41,
    reviews: [
      { name: "Kevin L.", avatar: "KL", rating: 5, date: "10 Jun 2026", text: "Family of 5 and we all need to charge our phones. This replaced a mess of adapters and cables. The cable organizer is a game-changer. Charges my Samsung at full speed.", verified: true },
      { name: "Sophie D.", avatar: "SD", rating: 4, date: "6 Jun 2026", text: "Works well, charges quickly. The 5 ports are a must for family cars. The blue LED is subtle and not distracting. Quality feels solid.", verified: true },
      { name: "Daniel R.", avatar: "DR", rating: 4, date: "1 Jun 2026", text: "Good charger, solid feel. The cable storage is a nice touch that most chargers don't have. Would recommend for anyone who does long drives with multiple devices.", verified: true }
    ],
    cjSearch: "5 port usb car charger fast charging aluminium",
    problemSolved: "Not enough charging ports for all family devices",
    tiktokHook: "5 devices, 1 charger, ZERO cable mess"
  },
  {
    id: 7,
    slug: "cup-holder-expander",
    name: "Car Cup Holder Expander & Adjustable Grip",
    shortName: "Cup Holder Expander",
    price: 7.99,
    originalPrice: 18.99,
    cost: 5.94,
    profit: 2.05,
    category: "Accessories",
    badge: null,
    rating: 4.6,
    reviewCount: 654,
    description: "Your reusable coffee cup doesn't fit the standard cup holder? This adjustable expander grips large tumblers, flasks and takeaway cups securely. The rotatable base allows easy access from any angle. Fits cups up to 1.2L. Perfect for Chilly's bottles, Starbucks tumblers, and all oversized drink containers.",
    shortDescription: "Adjustable cup holder expander that grips large tumblers, flasks and reusable bottles securely.",
    features: [
      "Adjustable grips fit cups from 7cm to 11cm diameter",
      "Rotatable base for easy access from any angle",
      "Fits Chilly's bottles, Starbucks tumblers, 1L+ flasks",
      "Secure grip — no wobbling or tipping on turns",
      "Premium ABS plastic with rubber grips",
      "Universal fit — works in 99% of car cup holders"
    ],
    specifications: [
      { label: "Fit range", value: "7cm to 11cm diameter" },
      { label: "Max cup size", value: "Up to 1.2L" },
      { label: "Material", value: "ABS plastic + rubber grips" },
      { label: "Rotation", value: "360° rotatable base" },
      { label: "Installation", value: "Drop-in — no tools" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=800&fit=crop"
    ],
    stock: 55,
    reviews: [
      { name: "Liam H.", avatar: "LH", rating: 5, date: "12 Jun 2026", text: "My Chilly's bottle finally has a home! No more rolling around the passenger footwell. The adjustable grips work perfectly and it looks smart.", verified: true },
      { name: "Hannah B.", avatar: "HB", rating: 4, date: "7 Jun 2026", text: "Works well for my large Costa reusable cup. Does what it says on the tin. Good quality, not flimsy plastic. Happy with the purchase.", verified: true },
      { name: "James T.", avatar: "JT", rating: 4, date: "2 Jun 2026", text: "Bought for my partner's Fiat 500 which has tiny cup holders. Now her big travel mug fits perfectly. Simple but effective product.", verified: true }
    ],
    cjSearch: "1005006959480635",
    problemSolved: "Reusable cups and large bottles don't fit standard cup holders",
    tiktokHook: "My Chilly's bottle finally fits!"
  },
  {
    id: 8,
    slug: "seat-belt-pads",
    name: "Car Seat Belt Padding & Clips (4-Piece Set)",
    shortName: "Seat Belt Pads",
    price: 5.99,
    originalPrice: 14.99,
    cost: 4.20,
    profit: 1.79,
    category: "Comfort",
    badge: null,
    rating: 4.4,
    reviewCount: 543,
    description: "Stop seat belts digging into your neck and shoulder on long drives. This 4-piece set includes 2 memory foam padding covers with soft plush fabric and 2 anti-slip clips that prevent the belt retracting and tightening. The memory foam moulds to your body for personalised comfort. Perfect for commuters, new drivers, and anyone who finds seat belts uncomfortable.",
    shortDescription: "Memory foam seat belt padding with anti-slip clips. 4-piece set for driver and passenger comfort.",
    features: [
      "Memory foam padding moulds to your body shape",
      "Soft plush fabric cover — no irritation on skin",
      "Anti-slip clips prevent belt retracting and tightening",
      "4-piece set — 2 pads + 2 clips for driver and passenger",
      "Universal fit — works with all car seat belts",
      "Machine washable covers for easy cleaning"
    ],
    specifications: [
      { label: "Set includes", value: "2 pads + 2 clips (4 pieces)" },
      { label: "Pad material", value: "Memory foam + plush fabric" },
      { label: "Clip material", value: "ABS plastic" },
      { label: "Pad dimensions", value: "22 x 7 cm" },
      { label: "Washable", value: "Yes — covers remove for washing" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518710843675-2540dd1593c5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=800&fit=crop"
    ],
    stock: 72,
    reviews: [
      { name: "Alex P.", avatar: "AP", rating: 5, date: "11 Jun 2026", text: "I have a sensitive collarbone area and seat belts always hurt on my 45-minute commute. These pads completely solved it. The memory foam is genuinely comfortable.", verified: true },
      { name: "Megan S.", avatar: "MS", rating: 4, date: "6 Jun 2026", text: "Great for the price. The clips are a nice touch — the belt used to always tighten on me. Now it stays at the right length. Comfortable on long drives.", verified: true }
    ],
    cjSearch: "car seat belt pad cover 4 pieces memory foam",
    problemSolved: "Seat belt digging into neck and shoulder on long drives",
    tiktokHook: "No more red marks from my seat belt"
  },
  {
    id: 9,
    slug: "boot-organizer",
    name: "Car Boot Cargo Organizer (Collapsible)",
    shortName: "Boot Organizer",
    price: 11.99,
    originalPrice: 34.99,
    cost: 9.30,
    profit: 2.69,
    category: "Organisation",
    badge: "POPULAR",
    rating: 4.8,
    reviewCount: 1234,
    description: "Transform your chaotic boot into a perfectly organised space. This collapsible cargo organizer has multiple compartments for groceries, emergency kit, tools, and shopping bags. It folds flat when not needed, expands in seconds when you need it. The non-slip base keeps it in place even on sharp turns. The most popular boot organisation product in our store.",
    shortDescription: "Collapsible boot organizer with multiple compartments. Folds flat when not needed. Non-slip base.",
    features: [
      "Multiple compartments for groceries, tools, emergency kit",
      "Collapsible — folds flat when not needed",
      "Non-slip base keeps it stable on turns and braking",
      "Rigid sides prevent bags tipping over",
      "Premium Oxford fabric — waterproof and durable",
      "Carry handles for easy transport to and from car"
    ],
    specifications: [
      { label: "Dimensions (open)", value: "50 x 32 x 32 cm" },
      { label: "Dimensions (folded)", value: "50 x 32 x 5 cm" },
      { label: "Compartments", value: "3 main + 6 side pockets" },
      { label: "Material", value: "600D Oxford fabric" },
      { label: "Waterproof", value: "Yes — water-resistant coating" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600717535275-aa8f44994bf5?w=800&h=800&fit=crop"
    ],
    stock: 15,
    reviews: [
      { name: "Chris W.", avatar: "CW", rating: 5, date: "14 Jun 2026", text: "My boot was a disaster of shopping bags, tools, and random stuff. This organizer completely transformed it. The compartments are perfectly sized. Folds flat when I need the full boot space.", verified: true },
      { name: "Rachel G.", avatar: "RG", rating: 5, date: "9 Jun 2026", text: "Bought for my Tesco runs and it's brilliant. Bags stay upright, nothing rolls around. The waterproof lining saved my boot when a milk bottle leaked. Highly recommend.", verified: true },
      { name: "Ben T.", avatar: "BT", rating: 4, date: "4 Jun 2026", text: "Great quality, sturdy construction. The non-slip base genuinely works — my old organizer used to slide everywhere. Only wish it had one more large compartment.", verified: true }
    ],
    cjSearch: "1005006994749119",
    problemSolved: "Chaotic boot with groceries, tools and bags rolling around",
    tiktokHook: "My boot was a mess until I found this"
  },
  {
    id: 10,
    slug: "car-vacuum",
    name: "Mini Cordless Handheld Car Vacuum",
    shortName: "Car Vacuum",
    price: 15.99,
    originalPrice: 39.99,
    cost: 13.45,
    profit: 2.54,
    category: "Cleaning",
    badge: null,
    rating: 4.6,
    reviewCount: 1876,
    description: "This compact 5000Pa handheld vacuum outperforms many £50+ models for car cleaning. USB-C rechargeable with 30-minute runtime — enough for a full interior clean. The crevice tool reaches under seats and into vents. The brush attachment tackles pet hair and upholstery. At £15.99, it's the best value car vacuum on the market by far.",
    shortDescription: "5000Pa cordless handheld vacuum with 30-min runtime. USB-C rechargeable. Outperforms £50+ models.",
    features: [
      "5000Pa suction — outperforms many £50+ vacuums",
      "USB-C rechargeable — 30-minute runtime per charge",
      "Crevice tool for under seats, vents and gaps",
      "Brush attachment for pet hair and upholstery",
      "Compact design — fits in glove box or door pocket",
      "HEPA filter traps dust and allergens"
    ],
    specifications: [
      { label: "Suction power", value: "5000Pa" },
      { label: "Battery", value: "2000mAh lithium-ion" },
      { label: "Runtime", value: "30 minutes per charge" },
      { label: "Charge time", value: "3-4 hours (USB-C)" },
      { label: "Weight", value: "450g" },
      { label: "Origin", value: "UK stock — ships in 3-5 days" }
    ],
    images: [
      "https://images.unsplash.com/photo-1600717535275-aa8f44994bf5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop"
    ],
    stock: 9,
    reviews: [
      { name: "Steven M.", avatar: "SM", rating: 5, date: "15 Jun 2026", text: "This £15.99 vacuum outperforms my £50 Dyson for car cleaning. The crevice tool gets under my seats perfectly. Battery lasts exactly 30 minutes which is enough for my whole car. Incredible value.", verified: true },
      { name: "Diana K.", avatar: "DK", rating: 5, date: "10 Jun 2026", text: "Bought sceptically because of the low price. Blown away. Picks up dog hair my main vacuum misses. The brush attachment is brilliant for upholstery. Charges quickly via USB-C.", verified: true },
      { name: "Jordan P.", avatar: "JP", rating: 4, date: "5 Jun 2026", text: "Great suction for the size. The 30-min runtime is accurate. Only downside is the dust bin is small so you need to empty it mid-clean for a very dirty car. Still unbeatable at this price.", verified: true }
    ],
    cjSearch: "mini cordless car vacuum handheld usb c rechargeable 5000pa",
    problemSolved: "Dust, crumbs and pet hair in car seats and carpets",
    tiktokHook: "This £15.99 vacuum outperforms my £50 Dyson for car cleaning"
  }
];

export const bundles: Bundle[] = [
  {
    id: 1,
    name: "The Starter Kit",
    products: [1, 4],
    price: 9.99,
    worth: 12.48,
    savings: 2.49,
    profit: 4.14,
    description: "Cleaning Gel + Dashboard Mat — the perfect entry point for a cleaner car"
  },
  {
    id: 2,
    name: "The Pet Owner",
    products: [3, 1],
    price: 10.99,
    worth: 12.98,
    savings: 1.99,
    profit: 4.16,
    description: "Pet Hair Remover + Cleaning Gel — for fur-covered car owners"
  },
  {
    id: 3,
    name: "The Complete Clean",
    products: [1, 3, 10],
    price: 25.99,
    worth: 28.97,
    savings: 2.98,
    profit: 7.00,
    description: "Cleaning Gel + Pet Remover + Vacuum — the full cleaning arsenal"
  },
  {
    id: 4,
    name: "The Organiser",
    products: [2, 5, 4],
    price: 20.99,
    worth: 23.97,
    savings: 2.98,
    profit: 7.31,
    description: "Gap Filler + Back Organizer + Mat — maximum organisation"
  },
  {
    id: 5,
    name: "The Road Trip",
    products: [5, 9, 8, 6],
    price: 32.99,
    worth: 39.96,
    savings: 6.97,
    profit: 11.51,
    description: "Back Organizer + Boot Organizer + Pads + Charger — family road trip essentials"
  }
];

export const FREE_SHIPPING_THRESHOLD = 20;
