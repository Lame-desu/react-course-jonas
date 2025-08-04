const OPENCAGE_API_KEY = "b2433e4a4c2b4980aed6a41e0c0d1245";

export function getPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Your browser doesn't support this functionality"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const req = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=${OPENCAGE_API_KEY}`
          );
          const data = await req.json();
          const formatted = data.results[0]?.formatted;

          resolve({
            position: { latitude, longitude },
            formatted,
          });
        } catch (error) {
          reject(
            new Error(`Error while fetching your address: ${error.message}`)
          );
        }
      },
      (error) => {
        reject(new Error(`Getting Position Error: ${error.message}`));
      }
    );
  });
}
