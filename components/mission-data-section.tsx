import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Star, Satellite, ExternalLink, Download, Thermometer } from "lucide-react"
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
} from "recharts"

const missionData = [
  { time: "00:00", altitude: 0, temperature: 15, pressure: 1013, speed: 0 },
  { time: "00:15", altitude: 5000, temperature: 8, pressure: 850, speed: 12 },
  { time: "00:30", altitude: 15000, temperature: -5, pressure: 650, speed: 18 },
  { time: "00:45", altitude: 30000, temperature: -25, pressure: 400, speed: 22 },
  { time: "01:00", altitude: 50000, temperature: -45, pressure: 200, speed: 25 },
  { time: "01:15", altitude: 70000, temperature: -55, pressure: 100, speed: 28 },
  { time: "01:30", altitude: 85000, temperature: -60, pressure: 50, speed: 30 },
  { time: "01:45", altitude: 95000, temperature: -65, pressure: 25, speed: 32 },
  { time: "02:00", altitude: 105847, temperature: -70, pressure: 10, speed: 35 },
  { time: "02:15", altitude: 102000, temperature: -68, pressure: 12, speed: 30 },
  { time: "02:30", altitude: 95000, temperature: -62, pressure: 25, speed: 25 },
  { time: "02:45", altitude: 80000, temperature: -55, pressure: 60, speed: 20 },
  { time: "03:00", altitude: 60000, temperature: -40, pressure: 150, speed: 15 },
  { time: "03:15", altitude: 35000, temperature: -20, pressure: 350, speed: 12 },
  { time: "03:30", altitude: 15000, temperature: 0, pressure: 600, speed: 8 },
  { time: "03:42", altitude: 0, temperature: 12, pressure: 1013, speed: 0 },
]

export function MissionDataSection() {
  return (
    <section id="flight-details" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Mission Data</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Flight Overview & Performance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive mission data and real-time telemetry from our high-altitude balloon flight
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
              <div className="text-3xl font-bold text-primary mb-2">105,847 ft</div>
              <p className="text-sm text-muted-foreground">Reached stratosphere successfully</p>
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
              <p className="text-sm text-muted-foreground">From launch to recovery</p>
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
              <p className="text-sm text-muted-foreground">Scientific measurements</p>
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
              <CardDescription>Flight altitude and speed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={missionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} tick={{ fill: "#9CA3AF" }} />
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
              <CardDescription>Temperature and atmospheric pressure readings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={missionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} tick={{ fill: "#9CA3AF" }} />
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
            <CardDescription>Key telemetry points and measurements from the flight</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="text-center p-4 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">-70°C</div>
                <div className="text-sm text-muted-foreground">Min Temperature</div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">10 hPa</div>
                <div className="text-sm text-muted-foreground">Min Pressure</div>
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
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <ExternalLink className="h-4 w-4" />
                <span>View Full Report</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Download className="h-4 w-4" />
                <span>Download CSV Data</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Download className="h-4 w-4" />
                <span>Download PDF Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
