"use client";
import { Card } from "@/components/ui/card";
import React, { useEffect, useState, useRef } from "react";
import { Icons } from "@/components/Icons";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import axios from "axios";
import busIcon from "./bus.png";
import busIcon2 from "./bus2.png";
import Image from "next/image";
import "react-vertical-timeline-component/style.min.css";
import { Button } from "@/components/ui/button";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Timeline from "@/components/Custom/Timeline";
import MarkerIcon from "@/components/Custom/marker.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MAPBOX_KEY, NEXT_API_URL } from "@/lib/config";
interface pageProps {
  params: {
    city: string;
  };
}

type Buses = {
  name: string;
  route: string;
  capacity: number;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  lat: number;
  lng: number;
};

const Page = ({ params }: pageProps) => {
  const [cityBuses, setCityBuses] = useState<Buses[]>([]);
  const [selectedBus, setSelectedBus] = useState(null); // State to track the selected bus
  const [refresh, setRefresh] = useState(false);
  const [stops, setStops] = useState([
    {
      name: "City Center",
      arrivalTime: "2:00 PM",
    },
    {
      name: "City Center West",
      arrivalTime: "2:15 PM",
    },
    {
      name: "Suburb Market",
      arrivalTime: "2:30 PM",
    },
    {
      name: "Suburb",
      arrivalTime: "4:00 PM",
    },
  ]); // State to track the stops of the selected bus
  const mapRef = useRef(null);
  useEffect(() => {
    const getBuses = async () => {
      try {
        const { data } = await axios.get(`api/city/get-buses?q=${params.city}`);
        // console.log(data);
        setCityBuses(data);

        // Set the map viewport to focus on the selected city and zoom in
        const bounds = calculateBoundingBox(data);
        if (bounds) {
          // @ts-ignore
          mapRef.current.getMap().fitBounds([
            [bounds.minLng, bounds.minLat],
            [bounds.maxLng, bounds.maxLat],
          ]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getBuses();
  }, [refresh]);

  const calculateBoundingBox = (data: Buses[]) => {
    if (data.length === 0) {
      return null;
    }

    const lngs = data.map((bus) => bus.lng);
    const lats = data.map((bus) => bus.lat);

    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);

    return {
      minLng,
      maxLng,
      minLat,
      maxLat,
    };
  };

  const handleBusClick = (bus: any) => {
    setSelectedBus(bus); // Set the selected bus when clicked
    // @ts-ignore
    mapRef.current.getMap().flyTo({
      // Fly to the bus location
      center: [bus.lng, bus.lat],
      zoom: 16,
    });
    // console.log(bus.stops);
    setStops((prev) => {
      return [...bus.stops];
    }); // Set the stops of the selected bus
    // console.log(stops);
  };

  return (
    <div className="">
      <div className="flex items-center flex-row justify-start">
        <div className="text-2xl p-2">{params.city}</div>
        <Button
          onClick={() => {
            setRefresh(!refresh);
          }}
        >
          Refresh
        </Button>
      </div>
      <div
        style={{
          overflowX: "scroll",
        }}
        className="h-[300px] w-full rounded-md border p-4"
      >
        <VerticalTimeline
          className="mt-16 flex"
          lineColor={"black"}
          layout="1-column-left"
        >
          {stops.map((item, index) => {
            // console.log(item);
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  textAlign: "left",
                  padding: "10px",
                  width: "200px",
                  height: "100px",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={item.arrivalTime}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image src={MarkerIcon} alt="" width={30} height={30} />
                  </div>
                }
              >
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <div className="flex flex-col sm:flex-row right-0 ">
        <div>
          <Map
            ref={mapRef}
            mapboxAccessToken={MAPBOX_KEY}
            style={{
              width: "50vw",
              height: "80vh",
              borderRadius: "15px",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {cityBuses.map((bus, index) => (
              <Marker key={index} longitude={bus.lng} latitude={bus.lat}>
                <Image
                  // @ts-ignore
                  src={selectedBus === bus ? busIcon2 : busIcon} // Use busIcon2 when selected
                  alt="Bus Marker"
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  onClick={() => handleBusClick(bus)} // Handle click event
                />
              </Marker>
            ))}
            <NavigationControl position="bottom-right" />
            <FullscreenControl />
            <GeolocateControl />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default Page;

// TODO: make it more user friendly in terms of ui - sidheesh
