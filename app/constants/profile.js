import { images } from "@/app/constants/images";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
export const profileData = {
  name: "Md Athik Hasan",
  title: "Web Developer (MERN & WordPress)",
  image: images.profile,
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Done", value: "10+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Awards", value: "5" },
  ],
  contactInfo: [
    {
      label: "Phone",
      value: "+880 1824990037",
      icon: FaPhone,
    },
    {
      label: "Email",
      value: "mdathikhasan136@gmail.com",
      icon: FaEnvelope,
    },
    {
      label: "Location",
      value: "Chandpur, Bangladesh",
      icon: FaMapMarkerAlt,
    },
  ],
};
