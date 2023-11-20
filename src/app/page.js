"use client"
import Image from 'next/image'
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";
import Header from './components/Header';  
import Info from './components/Info';
import Skills from './components/Skills';
import { ThemeProvider } from 'next-themes';

export default function Home() {

  return (
    <ThemeProvider attribute="class">
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 w-fit">
        <section className="min-h-screen">
          <Header/>
          <Info/>
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
          <Skills/>
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
    </ThemeProvider>
  );
}
