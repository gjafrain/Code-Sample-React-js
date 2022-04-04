import { useEffect } from "react";
import { View } from "../../../../../atoms";

export default function MapView({ state, mapRef, markerRef, postionChangeCallBack }) {

    useEffect(() => {
        mapRef.current = new window.google.maps.Map(document.getElementById("map-init"), {
            center: { lat: state.latitude, lng: state.longitude },
            zoom: 16,
            mapTypeControl: false,
            panControl: false,
            overviewMapControl: false,
            rotateControl: false,
            scaleControl: false,
        });

        markerRef.current = new window.google.maps.Marker({
            position: { lat: state.latitude, lng: state.longitude },
            map: mapRef.current,
        });

        mapRef.current.addListener("center_changed", postionChangeCallBack)
    }, [])

    return <View className="map-wrapper">
        <div id="map-init" className="map-init" />
        <div id="map-err" className={`error-msg `}>
            Sorry we don't deliver here yet. Please select another location
        </div>
    </View>;
}
