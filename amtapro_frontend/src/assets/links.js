 import logo from './logo.png'

import mechseiko from '../assets/mechseiko.png'

import amta from '../assets/amta.jpg'

import bime from '../assets/bime.jpg'

import saad from '../assets/saad.png'

import exposure from '../assets/global-exposure.jpg'

import connections from '../assets/real-connections.jpg'

import growth from '../assets/career-growth.jpg'

const amtaproImages = [
  exposure, connections, growth
];


const academies = [
  {id:1,name:"Future Stars Football Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/12.jpg",location:"Lagos, Nigeria",founded:"2010",director:"Coach Emmanuel Adebayo",contactEmail:"info@futurestarsfa.com",contactPhone:"+2348098765432",bio:"Developing young talent with world-class training and mentorship.",website:"https://futurestarsfa.com",socialMedia:{facebook:"https://facebook.com/futurestarsfa",instagram:"https://instagram.com/futurestarsfa"},facilities:{trainingGrounds:3,gym:true,medicalCenter:true,boarding:true},achievements:["2022 U17 National Champions","Best Youth Academy in West Africa (2023)"],playerCount:120,academyType:"Private",ageRange:"12–18",trialDates:"March & September",notableAlumni:["John Okoye","Samuel Adebanjo"],trainingPhilosophy:"Technical excellence and mental resilience",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Adidas Nigeria","NFF"]},
  {id:2,name:"Golden Boot Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/23.jpg",location:"Abuja, Nigeria",founded:"2015",director:"Coach Fatima Bello",contactEmail:"info@goldenbootfa.com",contactPhone:"+2348123456789",bio:"Focused on tactical intelligence and physical conditioning.",website:"https://goldenbootfa.com",socialMedia:{facebook:"https://facebook.com/goldenbootfa",instagram:"https://instagram.com/goldenbootfa"},facilities:{trainingGrounds:2,gym:true,medicalCenter:true,boarding:false},achievements:["2021 Abuja Youth League Champions","Top 3 Academy in Nigeria (2022)"],playerCount:95,academyType:"Private",ageRange:"13–19",trialDates:"April & October",notableAlumni:["Kemi Lawal","Zubairu Musa"],trainingPhilosophy:"Discipline, intelligence, and teamwork",languages:["English","Hausa"],scholarshipsAvailable:true,partnerships:["Nike Nigeria","Abuja FA"]},
  {id:3,name:"NextGen Soccer School",logo:"https://xsgames.co/randomusers/assets/avatars/male/34.jpg",location:"Port Harcourt, Nigeria",founded:"2018",director:"Coach Chuka Nwafor",contactEmail:"info@nextgensoccer.com",contactPhone:"+2348034567890",bio:"Empowering future professionals through data-driven training.",website:"https://nextgensoccer.com",socialMedia:{facebook:"https://facebook.com/nextgensoccer",instagram:"https://instagram.com/nextgensoccer"},facilities:{trainingGrounds:4,gym:true,medicalCenter:true,boarding:true},achievements:["2023 South-South Youth Cup Winners"],playerCount:110,academyType:"Club-affiliated",ageRange:"11–17",trialDates:"January & July",notableAlumni:["Samuel Eze"],trainingPhilosophy:"Modern football intelligence and analytics",languages:["English","Igbo"],scholarshipsAvailable:false,partnerships:["Rivers United FC","Umbro"]},
  {id:4,name:"Elite Kickers Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/45.jpg",location:"Ibadan, Nigeria",founded:"2012",director:"Coach Bayo Akin",contactEmail:"info@elitekickers.com",contactPhone:"+2348056781234",bio:"Producing disciplined players with strong technical foundations.",website:"https://elitekickers.com",socialMedia:{facebook:"https://facebook.com/elitekickers",instagram:"https://instagram.com/elitekickers"},facilities:{trainingGrounds:3,gym:true,medicalCenter:true,boarding:true},achievements:["Oyo State Youth League Winners 2022"],playerCount:100,academyType:"Private",ageRange:"12–18",trialDates:"February & August",notableAlumni:["Aisha Bello"],trainingPhilosophy:"Discipline and technical mastery",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Puma Nigeria","Oyo FA"]},
  {id:5,name:"Rising Eagles FC Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/56.jpg",location:"Osogbo, Nigeria",founded:"2016",director:"Coach Sola Adeyemi",contactEmail:"info@risingeaglesfc.com",contactPhone:"+2348076543210",bio:"Building confident players through holistic football education.",website:"https://risingeaglesfc.com",socialMedia:{facebook:"https://facebook.com/risingeaglesfc",instagram:"https://instagram.com/risingeaglesfc"},facilities:{trainingGrounds:2,gym:true,medicalCenter:true,boarding:false},achievements:["Osun Youth Cup Finalists 2023"],playerCount:85,academyType:"Private",ageRange:"13–18",trialDates:"May & November",notableAlumni:["David Ogunleye"],trainingPhilosophy:"Confidence, creativity, and community",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Osun FA","Peak Milk"]}
  ];


const footballers = [
  {id:1,fullName:"Tunde Okoro",username:"Tundsky",image:"https://xsgames.co/randomusers/assets/avatars/male/12.jpg",dob:"2007-03-15",nationality:"Nigeria",position:"Attacking Midfielder",preferredFoot:"Right",height:"1.75m",weight:"68kg",currentAcademy:"Future Stars Football Academy",playerBio:"Creative playmaker with elite vision and passing range.",careerStats:{appearances:45,goals:18,assists:22},highlightVideo:"https://youtube.com/watch?v=sampleTundeHighlights",achievements:["MVP - U17 National Cup 2022","Top Assists - Lagos Youth League"],agentContact:"agent@tundeokoro.com",socialMedia:{instagram:"https://instagram.com/tundeokoro10",twitter:"https://twitter.com/tundeokoro10"},languages:["English","Yoruba"],injuryHistory:["Minor ankle sprain - 2023"],playerRating:8.5,gender:"female", location: "Nigeria"},
  {id:2,fullName:"Kemi Lawal",username:"Kemo",image:"https://xsgames.co/randomusers/assets/avatars/male/23.jpg",dob:"2006-11-02",nationality:"Nigeria",position:"Winger",preferredFoot:"Left",height:"1.68m",weight:"60kg",currentAcademy:"Golden Boot Academy",playerBio:"Explosive winger with blistering pace and accurate crosses.",careerStats:{appearances:38,goals:12,assists:19},highlightVideo:"https://youtube.com/watch?v=kemilawalHighlights",achievements:["Best Female Player - Abuja Youth League 2023"],agentContact:"agent@kemilawal.com",socialMedia:{instagram:"https://instagram.com/kemilawal7",twitter:"https://twitter.com/kemilawal7"},languages:["English","Yoruba"],injuryHistory:[],playerRating:8.2,gender:"male", location: "Morocco"},
  {id:3,fullName:"Samuel Eze",username:"Samsky",image:"https://xsgames.co/randomusers/assets/avatars/male/34.jpg",dob:"2005-07-21",nationality:"Nigeria",position:"Center Back",preferredFoot:"Right",height:"1.85m",weight:"78kg",currentAcademy:"NextGen Soccer School",playerBio:"Commanding defender with aerial dominance and tactical awareness.",careerStats:{appearances:52,goals:5,assists:3},highlightVideo:"https://youtube.com/watch?v=samuelezeHighlights",achievements:["Best Defender - U18 National Cup 2022"],agentContact:"agent@samueleze.com",socialMedia:{instagram:"https://instagram.com/samueleze4",twitter:"https://twitter.com/samueleze4"},languages:["English","Igbo"],injuryHistory:["Hamstring strain - 2022"],playerRating:8.7,gender:"female", location: "Indiana"},
  {id:4,fullName:"Aisha Bello",username:"Golden",image:"https://xsgames.co/randomusers/assets/avatars/male/45.jpg",dob:"2008-01-10",nationality:"Nigeria",position:"Forward",preferredFoot:"Right",height:"1.70m",weight:"62kg",currentAcademy:"Elite Kickers Academy",playerBio:"Clinical finisher with great movement and composure.",careerStats:{appearances:40,goals:25,assists:8},highlightVideo:"https://youtube.com/watch?v=aishabelloHighlights",achievements:["Golden Boot - Lagos Youth League 2023"],agentContact:"agent@aishabello.com",socialMedia:{instagram:"https://instagram.com/aishabello9",twitter:"https://twitter.com/aishabello9"},languages:["English","Hausa"],injuryHistory:[],playerRating:9.0,gender:"male", location: "Ghana"},
  {id:5,fullName:"David Ogunleye",username:"mikopee",image:"https://xsgames.co/randomusers/assets/avatars/male/56.jpg",dob:"2006-05-30",nationality:"Nigeria",position:"Box-to-Box Midfielder",preferredFoot:"Right",height:"1.78m",weight:"70kg",currentAcademy:"Rising Eagles FC Academy",playerBio:"High-energy midfielder with excellent tackling and passing range.",careerStats:{appearances:48,goals:10,assists:15},highlightVideo:"https://youtube.com/watch?v=davidogunleyeHighlights",achievements:["Player of the Season - Osun Youth League 2022"],agentContact:"agent@davidogunleye.com",socialMedia:{instagram:"https://instagram.com/davidogunleye8",twitter:"https://twitter.com/davidogunleye8"},languages:["English","Yoruba"],injuryHistory:["Knee bruise - 2023"],playerRating:8.4,gender:"female", location:"South Africa"}
];

const locations = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
  "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau",
  "Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
  "Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait",
  "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
  "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru",
  "Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
  "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
  "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia",
  "South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey",
  "Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
  "Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const positions = ["Goalkeeper", "Sweeper", "Centre-Back", "Full-Back", "Wing-Back", "Defensive Midfielder", "Central Midfielder", "Attacking Midfielder", "Winger", "Striker", "Second Striker", "Centre Forward", "False 9"];

const headerLinks = [
    { name: "Field", to: "/" },
    { name: "News", to: "/news" },
    { name: "About", to: "/about" },
    { name: "Support", to: "/support" },
    { name: "Contact", to: "/contact" },
    { name: "Team", to: "/team" },
];

const email = "mailto:amtapro@gmail.com"

const mail = "amtapro@gmail.com"

const login = "/auth/login"

const register = "/auth/register"

const forgotPassword = "/auth/forgot-password"

const team = [
  {name:"Amta", src: amta, href:"https://wa.me/+2348109976317", role:"Founder"},
  {name:"MECHSEIKO", src: mechseiko, href:"https://devseiko.vercel.app", role:"Front-End Developer"},
  {name:"Simply saad", src: saad, href:"https://simplysaad.github.io", role:"Back-End Developer"},
  {name:"Dev Bime", src: bime, href:"https://tech-ink.vercel.app", role:"Designer"},
];
  
const quickLinks = [
    { name: "News", to: "/news" },
    { name: "About", to: "/about" },
    { name: "Support", to: "/support" },
    { name: "Contact", to: "/contact" },
    { name: "Team", to: "/team" },
    { name: "Back to top", to: "/" },
];

const socialLinks = [
    { name: "WhatsApp", to: "https://chat.whatsapp.com/JOzPp9sQ9XCAMkk9METGws?mode=ac_t" },
    { name: "X", to: "https://x.com/Amtagold1" },
];

const legalLinks = [
    { name: "Terms and Conditions", to: "/terms-of-service" },
    { name: "Privacy Policy", to: "/privacy-policy" },
];

const testimonials = [
  { name: "Amina Yusuf", role: "Sports Psychologist", quote: "Working with young athletes is rewarding, but seeing their confidence grow through this program has been truly inspiring.", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "David Eze", role: "Football Coach", quote: "This platform has transformed how I scout and train talent. It’s a game-changer for grassroots football.", image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Fatima Bello", role: "Athlete Parent", quote: "As a parent, I feel reassured knowing my child is supported by professionals who genuinely care about their growth.", image: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Tunde Bakare", role: "Talent Scout", quote: "I’ve discovered more promising players in the last six months than I did in the past two years. The network is unmatched.", image: "https://randomuser.me/api/portraits/men/28.jpg" },
  { name: "Kelechi Umeh", role: "Physiotherapist", quote: "Recovery and injury prevention have taken a leap forward. The collaboration between staff and athletes is seamless.", image: "https://randomuser.me/api/portraits/men/36.jpg" }
];


const sections = [
  {
    title: 'Global Exposure',
    description:
      'Showcase your skills to clubs, scouts, and agents across countries. AmtaPro breaks down borders so your talent can go worldwide.',
    cta: 'Explore Opportunities',
    object: amtaproImages[0],
    to: register
  },
  {
    title: 'Real Connections',
    description:
      'AmtaPro connects you directly with football clubs and fellow players. Build relationships and open doors to your future.',
    cta: 'Join Community',
    object: amtaproImages[1],
    to: socialLinks.find(link => link.name === "WhatsApp").to
  },
  {
    title: 'Career Growth',
    description:
      'AmtaPro gives you the tools to grow your career and chase your football dreams.',
    cta: 'Grow with Us',
    object: amtaproImages[2],
    to: register
  },
];


export {
    logo,
    headerLinks,
    quickLinks,
    socialLinks,
    legalLinks,
    email,
    mail,
    footballers,
    academies,
    login,
    register,
    forgotPassword,
    team,
    testimonials,
    amtaproImages,
    sections,
    locations,
    positions,
}