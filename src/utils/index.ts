// Picked up from http://www.webpagetest.org/
// Speed in KB/s
const DownloadSpeed = {
    TWO_G: 30, // 2G Edge
    THREE_G: 50, // Emerging markets 3G
};

export const get2GTimeFromSize = (sizeInBytes: number) => (
    (sizeInBytes / 1024 / DownloadSpeed.TWO_G).toFixed(2)
);

export const get3GTimeFromSize = (sizeInBytes: number) => (
    (sizeInBytes / 1024 / DownloadSpeed.THREE_G).toFixed(2)
);

export const calculateSize = (sizeInBytes: number) => (
   (sizeInBytes / 1024).toFixed(1)
)
