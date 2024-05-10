"use client";
import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

export default function Navbar() {
  
   function itemRenderer (item: any) {
    
    return (
      <div className="font-bold ">
        <span className="mx-2">{item.label}</span>
        <span className={`${item.icon} font-bold`} />
        {/* <span className="" />
        <span className="mx-2">{item?.label}</span> */}
      </div>
    );
  }

  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      template: itemRenderer,
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
  ];

  return (
    <div className="bg-black">
      <Menubar model={items} className="bg-black container mx-auto px-4" />
    </div>
  );
}
