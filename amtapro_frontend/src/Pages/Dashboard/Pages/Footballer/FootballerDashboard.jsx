// File: src/pages/Dashboard/Pages/Footballer/FootballerDashboard.jsx
import React, { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as lucid from "lucide-react";
import DashboardHeader from "../../DashboardComponents/DashboardHeader";
import DashboardFooter from "../../DashboardComponents/DashboardFooter"
import Focus from "../../../../Components/Focus";
import clsx from 'clsx'
import Button from "../../DashboardComponents/Button";

const footballers = [
  {id:1,fullName:"Tunde Okoro",username:"Tundsky",image:"https://xsgames.co/randomusers/assets/avatars/male/12.jpg",dob:"2007-03-15",nationality:"Nigeria",position:"Attacking Midfielder",preferredFoot:"Right",height:"1.75m",weight:"68kg",currentAcademy:"Future Stars Football Academy",playerBio:"Creative playmaker with elite vision and passing range.",careerStats:{appearances:45,goals:18,assists:22},highlightVideo:"https://youtube.com/watch?v=sampleTundeHighlights",achievements:["MVP - U17 National Cup 2022","Top Assists - Lagos Youth League"],agentContact:"agent@tundeokoro.com",socialMedia:{instagram:"https://instagram.com/tundeokoro10",twitter:"https://twitter.com/tundeokoro10"},languages:["English","Yoruba"],injuryHistory:["Minor ankle sprain - 2023"],playerRating:8.5,gender:"female", location: "Nigeria"},
  {id:2,fullName:"Kemi Lawal",username:"Kemo",image:"https://xsgames.co/randomusers/assets/avatars/male/23.jpg",dob:"2006-11-02",nationality:"Nigeria",position:"Winger",preferredFoot:"Left",height:"1.68m",weight:"60kg",currentAcademy:"Golden Boot Academy",playerBio:"Explosive winger with blistering pace and accurate crosses.",careerStats:{appearances:38,goals:12,assists:19},highlightVideo:"https://youtube.com/watch?v=kemilawalHighlights",achievements:["Best Female Player - Abuja Youth League 2023"],agentContact:"agent@kemilawal.com",socialMedia:{instagram:"https://instagram.com/kemilawal7",twitter:"https://twitter.com/kemilawal7"},languages:["English","Yoruba"],injuryHistory:[],playerRating:8.2,gender:"male", location: "Morocco"},
  {id:3,fullName:"Samuel Eze",username:"Samsky",image:"https://xsgames.co/randomusers/assets/avatars/male/34.jpg",dob:"2005-07-21",nationality:"Nigeria",position:"Center Back",preferredFoot:"Right",height:"1.85m",weight:"78kg",currentAcademy:"NextGen Soccer School",playerBio:"Commanding defender with aerial dominance and tactical awareness.",careerStats:{appearances:52,goals:5,assists:3},highlightVideo:"https://youtube.com/watch?v=samuelezeHighlights",achievements:["Best Defender - U18 National Cup 2022"],agentContact:"agent@samueleze.com",socialMedia:{instagram:"https://instagram.com/samueleze4",twitter:"https://twitter.com/samueleze4"},languages:["English","Igbo"],injuryHistory:["Hamstring strain - 2022"],playerRating:8.7,gender:"female", location: "Indiana"},
  {id:4,fullName:"Aisha Bello",username:"Golden",image:"https://xsgames.co/randomusers/assets/avatars/male/45.jpg",dob:"2008-01-10",nationality:"Nigeria",position:"Forward",preferredFoot:"Right",height:"1.70m",weight:"62kg",currentAcademy:"Elite Kickers Academy",playerBio:"Clinical finisher with great movement and composure.",careerStats:{appearances:40,goals:25,assists:8},highlightVideo:"https://youtube.com/watch?v=aishabelloHighlights",achievements:["Golden Boot - Lagos Youth League 2023"],agentContact:"agent@aishabello.com",socialMedia:{instagram:"https://instagram.com/aishabello9",twitter:"https://twitter.com/aishabello9"},languages:["English","Hausa"],injuryHistory:[],playerRating:9.0,gender:"male", location: "Ghana"},
  {id:5,fullName:"David Ogunleye",username:"mikopee",image:"https://xsgames.co/randomusers/assets/avatars/male/56.jpg",dob:"2006-05-30",nationality:"Nigeria",position:"Box-to-Box Midfielder",preferredFoot:"Right",height:"1.78m",weight:"70kg",currentAcademy:"Rising Eagles FC Academy",playerBio:"High-energy midfielder with excellent tackling and passing range.",careerStats:{appearances:48,goals:10,assists:15},highlightVideo:"https://youtube.com/watch?v=davidogunleyeHighlights",achievements:["Player of the Season - Osun Youth League 2022"],agentContact:"agent@davidogunleye.com",socialMedia:{instagram:"https://instagram.com/davidogunleye8",twitter:"https://twitter.com/davidogunleye8"},languages:["English","Yoruba"],injuryHistory:["Knee bruise - 2023"],playerRating:8.4,gender:"female", location:"South Africa"}
];

const sections = ["Menu", "Connections", "Highlights", "Settings"];

const boardFootballerLinks = [
  //menu
  [{ name: "Dashboard", to: "/dashboard", lucid: lucid.Home },],
  //connections
  [{ name: "Acdemies", to: "/academies", lucid: lucid.House },
  { name: "Footballers", to: "/footballers", lucid: lucid.Users },
  { name: "Amtapro", to: "/contact", lucid: lucid.Contact },],
  //highlights
  [{name: "Images", lucid: lucid.Image}],
  [{name: "Videos", lucid: lucid.Video}],
  //settings
  [{ name: "Profile", to: "/profile", lucid: lucid.PersonStanding },
  { name: "Logout", to: "/", lucid: lucid.LogOut }]
];

const FootballerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const params = useParams();
  const date = new Date()

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [sidebarOpen]);

  const player = useMemo(() => {
    const formattedParamsName = params.footballerName.replace(/-/g," ");
    return footballers.find(player => player.username === formattedParamsName);
  }, [params.footballerName]);

  if (!player) {
    return <div>No such player not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} headBlur={sidebarOpen} footballer={player.username} />
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
                    {boardFootballerLinks.map((sectionLinks, index) => (
                        <div key={sections[index]}>
                            <h1 className="font-bold text-green-800 md:mb-3 mb-5">{sections[index].toUpperCase()}</h1>
                            <ul className="space-y-7 md:space-y-3">
                                {sectionLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                    to={link.to}
                                    className="flex items-center gap-3 hover:text-green-700 transition"
                                    >
                                    {link.lucid && <link.lucid size={20} />}
                                    {link.name.toUpperCase()}
                                    </Link>
                                </li>
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

        <main className={`flex-1 p-4 md:p-8 overflow-y-auto ${sidebarOpen ? "blur-sm" : "blur-none"}`}>
          <div className="mx-auto bg-white p-6 rounded-lg shadow-lg">

            {/* Profile Section */}
            <div className="flex flex-col items-center text-center">
              <img
                src={player.image}
                alt={`${player.fullName}'s profile`}
                className="w-28 h-28 rounded-full object-cover border-4 border-green-600 mb-4"
              />
              <h2 className="text-3xl font-bold text-black">{player.fullName}</h2>
              <p className="text-green-700 font-semibold">{player.position}</p>
              <p className="mt-2 text-sm text-gray-600">{player.playerBio}</p>
            </div>

            <hr className="my-6" />

            {/* Player Info Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
              <p><strong>Nationality:</strong> {player.nationality}</p>
              <p><strong>Date of Birth:</strong> {player.dob}</p>
              <p><strong>Height:</strong> {player.height}</p>
              <p><strong>Weight:</strong> {player.weight}</p>
              <p><strong>Preferred Foot:</strong> {player.preferredFoot}</p>
              <p><strong>Current Academy:</strong> {player.currentAcademy}</p>
              <p><strong>Agent Contact:</strong> {player.agentContact}</p>
              <p><strong>Player Rating:</strong> {player.playerRating}</p>
              <p><strong>Injury History:</strong> {player.injuryHistory.length > 0 ? player.injuryHistory.join(", ") : "None"}</p>
            </section>

            <hr className="my-6" />

            {/* Social Media */}
            <section>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Social Media</h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(player.socialMedia).map(([platform, url]) => (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-600 underline">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
            </section>

            <hr className="my-6" />

            {/* Career Stats */}
            <section>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Career Stats</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <p><strong>Appearances:</strong> {player.careerStats.appearances}</p>
                <p><strong>Goals:</strong> {player.careerStats.goals}</p>
                <p><strong>Assists:</strong> {player.careerStats.assists}</p>
              </div>
            </section>

            <hr className="my-6" />

            {/* Achievements */}
            <section>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Achievements</h3>
              <ul className="list-disc list-inside text-sm text-gray-800">
                {player.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <hr className="my-6" />

            {/* Highlight Video */}
            <section>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Highlight Video</h3>
              <div className="mb-4">
                <p className="mb-2 text-gray-600">Player Highlight Reel</p>
                <iframe
                  width="100%"
                  height="315"
                  src={player.highlightVideo.replace("watch?v=", "embed/")}
                  title={`${player.fullName} Highlight Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </section>

          </div>
        </main>

      </div>

      <DashboardFooter />
    </div>
  );
};

export default FootballerDashboard;