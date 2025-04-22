const About = () => {
  const contact = [{
    href: "mailto:masonaplumlee@gmail.com",
    src: "img/icons/contacts/gmail.png"
  }, {
    href: "https://twitter.com/masonplumlee",
    src: "img/icons/contacts/twitter.png"
  }, {
    href: "https://www.facebook.com/MasonPlumlee24/",
    src: "img/icons/contacts/facebook.png"
  }, {
    href: "https://www.youtube.com/channel/UCELBx0eOrOR0w7wbMv3bDJQ",
    src: "img/icons/contacts/youtube.png"
  }, {
    href: "https://www.linkedin.com/in/mason-plumlee/",
    src: "img/icons/contacts/linkedin.png"
  }]
  return (
    <>
      <div className="w-20 h-20 md:w-28 md:h-28 my-4 md:my-6">
        <img className="w-full rounded-8" src="/img/ui/avatar.jpg" alt="Mason's logo" />
      </div>
      <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1 cursor-text">
        <div><span className="font-bold text-4xl">Mason Plumlee</span></div>
        <div className="font-normal ml-1"><span className="text-pink-600 font-bold italic">Veteran NBA Center | NCAA Champion | Team-First Leader</span></div>
        <div className="text-sm">Over 10 years of pro experience built on hustle, high IQ play, and team culture.</div>
      </div>
      <div className="mt-4 relative my-8 pt-px bg-black dark:bg-white w-32 w-48">
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <div className="mb-2 mx-auto flex justify-center items-center gap-4">
        {contact.map((item, index) => <a key={index} href={item.href} className="cursor-pointer"><img className='w-8 h-8' src={item.src} /></a>)}
      </div>
      <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list cursor-text">
        <li style={{ listStyle: `"✔"`, paddingLeft: "10px" }}>Hi, I’m Mason Plumlee—a professional basketball player with over a decade in the NBA. I’ve played for the Nets, Blazers, Nuggets, Pistons, Hornets, Clippers, and now with the Phoenix Suns ☀️.</li>
        <li style={{ listStyle: `"✔"`, paddingLeft: "10px" }}>🏫 A proud Duke Blue Devil and 2010 NCAA Champion, I built game around smart decision-making, unselfish play, and team-first leadership.</li>
        <li className="mt-3" style={{ listStyle: `"✔"`, paddingLeft: "10px" }}>On the court: 🎯 Efficient. 💪 Physical. 🧠 Relia</li>
        <li className="mt-3" style={{ listStyle: `"✔"`, paddingLeft: "10px" }}>Off the court: 🤝 Grounded. 🎒 Curious. 💬 Community-minded.</li>
      </ul>
    </>
  )
}

const Childhood = () => {
  const childhood_list = [
    {
      name: "INDIANA",
      date: "1990 ~ 1995",
      img: "indiana.jpg",
      description: [
        "I was born March 5, 1990 in Fort Wayne, Indiana and spent my early childhood in West Lafayette, near the campus of Purdue University. My family lived in an old farm house on the land that my grandfather worked.",
        "It was in West Lafayette that I first learned to play basketball. My grandfather put up a basket at his house and my dad taught us drills in the driveway. Both of my parents played college ball and taught me everything when I was young. My father, Perky, played at Tennessee Tech and my mom, Leslie, played at Purdue. We tried a lot of sports growing up and other after school activities, but basketball was my love.",
        "I spent a lot of time with my grandfather during those early years. He was a WWII Navy veteran, a retired Agriculture professor and a full-time farmer. We helped with various chores around the farm. He instilled in me a deep appreciation and respect for hard and smart work; on a farm, you don’t punch a clock -- you work until the task is complete."
      ],      
    },
    {
      name: "WARSAW, IN",
      date: "1996 ~ 2001",
      img: "warsaw.jpg",
      description: [
        "Just before first grade, my family moved north to Warsaw. That’s where I grew up until high school and it is where my parents still live today. People ask me what it was like growing up in a small town. Life mostly revolved around family; playing sports and having fun with my siblings. I have an older brother Miles, younger brother Marshall and younger sister, Madeline. We did almost everything together and remain very close. I attended Jefferson Elementary School and have great memories of my principal Denny Duncan. He was the first person to tell me he was going to watch me play basketball in college one day.",
        "Swimming was a big part of my life going into middle school. I competed at the Junior Olympics in the individual medley and 100m breaststroke. Unfortunately swimming was the same season as basketball, so it was difficult to balance both sports. I knew from an early age that basketball was my passion. Indiana is a basketball state and an ideal place to grow up as a young player. My brothers and I spent our childhood playing together, which included plenty of 1-on-1 with Miles. My parents sacrificed to send us to summer camps and make a lot of opportunities possible through basketball.",
      ]
    },
    {
      name: "AAU",
      date: "2001 ~ 2005",
      img: "aau.jpg",
      description: [
        "In middle school, I joined an AAU summer team and that was my first time flying around the country to play basketball. It was a small sample of the NBA lifestyle (I now fly 50,000 miles a year). The travel was an experience, but it was more fun to compete against the best players in the country and know how we measured up. We had a lot of memorable moments together on and off the court in places like Las Vegas, Orlando and Arkansas. Later, I played for Indiana Elite which had some of the top young players from the state."
      ]
    }
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Childhood
        <div className="absolute pt-px bg-black dark:bg-white mt-px top-full w-full">
          <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {
        childhood_list.map((project, index) => {
          return (
            <div key={index} className="w-full flex flex-col px-4 py-2">
              <div className='w-full flex flex-col items-center md:items-start md:flex-row justify-between border border-gray border-opacity-80 rounded hover:bg-gray-200 dark:hover:bg-gray-900'>
                <div className="py-2 px-4 w-full md:w-[calc(100%-280px)]">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className=" text-base md:text-lg mr-2">{project.name}</div>
                    <div className="text-gray-800 dark:text-gray-100 font-light text-sm">{project.date}</div>
                  </div>
                  <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                    {
                      project.description.map((desc, index) => {
                        return <li key={index} className="list-disc mt-1 text-gray-900 dark:text-gray-50">{desc}</li>;
                      })
                    }
                  </ul>
                </div>
                <div className='py-2 flex items-center justify-center w-[280px]'>
                  <img className='rounded-[8px] border-gray border-opacity-70 border object-cover' src={`img/projects/${project.img}`}></img>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

const Education = () => {
  const education_list = [
    {
      name: "CHRIST SCHOOL",
      date: "2006 ~ 2009",
      img: "christ.jpg",
      description: [
        "After my freshman year of high school, a family friend told us about a boarding school in North Carolina with a strong reputation for academics that played a more competitive basketball schedule than my hometown school. It was a big decision for my family, but ultimately Miles and I decided to make the 600-mile trip to Christ School in Arden, NC."
      ]
    },
    {
      name: "DUKE",
      date: "2009 ~ 2013",
      img: "duke.jpg",
      description: [
        "When I arrived at Duke I was surrounded by amazing teammates -- guys like Rodney Hood, Seth Curry, Kyrie Irving and Jon Scheyer to name a few -- and again had the chance to play with my brothers. The practices at Duke were as valuable as anything because I could compete against high-level college players everyday. In that first year of 2009-10, we won a national championship, beating Butler in an exciting Final. Over the next three years, we had some memorable moments, winning our preseason tourney every year and advancing to the postseason."
      ]
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
       Education
        <div className="absolute pt-px bg-black dark:bg-white mt-px top-full w-full">
          <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {
        education_list.map((project, index) => {
          return (
            <div key={index} className="w-full flex flex-col px-4 py-2">
              <div className='w-full flex flex-col items-center md:items-start md:flex-row justify-between border border-gray border-opacity-80 rounded hover:bg-gray-200 dark:hover:bg-gray-900'>
                <div className="py-2 px-4 w-full md:w-[calc(100%-280px)]">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className=" text-base md:text-lg mr-2">{project.name}</div>
                    <div className="text-gray-800 dark:text-gray-100 font-light text-sm">{project.date}</div>
                  </div>
                  <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                    {
                      project.description.map((desc, index) => {
                        return <li key={index} className="list-disc mt-1 text-gray-900 dark:text-gray-50">{desc}</li>;
                      })
                    }
                  </ul>
                </div>
                <div className='py-2 flex items-center justify-center w-[280px]'>
                  <img className='rounded-[8px] border-gray border-opacity-70 border object-cover' src={`img/projects/${project.img}`}></img>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

const Career = () => {
  const career_list = [
    {
      name: "NBA DRAFT",
      date: "June 27, 2013",
      img: "nba.jpg",
      description: [
        "After senior year, I worked out for a lot of teams and it was a team that hadn’t worked me out -- the Brooklyn Nets -- that drafted me. That was a special night to share with my family and friends. It was helpful having a brother who had been through the process before, as Miles had been drafted by Indiana just a year earlier. I spent that summer where I’d been the previous three summers -- in Chicago -- working out."
      ]
    },
    {
      name: "BROOKLYN",
      date: "2013 ~ 2015",
      img: "brooklyn.jpg",
      description: [
        "Rookie year in Brooklyn was one of the most fun years of my life. I was playing with Hall of Famers like Kevin Garnett and Paul Pierce and for another Hall of Famer in Coach Jason Kidd. We had All-Stars in Deron Williams and Joe Johnson. The veterans taught me a lot and were good to me. Joe let me hop on his private plane to All-Star Weekend in New Orleans, where I played in the Rising Stars Challenge against my brother Miles. There were many perks to being on one of the most highly-paid teams in NBA history.",
      ]
    },
    {
      name: "FIBA WORLD CUP",
      date: "Summer of 2014",
      img: "fiba.jpg",
      description: [
        "After the season, I had the honor of playing for and winning gold with the USA Men’s Basketball Team at the FIBA World Cup in Spain. I played once again for Coach K alongside guys like Steph Curry, Derrick Rose, James Harden. I originally was part of a group of young guys who were there to push the veterans during tryouts, but I played well and was asked to be on the official Team USA roster."
      ]
    },
    {
      name: "PORTLAND",
      date: "July, 2015 ~ February, 2017",
      img: "portland.jpg",
      description: [
        "After my second year in the league, the Nets traded me to Portland to become part of a nucleus of young talent led by Damian Lillard. We surprised a lot of people in making the playoffs in 2015-16, winning a series and giving the eventual NBA champs, Golden State, a run in round two. I enjoyed my time in Rip City, where I had an opportunity to establish myself as a starter in the league and play for passionate fans who cared deeply about their 'Zers. "
      ]
    },
    {
      name: "DENVER",
      date: "Jan 2024",
      img: "denver.jpg",
      description: [
        "Late in the 2016-17 season, I was part of a trade to Denver and joined a young, exciting Nuggets team. During my first full season in 2017-18, we went 46-36 -- Denver's first winning season since 2013 -- but missed the playoffs by a game. I said before the 2018-19 season that I believed we had the talent to be a top four team in the West and that's what happened. The team finished 54-28 (second in the West) and won the franchise's first playoff series since 2009.",
        'The 2019-20 season is one we will never forget. The Covid pandemic cut the NBA regular season short in March and in many ways, the NBA suspending its season was the wake-up call that made the pandemic a reality in the US. The NBA was also the first league to re-start play and we headed to Orlando in July to complete our season in a "bubble." Adam Silver and Michele Roberts deserve a ton of credit for their leadership in helping to pull off what few believed could happen -- a successful, safe return of pro sports and an exciting conclusion to our season. We became the first team to come back from two straight 3-1 series deficits, beating Utah and the Clippers and advancing to the Western Conference Finals for the first time since 2009.'
      ]
    },
    {
      name: "DETROIT",
      date: "December 1, 2020 ~ July 2021",
      img: "detroit.jpg",
      description: [
        "In December 2020 I began a new chapter of my NBA career, joining the Detroit Pistons as a free agent. I had a chance to play with a great mix of young and veteran players and we competed and improved every day. It was one of the most rewarding years of my career and it was fun to be back in the starting lineup, where I set career highs in points per game, rebounding and assists"
      ]
    },
    {
      name: "CHARLOTTE",
      date: "July 2, 2021 ~ February 9 2023",
      img: "charlotte.jpg",
      description: [
        "In December 2020 I began a new chapter of my NBA career, joining the Detroit Pistons as a free agent. I had a chance to play with a great mix of young and veteran players and we competed and improved every day. It was one of the most rewarding years of my career and it was fun to be back in the starting lineup, where I set career highs in points per game, rebounding and assists"
      ]
    },
    {
      name: "LOS ANGELES",
      date: "February 9 2023 ~ Present",
      img: "los-angeles.jpg",
      description: [
        "In February 2023, I was part of a trade deadline deal that took me back out west to one of the league's top teams, the Los Angeles Clippers. It was fun to be back playing for a winning team with stars like Kawhi Leonard, Paul George, and Russell Westbrook and a talented group of younger players. I re-signed with the Clippers in the offseason and look forward to competing for a championship."
      ]
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Career
        <div className="absolute pt-px bg-black dark:bg-white mt-px top-full w-full">
          <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {
        career_list.map((project, index) => {
          return (
            <div key={index} className="w-full flex flex-col px-4 py-2">
              <div className='w-full flex flex-col items-center md:items-start md:flex-row justify-between border border-gray border-opacity-80 rounded hover:bg-gray-200 dark:hover:bg-gray-900'>
                <div className="py-2 px-4 w-full md:w-[calc(100%-280px)]">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className=" text-base md:text-lg mr-2">{project.name}</div>
                    <div className="text-gray-800 dark:text-gray-100 font-light text-sm">{project.date}</div>
                  </div>
                  <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                    {
                      project.description.map((desc, index) => {
                        return <li key={index} className="list-disc mt-1 text-gray-900 dark:text-gray-50">{desc}</li>;
                      })
                    }
                  </ul>
                </div>
                <div className='py-2 flex items-center justify-center w-[280px]'>
                  <img className='rounded-[8px] border-gray border-opacity-70 border object-cover' src={`img/projects/${project.img}`}></img>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

const profile = [
  {
    id: 'about',
    title: 'About',
    img: 'img/icons/about/about.svg',
    content: <About />
  },
  {
    id: 'childhood',
    title: 'Childhood',
    img: 'img/icons/about/childhood.svg',
    content: <Childhood />
  },
  {
    id: 'education',
    title: 'Education',
    img: 'img/icons/about/education.svg',
    content: <Education />
  },
  {
    id: 'career',
    title: 'Career',
    img: 'img/icons/about/career.png',
    content: <Career />
  }
]

const AboutMe = () => {
  const [content, setContent] = useState(profile[0].content);
  const [current, setCurrent] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [opened, openSidebar] = useState(false);
  let X = 10000;

  useEffect(() => {
    window.addEventListener("click", (e) => {
        if (e.target !== sidebarRef.current) {
            openSidebar(false);
        }
    });
    window.addEventListener("touchstart", (e) => {
        if (e.changedTouches) {
            X = e.changedTouches[0].pageX;
        }
    }, false)
    window.addEventListener("touchend", (e) => {
        if (e.changedTouches) {
            if (e.changedTouches[0].pageX > X + 100) {
                openSidebar(true);
            } else if (X > e.changedTouches[0].pageX + 100) {
                openSidebar(false);
            }
        }
    }, false);
  },[])

  return (
    <div className="about-me h-full font-avenir flex cursor-default">
      <div className="hidden md:block w-48 overflow-auto bg-gray-700 text-white py-4">
        <ul>
          {profile.map((item, index) => (
            <li
              key={`about-me-sidebar-${item.id}`}
              className={`pl-6 h-8 hstack cursor-pointer ${current === index ? "bg-red-500" : "bg-transparent"
                } ${current === index ? "" : "hover:bg-gray-600"}`}
              onClick={() => {
                setCurrent(index);
                setContent(item.content);
              }}
            >
              <span className="size-4"><img src={item.img} className="object-cover" /></span>
              <span className="ml-2">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={` ${opened ? 'translate-x-0' : '-translate-x-full'} fixed h-full z-10 md:hidden w-48 overflow-auto bg-gray-700 text-white py-4 transform transition-transform duration-300 ease-in-out`}>
        <ul>
          {profile.map((item, index) => (
            <li
              key={`about-me-sidebar-${item.id}`}
              className={`pl-6 h-8 hstack cursor-pointer ${current === index ? "bg-red-500" : "bg-transparent"
                } ${current === index ? "" : "hover:bg-gray-600"}`}
              onClick={() => {
                setCurrent(index);
                setContent(item.content);
              }}
            >
              <span className="size-4"><img src={item.img} className="object-cover" /></span>
              <span className="ml-2">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 overflow-auto h-full flex flex-col items-center dark:text-white" bg="gray-50 dark:gray-800">
        {content}
      </div>
    </div>
  )
}

export default AboutMe;
