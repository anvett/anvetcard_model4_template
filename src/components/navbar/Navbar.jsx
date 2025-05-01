

// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = ({
//   bgColor = "bg-navbar",
//   textColor = "text-light",
//   borderColor = "border-light",
//   logoSrc = "/assets/images/logo.jpg",
//   menuItems = [],
//   linkTextSize = "text-base",
//   navTextSize = "text-lg",
//   mobileMenuBg = "bg-light",
//   mobileMenuTextColor = "text-primary",
//   mobileIconColor = "text-light"
// }) => {
//   const pathname = usePathname();

//   return (
//     <div className={`navbar ${bgColor} ${textColor} px-4 flex items-center justify-between relative z-50 border-b-2 ${borderColor}`}>
//       <div className="flex items-center space-x-4">
//         <div className="dropdown">
//           <label tabIndex={0} className={`btn btn-ghost  ${mobileIconColor} lg:hidden`}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="text-light"
//               className="size-spacing-2 items-center"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </label>
//           <ul className={`menu menu-sm dropdown-content mt-3 z-10 p-2 shadow ${mobileMenuBg} rounded-box w-64 gap-2`}>
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <Link className={`${linkTextSize} ${mobileMenuTextColor}`} href={item.href}>{item.label}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <Image src={logoSrc} width={110} height={110} alt="Logo" suppressHydrationWarning />
//       </div>
//       <div className="hidden lg:flex">
//         <ul className={`menu menu-horizontal ${navTextSize} font-semibold px-1 gap-2`}>
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <Link className={`nav-link ${pathname === item.href ? "text-terciary" : textColor} ${linkTextSize}`} href={item.href}>
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({
  bgColor = "bg-navbar",
  textColor = "text-light",
  borderColor = "border-light",
  logoSrc = "/assets/images/logo.jpg",
  menuItems = [],
  linkTextSize = "text-base",
  navTextSize = "text-lg",
  mobileMenuBg = "bg-light",
  mobileMenuTextColor = "text-primary",
  mobileIconColor = "text-light",
  mobileIconSize = "w-8 h-8",
  customMobileIcon = null,
}) => {
  const pathname = usePathname();

  return (
    <div className={`navbar ${bgColor} ${textColor} px-spacing-5 py-spacing-2 flex items-center justify-between  gap-spacing-2 relative z-50 border-b-2 ${borderColor}`}>
      <div className="flex justify-between gap-spacing-2 items-center w-80">
        {/* Botón mobile */}
        <div className="dropdown">
          <label tabIndex={0} className={`btn btn-ghost ${mobileIconColor} lg:hidden`}>
            {customMobileIcon ? (
              customMobileIcon
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                fill="currentColor"
                className={`${mobileIconSize}`}
              >
                <path
                  fillRule="evenodd"
                  d="M4 5h16M4 12h16M4 19h16"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
          <ul className={`menu menu-sm dropdown-content mt-3 z-10 p-2 shadow ${mobileMenuBg} rounded-box w-64 gap-2`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link className={`${linkTextSize} ${mobileMenuTextColor}`} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Image className="justify-center shadow-lg shadow-light" src={logoSrc} width={130} height={130} alt="Logo" suppressHydrationWarning />
      </div>

      {/* Menú desktop */}
      <div className="hidden lg:flex">
        <ul className={`menu menu-horizontal ${navTextSize} font-semibold px-1 gap-2`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className={`nav-link ${pathname === item.href ? "text-light" : textColor} ${linkTextSize}`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
