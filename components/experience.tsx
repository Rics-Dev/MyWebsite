"use client"
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { LuGraduationCap } from "react-icons/lu";
import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from "@/context/theme-context";
import { client, getExperiences } from '@/client';
import { IconType } from 'react-icons';


interface ExperienceItem {
  title: string;
  location: string;
  icon: string;
  description: string;
  date: string;
}


export default function Experience() {
  const { ref } = useSectionInView('Experience', 0);
  const { theme } = useTheme();
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const experiences = await getExperiences();
        setExperiences(experiences);
        console.log(experiences);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchExperience();
  }, []);

  const iconComponents: Record<string, IconType> = {
    LuGraduationCap: LuGraduationCap,
    // Add other icon components here
  };

  const IconComponent = ({ name }: { name: string }) => {
    const Icon = iconComponents[name];
    if (!Icon) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }

    return <Icon />;
  };



  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-28">
      <h2 className="text-3xl font-medium capitalize mb-16 text-center">
        Mon Experience
      </h2>
      <VerticalTimeline lineColor='' className='!w-screen' >
        {experiences.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "0.5rem",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #172554"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={<IconComponent name={item.icon} />}
              iconStyle={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                border: "3px solid rgba(255, 255, 255)",
                background:
                  theme === "light" ? "#172554" : "#EBF8FF",
                fontSize: "1.5rem",
                color: theme === "light" ? "#fff" : "#172554",
              }}
            >
              <h3 className="font-bold capitalize ">{item.title}</h3>
              <p className="font-semibold !mt-0">{item.location}</p>
              <p className="!mt-5 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

