/**
 * Photography from hikes around California. Captions describe only
 * what is visible in each frame; no locations invented (Shasta is
 * unmistakable). Files live in `public/photos/`.
 */

export type Photo = {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  /** Wide photos span the full grid row. */
  readonly wide?: boolean;
};

export const photosData: readonly Photo[] = [
  {
    src: "/photos/shasta.jpg",
    alt: "Mount Shasta, a snow-capped volcano, above a forested ridge",
    caption: "Mount Shasta, CA",
    wide: true,
  },
  {
    src: "/photos/lake-log.jpg",
    alt: "A person sitting on a log at the edge of an alpine lake, framed by trees",
    caption: "Alpine lake mornings",
  },
  {
    src: "/photos/trail-friends.jpg",
    alt: "Two hikers looking out over a granite-ringed lake",
    caption: "On the trail with friends",
  },
  {
    src: "/photos/lake-trees.jpg",
    alt: "A lake seen through pine trees",
    caption: "Through the trees",
  },
];
