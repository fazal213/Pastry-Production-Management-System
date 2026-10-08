import React from "react";
import {
  BarChart3, Bell, Box, CalendarDays, ChevronDown, ClipboardList,
  FileBarChart, Home, LogOut, Package, Search, Settings, ShoppingBag,
  Store, Truck, Users, WalletCards, XCircle
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, LineChart, Line
} from "recharts";

const salesPurchase = [
  {m:"Jan", purchase:55000, sales:49000}, {m:"Feb", purchase:58000, sales:48000},
  {m:"Mar", purchase:45000, sales:53000}, {m:"Apr", purchase:37000, sales:44000},
  {m:"May", purchase:44000, sales:47000}, {m:"Jun", purchase:29000, sales:42000},
  {m:"Jul", purchase:55000, sales:50000}, {m:"Aug", purchase:45000, sales:43000},
  {m:"Sep", purchase:45000, sales:44000}, {m:"Oct", purchase:37000, sales:44000}
];

const orders = [
  {m:"Jan", ordered:3700, delivered:3200}, {m:"Feb", ordered:2200, delivered:3700},
  {m:"Mar", ordered:2500, delivered:3500}, {m:"Apr", ordered:1400, delivered:2800},
  {m:"May", ordered:2100, delivered:3400}
];

const nav = [
  [Home, "Dashboard"], [Truck, "Inventory"], [BarChart3, "Reports"],
  [Users, "Suppliers"], [Box, "Orders"], [ClipboardList, "Manage Store"]
];

function Metric({icon:Icon, value, label, tone="blue"}) {
  return <div className="metric">
    <div className={`metric-icon ${tone}`}><Icon size={22}/></div>
    <div className="metric-value">{value}</div>
    <div className="metric-label">{label}</div>
  </div>
}

function Section({title, children, className=""}) {
  return <section className={`card ${className}`}>
    <h2>{title}</h2>{children}
  </section>
}

function App() {
  return <div className="app">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">R</div><span>Rajabojun</span></div>
      <nav>{nav.map(([Icon,label],i)=><div className={`nav-item ${i===0?"active":""}`} key={label}>
        <Icon size={20}/><span>{label}</span>
      </div>)}</nav>
      <div className="sidebar-bottom">
        <div className="nav-item"><Settings size={20}/><span>Settings</span></div>
        <div className="nav-item"><LogOut size={20}/><span>Log Out</span></div>
      </div>
    </aside>

    <main>
      <header className="topbar">
        <div className="search"><Search size={20}/><input placeholder="Search product, supplier, order"/></div>
        <div className="top-actions"><Bell size={20}/><div className="avatar">F</div></div>
      </header>

      <div className="content">
        <div className="dashboard-grid">
          <Section title="Sales Overview" className="sales-overview">
            <div className="metrics four">
              <Metric icon={WalletCards} value="₹ 832" label="Sales" tone="blue"/>
              <Metric icon={BarChart3} value="₹ 18,300" label="Revenue" tone="purple"/>
              <Metric icon={BarChart3} value="₹ 868" label="Profit" tone="orange"/>
              <Metric icon={WalletCards} value="₹ 17,432" label="Cost" tone="green"/>
            </div>
          </Section>

          <Section title="Inventory Summary">
            <div className="metrics two">
              <Metric icon={Package} value="868" label="Quantity in Hand" tone="orange"/>
              <Metric icon={Package} value="200" label="To be received" tone="purple"/>
            </div>
          </Section>

          <Section title="Purchase Overview">
            <div className="metrics four">
              <Metric icon={ShoppingBag} value="82" label="Purchase" tone="blue"/>
              <Metric icon={WalletCards} value="₹ 13,573" label="Cost" tone="green"/>
              <Metric icon={XCircle} value="5" label="Cancel" tone="purple"/>
              <Metric icon={BarChart3} value="₹17,432" label="Return" tone="orange"/>
            </div>
          </Section>

          <Section title="Product Summary">
            <div className="metrics two">
              <Metric icon={Users} value="31" label="Number of Suppliers" tone="blue"/>
              <Metric icon={ClipboardList} value="21" label="Number of Categories" tone="purple"/>
            </div>
          </Section>

          <Section title="Sales & Purchase" className="chart-card">
            <button className="period"><CalendarDays size={17}/> Weekly <ChevronDown size={15}/></button>
            <div className="chart"><ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesPurchase} barGap={8}>
                <CartesianGrid vertical={false} stroke="#dfe3e8"/>
                <XAxis dataKey="m" tickLine={false} axisLine={false}/>
                <YAxis tickLine={false} axisLine={false} tickFormatter={(v)=>`${v/1000}k`} domain={[0,60000]}/>
                <Tooltip/>
                <Bar dataKey="purchase" name="Purchase" fill="#65c8e9" radius={[5,5,0,0]} barSize={14}/>
                <Bar dataKey="sales" name="Sales" fill="#4dc765" radius={[5,5,0,0]} barSize={14}/>
                <Legend iconType="circle" />
              </BarChart>
            </ResponsiveContainer></div>
          </Section>

          <Section title="Order Summary" className="chart-card order-chart">
            <div className="chart"><ResponsiveContainer width="100%" height="100%">
              <LineChart data={orders}>
                <CartesianGrid vertical={false} stroke="#e4e5e7"/>
                <XAxis dataKey="m" tickLine={false} axisLine={false}/>
                <YAxis tickLine={false} axisLine={false} domain={[0,4000]} ticks={[0,1000,2000,3000,4000]}/>
                <Tooltip/>
                <Line type="monotone" dataKey="ordered" name="Ordered" stroke="#dfa254" strokeWidth={3} dot={false}/>
                <Line type="monotone" dataKey="delivered" name="Delivered" stroke="#a9c9fa" strokeWidth={3} dot={false}/>
                <Legend iconType="circle"/>
              </LineChart>
            </ResponsiveContainer></div>
          </Section>

          <Section title="Top Selling Stock" className="table-card">
            <a className="see-all">See All</a>
            <table><thead><tr><th>Name</th><th>Sold Quantity</th><th>Remaining Quantity</th><th>Price</th></tr></thead>
            <tbody>
              <tr><td>Surf Excel</td><td>30</td><td>12</td><td>₹ 100</td></tr>
              <tr><td>Rin</td><td>21</td><td>15</td><td>₹ 207</td></tr>
              <tr><td>Parle G</td><td>19</td><td>17</td><td>₹ 105</td></tr>
            </tbody></table>
          </Section>

          <Section title="Low Quantity Stock" className="low-stock">
            <a className="see-all">See All</a>
            {[
              ["🧂","Tata Salt","10 Packet"],["🥔","Lays","15 Packet"],["🥔","Lays","15 Packet"]
            ].map(([img,name,qty],i)=><div className="stock-row" key={i}>
              <div className="product-thumb">{img}</div>
              <div><strong>{name}</strong><span>Remaining Quantity : {qty}</span></div>
              <b>Low</b>
            </div>)}
          </Section>
        </div>
      </div>
    </main>
  </div>
}

export default App;