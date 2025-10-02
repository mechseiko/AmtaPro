import React, { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as lucid from "lucide-react";
import {logo} from "../../assets/dashboardLinks";
import DashboardHeader from "../../DashboardComponents/DashboardHeader";
import DashboardFooter from "../../DashboardComponents/DashboardFooter";
import Focus from "../../../../Components/Focus";
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from "../../DashboardComponents/Button";
import Section from '../../DashboardComponents/Section'
import Footballers from "../../../Footballers/Footballers";
import Academies from "../../../Academies/Academies";

const academies = [
  {id:1,name:"Future Stars Football Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/12.jpg",location:"Lagos, Nigeria",founded:"2010",director:"Coach Emmanuel Adebayo",contactEmail:"info@futurestarsfa.com",contactPhone:"+2348098765432",bio:"Developing young talent with world-class training and mentorship.",website:"https://futurestarsfa.com",socialMedia:{facebook:"https://facebook.com/futurestarsfa",instagram:"https://instagram.com/futurestarsfa"},facilities:{trainingGrounds:3,gym:true,medicalCenter:true,boarding:true},achievements:["2022 U17 National Champions","Best Youth Academy in West Africa (2023)"],playerCount:120,academyType:"Private",ageRange:"12–18",trialDates:"March & September",notableAlumni:["John Okoye","Samuel Adebanjo"],trainingPhilosophy:"Technical excellence and mental resilience",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Adidas Nigeria","NFF"]},
  {id:2,name:"Golden Boot Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/23.jpg",location:"Abuja, Nigeria",founded:"2015",director:"Coach Fatima Bello",contactEmail:"info@goldenbootfa.com",contactPhone:"+2348123456789",bio:"Focused on tactical intelligence and physical conditioning.",website:"https://goldenbootfa.com",socialMedia:{facebook:"https://facebook.com/goldenbootfa",instagram:"https://instagram.com/goldenbootfa"},facilities:{trainingGrounds:2,gym:true,medicalCenter:true,boarding:false},achievements:["2021 Abuja Youth League Champions","Top 3 Academy in Nigeria (2022)"],playerCount:95,academyType:"Private",ageRange:"13–19",trialDates:"April & October",notableAlumni:["Kemi Lawal","Zubairu Musa"],trainingPhilosophy:"Discipline, intelligence, and teamwork",languages:["English","Hausa"],scholarshipsAvailable:true,partnerships:["Nike Nigeria","Abuja FA"]},
  {id:3,name:"NextGen Soccer School",logo:"https://xsgames.co/randomusers/assets/avatars/male/34.jpg",location:"Port Harcourt, Nigeria",founded:"2018",director:"Coach Chuka Nwafor",contactEmail:"info@nextgensoccer.com",contactPhone:"+2348034567890",bio:"Empowering future professionals through data-driven training.",website:"https://nextgensoccer.com",socialMedia:{facebook:"https://facebook.com/nextgensoccer",instagram:"https://instagram.com/nextgensoccer"},facilities:{trainingGrounds:4,gym:true,medicalCenter:true,boarding:true},achievements:["2023 South-South Youth Cup Winners"],playerCount:110,academyType:"Club-affiliated",ageRange:"11–17",trialDates:"January & July",notableAlumni:["Samuel Eze"],trainingPhilosophy:"Modern football intelligence and analytics",languages:["English","Igbo"],scholarshipsAvailable:false,partnerships:["Rivers United FC","Umbro"]},
  {id:4,name:"Elite Kickers Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/45.jpg",location:"Ibadan, Nigeria",founded:"2012",director:"Coach Bayo Akin",contactEmail:"info@elitekickers.com",contactPhone:"+2348056781234",bio:"Producing disciplined players with strong technical foundations.",website:"https://elitekickers.com",socialMedia:{facebook:"https://facebook.com/elitekickers",instagram:"https://instagram.com/elitekickers"},facilities:{trainingGrounds:3,gym:true,medicalCenter:true,boarding:true},achievements:["Oyo State Youth League Winners 2022"],playerCount:100,academyType:"Private",ageRange:"12–18",trialDates:"February & August",notableAlumni:["Aisha Bello"],trainingPhilosophy:"Discipline and technical mastery",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Puma Nigeria","Oyo FA"]},
  {id:5,name:"Rising Eagles FC Academy",logo:"https://xsgames.co/randomusers/assets/avatars/male/56.jpg",location:"Osogbo, Nigeria",founded:"2016",director:"Coach Sola Adeyemi",contactEmail:"info@risingeaglesfc.com",contactPhone:"+2348076543210",bio:"Building confident players through holistic football education.",website:"https://risingeaglesfc.com",socialMedia:{facebook:"https://facebook.com/risingeaglesfc",instagram:"https://instagram.com/risingeaglesfc"},facilities:{trainingGrounds:2,gym:true,medicalCenter:true,boarding:false},achievements:["Osun Youth Cup Finalists 2023"],playerCount:85,academyType:"Private",ageRange:"13–18",trialDates:"May & November",notableAlumni:["David Ogunleye"],trainingPhilosophy:"Confidence, creativity, and community",languages:["English","Yoruba"],scholarshipsAvailable:true,partnerships:["Osun FA","Peak Milk"]}
];

const date = new Date();

const sections = ["Menu", "Connections", "Highlights", "Settings"];

const boardAcademyLinks = [
  [{ name: "Dashboard", lucid: lucid.SquareActivity },],

  [{ name: "Footballers", lucid: lucid.Users },
  { name: "Academies", lucid: lucid.House },],

  [{name: "Images", lucid: lucid.Image},
  {name: "Videos", lucid: lucid.Video}],

  [{ name: "Profile", lucid: lucid.PersonStanding },
  { name: "Logout", lucid: lucid.LogOut }]
];

const AcademyDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menu, setMenu] = useState("Dashboard")
  console.log(menu)

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [sidebarOpen]);

    // SEND PARAMS FROM LANDING PAGE
    const params = useParams()
    const academy = useMemo(() => {
      const formattedParamsName = params.academyName.replace(/-/g," ");
      return academies.find(academy => academy.name === formattedParamsName);
    }, [params.footballerName]);
    if (!academy) {
      return <div>No such academy was found</div>;
    }
    // END

  //           :root {
  //   --background: #e8f5e9;
  //   --foreground: hsl(102 47% 20%);
  //   --card: hsl(98, 89%, 75%);
  //   --muted: hsl(0 0% 20%);
  //   --paragragh: gray;
  //   --primary: hsl(98, 89%, 45%); /*buttons and highlights */
  //   --primary-foreground: hsl(120, 46%, 80%);
  //   --border: hsl(107 33% 60%);
  // }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} academy={academy.name} />
      <Focus />

      <div className="flex flex-1 flex-col md:flex-row">
          <div
                className={clsx(
                'fixed inset-0 bg-opacity-50 z-30 transition-opacity duration-400',
                {
                    'opacity-100 pointer-events-auto': sidebarOpen,
                    'opacity-0 pointer-events-none': !sidebarOpen,
                }
                )}
                onClick={() => setSidebarOpen(false)}
            ></div>
          <aside
                  className={clsx(
                  'fixed overflow-auto top-0 left-0 h-full w-[75%] sm:w-72 bg-white p-7 md:p-5 shadow-md z-9997 transform transition-transform duration-300',
                  {
                      '-translate-x-full': !sidebarOpen,
                      'translate-x-0': sidebarOpen,
                  }
                  )}
              >                
              <div className='flex flex-row-reverse justify-between items-center mb-5'>
                  <lucid.X size={30} onClick={() => setSidebarOpen(false)}/>
                  <img src={logo} alt="Amtapro-logo" className='rounded-full size-25'/>
              </div>

              <nav className="space-y-5">
                  {boardAcademyLinks.map((sectionLinks, index) => (
                    <div key={sections[index]}>
                        <h1 className="font-bold text-green-800 md:mb-3 mb-5">{sections[index]}</h1>
                        <ul className="space-y-7 md:space-y-3">
                            {sectionLinks.map((link, index) => (
                              <button
                              key={index}
                              onClick={() => setMenu(link.name)}
                              className="flex items-center gap-3 text-black hover:text-green-700 transition"
                              >
                              {link.lucid && <link.lucid size={20} />}
                              {link.name.toUpperCase()}
                              </button>
                            ))}
                        </ul>
                    </div>
                  ))}
                  <hr className='m-3'/>
                  {
                      date.getFullYear() === 2025 ?
                      <h3>© AmtaPro 2025</h3>
                      :
                      <h3>© AmtaPro 2025–{date.getFullYear()}</h3>
                  }
              </nav>
          </aside>

        {/* Main Content */}
        <main className={`flex-1 p-5 md:p-8 mx-auto bg-gray-50`}> 

            {/* DASHBOARD */}
            {menu === "Dashboard" && 
            <Section>
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
            </Section>}

            {/* FOOTBALLERS */}
            {menu === "Footballers" && 
            <section>
             {/* Fetch footballers from post backend page */}
             <Footballers />
            </section>}

            {/* ACADEMIES */}
            {menu === "Academies" && 
            <section>
             {/* Fetch academies from post backend page */}
             <Academies />
            </section>}

            {/* IMAGES */}
            {menu === "Images" && 
            <Section>
              <Swiper
                spaceBetween={30}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                modules={[Pagination, Autoplay]}
              >
                {sections.map((section, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-green-700 p-3 mx-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                      { sections.image ? <img
                          src={section.image}
                          alt={section.description}
                          className="w-full h-full rounded-full mx-auto mb-4 object-cover"
                        /> :
                            <div className='rounded-full size-16 bg-primary mx-auto mb-4 object-cover'></div>
                      }
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Section>
            }

            {/* VIDEOS */}
            {menu === "Videos" && 
            <Section>
              <Swiper
                spaceBetween={30}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                modules={[Pagination, Autoplay]}
              >
                {sections.map((section, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-green-700 p-3 mx-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                      { sections.image ? <img
                          src={section.image}
                          alt={section.description}
                          className="w-full h-full rounded-full mx-auto mb-4 object-cover"
                        /> :
                            <div className='rounded-full size-16 bg-primary mx-auto mb-4 object-cover'></div>
                        }
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Section>
            }

            {/* PROFILE */}
            {menu === "Profile" &&
            <Section>
               <img
                src={academy.logo}
                alt="Academy Logo"
                className="w-28 h-28 rounded-full border-4 border-green-600 mb-4"
              />
              <p><strong>Founded:</strong> {academy.founded}</p>
              <p><strong>Director:</strong> {academy.director}</p>
              <p><strong>Email:</strong> {academy.contactEmail}</p>
              <p><strong>Phone:</strong> {academy.contactPhone}</p>
              <p><strong>Website:</strong> <a href={academy.website} className="text-green-600 underline" target="_blank" rel="noopener noreferrer">{academy.website}</a></p>
              <p><strong>Total Players:</strong> {academy.playerCount}</p>
            </Section>
            }

        </main>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default AcademyDashboard;
