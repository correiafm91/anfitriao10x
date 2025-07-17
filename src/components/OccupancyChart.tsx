
import { motion } from "framer-motion";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const occupancyData = [
  { month: "Jan", occupancy: 45, bookings: 12 },
  { month: "Fev", occupancy: 52, bookings: 15 },
  { month: "Mar", occupancy: 68, bookings: 21 },
  { month: "Abr", occupancy: 78, bookings: 24 },
  { month: "Mai", occupancy: 85, bookings: 26 },
  { month: "Jun", occupancy: 92, bookings: 28 }
];

const chartConfig = {
  occupancy: {
    label: "Taxa de Ocupação (%)",
    color: "#FF6B35"
  },
  bookings: {
    label: "Reservas por Mês",
    color: "#FFA500"
  }
};

const OccupancyChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass glass-hover rounded-xl p-8"
    >
      <h3 className="text-2xl font-bold mb-2 text-center">
        Taxa de <span className="text-primary">Ocupação</span>
      </h3>
      <p className="text-muted-foreground text-center mb-8">
        Evolução da ocupação após implementação das estratégias
      </p>
      
      <ChartContainer config={chartConfig} className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={occupancyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#A0A0A0', fontSize: 12 }}
              axisLine={{ stroke: '#4A5568' }}
            />
            <YAxis 
              tick={{ fill: '#A0A0A0', fontSize: 12 }}
              axisLine={{ stroke: '#4A5568' }}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                name === "Taxa de Ocupação (%)" ? `${value}%` : `${value} reservas`,
                name
              ]}
            />
            <Line 
              type="monotone" 
              dataKey="occupancy" 
              stroke="#FF6B35" 
              strokeWidth={3}
              dot={{ fill: '#FF6B35', strokeWidth: 2, r: 6 }}
              name="Taxa de Ocupação (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Aumento médio de <span className="text-primary font-bold">47%</span> na taxa de ocupação
        </p>
      </div>
    </motion.div>
  );
};

export default OccupancyChart;
