import {
    Home,
    Info,
    CreditCard,
    History,
    Settings,
    FileText,
    Mail,
    LogOut,
    LucideIcon, // optional for type hinting
  } from "lucide-react";
  
  interface MenuItem {
    label: string;
    icon: LucideIcon;
    href: string;
  }
  
  const menuItems: MenuItem[] = [
    { label: "Home", icon: Home, href: "#" },
    { label: "About", icon: Info, href: "#" },
    { label: "Payment", icon: CreditCard, href: "#" },
    { label: "History", icon: History, href: "#" },
    { label: "Services", icon: Settings, href: "#" },
    { label: "Blog", icon: FileText, href: "#" },
    { label: "Contact", icon: Mail, href: "#" },
    { label: "Logout", icon: LogOut, href: "#" },
  ];
  
  export default menuItems;
  