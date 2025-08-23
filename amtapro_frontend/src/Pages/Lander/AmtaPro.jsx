import React from 'react';
import Title from '../../Components/Title';
import { amtaproImages } from '../../assets/links';
import { motion } from 'framer-motion';
import Button from '../../Components/Button';
import { socialLinks, register } from '../../assets/links';

const AmtaPro = () => {
  const sections = [
    {
      title: 'Global Exposure',
      description:
        'Showcase your skills to clubs, scouts, and agents across continents. AmtaPro breaks down borders so your game can go worldwide.',
      cta: 'Explore Opportunities',
      object: amtaproImages[0],
      to: register
    },
    {
      title: 'Real Connections',
      description:
        'AmtaPro connects you directly with decision-makers and fellow players. Build relationships that matter and open doors to your future.',
      cta: 'Join Community',
      object: amtaproImages[1],
      to: socialLinks.find(link => link.name === "WhatsApp").to
    },
    {
      title: 'Career Growth',
      description:
        'From training resources to mentorship, AmtaPro gives you the tools to grow your career and chase your football dreams.',
      cta: 'Grow with Us',
      object: amtaproImages[2],
      to: register
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Title title="What is AmtaPro?" />
        <p className="text-lg text-center text-gray-600 mb-10">
          AmtaPro is more than just a platform, it's a movement. We empower footballers and scouts to connect, grow, and succeed. Here's how we stand out:
        </p>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-10"
          >
            {/* Mobile Layout */}
            <div className="flex flex-col-reverse xl:hidden rounded-xl shadow-2xl mb-15">
              <img
                src={section.object}
                alt={section.title}
                className={`${index === 0 ? 'size-full' : 'h-[300px]'} object-cover  rounded-b-xl`}
              />
              <div className="justify-center items-center text-center p-7">
                <h3 className="text-4xl font-bold text-green-700 mb-2">{section.title}</h3>
                <p className="text-lg text-paragragh mb-4">{section.description}</p>
                <Button text={section.cta} link={section.to}/>
              </div>
            </div>


            {/* Desktop Layout */}
            <div
              className={`hidden xl:flex items-center gap-10 ${
                index % 2 !== 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-1/2"
              >
                <img
                  src={section.object}
                  alt={section.title}
                  className={`w-full ${index === 0 ? "h-auto" : "h-[400px]"} rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out`}
                />
              </motion.div>
              <motion.div
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-1/2 text-left"
              >
                <h3 className="text-4xl font-bold text-green-700 mb-2">{section.title}</h3>
                <p className="text-lg text-gray-700 mb-4">{section.description}</p>
                <Button text={section.cta} link={section.to}/>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default AmtaPro;
