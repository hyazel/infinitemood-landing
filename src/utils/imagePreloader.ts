/**
 * Preload images to ensure they're cached before displaying
 */

export const preloadImages = (imageUrls: string[]): Promise<void> => {
    return new Promise((resolve) => {
        let loadedCount = 0;
        const totalImages = imageUrls.length;

        if (totalImages === 0) {
            resolve();
            return;
        }

        const onLoad = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                resolve();
            }
        };

        const onError = (url: string) => {
            console.error(`Failed to preload image: ${url}`);
            // Continue even if one image fails
            loadedCount++;
            if (loadedCount === totalImages) {
                resolve();
            }
        };

        imageUrls.forEach((url) => {
            const img = new Image();
            img.onload = onLoad;
            img.onerror = () => onError(url);
            img.src = url;
        });
    });
};
