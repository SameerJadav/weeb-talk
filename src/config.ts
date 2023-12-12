export const SITE = {
  name: "Weeb Talk",
  description:
    "Dive into lively anime discussions. Show your superior anime taste. Share your waifu wallpapers.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`,
  author: {
    name: "Sameer Jadav",
    twitterUserName: "@SameerJadav_",
    twitter: "https://twitter.com/SameerJadav_",
    github: "https://github.com/SameerJadav",
    linkedin: "https://www.linkedin.com/in/sameerjadav",
    mail: "mailto:sameerjdav001@gmail.com",
  },
};
