"use client"
import { MissionDataSection} from "@/components/mission-data-section";
import { Navigation } from "@/components/navigation";
import { ParkFullSatSection } from "@/components/park-full-sat";
import { MissionDataFullSection } from "@/components/mission-full-data";
export default function ReportPage() {
  return (
    <div >
      <Navigation />
      <MissionDataFullSection />
      <ParkFullSatSection />
    </div>
  );
}