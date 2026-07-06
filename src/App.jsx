import React from 'react';
import { createRoot } from 'react-dom/client';
import { Cloud, ShieldCheck, TrendingUp, Rocket, Store, Coffee, Smartphone, Truck, BarChart3, CheckCircle2, MapPin, Phone, Mail, Globe2, Code2, Cpu, Database, Server, Users, CreditCard } from 'lucide-react';
import './styles.css';

const tech = ['React', 'Golang', 'Python', 'JavaScript', 'Ember', 'Angular', 'Cloud', 'SaaS'];
const features = [
  ['Customer App', ['Browse menu with images', 'Instant ordering', 'Live order tracking', 'Smart recommendations', 'Offers & rewards', 'Multiple payment options']],
  ['Cafe Admin Panel', ['Order management dashboard', 'Kitchen workflow tracking', 'Inventory management', 'Customer analytics', 'Sales reports', 'Multi-outlet management']],
  ['Delivery & Pickup', ['Rider tracking', 'Pickup tokens', 'ETA notifications', 'Contactless delivery', 'Easy re-order']],
  ['Integrated Payments', ['UPI payments', 'Cards and wallets', 'Razorpay-ready', 'Secure checkout', 'Payment reports']]
];
const why = [
  ['Cloud-Based SaaS Platform', 'Built on cloud for high availability, automatic updates and seamless access.', Cloud],
  ['Increase Orders & Revenue', 'Better customer experience and repeat orders with offers and loyalty.', TrendingUp],
  ['Better Operational Efficiency', 'Real-time dashboard, kitchen workflow and smart analytics.', BarChart3],
  ['Full Digital Transformation', 'From ordering to analytics — everything in one platform.', Smartphone],
  ['Scalable & Future-Ready', 'Designed to grow from one shop to many outlets and cities.', Rocket]
];
const builtFor = ['Coffee Shops', 'Cafes', 'Bakeries', 'Snack Outlets', 'College Cafeterias', 'Co-working Space Cafes'];

function App() {
  return <main>
    <nav className="nav">
      <div className="brand"><div className="logo"><Coffee size={30}/></div><div><strong>BHA-KI-RA Infratech Pvt Ltd</strong><span>A BH-KI-RA PVT LTD</span></div></div>
      <div className="navLinks"><a href="#features">Features</a><a href="#tech">Technology</a><a href="#contact">Contact</a></div>
    </nav>

    <section className="hero">
      <div className="heroText">
        <div className="badge"><Cloud size={16}/> 100% Cloud-Based SaaS Platform</div>
        <h1>Smart Café Ordering <span>Cloud-Based SaaS Platform</span></h1>
        <p>A modern, scalable and secure platform for coffee and snacks businesses to simplify ordering, improve efficiency and delight customers.</p>
        <div className="heroActions"><a className="primary" href="#contact">Book a Demo</a><a className="secondary" href="#features">Explore Features</a></div>
        <div className="stats"><div><b>99.9%</b><small>Uptime</small></div><div><b>Multi</b><small>Tenant Ready</small></div><div><b>Cloud</b><small>Secure</small></div></div>
      </div>
      <div className="phoneWrap">
        <div className="phone"><div className="screen"><p className="del">Deliver to<br/><b>MG Road, Bangalore</b></p><div className="search">Search for coffee, snacks...</div><div className="banner"><span>Hot Coffee,<br/>Fresh Start!</span><button>Order Now</button></div><h3>Popular Near You</h3><div className="item"><Coffee/> Cappuccino <b>₹149</b></div><div className="item">🥪 Veg Sandwich <b>₹129</b></div><div className="item">🧁 Choco Muffin <b>₹99</b></div></div></div>
        <div className="phone small"><div className="screen"><h3>Order Tracking</h3>{['Order Placed','Confirmed','Preparing','Out For Delivery','Delivered'].map((x,i)=><div className="track" key={x}><CheckCircle2 size={18}/>{x}<span>{i<4?'10:3'+i+' AM':'11:05 AM'}</span></div>)}<div className="scooter"><Truck size={60}/></div></div></div>
      </div>
    </section>

    <section className="strip">{['Skip the Queue','Order in Seconds','Fast Delivery','Exciting Offers'].map((x,i)=><div key={x}><span>{['📱','⏱️','🛵','🏷️'][i]}</span>{x}</div>)}</section>

    <section id="features" className="section"><h2>Powerful Features</h2><p className="sub">Everything your café needs to manage customer orders, kitchen flow, payments and growth.</p><div className="featureGrid">{features.map(([title,list])=><article className="card" key={title}><h3>{title}</h3>{list.map(v=><p key={v}><CheckCircle2 size={16}/>{v}</p>)}</article>)}</div></section>

    <section className="split"><div className="panel"><h2>Cloud-Based SaaS Advantages</h2>{['Secure encrypted data','Auto backup & recovery','Scalable on demand','Lower IT maintenance','Web, mobile, admin and analytics access'].map(x=><p className="tick" key={x}><CheckCircle2 size={18}/>{x}</p>)}<div className="cloudBox"><Cloud size={70}/><b>Bha-Ki-Ra</b></div></div><div className="panel dark"><h2>Why Choose Bha-Ki-Ra ?</h2>{why.map(([t,d,Icon])=><div className="why" key={t}><Icon/><div><b>{t}</b><p>{d}</p></div></div>)}</div></section>

    <section id="tech" className="section tech"><h2>Technology We Use</h2><p className="sub">We build scalable products using modern frontend, backend, cloud and data technologies.</p><div className="techGrid">{tech.map((t,i)=>{const icons=[Code2,Server,Cpu,Code2,Globe2,Code2,Cloud,Database]; const Icon=icons[i]; return <div className="techPill" key={t}><Icon size={22}/>{t}</div>})}</div></section>

    <section className="section"><h2>Built For</h2><div className="builtGrid">{builtFor.map(x=><div className="built" key={x}><Store/>{x}</div>)}</div></section>

    <section className="business"><div><h2>Business Model</h2><div className="model"><span>👑 Subscription Plans</span><span>％ Commission on Orders</span><span>📊 Premium Analytics</span><span>📣 Featured Promotions</span><span>🤝 Loyalty Partnerships</span></div></div><div className="vision"><h3>Our Vision</h3><p>Build the digital operating system for modern cafés, starting with local cafés and expanding city-by-city across India.</p></div></section>

    <section id="contact" className="contact"><div><h2>Start Your Digital Café Journey</h2><p>Onboard your retail unit into our platform and we will market your shop based on your location.</p></div><div className="contactCard"><p><Phone/> +91 990566445</p><p><MapPin/> No 405, Sumukha Simhadri Springs, Bangalore - 560061</p><p><Mail/> pattar.kiran@gmail.com</p><p><Users/>BH-KI-RA PVT LTD</p></div></section>

    <footer><span>☁ Cloud-Based</span><span>🛡 Secure</span><span>📈 Scalable</span><span>⚡ Reliable</span><em>Smart Ordering. Happy Customers. Growing Together.</em></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />);
