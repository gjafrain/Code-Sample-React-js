import { useContext } from 'react';
import { toast } from 'react-toastify';
import languageContext from './context';

export const getValue = (key) => localStorage.getItem(key);
export const setValue = (key, value) => localStorage.setItem(key, value);
export const removeValue = (key) => localStorage.removeItem(key);
export const multiRemoveValue = (key) => localStorage.clear(key);


export const errorMessage = (message = "Error !") => {
    toast.error(message);
}

export const successMessage = (message = "Success !") => {
    toast.success(message);
}

export const infoMessage = (message = "Informartion !") => {
    toast.info(message);
}

export const warningMessage = (message = "Warning !") => {
    toast.warning(message);
}


export const toggleDimmer = (status = false) => {
    var event = new CustomEvent("ToggleDimmer");
    event.show = status;
    window.dispatchEvent(event);
}

export const AlertSound = () => {
    // NotificationSounds
    //     .getNotifications('notification')
    //     .then(soundsList => playSampleSound(soundsList[5]))
}

export const Localize = (text = "") => {

    if (!/[⚑]/.test(text)) return text;

    text = text.split("⚑")
    if (global.consts.type === 'hn') return text[1] || text[0]
    else return text[0]
}


export const distance = (lat1, lon1, lat2 = 29.6857, lon2 = 76.9905, unit = "K") => {
    if ((lat1 == lat2) && (lon1 == lon2)) return 0;
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) dist = 1;
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}