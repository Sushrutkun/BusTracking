import Image from "next/image";
import { useTheme } from "next-themes";
import HeroSection from "@/components/HeroSection/HeroSection";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import CitySearch from "@/components/CitySearch";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <CitySearch />
    </div>
  );
}
