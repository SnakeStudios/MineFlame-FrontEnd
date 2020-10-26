export const mainAPI = "https://api.mineflame.net/v1/";
export const testAPI = "https://api.imarcomc.com/v1/forum/";

export function getAPI() {
    let isDev = process.env.NODE_ENV === "development";

    if (isDev) {
        return testAPI;
    } else {
        return mainAPI;
    }

}
