import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
export const SidebarData = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Patient Registration",
    link: "/newpatient",
  },
  {
    title: "Patient Visit",
    link: "/patientvisit",
  },
  {
    title: "Patient Issue",
    link: "/patientissue",
  },
  {
    title: "Medicine Dispense",
    link: "/medicinedispense",
  },
  {
    title: "Invesigtion Acknowledge",
    link: "/investigationacknowledge",
  },
  {
    title: "Out Patient Billing",
    link: "/outpatientbilling",
  },
  {
    title: "Sample Collection",
    link: "/samplecollection",
  },
  {
    title: "Sample Acknowledge",
    link: "/sampleacknowledge",
  },
  {
    title: "Result",
    link: "/result",
  },
];

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = SidebarData.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            Animate
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                SidebarData.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};
