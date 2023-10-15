"use client";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { MAPBOX_KEY, NEXT_API_URL } from "@/lib/config";
type props = {};

type City = {
  buses: [];
  name: string;
};

const CitySearch = () => {
  const [srchTerm, setSerchTerm] = useState<string>("");
  const [city, setCity] = useState<City[]>([]);

  const getCity = async () => {
    let res = await fetch(`api/city/get-cities?q=${srchTerm}`);
    res = await res.json();
    console.log(res);
    // @ts-expect-error
    setCity(res);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerchTerm(e.target.value);
  };

  console.log(MAPBOX_KEY);
  useEffect(() => {
    getCity();
  }, [srchTerm]);

  return (
    <>
      {" "}
      <Input
        onChange={(e) => {
          handleSearch(e);
        }}
        placeholder="Enter City You Want To Travel"
      />
      <div className="flex flex-row flex-wrap gap-4 items-center mt-10">
        {city.map((cit: City) => {
          return (
            <Link href={`/${cit.name}`} key={cit.name}>
              <Card className="w-[300px] cursor-pointer h-[300px] transition-transform transform hover:scale-105">
                <CardContent className="p-2 relative">
                  <div className="relative">
                    <img
                      className="rounded-t-md"
                      src="https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Hawa-mahal.jpg"
                      alt="Jaipur"
                    />
                    <span className="absolute top-0 left-0 p-2 text-white bg-blue-500 rounded-tl-md">
                      {cit.name}
                    </span>
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold">
                      Explore <span className="text-gradient">{cit.name}</span>
                    </h2>
                    <p className="mt-2 text-sm">
                      Jaipur, also known as the Pink City
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CitySearch;
