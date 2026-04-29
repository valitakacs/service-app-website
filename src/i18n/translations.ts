// Single source of truth for every user-facing string in the marketing site.
// Add a key here, use it everywhere via `useT()`. Keep keys flat dot-namespaced.

export const TRANSLATIONS = {
  ro: {
    // ── Navigation ───────────────────────────────────────────────────────
    'nav.home': 'Acasă',
    'nav.features': 'Funcționalități',
    'nav.forShops': 'Pentru Service-uri',
    'nav.forCustomers': 'Pentru Clienți',
    'nav.howItWorks': 'Cum funcționează',
    'nav.getStarted': 'Programează demo',

    // ── Hero ─────────────────────────────────────────────────────────────
    'hero.title.primary': 'Soluția digitală completă',
    'hero.title.for': 'pentru un',
    'hero.title.accent': 'service auto modern.',
    'hero.subtitle':
      'O singură platformă pentru a-ți gestiona întregul service auto — de la programări și comenzi de lucru la comunicare în timp real cu clienții, campanii de fidelizare și analize de creștere. Totul conectat la o aplicație mobilă pe care clienții o accesează printr-un cod QR.',
    'hero.cta.demo': 'Programează demo',
    'hero.cta.howItWorks': 'Vezi cum funcționează',

    // ── Mobile mockup ────────────────────────────────────────────────────
    'mobile.greeting.morning': 'Bună dimineața',
    'mobile.greeting.afternoon': 'Bună ziua',
    'mobile.greeting.evening': 'Bună seara',
    'mobile.brand': 'CarRevio Premium',
    'mobile.myCar': 'Vehiculul tău',
    'mobile.fuelType.electric': 'Electric',
    'mobile.actions.book': 'Programare',
    'mobile.actions.garage': 'Garaj',
    'mobile.actions.estimates': 'Devize',
    'mobile.actions.chat': 'Chat',
    'mobile.tab.home': 'Acasă',
    'mobile.tab.garage': 'Garaj',
    'mobile.tab.service': 'Service',
    'mobile.tab.account': 'Cont',
    'mobile.activeOrder.title': 'Comandă activă',
    'mobile.activeOrder.viewAll': 'vezi tot',
    'mobile.booking.service': 'Schimb ulei + filtru',
    'mobile.booking.dateTomorrow': 'Mâine, ora 09:30',
    'mobile.booking.dateToday': 'Astăzi, ora 09:30',
    'mobile.booking.dateNow': 'În desfășurare',
    'mobile.booking.status.pending': 'În așteptare',
    'mobile.booking.status.confirmed': 'Confirmată',
    'mobile.booking.status.inProgress': 'În lucru',
    'mobile.notification.confirmed': 'Programarea ta a fost confirmată',
    'mobile.notification.inProgress': 'Mecanicul lucrează la mașina ta',
    'mobile.steps.received': 'Primit',
    'mobile.steps.inspection': 'Inspecție',
    'mobile.steps.inProgress': 'În lucru',
    'mobile.steps.completed': 'Finalizat',

    // ── Features ─────────────────────────────────────────────────────────
    'features.eyebrow': 'Modern. Transparent. Conectat.',
    'features.title.line1': 'Tot ce ai nevoie pentru a conduce',
    'features.title.line2': 'un service auto modern',
    'features.subtitle':
      'O platformă completă pentru proprietarii de service-uri și pentru clienții lor. Construită pentru eficiență, proiectată pentru transparență, făcută pentru creștere.',
    'features.smartScheduling.title': 'Programări Inteligente',
    'features.smartScheduling.desc':
      'Clienții fac programări online. Echipa ta confirmă, reprogramează sau le gestionează direct din dashboard.',
    'features.workOrders.title': 'Urmărire Comenzi de Lucru',
    'features.workOrders.desc':
      'Urmărește fiecare lucrare de la primire la finalizare cu actualizări de status în timp real, vizibile atât pentru personal, cât și pentru clienți.',
    'features.estimates.title': 'Devize Digitale',
    'features.estimates.desc':
      'Creează devize detaliate cu manopera și piesele de schimb. Clienții aprobă cu un singur tap.',
    'features.chat.title': 'Chat în Timp Real',
    'features.chat.desc':
      'Mesagerie integrată între service și clienți. Totul într-un singur thread, asociat fiecărei comenzi de lucru.',
    'features.staff.title': 'Gestionare Personal',
    'features.staff.desc':
      'Acces pe roluri pentru administratori, recepționeri și mecanici. Fiecare membru al echipei vede exact ce are nevoie.',
    'features.garage.title': 'Garaj Vehicule',
    'features.garage.desc':
      'Clienții își păstrează un garaj digital cu toate vehiculele. Istoric complet de service la îndemână.',
    'features.reviews.title': 'Recenzii și Rating-uri',
    'features.reviews.desc':
      'Colectează feedback după fiecare service. Construiește-ți reputația și identifică ce poți îmbunătăți.',
    'features.notifications.title': 'Notificări Push',
    'features.notifications.desc':
      'Alerte automate pentru confirmări, actualizări de status, aprobări de devize și mesaje noi.',
    'features.security.title': 'Securitate Multi-Tenant',
    'features.security.desc':
      'Fiecare service operează în izolare completă. Datele tale sunt ale tale — separate și criptate.',
    'features.analytics.title': 'Analize de Business',
    'features.analytics.desc':
      'Urmărește programări, venituri, retenția clienților și performanța personalului prin dashboard-uri în timp real.',
    'features.serviceCatalog.title': 'Catalog de Servicii',
    'features.serviceCatalog.desc':
      'Definește serviciile cu preț, durată și descriere. Clienții aleg ce au nevoie când fac programarea.',
    'features.multiLocation.title': 'Multi-Locație',
    'features.multiLocation.desc':
      'Gestionează mai multe filiale dintr-un singur cont. Fiecare locație cu programul, personalul și ofertele proprii.',

    // ── For Shops ────────────────────────────────────────────────────────
    'forShops.eyebrow': 'Pentru Proprietari de Service',
    'forShops.title.line1': 'Un singur dashboard.',
    'forShops.title.line2': 'Operațiunea ta de service,',
    'forShops.title.line3': 'sub control complet.',
    'forShops.subtitle':
      'Dashboard-ul web oferă echipei tale control total asupra operațiunilor zilnice — în timp real. Acces multi-rol, proiectat pentru viteză, conectivitate și claritate.',
    'forShops.appointments.title': 'Gestionare Programări',
    'forShops.appointments.desc':
      'Vizualizează, confirmă, reprogramează sau anulează programări. Vezi statisticile zilei dintr-o privire cu contoare în timp real.',
    'forShops.workOrders.title': 'Pipeline Comenzi de Lucru',
    'forShops.workOrders.desc':
      'Urmărește lucrările prin fiecare etapă: primit, inspecție, în lucru, așteaptă piese și finalizat.',
    'forShops.estimates.title': 'Constructor Devize',
    'forShops.estimates.desc':
      'Creează devize detaliate cu manoperă și piese. Trimite către clienți pentru aprobare instantă.',
    'forShops.team.title': 'Gestionare Echipă și Clienți',
    'forShops.team.desc':
      'Gestionează roluri (administrator, recepție, mecanic). Vezi profilurile clienților cu vehiculele și istoricul lor.',
    'forShops.chat.title': 'Chat Live cu Clientul',
    'forShops.chat.desc':
      'Mesagerie în timp real. Fiecare conversație legată de o comandă de lucru pentru context complet.',
    'forShops.config.title': 'Configurare Service',
    'forShops.config.desc':
      'Setează program, gestionează catalogul de servicii cu prețuri, configurează mai multe locații.',
    'forShops.marketing.title': 'Retenție și Marketing',
    'forShops.marketing.desc':
      'Creează campanii promoționale și trimite-le direct pe telefonul clienților. Automatizează remindere pentru ITP, intervale de service și nevoi sezoniere. Transformă clienții ocazionali în venit recurent.',
    'forShops.analytics.title': 'Analize de Business',
    'forShops.analytics.desc':
      'Urmărește programări, venituri, retenția clienților și productivitatea echipei. Identifică oportunități de creștere bazate pe date.',

    // ── For Customers ────────────────────────────────────────────────────
    'forCustomers.eyebrow': 'Pentru Clienți',
    'forCustomers.title.line1': 'Mașina ta, la un singur tap.',
    'forCustomers.title.line2':
      'Control complet. Transparență în timp real.',
    'forCustomers.subtitle':
      'Conectată la service-ul tău auto, aplicația mobilă îi ține pe clienți la curent la fiecare pas — programări, devize, actualizări de status, chat. Fiecare vehicul primește un Pașaport Auto digital: istoric complet, exportabil PDF, perfect pentru revânzare.',
    'forCustomers.booking.title': 'Programare Simplă',
    'forCustomers.booking.desc':
      'Fă o programare în câteva secunde. Alege vehiculul, serviciul și un interval orar.',
    'forCustomers.garage.title': 'Garaj Digital',
    'forCustomers.garage.desc':
      'Salvează toate vehiculele cu detalii complete. Istoricul de service pentru fiecare mașină la îndemână.',
    'forCustomers.estimates.title': 'Aprobare Devize',
    'forCustomers.estimates.desc':
      'Primește devize detaliate. Aprobi sau refuzi cu un singur tap — fără apeluri telefonice.',
    'forCustomers.chat.title': 'Mesagerie Directă',
    'forCustomers.chat.desc':
      'Vorbește direct cu echipa de service despre mașina ta. Toate conversațiile rămân salvate.',
    'forCustomers.updates.title': 'Actualizări Live',
    'forCustomers.updates.desc':
      'Primești notificare când mașina trece la etapa următoare, când un deviz e gata sau când lucrarea e finalizată.',
    'forCustomers.reviews.title': 'Rating și Recenzie',
    'forCustomers.reviews.desc':
      'Împărtășește experiența ta după fiecare service. Ajută service-ul să se îmbunătățească și pe alți clienți să aleagă.',
    'forCustomers.reminders.title': 'Remindere Inteligente',
    'forCustomers.reminders.desc':
      'Primești notificare când e timpul pentru ITP, schimb de ulei sau service sezonier. Mașina ta nu pierde pasul — și tu nu ai surprize neașteptate la cheltuieli.',
    'forCustomers.offers.title': 'Oferte Exclusive de la Service-ul Tău',
    'forCustomers.offers.desc':
      'Primești promoții exclusive de la service — promoții sezoniere, recompense de fidelitate și reduceri pe care nu le găsești în altă parte. Cel mai bun pentru mașina ta, la cel mai bun preț.',

    // ── Why CarRevio ─────────────────────────────────────────────────────
    'why.eyebrow': 'De ce Car Revio',
    'why.title.line1': 'Nu e doar software.',
    'why.title.line2': 'E modul în care crești.',
    'why.subtitle':
      'Câștigi timp, control, transparență, retenție și date clare pentru creștere. Patru moduri concrete prin care Car Revio îți crește afacerea.',
    'why.capacity.title': 'Mai Multă Capacitate',
    'why.capacity.desc': 'Aceeași echipă. Mai multe lucrări. Mai mult venit.',
    'why.retention.title': 'Retenția Clienților',
    'why.retention.desc':
      'Clienți care revin. Fără să alergi după ei.',
    'why.idleTime.title': 'Mai Puțin Timp Mort',
    'why.idleTime.desc':
      'Reduce timpii morți și operațiunile manuale. Multiplici orele productive.',
    'why.dataDriven.title': 'Creștere Bazată pe Date',
    'why.dataDriven.desc': 'Crești pe baza unor rapoarte numerice în timp real.',

    // ── How It Works ─────────────────────────────────────────────────────
    'how.eyebrow': 'Cum funcționează',
    'how.title.line1': 'Te ajutăm cu onboarding-ul.',
    'how.title.line2': 'Funcționezi 100% digital în câteva zile.',
    'how.subtitle':
      'Patru pași simpli ca să lași în urmă vechiul mod — WhatsApp, notițe pe hârtie, apeluri pierdute și foi Excel — și să rulezi service-ul 100% digital. Onboarding și suport personalizat, garantat.',
    'how.step1.title': 'Înregistrezi service-ul',
    'how.step1.desc':
      'Creezi contul, configurezi serviciile, programul și locațiile. Adaugi personalul și asignezi rolurile.',
    'how.step2.title': 'Clienții descarcă aplicația',
    'how.step2.desc':
      'Clienții instalează aplicația mobilă CarRevio, își creează cont și își adaugă vehiculele în garajul digital.',
    'how.step3.title': 'Gestionezi totul în timp real',
    'how.step3.desc':
      'Programările vin, echipa gestionează comenzile de lucru, trimite devize și comunică — tot dintr-un singur dashboard.',
    'how.step4.title': 'Îți crești afacerea',
    'how.step4.desc':
      'Colectează recenzii, construiește-ți reputația și scalează cu suport multi-locație. Clienții tăi revin.',

    // ── CTA ──────────────────────────────────────────────────────────────
    'cta.title': 'Gata să-ți rulezi service-ul 100% digital?',
    'cta.subtitle':
      'Alătură-te noii generații de service-uri auto. Vezi Car Revio în acțiune. Demo gratuit de 30 de minute cu echipa noastră, adaptat nevoilor service-ului tău.',
    'cta.demo': 'Programează demo gratuit',
    'cta.contact': 'Vorbește cu noi',
    'contact.title': 'Trimite-ne un mesaj',
    'contact.subtitle':
      'Ai o întrebare? Scrie-ne și îți răspundem în maxim 24 de ore.',
    'contact.name': 'Nume',
    'contact.email': 'Email',
    'contact.message': 'Mesaj',
    'contact.send': 'Trimite mesaj',
    'contact.sending': 'Se trimite...',
    'contact.success':
      'Mesaj trimis. Îți vom răspunde în cel mai scurt timp.',
    'contact.error':
      'Nu am putut deschide aplicația de email. Scrie-ne direct la contact@carrevio.com.',

    // ── Footer ───────────────────────────────────────────────────────────
    'footer.tagline':
      'Platforma all-in-one de management pentru service-uri auto. Construită pentru service-uri moderne, proiectată pentru clienții lor.',
    'footer.product': 'Produs',
    'footer.company': 'Companie',
    'footer.legal': 'Legal',
    'footer.linkFeatures': 'Funcționalități',
    'footer.linkForShops': 'Pentru Service-uri',
    'footer.linkForCustomers': 'Pentru Clienți',
    'footer.linkPricing': 'Prețuri',
    'footer.linkAbout': 'Despre',
    'footer.linkBlog': 'Blog',
    'footer.linkCareers': 'Cariere',
    'footer.linkContact': 'Contact',
    'footer.privacy': 'Politică de confidențialitate',
    'footer.terms': 'Termeni și condiții',
    'footer.rights': 'Toate drepturile rezervate.',

    // ── Dashboard demo (used in hero + ForShops) ─────────────────────────
    'dash.live': 'live',
    'dash.liveDemo': 'demo live',
    'dash.appointments.header': 'Programări',
    'dash.workOrders.header': 'Comenzi de lucru',
    'dash.estimates.header': 'Devize',
    'dash.clients.header': 'Clienți',
    'dash.chat.header': 'Chat live',
    'dash.settings.header': 'Setări',
    'dash.filter.all': 'Toate',
    'dash.filter.new': 'Noi',
    'dash.filter.confirmed': 'Confirmate',
    'dash.filter.inProgress': 'În lucru',
    'dash.filter.waiting': 'Așteaptă',
    'dash.stat.total': 'Total',
    'dash.stat.new': 'Noi',
    'dash.stat.confirmed': 'Confirmate',
    'dash.stat.today': 'Astăzi',
    'dash.stat.draft': 'Draft',
    'dash.stat.sent': 'Trimise',
    'dash.stat.approved': 'Aprobate',
    'dash.stage.received': 'Primit',
    'dash.stage.inspection': 'Inspecție',
    'dash.stage.inProgress': 'În lucru',
    'dash.stage.completed': 'Finalizat',
    'dash.tag.new': 'Nou',
    'dash.tag.confirmed': 'Confirmată',
    'dash.tag.inProgress': 'În lucru',
    'dash.tag.inspection': 'Inspecție',
    'dash.tag.waitingParts': 'Așteaptă piese',
    'dash.tag.sent': 'Trimis',
    'dash.tag.approved': 'Aprobat',
    'dash.tag.draft': 'Draft',
    'dash.svc.oilChange': 'Schimb ulei',
    'dash.svc.brakeInspection': 'Inspecție frâne',
    'dash.svc.fullService': 'Service complet',
    'dash.svc.brakePadsDiscs': 'Plăcuțe + discuri frână',
    'dash.svc.oilFilter': 'Ulei + filtru',
    'dash.svc.acService': 'Service AC',
    'dash.svc.brakeReplacement': 'Înlocuire frâne',
    'dash.svc.majorService': 'Service major',
    'dash.svc.acRecharge': 'Reîncărcare AC + filtru',
    'dash.estimates.new': 'Deviz nou',
    'dash.clients.activeCount': '342 activi',
    'dash.clients.customer': 'Client',
    'dash.clients.lastVisit': 'ultima vizită',
    'dash.clients.vehicle': 'vehicul',
    'dash.clients.vehicles': 'vehicule',
    'dash.clients.last.yesterday': 'ieri',
    'dash.clients.last.threeDays': 'acum 3 zile',
    'dash.clients.last.oneWeek': 'acum o săptămână',
    'dash.clients.last.twoWeeks': 'acum 2 săptămâni',
    'dash.clients.last.lastMonth': 'luna trecută',
    'dash.chat.connected': 'Conectat',
    'dash.chat.msgCustomer': 'Bună, când pot aduce mașina?',
    'dash.chat.msgShop': 'Bună! Mâine la 09:30 e disponibil, locul e rezervat.',
    'dash.chat.estimateLabel': 'Deviz',
    'dash.chat.estimateTap': 'Apasă pentru a aproba',
    'dash.chat.placeholder': 'Scrie un mesaj…',
    'dash.settings.savedAgo': 'Salvat · acum 2 min',
    'dash.settings.tab.profile': 'Profil',
    'dash.settings.tab.services': 'Servicii',
    'dash.settings.tab.locations': 'Locații',
    'dash.settings.shopName': 'Nume service',
    'dash.settings.shopNameValue': 'Service-ul tău',
    'dash.settings.phone': 'Telefon',
    'dash.settings.locations': 'Locații',
    'dash.settings.locationsValue': '2 active',
    'dash.settings.catalog': 'Servicii în catalog',
    'dash.settings.workingHours': 'Program de lucru',

    // ── Language toggle ──────────────────────────────────────────────────
    'language.toggle.aria': 'Schimbă limba',
  },
  en: {
    // ── Navigation ───────────────────────────────────────────────────────
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.forShops': 'For Shops',
    'nav.forCustomers': 'For Customers',
    'nav.howItWorks': 'How It Works',
    'nav.getStarted': 'Get a Demo',

    // ── Hero ─────────────────────────────────────────────────────────────
    'hero.title.primary': 'The complete digital solution',
    'hero.title.for': 'for a modern',
    'hero.title.accent': 'auto repair shop.',
    'hero.subtitle':
      'One platform to manage your entire auto repair shop — from appointments and work orders to real-time customer communication, retention campaigns, and growth analytics. All connected to a mobile app your customers can access via a simple QR code.',
    'hero.cta.demo': 'Get a Demo',
    'hero.cta.howItWorks': 'See How It Works',

    // ── Mobile mockup ────────────────────────────────────────────────────
    'mobile.greeting.morning': 'Good morning',
    'mobile.greeting.afternoon': 'Good afternoon',
    'mobile.greeting.evening': 'Good evening',
    'mobile.brand': 'CarRevio Premium',
    'mobile.myCar': 'My Car',
    'mobile.fuelType.electric': 'Electric',
    'mobile.actions.book': 'Book',
    'mobile.actions.garage': 'Garage',
    'mobile.actions.estimates': 'Estimates',
    'mobile.actions.chat': 'Chat',
    'mobile.tab.home': 'Home',
    'mobile.tab.garage': 'Garage',
    'mobile.tab.service': 'Service',
    'mobile.tab.account': 'Account',
    'mobile.activeOrder.title': 'Active order',
    'mobile.activeOrder.viewAll': 'view all',
    'mobile.booking.service': 'Oil change + filter',
    'mobile.booking.dateTomorrow': 'Tomorrow, 09:30',
    'mobile.booking.dateToday': 'Today, 09:30',
    'mobile.booking.dateNow': 'In progress',
    'mobile.booking.status.pending': 'Pending',
    'mobile.booking.status.confirmed': 'Confirmed',
    'mobile.booking.status.inProgress': 'In progress',
    'mobile.notification.confirmed': 'Your appointment has been confirmed',
    'mobile.notification.inProgress': 'The mechanic is working on your car',
    'mobile.steps.received': 'Received',
    'mobile.steps.inspection': 'Inspection',
    'mobile.steps.inProgress': 'In progress',
    'mobile.steps.completed': 'Completed',

    // ── Features ─────────────────────────────────────────────────────────
    'features.eyebrow': 'Modern. Transparent. Connected.',
    'features.title.line1': 'Everything you need to run',
    'features.title.line2': 'a modern auto repair shop',
    'features.subtitle':
      'A complete platform for shop owners and their customers. Built for efficiency, designed for transparency, made for growth.',
    'features.smartScheduling.title': 'Smart Scheduling',
    'features.smartScheduling.desc':
      'Customers book appointments online. Your team confirms, reschedules, or manages them from the dashboard.',
    'features.workOrders.title': 'Work Order Tracking',
    'features.workOrders.desc':
      'Track every job from intake to completion with real-time status updates visible to both staff and customers.',
    'features.estimates.title': 'Digital Estimates',
    'features.estimates.desc':
      'Create detailed cost estimates with line items for labor and parts. Customers approve with one tap.',
    'features.chat.title': 'Real-Time Chat',
    'features.chat.desc':
      'Built-in messaging between your shop and customers. Everything in one thread, tied to each work order.',
    'features.staff.title': 'Staff Management',
    'features.staff.desc':
      'Role-based access for admins, receptionists, and mechanics. Each team member sees exactly what they need.',
    'features.garage.title': 'Vehicle Garage',
    'features.garage.desc':
      'Customers maintain a digital garage with all their vehicles. Full service history at your fingertips.',
    'features.reviews.title': 'Reviews & Ratings',
    'features.reviews.desc':
      'Collect feedback after every service. Build your reputation and identify areas for improvement.',
    'features.notifications.title': 'Push Notifications',
    'features.notifications.desc':
      'Automatic alerts for confirmations, status updates, estimate approvals, and new messages.',
    'features.security.title': 'Multi-Tenant Security',
    'features.security.desc':
      'Each shop operates in complete isolation. Your data is yours — fully separated and encrypted.',
    'features.analytics.title': 'Business Analytics',
    'features.analytics.desc':
      'Track appointments, revenue, customer retention, and staff performance with real-time dashboards.',
    'features.serviceCatalog.title': 'Service Catalog',
    'features.serviceCatalog.desc':
      'Define your services with pricing, duration, and descriptions. Customers pick what they need when booking.',
    'features.multiLocation.title': 'Multi-Location',
    'features.multiLocation.desc':
      'Manage multiple branches from one account. Each location with its own hours, staff, and offerings.',

    // ── For Shops ────────────────────────────────────────────────────────
    'forShops.eyebrow': 'For Shop Owners',
    'forShops.title.line1': 'One dashboard.',
    'forShops.title.line2': 'Your service operation,',
    'forShops.title.line3': 'fully under control.',
    'forShops.subtitle':
      'The web dashboard gives your team complete control over daily operations — in real time. Multi-role access, designed for speed, connection, and clarity.',
    'forShops.appointments.title': 'Appointment Management',
    'forShops.appointments.desc':
      'View, confirm, reschedule or cancel appointments. See daily stats at a glance with real-time counters.',
    'forShops.workOrders.title': 'Work Order Pipeline',
    'forShops.workOrders.desc':
      'Track jobs through every stage: received, inspection, in-progress, waiting parts, and completed.',
    'forShops.estimates.title': 'Estimate Builder',
    'forShops.estimates.desc':
      'Create detailed estimates with labor and parts line items. Send to customers for instant approval.',
    'forShops.team.title': 'Team & Client Management',
    'forShops.team.desc':
      'Manage staff roles (admin, reception, mechanic). View client profiles with their vehicles and history.',
    'forShops.chat.title': 'Live Customer Chat',
    'forShops.chat.desc':
      'WebSocket-powered real-time messaging. Every conversation linked to a work order for full context.',
    'forShops.config.title': 'Shop Configuration',
    'forShops.config.desc':
      'Set business hours, manage service catalog with pricing, configure multiple locations.',
    'forShops.marketing.title': 'Customer Retention & Marketing',
    'forShops.marketing.desc':
      "Create promotional campaigns and send them straight to your customers' phones. Automate reminders for ITP, service intervals, and seasonal needs. Turn one-time customers into recurring revenue.",
    'forShops.analytics.title': 'Business Analytics',
    'forShops.analytics.desc':
      'Track appointments, revenue, customer retention, and team productivity with real-time dashboards. Identify growth opportunities backed by data.',

    // ── For Customers ────────────────────────────────────────────────────
    'forCustomers.eyebrow': 'For Customers',
    'forCustomers.title.line1': 'Your car, one tap away.',
    'forCustomers.title.line2': 'Full control. Real-time transparency.',
    'forCustomers.subtitle':
      'Connected to your auto-repair shop, the mobile app keeps customers in the loop at every step — bookings, estimates, status updates, chat with the shop. Every vehicle gets a digital Car Passport: full service history, exportable PDF, perfect for resale.',
    'forCustomers.booking.title': 'Easy Booking',
    'forCustomers.booking.desc':
      'Book service appointments in seconds. Pick your vehicle, choose a service, and select a time slot.',
    'forCustomers.garage.title': 'Digital Garage',
    'forCustomers.garage.desc':
      'Store all your vehicles with full details. Service history for every car at your fingertips.',
    'forCustomers.estimates.title': 'Approve Estimates',
    'forCustomers.estimates.desc':
      'Receive detailed cost breakdowns. Approve or decline with one tap — no phone calls needed.',
    'forCustomers.chat.title': 'Direct Messaging',
    'forCustomers.chat.desc':
      'Chat directly with the service team about your car. All conversations saved for reference.',
    'forCustomers.updates.title': 'Live Updates',
    'forCustomers.updates.desc':
      'Get notified when your car moves to the next stage, when an estimate is ready, or when the job is done.',
    'forCustomers.reviews.title': 'Rate & Review',
    'forCustomers.reviews.desc':
      'Share your experience after each service. Help the shop improve and help others choose.',
    'forCustomers.reminders.title': 'Smart Reminders',
    'forCustomers.reminders.desc':
      "Get notified when it's time for ITP, oil change, or seasonal service. Your car never misses a beat — and you never get a surprise expense.",
    'forCustomers.offers.title': 'Exclusive Offers from Your Shop',
    'forCustomers.offers.desc':
      "Get exclusive deals from your shop — seasonal promotions, loyalty rewards, and discounts you won't find anywhere else. The best for your car at the best price.",

    // ── Why CarRevio ─────────────────────────────────────────────────────
    'why.eyebrow': 'Why Car Revio',
    'why.title.line1': "It's not just software.",
    'why.title.line2': "It's how you grow.",
    'why.subtitle':
      'You gain time, control, transparency, retention, and clear data to grow. Four concrete ways Car Revio grows your business.',
    'why.capacity.title': 'More Capacity',
    'why.capacity.desc': 'Same team. More jobs. More revenue.',
    'why.retention.title': 'Customer Retention',
    'why.retention.desc': 'Customers who come back. Without you chasing them.',
    'why.idleTime.title': 'Less Dead Time',
    'why.idleTime.desc':
      'Cut idle time & manual operations. Multiply productive hours.',
    'why.dataDriven.title': 'Data-Driven Growth',
    'why.dataDriven.desc': 'Grow based on real-time number reports.',

    // ── How It Works ─────────────────────────────────────────────────────
    'how.eyebrow': 'How It Works',
    'how.title.line1': 'Onboarded by us.',
    'how.title.line2': 'Run fully digital in days.',
    'how.subtitle':
      'Four simple steps to leave the old way behind — WhatsApp, paper notes, lost calls, and Excel sheets — and run your shop fully digital. Personalized onboarding & support guaranteed.',
    'how.step1.title': 'Sign Up Your Shop',
    'how.step1.desc':
      'Create your account, configure your services, business hours, and locations. Add your staff and assign roles.',
    'how.step2.title': 'Customers Download the App',
    'how.step2.desc':
      'Your customers install the CarRevio mobile app, create an account, and add their vehicles to their digital garage.',
    'how.step3.title': 'Manage Everything in Real-Time',
    'how.step3.desc':
      'Appointments flow in, your team manages work orders, sends estimates, and communicates — all from one dashboard.',
    'how.step4.title': 'Grow Your Business',
    'how.step4.desc':
      'Collect reviews, build your reputation, and scale with multi-location support. Your customers keep coming back.',

    // ── CTA ──────────────────────────────────────────────────────────────
    'cta.title': 'Ready to run a fully digital shop?',
    'cta.subtitle':
      "Join the next generation of auto repair shops. See Car Revio in action. Free 30-minute demo with our team, tailored to your shop's needs.",
    'cta.demo': 'Get a Free Demo',
    'cta.contact': 'Talk to Us',
    'contact.title': 'Send us a message',
    'contact.subtitle':
      "Have a question? Drop us a line and we'll get back within 24 hours.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': "Message sent. We'll get back to you shortly.",
    'contact.error':
      'We could not open your email client. Reach us directly at contact@carrevio.com.',

    // ── Footer ───────────────────────────────────────────────────────────
    'footer.tagline':
      'The all-in-one auto service management platform. Built for modern shops, designed for their customers.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.linkFeatures': 'Features',
    'footer.linkForShops': 'For Shops',
    'footer.linkForCustomers': 'For Customers',
    'footer.linkPricing': 'Pricing',
    'footer.linkAbout': 'About',
    'footer.linkBlog': 'Blog',
    'footer.linkCareers': 'Careers',
    'footer.linkContact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',

    // ── Dashboard demo (used in hero + ForShops) ─────────────────────────
    'dash.live': 'live',
    'dash.liveDemo': 'live demo',
    'dash.appointments.header': 'Appointments',
    'dash.workOrders.header': 'Work orders',
    'dash.estimates.header': 'Estimates',
    'dash.clients.header': 'Clients',
    'dash.chat.header': 'Live chat',
    'dash.settings.header': 'Settings',
    'dash.filter.all': 'All',
    'dash.filter.new': 'New',
    'dash.filter.confirmed': 'Confirmed',
    'dash.filter.inProgress': 'In progress',
    'dash.filter.waiting': 'Waiting',
    'dash.stat.total': 'Total',
    'dash.stat.new': 'New',
    'dash.stat.confirmed': 'Confirmed',
    'dash.stat.today': 'Today',
    'dash.stat.draft': 'Draft',
    'dash.stat.sent': 'Sent',
    'dash.stat.approved': 'Approved',
    'dash.stage.received': 'Received',
    'dash.stage.inspection': 'Inspection',
    'dash.stage.inProgress': 'In progress',
    'dash.stage.completed': 'Completed',
    'dash.tag.new': 'New',
    'dash.tag.confirmed': 'Confirmed',
    'dash.tag.inProgress': 'In progress',
    'dash.tag.inspection': 'Inspection',
    'dash.tag.waitingParts': 'Waiting parts',
    'dash.tag.sent': 'Sent',
    'dash.tag.approved': 'Approved',
    'dash.tag.draft': 'Draft',
    'dash.svc.oilChange': 'Oil change',
    'dash.svc.brakeInspection': 'Brake inspection',
    'dash.svc.fullService': 'Full service',
    'dash.svc.brakePadsDiscs': 'Brake pads + discs',
    'dash.svc.oilFilter': 'Oil & filter',
    'dash.svc.acService': 'AC service',
    'dash.svc.brakeReplacement': 'Brake replacement',
    'dash.svc.majorService': 'Major service',
    'dash.svc.acRecharge': 'AC recharge + filter',
    'dash.estimates.new': 'New estimate',
    'dash.clients.activeCount': '342 active',
    'dash.clients.customer': 'Customer',
    'dash.clients.lastVisit': 'last visit',
    'dash.clients.vehicle': 'vehicle',
    'dash.clients.vehicles': 'vehicles',
    'dash.clients.last.yesterday': 'yesterday',
    'dash.clients.last.threeDays': '3 days ago',
    'dash.clients.last.oneWeek': '1 week ago',
    'dash.clients.last.twoWeeks': '2 weeks ago',
    'dash.clients.last.lastMonth': 'last month',
    'dash.chat.connected': 'Connected',
    'dash.chat.msgCustomer': 'Hi, when can I bring my car in?',
    'dash.chat.msgShop': 'Hello! Tomorrow 09:30 works, slot is reserved.',
    'dash.chat.estimateLabel': 'Estimate',
    'dash.chat.estimateTap': 'Tap to review and approve',
    'dash.chat.placeholder': 'Type a message…',
    'dash.settings.savedAgo': 'Saved · 2 min ago',
    'dash.settings.tab.profile': 'Profile',
    'dash.settings.tab.services': 'Services',
    'dash.settings.tab.locations': 'Locations',
    'dash.settings.shopName': 'Shop name',
    'dash.settings.shopNameValue': 'Your Auto Service',
    'dash.settings.phone': 'Phone',
    'dash.settings.locations': 'Locations',
    'dash.settings.locationsValue': '2 active',
    'dash.settings.catalog': 'Services in catalog',
    'dash.settings.workingHours': 'Working hours',

    // ── Language toggle ──────────────────────────────────────────────────
    'language.toggle.aria': 'Switch language',
  },
} as const

export type Locale = keyof typeof TRANSLATIONS
export type TranslationKey = keyof (typeof TRANSLATIONS)['ro']
export const LOCALES: Locale[] = ['ro', 'en']
