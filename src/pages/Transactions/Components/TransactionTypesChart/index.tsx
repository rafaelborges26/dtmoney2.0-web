import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Container } from './styles'
import { formatarReal } from '../../../../utils/formatter';
const COLORS = [
  '#60A5FA', // azul claro forte
  '#34D399', // verde claro vibrante
  '#FBBF24', // amarelo dourado
  '#F87171', // vermelho claro
  '#A78BFA', // lilás vivo
  '#F472B6', // rosa vibrante
  '#4ADE80', // verde limão
  '#38BDF8', // azul água claro
];
export function ExpensePieChart({ data }: { data: { value: number; type: string }[] }) {

  return (
    <Container>
      <ResponsiveContainer width="90%" height="90%">
        <PieChart style={{ fontSize: 12 }}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="type"
            cx="50%"
            cy="50%"
            stroke="#1E1E2E" // mantém o mesmo tom do fundo
            outerRadius={86}
            innerRadius={64}
            strokeWidth={6}
            labelLine={false}
            label={({ cx, cy, midAngle=0, innerRadius, outerRadius, value, index }) => {
              const RADIAN = Math.PI / 180
              const radius = 12 + innerRadius + (outerRadius - innerRadius)
              const x = cx + radius * Math.cos(-midAngle * RADIAN)
              const y = cy + radius * Math.sin(-midAngle * RADIAN)

              return (
                <text
                  x={x}
                  y={y}
                  style={{
                      fill: '#d1d5db',
                      fontSize: '12px',
                      userSelect: 'none',
                    }}                  
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {data[index].type.length > 12
                    ? data[index].type.substring(0, 12).concat('...')
                    : data[index].type}{' '}
                  ({formatarReal(value)})
                </text>
              )
            }}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className="hover:opacity-80 transition-opacity"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Container>
  )
}
