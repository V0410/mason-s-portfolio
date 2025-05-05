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
        <div className="font-normal ml-1 flex justify-center w-full"><span className="text-pink-600 font-bold italic md:w-full w-[80%]">Veteran NBA Center | NCAA Champion | Team-First Leader</span></div>
        <div className="text-sm flex justify-center w-full"><span className="md:w-full w-[80%]">Over 10 years of pro experience built on hustle, high IQ play, and team culture.</span></div>
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

const School = () => {
  const description = "For the kids, stay with school.. Some day you'll get to study and learn what you're interested in and it's a game changer. Thank you to all the teachers and professors who invest in our youth. ";
  const school_list = [
    {
      name: "Presbyterian",
      date: "1995 ~ 1996",
      img: "presbyterian.png",
      description: [
        "Growing up, my faith was always an important part of my life, so starting out at Presbyterian gave me a strong foundation both academically and spiritually. The school emphasized discipline and character, which shaped the way I approached both schoolwork and sports early on."
      ]
    },
    {
      name: "Jefferson",
      date: "1996 ~ 1997, 1998- ~ 2003",
      img: "jefferson.png",
      description: ["After a few years at Presbyterian, I transferred to Jefferson to challenge myself more athletically. Jefferson had a great local basketball program and playing there helped me start thinking seriously about pursuing basketball at a higher level. It was also where I really began to understand the importance of teamwork and leadership."]
    },
    {
      name: "Sacred Heart",
      date: "1997 ~ 1998",
      img: "sacred.png",
      description: ["My time at Sacred Heart was all about growth—on and off the court. The coaches there pushed me harder than I’d ever been pushed before, and the competition forced me to step up my game. It was also a place where I learned to balance academics, athletics, and service, something that’s stayed with me."]
    },
    {
      name: "Lakeview",
      date: "2003 ~ 2005",
      img: "lakeview.png",
      description: ["Heading into high school, I joined Lakeview to get exposure to a broader basketball schedule and more intense competition. It was there that I first realized what it would take to play at the next level. The relationships I built with my coaches and teammates at Lakeview played a major role in shaping the player—and person—I’ve become."]
    },
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
      img: "duke.png",
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
      <div className="list-disc mt-1 text-gray-900 dark:text-gray-50 px-12 py-8">
        {description}
      </div>
      {
        school_list.map((project, index) => {
          return (
            <div key={index} className="w-full flex flex-col px-4 py-2">
              <div className='w-full flex flex-col items-center md:items-start md:flex-row justify-between border border-gray border-opacity-80 rounded hover:bg-gray-200 dark:hover:bg-gray-900 p-2'>
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
              <div className='w-full flex flex-col items-center md:items-start md:flex-row justify-between border border-gray border-opacity-80 rounded hover:bg-gray-200 dark:hover:bg-gray-900 p-2'>
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

const Welcome = () => {
  const description = "Welcome to my page, it should give you some insight into my life, influences, and interests. Growing up in Warsaw Indiana this has been beyond anything I could ask or imagine. The best is yet to come.";
  return (
  <>
    <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
      Welcome
      <div className="absolute pt-px bg-black dark:bg-white mt-px top-full w-full">
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
      </div>
    </div>
    <p className="list-disc mt-1 text-gray-900 dark:text-gray-50 pt-12 px-24 text-xl text-center break-all">
      {description}
    </p>
  </>
)}

const Venture = () => {
  const description = "Click on the launchpad to see my venture portfolio. Some investors are thesis driven, some lean analytical.. I invite all the information and trends but ultimately support founders and teams with great vision and passion. I like to think I've supported those who are solving real issues and view their innovation as a service to the next person. Many thanks to some of the best who have invited me in and taught me along the way.";
  return (
  <>
    <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
      Venture
      <div className="absolute pt-px bg-black dark:bg-white mt-px top-full w-full">
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
      </div>
    </div>
    <p className="list-disc mt-1 text-gray-900 dark:text-gray-50 pt-12 px-24 text-xl text-center break-all">
      {description}
    </p>
  </>
)}

const Basketball = () => {
  const description = "Athletes Ink (hyperlink) and myself currently run a camp in Arden NC at my HS alma mater. My Grandparents used to send me to camp as a kid and it was something I looked forward to and grew from beyond the skill and competition. A good camp breeds relationships, gets players out of their comfort zone, and exposes them to the possible. After having run camps and clinics in South Africa, Vietnam, Dubai, Jakarta, and across the US we are happy to consult on your grassroots basketball effort.";
  return (
  <>
    <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
      Basketball
      <div className="absolute pt-px bg-black dark:bg-white mt-px top-full w-full">
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
      </div>
    </div>
    <p className="list-disc mt-1 text-gray-900 dark:text-gray-50 pt-12 px-24 text-xl text-center break-all">
      {description}
    </p>
  </>
)}

const Shop = () => {
  const description = "Nordstrom copied my logo. Imitation is the greatest form of flattery, but if they copy any of the items here we'll see them in court.";
  return (
  <>
    <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
      Shop
      <div className="absolute pt-px bg-black dark:bg-white mt-px top-full w-full">
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
        <div className="bg-black dark:bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
      </div>
    </div>
    <p className="list-disc mt-1 text-gray-900 dark:text-gray-50 pt-12 px-24 text-xl text-center break-all">
      {description}
    </p>
  </>
)}

const profile = [
  {
    id: 'welcome',
    title: 'Welcome',
    img: 'img/icons/about/welcome.png',
    content: <Welcome />
  },  
  {
    id: 'school',
    title: 'School',
    img: 'img/icons/about/education.svg',
    content: <School />
  },
  {
    id: 'venture',
    title: 'Venture',
    img: 'img/icons/about/venture.png',
    content: <Venture />
  },
  {
    id: 'basketball ',
    title: 'Basketball',
    img: 'img/icons/about/basketball.png',
    content: <Basketball />
  },
  {
    id: 'shop',
    title: 'Shop',
    img: 'img/icons/about/shop.png',
    content: <Shop />
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
