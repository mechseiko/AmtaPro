import React, { useState, useMemo, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as lucid from "lucide-react";
import DashboardHeader from "../../DashboardComponents/DashboardHeader";
import DashboardFooter from "../../DashboardComponents/DashboardFooter"
import Focus from "../../../../Components/Focus";
import clsx from 'clsx'
import Button from "../../DashboardComponents/Button";
import { useAuth } from "../../../../context/AuthContext";
import axios from 'axios';

const footballers = [
  { id: 1, fullName: "Tunde Okoro", username: "Tundsky", image: "https://xsgames.co/randomusers/assets/avatars/male/12.jpg", dob: "2007-03-15", nationality: "Nigeria", position: "Attacking Midfielder", preferredFoot: "Right", height: "1.75m", weight: "68kg", currentAcademy: "Future Stars Football Academy", playerBio: "Creative playmaker with elite vision and passing range.", careerStats: { appearances: 45, goals: 18, assists: 22 }, highlightVideo: "https://youtube.com/watch?v=sampleTundeHighlights", achievements: ["MVP - U17 National Cup 2022", "Top Assists - Lagos Youth League"], agentContact: "agent@tundeokoro.com", socialMedia: { instagram: "https://instagram.com/tundeokoro10", twitter: "https://twitter.com/tundeokoro10" }, languages: ["English", "Yoruba"], injuryHistory: ["Minor ankle sprain - 2023"], playerRating: 8.5, gender: "female", location: "Nigeria" },
  { id: 2, fullName: "Kemi Lawal", username: "Kemo", image: "https://xsgames.co/randomusers/assets/avatars/male/23.jpg", dob: "2006-11-02", nationality: "Nigeria", position: "Winger", preferredFoot: "Left", height: "1.68m", weight: "60kg", currentAcademy: "Golden Boot Academy", playerBio: "Explosive winger with blistering pace and accurate crosses.", careerStats: { appearances: 38, goals: 12, assists: 19 }, highlightVideo: "https://youtube.com/watch?v=kemilawalHighlights", achievements: ["Best Female Player - Abuja Youth League 2023"], agentContact: "agent@kemilawal.com", socialMedia: { instagram: "https://instagram.com/kemilawal7", twitter: "https://twitter.com/kemilawal7" }, languages: ["English", "Yoruba"], injuryHistory: [], playerRating: 8.2, gender: "male", location: "Morocco" },
  { id: 3, fullName: "Samuel Eze", username: "Samsky", image: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg", dob: "2005-07-21", nationality: "Nigeria", position: "Center Back", preferredFoot: "Right", height: "1.85m", weight: "78kg", currentAcademy: "NextGen Soccer School", playerBio: "Commanding defender with aerial dominance and tactical awareness.", careerStats: { appearances: 52, goals: 5, assists: 3 }, highlightVideo: "https://youtube.com/watch?v=samuelezeHighlights", achievements: ["Best Defender - U18 National Cup 2022"], agentContact: "agent@samueleze.com", socialMedia: { instagram: "https://instagram.com/samueleze4", twitter: "https://twitter.com/samueleze4" }, languages: ["English", "Igbo"], injuryHistory: ["Hamstring strain - 2022"], playerRating: 8.7, gender: "female", location: "Indiana" },
  { id: 4, fullName: "Aisha Bello", username: "Golden", image: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg", dob: "2008-01-10", nationality: "Nigeria", position: "Forward", preferredFoot: "Right", height: "1.70m", weight: "62kg", currentAcademy: "Elite Kickers Academy", playerBio: "Clinical finisher with great movement and composure.", careerStats: { appearances: 40, goals: 25, assists: 8 }, highlightVideo: "https://youtube.com/watch?v=aishabelloHighlights", achievements: ["Golden Boot - Lagos Youth League 2023"], agentContact: "agent@aishabello.com", socialMedia: { instagram: "https://instagram.com/aishabello9", twitter: "https://twitter.com/aishabello9" }, languages: ["English", "Hausa"], injuryHistory: [], playerRating: 9.0, gender: "male", location: "Ghana" },
  { id: 5, fullName: "David Ogunleye", username: "mikopee", image: "https://xsgames.co/randomusers/assets/avatars/male/56.jpg", dob: "2006-05-30", nationality: "Nigeria", position: "Box-to-Box Midfielder", preferredFoot: "Right", height: "1.78m", weight: "70kg", currentAcademy: "Rising Eagles FC Academy", playerBio: "High-energy midfielder with excellent tackling and passing range.", careerStats: { appearances: 48, goals: 10, assists: 15 }, highlightVideo: "https://youtube.com/watch?v=davidogunleyeHighlights", achievements: ["Player of the Season - Osun Youth League 2022"], agentContact: "agent@davidogunleye.com", socialMedia: { instagram: "https://instagram.com/davidogunleye8", twitter: "https://twitter.com/davidogunleye8" }, languages: ["English", "Yoruba"], injuryHistory: ["Knee bruise - 2023"], playerRating: 8.4, gender: "female", location: "South Africa" }
];

const sections = ["Menu", "Connections", "Highlights", "Settings"];

const FootballerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [apiPlayer, setApiPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const date = new Date();
  const { user } = useAuth();

  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [sidebarOpen]);

  // Determine if we are viewing the logged-in user's profile
  const isOwnProfile = useMemo(() => {
    // Logic: if params.footballerName matches user.username
    if (user && user.username) {
      const formattedParamsName = params.footballerName.replace(/-/g, " ");
      // Case insensitive check
      return user.username.toLowerCase() === formattedParamsName.toLowerCase();
    }
    return false;
  }, [user, params.footballerName]);


  useEffect(() => {
    const fetchPlayerData = async () => {
      setLoading(true);
      if (isOwnProfile && user?._id) {
        try {
          // Fetch by User ID
          const response = await axios.get(`${BASE_URL}/athletes/${user._id}`);
          if (response.data.success && response.data.data.currentAthlete) {
            setApiPlayer(response.data.data.currentAthlete);
          }
        } catch (error) {
          console.error("Failed to fetch player data", error);
        }
      }
      setLoading(false);
    };

    fetchPlayerData();
  }, [isOwnProfile, user, BASE_URL]);


  const player = useMemo(() => {
    // 1. If we have API data, map it to the UI structure
    if (apiPlayer) {
      return {
        fullName: user?.name || apiPlayer.fullName || "User", // Fallback if name not in athlete profile
        username: user?.username || "User",
        image: apiPlayer.profilePic || "https://xsgames.co/randomusers/assets/avatars/male/12.jpg",
        dob: apiPlayer.dob ? new Date(apiPlayer.dob).toISOString().split('T')[0] : "N/A",
        nationality: apiPlayer.nationality || "N/A",
        position: apiPlayer.positions ? apiPlayer.positions.join(", ") : "N/A",
        preferredFoot: "Right", // Not in API yet
        height: apiPlayer.physical?.height ? `${apiPlayer.physical.height}cm` : "N/A",
        weight: apiPlayer.physical?.weight ? `${apiPlayer.physical.weight}kg` : "N/A",
        currentAcademy: "Free Agent", // Not in API yet
        playerBio: apiPlayer.bio || "No bio yet.",
        careerStats: { appearances: 0, goals: 0, assists: 0 }, // Not in API yet
        highlightVideo: "", // Not in API yet
        achievements: [], // Not in API yet
        agentContact: user?.emailAddress || "", // Use user email
        socialMedia: {}, // Not in API yet
        languages: ["English"], // Default
        injuryHistory: [],
        playerRating: "N/A",
        location: "N/A"
      };
    }

    // 2. Fallback to hardcoded list
    const formattedParamsName = params.footballerName.replace(/-/g, " ");
    return footballers.find(player => player.username.toLowerCase() === formattedParamsName.toLowerCase());
  }, [params.footballerName, apiPlayer, user]);

  const boardFootballerLinks = useMemo(() => [
    //menu
    [{ name: "Dashboard", to: `/footballer/${user?.username || params.footballerName}`, lucid: lucid.Home },], // Update dashboard link dynamically
    //connections
    [{ name: "Acdemies", to: "/academies", lucid: lucid.House },
    { name: "Footballers", to: "/footballers", lucid: lucid.Users },
    { name: "Amtapro", to: "/contact", lucid: lucid.Contact },],
    //highlights
    [{ name: "Images", lucid: lucid.Image }],
    [{ name: "Videos", lucid: lucid.Video }],
    //settings
    [{ name: "Profile", to: "/profile", lucid: lucid.PersonStanding },
    { name: "Logout", to: "/", lucid: lucid.LogOut }]
  ], [user, params.footballerName]);


  if (loading && isOwnProfile && !apiPlayer) {
    return <div className="p-10 text-center">Loading profile...</div>;
  }

  if (!player) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Player not found</h1>
        <p className="text-gray-600 mb-6">The player you are looking for does not exist.</p>
        <Link to="/" className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
          Go Home
        </Link>
      </div>
    );
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
            <lucid.X size={30} onClick={() => setSidebarOpen(false)} />
            <img src={import.meta.env.BASE_URL + "logo.png"} alt="Amtapro-logo" className='rounded-full size-25' />
          </div>

          <nav className="space-y-5">
            {boardFootballerLinks.map((sectionLinks, index) => (
              <div key={sections[index]}>
                <h1 className="font-bold text-green-800 md:mb-3 mb-5">{sections[index].toUpperCase()}</h1>
                <ul className="space-y-7 md:space-y-3">
                  {sectionLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to || "#"}
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
            <hr className='m-3' />
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
              {isOwnProfile && !apiPlayer && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                  You haven't set up your athlete profile yet. <br />
                  <span className="text-xs text-gray-500">(Edit profile features coming soon)</span>
                </div>
              )}
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
                {(!player.socialMedia || Object.keys(player.socialMedia).length === 0) ? "No social media linked." :
                  Object.entries(player.socialMedia).map(([platform, url]) => (
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
                {player.achievements.length === 0 ? "No acthievements listed." : player.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <hr className="my-6" />

            {/* Highlight Video */}
            <section>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Highlight Video</h3>
              <div className="mb-4">
                {player.highlightVideo ? (
                  <>
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
                  </>
                ) : (
                  <p className="text-gray-500">No highlight video available.</p>
                )}
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