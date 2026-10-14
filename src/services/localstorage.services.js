const isBrowser = typeof window !== "undefined";

export const localStorageService = {
    getItems(key) {
        if (key != "") {
            if (!isBrowser) {
                return;
            }
            let result = window.localStorage.getItem(key);
            try {
                return JSON.parse(result);
            }
            catch (error) {
                console.log("Error while getting storage item", key, error);
                return null;
            }
        }
    },

    setItem(key, value) {
        if (key != "") {
            if (!isBrowser) {
                return;
            }
            try {
                let setValue = window.localStorage.setItem(key, JSON.stringify(value));
                return setValue;
            }
            catch (error) {
                console.log("Error while set storage item", key, error);
                return null;
            }
        }
    },

    deleteKey(key) {
        if (!isBrowser) {
            return;
        }
        try {
            if (window.localStorage.getItem(key)) {
                window.localStorage.removeItem(key);
                return true;
            }
        } catch (error) {
            console.log("Error while in delete key", error);
            return null;
        }

    },

    clearStorage() {
        if (!isBrowser) {
            return;
        }
        try {
            window.localStorage.clear();
        }
        catch (error) {
            console.log("Error while clear storage", error);
        }
    }
}