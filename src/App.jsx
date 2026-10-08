import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {
  BarChart3, Bell, Box, CalendarDays, ChevronDown, ClipboardList,
  Download, Filter, Home, LogOut, Package, Search, Settings, ShoppingBag,
  Users, WalletCards, Truck, Menu, X
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, LineChart, Line
} from "recharts";

const salesPurchase = [
  {m:"Jan", purchase:55000, sales:49000},{m:"Feb", purchase:58000, sales:48000},
  {m:"Mar", purchase:45000, sales:53000},{m:"Apr", purchase:37000, sales:44000},
  {m:"May", purchase:44000, sales:47000},{m:"Jun", purchase:29000, sales:42000},
  {m:"Jul", purchase:55000, sales:50000},{m:"Aug", purchase:45000, sales:43000},
  {m:"Sep", purchase:45000, sales:44000},{m:"Oct", purchase:37000, sales:44000}
];
const ordersChart = [
  {m:"Jan", ordered:3700, delivered:3200},{m:"Feb", ordered:2200, delivered:3700},
  {m:"Mar", ordered:2500, delivered:3500},{m:"Apr", ordered:1400, delivered:2800},
  {m:"May", ordered:2100, delivered:3400}
];
const profitRevenue = [
  {m:"Sep", revenue:24000, profit:41000},{m:"Oct", revenue:35000, profit:36000},
  {m:"Nov", revenue:30000, profit:43000},{m:"Dec", revenue:57000, profit:58000},
  {m:"Jan", revenue:52000, profit:55000},{m:"Feb", revenue:50000, profit:60000},
  {m:"Mar", revenue:41000, profit:43000}
];

const products = [
  ["Maggi","₹430","43 Packets","12 Packets","11/12/22","In- stock"],
  ["Bru","₹257","22 Packets","12 Packets","21/12/22","Out of stock"],
  ["Red Bull","₹405","36 Packets","9 Packets","5/12/22","In- stock"],
  ["Bourn Vita","₹502","14 Packets","6 Packets","8/12/22","Out of stock"],
  ["Horlicks","₹530","5 Packets","5 Packets","9/1/23","In- stock"],
  ["Harpic","₹605","10 Packets","5 Packets","9/1/23","In- stock"],
  ["Ariel","₹408","23 Packets","7 Packets","15/12/23","Out of stock"],
  ["Scotch Brite","₹359","43 Packets","8 Packets","6/6/23","In- stock"],
  ["Coca cola","₹205","41 Packets","10 Packets","11/11/22","Low stock"]
];

const supplierRows = [
  ["Richard Martin","Kit Kat","7687764556","richard@gmail.com","Taking Return","13"],
  ["Tom Homan","Maaza","9867545368","tomhoman@gmail.com","Taking Return","-"],
  ["Veandir","Dairy Milk","9867545566","veandier@gmail.com","Not Taking Return","-"],
  ["Charin","Tomato","9267545457","charin@gmail.com","Taking Return","12"],
  ["Hoffman","Milk Bikis","9367546531","hoffman@gmail.com","Taking Return","-"],
  ["Fainden Juke","Marie Gold","9667545982","fainden@gmail.com","Not Taking Return","9"],
  ["Martin","Saffola","9867545457","martin@gmail.com","Taking Return","-"],
  ["Joe Nike","Good day","9567545769","joenike@gmail.com","Taking Return","-"],
  ["Dender Luke","Apple","9667545980","dender@gmail.com","","7"],
  ["Martin","Saffola","9867545457","martin@gmail.com","Taking Return","-"],
  ["Joe Nike","Good day","9567545769","joenike@gmail.com","Taking Return","-"],
  ["Dender Luke","Apple","9667545980","dender@gmail.com","Not Taking Return","7"],
  ["Joe Nike","Good day","9567545769","joenike@gmail.com","Taking Return","-"],
  ["Joe Nike","Good day","9567545769","joenike@gmail.com","Taking Return","-"]
];

const orderRows = [
  ["Maggi","₹4306","43 Packets","7535","11/12/22","Delayed"],
  ["Bru","₹2557","22 Packets","5724","21/12/22","Confirmed"],
  ["Red Bull","₹4075","36 Packets","2775","5/12/22","Returned"],
  ["Bourn Vita","₹5052","14 Packets","2275","8/12/22","Out for delivery"],
  ["Horlicks","₹5370","5 Packets","2427","9/1/23","Returned"],
  ["Harpic","₹6065","10 Packets","2578","9/1/23","Out for delivery"],
  ["Ariel","₹4078","23 Packets","2757","15/12/23","Delayed"],
  ["Scotch Brite","₹3559","43 Packets","3757","6/6/23","Confirmed"],
  ["Coca cola","₹2055","41 Packets","2474","11/11/22","Delayed"]
];

function Brand(){
  return <div className="brand"><div className="brand-mark">R</div><div><strong>R RAJABOJUN</strong><small>INVENTORY</small></div></div>;
}
function Sidebar({open,close}){
  const links=[
    ["/",Home,"Dashboard"],["/inventory",Truck,"Inventory"],["/reports",BarChart3,"Reports"],
    ["/suppliers",Users,"Suppliers"],["/orders",Box,"Orders"],["/manage-store",ClipboardList,"Manage Store"]
  ];
  return <aside className={`sidebar ${open?"open":""}`}>
    <div className="sidebar-head"><Brand/><button className="mobile-close" onClick={close}><X/></button></div>
    <nav>{links.map(([to,Icon,label])=>
      <NavLink key={to} to={to} onClick={close} className={({isActive})=>`nav-item ${isActive?"active":""}`}>
        <Icon size={20}/><span>{label}</span>
      </NavLink>)}</nav>
    <div className="sidebar-bottom">
      <NavLink to="/settings" className={({isActive})=>`nav-item ${isActive?"active":""}`} onClick={close}><Settings size={20}/><span>Settings</span></NavLink>
      <div className="nav-item"><LogOut size={20}/><span>Log Out</span></div>
    </div>
  </aside>;
}
function Header({setOpen}){
  return <header className="topbar">
    <button className="mobile-menu" onClick={()=>setOpen(true)}><Menu/></button>
    <div className="search"><Search size={20}/><input placeholder="Search product, supplier, order"/></div>
    <div className="top-actions"><Bell size={20}/><div className="avatar">R</div></div>
  </header>;
}
function Card({title,children,className=""}){return <section className={`card ${className}`}><h2>{title}</h2>{children}</section>}
function Metric({icon:Icon,value,label,tone="blue"}){
  return <div className="metric"><div className={`metric-icon ${tone}`}><Icon size={22}/></div><div><div className="metric-value">{value}</div><div className="metric-label">{label}</div></div></div>;
}
function SummaryStrip({items}){
  return <div className="summary-grid">{items.map((x,i)=><div className={`summary-item ${x.tone||""}`} key={i}>
    <strong>{x.title}</strong><div className="summary-values"><b>{x.value}</b>{x.second&&<b>{x.second}</b>}</div>
    <div className="summary-labels"><span>{x.label}</span>{x.label2&&<span>{x.label2}</span>}</div>
  </div>)}</div>;
}
function ActionBar({right="Download all",addLabel="Add Product"}){
  return <div className="action-bar"><button className="primary">{addLabel}</button><button><Filter size={17}/>Filters</button><button>{right==="Download all"&&<Download size={17}/>} {right}</button></div>;
}
function Table({headers,rows,type}){
  return <div className="table-wrap"><table><thead><tr>{headers.map(h=><th key={h}>{h}</th>)}</tr></thead>
    <tbody>{rows.map((row,i)=><tr key={i}>{row.map((cell,j)=>{
      let cls="";
      if(type==="supplier"&&j===4) cls=cell==="Taking Return"?"positive":"negative";
      if(type==="product"&&j===5) cls=cell==="In- stock"?"positive":cell==="Low stock"?"warning":"negative";
      if(type==="order"&&j===5) cls=cell==="Confirmed"||cell==="Out for delivery"?"positive":cell==="Delayed"?"warning":cell==="Returned"?"neutral":"";
      return <td className={cls} key={j}>{cell}</td>;
    })}</tr>)}</tbody></table></div>;
}
function Pagination(){return <div className="pagination"><button>Previous</button><span>Page 1 of 10</span><button>Next</button></div>}

function Dashboard(){
  return <div className="page-grid">
    <Card title="Sales Overview"><div className="metrics four">
      <Metric icon={WalletCards} value="₹ 832" label="Sales" tone="blue"/><Metric icon={BarChart3} value="₹ 18,300" label="Revenue" tone="purple"/>
      <Metric icon={BarChart3} value="₹ 868" label="Profit" tone="orange"/><Metric icon={WalletCards} value="₹ 17,432" label="Cost" tone="green"/>
    </div></Card>
    <Card title="Inventory Summary"><div className="metrics two"><Metric icon={Package} value="868" label="Quantity in Hand" tone="orange"/><Metric icon={Package} value="200" label="To be received" tone="purple"/></div></Card>
    <Card title="Purchase Overview"><div className="metrics four">
      <Metric icon={ShoppingBag} value="82" label="Purchase" tone="blue"/><Metric icon={WalletCards} value="₹ 13,573" label="Cost" tone="green"/>
      <Metric icon={WalletCards} value="5" label="Cancel" tone="purple"/><Metric icon={BarChart3} value="₹17,432" label="Return" tone="orange"/>
    </div></Card>
    <Card title="Product Summary"><div className="metrics two"><Metric icon={Users} value="31" label="Number of Suppliers" tone="blue"/><Metric icon={ClipboardList} value="21" label="Number of Categories" tone="purple"/></div></Card>
    <Card title="Sales & Purchase" className="chart-card"><button className="period"><CalendarDays size={16}/> Weekly <ChevronDown size={14}/></button>
      <div className="chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={salesPurchase} barGap={8}><CartesianGrid vertical={false} stroke="#dfe3e8"/><XAxis dataKey="m" tickLine={false} axisLine={false}/><YAxis tickLine={false} axisLine={false} tickFormatter={v=>`${v/1000}k`} domain={[0,60000]}/><Tooltip/><Bar dataKey="purchase" name="Purchase" fill="#65c8e9" radius={[5,5,0,0]} barSize={14}/><Bar dataKey="sales" name="Sales" fill="#4dc765" radius={[5,5,0,0]} barSize={14}/><Legend iconType="circle"/></BarChart></ResponsiveContainer></div>
    </Card>
    <Card title="Order Summary" className="chart-card"><div className="chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={ordersChart}><CartesianGrid vertical={false} stroke="#e4e5e7"/><XAxis dataKey="m" tickLine={false} axisLine={false}/><YAxis tickLine={false} axisLine={false} domain={[0,4000]}/><Tooltip/><Line type="monotone" dataKey="ordered" name="Ordered" stroke="#dfa254" strokeWidth={3} dot={false}/><Line type="monotone" dataKey="delivered" name="Delivered" stroke="#a9c9fa" strokeWidth={3} dot={false}/><Legend iconType="circle"/></LineChart></ResponsiveContainer></div></Card>
    <Card title="Top Selling Stock" className="table-card"><a>See All</a><Table headers={["Name","Sold Quantity","Remaining Quantity","Price"]} rows={[["Surf Excel","30","12","₹ 100"],["Rin","21","15","₹ 207"],["Parle G","19","17","₹ 105"]]}/></Card>
    <Card title="Low Quantity Stock" className="low-stock"><a>See All</a>{[["🧂","Tata Salt","10 Packet"],["🥔","Lays","15 Packet"],["🥔","Lays","15 Packet"]].map((r,i)=><div className="stock-row" key={i}><div className="product-thumb">{r[0]}</div><div><strong>{r[1]}</strong><span>Remaining Quantity : {r[2]}</span></div><b>Low</b></div>)}</Card>
  </div>;
}

function Inventory(){
  return <div className="single-page">
    <Card title="Overall Inventory" className="inventory-summary"><SummaryStrip items={[
      {title:"Categories",value:"14",label:"Last 7 days",tone:"blue"},{title:"Total Products",value:"868",second:"₹25000",label:"Last 7 days",label2:"Revenue",tone:"orange"},
      {title:"Top Selling",value:"5",second:"₹2500",label:"Last 7 days",label2:"Cost",tone:"purple"},{title:"Low Stocks",value:"12",second:"2",label:"Ordered",label2:"Not in stock",tone:"red"}
    ]}/></Card>
    <Card title="Products" className="large-table"><ActionBar/><Table type="product" headers={["Products","Buying Price","Quantity","Threshold Value","Expiry Date","Availability"]} rows={products}/><Pagination/></Card>
  </div>;
}
function Suppliers(){
  return <div className="single-page"><Card title="Suppliers" className="large-table"><ActionBar/><Table type="supplier" headers={["Supplier Name","Product","Contact Number","Email","Type","On the way"]} rows={supplierRows}/><Pagination/></Card></div>;
}
function Orders(){
  return <div className="single-page">
    <Card title="Overall Orders" className="inventory-summary"><SummaryStrip items={[
      {title:"Total Orders",value:"37",label:"Last 7 days",tone:"blue"},{title:"Total Received",value:"32",second:"₹25000",label:"Last 7 days",label2:"Revenue",tone:"orange"},
      {title:"Total Returned",value:"5",second:"₹2500",label:"Last 7 days",label2:"Cost",tone:"purple"},{title:"On the way",value:"12",second:"₹ 2356",label:"Ordered",label2:"Cost",tone:"red"}
    ]}/></Card>
    <Card title="Orders" className="large-table"><ActionBar right="Order History"/><Table type="order" headers={["Products","Order Value","Quantity","Order ID","Expected Delivery","Status"]} rows={orderRows}/><Pagination/></Card>
  </div>;
}
function Reports(){
  return <div className="reports-page">
    <div className="reports-top">
      <Card title="Overview" className="overview-card"><div className="report-metrics top"><div><b>₹21,190</b><span>Total Profit</span></div><div><b>₹18,300</b><span className="orange-text">Revenue</span></div><div><b>₹17,432</b><span className="purple-text">Sales</span></div></div><div className="report-metrics bottom"><div><b>₹1,17,432</b><span>Net purchase value</span></div><div><b>₹80,432</b><span>Net sales value</span></div><div><b>₹30,432</b><span>MoM Profit</span></div><div><b>₹1,10,432</b><span>YoY Profit</span></div></div></Card>
      <Card title="Best selling category" className="category-card"><a>See All</a><Table headers={["Category","Turn Over","Increase By"]} rows={[["Vegetable","₹26,000","3.2%"],["Instant Food","₹22,000","2%"],["Households","₹22,000","1.5%"]]}/></Card>
    </div>
    <Card title="Profit & Revenue" className="profit-chart"><button className="period"><CalendarDays size={16}/> Weekly <ChevronDown size={14}/></button><div className="chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={profitRevenue}><CartesianGrid vertical={false} stroke="#edf0f3"/><XAxis dataKey="m" tickLine={false} axisLine={false}/><YAxis tickLine={false} axisLine={false} domain={[0,80000]} ticks={[20000,40000,60000,80000]}/><Tooltip/><Line type="monotone" dataKey="revenue" name="Revenue" stroke="#2677e8" strokeWidth={3} dot={false}/><Line type="monotone" dataKey="profit" name="Profit" stroke="#f2dfc5" strokeWidth={3} dot={false}/><Legend iconType="circle"/></LineChart></ResponsiveContainer></div></Card>
    <Card title="Best selling product" className="large-table"><a>See All</a><Table headers={["Product","Product ID","Category","Remaining Quantity","Turn Over","Increase By"]} rows={[["Tomato","23567","Vegetable","225 kg","₹17,000","2.3%"],["Onion","25831","Vegetable","200 kg","₹12,000","1.3%"],["Maggi","56841","Instant Food","200 Packet","₹10,000","1.3%"],["Surf Excel","23567","Household","125 Packet","₹9,000","1%"]]}/></Card>
  </div>;
}
function Placeholder({title}){return <Card title={title}><div className="placeholder">This section is ready for the next module.</div></Card>}

export default function App(){
  const [open,setOpen]=React.useState(false);
  return <div className="app"><Sidebar open={open} close={()=>setOpen(false)}/><main><Header setOpen={setOpen}/><div className="content"><Routes>
    <Route path="/" element={<Dashboard/>}/><Route path="/inventory" element={<Inventory/>}/><Route path="/reports" element={<Reports/>}/><Route path="/suppliers" element={<Suppliers/>}/><Route path="/orders" element={<Orders/>}/>
    <Route path="/manage-store" element={<Placeholder title="Manage Store"/>}/><Route path="/settings" element={<Placeholder title="Settings"/>}/>
  </Routes></div></main>{open&&<div className="overlay" onClick={()=>setOpen(false)}/>}</div>;
}