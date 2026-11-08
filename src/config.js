export const SITE_CONFIG = {
  brandName: "QuantumNest",
  founderName: "Yug Patel",
  city: "Vancouver and Surrey, BC",
  phoneDisplay: "+1 (604) 603 7976",
  phoneRaw: "16046037976",
  whatsappNumber: "16046037976",
  email: "yug256450@gmail.com",
  calendarEmbedUrl: "https://cal.com/quantumnest/intro",
};

export const BUSINESS_CATEGORIES = [
  {
    id: "driving",
    name: "Driving school",
    badge: "Student road test prep",
    headline: "Passed test on first try",
    stat: "94 percent pass rate",
    description: "Book private behind the wheel driving lessons and DMV road test appointments online in seconds.",
    color: "text-blue-600 bg-blue-50 border-blue-200",
    options: [
      { id: "teen", label: "Teen 6 hour behind the wheel course", price: "$420" },
      { id: "adult", label: "Adult private driving lesson (2 hours)", price: "$160" },
      { id: "test", label: "DMV road test car rental and warm up", price: "$210" },
    ],
    availableSlots: ["Tomorrow 9:00 AM", "Tomorrow 2:00 PM", "Friday 11:30 AM"],
  },
  {
    id: "auto",
    name: "Auto shop",
    badge: "Brakes, oil, and engine care",
    headline: "Fast local vehicle repairs",
    stat: "Same day service available",
    description: "Pick your vehicle maintenance need, get instant honest pricing, and reserve your bay online.",
    color: "text-amber-600 bg-amber-50 border-amber-200",
    options: [
      { id: "oil", label: "Full synthetic oil and filter service", price: "$85" },
      { id: "brakes", label: "Front ceramic brake pads and rotors", price: "$280" },
      { id: "diag", label: "Complete engine computer diagnostics", price: "$110" },
    ],
    availableSlots: ["Today 1:30 PM", "Tomorrow 8:00 AM", "Tomorrow 10:30 AM"],
  },
  {
    id: "restaurant",
    name: "Restaurant",
    badge: "Wood fired kitchen and patio",
    headline: "Fresh local artisan dining",
    stat: "Tables ready in 15 minutes",
    description: "Browse tonight's seasonal menu, reserve a private dinner table, or place a quick pickup order.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    options: [
      { id: "pizza", label: "Truffle mushroom and prosciutto pizza", price: "$22" },
      { id: "pasta", label: "Handmade rigatoni braised beef ragu", price: "$24" },
      { id: "dessert", label: "Warm pistachio olive oil cake", price: "$12" },
    ],
    availableSlots: ["Tonight 6:30 PM (2 guests)", "Tonight 7:45 PM (4 guests)", "Tomorrow 8:00 PM"],
  },
  {
    id: "clinic",
    name: "Clinic",
    badge: "Family wellness and intake",
    headline: "Prompt private medical care",
    stat: "Zero waiting room delays",
    description: "Select your visit reason, complete private intake from your phone, and lock in your appointment.",
    color: "text-rose-600 bg-rose-50 border-rose-200",
    options: [
      { id: "wellness", label: "Annual comprehensive wellness visit", price: "$150" },
      { id: "urgent", label: "Acute illness and minor injury care", price: "$115" },
      { id: "telehealth", label: "Same day phone or video consultation", price: "$75" },
    ],
    availableSlots: ["Today 3:15 PM", "Tomorrow 9:45 AM", "Tomorrow 1:15 PM"],
  },
  {
    id: "salon",
    name: "Salon",
    badge: "Stylists and studio care",
    headline: "Custom cuts, color, and styling",
    stat: "Over 400 five star reviews",
    description: "Choose your favorite master stylist, pick luxury hair care treatments, and reserve your salon chair.",
    color: "text-purple-600 bg-purple-50 border-purple-200",
    options: [
      { id: "cut", label: "Signature precision haircut and blowout", price: "$85" },
      { id: "balayage", label: "Custom hand painted dimensional balayage", price: "$225" },
      { id: "treatment", label: "Deep moisture bond repair treatment", price: "$65" },
    ],
    availableSlots: ["Tomorrow 11:00 AM with Sarah", "Tomorrow 2:30 PM with David", "Saturday 10:00 AM"],
  },
];

// Alias for backwards compatibility with Hero
export const INDUSTRY_PREVIEWS = BUSINESS_CATEGORIES;
