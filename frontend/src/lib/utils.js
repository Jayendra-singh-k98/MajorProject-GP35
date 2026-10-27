export const fmtDate = (d) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
export const MAX_SIZE = 5 * 1024 * 1024;
export const validateImage = (f) => {
  if (!["image/jpeg", "image/png"].includes(f.type)) return "Use a JPG, JPEG or PNG image.";
  if (f.size > MAX_SIZE) return "Image is larger than 5 MB. Choose a smaller file.";
  return null;
};