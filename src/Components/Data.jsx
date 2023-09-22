import { FaWpforms, } from "react-icons/fa6"
import { FaTeamspeak,FaCar,FaUserAlt, FaCalendarAlt,FaMapMarkerAlt } from "react-icons/fa"


export const logo = [
   { 
    id: 0,
    cover: "/assets/Images/bmwlogo.jpg",
    title: "bmw"

},
{
    id: 1,
    cover: "/assets/Images/hondalogo.png",
    title: "honda"
},
{
    id: 2,
    cover:"/assets/Images/lexuslogo.png",
    title: "lexus"
},
{
    id:3,
    cover: "/assets/Images/mazdalogo.jpg",
    title: "mazda"
},
{
    id:4,
    cover: "/assets/Images/menzelogo.jpg",
    title: "benz"
},
{
    id: 5,
    cover: "/assets/Images/nissanlogo.jpg",
    title: "nissan"
}

];
export const steps =[
    {
        id:  0,
        cover: <FaMapMarkerAlt className="w-10 h-10"/>,
        title: "Choose location",
        text: "Choose your location and find  your best car",

    },
    {
        id:1,
        cover: <FaCalendarAlt className="w-10 h-10"/>,
        title: "Pick-up date",
        text: "Select a pick-up date and time to book your car"

    },
    {
        id: 2,
        cover: <FaCar className="w-10 h-10 shadow-status-pink" />,
        title:"Book your car",
        text:"Book your car and we will deliver it promptly"
    }
]

export const whychooseus =[
    {
        id:0,
        icon: <FaCalendarAlt className=" w-5 h-6 text-status-purple-80"/>,
        title: "Flexible Rental period",
        text: "We offer flexible rentals period,from daily to monthly rentals so you can chose the one that suits you."
    },{
        id: 1,
        icon: <FaWpforms className=" w-5 h-6 text-status-purple-80"/>,
        title: "competitive pricing",
        text: "We offer flexible and affordable pricing plans that are design to meet your budget",

    },{
        id:2,
        icon: <FaUserAlt className=" w-5 h-6 text-status-purple-80"/>,
        title: "Driver Avaliable",
        text: "We also provide driver if you don't want to drive to enable you have a seemless experience with us "
    },{
        id: 3,
        icon: <FaTeamspeak className=" w-5 h-6 text-status-purple-80"/>,
        title: "superior customer service",
        text: "A team of knownledgeable and friendly professionals ready to support you with your concern 24/7 "

    }

]
export const populardeal = [
    {
        id: 0,
        coverImage: "/assets/Images/carimage8.jpg",
        rate: "3.9 [98 Reviews]",
        carname: "Honda 2017",
        //passengericon: <FaUser className="w-5 h-5" />,
        totalpassenger: "4 Passengers",
       // automaticicon: <FaTimeline className="w-5 h-5 " />,
        automaticText: "Manual",
       // airconditionicon: <FaEmpire className="w-5 h-5 " />,
        airconditontext: "Air Condition",
        //totaldoorsicon: <FaTruckField className="w-5 h-5 " />,
        totaldoortext:"4 Doors",
        priceperrent: "N60,000/day",

        
    }, {
        id: 1,
        coverImage: "/assets/Images/carimage7.jpg",
        rate: "4.0 [100 Reviews]",
        carname: "BMW 2022",
       // passengericon: <FaUser className="w-5 h-5" />,
        totalpassenger: "2 Passengers",
       // automaticicon: <VscTerminalUbuntu className=" w-5 h-5" />,
        automaticText: "Automatic",
       //airconditionicon: <FaEmpire className="w-5 h-5" />,
        airconditontext: "Air Condition",
       //totaldoorsicon: <FaTruckField className="w-5 h-5" />,
        totaldoortext:"2 Doors",
        priceperrent: "N90,000/day",

    },
    {
        id: 2,
        coverImage: "/assets/Images/carimage5.png",
        rate: "5.0 [100+ Reviews]",
        carname: "BMW 2021",
       // passengericon: <FaUser className="w-5 h-5" />,
        totalpassenger: "4 Passengers",
        //automaticicon: <VscTerminalUbuntu className=" w-5 h-5" />,
        automaticText: "Automatic",
       // airconditionicon: <FaEmpire className="w-5 h-5" />,
        airconditontext: "Air Condition",
       // totaldoorsicon: <FaTruckField className="w-5 h-5" />,
        totaldoortext:"4 Doors",
        priceperrent: "N70,000/day",

    },{
        id: 3,
        coverImage: "/assets/Images/carimage6.jpeg",
        rate: "5.0 [100+ Reviews]",
        carname: "RANGE ROVER",
        //passengericon: <FaUser className="w-5 h-5" />,
        totalpassenger: "4 Passengers",
        //automaticicon: <VscTerminalUbuntu className=" w-5 g-5" />,
        automaticText: "Automatic",
       // airconditionicon: <FaEmpire className="w-5 h-5 " />,
        airconditontext: "Air Condition",
       // totaldoorsicon: <FaTruckField className="w-5 h-5 " />,
        totaldoortext:"4 Doors",
        priceperrent: "N110,000/day",

    }
]
export const testimoninal = [
    {
        id: 0,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
        testimoninalname:"Job Stev",
    },
     {
        id: 1,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
        testimoninalname:"Jones Mac",
    },
      {
        id: 2,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
        testimoninalname:"Akin Makin",
    },
      {
        id: 3,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
        testimoninalname:"Akin Makin",
    },
]