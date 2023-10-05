"use client"
import Image from 'next/image'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useState } from "react";
import deved from "/public/dev-ed-wave.png";
import DarkModeButton from './components/DarkMode';
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";
import Link from 'next/link';

export default function Home() {

  return (
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 w-fit">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <DarkModeButton/>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.canva.com/design/DAFignrZyK0/kjwNOKBpJuONzY8zf3Xarw/view?utm_content=DAFignrZyK0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
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
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved}/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">My Journey in Data Science and Learning</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am on the exciting path of becoming a data scientist and machine 
              learning enthusiast. My journey has been filled with exploration and 
              learning in the fields of Natural Language Processing <span className="text-teal-500">(NLP)</span>, 
              Generative Adversarial Networks <span className="text-teal-500">(GANs)</span>, 
              and Computer Vision.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Let's explore my experiences and projects below to see how I've 
              been honing my skills and passion for data science.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pb-2 text-gray-700">
                Code your dream project
              </h3>
              <p className="py-2 text-slate-500">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">FrameWork for web</h4>
              <p className="text-gray-800 py-1">Django/Flask</p>
              <p className="text-gray-800 py-1">Spring boot</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Nextjs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pb-2 text-gray-700">
                Automate to Elevate
              </h3>
              <p className="py-2 text-slate-500">
                Do you have a process that can be automated? 
                Let's bring it to life.
              </p>
              <h4 className="py-4 text-teal-600">Programming language i use</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">php</p>
              <p className="text-gray-800 py-1">C++</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">R</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pb-2 text-gray-700">
                Transform Your Machine Learning 
                Ideas into Code
              </h3>
              <p className="py-2 text-slate-500">
                Are you interested in incorporating machine 
                learning concepts into your business?
              </p>
              <h4 className="py-4 text-teal-600">FrameWork i use</h4>
              <p className="text-gray-800 py-1">Tensorflow</p>
              <p className="text-gray-800 py-1">Pytorch</p>
              <p className="text-gray-800 py-1">Scikit-learn</p>
              <p className="text-gray-800 py-1">Nltk</p>
              <p className="text-gray-800 py-1">Spacy</p>
              <p className="text-gray-800 py-1">MediaPipe</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
  );
}
