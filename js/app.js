const A='assets/', P={
  home:'photo-1449965408869-eaa3f722e40d',      /* Driver perspective behind the wheel on open road */
  home2:'photo-1508974239320-0a029497e820',     /* Modern dual-control training car exterior */
  about:'photo-1549317661-bd32c8ce0db2',        /* Safe car on highway road journey */
  student:'photo-1651751055282-095885ec2544',    /* Student driver hands on steering wheel */
  safety:'photo-1514626585111-9aa86183ac98',    /* Highway traffic & road safety navigation */
  road:'photo-1469854523086-cc02fe5d8800',      /* Open highway road travel */
  car:'photo-1580273916550-e323be2ae537'        /* Dual-control training vehicle */
};

const courses=[
  ['Beginner Behind-the-Wheel Course','Beginner · First-Time Learners','1-on-1 Coaching · 2-hr sessions','Comprehensive Plan','photo-1503376780353-7e6692767b70','Step-by-step vehicle controls, steering techniques, mirror discipline, intersection safety, and basic traffic rules in dual-control cars.'],
  ['Practical Behind-the-Wheel Training','Practical · Skill Building','All skill levels · Dual-control','Flexible Sessions','photo-1541899481282-d53bffe3c35d','Hands-on road practice covering lane positioning, highway merging, roundabouts, parallel parking, and real-world traffic management.'],
  ['Road Test Preparation & Mock Exam','Test Prep · Exam Readiness','Permit required · Exam simulation','Test Readiness','photo-1517524008697-84bbe3c3fd98','Simulated driving tests with scoring criteria, parking maneuvers, critical error avoidance, and pre-test vehicle warm-up session.'],
  ['Complete Driver License Training','License Training · Teen & Adult','Structured state curriculum','Full Certification','photo-1580273916550-e323be2ae537','Comprehensive training satisfying state driving practice hours, defensive driving fundamentals, and complete road test preparation.'],
  ['Adult & Senior Refresher Driving','Refresher · Confidence Building','Licensed drivers · Custom pacing','Personalized Coaching','photo-1502877338535-766e1452684a','Targeted behind-the-wheel coaching to regain confidence, adapt to new vehicle technologies, night driving, and busy expressway traffic.'],
  ['Defensive Driving & Collision Prevention','Specialized · Safety & Awareness','All drivers · Hazard avoidance','Safety Certification','photo-1563720223185-11003d516935','Advanced hazard recognition, space management, emergency braking techniques, and safe vehicle handling in adverse weather conditions.']
];
const products=courses;

const people=[
  ['Elena Rostova','14 years · Senior Certified Driving Instructor','5.0','4,200+ lessons','Beginner Training, Patient Coaching, Test Prep','photo-1573496359142-b8d87734a5a2'],
  ['Marcus Vance','10 years · Defensive Driving & Safety Specialist','4.9','1,850+ lessons','Highway Navigation, Maneuvering, Parallel Parking','photo-1560250097-0b93528c311a'],
  ['Amina Patel','8 years · Dual-Control Evaluator & Road Coach','4.9','2,400+ lessons','Mock Road Tests, City Driving, Adult Refresher','photo-1580489944761-15a19d654956']
];
const team=people;

const posts=[
  ['Top Road Test Mistakes and How to Avoid Them on Exam Day','Test Preparation','photo-1517524008697-84bbe3c3fd98'],
  ['Defensive Driving: Maintaining Safe Following Distances and Hazard Perception','Road Safety','photo-1514626585111-9aa86183ac98'],
  ['Overcoming Behind-the-Wheel Anxiety: A Guide for First-Time Learner Drivers','Student Guide','photo-1449965408869-eaa3f722e40d']
];

const links=[
  ['Home','home'],
  ['Home 2','home2'],
  ['About','about'],
  ['Services','services'],
  ['Courses','courses'],
  ['Journal','blog'],
  ['Contact','contact']
];

const route=()=>{
  let raw=(location.hash.slice(1).split('?')[0]||'').replace(/^\/+|\/+$/g,'').replace(/\.html?$/i,'').toLowerCase();
  const aliases={
    '':'home','index':'home',
    'book':'booking','booking-page':'booking','quote':'booking','request-quote':'booking',
    'lessons':'courses','programs':'courses','catalog':'courses','products':'courses','classes':'courses',
    'team':'instructors','coaches':'instructors','teachers':'instructors','specialists':'instructors',
    'stories':'success','reviews':'success','showcase':'success','portfolio':'success',
    'signup':'register','sign-up':'register','student-login':'login','client-login':'login','not-found':'404'
  };
  if(aliases[raw]) return aliases[raw];
  if(raw.includes('book')||raw.includes('quote')) return 'booking';
  if(raw.includes('course')||raw.includes('program')||raw.includes('lesson')) return 'courses';
  return raw||'home';
};

const pic=(id,alt='Roadwise driving training session')=>`<img loading="lazy" src="https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85" alt="${alt}">`;

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
  return `<div class="topline"><div class="container"><span>✦ Certified Behind-the-Wheel Training · Dual-Control Vehicles · Flexible Scheduling</span><span>Inquiries &amp; Lesson Booking: <b>+1 (800) 555-0146</b></span></div></div>
<header><div class="container nav">
  <a class="brand" href="index.html#home" onclick="navToHome(event)" aria-label="Roadwise Driving Academy Homepage">
    <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>DRIVING ACADEMY</small></span>
  </a>
  <nav class="navlinks" aria-label="Main Navigation">${links.map(([n,id])=>`<a class="${route()===id?'active':''}" href="#${id}">${n}</a>`).join('')}</nav>
  <div class="navtools">
    <button class="iconbtn theme-toggle" aria-label="Toggle dark mode" aria-pressed="false" onclick="toggleTheme()">◐</button>
    <button class="iconbtn" aria-label="Toggle direction" onclick="toggleDir()">⇄</button>
    <div class="account-wrap">
      <button class="iconbtn account-toggle" aria-label="Open student portal menu" aria-expanded="false" onclick="toggleAccount(this)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4"></circle><path d="M5.5 20c.4-3.5 2.8-5.5 6.5-5.5s6.1 2 6.5 5.5"></path></svg>
      </button>
      <nav class="account-menu" aria-label="Student Portal Menu">
        <div class="account-menu-brand"><img src="${A}favicon.svg" alt=""><span>roadwise<small>DRIVING ACADEMY</small></span></div>
        <a href="#login">Student Sign In</a>
        <a href="#register">New Student Registration</a>
        <a href="#student">Hours &amp; Progress Log</a>
        <a href="#admin">Instructor Dashboard</a>
        <a class="account-booking" href="#booking">Book a Driving Lesson ↗</a>
      </nav>
    </div>
    <a class="btn lime hide-mobile" href="#booking">Book a Lesson ↗</a>
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
      <a class="mobile-tool-chip" href="#login" onclick="closeMobileMenu()" aria-label="Student Portal">
        <span class="tool-icon">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.4"></circle><path d="M5.5 20c.4-3.5 2.8-5.5 6.5-5.5s6.1 2 6.5 5.5"></path></svg>
        </span>
        <span class="tool-text">Portal</span>
      </a>
    </div>
    <div class="mobile-links-grid">
      ${links.map(x=>`<a class="${route()===x[1]?'active':''}" href="#${x[1]}" onclick="closeMobileMenu()">${x[0]}</a>`).join('')}
    </div>
    <a href="#booking" class="mobile-booking" onclick="closeMobileMenu()">Book a Driving Lesson ↗</a>
    <div class="mobile-portal-links">
      <a href="#login" onclick="closeMobileMenu()">Student Sign In</a>
      <a href="#register" onclick="closeMobileMenu()">Register Student</a>
      <a href="#admin" onclick="closeMobileMenu()">Instructor Portal</a>
    </div>
  </nav>
</div></header>`;
}

function footer(){
  return `<footer class="footer"><div class="container"><div class="footer-grid">
  <div>
    <a class="brand footer-brand" href="index.html#home" onclick="navToHome(event)" aria-label="Roadwise Driving Academy Homepage">
      <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>DRIVING ACADEMY</small></span>
    </a>
    <p>Professional behind-the-wheel training, patient certified driving instructors, and dual-control safety vehicles. Helping beginner drivers, license applicants, and adults build safe driving confidence for life.</p>
    <a class="btn lime" href="index.html#booking">Book a Driving Lesson ↗</a>
  </div>
  <div>
    <h4>Training Programs</h4>
    <div class="footer-links">
      <a href="index.html#courses">Beginner Driving Course</a>
      <a href="index.html#courses">Practical Behind-the-Wheel</a>
      <a href="index.html#courses">Road Test Preparation</a>
      <a href="index.html#courses">Complete License Training</a>
      <a href="index.html#courses">Adult Refresher Lessons</a>
    </div>
  </div>
  <div>
    <h4>Academy &amp; Safety</h4>
    <div class="footer-links">
      <a href="index.html#about">About Our Academy</a>
      <a href="index.html#instructors">Certified Instructors</a>
      <a href="index.html#services">Behind-the-Wheel Services</a>
      <a href="index.html#success">Student Success Stories</a>
      <a href="index.html#faq">Training FAQs</a>
      <a href="index.html#blog">Road Safety Journal</a>
    </div>
  </div>
  <div>
    <h4>Academy Office &amp; Hours</h4>
    <p>Mon–Fri, 8:00 AM–6:00 PM EST<br>
    Weekend Lessons by Appointment<br>
    Inquiries: +1 (800) 555-0146<br>
    lessons@roadwisedriving.example<br>
    Training Hub: 128 Meadowline Ave<br>
    Serving Central District &amp; Metro Area</p>
  </div>
</div>
<div class="copyright">
  <span>© 2026 Roadwise Driving School &amp; Behind-the-Wheel Training Academy. All rights reserved.</span>
  <span>State-Certified Driving School · Dual-Control Inspected Vehicles · Fully Insured &amp; Bonded</span>
</div>
</div></footer>`;
}

const hero=(title,sub)=>`<section class="pagehero"><div class="container"><div class="crumb"><a href="index.html#home" onclick="navToHome(event)">Home</a> / ${title}</div><h1>${title}</h1><p>${sub}</p></div></section>`;

const cta=()=>`<section class="section"><div class="container"><div class="cta">
  <div>
    <h2>Ready to Get Behind the Wheel with Confidence?</h2>
    <p>Schedule your first driving lesson or book road test preparation with our patient certified instructors.</p>
  </div>
  <a class="btn" href="#booking">Book a Lesson ↗</a>
</div></div></section>`;

function courseCards(){
  return courses.map((c,i)=>`<article class="card course-card" data-category="${['Beginner','Practical','Test Prep','License','Refresher','Defensive'][i]||'All'}">
    <div class="photo">${pic(c[4],`${c[0]} - Behind-the-wheel driving instruction`)}</div>
    <div class="body">
      <span class="tag">${c[1]}</span>
      <h3>${c[0]}</h3>
      <p>${c[5]}</p>
      <div class="meta">
        <span>◷ ${c[2]}</span>
        <span>✓ Dual-Control Safety Vehicle</span>
      </div>
      <div class="card-foot">
        <span class="price">${c[3]}</span>
        <a class="btn outline" href="#booking?course=${encodeURIComponent(c[0])}">Book This Course →</a>
      </div>
    </div>
  </article>`).join('');
}

function instructorCards(){
  return people.map(x=>`<article class="card instructor">
    <img loading="lazy" src="https://images.unsplash.com/${x[5]}?auto=format&fit=crop&w=700&q=85" alt="Instructor ${x[0]}">
    <div class="body">
      <span class="tag">★ ${x[2]} rating</span>
      <h3>${x[0]}</h3>
      <p><b>${x[1]}</b> · ${x[4]}</p>
      <div class="card-foot">
        <small>${x[3]} completed</small>
        <a href="#instructor-details">Instructor profile →</a>
      </div>
    </div>
  </article>`).join('');
}

function faq(){
  return `<div class="faq">
    <details>
      <summary>What do I need before taking behind-the-wheel driving lessons?</summary>
      <p>You must hold a valid learner's permit or provisional license prior to taking behind-the-wheel lessons. Please bring your physical permit with you to every driving session.</p>
    </details>
    <details>
      <summary>Are your training vehicles equipped with dual-control safety pedals?</summary>
      <p>Yes. Every training vehicle in our fleet is fully inspected and equipped with dual-control instructor brake pedals and secondary rearview mirrors, allowing our instructors to intervene safely whenever needed.</p>
    </details>
    <details>
      <summary>Do you offer home, school, or work pickup for lessons?</summary>
      <p>Yes. We provide convenient door-to-door pickup and drop-off from your home, school, or workplace within our designated service area for all private driving lessons.</p>
    </details>
    <details>
      <summary>Can I use an academy vehicle for my official DMV/road test?</summary>
      <p>Yes! We offer a dedicated Road Test Package that includes use of our certified dual-control vehicle for the official exam, full insurance coverage, and a 45-minute warm-up practice session before your test.</p>
    </details>
    <details>
      <summary>How many driving lessons will I need to be ready for my test?</summary>
      <p>Lesson requirements depend on prior driving experience and individual progress. During your first session, your instructor assesses your skills and recommends a tailored lesson plan to build true competence and exam readiness.</p>
    </details>
  </div>`;
}

function heroSearch(){
  return `<form class="hero-search" onsubmit="findLesson(event)">
    <label>
      <span>What training program are you seeking?</span>
      <select aria-label="Select training program">
        <option>Beginner Behind-the-Wheel Course</option>
        <option>Practical Behind-the-Wheel Training</option>
        <option>Road Test Preparation &amp; Mock Exam</option>
        <option>Complete Driver License Training</option>
        <option>Adult &amp; Senior Refresher Driving</option>
        <option>Defensive Driving &amp; Safety</option>
      </select>
    </label>
    <label>
      <span>Preferred Start Date</span>
      <input type="date" aria-label="Preferred start date">
    </label>
    <label>
      <span>Lesson Format</span>
      <select aria-label="Lesson format">
        <option>Private 1-on-1 (Dual-Control)</option>
        <option>Road Test Prep &amp; Mock Exam</option>
        <option>Highway &amp; Maneuver Focus</option>
        <option>Parallel Parking &amp; Reversing</option>
      </select>
    </label>
    <button class="btn lime" type="submit">Book a lesson <b>↗</b></button>
  </form>`;
}

function findLesson(e){
  e.preventDefault();
  location.hash='booking';
}
const findQuote=findLesson;

function contactDock(){
  return `<div class="contact-dock">
    <button class="contact-fab" aria-label="Open contact and account options" aria-expanded="false" onclick="toggleContact(this)">
      <span aria-hidden="true">✉</span><b>Contact</b>
    </button>
    <nav class="contact-pop" aria-label="Contact and account quick menu">
      <a href="#login?role=client"><span>♙</span><span><strong>Student Portal</strong><small>Track hours &amp; progress</small></span></a>
      <a href="#login?role=admin"><span>⚙</span><span><strong>Instructor Portal</strong><small>Lesson schedule &amp; fleet</small></span></a>
      <a href="#booking"><span>＋</span><span><strong>Book a Lesson</strong><small>Behind-the-wheel sessions</small></span></a>
      <a href="#contact"><span>☎</span><span><strong>Call Academy</strong><small>+1 (800) 555-0146</small></span></a>
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
        <span class="eyebrow">Training Academy Hub</span>
        <h2>Visit Roadwise in Central District.</h2>
        <p>Our main classroom facility, driving simulator lab, and student admissions office.</p>
      </div>
    </div>
    <div class="location-panel">
      <div class="map-art" role="img" aria-label="Illustrated map preview for Roadwise academy in Central district">
        <span class="map-road road-a"></span>
        <span class="map-road road-b"></span>
        <span class="map-road road-c"></span>
        <span class="map-park">CENTRAL<br>PARK</span>
        <span class="map-pin">⌖</span>
        <span class="map-label">ROADWISE</span>
      </div>
      <div class="location-details">
        <span class="tag">Main Academy · Classroom &amp; Training Hub</span>
        <h3>Roadwise Driving School &amp; Training Academy</h3>
        <p>128 Meadowline Avenue<br>Central District Civic Center</p>
        <div class="meta"><span>◷ Mon–Fri, 8:00 AM–6:00 PM EST · Weekend Lessons by Appt</span></div>
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
        <span class="eyebrow"><i></i> State-Certified Driving School · Dual-Control Vehicles</span>
        <h1>${alt?'Drive with Confidence.':'Learn to Drive Safely.'}<br><span>${alt?'Your Road to Freedom.':'Patient 1-on-1 Lessons.'}</span></h1>
        <p>${alt?'From first-time beginners to learners preparing for their road test, our patient certified instructors provide supportive behind-the-wheel coaching in modern dual-control safety vehicles.':'Comprehensive driving instruction designed for beginners, test candidates, license seekers, and adult drivers needing refresher practice. Dual-control safety vehicles and supportive certified road coaches.'}</p>
        <div class="actions">
          <a class="btn lime" href="#booking">Book a Lesson ↗</a>
          <a class="btn outline" href="#courses">Explore Courses</a>
        </div>
        <div class="proof">
          <div class="avatars"><span>RW</span><span>MV</span><span>ER</span></div>
          <span><strong>Patient 1-on-1 Behind-the-Wheel Coaching.</strong><br>Serving beginners, test candidates &amp; refresher drivers.</span>
        </div>
      </div>
      <div class="hero-visual">
        ${pic(alt?P.home2:P.home, alt?'Dual-control training vehicle on the road':'Student learning behind the wheel with patient driving instructor')}
        <div class="floating"><strong>1-on-1 Coaching</strong>Dual-control safety vehicles</div>
        <div class="floating right"><strong>Patient Instruction</strong>High first-time pass rate</div>
      </div>
    </div>
  </section>

  <!-- Metric Strip -->
  <div class="strip"><div class="container">
    <div><strong>1-on-1</strong><br><span>private behind-the-wheel coaching</span></div>
    <div><strong>Dual-Control</strong><br><span>safety-inspected training cars</span></div>
    <div><strong>Flexible</strong><br><span>weekend &amp; evening availability</span></div>
    <div><strong>Door-to-Door</strong><br><span>local pickup &amp; drop-off options</span></div>
  </div></div>

  <!-- Third Section: Course Programs (Tested & Guaranteed High Contrast) -->
  <section class="section category-section"><div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Driving Programs</span>
        <h2>Structured Courses for Every Driving Stage.</h2>
        <p>Whether taking the wheel for the first time or polishing skills for your road test, our programs are built around your goals.</p>
      </div>
      <a class="btn outline" href="#courses">All Programs →</a>
    </div>
    <div class="grid">${courseCards()}</div>
  </div></section>

  <!-- Safety & Teaching Approach -->
  <section class="section"><div class="container split">
    <div>
      <span class="eyebrow">Our Teaching Approach &amp; Safety</span>
      <h2>Calm, Methodical Instruction in Dual-Control Vehicles.</h2>
      <p class="lead">We believe that learning to drive should be encouraging, not stressful. Our certified instructors break complex maneuvers into manageable, confidence-building steps while maintaining dual-control safety at all times.</p>
      <ul class="list">
        <li><span class="check">✓</span>Dual-control brake and mirror systems for total learner safety.</li>
        <li><span class="check">✓</span>Patient pacing tailored to nervous beginners and first-time drivers.</li>
        <li><span class="check">✓</span>Step-by-step mastery of parking, highway merging, and hazard perception.</li>
      </ul>
      <a class="btn" href="#about">Learn About Our Philosophy →</a>
    </div>
    <div class="photo-panel">${pic(P.student,'Student driver practicing behind the wheel in dual-control vehicle')}</div>
  </div></section>

  <!-- 3-Step Process -->
  <section class="section"><div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Simple Enrollment Process</span>
        <h2>Your Path from Learner Permit to Driver’s License.</h2>
      </div>
    </div>
    <div class="grid process">
      ${[
        ['1. Select Your Program','Choose beginner lessons, focused practical training, road test preparation, or an adult refresher.'],
        ['2. Schedule Your Sessions','Pick convenient lesson times with door-to-door pickup from home, school, or work within our service area.'],
        ['3. Pass with Confidence','Build safe habits, master critical road maneuvers, and take your driving test thoroughly prepared.']
      ].map(x=>`<article class="card step"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}
    </div>
  </div></section>

  <!-- Specialist Instructors -->
  <section class="section"><div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Certified Road Coaches</span>
        <h2>Meet Our Patient, Experienced Instructors.</h2>
      </div>
      <a class="btn outline" href="#instructors">All Instructors →</a>
    </div>
    <div class="grid">${instructorCards()}</div>
  </div></section>

  <!-- Verified Student Story -->
  <section class="section"><div class="container">
    <div class="testimonial">
      <div>
        <span class="eyebrow">Student Success Story · Verified Student</span>
        <p>“I was extremely nervous about driving on busy city streets. My instructor was patient, calm, and walked me through every intersection step-by-step. I passed my road test on the first attempt with complete confidence!”</p>
        <small>Jordan K. · First-Time License Holder</small>
      </div>
      <div class="stat"><strong>First Attempt</strong><span>Road Test Pass</span></div>
    </div>
  </div></section>

  <!-- Defensive Driving & Safety Habits -->
  <section class="section"><div class="container split">
    <div class="photo-panel">${pic(P.safety,'Road safety, hazard perception, and vehicle control on highway')}</div>
    <div>
      <span class="eyebrow">Road Safety &amp; Responsibility</span>
      <h2>Developing Safe Habits That Last for Life.</h2>
      <p class="lead">Passing the test is only the beginning. We emphasize defensive driving strategies, safe following distances, mirror discipline, and hazard awareness so every student drives responsibly long into the future.</p>
      <a class="btn outline" href="#services">Explore Driving Services →</a>
    </div>
  </div></section>

  ${cta()}
</main>`;
}

function publicPage(r){
  if(r==='home'||r==='home2') return home(r==='home2');
  
  if(r==='courses') return `<main id="main">
    ${hero('Driving Lessons & Training Programs','Structured behind-the-wheel instruction, license training, and road test preparation led by certified, patient driving coaches.')}
    <section class="section"><div class="container">
      <div class="filters">
        ${['All Programs','Beginner','Practical','Test Prep','License','Refresher'].map((x,i)=>`<button class="filter ${i===0?'active':''}" onclick="filterCourses('${i===0?'all':x}',this)">${x}</button>`).join('')}
      </div>
      <div class="grid">${courseCards()}</div>
    </div></section>
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">Personalized Training Plans</span>
        <h2>Need Guidance Choosing the Right Course?</h2>
        <p class="lead">Whether you are getting behind the wheel for the first time, preparing for an upcoming road exam, or brushing up on highway navigation, our advisors can recommend the ideal schedule.</p>
        <a class="btn" href="#booking">Book an Assessment Lesson ↗</a>
      </div>
      <div class="card">
        <h3>Every Roadwise Driving Program Includes</h3>
        <ul class="list">
          <li><span class="check">✓</span> 1-on-1 behind-the-wheel training with a certified instructor</li>
          <li><span class="check">✓</span> Modern safety-inspected vehicles equipped with dual-control brakes</li>
          <li><span class="check">✓</span> Free local pickup and drop-off from home, school, or work</li>
          <li><span class="check">✓</span> Personalized progress evaluations logged after every driving lesson</li>
        </ul>
      </div>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='instructors') return `<main id="main">
    ${hero('Our Certified Driving Instructors','Patient, professional, and state-certified road coaches dedicated to teaching safe and responsible driving habits.')}
    <section class="section"><div class="container">
      <div class="filters">
        <input class="field" id="peopleSearch" placeholder="Search instructors by name, specialty, or focus area…" oninput="searchPeople(this.value)">
      </div>
      <div class="grid">${instructorCards()}</div>
    </div></section>
    <section class="section"><div class="container testimonial">
      <div>
        <span class="eyebrow">Our Teaching Philosophy</span>
        <p>“Safe driving is not just about passing a test — it is about developing awareness, composure, and sound judgment behind the wheel for life.”</p>
        <small>Roadwise Academy Instructor Philosophy</small>
      </div>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='blog') return `<main id="main">
    ${hero('The Road Safety & Driving Journal','Practical advice on road test preparation, defensive driving habits, overcoming driving anxiety, and vehicle safety.')}
    <section class="section"><div class="container">
      <div class="grid">${posts.map((p,i)=>`<article class="card">
        <img class="blog-img" src="https://images.unsplash.com/${p[2]}?auto=format&fit=crop&w=800&q=80" alt="Article: ${p[0]}">
        <div class="meta"><span>${p[1]}</span><span>5 min read</span></div>
        <h3>${p[0]}</h3>
        <p>Expert guidance and proven road safety recommendations from certified behind-the-wheel driving instructors.</p>
        <div class="card-foot">
          <small>Roadwise Safety Team · Oct ${18-i}, 2026</small>
          <a href="#article">Read guide →</a>
        </div>
      </article>`).join('')}</div>
    </div></section>
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">Driver Education Updates</span>
        <h2>Stay Current with Road Rules &amp; Safety Tips.</h2>
        <p class="lead">Receive our seasonal newsletter covering upcoming DMV test changes, winter driving techniques, and defensive driving reminders.</p>
      </div>
      <form class="form card" onsubmit="subscribe(event)">
        <div class="field"><label>Email Address</label><input type="email" required placeholder="student@example.com"></div>
        <button class="btn">Subscribe to Safety Tips →</button>
        <small id="subscribeMsg">Demo form: no external email will be sent.</small>
      </form>
    </div></section>
  </main>`;

  if(r==='about') return `<main id="main">
    ${hero('Dedicated to Road Safety & Driver Education','Roadwise Driving Academy provides patient behind-the-wheel training, defensive driving techniques, and supportive instruction for learners of all ages.')}
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">Our Mission &amp; Philosophy</span>
        <h2>Building Safe, Confident, and Capable Drivers.</h2>
        <p class="lead">Founded with a commitment to patient driver education, Roadwise Driving Academy has helped thousands of students gain independence behind the wheel. We believe that learning to drive should be an encouraging, stress-free experience focused on safety, road awareness, and practical skills.</p>
        <p>Each student receives individualized attention. Our instructors assess each learner’s strengths and areas for improvement, pacing lessons to foster genuine confidence before taking the official driving exam.</p>
      </div>
      <!-- Distinct Hero Image for About Page -->
      <div class="photo-panel">${pic(P.about,'Student driver and certified instructor on a training road session')}</div>
    </div></section>
    <section class="section"><div class="container grid">
      ${[
        ['Our Mission','Equip every learner with the skills, judgment, and confidence needed for lifelong safe driving.'],
        ['Our Standards','State-certified instructors, dual-control vehicles, and rigorous safety-first training guidelines.'],
        ['Our Commitment','Patient 1-on-1 instruction, flexible scheduling, and thorough preparation for your road test.']
      ].map(x=>`<article class="card"><span class="symbol">✳</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}
    </div></section>
    <section class="section"><div class="container">
      <div class="section-head">
        <div><span class="eyebrow">Instructor Leadership</span><h2>Meet Our Certified Road Coaches.</h2></div>
      </div>
      <div class="grid">${instructorCards()}</div>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='services') return `<main id="main">
    ${hero('Behind-the-Wheel Training & Driving Services','Comprehensive driver training solutions: from beginner foundational lessons to highway driving, parking mastery, and road test vehicle service.')}
    <section class="section"><div class="container grid">
      ${[
        ['Behind-the-Wheel Driving Lessons','1-on-1 personalized instruction in dual-control vehicles tailored to your individual learning pace.'],
        ['Road Test Preparation & Mock Exams','Simulated exam routes, vehicle control evaluation, critical scoring criteria, and confidence building.'],
        ['Highway & Freeway Navigation','High-speed lane merging, following distances, exit ramp navigation, and busy expressway traffic confidence.'],
        ['Parallel Parking & Maneuvering','Master parallel parking, three-point turns, reverse angle parking, and tight space maneuvering.'],
        ['Defensive Driving Certification','Hazard perception, adverse weather handling, skid prevention, and proactive crash-avoidance techniques.'],
        ['Road Test Vehicle Rental & Warm-Up','Use of our certified dual-control vehicle for your official road exam with a 45-minute pre-test warm-up.']
      ].map((x,i)=>`<article class="card">
        <span class="symbol">${['◉','↗','✓','↻','⇢','⌁'][i]}</span>
        <h3>${x[0]}</h3>
        <p>${x[1]}</p>
        <div class="card-foot"><a href="#courses">Explore programs →</a></div>
      </article>`).join('')}
    </div></section>
    <section class="section"><div class="container">
      <h2>Safety Standards in Every Lesson</h2>
      <p class="lead">Every behind-the-wheel session includes dual-control safety pedals, comprehensive vehicle inspections, and certified instructor coaching.</p>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='contact') return `<main id="main">
    ${hero('Contact Roadwise Driving Academy','Get in touch with our admissions team to discuss course packages, check instructor availability, or book a lesson.')}
    <section class="section"><div class="container split">
      <div>
        <span class="eyebrow">Speak With Our Admissions Team</span>
        <h2>We are ready to help you get behind the wheel.</h2>
        <div class="grid">
          ${[
            ['Academy Phone','+1 (800) 555-0146'],
            ['Admissions Email','lessons@roadwisedriving.example'],
            ['Office Hours','Mon–Fri, 8am–6pm EST · Weekends by Appt']
          ].map(x=>`<article class="card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}
        </div>
        <h3>Academy Training Hub &amp; Classroom</h3>
        <p class="lead">128 Meadowline Avenue · Central District Civic Center<br>Door-to-door lesson pickup available throughout the metro area.</p>
      </div>
      <form class="card form" onsubmit="contactForm(event)">
        <h3>Inquire About Driving Lessons</h3>
        <div class="field"><label for="name">Student Name *</label><input id="name" required placeholder="Full Name"></div>
        <div class="field"><label for="email">Email Address *</label><input id="email" type="email" required placeholder="student@example.com"></div>
        <div class="field"><label for="phone">Phone Number *</label><input id="phone" type="tel" required placeholder="(555) 000-0000"></div>
        <div class="field"><label for="interest">Training Interest</label><select id="interest">
          <option>Beginner Driving Course</option>
          <option>Practical Behind-the-Wheel Lessons</option>
          <option>Road Test Prep &amp; Mock Exam</option>
          <option>Adult Refresher Training</option>
          <option>Defensive Driving Program</option>
        </select></div>
        <div class="field"><label for="message">Driving Experience &amp; Goals *</label><textarea id="message" required placeholder="Tell us about your driving experience, target test date, and scheduling availability..."></textarea></div>
        <button class="btn">Send Inquiry →</button>
        <small id="contactMsg">Demo form: inquiry logged locally.</small>
      </form>
    </div></section>
    <section class="section"><div class="container"><h2>Frequently Asked Questions</h2>${faq()}</div></section>
  </main>`;

  if(r==='faq') return `<main id="main">
    ${hero('Frequently Asked Questions','Key answers regarding learner permits, lesson scheduling, dual-control training vehicles, and road test readiness.')}
    <section class="section"><div class="container">${faq()}</div></section>
    ${cta()}
  </main>`;

  if(r==='success') return `<main id="main">
    ${hero('Student Success Stories & Road Test Passes','Celebrating thousands of confident, licensed drivers trained by Roadwise Driving Academy.')}
    <section class="section"><div class="container stats-row">
      ${[
        ['1-on-1','Private Instruction'],
        ['Dual-Control','Safety Training Cars'],
        ['Flexible','7 Days / Week Availability'],
        ['Certified','State-Approved Instructors']
      ].map(x=>`<div class="stat"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}
    </div></section>
    <section class="section"><div class="container grid">
      ${[
        ['Jordan K. · First-Time License Holder','Passed Road Test on 1st Attempt','“My instructor was incredibly calm and methodical. Parallel parking became second nature by lesson three.”'],
        ['Samantha R. · Teen Driver Graduate','Complete 30-Hour Behind-the-Wheel Program','“The highway merging and defensive driving drills gave me the confidence I needed to drive independently.”'],
        ['David M. · Adult Refresher Student','City Driving & Refresher Course','“After years without driving, Roadwise helped me regain total confidence in busy downtown traffic.”']
      ].map(x=>`<article class="card">
        <span class="eyebrow">Verified Student Review</span>
        <h3>${x[0]}</h3>
        <p><b>${x[1]}</b><br>${x[2]}</p>
        <div class="card-foot"><small>Licensed Graduate</small><span>★★★★★</span></div>
      </article>`).join('')}
    </div></section>
    <section class="section"><div class="container split">
      <div>
        <h2>Track Your Driving Progress in the Student Portal.</h2>
        <p class="lead">Enrolled students log into their portal to view completed behind-the-wheel hours, instructor evaluation notes, and upcoming scheduled lessons.</p>
        <a class="btn" href="#login">Access Student Portal →</a>
      </div>
      <div class="card">
        <h3>Training Competency Milestones</h3>
        ${['Vehicle Control & Mirror Discipline','Intersection & Traffic Signal Safety','Highway Merging & Lane Control','Parallel Parking & Reversing'].map((x,i)=>`<div class="progress-item">
          <div><span>${x}</span><b>${[100,98,92,88][i]}%</b></div>
          <div class="progressline"><span style="width:${[100,98,92,88][i]}%"></span></div>
        </div>`).join('')}
      </div>
    </div></section>
    ${cta()}
  </main>`;

  if(r==='course-details') return detailPage('Beginner Behind-the-Wheel Driving Program','Structured 1-on-1 behind-the-wheel instruction designed for first-time learners. Learn safe vehicle handling, smooth braking, mirror discipline, and fundamental road rules in a dual-control safety vehicle.',['1-on-1 private instruction with patient state-certified coaches','Dual-control safety brake and secondary instructor mirrors','Free local door-to-door pickup and drop-off included','Progress evaluation notes logged after every 2-hour session'],'Program: Beginner Driver Foundations');
  if(r==='instructor-details') return detailPage('Meet Elena Rostova','Elena is a Senior Certified Driving Instructor with over 14 years of experience coaching first-time learners, nervous drivers, and road test candidates with calm, methodical guidance.',['14 years of professional behind-the-wheel teaching experience','State-certified driving instructor & safety evaluator','Specializes in nervous beginners and road test anxiety management','4,200+ completed behind-the-wheel driving lessons'],'Lead Instructor · Central District Hub');
  if(r==='booking') return bookingPage();
  if(r==='login'||r==='register'||r==='reset') return authPage(r);
  if(r==='article') return detailPage('Top Road Test Mistakes and How to Avoid Them on Exam Day','Learn the most common driving exam errors — from rolling stops to improper mirror checks — and how to demonstrate total road competence to your examiner.',['Always make complete stops behind the white limit line','Perform deliberate, visible shoulder checks before every lane change','Maintain steady vehicle speed and safe following distances','Master parallel parking between markers without touching the curb'],'5 min read · Roadwise Driving Journal');
  if(r==='404') return `<main id="main">
    ${hero('404 · Page Not Found','The driving lesson or page you are looking for has been moved or does not exist.')}
    <section class="section"><div class="container">
      <div class="card">
        <span class="symbol">↩</span>
        <h2>Return to Roadwise Driving Academy</h2>
        <p>Explore our current driving programs or get in touch with our admissions coordinators.</p>
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
        <span class="eyebrow">Program Highlights</span>
        <h2>Structured for Safe, Confident Driving.</h2>
        <p class="lead">Every lesson in our curriculum has been designed to build genuine behind-the-wheel competence, composure in traffic, and thorough test readiness.</p>
        <ul class="list">${items.map(x=>`<li><span class="check">✓</span>${x}</li>`).join('')}</ul>
        <a class="btn" href="#booking">Book This Program ↗</a>
      </div>
      <div class="card">
        <h3>${side}</h3>
        <p>Door-to-door pickup included for all scheduled behind-the-wheel sessions in modern dual-control training vehicles.</p>
        <div class="card-foot">
          <a href="#courses">Compare All Programs →</a>
          <a href="#contact">Speak with an Advisor →</a>
        </div>
      </div>
    </div></section>
    ${cta()}
  </main>`;
}

const snav=[
  ['Overview','student'],
  ['Book a Lesson','student-booking'],
  ['My Lessons','student-lessons'],
  ['Hours Log','student-hours'],
  ['Test Readiness','student-readiness'],
  ['Invoices & Billing','student-payments'],
  ['Messages','student-messages'],
  ['Certificates','student-certificates'],
  ['Student Profile','student-settings']
];

const anav=[
  ['Overview','admin'],
  ['Enrolled Students','admin-students'],
  ['Instructors','admin-instructors'],
  ['Courses & Programs','admin-courses'],
  ['Lesson Schedule','admin-lessons'],
  ['Training Fleet','admin-vehicles'],
  ['Invoices & Payments','admin-payments'],
  ['Test Evaluations','admin-readiness'],
  ['State Certifications','admin-certificates'],
  ['Student Messages','admin-messages'],
  ['System Alerts','admin-notifications'],
  ['Reports & Export','admin-reports'],
  ['Academy Settings','admin-settings']
];

const students=[
  ['Alex Chen','Beginner Behind-the-Wheel (30 hrs)','Elena Rostova','60%','In Progress'],
  ['Maya Lin','Road Test Preparation (6 hrs)','Marcus Vance','90%','Test Ready'],
  ['Liam Davis','Highway & Maneuvering (10 hrs)','Amina Patel','40%','Active'],
  ['Sophia Patel','Complete License Course (30 hrs)','Elena Rostova','95%','Exam Scheduled'],
  ['Noah Wilson','Adult Refresher Driving (4 hrs)','Marcus Vance','100%','Completed']
];

const lessons=[
  ['Today · 09:00','Alex Chen','Elena Rostova','Highway Merging (2 hrs)','Civic Dual-02','Confirmed'],
  ['Today · 13:30','Maya Lin','Marcus Vance','Parallel Parking & Mock Exam','Corolla Dual-01','Confirmed'],
  ['Tomorrow · 10:00','Liam Davis','Amina Patel','Intersection Navigation','Impreza Dual-03','Confirmed'],
  ['Oct 24 · 14:00','Sophia Patel','Elena Rostova','Pre-Test Vehicle Warm-Up','Civic Dual-02','Completed']
];

const table=(heads,rows)=>`<div class="table-wrap"><table>
  <thead><tr>${heads.map(x=>`<th>${x}</th>`).join('')}</tr></thead>
  <tbody>${rows.map(row=>`<tr>${row.map((c,i)=>{
    const value=String(c??'');
    const heading=String(heads[i]||'');
    if(/status/i.test(heading)) return `<td><span class="badge ${/due|pending|active/i.test(value)?'warn':/paid|issued|confirmed|complete|delivered|ready/i.test(value)?'good':''}">${value}</span></td>`;
    if(/action/i.test(heading)){
      const actionHtml=/<button|<a\s/i.test(value)?value:`<button type="button" class="table-action" onclick="toast('Lesson details opened')">${value}</button>`;
      return `<td><div class="table-actions">${actionHtml}</div></td>`;
    }
    return `<td>${value}</td>`;
  }).join('')}</tr>`).join('')}</tbody>
</table></div>`;

function dashStat(name,value,note='↑ on schedule'){
  return `<div class="dash-stat"><span>${name}</span><strong>${value}</strong><small class="positive">${note}</small></div>`;
}

function chart(title='Behind-the-Wheel Training Hours Completed'){
  return `<section class="panel"><h3>${title}</h3>
    <div class="bars">${[45,65,58,85,74,95,68,88,100,78,92,96].map(h=>`<i style="height:${h}%" title="${Math.round(h*0.4)} hrs"></i>`).join('')}</div>
    <div class="bar-labels">${['May','Jun','Jul','Aug','Sep','Oct'].map(x=>`<span>${x}</span>`).join('')}</div>
  </section>`;
}

function studentContent(r){
  if(r==='student'||r==='student-lessons'){
    return `<div class="dash-title">
      <div>
        <h1>${r==='student'?'Student Portal · Welcome back, Alex Chen':'My Driving Lessons & Schedule'}</h1>
        <p>${r==='student'?'Track your behind-the-wheel driving hours, lesson schedules, instructor feedback, and road test readiness.':'Review upcoming driving sessions and past behind-the-wheel training evaluations.'}</p>
      </div>
      <a class="btn lime" href="#student-booking">＋ Book a Lesson</a>
    </div>
    ${r==='student'?`
    <div class="dash-grid">
      ${dashStat('Completed Hours','18 / 30 hrs','Behind-the-wheel log')}
      ${dashStat('Scheduled Lessons','2 sessions','This week')}
      ${dashStat('Test Readiness','92%','Mock test passed')}
      ${dashStat('Account Balance','$0.00','All lessons current')}
    </div>
    <div class="two">
      <div>
        <section class="panel">
          <h3>Behind-the-Wheel Progress · 18 of 30 Required Hours</h3>
          <div class="progressline"><span style="width:60%"></span></div>
          <p class="lead" style="font-size:12px;margin-top:12px">60% Complete · State permit practice requirement on track</p>
        </section>
        <section class="panel">
          <h3>Driving Skill Competencies</h3>
          ${[['Vehicle Control & Mirror Checks',10,10],['Intersection & Traffic Signals',8,8],['Highway Merging & Lane Control',7,8],['Parallel Parking & Reversing',4,5]].map(x=>`<div class="progress-item">
            <div><span>${x[0]}</span><b>${Math.round((x[1]/x[2])*100)}%</b></div>
            <div class="progressline"><span style="width:${Math.round((x[1]/x[2])*100)}%"></span></div>
          </div>`).join('')}
        </section>
      </div>
      <div>
        <section class="panel">
          <h3>Upcoming Driving Lesson</h3>
          <div class="agenda-item">
            <div class="datebox"><b>28</b>OCT</div>
            <div><strong>Highway Merging &amp; Expressway · 2 hrs</strong><small>Dual-Control Vehicle #02 · Elena Rostova</small></div>
          </div>
          <a href="#student-lessons">View full lesson history →</a>
        </section>
        <section class="panel">
          <h3>Instructor Feedback</h3>
          <p class="lead" style="font-size:12px">“Alex demonstrated excellent mirror discipline and smooth braking today. Next session will focus on highway entrance ramps and parallel parking between markers.”</p>
          <small>Elena Rostova · Senior Certified Instructor</small>
        </section>
      </div>
    </div>
    ${chart('Monthly Behind-the-Wheel Hours Logged')}`:table(['Date','Lesson ID','Topic Focus','Duration','Instructor','Status'],[
      ['Oct 14','LES-8921','Intersection Navigation & Turns','2.0 hrs','Elena Rostova','Completed'],
      ['Sep 28','LES-8714','Parallel Parking & 3-Point Turns','2.0 hrs','Marcus Vance','Completed'],
      ['Aug 12','LES-8452','Vehicle Controls & Basic Steering','2.0 hrs','Elena Rostova','Completed']
    ])}`;
  }
  if(r==='student-booking') return `<div class="dash-title"><div><h1>Book a Driving Lesson</h1><p>Schedule your next 1-on-1 behind-the-wheel training session.</p></div></div><div class="two"><form class="panel form" onsubmit="confirmBooking(event)"><div class="field"><label>Training Program *</label><select required>${courses.map(c=>`<option>${c[0]}</option>`).join('')}</select></div><div class="field"><label>Preferred Instructor *</label><select required>${people.map(p=>`<option>${p[0]}</option>`).join('')}</select></div><div class="field"><label>Lesson Focus *</label><select required><option>General Behind-the-Wheel Practice</option><option>Highway Merging &amp; High Speed</option><option>Parallel Parking &amp; Maneuvers</option><option>Road Test Simulation &amp; Mock Exam</option></select></div><div class="grid"><div class="field"><label>Preferred Date *</label><input type="date" required></div><div class="field"><label>Time Slot *</label><select required><option>Morning (09:00 AM – 11:00 AM)</option><option>Midday (11:30 AM – 01:30 PM)</option><option>Afternoon (02:00 PM – 04:00 PM)</option><option>Evening (04:30 PM – 06:30 PM)</option></select></div></div><button class="btn lime">Confirm Lesson Booking →</button><p id="bookingMsg" class="notice">Demo portal: lesson request logged locally.</p></form><div><section class="panel"><h3>What Every Lesson Includes</h3><div class="notice">✓ Door-to-door pickup from home, school, or work<br>✓ Dual-control safety brake &amp; instructor mirrors<br>✓ Written evaluation notes logged in your student portal</div></section></div></div>`;
  if(r==='student-hours') return `<div class="dash-title"><div><h1>Driving Hours Log</h1><p>Official record of completed behind-the-wheel practice sessions.</p></div></div><div class="dash-grid">${dashStat('Total Hours Logged','18 hrs','60% completed')}${dashStat('Daytime Practice','14 hrs','State requirement: 20 hrs')}${dashStat('Nighttime Practice','4 hrs','State requirement: 10 hrs')}${dashStat('Remaining to Test','12 hrs','Estimated 6 sessions')}</div>`;
  if(r==='student-readiness') return `<div class="dash-title"><div><h1>Road Test Readiness</h1><p>Evaluation of your driving exam readiness based on instructor scoring criteria.</p></div></div><div class="dash-grid">${dashStat('Mock Exam Score','92%','Passing mark: 80%')}${dashStat('Critical Errors','0','Zero disqualifications')}${dashStat('Lead Evaluator','Elena Rostova','Senior Instructor')}</div>`;
  if(r==='student-payments') return `<div class="dash-title"><div><h1>Invoices &amp; Receipts</h1><p>Review completed lesson receipts and package statements.</p></div><button class="btn outline" onclick="toast('Sample receipt downloaded')">Download Receipt ↓</button></div><div class="dash-grid">${dashStat('Total Paid','$680.00','10-Lesson Package')}${dashStat('Lessons Remaining','4 sessions','Pre-paid')}${dashStat('Balance Due','$0.00','Account current')}</div>`;
  if(r==='student-messages') return simpleContent('Instructor Messages & Updates','Direct communication with your Roadwise driving instructors.',[['Elena Rostova','Great job on the reverse parking drills today! Don\'t forget to practice blind-spot mirror checks before Thursday.','Today · 10:14'],['Marcus Vance','Your mock road test is scheduled for next Friday at 10:00 AM. Please bring your physical permit.','Oct 12']]);
  if(r==='student-certificates') return `<div class="dash-title"><div><h1>Training Certificates</h1><p>Official behind-the-wheel driver education and defensive driving completion certificates.</p></div></div><div class="grid"><article class="card"><span class="symbol">✦</span><span class="tag">Active</span><h3>Behind-the-Wheel Course Progress</h3><p>State-approved driver education record · Certificate in progress</p></article><article class="card"><span class="symbol">✓</span><span class="tag">Eligible</span><h3>Defensive Driving Road Safety</h3><p>Eligible for auto insurance discount upon final completion</p></article></div>`;
  if(r==='student-settings') return `<div class="dash-title"><div><h1>Student Profile &amp; Settings</h1><p>Manage contact information, learner permit details, and pickup address.</p></div></div><div class="two"><form class="panel form" onsubmit="saveDemo(event)"><div class="field"><label>Student Name</label><input value="Alex Chen"></div><div class="field"><label>Permit Number</label><input value="DL-9428-TX"></div><div class="field"><label>Pickup Address</label><input value="742 Evergreen Terrace, Central District"></div><button class="btn">Save Profile</button></form></div>`;
  return simpleContent('Student Portal','Select an option from the sidebar menu.');
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
        <h1>${r==='admin'?'Instructor & Academy Dashboard':'Student Progress & Enrollment Reports'}</h1>
        <p>${r==='admin'?'Overview of daily behind-the-wheel lessons, student progress logs, and dual-control fleet status.':'Analyze lesson volume, student graduation rates, and road test pass statistics.'}</p>
      </div>
      <button class="btn lime" onclick="toast('Enrollment report exported')">Export Report ↓</button>
    </div>
    <div class="dash-grid">
      ${dashStat('Active Students','248','Currently enrolled')}
      ${dashStat('Lessons This Week','74','Across 12 dual-control cars')}
      ${dashStat('Certified Instructors','8 coaches','All on duty today')}
      ${dashStat('First-Time Pass Rate','94.2%','State test average: 78%')}
    </div>
    <div class="dash-grid">
      ${dashStat('Hours Completed (M)','420 hrs','Behind-the-wheel')}
      ${dashStat('Upcoming Road Tests','18 students','Scheduled this month')}
      ${dashStat('Training Fleet','12 vehicles','100% inspected')}
      ${dashStat('Safety Rating','5.0 ★','Zero reportable incidents')}
    </div>
    <div class="two">
      <div>
        ${chart('Weekly Behind-the-Wheel Hours Completed')}
        <section class="panel">
          <h3>Enrolled Student Roster</h3>
          ${table(['Student','Training Program','Instructor','Progress','Status'],rows.slice(0,4))}
        </section>
      </div>
      <div>
        <section class="panel">
          <h3>Today’s Driving Schedule</h3>
          <div class="agenda">
            ${lessons.slice(0,3).map(x=>`<div class="agenda-item">
              <div class="datebox"><b>${x[4].split('-')[1]||'01'}</b>CAR</div>
              <div><strong>${x[1]}</strong><small>${x[3]} · ${x[4]}</small></div>
            </div>`).join('')}
          </div>
          <a href="#admin-lessons">View full master schedule →</a>
        </section>
        <section class="panel">
          <h3>Academy Safety Alerts</h3>
          <p>✓ Dual-control brake inspection passed on Fleet #01–#04<br>✓ State annual training instructor certifications current<br>✓ 18 mock test readiness evaluations completed</p>
        </section>
      </div>
    </div>`;
  }
  if(r==='admin-students') return `<div class="dash-title"><div><h1>Enrolled Student Accounts</h1><p>Manage active learner drivers, course progress, and training milestones.</p></div></div><div class="panel">${table(['Student','Program','Assigned Coach','Progress','Status'],students)}</div>`;
  if(r==='admin-instructors') return `<div class="dash-title"><div><h1>Certified Driving Instructors</h1><p>State-certified road coaches, evaluation specialists, and defensive driving instructors.</p></div></div><div class="grid">${instructorCards()}</div>`;
  if(r==='admin-courses') return `<div class="dash-title"><div><h1>Training Programs &amp; Packages</h1><p>Manage driving courses, lesson durations, and behind-the-wheel curriculum.</p></div></div><div class="panel">${table(['Course Program','Intended Learner','Format & Specs','Rate Tier'],courses.map(x=>[x[0],x[1],x[2],x[3]])) }</div>`;
  if(r==='admin-lessons'||r==='admin-schedule') return `<div class="dash-title"><div><h1>Master Lesson Schedule</h1><p>Real-time behind-the-wheel scheduling and vehicle assignments.</p></div></div><div class="panel">${table(['Time','Student','Instructor','Session Focus','Vehicle','Status'],lessons)}</div>`;
  if(r==='admin-vehicles') return `<div class="dash-title"><div><h1>Training Fleet &amp; Safety Equipment</h1><p>Dual-control inspected vehicles, routine maintenance, and safety audits.</p></div></div><div class="panel">${table(['Vehicle Model','Safety Spec','Control Type','Assigned Coach','Status'],[
    ['Toyota Corolla Dual-01','Dual Brakes & Mirror Array','Automatic','Marcus Vance','Operational'],
    ['Honda Civic Dual-02','Dual Brakes & Mirror Array','Automatic','Elena Rostova','Operational'],
    ['Subaru Impreza AWD Dual-03','Dual Brakes & AWD System','Automatic','Amina Patel','Operational'],
    ['Hyundai Elantra Dual-04','Dual Brakes & Mirror Array','Automatic','Elena Rostova','Operational']
  ])}</div>`;
  if(r==='admin-payments') return `<div class="dash-title"><div><h1>Lesson Fees &amp; Accounts</h1><p>Package enrollments, hourly lesson fees, and road test package balances.</p></div></div><div class="dash-grid">${dashStat('Monthly Revenue','$38,400','Lesson packages')}${dashStat('Pending Payments','$1,200','Active balances')}</div>`;
  if(r==='admin-readiness') return `<div class="dash-title"><div><h1>Road Test Readiness Assessments</h1><p>Mock exam scoring, critical maneuver verification, and examiner sign-offs.</p></div></div><div class="dash-grid">${dashStat('First-Time Pass Rate','94.2%','State average: 78%')}</div>`;
  if(r==='admin-certificates') return `<div class="dash-title"><div><h1>State Compliance &amp; Certifications</h1><p>Department of Transportation approved school certification and instructor licensing.</p></div></div>`;
  if(r==='admin-messages') return simpleContent('Student Inquiries','Direct messages from students and parents.',[['Alex Chen','Can we focus on highway entrance ramps this Wednesday?','Today · 11:20'],['Maya Lin','Passed my vision test at the DMV this morning!','Yesterday']]);
  if(r==='admin-notifications') return simpleContent('Academy Notifications','Vehicle maintenance and licensing alerts.',[['Fleet Maintenance','Vehicle #02 brake fluid check completed.','Today'],['Certification','State annual driving school audit scheduled for next month.','Yesterday']]);
  if(r==='admin-settings') return `<div class="dash-title"><div><h1>Academy Profile &amp; Policies</h1><p>Manage operating hours, pickup service boundary, and school contact information.</p></div></div><div class="two"><form class="panel form" onsubmit="saveDemo(event)"><div class="field"><label>Academy Name</label><input value="Roadwise Driving School &amp; Behind-the-Wheel Academy"></div><div class="field"><label>Office Phone</label><input value="+1 (800) 555-0146"></div><button class="btn">Save Academy Settings</button></form></div>`;
  return simpleContent('Instructor Dashboard','Select a section from the management menu.');
}

function dashboard(r){
  const admin=r.startsWith('admin'),items=admin?anav:snav,base=admin?'admin':'student';
  return `<div class="dash">
    <div class="drawer-backdrop" onclick="closeSidebar()"></div>
    <div class="dash-layout">
      <aside class="sidebar" id="sidebar">
        <a class="brand" href="index.html#home" onclick="navToHome(event)">
          <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>${admin?'INSTRUCTOR PORTAL':'STUDENT PORTAL'}</small></span>
        </a>
        <div class="side-label">${admin?'Operations Management':'Student Portal'}</div>
        <nav class="side-nav">${items.map(([name,id])=>`<a class="${id===r?'active':''}" href="#${id}"><span>${iconFor(name)}</span>${name}</a>`).join('')}</nav>
        <div class="side-bottom side-nav">
          <a href="index.html#home" onclick="navToHome(event)">↗ Public Website</a>
          <a href="#login">⇥ Sign Out</a>
        </div>
      </aside>
      <div class="dash-main">
        <div class="dashbar">
          <button class="menu-btn mobile-only" onclick="openSidebar()" aria-label="Open sidebar">☰</button>
          <a class="brand" href="#${base}"><span>${admin?'Instructor Operations':'Student Workspace'}</span></a>
          <label class="dashboard-search">
            <span aria-hidden="true">⌕</span>
            <input class="search" type="search" aria-label="Search records" placeholder="Search lessons, students, records…" oninput="dashboardSearch(this.value)">
          </label>
          <button class="iconbtn theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">◐</button>
          <button class="iconbtn" onclick="toggleDir()" aria-label="Toggle direction">⇄</button>
          <button class="iconbtn" onclick="toast('All lesson routes operating on schedule')" aria-label="Notifications">♧</button>
          <span class="tag">${admin?'Academy Admin':'Alex Chen'}</span>
        </div>
        <main id="main" class="dash-content">${admin?adminContent(r):studentContent(r)}</main>
      </div>
    </div>
  </div>`;
}

function iconFor(n){
  return ({
    Overview:'⌂',
    'Book a Lesson':'＋',
    'My Lessons':'◷',
    'Hours Log':'◴',
    'Test Readiness':'◎',
    'Invoices & Billing':'＄',
    Messages:'✉',
    Certificates:'✦',
    'Student Profile':'⚙',
    'Enrolled Students':'♙',
    Instructors:'♧',
    'Courses & Programs':'▤',
    'Lesson Schedule':'▦',
    'Training Fleet':'▣',
    'Invoices & Payments':'＄',
    'Test Evaluations':'◎',
    'State Certifications':'✦',
    'Student Messages':'✉',
    'System Alerts':'♧',
    'Reports & Export':'▥',
    'Academy Settings':'⚙'
  })[n]||'•';
}

function bookingPage(){
  return `<main id="main" class="auth-compact-page booking-compact-page">
    <div class="auth-compact-heading">
      <a class="auth-compact-brand" href="index.html#home" onclick="navToHome(event)">
        <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>DRIVING ACADEMY</small></span>
      </a>
      <p>BEHIND-THE-WHEEL TRAINING &amp; LESSON BOOKING</p>
    </div>
    <section class="auth-compact-card booking-compact-card">
      <span class="booking-kicker">STATE-CERTIFIED DRIVING INSTRUCTION</span>
      <h1>Book Your Driving Lesson</h1>
      <p class="auth-compact-subtitle">Select your training program, preferred instructor, and target date. Our scheduling coordinators will confirm your session.</p>
      ${bookingForm()}
      <div class="auth-compact-footer booking-footer">Questions about requirements? <a href="#contact">Speak with an academy advisor</a></div>
    </section>
  </main>`;
}

function bookingForm(){
  return `<form class="auth-compact-form booking-compact-form" onsubmit="confirmBooking(event)">
    <div class="booking-fields">
      <div class="field">
        <label for="bookingCourse">Training Program *</label>
        <select id="bookingCourse" required>${courses.map(x=>`<option>${x[0]}</option>`).join('')}</select>
      </div>
      <div class="field">
        <label for="bookingInstructor">Preferred Instructor *</label>
        <select id="bookingInstructor" required>
          <option>First Available Certified Instructor</option>
          ${people.map(p=>`<option>${p[0]}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label for="bookingType">Lesson Focus *</label>
        <select id="bookingType" required>
          <option>Beginner Fundamentals (Controls &amp; Turns)</option>
          <option>Traffic &amp; Intersection Navigation</option>
          <option>Highway Merging &amp; High-Speed Driving</option>
          <option>Parallel Parking &amp; Maneuver Mastery</option>
          <option>Road Test Simulation &amp; Mock Exam</option>
        </select>
      </div>
      <div class="field">
        <label for="bookingDate">Preferred Lesson Date *</label>
        <input id="bookingDate" type="date" required>
      </div>
      <div class="field">
        <label for="bookingQuantity">Learner Experience Level *</label>
        <select id="bookingQuantity" required>
          <option>First-Time Beginner (No prior experience)</option>
          <option>Permit Holder (Some practice hours)</option>
          <option>Test Candidate (Exam upcoming)</option>
          <option>Licensed Driver (Refresher)</option>
        </select>
      </div>
      <div class="field">
        <label for="bookingPlacement">Door-to-Door Pickup Area</label>
        <select id="bookingPlacement">
          <option>Central District (Home/School Pickup)</option>
          <option>North Suburbs (Home/School Pickup)</option>
          <option>Eastside Metro (Home/School Pickup)</option>
          <option>South Valley (Home/School Pickup)</option>
          <option>Meet at Academy Classroom Hub</option>
        </select>
      </div>
    </div>
    <button class="auth-compact-submit booking-submit" type="submit">Confirm Lesson Booking <span>→</span></button>
    <p id="bookingMsg" class="auth-compact-message booking-message">Your lesson booking will be confirmed by email and SMS within 24 hours.</p>
  </form>`;
}

function authPage(r){
  let admin=new URLSearchParams(location.hash.split('?')[1]||'').get('role')==='admin';
  let reset=r==='reset',signup=r==='register';
  return `<main id="main" class="auth-compact-page ${r==='login'?'auth-login-fit':''}">
    <div class="auth-compact-heading">
      <a class="auth-compact-brand" href="index.html#home" onclick="navToHome(event)">
        <img src="${A}favicon.svg" alt="Roadwise Logo"><span>roadwise<small>DRIVING ACADEMY</small></span>
      </a>
      <p>STUDENT &amp; INSTRUCTOR PORTAL ACCESS</p>
    </div>
    <section class="auth-compact-card">
      <nav class="auth-compact-tabs" aria-label="Account Access">
        <a class="${!signup&&!reset?'selected':''}" href="#login">Sign In</a>
        <a class="${signup?'selected':''}" href="#register">New Student</a>
        <a class="${reset?'selected':''}" href="#reset">Reset Password</a>
      </nav>
      <h1>${reset?'Reset Student Access':signup?'Register Student Profile':'Student Portal Sign In'}</h1>
      <p class="auth-compact-subtitle">${reset?'Enter your registered email address to receive password reset instructions.':signup?'Create your student account to schedule behind-the-wheel lessons and track driving hours.':'Access your lesson schedule, behind-the-wheel hours log, and instructor feedback.'}</p>
      <form class="auth-compact-form" onsubmit="${reset?'resetDemoForm(event)':`loginForm(event,'${r}')`}">
        ${signup?'<div class="field"><label for="authName">Student Full Name *</label><input id="authName" name="name" autocomplete="name" required placeholder="Full Name"></div>':''}
        ${signup?'<div class="field"><label for="authCompany">Learner Permit # / State</label><input id="authCompany" name="permit" placeholder="e.g. DL-12345678"></div>':''}
        <div class="field"><label for="authEmail">${admin?'Instructor Email (Admin)':'Email Address *'}</label><input id="authEmail" name="email" type="email" autocomplete="email" required placeholder="student@example.com"></div>
        ${!reset?`<div class="field"><div class="auth-compact-label-row"><label for="authPassword">Password *</label>${!signup?'<a href="#reset">Forgot?</a>':''}</div><div class="password-wrap"><input id="authPassword" name="password" type="password" autocomplete="${signup?'new-password':'current-password'}" ${signup?'minlength="6"':''} required placeholder="Enter password"><button class="password-toggle" type="button" onclick="togglePassword('authPassword',this)" aria-label="Show password">Show</button></div></div>`:''}
        ${!signup&&!reset?'<label class="auth-compact-remember"><input type="checkbox" checked> Remember this device</label>':''}
        <button class="auth-compact-submit" type="submit">${reset?'Send Reset Instructions':signup?'Create Student Profile':'Sign In to Portal'} <span>→</span></button>
        <p class="auth-compact-message" id="authMsg">${reset?'Demo only: instructions logged locally.':'Demo portal: no real password is stored.'}</p>
      </form>
      <div class="auth-compact-footer">${reset?'Remembered password?':signup?'Already registered?':'New student driver?'} <a href="${reset?'#login':signup?'#login':'#register'}">${reset?'Sign in':signup?'Sign in':'Create account'}</a></div>
      ${!reset?'<div class="auth-compact-role"><a href="#login?role=client">Student Portal</a><a href="#login?role=admin">Instructor Portal</a></div>':''}
    </section>
  </main>`;
}

function render(){
  const r=route();
  let content;
  if(r.startsWith('student')||r.startsWith('admin')) content=dashboard(r);
  else content=publicPage(r);
  
  if(!content){
    content=`<main id="main">${hero('404 · Page Not Found','This page does not exist. Return to the Roadwise driving academy homepage.')}
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
    home:'Roadwise Driving School & Behind-the-Wheel Training Academy',
    home2:'Driving Programs & Training Fleet | Roadwise Driving Academy',
    about:'About Our Academy & Safety Philosophy | Roadwise',
    services:'Behind-the-Wheel Training Services | Roadwise Driving Academy',
    courses:'Driving Lessons & Training Programs | Roadwise Driving Academy',
    instructors:'Our Certified Driving Instructors | Roadwise Driving Academy',
    success:'Student Success Stories & Road Test Passes | Roadwise',
    blog:'Road Safety Journal & Driving Tips | Roadwise',
    contact:'Contact Roadwise Driving Academy | Book a Lesson',
    faq:'Driving School FAQs & Lesson Information | Roadwise',
    booking:'Book a Driving Lesson | Roadwise Driving Academy',
    student:'Student Portal | Roadwise Driving Academy',
    admin:'Instructor & Academy Operations Dashboard | Roadwise'
  };
  document.title=pageTitles[r]||`${r.replace(/-/g,' ').replace(/\b\w/g,x=>x.toUpperCase())} | Roadwise Driving Academy`;
  
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
    let icon=b.querySelector('.tool-icon');
    if(icon){
      icon.textContent=dark?'☀️':'◐';
      let txt=b.querySelector('.tool-text');
      if(txt) txt.textContent=dark?'Light':'Dark';
    } else {
      b.textContent=dark?'☀️':'◐';
    }
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
    box.textContent='Lesson request received! Our scheduling coordinator will confirm your session within 24 hours.';
  }
  toast('Driving lesson booking submitted');
}

function contactForm(e){
  e.preventDefault();
  const msg=document.getElementById('contactMsg');
  if(msg) msg.textContent='Thank you! Your message has been sent to our academy admissions team.';
  toast('Message submitted successfully');
}

function subscribe(e){
  e.preventDefault();
  const msg=document.getElementById('subscribeMsg');
  if(msg) msg.textContent='Thank you for subscribing to our Road Safety newsletter.';
  toast('Subscribed to Road Safety updates');
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
  if(m) m.textContent='Password reset instructions sent to your registered email address.';
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
  if(!e.target.closest('.mobile-menu') && !e.target.closest('.menu-btn')){
    closeMobileMenu();
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

window.addEventListener('resize',()=>{
  if(window.innerWidth > 780){
    closeMobileMenu();
  }
});

window.addEventListener('hashchange',render);
window.addEventListener('DOMContentLoaded',render);
render();
