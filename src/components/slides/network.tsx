/*
 * Abstract "digital network" motif, generated from a fixed seed so it renders
 * identically on every load (and on the server). Purely decorative.
 */

type Hub = { x: number; y: number; label: string };

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function build(width: number, height: number, count: number, seed: number, hubs: Hub[]) {
  const rand = mulberry32(seed);
  const nodes = [
    ...hubs.map((h) => ({ x: h.x, y: h.y, r: 0 })),
    ...Array.from({ length: count }, () => ({
      x: 20 + rand() * (width - 40),
      y: 20 + rand() * (height - 40),
      r: 2 + rand() * 3.5,
    })),
  ];
  const maxDist = Math.min(width, height) * 0.2;
  const edges: [number, number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (d < maxDist) edges.push([i, j, 1 - d / maxDist]);
    }
  }
  return { nodes, edges };
}

export default function Network({
  width = 900,
  height = 900,
  count = 70,
  seed = 7,
  hubs = [],
  className = "",
}: {
  width?: number;
  height?: number;
  count?: number;
  seed?: number;
  hubs?: Hub[];
  className?: string;
}) {
  const { nodes, edges } = build(width, height, count, seed, hubs);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} className={className} aria-hidden>
      {edges.map(([a, b, s], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#A3A9FE"
          strokeOpacity={0.08 + s * 0.3}
          strokeWidth={1.5}
          pathLength={1}
          className="net-line"
          style={{ animationDelay: `${200 + (i % 40) * 25}ms` }}
        />
      ))}
      {nodes.slice(hubs.length).map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#A3A9FE"
          fillOpacity={0.35 + (n.r / 5.5) * 0.4}
          className={i % 3 === 0 ? "net-node" : undefined}
          style={i % 3 === 0 ? { animationDelay: `${(i * 370) % 3200}ms` } : undefined}
        />
      ))}
      {hubs.map((h) => (
        <g key={h.label}>
          <circle cx={h.x} cy={h.y} r={34} fill="#6E41F4" fillOpacity={0.18} className="net-halo" />
          <circle cx={h.x} cy={h.y} r={12} fill="#6E41F4" />
          <circle cx={h.x} cy={h.y} r={5} fill="#FFFFFF" />
          <text
            x={h.x}
            y={h.y + 62}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize={26}
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
          >
            {h.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
