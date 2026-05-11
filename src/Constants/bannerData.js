export const logosData = [
  ["zen", "/images/homepage/zenCares.png", "/images/homepage/zenCarecolor.png"],
  [
    "bare",
    "/images/homepage/bareeDefult.png",
    "/images/homepage/bariColor.png",
  ],
  [
    "orion",
    "/images/homepage/orionTexxDefult.png",
    "/images/homepage/orionTexxColor.png",
  ],
  ["gsk", "/images/homepage/Gsk.png", "/images/homepage/gskColor.png"],
  [
    "myspend",
    "/images/homepage/myspend.png",
    "/images/homepage/myspendcolor.png",
  ],
  ["xpm", "/images/homepage/xpm.png", "/images/homepage/xpmcolor.png"],
];

export const bannerMotion = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  stagger: {
    visible: { transition: { staggerChildren: 0.08 } },
  },
  logoAnim: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  },
};

export const bannerRowsConfig = {
  desktop: [
    [0, 6],
    [6, 11],
    [11, 17],
  ],
  mobile: [
    [0, 2],
    [2, 5],
    [5, 8],
    [8, 10],
    [10, 12],
    [12, 15],
    [15, 17],
  ],
};

export const buildRows = (data, ranges) =>
  ranges.map(([start, end]) => data.slice(start, end));
