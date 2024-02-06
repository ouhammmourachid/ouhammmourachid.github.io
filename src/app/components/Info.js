import Link from "next/link";
import Image from "next/image";
import rachid from "/public/rachid.png";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";

const Info = () => (
    <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Rachid Ouhammou
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Data Scientist and Machine Learning Enthusiast
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Passionate about deep learning and machine learning, I specialize in NLP, 
              GANs, and Computer Vision. My relentless pursuit of knowledge drives me to 
              innovate and contribute to impactful industry projects.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link href="https://github.com/ouhammmourachid"><AiFillGithub/></Link>
              <Link href="https://www.linkedin.com/in/rachid-ouhammou-383347202/"><AiFillLinkedin /></Link>
              <Link href="https://www.youtube.com/channel/UCosvmPdU1dVrR8bqYJ5kkdA"><AiFillYoutube /></Link>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={rachid} className="-mt-5 ml-2 scale-125 transform transition-all duration-500 ease-in-out hover:scale-110" />
            </div>
    </div>);

export default Info;
