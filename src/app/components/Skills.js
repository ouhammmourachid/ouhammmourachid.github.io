
import React from 'react';
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import Image from 'next/image';

const Skills = () => {
  return (
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
  );
};

export default Skills;
