import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Rocket,
  Star,
  Satellite,
  ExternalLink,
  Download,
  Thermometer,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";
import Papa from "papaparse";

type MissionPoint = {
  time: string;
  altitude: number;
  temperature: number;
  pressure: number;
  speed: number;
};

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export function MissionDataFullSection() {
  const [missionData, setMissionData] = useState<MissionPoint[]>([]);

  useEffect(() => {
    fetch("/weather_balloon_flight_log.csv")
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const parsed = (results.data as any[])
              .filter((row) => row.Elapsed_Time_s && row.Altitude_m)
              .map((row: any) => {
                const elapsed = parseInt(row.Elapsed_Time_s);
                return {
                  time: formatTime(elapsed),
                  altitude: parseFloat(row.Altitude_m) * 3.28084,
                  temperature: parseFloat(row.Temperature_C),
                  pressure: parseFloat(row.Pressure_hPa),
                  speed: parseFloat(row.Vertical_Velocity_mps),
                };
              });
            setMissionData(parsed);
          },
        });
      });
  }, []);

  return (
    <section id="flight-details" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Mission Data
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Flight Overview & Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive mission data and real-time telemetry from our
            high-altitude balloon flight
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Rocket className="h-5 w-5 text-primary" />
                <span>Max Altitude</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">
                105,847 ft
              </div>
              <p className="text-sm text-muted-foreground">
                Reached stratosphere successfully
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span>Flight Duration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">3h 42m</div>
              <p className="text-sm text-muted-foreground">
                From launch to recovery
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Satellite className="h-5 w-5 text-primary" />
                <span>Data Collected</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">2.4 GB</div>
              <p className="text-sm text-muted-foreground">
                Scientific measurements
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Chart 1: Altitude and Speed Profile */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Rocket className="h-5 w-5 text-primary" />
                <span>Altitude & Speed Profile</span>
              </CardTitle>
              <CardDescription>
                Flight altitude and speed over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={missionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.3}
                    />
                    <XAxis
                      dataKey="time"
                      stroke="#9CA3AF"
                      fontSize={12}
                      tick={{ fill: "#9CA3AF" }}
                    />
                    <YAxis
                      yAxisId="altitude"
                      orientation="left"
                      stroke="#F97316"
                      fontSize={12}
                      tick={{ fill: "#F97316" }}
                      label={{
                        value: "Altitude (ft)",
                        angle: -90,
                        position: "insideLeft",
                        style: { textAnchor: "middle", fill: "#F97316" },
                      }}
                    />
                    <YAxis
                      yAxisId="speed"
                      orientation="right"
                      stroke="#3B82F6"
                      fontSize={12}
                      tick={{ fill: "#3B82F6" }}
                      label={{
                        value: "Speed (m/s)",
                        angle: 90,
                        position: "insideRight",
                        style: { textAnchor: "middle", fill: "#3B82F6" },
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                      labelStyle={{ color: "#F97316" }}
                    />
                    <Legend />
                    <Area
                      yAxisId="altitude"
                      type="monotone"
                      dataKey="altitude"
                      stroke="#F97316"
                      fill="#F97316"
                      fillOpacity={0.3}
                      strokeWidth={3}
                      name="Altitude (ft)"
                    />
                    <Line
                      yAxisId="speed"
                      type="monotone"
                      dataKey="speed"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                      name="Speed (m/s)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Chart 2: Environmental Conditions */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-primary" />
                <span>Environmental Conditions</span>
              </CardTitle>
              <CardDescription>
                Temperature and atmospheric pressure readings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={missionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.3}
                    />
                    <XAxis
                      dataKey="time"
                      stroke="#9CA3AF"
                      fontSize={12}
                      tick={{ fill: "#9CA3AF" }}
                    />
                    <YAxis
                      yAxisId="temperature"
                      orientation="left"
                      stroke="#EF4444"
                      fontSize={12}
                      tick={{ fill: "#EF4444" }}
                      label={{
                        value: "Temperature (°C)",
                        angle: -90,
                        position: "insideLeft",
                        style: { textAnchor: "middle", fill: "#EF4444" },
                      }}
                    />
                    <YAxis
                      yAxisId="pressure"
                      orientation="right"
                      stroke="#10B981"
                      fontSize={12}
                      tick={{ fill: "#10B981" }}
                      label={{
                        value: "Pressure (hPa)",
                        angle: 90,
                        position: "insideRight",
                        style: { textAnchor: "middle", fill: "#10B981" },
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                      labelStyle={{ color: "#F97316" }}
                    />
                    <Legend />
                    <Line
                      yAxisId="temperature"
                      type="monotone"
                      dataKey="temperature"
                      stroke="#EF4444"
                      strokeWidth={3}
                      dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                      name="Temperature (°C)"
                    />
                    <Line
                      yAxisId="pressure"
                      type="monotone"
                      dataKey="pressure"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                      name="Pressure (hPa)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-8">
          <CardHeader>
            <CardTitle>Mission Data Summary</CardTitle>
            <CardDescription>
              Key telemetry points and measurements from the flight
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="text-center p-4 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">-70°C</div>
                <div className="text-sm text-muted-foreground">
                  Min Temperature
                </div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">10 hPa</div>
                <div className="text-sm text-muted-foreground">
                  Min Pressure
                </div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">35 m/s</div>
                <div className="text-sm text-muted-foreground">Max Speed</div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">16 pts</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
              >
                <ExternalLink className="h-4 w-4" />
                <a href="/report" target="_blank">View Full Report</a>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
              >
                <Download className="h-4 w-4" />
                <a
                  href="/images/weather_balloon_flight_log.csv"
                  download="weather_balloon_flight_log.csv"
                >
                  Download CSV Data
                </a>
              </Button>

              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
              >
                <Download className="h-4 w-4" />
                <a
                  href="/images/mission-report.pdf"
                  download="qsat-mission-report.pdf"
                >
                  Download PDF Report
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
  