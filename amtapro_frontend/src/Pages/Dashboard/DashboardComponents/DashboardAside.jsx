import React from 'react';
import * as lucid from 'lucide-react';
import {Link} from 'react-router-dom'
import {logo} from "../assets/dashboardLinks";
import clsx from 'clsx';

const DashboardAside = ({isOpen, asideLinks, onClose}) => {
    const sections = ["Menu", "Connections", "Activity", "AmtaPro", "Settings"];
    const date = new Date()
    return (
        <div>

            <div
                className={clsx(
                'fixed inset-0 bg-opacity-50 z-30 transition-opacity duration-400',
                {
                    'opacity-100 pointer-events-auto': isOpen,
                    'opacity-0 pointer-events-none': !isOpen,
                }
                )}
                onClick={onClose}
            ></div>
            <aside
                    className={clsx(
                    // 'fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 md:relative md:translate-x-0 md:flex-shrink-0',
                    'fixed overflow-auto top-0 left-0 h-full w-[60%] sm:w-64 bg-white p-7 md:p-5 shadow-md z-9997 transform transition-transform duration-300',
                    {
                        '-translate-x-full': !isOpen,
                        'translate-x-0': isOpen,
                    }
                    )}
                >                
                <div className='flex flex-row-reverse justify-between items-center mb-5'>
                    <lucid.X size={30} onClick={onClose}/>
                    <img src={logo} alt="Amtapro-logo" className='rounded-full size-25'/>
                </div>

                <nav className="space-y-5">
                    {asideLinks.map((sectionLinks, index) => (
                        <div key={sections[index]}>
                            <h1 className="font-bold text-green-800 md:mb-3 mb-5">{sections[index].toUpperCase()}</h1>
                            <ul className="space-y-7 md:space-y-3">
                                {sectionLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                    to={link.to}
                                    className="flex items-center gap-3 hover:text-green-700 transition"
                                    >
                                    {link.lucid && <link.lucid size={20} />}
                                    {link.name.toUpperCase()}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <hr className='m-3'/>
                    {
                        date.getFullYear() === 2025 ?
                        <h3>© AmtaPro 2025</h3>
                        :
                        <h3>© AmtaPro 2025–{date.getFullYear()}</h3>
                    }
                </nav>

            </aside>
        </div>
    );
}

export default DashboardAside;