import { LazyLoadTypes } from "react-slick";

export const MENU = [
  {
    route: "/",
    value: "Home",
  },
  {
    route: "/events",
    value: "Find events",
  },
  {
    route: "/events/create-events",
    value: "Create events",
  },
  {
    route: "/contact",
    value: "Contact",
  },
  {
    route: "/login",
    value: "Login",
  },
  {
    route: "/sign-up",
    value: "Sign up",
  },
];

export const EVENTS_SLIDER_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 4 slides at a time
  slidesToScroll: 3,
  lazyLoad: "progressive" as LazyLoadTypes,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2, // Show 3 slides at a time for smaller screens
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 725,
      settings: {
        slidesToShow: 1, // Show 3 slides at a time for smaller screens
        slidesToScroll: 1,
      },
    },
  ],
};

export const SAMPLE_EVENTS_DATA = [
  {
    id: '1',
    title: "Kenya Tech Summit",
    startDate: "Jun 24",
    endDate: "Jun 27",
    startTime: "10:00 AM",
    location: "The Sarit Expo Center",
    price: "Ksh. 850",
    organizer: "Global Startup Ecosystem",
    endTime: "12:00 PM",
    image: "/assets/images/event-bg4.jpeg",
  },
  {
    id: '2',
    title: "Cyber Security Expo",
    startDate: "Aug 19",
    endDate: "Aug 21",
    startTime: "8:00 AM",
    location: "Kilimanjaro cafe",
    price: "Ksh. 1050",
    organizer: "@iLabAfrica",
    endTime: "6:00 PM",
    image: "/assets/images/event-bg3.webp",
  },
  {
    id: '3',
    title: "Data management and analysis",
    startDate: "Jun 24",
    endDate: "Jun 27",
    startTime: "10:00 AM",
    location: "The Sarit Expo Center",
    price: "Ksh. 850",
    organizer: "Fifin",
    endTime: "12:00 PM",
    image: "/assets/images/event-bg2.jpeg",
  },
  {
    id: '4',
    title: "Data management and analysis",
    startDate: "Jun 24",
    endDate: "Jun 27",
    startTime: "10:00 AM",
    location: "The Sarit Expo Center",
    price: "Ksh. 850",
    organizer: "Fifin",
    endTime: "12:00 PM",
    image: "/assets/images/event-bg2.jpeg",
  },
  {
    id: '5',
    title: "Data management and analysis",
    startDate: "Jun 24",
    endDate: "Jun 27",
    startTime: "10:00 AM",
    location: "The Sarit Expo Center",
    price: "Ksh. 850",
    organizer: "Fifin",
    endTime: "12:00 PM",
    image: "/assets/images/event-bg2.jpeg",
  },
  {
    id: '6',
    title: "Data management and analysis",
    startDate: "Jun 24",
    endDate: "Jun 27",
    startTime: "10:00 AM",
    location: "The Sarit Expo Center",
    price: "Ksh. 850",
    organizer: "Fifin",
    endTime: "12:00 PM",
    image: "/assets/images/event-bg2.jpeg",
  },
];
