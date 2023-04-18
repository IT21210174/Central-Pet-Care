import { MdContentPasteSearch, MdInsights } from "react-icons/md"
import {MdLibraryAdd} from "react-icons/md"
import {ImSearch} from "react-icons/im"
import {MdOutlineInventory2} from "react-icons/md"
import {BiCategoryAlt} from "react-icons/bi"
import {TbUserPlus} from "react-icons/tb"
import {TbUser} from "react-icons/tb"
import {FaPaw} from 'react-icons/fa'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BsPalette2} from 'react-icons/bs'
import {CiMedicalCross} from 'react-icons/ci'
import {IoIosPeople} from 'react-icons/io'
import {IoMdPerson} from 'react-icons/io'
import {FaSyringe} from 'react-icons/fa'
import {GiArchiveRegister} from 'react-icons/gi'
import {BsFillBoxSeamFill} from 'react-icons/bs'
import {BsFillCartFill} from 'react-icons/bs'
import {MdOutlineInsights} from 'react-icons/md'
import {MdMedicalServices} from 'react-icons/md'
import {MdDesignServices} from 'react-icons/md'
import {MdSell} from 'react-icons/md'
import {MdDeliveryDining} from 'react-icons/md'
import {SiGoogleanalytics} from 'react-icons/si'

import {BsPeopleFill} from 'react-icons/bs'
import {MdHolidayVillage} from 'react-icons/md'
import {GiTakeMyMoney} from 'react-icons/gi'
// main function icons
import {AiFillApi} from 'react-icons/ai'
import {BiStoreAlt} from 'react-icons/bi'
import {BiPlusMedical} from 'react-icons/bi'
import {TbTruckDelivery} from 'react-icons/tb'



const sidebarItems = [
    
    {
        id: 1000,
        icon: <BsPalette2/>,
        text: "Inventory Management",
        nestedFunctions: [
        {
            id:100,
            link:"/inventory/overview",
            nestedItemicon:<MdContentPasteSearch/>,
            nestedItemtext:"Overview"
        },

        {
            id:101,
            link:"/inventory/add-item",
            nestedItemicon:<MdLibraryAdd/>,
            nestedItemtext:"Add new item"
        },

        {
            id:102,
            link:"/component-3",
            nestedItemicon:<ImSearch/>,
            nestedItemtext:"Search inventory"
        },

        {   
            id:103,
            link:"/inventory/manage-inventory",
            nestedItemicon:<MdOutlineInventory2/>,
            nestedItemtext:"Manage inventory"
        },

        {
            id:104,
            link:"/component-5",
            nestedItemicon:<BiCategoryAlt/>,
            nestedItemtext:"Release items"
        },

        {
            id:105,
            link:"/component-6",
            nestedItemicon:<TbUserPlus/>,
            nestedItemtext:"Add supplier"
        },

        {
            id:106,
            link:"/component-7",
            nestedItemicon:<TbUser/>,
            nestedItemtext:"Manage suppliers"
        },

        ]
    },


    {
        id: 2000,
        icon: <BiStoreAlt/>,
        text: "Product Management",
        nestedFunctions: [
            {
                id:200,
                link:"/products",
                nestedItemicon:<BsFillBoxSeamFill/>,
                nestedItemtext:"Products"
            },

            {
                id:201,
                link:"",
                nestedItemicon:<BsFillCartFill/>,
                nestedItemtext:"Orders"
            },

            {
                id:202,
                link:"",
                nestedItemicon:<MdInsights/>,
                nestedItemtext:"Insights"
            },
        ]
    },

    {
        id:3000,
        icon:<IoIosPeople/>,
        text:"Staff Management",
        nestedFunctions: [
                {
                    id:300,
                    link:"",
                    nestedItemicon:<BsPeopleFill/>,
                    nestedItemtext:"Manage Staff"
                },

                {
                    id:301,
                    link:"",
                    nestedItemicon:<MdHolidayVillage/>,
                    nestedItemtext:"Manage Leaves"
                },

                {
                    id:302,
                    link:"",
                    nestedItemicon:<GiTakeMyMoney/>,
                    nestedItemtext:"Manage Payrolls"
                },
        ]
    },


    {
        id:4000,
        icon:<FaPaw/>,
        text:"Pet Management",
        nestedFunctions: [
                {
                    id:400,
                    link:"",
                    nestedItemicon:<GiArchiveRegister/>,
                    nestedItemtext:"Register"
                },

                {
                    id:401,
                    link:"",
                    nestedItemicon:<FaSyringe/>,
                    nestedItemtext:"Treatments"
                },

        ]
    },

    {
        id:5000,
        icon:<MdOutlineHomeRepairService/>,
        text:"Service Management",
        nestedFunctions: [
                {
                    id:500,
                    link:"",
                    nestedItemicon:<MdMedicalServices/>,
                    nestedItemtext:"Service Information"
                },

                {
                    id:501,
                    link:"",
                    nestedItemicon:<MdDesignServices/>,
                    nestedItemtext:"Service Records"
                },
        ]
    },

    {
        id:6000,
        icon:<BiPlusMedical/>,
        text:"Vet. Management",
        nestedFunctions: [
                {
                    id:600,
                    link:"",
                    nestedItemicon:<BsFillBoxSeamFill/>,
                    nestedItemtext:"Products"
                },

                {
                    id:601,
                    link:"",
                    nestedItemicon:<BsFillCartFill/>,
                    nestedItemtext:"Orders"
                },

                {
                    id:602,
                    link:"",
                    nestedItemicon:<MdInsights/>,
                    nestedItemtext:"Insights"
                },
        ]
    },

    

    {
        id:7000,
        icon:<IoMdPerson/>,
        text:"CustomerManagement",
        nestedFunctions: [
                {
                    id:700,
                    link:"",
                    nestedItemicon:<BsFillBoxSeamFill/>,
                    nestedItemtext:"Products"
                },

                {
                    id:701,
                    link:"",
                    nestedItemicon:<BsFillCartFill/>,
                    nestedItemtext:"Orders"
                },

                {
                    id:702,
                    link:"",
                    nestedItemicon:<MdInsights/>,
                    nestedItemtext:"Insights"
                },
        ]
    },


    {
        id:800,
        icon:<TbTruckDelivery/>,
        text:"Delivery Management",
        nestedFunctions: [
                {
                    id:800,
                    link:"",
                    nestedItemicon:<MdSell/>,
                    nestedItemtext:"Order Management"
                },

                {
                    id:801,
                    link:"",
                    nestedItemicon:<MdDeliveryDining/>,
                    nestedItemtext:"Driver Management"
                },

                {
                    id:802,
                    link:"",
                    nestedItemicon:<SiGoogleanalytics/>,
                    nestedItemtext:"Analytics"
                },
        ]
    },

]


export default sidebarItems;