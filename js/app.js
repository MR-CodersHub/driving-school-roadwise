const A='assets/', P={
  home:'photo-1489987707025-afc232f7ea0f',      /* Curated collection of clean uniform apparel */
  home2:'photo-1441986300917-64674bd600d8',     /* Workwear showroom & tailored apparel */
  about:'photo-1558769132-cb1aea458c5e',     /* Tailoring craftsmanship, threads & workshop */
  embroidery:'photo-1584917865442-de89df76afd3',/* Macro embroidery stitch detail */
  fabrics:'photo-1528459801416-a9e53bbf4e17',   /* High-grade commercial fabrics & textiles */
  craft:'photo-1607604276583-eef5d076aa5f',     /* Embroidery artisan at work */
  road:'photo-1558769132-cb1aea458c5e',      /* Craftsmanship fallback */
  car:'photo-1584917865442-de89df76afd3'       /* Stitch detail fallback */
};

const courses=[
  ['Corporate Oxford Shirts & Polos','Corporate · Executive','Min. 10 units · 50+ colors','From $24.50','photo-1598033129183-c4f50c736f10','Premium breathable cotton-poly blend with custom chest logo embroidery and reinforced collar.'],
  ['Healthcare Antimicrobial Scrubs','Healthcare · Medical','Min. 15 units · Moisture-wicking','From $28.00','photo-1584515979956-d9f6e5d09982','Fluid-resistant, 4-way stretch scrub sets with clinic name, department, and staff personalization.'],
  ['Executive Chef Coats & Bistro Aprons','Hospitality · Culinary','Min. 10 units · Stain-shield','From $32.00','photo-1577219491135-ce391730fb2c','Heavy-duty poly-twill chef jackets and canvas aprons with high-density embroidered emblems.'],
  ['Heavy-Duty Hi-Vis Safety Jackets','Industrial · Safety','ANSI Class 3 · Water-repellent','From $46.00','photo-1504307651254-35680f356dfd','Reflective weatherproof work jackets with reinforced seams and direct industrial embroidery.'],
  ['Academy Crest Blazers & Knitwear','Education · School','Min. 25 units · Wool-blend','From $48.00','photo-1577896851231-70ef18881754','Durable, tailored school uniform blazers with precision gold and silver bullion crest embroidery.'],
  ['Retail & Event Staff Softshell Jackets','Retail & Events · Outerwear','Min. 12 units · Windproof','From $39.50','photo-1556905055-8f358a7a47b2','All-weather branded fleece and softshell outerwear with multi-color corporate logo embroidery.']
];
const products=courses;

const people=[
  ['Elena Rostova','14 years · Master Embroiderer & Digitizer','5.0','4,200+ orders','Precision Stitching, Thread Mapping','photo-1573496359142-b8d87734a5a2'],
  ['Marcus Vance','10 years · B2B Corporate Uniform Consultant','4.9','1,850+ accounts','Bulk Logistics, Sizing Specs','photo-1560250097-0b93528c311a'],
  ['Amina Patel','8 years · Healthcare & Industrial Apparel Lead','4.9','2,400+ orders','Safety Compliance, Fabric Durability','photo-1580489944761-15a19d654956']
];
const team=people;

const posts=[
  ['Embroidery vs. Screen Printing: Choosing the Right Branding Method','Branding Guide','photo-1558769132-cb1aea458c5e'],
  ['Fabric Durability Standards for High-Frequency Industrial Laundering','Workwear Tech','photo-1584917865442-de89df76afd3'],
  ['How Uniform Consistency Enhances Team Confidence and Brand Authority','Workplace Culture','photo-1521572267360-ee0c2909d518']
];

const links=[
  ['Home','home'],
  ['Home 2','home2'],
  ['About','about'],
  ['Services','services'],
  ['Products','courses'],
  ['Journal','blog'],
  ['Contact','contact']
];

const route=()=>{
  let raw=(location.hash.slice(1).split('?')[0]||'').replace(/^\/+|\/+$/g,'').replace(/\.html?$/i,'').toLowerCase();
  const aliases={
    '':'home','index':'home',
    'quote':'booking','request-quote':'booking','quote-request':'booking','book':'booking','booking-page':'booking',
    'catalog':'courses','products':'courses','uniforms':'courses',
    'team':'instructors','craftspeople':'instructors','specialists':'instructors',
    'portfolio':'success','case-studies':'success','showcase':'success',
    'signup':'register','sign-up':'register','client-login':'login','student-login':'login','not-found':'404'
  };
  if(aliases[raw]) return aliases[raw];
  if(raw.includes('quote')||raw.includes('booking')) return 'booking';
  if(raw.includes('product')||raw.includes('course')) return 'courses';
  return raw||'home';
};

const pic=(id,alt='Custom embroidered uniform garment')=>`<img loading="lazy" src="https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85" alt="${alt}">`;

function navToHome(e){
  const cur = window.location.pathname.replace(/\\/g, '/');
  if(cur.endsWith('/index.html') || cur.endsWith('/') || cur===''){
    if(window.location.hash !== '#home'){
      window.location.hash = '#home';
    }
    window.scrollTo({top:0, behavior:'smooth'});
  } else {
    const hasBase = !!document.querySelector('base');
    if(!hasBase && cur.includes('/booking/')){
      if(e) e.preventDefault();
      window.location.href = '../index.html#home';
    }
  }
}

function header(){
  return `<div class="topline"><div class="container"><span>✦ Custom Embroidery &amp; Premium Workwear Manufacturer · Direct B2B Quotes</span><span>Sales &amp; Consultations: <b>+1 (800) 555-0146</b></span></div></div>
<header><div class="container nav">
  <a class="brand" href="index.html#home" onclick="navToHome(event)" aria-label="Roadwise Custom Uniforms &amp; Embroidery Homepage">
    <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>UNIFORMS &amp; EMBROIDERY</small></span>
  </a>
  <nav class="navlinks" aria-label="Main Navigation">${links.map(([n,id])=>`<a class="${route()===id?'active':''}" href="#${id}">${n}</a>`).join('')}</nav>
  <div class="navtools">
    <button class="iconbtn theme-toggle" aria-label="Toggle dark mode" aria-pressed="false" onclick="toggleTheme()">◐</button>
    <button class="iconbtn" aria-label="Toggle direction" onclick="toggleDir()">⇄</button>
    <div class="account-wrap">
      <button class="iconbtn account-toggle" aria-label="Open client portal menu" aria-expanded="false" onclick="toggleAccount(this)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4"></circle><path d="M5.5 20c.4-3.5 2.8-5.5 6.5-5.5s6.1 2 6.5 5.5"></path></svg>
      </button>
      <nav class="account-menu" aria-label="Client Portal Menu">
        <div class="account-menu-brand"><img src="${A}favicon.svg" alt=""><span>roadwise<small>UNIFORMS &amp; WORKWEAR</small></span></div>
        <a href="#login">Client Login</a>
        <a href="#register">Register Company</a>
        <a href="#student">Order Tracking</a>
        <a href="#admin">Supplier Portal</a>
        <a class="account-booking" href="#booking">Request a Quote ↗</a>
      </nav>
    </div>
    <a class="btn lime hide-mobile" href="#booking">Request Quote ↗</a>
    <button class="menu-btn" onclick="toggleMenu(this)" aria-expanded="false" aria-label="Open navigation menu">☰</button>
  </div>
  <nav class="mobile-menu" aria-label="Mobile Navigation Drawer">
    <!-- Tool icons included inside the mobile menu drawer -->
    <div class="mobile-tools-bar">
      <button class="mobile-tool-chip theme-toggle" onclick="toggleTheme()" aria-label="Toggle appearance" aria-pressed="false">
        <span class="tool-icon">◐</span>
        <span class="tool-text">Theme</span>
      </button>
      <button class="mobile-tool-chip" onclick="toggleDir()" aria-label="Toggle text direction">
        <span class="tool-icon">⇄</span>
        <span class="tool-text">Direction</span>
      </button>
      <a class="mobile-tool-chip" href="#login" onclick="closeMobileMenu()" aria-label="Client Portal">
        <span class="tool-icon">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.4"></circle><path d="M5.5 20c.4-3.5 2.8-5.5 6.5-5.5s6.1 2 6.5 5.5"></path></svg>
        </span>
        <span class="tool-text">Portal</span>
      </a>
    </div>
    <div class="mobile-links-grid">
      ${links.map(x=>`<a class="${route()===x[1]?'active':''}" href="#${x[1]}" onclick="closeMobileMenu()">${x[0]}</a>`).join('')}
    </div>
    <a href="#booking" class="mobile-booking" onclick="closeMobileMenu()">Request a Bulk Quote ↗</a>
    <div class="mobile-portal-links">
      <a href="#login" onclick="closeMobileMenu()">Client Sign In</a>
      <a href="#register" onclick="closeMobileMenu()">Register Company</a>
      <a href="#admin" onclick="closeMobileMenu()">Supplier Admin</a>
    </div>
  </nav>
</div></header>`;
}

function footer(){
  return `<footer class="footer"><div class="container"><div class="footer-grid">
  <div>
    <a class="brand footer-brand" href="index.html#home" onclick="navToHome(event)" aria-label="Roadwise Uniforms &amp; Embroidery Homepage">
      <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>UNIFORMS &amp; EMBROIDERY</small></span>
    </a>
    <p>Premium custom embroidery, corporate uniform manufacturing, and heavy-duty workwear supply. Outfitting organizations with millimeter-precision branding, durable fabrics, and seamless B2B re-ordering.</p>
    <a class="btn lime" href="index.html#booking">Request a Bulk Quote ↗</a>
  </div>
  <div>
    <h4>Uniform Categories</h4>
    <div class="footer-links">
      <a href="index.html#courses">Corporate &amp; Executive</a>
      <a href="index.html#courses">Healthcare &amp; Scrubs</a>
      <a href="index.html#courses">Hospitality &amp; Culinary</a>
      <a href="index.html#courses">Industrial &amp; Hi-Vis</a>
      <a href="index.html#courses">School &amp; Academic</a>
    </div>
  </div>
  <div>
    <h4>Capabilities &amp; Company</h4>
    <div class="footer-links">
      <a href="index.html#about">Our Factory &amp; Story</a>
      <a href="index.html#services">Custom Embroidery &amp; Print</a>
      <a href="index.html#success">Client Showcase</a>
      <a href="index.html#instructors">Embroidery Specialists</a>
      <a href="index.html#faq">Ordering &amp; MOQ FAQs</a>
      <a href="index.html#blog">Uniform &amp; Workwear Journal</a>
    </div>
  </div>
  <div>
    <h4>Factory &amp; Consultations</h4>
    <p>Mon–Fri, 8:00 AM–6:00 PM EST<br>
    Direct Sales: +1 (800) 555-0146<br>
    orders@roadwiseuniforms.example<br>
    Production Facility: 128 Meadowline Ave<br>
    Nationwide B2B Delivery &amp; Sizing Kitting</p>
  </div>
</div>
<div class="copyright">
  <span>© 2026 Roadwise Custom Uniforms &amp; Workwear Supplier. All rights reserved.</span>
  <span>ISO 9001 Quality Standards · OEKO-TEX® Certified Fabrics · B2B Wholesale Pricing</span>
</div>
</div></footer>`;
}

const hero=(title,sub)=>`<section class="pagehero"><div class="container"><div class="crumb"><a href="index.html#home" onclick="navToHome(event)">Home</a> / ${title}</div><h1>${title}</h1><p>${sub}</p></div></section>`;

const cta=()=>`<section class="section"><div class="container"><div class="cta">
  <div>
    <h2>Ready to Outfit Your Team in Premium Custom Uniforms?</h2>
    <p>Request a digital embroidery stitch proof and custom volume quotation within 24 hours. No obligation.</p>
  </div>
  <a class="btn" href="#booking">Request a Bulk Quote ↗</a>
</div></div></section>`;

function courseCards(){
  return courses.map((c,i)=>`<article class="card course-card" data-category="${['Corporate','Healthcare','Hospitality','Industrial','Education','Retail'][i]||'All'}">
    <div class="photo">${pic(c[4],`${c[0]} - Custom embroidered uniform`)}</div>
    <div class="body">
      <span class="tag">${c[1]}</span>
      <h3>${c[0]}</h3>
      <p>${c[5]}</p>
      <div class="meta">
        <span>◷ ${c[2]}</span>
        <span>✓ Precision Embroidery Included</span>
      </div>
      <div class="card-foot">
        <span class="price">${c[3]}</span>
        <a class="btn outline" href="#booking?product=${encodeURIComponent(c[0])}">Request Quote →</a>
      </div>
    </div>
  </article>`).join('');
}

function instructorCards(){
  return people.map(x=>`<article class="card instructor">
    <img loading="lazy" src="https://images.unsplash.com/${x[5]}?auto=format&fit=crop&w=700&q=85" alt="Specialist ${x[0]}">
    <div class="body">
      <span class="tag">★ ${x[2]} rating</span>
      <h3>${x[0]}</h3>
      <p><b>${x[1]}</b> · ${x[4]}</p>
      <div class="card-foot">
        <small>${x[3]} completed</small>
        <a href="#instructor-details">Consultation profile →</a>
      </div>
    </div>
  </article>`).join('');
}

function faq(){
  return `<div class="faq">
    <details>
      <summary>What is the minimum order quantity (MOQ) for custom embroidered uniforms?</summary>
      <p>Our standard MOQ is just 10 units per style for direct embroidery and workwear supply. For large enterprise programs, we manage volume runs of 10,000+ units with tiered volume discounts and scheduled re-orders.</p>
    </details>
    <details>
      <summary>What file format is required for logo embroidery digitizing?</summary>
      <p>We accept vector files (AI, EPS, SVG, or high-resolution PDF). Our in-house digitizers convert your artwork into a stitch file (DST/EMB) calibrated to garment fabric density. We provide a digital 3D stitch proof for approval prior to manufacturing.</p>
    </details>
    <details>
      <summary>Can you supply physical sample stitch-outs before bulk production?</summary>
      <p>Yes. After digital proof approval, we produce an actual embroidery sew-out sample on your chosen fabric for physical verification of thread colors, dimensions, and stitch definition.</p>
    </details>
    <details>
      <summary>How durable is the embroidery through commercial laundering?</summary>
      <p>We use premium Madeira poly-neon threads engineered for industrial laundry resistance up to 95°C (200°F). Our embroidery threads and backing materials resist bleach, UV fading, and repeated high-heat drying cycles.</p>
    </details>
    <details>
      <summary>Do you offer employee size kitting and department packing?</summary>
      <p>Yes! We can pre-sort and label uniforms individually per employee or by department/location, dramatically reducing internal distribution time for your facilities and HR teams.</p>
    </details>
  </div>`;
}

function heroSearch(){
  return `<form class="hero-search" onsubmit="findQuote(event)">
    <label>
      <span>What uniform style are you looking for?</span>
      <select aria-label="Select uniform style">
        <option>Corporate Oxford Shirts &amp; Polos</option>
        <option>Healthcare Antimicrobial Scrubs</option>
        <option>Executive Chef Coats &amp; Aprons</option>
        <option>Heavy-Duty Hi-Vis Safety Jackets</option>
        <option>Academy Crest Blazers &amp; Knitwear</option>
        <option>Retail &amp; Events Outerwear</option>
      </select>
    </label>
    <label>
      <span>Target Delivery Date</span>
      <input type="date" aria-label="Target delivery date">
    </label>
    <label>
      <span>Branding Method</span>
      <select aria-label="Branding method">
        <option>Direct Logo Embroidery</option>
        <option>3D Puff Embroidery</option>
        <option>Industrial Screen Print</option>
        <option>Heat Seal &amp; DTF</option>
      </select>
    </label>
    <button class="btn lime" type="submit">Get a quote <b>↗</b></button>
  </form>`;
}

function findQuote(e){
  e.preventDefault();
  location.hash='booking';
}

function contactDock(){
  return `<div class="contact-dock">
    <button class="contact-fab" aria-label="Open contact and account options" aria-expanded="false" onclick="toggleContact(this)">
      <span aria-hidden="true">✉</span><b>Contact</b>
    </button>
    <nav class="contact-pop" aria-label="Contact and account quick menu">
      <a href="#login?role=client"><span>♙</span><span><strong>Client Login</strong><small>Open buyer portal</small></span></a>
      <a href="#login?role=admin"><span>⚙</span><span><strong>Supplier Login</strong><small>Factory operations</small></span></a>
      <a href="#booking"><span>＋</span><span><strong>Request Quote</strong><small>Direct wholesale pricing</small></span></a>
      <a href="#contact"><span>☎</span><span><strong>Contact Showroom</strong><small>+1 (800) 555-0146</small></span></a>
    </nav>
  </div>`;
}

function toggleContact(button){
  let dock=button.closest('.contact-dock');
  let open=dock.classList.toggle('open');
  button.setAttribute('aria-expanded',String(open));
}

function academyLocation(){
  return `<section class="section location-section"><div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Production Showroom</span>
        <h2>Visit Roadwise in Central District.</h2>
        <p>Our main factory showroom, fabric swatch library, and consultation office.</p>
      </div>
    </div>
    <div class="location-panel">
      <div class="map-art" role="img" aria-label="Illustrated map preview for Roadwise showroom in Central district">
        <span class="map-road road-a"></span>
        <span class="map-road road-b"></span>
        <span class="map-road road-c"></span>
        <span class="map-park">CENTRAL<br>PARK</span>
        <span class="map-pin">⌖</span>
        <span class="map-label">ROADWISE</span>
      </div>
      <div class="location-details">
        <span class="tag">Main Showroom · Factory Location</span>
        <h3>Roadwise Custom Uniforms &amp; Embroidery</h3>
        <p>128 Meadowline Avenue<br>Central District Industrial Park</p>
        <div class="meta"><span>◷ Mon–Fri, 8:00 AM–6:00 PM EST</span></div>
        <a class="btn" href="https://www.google.com/maps/search/?api=1&query=128+Meadowline+Avenue%2C+Central+district" target="_blank" rel="noopener noreferrer">Get directions ↗</a>
      </div>
    </div>
  </div></section>`;
}

function home(alt=false){
  return `<main id="main">
  <!-- Hero Section with Preserved Design Layout -->
  <section class="hero">
    <div class="container hero-grid ${alt?'home-alt':''}">
      <div>
        <span class="eyebrow"><i></i> Precision Embroidery &amp; Uniform Manufacturing</span>
        <h1>${alt?'Crafted for Work.':'Elevate Your Team.'}<br><span>${alt?'Engineered to Last.':'Tailored Uniforms.'}</span></h1>
        <p>${alt?'From corporate boardrooms to industrial job sites, we supply durable, customized workwear with millimeter-precision logo embroidery and certified fabrics.':'Complete uniform solutions for corporate, healthcare, hospitality, and industrial teams. Direct manufacturer pricing, certified durable fabrics, and bespoke embroidery.'}</p>
        <div class="actions">
          <a class="btn lime" href="#booking">Request a Bulk Quote ↗</a>
          <a class="btn outline" href="#courses">Explore Uniform Catalog</a>
        </div>
        <div class="proof">
          <div class="avatars"><span>RW</span><span>MV</span><span>ER</span></div>
          <span><strong>250,000+ garments customized.</strong><br>Trusted by 1,200+ organizations nationwide.</span>
        </div>
      </div>
      <div class="hero-visual">
        ${pic(alt?P.home2:P.home, alt?'Workwear showroom and custom uniform display':'Finished embroidered uniform garments on display')}
        <div class="floating"><strong>50+ Heads</strong>Tajima multi-head precision</div>
        <div class="floating right"><strong>4.9 ★</strong>B2B client satisfaction</div>
      </div>
    </div>
  </section>

  <!-- Metric Strip -->
  <div class="strip"><div class="container">
    <div><strong>1,200+</strong><br><span>corporate &amp; healthcare clients</span></div>
    <div><strong>250,000+</strong><br><span>garments outfitted</span></div>
    <div><strong>99.4%</strong><br><span>on-time delivery rate</span></div>
    <div><strong>48 hrs</strong><br><span>digital stitch proof turnaround</span></div>
  </div></div>

  <!-- Third Section: Product Categories (Tested & Guaranteed High Contrast) -->
  <section class="section category-section"><div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Uniform Collections</span>
        <h2>Browse Uniforms by Industry &amp; Role.</h2>
        <p>Engineered fabrics, consistent dye lots, and precision logo embroidery ready for heavy daily rotation.</p>
      </div>
      <a class="btn outline" href="#courses">Full Catalog →</a>
    </div>
    <div class="grid">${courseCards()}</div>
  </div></section>

  <!-- Craftsmanship & Capabilities -->
  <section class="section"><div class="container split">
    <div>
      <span class="eyebrow">Our Customization Capabilities</span>
      <h2>Millimeter-Precision Embroidery &amp; Fabric Engineering.</h2>
      <p class="lead">We combine industrial Tajima multi-head machinery with skilled digital thread digitizers. Every crest, logo, and badge is mapped stitch-by-stitch for sharp definition, color fastness, and zero puckering.</p>
      <ul class="list">
        <li><span class="check">✓</span>High-density Madeira poly-neon threads with 300+ fade-resistant shades.</li>
        <li><span class="check">✓</span>Heavy-duty fabrics certified for 50+ commercial wash cycles.</li>
        <li><span class="check">✓</span>Individual employee size kitting and custom department packaging.</li>
      </ul>
      <a class="btn" href="#about">Tour Our Factory &amp; Story →</a>
    </div>
    <div class="photo-panel">${pic(P.embroidery,'Precision multi-head embroidery machine producing custom workwear')}</div>
  </div></section>

  <!-- 5-Step Ordering Process -->
  <section class="section"><div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Simple B2B Workflow</span>
        <h2>From Design Upload to Workplace Delivery.</h2>
      </div>
    </div>
    <div class="grid process">
      ${[
        ['1. Select Garments','Browse our catalog of lab coats, polos, workwear, and aprons in certified fabrics.'],
        ['2. Digital Stitch Proof','Upload your logo; our master digitizers map stitch counts and Pantone thread colors in 48h.'],
        ['3. Precision Production','High-speed multi-head Tajima embroidery with double quality inspection and custom packaging.']
      ].map(x=>`<article class="card step"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}
    </div>
  </div></section>

  <!-- Specialist Team -->
  <section class="section"><div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Dedicated Uniform Experts</span>
        <h2>Meet Your B2B Account Team.</h2>
      </div>
      <a class="btn outline" href="#instructors">All Specialists →</a>
    </div>
    <div class="grid">${instructorCards()}</div>
  </div></section>

  <!-- Verified Client Story -->
  <section class="section"><div class="container">
    <div class="testimonial">
      <div>
        <span class="eyebrow">Client Case Story · Verified B2B Program</span>
        <p>“Switching to Roadwise Uniforms streamlined our 450-staff medical scrub rollout. The embroidery is impeccably sharp, sizing was exact, and seasonal re-orders arrive like clockwork.”</p>
        <small>Metro Health Network · Facilities &amp; Uniform Procurement</small>
      </div>
      <div class="stat"><strong>450+</strong><span>Staff Outfitted</span></div>
    </div>
  </div></section>

  <!-- Fabric Quality & Durability -->
  <section class="section"><div class="container split">
    <div class="photo-panel">${pic(P.fabrics,'High-grade commercial uniform fabrics and certified textiles')}</div>
    <div>
      <span class="eyebrow">Fabric Quality &amp; Longevity</span>
      <h2>Built for Long Shifts and Heavy Laundering.</h2>
      <p class="lead">We specify tear-resistant ripstop, 4-way stretch twills, and colorfast poly-cotton blends that retain shape and vibrant color wash after wash.</p>
      <a class="btn outline" href="#services">Explore Customization Options →</a>
    </div>
  </div></section>

  ${cta()}
</main>`;
}

function publicPage(r){
  if(r==='home'||r==='home2') return home(r==='home2');
  
  if(r==='courses') return `<main id="main">
    ${hero('Uniform & Workwear Catalog','Explore industry-specific workwear ready for custom logo embroidery and screen printing. Direct wholesale manufacturer pricing.')}
    <section class="section"><div class="container">
      <div class="filters">
        ${['All Categories','Corporate','Healthcare','Hospitality','Industrial','Education'].map((x,i)=>`<button class="filter ${i===0?'active':''}" onclick="filterCourses('${i===0?'all':x}',this)">${x}</button>`).join('')}
      </div>
      <div class="grid">${courseCards()}</div>
    </div></section>
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">Bespoke Program Setup</span>
        <h2>Need Custom Colors or Sizing Samples?</h2>
        <p class="lead">We provide free sizing sample kits for programs of 50+ units, plus custom Pantone dye lots for enterprise contracts.</p>
        <a class="btn" href="#booking">Request Sample Kit ↗</a>
      </div>
      <div class="card">
        <h3>Every Roadwise Uniform Program Includes</h3>
        <ul class="list">
          <li><span class="check">✓</span> Millimeter-precision Tajima logo embroidery</li>
          <li><span class="check">✓</span> High-density fade-resistant poly-neon threads</li>
          <li><span class="check">✓</span> Free digital 3D stitch proofing before production</li>
          <li><span class="check">✓</span> Individual department packing &amp; employee labeling</li>
        </ul>
      </div>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='instructors') return `<main id="main">
    ${hero('Our Master Embroiderers & Consultants','Experienced digitizers, production engineers, and B2B uniform consultants dedicated to your brand identity.')}
    <section class="section"><div class="container">
      <div class="filters">
        <input class="field" id="peopleSearch" placeholder="Search specialists by name, specialty, or industry…" oninput="searchPeople(this.value)">
      </div>
      <div class="grid">${instructorCards()}</div>
    </div></section>
    <section class="section"><div class="container testimonial">
      <div>
        <span class="eyebrow">Our Manufacturing Philosophy</span>
        <p>“A great uniform does more than display a logo — it instills team pride and withstands the true demands of daily work.”</p>
        <small>Roadwise Master Craftsmanship Principle</small>
      </div>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='blog') return `<main id="main">
    ${hero('The Workwear & Embroidery Journal','Practical guides on commercial garment durability, embroidery digitizing, uniform psychology, and fabric selection.')}
    <section class="section"><div class="container">
      <div class="grid">${posts.map((p,i)=>`<article class="card">
        <img class="blog-img" src="https://images.unsplash.com/${p[2]}?auto=format&fit=crop&w=800&q=80" alt="Article: ${p[0]}">
        <div class="meta"><span>${p[1]}</span><span>5 min read</span></div>
        <h3>${p[0]}</h3>
        <p>Expert recommendations for facility directors, operations managers, and business owners managing team apparel.</p>
        <div class="card-foot">
          <small>Roadwise Technical Team · Oct ${18-i}, 2026</small>
          <a href="#article">Read guide →</a>
        </div>
      </article>`).join('')}</div>
    </div></section>
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">B2B Uniform Updates</span>
        <h2>Get Industry Fabric &amp; Sourcing Insights.</h2>
        <p class="lead">Receive our quarterly technical brief on durable textiles, OSHA safety compliance, and branding methods.</p>
      </div>
      <form class="form card" onsubmit="subscribe(event)">
        <div class="field"><label>Work Email Address</label><input type="email" required placeholder="manager@company.example"></div>
        <button class="btn">Subscribe to Brief →</button>
        <small id="subscribeMsg">Demo form: no external email will be sent.</small>
      </form>
    </div></section>
  </main>`;

  if(r==='about') return `<main id="main">
    ${hero('Precision Craftsmanship & Ethical Manufacturing','Roadwise is dedicated to elevating workplace uniforms through high-density embroidery, certified durable fabrics, and transparent B2B service.')}
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">Our Story &amp; Factory</span>
        <h2>Outfitting Teams with Uncompromising Quality.</h2>
        <p class="lead">Founded with a single multi-head embroidery machine, Roadwise has evolved into a full-scale uniform manufacturing facility. We work directly with healthcare networks, culinary groups, corporate enterprises, and industrial contractors to design, stitch, and deliver uniforms that employees love wearing.</p>
        <p>Every garment undergoes dual-stage inspection: checking thread tension, stitch density, seam strength, and Pantone color accuracy before dispatch.</p>
      </div>
      <!-- Distinct Hero Image for About Page - Craftsmanship & Tailoring Workshop -->
      <div class="photo-panel">${pic(P.about,'Artisan embroiderer inspecting garment stitch quality')}</div>
    </div></section>
    <section class="section"><div class="container grid">
      ${[
        ['Our Mission','Equip every working professional with comfortable, durable, and impeccably branded workwear.'],
        ['Our Standards','OEKO-TEX® certified fabrics, Madeira poly-neon threads, and industrial-grade Tajima machinery.'],
        ['Our Guarantee','Zero-pucker embroidery, color-matched dye lots, and reliable on-time delivery for every batch.']
      ].map(x=>`<article class="card"><span class="symbol">✳</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}
    </div></section>
    <section class="section"><div class="container">
      <div class="section-head">
        <div><span class="eyebrow">Production Leadership</span><h2>Meet Our Master Craftspeople.</h2></div>
      </div>
      <div class="grid">${instructorCards()}</div>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='services') return `<main id="main">
    ${hero('Customization & Manufacturing Services','Comprehensive branding capabilities: from high-density computerized embroidery to high-volume screen printing and bespoke uniform tailored cuts.')}
    <section class="section"><div class="container grid">
      ${[
        ['High-Density Logo Embroidery','Multi-head Tajima embroidery with up to 15 colors per design and 3D puff options.'],
        ['Industrial Screen Printing','Durable plastisol and water-based inks formulated to withstand 50+ wash cycles.'],
        ['Heat-Seal & DTF Transfers','Photo-realistic multi-color transfers ideal for performance polyester and rainwear.'],
        ['Bespoke Uniform Manufacturing','Custom fabric weights, contrast piping, tailored cuts, and private label branding.'],
        ['Hi-Vis Reflective Taping','ANSI/ISEA 107 and EN ISO 20471 compliant reflective striping on safety garments.'],
        ['Department Sizing Kitting','Pre-packaged, individually labeled uniform packs organized by employee and location.']
      ].map((x,i)=>`<article class="card">
        <span class="symbol">${['◉','↗','✓','↻','⇢','⌁'][i]}</span>
        <h3>${x[0]}</h3>
        <p>${x[1]}</p>
        <div class="card-foot"><a href="#courses">Explore garments →</a></div>
      </article>`).join('')}
    </div></section>
    <section class="section"><div class="container">
      <h2>Quality Standards in Every Stitch</h2>
      <p class="lead">Every order includes a digital 3D proof, sample sew-out inspection, and certified thread fastness testing.</p>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='contact') return `<main id="main">
    ${hero('Request a Quote or Visit Our Showroom','Speak directly with our B2B uniform consultants or schedule a factory tour and fabric review.')}
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">Speak With Our Team</span>
        <h2>We are ready to build your uniform program.</h2>
        <div class="grid">
          ${[
            ['Direct Phone','+1 (800) 555-0146'],
            ['Orders Email','orders@roadwiseuniforms.example'],
            ['Showroom Hours','Mon–Fri, 8am–6pm EST']
          ].map(x=>`<article class="card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}
        </div>
        <h3>Production Facility &amp; Showroom</h3>
        <p class="lead">128 Meadowline Avenue · Industrial Park District<br>Nationwide B2B bulk shipping and local pickup available.</p>
      </div>
      <form class="card form" onsubmit="contactForm(event)">
        <h3>Request Program Information</h3>
        <div class="field"><label for="name">Contact Name *</label><input id="name" required placeholder="Full Name"></div>
        <div class="field"><label for="email">Work Email *</label><input id="email" type="email" required placeholder="manager@company.example"></div>
        <div class="field"><label for="company">Company / Organization *</label><input id="company" required placeholder="Organization Name"></div>
        <div class="field"><label for="interest">Industry Sector</label><select id="interest">
          <option>Corporate &amp; Office</option>
          <option>Healthcare &amp; Clinic</option>
          <option>Hospitality &amp; Restaurant</option>
          <option>Industrial &amp; Construction</option>
          <option>Education &amp; School</option>
        </select></div>
        <div class="field"><label for="message">Uniform Requirements *</label><textarea id="message" required placeholder="Tell us about your team size, required garments, and embroidery needs..."></textarea></div>
        <button class="btn">Send Inquiry →</button>
        <small id="contactMsg">Demo form: inquiry logged locally.</small>
      </form>
    </div></section>
    <section class="section"><div class="container"><h2>Frequently Asked Questions</h2>${faq()}</div></section>
  </main>`;

  if(r==='faq') return `<main id="main">
    ${hero('Frequently Asked Questions','Key answers regarding minimum orders, embroidery digitizing, fabric certifications, and turnaround schedules.')}
    <section class="section"><div class="container">${faq()}</div></section>
    ${cta()}
  </main>`;

  if(r==='success') return `<main id="main">
    ${hero('Client Showcase & Completed Work','Delivering consistent quality to industry leaders across healthcare, hospitality, logistics, and education.')}
    <section class="section"><div class="container stats-row">
      ${[
        ['1,200+','Corporate Clients'],
        ['250k+','Garments Outfitted'],
        ['99.4%','On-Time Delivery'],
        ['50+','Embroidery Heads']
      ].map(x=>`<div class="stat"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}
    </div></section>
    <section class="section"><div class="container grid">
      ${[
        ['Metro Health Network','450 Scrub Sets & Lab Coats','Fluid-resistant antimicrobial fabrics with high-density hospital crest embroidery.'],
        ['Grandview Hotel Group','180 Front-Desk & Chef Uniforms','Stain-shield chef coats and tailored front-desk blazers with metallic bullion crests.'],
        ['Apex Freight & Logistics','800 Hi-Vis Safety Parkas','ANSI Class 3 certified weatherproof jackets with reflective striping and back logos.']
      ].map(x=>`<article class="card">
        <span class="eyebrow">Completed Case Program</span>
        <h3>${x[0]}</h3>
        <p><b>${x[1]}</b><br>${x[2]}</p>
        <div class="card-foot"><small>Verified B2B Client</small><span>★★★★★</span></div>
      </article>`).join('')}
    </div></section>
    <section class="section"><div class="container split">
      <div>
        <h2>Seamless Re-Ordering Through Your Portal.</h2>
        <p class="lead">Approved clients access saved digital embroidery proofs, pre-negotiated volume tier pricing, and one-click team re-orders.</p>
        <a class="btn" href="#login">Access Client Portal →</a>
      </div>
      <div class="card">
        <h3>Program Fulfillment Metrics</h3>
        ${['Stitch Quality Compliance','Color Fastness Verification','On-Time Shipping','Client Retention'].map((x,i)=>`<div class="progress-item">
          <div><span>${x}</span><b>${[99,98,99,96][i]}%</b></div>
          <div class="progressline"><span style="width:${[99,98,99,96][i]}%"></span></div>
        </div>`).join('')}
      </div>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='course-details') return detailPage('Corporate Oxford Shirts & Polos','Tailored for modern office environments and executive teams. Breathable cotton-poly twill with reinforced seams and precision chest logo embroidery.',['100% Madeira poly-neon embroidery thread','Chest, sleeve, and back collar placement options','Wrinkle-resistant & machine-wash friendly','Tiered volume pricing from 10 to 5,000+ units'],'Wholesale: From $24.50 / unit');
  if(r==='instructor-details') return detailPage('Meet Elena Rostova','Elena leads our embroidery digitization department with over 14 years of expertise converting complex corporate brand guidelines into flawless embroidery stitch files.',['14 years specializing in multi-head embroidery','Expertise in 3D puff and flame-resistant threads','Pantone and Madeira thread color matching specialist','4,200+ completed corporate uniform programs'],'Showroom & Digitizing Lead');
  if(r==='booking') return bookingPage();
  if(r==='login'||r==='register'||r==='reset') return authPage(r);
  if(r==='article') return detailPage('Embroidery vs. Screen Printing: Choosing the Right Branding Method','Discover which decoration method delivers the greatest longevity, professional appearance, and cost efficiency for your team’s uniforms.',['Embroidery provides prestige and extreme wash durability','Screen printing excels at large back graphics and lightweight tees','Heat transfers offer photo-realistic gradients on performance wear','Hybrid branding approaches for multi-department organizations'],'5 min read · Roadwise Journal');
  if(r==='404') return `<main id="main">
    ${hero('404 · Page Not Found','The uniform or page you are looking for has been relocated.')}
    <section class="section"><div class="container">
      <div class="card">
        <span class="symbol">↩</span>
        <h2>Return to Our Uniform Collections</h2>
        <p>Explore our current catalog or get in touch with our uniform specialists.</p>
        <div class="actions">
          <a class="btn" href="index.html#home" onclick="navToHome(event)">Go Home →</a>
          <button class="btn outline" onclick="history.back()">Go Back</button>
        </div>
      </div>
    </div></section>
  </main>`;

  return null;
}

function detailPage(title,desc,items,side){
  return `<main id="main">
    ${hero(title,desc)}
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">Uniform Specifications</span>
        <h2>Engineered for Daily Commercial Wear.</h2>
        <p class="lead">Every style in our catalog has been rigorously field-tested for durability, colorfastness, and comfort through demanding work shifts.</p>
        <ul class="list">${items.map(x=>`<li><span class="check">✓</span>${x}</li>`).join('')}</ul>
        <a class="btn" href="#booking">Request a Quote for this Style ↗</a>
      </div>
      <div class="card">
        <h3>${side}</h3>
        <p>Direct manufacturer wholesale pricing. Sizing kits and digital proofs provided before production.</p>
        <div class="card-foot">
          <a href="#courses">Compare All Styles →</a>
          <a href="#contact">Speak with Consultant →</a>
        </div>
      </div>
    </div></section>
    ${cta()}
  </main>`;
}

const snav=[
  ['Overview','student'],
  ['Request a Quote','student-booking'],
  ['Active Orders','student-lessons'],
  ['Production Status','student-hours'],
  ['Proof Approvals','student-readiness'],
  ['Invoices & Billing','student-payments'],
  ['Messages','student-messages'],
  ['Fabric Certificates','student-certificates'],
  ['Company Profile','student-settings']
];

const anav=[
  ['Overview','admin'],
  ['B2B Clients','admin-students'],
  ['Specialists','admin-instructors'],
  ['Catalog & Pricing','admin-courses'],
  ['Production Schedule','admin-lessons'],
  ['Machine Fleet','admin-vehicles'],
  ['Invoices & Payments','admin-payments'],
  ['Quality Inspection','admin-readiness'],
  ['Compliance Certs','admin-certificates'],
  ['Client Messages','admin-messages'],
  ['System Alerts','admin-notifications'],
  ['Reports & Export','admin-reports'],
  ['Factory Settings','admin-settings']
];

const students=[
  ['Metro Health Network','Healthcare Scrubs (450)','Elena Rostova','100%','Delivered'],
  ['Grandview Luxury Hotel','Chef & Front Desk (180)','Marcus Vance','85%','In Production'],
  ['Apex Freight Logistics','Hi-Vis Parkas (800)','Amina Patel','45%','Stitching'],
  ['St. Jude Academy','Blazers & Ties (320)','Elena Rostova','95%','Inspection'],
  ['Harbor Seafood Grill','Bistro Aprons (60)','Marcus Vance','20%','Proof Approval']
];

const lessons=[
  ['Today · 09:00','Grandview Luxury Hotel','Marcus Vance','Chef Coats (180)','Tajima-01','Confirmed'],
  ['Today · 13:30','Apex Freight Logistics','Amina Patel','Hi-Vis Jackets (800)','Tajima-04','Confirmed'],
  ['Tomorrow · 10:00','St. Jude Academy','Elena Rostova','Bullion Crests (320)','Barudan-02','Pending'],
  ['Oct 24 · 14:00','Harbor Seafood Grill','Marcus Vance','Canvas Aprons (60)','Tajima-03','Proofing']
];

const table=(heads,rows)=>`<div class="table-wrap"><table>
  <thead><tr>${heads.map(x=>`<th>${x}</th>`).join('')}</tr></thead>
  <tbody>${rows.map(row=>`<tr>${row.map((c,i)=>{
    const value=String(c??'');
    const heading=String(heads[i]||'');
    if(/status/i.test(heading)) return `<td><span class="badge ${/due|pending|proofing/i.test(value)?'warn':/paid|issued|confirmed|complete|delivered|active/i.test(value)?'good':''}">${value}</span></td>`;
    if(/action/i.test(heading)){
      const actionHtml=/<button|<a\s/i.test(value)?value:`<button type="button" class="table-action" onclick="toast('Order details opened')">${value}</button>`;
      return `<td><div class="table-actions">${actionHtml}</div></td>`;
    }
    return `<td>${value}</td>`;
  }).join('')}</tr>`).join('')}</tbody>
</table></div>`;

function dashStat(name,value,note='↑ 12% this quarter'){
  return `<div class="dash-stat"><span>${name}</span><strong>${value}</strong><small class="positive">${note}</small></div>`;
}

function chart(title='Embroidery Production Volume (Units)'){
  return `<section class="panel"><h3>${title}</h3>
    <div class="bars">${[45,65,58,85,74,95,68,88,100,78,92,96].map(h=>`<i style="height:${h}%" title="${Math.round(h*120)} units"></i>`).join('')}</div>
    <div class="bar-labels">${['May','Jun','Jul','Aug','Sep','Oct'].map(x=>`<span>${x}</span>`).join('')}</div>
  </section>`;
}

function studentContent(r){
  if(r==='student'||r==='student-lessons'){
    return `<div class="dash-title">
      <div>
        <h1>${r==='student'?'Client Portal · Metro Health Network':'Active Uniform Orders'}</h1>
        <p>${r==='student'?'Order tracking, digital embroidery proofs, and sizing sheets.':'Review ongoing manufacturing and previous order dispatches.'}</p>
      </div>
      <a class="btn lime" href="#student-booking">＋ New Uniform Quote</a>
    </div>
    ${r==='student'?`
    <div class="dash-grid">
      ${dashStat('Garments Ordered','450 units','Fall scrub rollout')}
      ${dashStat('Orders Completed','12 batches','100% on-schedule')}
      ${dashStat('Digital Proofs Approved','8 designs','All validated')}
      ${dashStat('Account Balance','$0.00','Net 30 terms active')}
    </div>
    <div class="two">
      <div>
        <section class="panel">
          <h3>Active Order · 450 Antimicrobial Scrubs</h3>
          <div class="progressline"><span style="width:100%"></span></div>
          <p class="lead" style="font-size:12px;margin-top:12px">100% Complete · Delivered via Freight Track #RW-8842</p>
        </section>
        <section class="panel">
          <h3>Uniforms Outfitted by Department</h3>
          ${[['ICU & Emergency',160,160],['Surgical Wings',120,120],['Pediatric Care',90,90],['Outpatient Clinic',80,80]].map(x=>`<div class="progress-item">
            <div><span>${x[0]} · ${x[1]} of ${x[2]} units</span><b>100%</b></div>
            <div class="progressline"><span style="width:100%"></span></div>
          </div>`).join('')}
        </section>
      </div>
      <div>
        <section class="panel">
          <h3>Upcoming Batch</h3>
          <div class="agenda-item">
            <div class="datebox"><b>28</b>OCT</div>
            <div><strong>Winter Fleece Outerwear · 120 units</strong><small>Embroidery Machine Tajima-02 · Elena Rostova</small></div>
          </div>
          <a href="#student-lessons">View all orders →</a>
        </section>
        <section class="panel">
          <h3>Account Manager Note</h3>
          <p class="lead" style="font-size:12px">“The autumn navy scrub batch passed inspection with zero defects. Thread tension and chest embroidery density verified.”</p>
          <small>Marcus Vance · Senior B2B Consultant</small>
        </section>
      </div>
    </div>
    ${chart('Monthly Order Fulfillment (Garments)')}`:table(['Date','Order ID','Category','Quantity','Status'],[
      ['Oct 14','ORD-8921','Healthcare Antimicrobial Scrubs','450 units','Delivered'],
      ['Sep 28','ORD-8714','Executive Lab Coats','120 units','Delivered'],
      ['Aug 12','ORD-8452','Pediatric Custom Printed Scrubs','90 units','Delivered']
    ])}`;
  }
  if(r==='student-booking') return `<div class="dash-title"><div><h1>Request a Uniform Quote</h1><p>Submit uniform specifications and logo files for digital proofing.</p></div></div><div class="two"><form class="panel form" onsubmit="confirmBooking(event)"><div class="field"><label>Uniform Style *</label><select required>${courses.map(c=>`<option>${c[0]}</option>`).join('')}</select></div><div class="field"><label>Consultant *</label><select required>${people.map(p=>`<option>${p[0]}</option>`).join('')}</select></div><div class="field"><label>Decoration Type *</label><select required><option>Direct Chest Embroidery</option><option>3D Puff Embroidery</option><option>Screen Printing</option><option>Heat Transfer</option></select></div><div class="grid"><div class="field"><label>Target Delivery Date *</label><input type="date" required></div><div class="field"><label>Quantity *</label><select required><option>10–50 units</option><option>50–250 units</option><option>250–1,000 units</option><option>1,000+ units</option></select></div></div><button class="btn lime">Submit Quote Request →</button><p id="bookingMsg" class="notice">Demo portal: quote logged locally without charges.</p></form><div><section class="panel"><h3>What Happens Next</h3><div class="notice">✓ Digital 3D embroidery proof within 24 hours<br>✓ Free sizing kit sent for 50+ unit programs<br>✓ Direct manufacturer wholesale pricing</div></section></div></div>`;
  if(r==='student-hours') return `<div class="dash-title"><div><h1>Production Pipeline</h1><p>Live progress tracking of your active garment batches.</p></div></div><div class="dash-grid">${dashStat('Total Units','450','Batch 2026-F')}${dashStat('Stitched','450','100% complete')}${dashStat('Inspected','450','Passed ISO check')}${dashStat('Dispatched','450','Delivered')}</div>`;
  if(r==='student-readiness') return `<div class="dash-title"><div><h1>Digital Proof Approvals</h1><p>Review digitized logo mockups, stitch counts, and Pantone thread matching.</p></div></div><div class="dash-grid">${dashStat('Approved Proofs','8','Active for re-orders')}${dashStat('Thread Palette','Madeira Poly-Neon','Colorfast verified')}${dashStat('Digitizing Lead','Elena Rostova','Master Embroiderer')}</div>`;
  if(r==='student-payments') return `<div class="dash-title"><div><h1>Invoices &amp; Statements</h1><p>Review commercial wholesale invoices and payment receipts.</p></div><button class="btn outline" onclick="toast('Sample invoice downloaded')">Download Invoice ↓</button></div><div class="dash-grid">${dashStat('Total Invoiced','$12,600','Net 30 terms')}${dashStat('Paid to Date','$12,600','Paid in full')}${dashStat('Balance Due','$0.00','Account current')}</div>`;
  if(r==='student-messages') return simpleContent('Messages & Updates','Direct communication with your Roadwise account manager.',[['Marcus Vance','Scrub batch #RW-8842 passed final inspection and shipped today.','Today · 10:14'],['Elena Rostova','Your digitized 3D crest mockup has been updated with Pantone 286C.','Oct 12']]);
  if(r==='student-certificates') return `<div class="dash-title"><div><h1>Fabric Certifications</h1><p>Official textile safety, flame resistance, and wash durability test reports.</p></div></div><div class="grid"><article class="card"><span class="symbol">✦</span><span class="tag">Certified</span><h3>OEKO-TEX® Standard 100</h3><p>Tested for harmful substances · Certificate #OT-2026-992</p></article><article class="card"><span class="symbol">✓</span><span class="tag">Certified</span><h3>ANSI/ISEA 107 Hi-Vis Standard</h3><p>Retroreflective material compliance report</p></article></div>`;
  if(r==='student-settings') return `<div class="dash-title"><div><h1>Company Profile &amp; Settings</h1><p>Manage corporate address, sizing specifications, and billing details.</p></div></div><div class="two"><form class="panel form" onsubmit="saveDemo(event)"><div class="field"><label>Company Name</label><input value="Metro Health Network"></div><div class="field"><label>Contact Email</label><input value="procurement@metrohealth.example"></div><button class="btn">Save Profile</button></form></div>`;
  return simpleContent('Client Portal','Select an option from the sidebar.');
}

function simpleContent(title,desc,items=[]){
  return `<div class="dash-title"><div><h1>${title}</h1><p>${desc}</p></div></div>
  <section class="panel">${items.map(x=>`<div class="agenda-item"><div class="datebox">✉</div><div><strong>${x[0]}</strong><small>${x[2]}</small><p>${x[1]}</p></div></div>`).join('')}</section>`;
}

function adminContent(r){
  const rows=students.map(x=>[x[0],x[1],x[2],`<span class="badge blue">${x[3]}</span>`,x[4]]);
  if(r==='admin'||r==='admin-reports'){
    return `<div class="dash-title">
      <div>
        <h1>${r==='admin'?'Supplier Operations Dashboard':'Production & Revenue Reports'}</h1>
        <p>${r==='admin'?'Live overview of embroidery machine capacity, B2B client orders, and factory throughput.':'Analyze manufacturing volume, client accounts, and on-time fulfillment rates.'}</p>
      </div>
      <button class="btn lime" onclick="toast('Production report exported')">Export Report ↓</button>
    </div>
    <div class="dash-grid">
      ${dashStat('Active B2B Clients','248','Enterprise accounts')}
      ${dashStat('Garments in Production','3,850','Across 8 machines')}
      ${dashStat('Embroidery Heads','52 heads','48 running today')}
      ${dashStat('On-Time Dispatch','99.4%','Exceeding 98% target')}
    </div>
    <div class="dash-grid">
      ${dashStat('Monthly Revenue','$184,200','Wholesale volume')}
      ${dashStat('Pending Quotes','14 accounts','$42,800 pipeline')}
      ${dashStat('Thread Inventory','1,420 spools','Madeira & Amann')}
      ${dashStat('Quality Pass Rate','99.8%','Zero rework batches')}
    </div>
    <div class="two">
      <div>
        ${chart('Weekly Stitched Garment Volume (Units)')}
        <section class="panel">
          <h3>Recent Client Production Runs</h3>
          ${table(['Client','Uniform Program','Specialist','Progress','Status'],rows.slice(0,4))}
        </section>
      </div>
      <div>
        <section class="panel">
          <h3>Today’s Machine Schedule</h3>
          <div class="agenda">
            ${lessons.slice(0,3).map(x=>`<div class="agenda-item">
              <div class="datebox"><b>${x[4].split('-')[1]||'01'}</b>MC</div>
              <div><strong>${x[1]}</strong><small>${x[3]} · ${x[4]}</small></div>
            </div>`).join('')}
          </div>
          <a href="#admin-lessons">View full factory schedule →</a>
        </section>
        <section class="panel">
          <h3>Production Alerts</h3>
          <p>✓ Tajima 12-head calibration complete<br>✓ Madeira Navy 1143 thread stock replenished<br>✓ 14 digital stitch proofs sent for review</p>
        </section>
      </div>
    </div>`;
  }
  if(r==='admin-students') return `<div class="dash-title"><div><h1>B2B Client Accounts</h1><p>Manage corporate, healthcare, and hospitality client uniform programs.</p></div></div><div class="panel">${table(['Client','Program','Account Lead','Progress','Status'],students)}</div>`;
  if(r==='admin-instructors') return `<div class="dash-title"><div><h1>Embroidery Specialists &amp; Consultants</h1><p>Master digitizers, machine operators, and B2B uniform consultants.</p></div></div><div class="grid">${instructorCards()}</div>`;
  if(r==='admin-courses') return `<div class="dash-title"><div><h1>Garment Catalog &amp; Wholesale Pricing</h1><p>Manage standard uniform styles, minimum order quantities, and wholesale price tiers.</p></div></div><div class="panel">${table(['Product Style','Category','MOQ & Specs','Starting Price'],courses.map(x=>[x[0],x[1],x[2],x[3]])) }</div>`;
  if(r==='admin-lessons'||r==='admin-schedule') return `<div class="dash-title"><div><h1>Production Schedule &amp; Machine Queue</h1><p>Real-time machine scheduling and operator assignments.</p></div></div><div class="panel">${table(['Time','Client','Lead','Garment Batch','Machine','Status'],lessons)}</div>`;
  if(r==='admin-vehicles') return `<div class="dash-title"><div><h1>Embroidery Machinery &amp; Equipment Fleet</h1><p>Multi-head industrial embroidery machines, heat presses, and maintenance schedules.</p></div></div><div class="panel">${table(['Equipment','Model','Heads','Technician','Status'],[
    ['Tajima TMAR-KC','12-Head Multi-Needle','12','Elena Rostova','Operational'],
    ['Tajima TFMX-IIC','8-Head High Speed','8','Elena Rostova','Operational'],
    ['Barudan BEXY-Z1506','6-Head Precision','6','Marcus Vance','Operational'],
    ['Geo Knight DK20S','Dual Air Heat Press','2','Amina Patel','Operational']
  ])}</div>`;
  if(r==='admin-payments') return `<div class="dash-title"><div><h1>Invoicing &amp; Commercial Accounts</h1><p>Wholesale balances, deposit tracking, and commercial credit accounts.</p></div></div><div class="dash-grid">${dashStat('Total Invoiced','$184,200','Month to date')}${dashStat('Outstanding','$24,500','Net 30 terms')}</div>`;
  if(r==='admin-readiness') return `<div class="dash-title"><div><h1>Quality Control &amp; Inspection</h1><p>Stitch count verification, tension check, and colorfastness lab tests.</p></div></div><div class="dash-grid">${dashStat('Inspection Pass Rate','99.8%','Standard ISO 9001')}</div>`;
  if(r==='admin-certificates') return `<div class="dash-title"><div><h1>Compliance &amp; Textile Standards</h1><p>OEKO-TEX, ANSI Hi-Vis, and fire retardancy certifications.</p></div></div>`;
  if(r==='admin-messages') return simpleContent('Client Inquiries','Direct messages from facilities and procurement managers.',[['Metro Health','Need 50 additional scrub tops in size L.','Today · 11:20'],['Apex Logistics','Winter jacket sample approved for production.','Yesterday']]);
  if(r==='admin-notifications') return simpleContent('Production Notifications','Machine maintenance and supply alerts.',[['Supply','Madeira Royal Blue thread batch delivered.','Today'],['Maintenance','Tajima 12-head oiling scheduled for Friday.','Yesterday']]);
  if(r==='admin-settings') return `<div class="dash-title"><div><h1>Factory &amp; Supplier Profile</h1><p>Manage production facility details, lead times, and default MOQ settings.</p></div></div><div class="two"><form class="panel form" onsubmit="saveDemo(event)"><div class="field"><label>Supplier Name</label><input value="Roadwise Custom Uniforms &amp; Workwear"></div><div class="field"><label>Direct Sales Email</label><input value="orders@roadwiseuniforms.example"></div><button class="btn">Save Configuration</button></form></div>`;
  return simpleContent('Supplier Workspace','Select a section from the management menu.');
}

function dashboard(r){
  const admin=r.startsWith('admin'),items=admin?anav:snav,base=admin?'admin':'student';
  return `<div class="dash">
    <div class="drawer-backdrop" onclick="closeSidebar()"></div>
    <div class="dash-layout">
      <aside class="sidebar" id="sidebar">
        <a class="brand" href="index.html#home" onclick="navToHome(event)">
          <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>${admin?'SUPPLIER DASHBOARD':'CLIENT PORTAL'}</small></span>
        </a>
        <div class="side-label">${admin?'Operations Management':'Client Portal'}</div>
        <nav class="side-nav">${items.map(([name,id])=>`<a class="${id===r?'active':''}" href="#${id}"><span>${iconFor(name)}</span>${name}</a>`).join('')}</nav>
        <div class="side-bottom side-nav">
          <a href="index.html#home" onclick="navToHome(event)">↗ Public Website</a>
          <a href="#login">⇥ Sign Out</a>
        </div>
      </aside>
      <div class="dash-main">
        <div class="dashbar">
          <button class="menu-btn mobile-only" onclick="openSidebar()" aria-label="Open sidebar">☰</button>
          <a class="brand" href="#${base}"><span>${admin?'Supplier Operations':'Client Workspace'}</span></a>
          <label class="dashboard-search">
            <span aria-hidden="true">⌕</span>
            <input class="search" type="search" aria-label="Search records" placeholder="Search orders, clients, products…" oninput="dashboardSearch(this.value)">
          </label>
          <button class="iconbtn theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">◐</button>
          <button class="iconbtn" onclick="toggleDir()" aria-label="Toggle direction">⇄</button>
          <button class="iconbtn" onclick="toast('All production batches on schedule')" aria-label="Notifications">♧</button>
          <span class="tag">${admin?'Production Admin':'Metro Health'}</span>
        </div>
        <main id="main" class="dash-content">${admin?adminContent(r):studentContent(r)}</main>
      </div>
    </div>
  </div>`;
}

function iconFor(n){
  return ({
    Overview:'⌂',
    'Request a Quote':'＋',
    'Active Orders':'◷',
    'Production Status':'◴',
    'Proof Approvals':'◎',
    'Invoices & Billing':'＄',
    Messages:'✉',
    'Fabric Certificates':'✦',
    'Company Profile':'⚙',
    'B2B Clients':'♙',
    Specialists:'♧',
    'Catalog & Pricing':'▤',
    'Production Schedule':'▦',
    'Machine Fleet':'▣',
    'Invoices & Payments':'＄',
    'Quality Inspection':'◎',
    'Compliance Certs':'✦',
    'Client Messages':'✉',
    'System Alerts':'♧',
    'Reports & Export':'▥',
    'Factory Settings':'⚙'
  })[n]||'•';
}

function bookingPage(){
  return `<main id="main" class="auth-compact-page booking-compact-page">
    <div class="auth-compact-heading">
      <a class="auth-compact-brand" href="index.html#home" onclick="navToHome(event)">
        <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>CUSTOM UNIFORMS &amp; EMBROIDERY</small></span>
      </a>
      <p>B2B UNIFORM QUOTE &amp; DIGITAL PROOFING</p>
    </div>
    <section class="auth-compact-card booking-compact-card">
      <span class="booking-kicker">DIRECT MANUFACTURER QUOTE</span>
      <h1>Request a Custom Uniform Quote</h1>
      <p class="auth-compact-subtitle">Specify your garment categories, volume, and branding requirements. We return digital stitch proofs within 24 hours.</p>
      ${bookingForm()}
      <div class="auth-compact-footer booking-footer">Need bespoke advice? <a href="#contact">Contact our uniform specialists</a></div>
    </section>
  </main>`;
}

function bookingForm(){
  return `<form class="auth-compact-form booking-compact-form" onsubmit="confirmBooking(event)">
    <div class="booking-fields">
      <div class="field">
        <label for="bookingCourse">Uniform Category *</label>
        <select id="bookingCourse" required>${courses.map(x=>`<option>${x[0]}</option>`).join('')}</select>
      </div>
      <div class="field">
        <label for="bookingInstructor">Dedicated Account Lead *</label>
        <select id="bookingInstructor" required>${people.map(p=>`<option>${p[0]}</option>`).join('')}</select>
      </div>
      <div class="field">
        <label for="bookingType">Branding Method *</label>
        <select id="bookingType" required>
          <option>Direct Logo Embroidery (Left Chest)</option>
          <option>3D Puff Raised Embroidery</option>
          <option>Industrial Screen Printing</option>
          <option>Heat Seal &amp; DTF Transfer</option>
          <option>Combination Embroidery + Print</option>
        </select>
      </div>
      <div class="field">
        <label for="bookingDate">Required Delivery Date *</label>
        <input id="bookingDate" type="date" required>
      </div>
      <div class="field">
        <label for="bookingQuantity">Estimated Quantity *</label>
        <select id="bookingQuantity" required>
          <option>10–50 units (Sample MOQ)</option>
          <option>50–250 units (Tier 1 Discount)</option>
          <option>250–1,000 units (Tier 2 Discount)</option>
          <option>1,000+ units (Enterprise Contract)</option>
        </select>
      </div>
      <div class="field">
        <label for="bookingPlacement">Embroidery Placement</label>
        <select id="bookingPlacement">
          <option>Left Chest (Standard)</option>
          <option>Right Chest</option>
          <option>Left / Right Sleeve</option>
          <option>Back Collar / Upper Yoke</option>
          <option>Full Back</option>
        </select>
      </div>
    </div>
    <button class="auth-compact-submit booking-submit" type="submit">Submit Quote Request <span>→</span></button>
    <p id="bookingMsg" class="auth-compact-message booking-message">Your quote request will be confirmed with digital stitch mockups within 24 hours.</p>
  </form>`;
}

function authPage(r){
  let admin=new URLSearchParams(location.hash.split('?')[1]||'').get('role')==='admin';
  let reset=r==='reset',signup=r==='register';
  return `<main id="main" class="auth-compact-page ${r==='login'?'auth-login-fit':''}">
    <div class="auth-compact-heading">
      <a class="auth-compact-brand" href="index.html#home" onclick="navToHome(event)">
        <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>UNIFORMS &amp; WORKWEAR</small></span>
      </a>
      <p>CLIENT PORTAL &amp; PRODUCTION ACCESS</p>
    </div>
    <section class="auth-compact-card">
      <nav class="auth-compact-tabs" aria-label="Account Access">
        <a class="${!signup&&!reset?'selected':''}" href="#login">Sign In</a>
        <a class="${signup?'selected':''}" href="#register">New Account</a>
        <a class="${reset?'selected':''}" href="#reset">Reset Password</a>
      </nav>
      <h1>${reset?'Reset Access':signup?'Register Corporate Account':'Welcome Back'}</h1>
      <p class="auth-compact-subtitle">${reset?'Enter your business email to receive reset instructions.':signup?'Set up your company profile for digital proofing and re-orders.':'Access your uniform orders, digital embroidery proofs, and invoices.'}</p>
      <form class="auth-compact-form" onsubmit="${reset?'resetDemoForm(event)':`loginForm(event,'${r}')`}">
        ${signup?'<div class="field"><label for="authCompany">Company / Organization *</label><input id="authCompany" name="company" required placeholder="Organization Name"></div>':''}
        ${signup?'<div class="field"><label for="authName">Contact Name *</label><input id="authName" name="name" autocomplete="name" required placeholder="Full Name"></div>':''}
        <div class="field"><label for="authEmail">${admin?'Work Email (Admin)':'Work Email Address *'}</label><input id="authEmail" name="email" type="email" autocomplete="email" required placeholder="procurement@company.example"></div>
        ${!reset?`<div class="field"><div class="auth-compact-label-row"><label for="authPassword">Password *</label>${!signup?'<a href="#reset">Forgot?</a>':''}</div><div class="password-wrap"><input id="authPassword" name="password" type="password" autocomplete="${signup?'new-password':'current-password'}" ${signup?'minlength="6"':''} required placeholder="Enter password"><button class="password-toggle" type="button" onclick="togglePassword('authPassword',this)" aria-label="Show password">Show</button></div></div>`:''}
        ${!signup&&!reset?'<label class="auth-compact-remember"><input type="checkbox" checked> Remember this device</label>':''}
        <button class="auth-compact-submit" type="submit">${reset?'Send Reset Instructions':signup?'Create Client Profile':'Sign In to Portal'} <span>→</span></button>
        <p class="auth-compact-message" id="authMsg">${reset?'Demo only: instructions logged locally.':'Demo portal: no real password is stored.'}</p>
      </form>
      <div class="auth-compact-footer">${reset?'Remembered password?':signup?'Already have an account?':'New corporate client?'} <a href="${reset?'#login':signup?'#login':'#register'}">${reset?'Sign in':signup?'Sign in':'Create account'}</a></div>
      ${!reset?'<div class="auth-compact-role"><a href="#login?role=client">Client Portal</a><a href="#login?role=admin">Supplier Admin</a></div>':''}
    </section>
  </main>`;
}

function render(){
  const r=route();
  let content;
  if(r.startsWith('student')||r.startsWith('admin')) content=dashboard(r);
  else content=publicPage(r);
  
  if(!content){
    content=`<main id="main">${hero('404 · Page Not Found','This page does not exist. Return to the Roadwise homepage.')}
      <section class="section"><div class="container">
        <a class="btn" href="index.html#home" onclick="navToHome(event)">Go Home →</a>
        <button class="btn outline" onclick="history.back()">Go Back</button>
      </div></section>
    </main>`;
  }
  
  let app=document.getElementById('app');
  app.innerHTML=(r.startsWith('student')||r.startsWith('admin'))?content:(['login','register','reset'].includes(r)?content:header()+content+footer());
  
  // Inject Hero Search and Contact Dock for preserved signature layout
  if(r==='home'||r==='home2'){
    document.querySelector('.hero-visual')?.insertAdjacentHTML('afterend', heroSearch());
  }
  if(!['login','register','reset'].includes(r) && !r.startsWith('student') && !r.startsWith('admin')){
    app.insertAdjacentHTML('beforeend', contactDock());
  }
  if(r==='contact'){
    document.querySelector('#main > section:nth-of-type(2)')?.insertAdjacentHTML('afterend', academyLocation());
  }

  const pageTitles={
    home:'Custom Uniforms & Embroidery | Roadwise',
    home2:'Showroom & Workwear Catalog | Roadwise',
    about:'About Our Factory & Craftsmanship | Roadwise',
    services:'Customization & Embroidery Services | Roadwise',
    courses:'Uniform & Workwear Products | Roadwise',
    instructors:'Our Master Embroiderers & Consultants | Roadwise',
    success:'Client Showcase & Completed Work | Roadwise',
    blog:'Uniform & Embroidery Journal | Roadwise',
    contact:'Contact Us & Quote Request | Roadwise',
    faq:'Ordering FAQs & MOQs | Roadwise',
    booking:'Request a Bulk Quote | Roadwise',
    student:'Client Portal | Roadwise',
    admin:'Supplier Operations Dashboard | Roadwise'
  };
  document.title=pageTitles[r]||`${r.replace(/-/g,' ').replace(/\b\w/g,x=>x.toUpperCase())} | Roadwise Custom Uniforms`;
  
  document.body.classList.toggle('dark',localStorage.theme==='dark');
  document.documentElement.dir=localStorage.dir||'ltr';
  document.body.classList.toggle('rtl',document.documentElement.dir==='rtl');
  window.scrollTo(0,0);
  syncThemeControl();
}

function toggleTheme(){
  localStorage.theme=localStorage.theme==='dark'?'light':'dark';
  document.body.classList.toggle('dark',localStorage.theme==='dark');
  syncThemeControl();
}

function syncThemeControl(){
  let dark=localStorage.theme==='dark';
  document.querySelectorAll('.theme-toggle').forEach(b=>{
    b.textContent=dark?'☼':'◐';
    b.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
    b.setAttribute('aria-pressed',String(dark));
  });
}

function toggleDir(){
  const nextDir=(document.documentElement.dir==='rtl')?'ltr':'rtl';
  try{localStorage.setItem('dir',nextDir);}catch(e){}
  document.documentElement.setAttribute('dir',nextDir);
  document.body.classList.toggle('rtl',nextDir==='rtl');
}

function toggleMenu(b){
  let m=document.querySelector('.mobile-menu');
  if(!m) return;
  let open=m.classList.toggle('open');
  b.setAttribute('aria-expanded',String(open));
}

function closeMobileMenu(){
  const m=document.querySelector('.mobile-menu');
  if(m&&m.classList.contains('open')){
    m.classList.remove('open');
    document.querySelector('.menu-btn')?.setAttribute('aria-expanded','false');
  }
}

function toggleAccount(b){
  let w=b.closest('.account-wrap');
  let open=w.classList.toggle('open');
  b.setAttribute('aria-expanded',String(open));
}

function openSidebar(){
  document.querySelector('#sidebar')?.classList.add('open');
  document.querySelector('.drawer-backdrop')?.classList.add('show');
}

function closeSidebar(){
  document.querySelector('#sidebar')?.classList.remove('open');
  document.querySelector('.drawer-backdrop')?.classList.remove('show');
}

function toast(text){
  let n=document.createElement('div');
  n.className='toast';
  n.textContent=text;
  document.body.appendChild(n);
  setTimeout(()=>n.remove(),2600);
}

function filterCourses(type,btn){
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.course-card').forEach(c=>{
    c.style.display=(type==='all'||c.dataset.category===type)?'':'none';
  });
}

function searchPeople(q){
  document.querySelectorAll('.instructor').forEach(c=>{
    c.style.display=c.innerText.toLowerCase().includes(String(q||'').toLowerCase())?'':'none';
  });
}

function dashboardSearch(q){
  const term=String(q||'').trim().toLowerCase();
  const targets=document.querySelectorAll('#main tbody tr, #main .agenda-item, #main .dash-stat, #main .panel .card');
  targets.forEach(el=>{
    el.style.display=!term||el.innerText.toLowerCase().includes(term)?'':'none';
  });
}

function confirmBooking(e){
  e.preventDefault();
  let box=e.currentTarget.querySelector('#bookingMsg');
  if(box){
    box.className='notice';
    box.textContent='Quote request received! Our digitizers will prepare digital stitch mockups within 24 hours.';
  }
  toast('Quote request logged successfully');
}

function contactForm(e){
  e.preventDefault();
  const msg=document.getElementById('contactMsg');
  if(msg) msg.textContent='Thank you! Your inquiry has been sent to our corporate uniform team.';
  toast('Inquiry submitted');
}

function subscribe(e){
  e.preventDefault();
  const msg=document.getElementById('subscribeMsg');
  if(msg) msg.textContent='Thank you for subscribing to our technical uniform brief.';
  toast('Subscribed to quarterly brief');
}

function saveDemo(e){
  e.preventDefault();
  toast('Settings updated in demo profile');
}

function loginForm(e,r){
  e.preventDefault();
  let admin=location.hash.includes('role=admin');
  location.hash=admin?'admin':'student';
}

function resetDemoForm(e){
  e.preventDefault();
  let m=document.getElementById('authMsg');
  if(m) m.textContent='Password reset instructions sent to your business email.';
}

function togglePassword(id,b){
  let i=document.getElementById(id);
  if(!i) return;
  let show=i.type==='password';
  i.type=show?'text':'password';
  b.textContent=show?'Hide':'Show';
}

document.addEventListener('click',e=>{
  if(!e.target.closest('.account-wrap')){
    document.querySelectorAll('.account-wrap.open').forEach(x=>{
      x.classList.remove('open');
      x.querySelector('.account-toggle')?.setAttribute('aria-expanded','false');
    });
  }
});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    document.querySelectorAll('.account-wrap.open').forEach(x=>{
      x.classList.remove('open');
      x.querySelector('.account-toggle')?.setAttribute('aria-expanded','false');
    });
    closeSidebar();
    closeMobileMenu();
  }
});

window.addEventListener('hashchange',render);
window.addEventListener('DOMContentLoaded',render);
render();
