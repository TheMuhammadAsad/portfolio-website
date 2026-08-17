export interface Certification {
  title: string;
  issuer: string;
  date: string;
  verify?: string;
}

export const certifications: Certification[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (Coursera)",
    date: "Aug 2025",
    verify: "https://coursera.org/verify/professional-cert/3DQX471N6UFY",
  },
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google (Coursera)",
    date: "Sep 2025",
    verify: "https://coursera.org/verify/professional-cert/UYPCL7YU00E3",
  },
  {
    title: "Google IT Automation with Python Professional Certificate",
    issuer: "Google (Coursera)",
    date: "Oct 2025",
    verify: "https://coursera.org/verify/professional-cert/4F6CXEOLWF6H",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy / OpenEDG Python Institute",
    date: "Mar 2022",
  },
  {
    title: "Excel Skills for Business: Essential, Intermediate I & II",
    issuer: "Macquarie University (Coursera)",
    date: "2021 – 2022",
    verify: "https://coursera.org/verify/PZB5M7KQDH34",
  },
  {
    title: "Lean Six Sigma Yellow Belt",
    issuer: "Toosy Advisory Services",
    date: "Jan 2021",
  },
  {
    title: "NFTP Technical Domain Training (Web Development & Freelancing)",
    issuer: "Ministry of IT & Telecommunication, Digital Pakistan",
    date: "Sep 2021 – Jan 2022",
  },
  {
    title: "Fuel Research Centre Internship — Coal & Fuel Processing Analysis",
    issuer: "PCSIR (Pakistan Council of Scientific & Industrial Research)",
    date: "Apr 2022",
  },
];
