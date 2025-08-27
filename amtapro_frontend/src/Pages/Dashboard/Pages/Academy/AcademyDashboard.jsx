import React, { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as lucid from "lucide-react";
import { boardAcademyLinks, logo} from "../../assets/dashboardLinks";
import DashboardHeader from "../../DashboardComponents/DashboardHeader";
import DashboardFooter from "../../DashboardComponents/DashboardFooter";
import DashboardAside from "../../DashboardComponents/DashboardAside";
import Focus from "../../../../Components/Focus";

const academies = [
  {id:1,name:"Future Stars Football Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/12.jpg",location:"Lagos, Nigeria",founded:"2010",director:"Coach Emmanuel Adebayo",contactEmail:"info@futurestarsfa.com",contactPhone:"+2348098765432",bio:"Developing young talent with world-class training and mentorship.",website:"https://futurestarsfa.com",socialMedia:{facebook:"https://facebook.com/futurestarsfa",instagram:"https://instagram.com/futurestarsfa"},facilities:{trainingGrounds:3,gym:true,medicalCenter:true,boarding:true},achievements:["2022 U17 National Champions","Best Youth Academy in West Africa (2023)"],playerCount:120,academyType:"Private",ageRange:"12–18",trialDates:"March & September",notableAlumni:["John Okoye","Samuel Adebanjo"],trainingPhilosophy:"Technical excellence and mental resilience",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Adidas Nigeria","NFF"]},
  {id:2,name:"Golden Boot Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/23.jpg",location:"Abuja, Nigeria",founded:"2015",director:"Coach Fatima Bello",contactEmail:"info@goldenbootfa.com",contactPhone:"+2348123456789",bio:"Focused on tactical intelligence and physical conditioning.",website:"https://goldenbootfa.com",socialMedia:{facebook:"https://facebook.com/goldenbootfa",instagram:"https://instagram.com/goldenbootfa"},facilities:{trainingGrounds:2,gym:true,medicalCenter:true,boarding:false},achievements:["2021 Abuja Youth League Champions","Top 3 Academy in Nigeria (2022)"],playerCount:95,academyType:"Private",ageRange:"13–19",trialDates:"April & October",notableAlumni:["Kemi Lawal","Zubairu Musa"],trainingPhilosophy:"Discipline, intelligence, and teamwork",languages:["English","Hausa"],scholarshipsAvailable:true,partnerships:["Nike Nigeria","Abuja FA"]},
  {id:3,name:"NextGen Soccer School",logo:"https://xsgames.co/randomusers/assets/avatars/male/34.jpg",location:"Port Harcourt, Nigeria",founded:"2018",director:"Coach Chuka Nwafor",contactEmail:"info@nextgensoccer.com",contactPhone:"+2348034567890",bio:"Empowering future professionals through data-driven training.",website:"https://nextgensoccer.com",socialMedia:{facebook:"https://facebook.com/nextgensoccer",instagram:"https://instagram.com/nextgensoccer"},facilities:{trainingGrounds:4,gym:true,medicalCenter:true,boarding:true},achievements:["2023 South-South Youth Cup Winners"],playerCount:110,academyType:"Club-affiliated",ageRange:"11–17",trialDates:"January & July",notableAlumni:["Samuel Eze"],trainingPhilosophy:"Modern football intelligence and analytics",languages:["English","Igbo"],scholarshipsAvailable:false,partnerships:["Rivers United FC","Umbro"]},
  {id:4,name:"Elite Kickers Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/45.jpg",location:"Ibadan, Nigeria",founded:"2012",director:"Coach Bayo Akin",contactEmail:"info@elitekickers.com",contactPhone:"+2348056781234",bio:"Producing disciplined players with strong technical foundations.",website:"https://elitekickers.com",socialMedia:{facebook:"https://facebook.com/elitekickers",instagram:"https://instagram.com/elitekickers"},facilities:{trainingGrounds:3,gym:true,medicalCenter:true,boarding:true},achievements:["Oyo State Youth League Winners 2022"],playerCount:100,academyType:"Private",ageRange:"12–18",trialDates:"February & August",notableAlumni:["Aisha Bello"],trainingPhilosophy:"Discipline and technical mastery",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Puma Nigeria","Oyo FA"]},
  {id:5,name:"Rising Eagles FC Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/56.jpg",location:"Osogbo, Nigeria",founded:"2016",director:"Coach Sola Adeyemi",contactEmail:"info@risingeaglesfc.com",contactPhone:"+2348076543210",bio:"Building confident players through holistic football education.",website:"https://risingeaglesfc.com",socialMedia:{facebook:"https://facebook.com/risingeaglesfc",instagram:"https://instagram.com/risingeaglesfc"},facilities:{trainingGrounds:2,gym:true,medicalCenter:true,boarding:false},achievements:["Osun Youth Cup Finalists 2023"],playerCount:85,academyType:"Private",ageRange:"13–18",trialDates:"May & November",notableAlumni:["David Ogunleye"],trainingPhilosophy:"Confidence, creativity, and community",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Osun FA","Peak Milk"]}
];


const AcademyDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [sidebarOpen]);

  const params = useParams()
  const academy = useMemo(() => {
      const formattedParamsName = params.academyName.replace(/-/g," ");
      return academies.find(academy => academy.name === formattedParamsName);
    }, [params.footballerName]);

  if (!academy) {
    return <div>No such academy was found</div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} headBlur={sidebarOpen} academy={academy.name} />
      <Focus />

      <div className="flex flex-1 flex-col md:flex-row">
        <DashboardAside isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} asideLinks={boardAcademyLinks} />

        {/* Main Content */}
        <main className={`flex-1 p-4 md:p-8 overflow-y-auto ${sidebarOpen ? "blur-sm" : "blur-none"}`}>
          {/* <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg"> */}
          <div className="mx-auto bg-white p-6 rounded-lg shadow-lg">
            
            {/* Logo & Bio */}
            <div className="flex flex-col items-center text-center">
              <img
                src={academy.logo}
                alt="Academy Logo"
                className="w-28 h-28 rounded-full border-4 border-green-600 mb-4"
              />
              <h2 className="text-3xl font-bold text-black">{academy.name}</h2>
              <p className="text-green-700 font-semibold">{academy.location}</p>
              <p className="mt-2 text-sm">{academy.bio}</p>
              <div className="mt-4 flex gap-3">
                <button className="text-sm px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700">Edit Info</button>
                <button className="text-sm px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Add Achievement</button>
              </div>
            </div>

            <hr className="my-6" />

            {/* Info Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
              <p><strong>Founded:</strong> {academy.founded}</p>
              <p><strong>Director:</strong> {academy.director}</p>
              <p><strong>Email:</strong> {academy.contactEmail}</p>
              <p><strong>Phone:</strong> {academy.contactPhone}</p>
              <p><strong>Website:</strong> <a href={academy.website} className="text-green-600 underline" target="_blank" rel="noopener noreferrer">{academy.website}</a></p>
              <p><strong>Total Players:</strong> {academy.playerCount}</p>
            </section>

            <hr className="my-6" />

            {/* Social Media */}
            <section>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Social Media</h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(academy.socialMedia).map(([platform, url]) => (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-600 underline">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
            </section>

            <hr className="my-6" />

            {/* Facilities */}
            <section>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {Object.entries(academy.facilities).map(([facility, available]) => (
                  <p key={facility}>
                    <strong>{facility}:</strong> {available ? "✅ Yes" : "❌ No"}
                  </p>
                ))}
              </div>
            </section>

            <hr className="my-6" />

            {/* Achievements */}
            <section>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Achievements</h3>
              <ul className="list-disc list-inside text-sm">
                {academy.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

          </div>
        </main>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default AcademyDashboard;
