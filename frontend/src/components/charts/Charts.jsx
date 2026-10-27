"use client";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const COLORS = ["#166534", "#16a34a", "#65a30d", "#ca8a04", "#b45309", "#0f766e"];
export const DonutChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={260}><PieChart><Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90}>{data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}</Pie><Tooltip /><Legend /></PieChart></ResponsiveContainer>
);
export const BarSimple = ({ data }) => (
  <ResponsiveContainer width="100%" height={260}><BarChart data={data}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="value" fill="#166534" radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer>
);
export const LineSimple = ({ data }) => (
  <ResponsiveContainer width="100%" height={260}><LineChart data={data}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Line dataKey="value" stroke="#16a34a" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer>
);