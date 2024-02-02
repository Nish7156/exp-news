// geolocation.js
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              resolve(data.address);
            })
            .catch((error) => {
              reject(error);
            });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject("Geolocation is not supported by your browser");
    }
  });
};

export const formatDate = (date: {
  toLocaleDateString: (
    arg0: string,
    arg1: { weekday: string; month: string; day: string; year: string }
  ) => any;
}) => {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
