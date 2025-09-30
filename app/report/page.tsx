"use client"
import { MissionDataSection} from "@/components/mission-data-section";
import { Navigation } from "@/components/navigation";
import { ParkSatSection } from "@/components/parksat-section";

export default function ReportPage() {
  return (
    <div >
      <Navigation />
      <MissionDataSection />
      <ParkSatSection />
    </div>
  );
}