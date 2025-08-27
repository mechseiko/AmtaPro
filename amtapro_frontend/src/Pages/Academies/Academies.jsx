import React from 'react';
import { academies } from '../../assets/links';
import Title from '../../Components/Title'
import {Link} from 'react-router-dom';

const Academies = () => {
  return (
    <div className="bg-background p-2 mt-5">
      <Title title={`Explore over ${academies.length}0+ Academies and Scouts`}/>
      <section className="smx-auto px-5 mb-5">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {academies.map((academy) => (
            <article
              key={academy.id}
              className="bg-white border border-green-700 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="mb-5 flex flex-col items-center text-center">
                <img src={academy.logo} alt="" className='w-24 h-24 rounded-full border-4 border-green-700 object-cover'/>
                <h2 className="text-2xl font-bold text-green-800">
                  {academy.name}
                </h2>
              </div>

              <div className="space-y-2 text-sm">
                <p>📌 <span className="font-medium">Location:</span> {academy.location}</p>
                <p>📧 <span className="font-medium">Email:</span> {academy.contactEmail}</p>
                <p>
                  🔗 <span className="font-medium">Social:</span>{" "}
                  <a
                    href={`https://${academy.socialMedia}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {academy.socialLink}
                  </a>
                </p>
                <Link to={`/academy/${academy.name.replace(/ /g, "-")}`}><button className="mt-2 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300">
                  View Profile
                </button></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Academies;