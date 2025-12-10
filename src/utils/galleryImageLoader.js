// Dynamically load images from specific folders
export const loadGalleryImages = (folderName) => {
  try {
    // Context for the specific folder
    const context = require.context(
      "../images/photo",
      true, // Look in subdirectories
      /\.(jpg|jpeg|png|gif|webp)$/i
    );

    // Filter to get only images from the specified folder
    const imageKeys = context
      .keys()
      .filter((key) => key.includes(`/${folderName}/`));

    const images = imageKeys.map((key) => {
      return {
        src: context(key),
        alt: key
          .replace("./", "")
          .split("/")
          .pop()
          .split(".")[0]
          .replace(/_/g, " "),
        id: key,
        folder: folderName,
      };
    });

    console.log(`Loaded ${images.length} images from ${folderName}`);
    return images;
  } catch (error) {
    console.error(`Error loading images from ${folderName}:`, error);
    return [];
  }
};

// Load all images from multiple categories
export const loadAllCategories = () => {
  const completedProjects = loadGalleryImages("Gallery of completed Projects");
  const underConstruction = loadGalleryImages("Project under construction");

  return {
    all: [...completedProjects, ...underConstruction],
    completed: completedProjects,
    construction: underConstruction,
    events: [], // Empty for events
  };
};
