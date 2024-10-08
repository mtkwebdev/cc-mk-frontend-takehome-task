const colours = {
  base: {
    surface: "#FFFFFF",
    onSurface: "#0F1310",
    primary: "#26C281",
    secondary: "#CFD0CF",
    interactive: "#26C281",
  },
  surface: {
    default: "#FFFFFF",
    subdued: "#F3F3F3",
    selected: { default: "#E4F6ED", dark: "#26C281" },
  },
  icons: {
    default: "#6F7170",
    subdued: "#CFD0CF",
    disabled: "#CFD0CF",
    success: "#008347",
    warning: "#F9A825",
    highlight: "#2653C2",
    critical: "#CF2D2D",
  },
  text: {
    default: "#0F1310",
    subdued: "#6F7170",
    disabled: "#CFD0CF",
    success: "#008347",
    warning: "#F9A825",
    highlight: "#2653C2",
    critical: "#CF2D2D",
  },
  borders: {
    default: "#8C9196",
    subdued: "#E4E5E7",
    disabled: "#D2D5D8",
    critical: { default: "#EB514E", subdued: "#FECCD1" },
    success: {
      default: "#26C281",
      subdued: "#BDE9D2",
    },
  },
  decorative: {
    surface: {
      one: "#9EC59B",
    },
  },
};

export const COLOURS = Object.freeze(colours);
