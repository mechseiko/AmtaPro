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

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col-reverse xl:hidden items-center gap-10"
        >
          <div className="bg-green-700 rounded-xl shadow-lg p-5 overflow-hidden max-h-[460px] w-full">
            <img src={amta} alt="" />
          </div>

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



        <div className="hidden xl:flex flex-row items-center gap-10">
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

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-5/12"
          >
            <div className="bg-green-700 rounded-xl shadow-lg p-5 overflow-hidden max-h-[460px] w-full">
              <img src={amta} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Amta;
