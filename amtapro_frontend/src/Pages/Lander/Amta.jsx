import React from 'react';
import { motion } from 'framer-motion';
import amta from '../../assets/amta.jpg';
import { useNavigate } from 'react-router-dom';
import { quickLinks, register } from '../../assets/links';
import Button from '../../Components/Button';

const Amta = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="mx-auto px-5 py-10">


        {/* Mobile Layout */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col-reverse xl:hidden items-center gap-10"
        >
          {/* Profile Card */}
          <div className="bg-green-700 rounded-xl shadow-lg p-5 overflow-y-auto max-h-[460px] w-full">
            <img
              src={amta}
              alt="Amta"
              className="size-25 rounded-full mb-3 mx-auto"
            />
            <h2 className="text-2xl font-bold text-center text-white">Amta</h2>
            <p className="text-sm italic text-white text-center mb-3">Founder of AmtaPro</p>
            <hr className="my-2 border-green-300" />

            <div className="text-sm text-white space-y-1 mb-3">
              <p><strong>📍 Location:</strong> Nigeria</p>
              <p><strong>⚽ Position:</strong> Striker</p>
              <p><strong>🏆 Achievements:</strong> 2023 Golden Boot Winner, 2022 Youth League MVP</p>
            </div>

            <p className="text-sm text-gray-100 leading-snug mb-3">
              Amta is known for his explosive pace, and visionary leadership on and off the pitch. His journey to founding AmtaPro is a testament to passion, grit, and purpose.
            </p>

            <div onClick={() => navigate(quickLinks.find(link => link.name === "Contact").to)} className="text-center">
              <button className="bg-primary text-white py-2 px-4 rounded-full ">
                View Profile
              </button>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-[36px] font-bold mb-4 leading-tight">
              Your <strong className="text-primary">next big breakthrough</strong> could just be a click away.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Create an account in minutes, share your profile with the world and get discovered.
            </p>
            <Button text={"Get started"} link={register} />
          </div>
        </motion.div>




        {/* Desktop Layout */}
        <div className="hidden xl:flex flex-row items-center gap-10">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-1/2 text-left"
          >
            <h1 className="text-[50px] font-bold mb-4 leading-tight">
              Your <strong className="text-primary">next big breakthrough</strong> could just be a click away.
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Create an account in minutes, share your profile with the world and get discovered.
            </p>
            <Button text={"Get started"} link={register} />
          </motion.div>

          {/* Profile Card Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-5/12"
          >
            <div className="bg-green-700 rounded-xl shadow-lg p-5 overflow-y-auto max-h-[460px]">
              <img
                src={amta}
                alt="Amta"
                className="size-25 rounded-full mb-3 mx-auto"
              />
              <h2 className="text-2xl font-bold text-center text-white">Amta</h2>
              <p className="text-sm italic text-white text-center mb-3">Founder of AmtaPro</p>
              <hr className="my-2 border-green-300" />

              <div className="text-sm text-white space-y-1 mb-3">
                <p><strong>📍 Location:</strong> Nigeria</p>
                <p><strong>⚽ Position:</strong> Striker</p>
                <p><strong>🏆 Achievements:</strong> 2023 Golden Boot Winner, 2022 Youth League MVP</p>
              </div>

              <p className="text-sm text-gray-100 leading-snug mb-3">
                Amta is known for his explosive pace, and visionary leadership on and off the pitch. His journey to founding AmtaPro is a testament to passion, grit, and purpose.
              </p>

              <div onClick={() => navigate(quickLinks.find(link => link.name === "Contact").to)} className="text-center">
                <button className="bg-primary text-white py-2 px-4 rounded-full ">
                  View Profile
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Amta;
