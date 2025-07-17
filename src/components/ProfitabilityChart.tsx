
import { motion } from "framer-motion";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const profitabilityData = [
  { month: "Jan", before: 2500, after: 8500 },
  { month: "Fev", before: 2200, after: 9200 },
  { month: "Mar", before: 2800, after: 11800 },
  { month: "Abr", before: 2400, after: 12400 },
  { month: "Mai", before: 2600, after: 13600 },
  { month: "Jun", before: 3200, after: 15200 }
];

const chartConfig = {
  before: {
    label: "Antes da Consultoria",
    color: "#4A5568"
  },
  after: {
    label: "Depois da Consultoria", 
    color: "#FF6B35"
  }
};

const ProfitabilityChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass glass-hover rounded-xl p-8"
    >
      <h3 className="text-2xl font-bold mb-2 text-center">
        Rentabilidade <span className="text-primary">Antes vs Depois</span>
      </h3>
      <p className="text-muted-foreground text-center mb-8">
        Receita mensal média dos nossos clientes (R$)
      </p>
      
      <ChartContainer config={chartConfig} className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={profitabilityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#A0A0A0', fontSize: 12 }}
              axisLine={{ stroke: '#4A5568' }}
            />
            <YAxis 
              tick={{ fill: '#A0A0A0', fontSize: 12 }}
              axisLine={{ stroke: '#4A5568' }}
              tickFormatter={(value) => `R$ ${value.toLocaleString()}`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value, name) => [`R$ ${value.toLocaleString()}`, name]}
            />
            <Bar 
              dataKey="before" 
              fill="#4A5568" 
              radius={[4, 4, 0, 0]}
              name="Antes da Consultoria"
            />
            <Bar 
              dataKey="after" 
              fill="#FF6B35" 
              radius={[4, 4, 0, 0]}
              name="Depois da Consultoria"
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Crescimento médio de <span className="text-primary font-bold">400%</span> na receita mensal
        </p>
      </div>
    </motion.div>
  );
};

export default ProfitabilityChart;
