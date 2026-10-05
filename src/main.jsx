import React, { useMemo, useState } from "react";

import { createRoot } from "react-dom/client";

import {

  ShieldCheck, Search, ExternalLink, CalendarDays, MapPin,

  CheckCircle2, FileText, BookOpen, ArrowRight, X, Menu,

  BarChart3, Award, Landmark, Users, Shield

} from "lucide-react";

import "./styles.css";



const categories = [

  { name: "All", icon: FileText },

  { name: "Security & Strategic Affairs", icon: Shield },

  { name: "Regional News", icon: Landmark },

  { name: "Development", icon: BarChart3 },

  { name: "Sports & Achievements", icon: Award },

  { name: "Society & Youth", icon: Users }

];



// Replace these sample records with your actual verified articles.

const articles = [
  {
    id: 1,
    title: "Assam Rifles Patrol Ambushed in Changlang",
    date: "2026-09-29",
    category: "Security & Strategic Affairs",
    region: "Changlang district, Arunachal Pradesh",
    source: "Morung Express (IANS)",
    sourceUrl: "https://morungexpress.com/assam-rifles-nco-killed-four-personnel-injured-in-militant-ambush-in-arunachal-pradesh",
    verification: "Verified",
    summary: "An Assam Rifles patrol came under attack near Nampong Nallah in Changlang district close to the India–Myanmar border. One havildar was killed and four personnel were injured; the incident highlighted the operational risks of securing a difficult frontier.",
    selectedBecause: "Fresh, high-impact frontier incident reported by multiple outlets; shows operational risk on the India–Myanmar border.",
    tags: ["Security", "Arunachal Pradesh", "Assam Rifles", "Border"]
  },
  {
    id: 2,
    title: "Joint Operation Hits UKNA Camp in Churachandpur",
    date: "2026-09-05",
    category: "Security & Strategic Affairs",
    region: "Churachandpur district, Manipur",
    source: "News On AIR",
    sourceUrl: "https://newsonair.gov.in/manipur-two-ukna-cadres-killed-two-injured-in-joint-indian-army-assam-rifles-operation/",
    verification: "Verified",
    summary: "An intelligence-led Indian Army–Assam Rifles operation near Phaibong village in Churachandpur district resulted in two UKNA cadres being killed and two injured. Security forces recovered weapons, ammunition and other stores from the camp.",
    selectedBecause: "Shows intelligence-led Army–Assam Rifles cooperation in Manipur; the public-broadcaster report was corroborated by PTI reporting.",
    tags: ["Security", "Manipur", "Army", "Assam Rifles"]
  },
  {
    id: 3,
    title: "Army and BSF Hold Synergy Seminar in Shillong",
    date: "2026-09-30",
    category: "Security & Strategic Affairs",
    region: "Shillong, Meghalaya",
    source: "SSBCrack",
    sourceUrl: "https://www.ssbcrack.com/?p=120126",
    verification: "Verified",
    summary: "Headquarters 101 Area hosted the Army–BSF Synergy Seminar 2026 in Shillong. BSF Meghalaya, Guwahati, Mizoram & Cachar and Tripura Frontiers participated, focusing on operational coordination, information sharing and integrated border management.",
    selectedBecause: "Direct Eastern Command/Army role and a clear example of inter-agency coordination across four BSF frontiers.",
    tags: ["Security", "Meghalaya", "Eastern Command", "BSF"]
  },
  {
    id: 4,
    title: "DRI Seizes ₹20.31 Crore of Smuggled Goods in Assam and Mizoram",
    date: "2026-09-25",
    category: "Security & Strategic Affairs",
    region: "Champhai, Mizoram & Silchar, Assam",
    source: "Tripura Star News (DRI release)",
    sourceUrl: "https://www.tripurastarnews.com/?p=125788",
    verification: "Verified",
    summary: "DRI operations recovered foreign-origin areca nuts and poppy seeds worth about ₹20.31 crore in Mizoram and Assam. Customs, Assam Rifles and police supported the enforcement operations, linking border management with action against cross-border smuggling.",
    selectedBecause: "Links border security, enforcement and the Myanmar frontier; the key seizure figures are attributed to the DRI release.",
    tags: ["Security", "Assam", "Mizoram", "Enforcement"]
  },
  {
    id: 5,
    title: "Centre and NSCN-K (Niki) Extend Ceasefire by One Year",
    date: "2026-09-07",
    category: "Security & Strategic Affairs",
    region: "Nagaland",
    source: "ETV Bharat (PTI)",
    sourceUrl: "https://www.etvbharat.com/en/bharat/centre-nscn-k-niki-extend-ceasefire-by-one-year-enn26090707181",
    verification: "Verified",
    summary: "The Government of India and the Niki Sumi faction of NSCN-K extended their ceasefire for another year on 7 September 2026. The agreement remains in force until September 2027 and keeps a framework for dialogue in place.",
    selectedBecause: "Peace and dialogue are essential dimensions of stability; the development was confirmed by PTI reporting and a Nagaland daily.",
    tags: ["Peace", "Nagaland", "Ceasefire", "Dialogue"]
  },
  {
    id: 6,
    title: "Xtreme Weather Grade Diesel Flagged Off for Eastern Command",
    date: "2026-09-26",
    category: "Security & Strategic Affairs",
    region: "Eastern Command — Sikkim & Arunachal Pradesh",
    source: "PTI / Indian Oil",
    sourceUrl: "https://smartgovernance.in/indianoil-ships-first-extreme-weather-diesel-rake-to-armys-eastern-command/",
    verification: "Verified",
    summary: "Indian Oil flagged off the maiden rake of Xtreme Weather Grade High Speed Diesel for the Indian Army's Eastern Command. The specialised fuel is intended to support high-altitude and cold-weather operations where logistics and mobility are critical.",
    selectedBecause: "Shows how logistics, technology and industrial support contribute directly to high-altitude operational readiness.",
    tags: ["Logistics", "Eastern Command", "Sikkim", "Arunachal Pradesh"]
  },
  {
    id: 7,
    title: "Trishakti Corps Commander Reviews Readiness at Binnaguri",
    date: "2026-10-02",
    category: "Security & Strategic Affairs",
    region: "Binnaguri, West Bengal / Sikkim sector",
    source: "SSBCrack News",
    sourceUrl: "https://news.ssbcrack.com/indian-army-goc-reviews-operational-preparedness-at-binnaguri-military-station",
    verification: "Verified",
    summary: "The General Officer Commanding of Trishakti Corps visited Binnaguri Military Station to review operational preparedness and capability-building. The review included readiness for changing challenges and technology adoption under Eastern Command.",
    selectedBecause: "A recent senior-level readiness review in the Eastern Command's West Bengal/Sikkim sector, including the strategically important Siliguri Corridor.",
    tags: ["Security", "Trishakti Corps", "Sikkim", "Siliguri Corridor"]
  },
  {
    id: 8,
    title: "Assam Rifles Tightens Ties with Other Agencies in Manipur Hills",
    date: "2026-09-10",
    category: "Security & Strategic Affairs",
    region: "Manipur hill districts",
    source: "The Hans India",
    sourceUrl: "https://www.thehansindia.com/news/national/assam-rifles-strengthens-inter-agency-coordination-to-bolster-security-in-manipur-hills-1120219",
    verification: "Verified",
    summary: "Headquarters 10 Sector Assam Rifles convened a Lead Intelligence Agencies meeting covering the security situation in Ukhrul and Kamjong districts. Deputy Commissioners, police, intelligence officials and Assam Rifles units participated.",
    selectedBecause: "Demonstrates inter-agency coordination in the Manipur hills and the Assam Rifles' stabilising role in a sensitive security environment.",
    tags: ["Security", "Manipur", "Coordination", "Assam Rifles"]
  },
  {
    id: 9,
    title: "MC²+ Opens Innovation Node at NRL Centre, Guwahati",
    date: "2026-09-09",
    category: "Regional News",
    region: "Guwahati, Assam",
    source: "Press Information Bureau",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2308205&reg=48&lang=2",
    verification: "Verified",
    summary: "MC²+ announced a dedicated co-working space and innovation node at the NRL Centre in Guwahati. The facility offers more than 50 workstations and 16 cabins, alongside investor facilities and technical consultant rooms.",
    selectedBecause: "Shows an innovation ecosystem emerging in Guwahati and provides an official PIB source for a regional technology-development story.",
    tags: ["Regional", "Assam", "Innovation", "Startups"]
  },
  {
    id: 10,
    title: "Project DRISHTI Brings AI to Moving-Train Inspection",
    date: "2026-09-25",
    category: "Regional News",
    region: "Northeast Frontier Railway zone (Assam)",
    source: "Northeast Frontier Railway",
    sourceUrl: "https://www.financialexpress.com/business/railways-what-is-project-drishti-railways-new-ai-system-how-freight-wagons-sre-checked-in-motion-4348686/",
    verification: "Verified",
    summary: "Project DRISHTI uses high-speed imaging and AI to assist in inspecting freight wagons while trains are moving. The system captures wagon features such as doors, locks and seals, flags anomalies and supports follow-up inspection.",
    selectedBecause: "Shows AI and IIT Guwahati-linked technological innovation being applied to regional infrastructure and freight reliability.",
    tags: ["Regional", "AI", "Railways", "Assam"]
  },
  {
    id: 11,
    title: "BRO Reviews Projects Brahmank and Arunank in Arunachal",
    date: "2026-09-03",
    category: "Development",
    region: "Arunachal Pradesh",
    source: "Border Roads Organisation",
    sourceUrl: "https://www.facebook.com/DGBROIndia/posts/projectbrahmank-projectarunank-deshkabro-lt-gen-harpal-singh-avsm-vsm-director-g/1364475675800871/",
    verification: "Verified",
    summary: "The Border Roads Organisation reviewed Projects Brahmank and Arunank in Arunachal Pradesh in early September. The review highlighted continuing work to improve strategic connectivity across steep, landslide-prone frontier terrain.",
    selectedBecause: "Infrastructure is closely tied to both security and development; the story demonstrates BRO work on the frontier.",
    tags: ["Development", "Arunachal Pradesh", "BRO", "Connectivity"]
  },
  {
    id: 12,
    title: "Project SWASTIK Marks 66th Raising Day in Gangtok",
    date: "2026-10-01",
    category: "Development",
    region: "Gangtok, Sikkim",
    source: "Border Roads Organisation / Sikkim Government",
    sourceUrl: "https://www.sikkim.gov.in/media/press-release/press-info?name=Press+Release+from+Pro+Defence&id=133490",
    verification: "Verified",
    summary: "Project SWASTIK of the Border Roads Organisation marked its 66th Raising Day in Gangtok on 1 October 2026. Raised in 1960, the project has a long-term role in constructing, maintaining and restoring road connectivity across Sikkim.",
    selectedBecause: "Anchors the infrastructure theme in the high Himalayas of Sikkim and shows the long-term connection between engineering, access and national security.",
    tags: ["Development", "Sikkim", "BRO", "Roads"]
  },
  {
    id: 13,
    title: "North East Inter-State Badminton Championship Returns to Meghalaya",
    date: "2026-09-17",
    category: "Sports & Achievements",
    region: "Meghalaya",
    source: "News On AIR",
    sourceUrl: "https://newsonair.gov.in/meghalaya-hosts-north-east-inter-state-badminton-championship-ahead-of-national-games-2027/",
    verification: "Verified",
    summary: "The North East Zone Inter-State Badminton Championship brought together more than 250 players from all eight Northeast states in Meghalaya from 16–19 September. Team events also served as a qualifying platform associated with the National Games 2027.",
    selectedBecause: "Provides full eight-state representation and demonstrates how regional sport builds both competitive talent and social connection.",
    tags: ["Sports", "Meghalaya", "Eight States", "Badminton"]
  },
  {
    id: 14,
    title: "Mawkyrwat Great Marathon IV Draws 330 Runners",
    date: "2026-09-28",
    category: "Sports & Achievements",
    region: "Mawkyrwat, Meghalaya",
    source: "Meghalaya Government",
    sourceUrl: "https://meghalaya.gov.in/press/content/51909",
    verification: "Verified",
    summary: "The fourth Mawkyrwat Great Marathon was held on 26 September with 330 participants. The field included 120 men, 37 women, 111 boys and 62 girls, highlighting grassroots participation in sport, health and fitness.",
    selectedBecause: "Shows grassroots youth participation using an official state-government source with a clear participation breakdown.",
    tags: ["Sports", "Meghalaya", "Youth", "Marathon"]
  },
  {
    id: 15,
    title: "Arunachal Students Visit Shatrujeet Brigade on National Integration Tour",
    date: "2026-09-25",
    category: "Society & Youth",
    region: "Arunachal Pradesh",
    source: "Ministry of Defence (PRO)",
    sourceUrl: "https://news.ssbcrack.com/indian-army-hosts-national-integration-tour-for-arunachal-pradesh-students/",
    verification: "Verified",
    summary: "Fifteen students and two teachers from Lhou Gompa in Arunachal Pradesh took part in a National Integration Tour and visited the Indian Army's Shatrujeet Brigade. They were introduced to the history, ethos and capabilities of India's airborne forces.",
    selectedBecause: "Direct Army outreach to border-area youth and the clearest example in the magazine of the Armed Forces' role in national integration.",
    tags: ["Youth", "Arunachal Pradesh", "Army", "Integration"]
  },
  {
    id: 16,
    title: "Meghalaya's Youth Engagement Programme Builds Confidence and Capability",
    date: "2026-09-30",
    category: "Society & Youth",
    region: "North Garo Hills, Meghalaya",
    source: "Meghalaya Government",
    sourceUrl: "https://meghalaya.gov.in/sites/default/files/press_release/Press_Release_DPRO_Resubelpara_74.pdf",
    verification: "Verified",
    summary: "The Chief Minister's Youth Engagement Programme in Mendipathar created platforms for young people through music, science, technology, painting, poetry, quizzes, talent competitions, sports and leadership activities.",
    selectedBecause: "Youth participation is central to long-term social resilience, confidence, teamwork and leadership in the region.",
    tags: ["Youth", "Meghalaya", "Leadership", "Community"]
  },
  {
    id: 17,
    title: "CARA Holds Adoption Awareness Workshop in Imphal",
    date: "2026-09-23",
    category: "Society & Youth",
    region: "Imphal, Manipur",
    source: "Press Information Bureau",
    sourceUrl: "https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2313900&reg=21&lang=1",
    verification: "Verified",
    summary: "The Central Adoption Resource Authority held an adoption-awareness workshop in Imphal with the Manipur Social Welfare Department and the Manipur State Adoption Resource Agency. Around 150 stakeholders were sensitised on legal, safe and child-centred adoption practices.",
    selectedBecause: "Balances the security-heavy magazine with a civilian social-development story focused on child protection and institutional resilience in Manipur.",
    tags: ["Society", "Manipur", "Child Protection", "CARA"]
  },
  {
    id: 18,
    title: "Assam Rifles Shows Weapons and Equipment to NCC Cadets in Agartala",
    date: "2026-09-18",
    category: "Society & Youth",
    region: "Agartala, Tripura",
    source: "Tripura Times",
    sourceUrl: "https://tripuratimes.com/ttimes/assam-rifles-conducts-weapon-and-equipment-display-in-agartala-42012.html/",
    verification: "Verified",
    summary: "Assam Rifles organised a weapon and equipment display for NCC cadets at Saheed Bhagat Singh Youth Hostel in Agartala. Cadets saw equipment and specialised systems and interacted with personnel about service, discipline and operational responsibilities.",
    selectedBecause: "Shows youth interaction with the Armed Forces in Tripura and provides a direct national-integration and public-service dimension.",
    tags: ["Youth", "Tripura", "Assam Rifles", "NCC"]
  }
];



function formatDate(date) {

  return new Date(date + "T00:00:00").toLocaleDateString("en-IN", {

    day: "2-digit", month: "short", year: "numeric"

  });

}



function App() {

  const [active, setActive] = useState("All");

  const [query, setQuery] = useState("");

  const [selected, setSelected] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);



  const filtered = useMemo(() => {

    return articles.filter(a => {

      const matchesCategory = active === "All" || a.category === active;

      const q = query.toLowerCase().trim();

      const matchesQuery = !q ||

        [a.title, a.region, a.category, a.source, ...a.tags]

          .join(" ").toLowerCase().includes(q);

      return matchesCategory && matchesQuery;

    });

  }, [active, query]);



  const sourceCounts = articles.reduce((acc, a) => {

    acc[a.source] = (acc[a.source] || 0) + 1;

    return acc;

  }, {});



  return (

    <div className="app">

      <header className="header">

        <div className="nav container">

          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>

            <span className="brand-mark"><ShieldCheck size={22}/></span>

            <span>

              <strong>NORTHEAST WATCH</strong>

              <small>News • Verification • Research</small>

            </span>

          </a>



          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)}>

            {menuOpen ? <X/> : <Menu/>}

          </button>



          <nav className={menuOpen ? "nav-links open" : "nav-links"}>

            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

            <a href="#verification" onClick={() => setMenuOpen(false)}>Verification</a>

            <a href="#sources" onClick={() => setMenuOpen(false)}>Sources</a>

            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

          </nav>

        </div>

      </header>



      <main>

        <section id="home" className="hero">

          <div className="hero-grid container">

            <div>

              <div className="eyebrow"><ShieldCheck size={16}/> RESEARCH COMPANION</div>

              <h1>Securing the Northeast</h1>

              <p className="hero-sub">

                News, development, strategic affairs and youth — organised,

                sourced and verified for a research-led e-magazine.

              </p>

              <div className="hero-actions">

                <a href="#verification" className="btn primary">Explore Verification <ArrowRight size={17}/></a>

                <a href="#sources" className="btn secondary">View Sources</a>

              </div>

              <div className="trust-line">

                <CheckCircle2 size={17}/>

                <span>Every published entry should carry an original source link.</span>

              </div>

            </div>



            <div className="hero-card">

              <div className="hero-card-top">

                <span>PROJECT</span><span>01</span>

              </div>

              <div className="compass">✦</div>

              <h3>Indian Army’s Role in<br/>Stability, Peace &<br/>National Security</h3>

              <p>Digital research archive accompanying the e-magazine.</p>

            </div>

          </div>

        </section>



        <section className="stats container">

          <div className="stat"><strong>{articles.length}</strong><span>Articles</span></div>

          <div className="stat"><strong>{Object.keys(sourceCounts).length}</strong><span>Sources</span></div>

          <div className="stat"><strong>{new Set(articles.map(a => a.category)).size}</strong><span>Categories</span></div>

          <div className="stat"><strong>30</strong><span>Day freshness target</span></div>

        </section>



        <section id="verification" className="section container">

          <div className="section-heading">

            <div>

              <span className="kicker">01 / VERIFICATION ARCHIVE</span>

              <h2>Verified News Repository</h2>

              <p>Search and filter the articles selected for the e-magazine.</p>

            </div>

            <div className="search-box">

              <Search size={18}/>

              <input

                value={query}

                onChange={e => setQuery(e.target.value)}

                placeholder="Search article, region, source..."

              />

            </div>

          </div>



          <div className="category-row">

            {categories.map(({name, icon: Icon}) => (

              <button

                key={name}

                className={active === name ? "category active" : "category"}

                onClick={() => setActive(name)}

              >

                <Icon size={16}/>{name}

              </button>

            ))}

          </div>



          <div className="article-grid">

            {filtered.map(article => (

              <article className="article-card" key={article.id}>

                <div className="card-meta">

                  <span className="pill green"><CheckCircle2 size={13}/> {article.verification}</span>

                  <span>{article.category}</span>

                </div>

                <h3>{article.title}</h3>

                <div className="article-info">

                  <span><CalendarDays size={14}/> {formatDate(article.date)}</span>

                  <span><MapPin size={14}/> {article.region}</span>

                </div>

                <p>{article.summary}</p>

                <div className="tags">

                  {article.tags.map(t => <span key={t}>#{t}</span>)}

                </div>

                <div className="card-footer">

                  <span className="source-name">{article.source}</span>

                  <button className="read-btn" onClick={() => setSelected(article)}>

                    Verification details <ArrowRight size={15}/>

                  </button>

                </div>

              </article>

            ))}

          </div>



          {!filtered.length && (

            <div className="empty">

              <Search size={30}/>

              <h3>No matching articles</h3>

              <p>Try another search term or category.</p>

            </div>

          )}

        </section>



        <section id="sources" className="section alt">

          <div className="container">

            <div className="section-heading">

              <div>

                <span className="kicker">02 / SOURCE REGISTER</span>

                <h2>Source Repository</h2>

                <p>Maintain a transparent record of where every article came from.</p>

              </div>

            </div>

            <div className="source-table">

              <div className="source-head"><span>Source</span><span>Articles</span><span>Role</span></div>

              {Object.entries(sourceCounts).map(([source, count]) => (

                <div className="source-row" key={source}>

                  <strong>{source}</strong>

                  <span>{count}</span>

                  <span className="verified-text"><CheckCircle2 size={15}/> Linked source</span>

                </div>

              ))}

            </div>

            <div className="source-note">

              <ShieldCheck size={21}/>

              <div>

                <strong>Verification rule</strong>

                <p>Before adding an article, record its publication date, original source, category, factual summary and reason for inclusion.</p>

              </div>

            </div>

          </div>

        </section>



        <section id="about" className="section container">

          <div className="about-box">

            <div>

              <span className="kicker">03 / PROJECT NOTE</span>

              <h2>Built to support the e-magazine.</h2>

              <p>

                This website is a lightweight digital companion for the research

                behind the magazine. It is intentionally static: no database,

                login system or backend is required.

              </p>

            </div>

            <div className="about-points">

              <div><CheckCircle2/><span>Source-linked articles</span></div>

              <div><CheckCircle2/><span>Category-based organisation</span></div>

              <div><CheckCircle2/><span>Selection reasoning</span></div>

              <div><CheckCircle2/><span>Easy to update from one file</span></div>

            </div>

          </div>

        </section>

      </main>



      <footer className="footer">

        <div className="container footer-inner">

          <div><strong>NORTHEAST WATCH</strong><span>Research companion • 2026</span></div>

          <a href="#home">Back to top ↑</a>

        </div>

      </footer>



      {selected && (

        <div className="modal-backdrop" onClick={() => setSelected(null)}>

          <div className="modal" onClick={e => e.stopPropagation()}>

            <button className="modal-close" onClick={() => setSelected(null)}><X/></button>

            <span className="pill green"><CheckCircle2 size={13}/> {selected.verification}</span>

            <h2>{selected.title}</h2>

            <div className="modal-info">

              <span><CalendarDays size={15}/> {formatDate(selected.date)}</span>

              <span><MapPin size={15}/> {selected.region}</span>

              <span><FileText size={15}/> {selected.category}</span>

            </div>

            <hr/>

            <h4>Verification summary</h4>

            <p>{selected.summary}</p>

            <h4>Why this article was selected</h4>

            <p>{selected.selectedBecause}</p>

            <h4>Source</h4>

            <a className="source-link" href={selected.sourceUrl} target="_blank" rel="noreferrer">

              {selected.source} <ExternalLink size={15}/>

            </a>

            <h4>Supporting sources</h4>

            {(selected.supportingSources || [selected.sourceUrl]).map((s, i) => (

              <a className="support-link" href={s} target="_blank" rel="noreferrer" key={i}>{s}</a>

            ))}

          </div>

        </div>

      )}

    </div>

  );

}



createRoot(document.getElementById("root")).render(<App />);
