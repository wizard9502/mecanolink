/**
 * MecanoLink — core data + pure logic.
 * No DOM, no network, no side effects: safe to import in the browser and in Node tests.
 * All commercial data below is fictional demo data.
 */

export const CURRENCY = 'FCFA';

export const CITIES = [
  { id: 'dakar', name: 'Dakar', delivery: 2500, eta: '24 h' },
  { id: 'thies', name: 'Thiès', delivery: 3500, eta: '24-48 h' },
  { id: 'saint-louis', name: 'Saint-Louis', delivery: 5000, eta: '48 h' },
  { id: 'kaolack', name: 'Kaolack', delivery: 5000, eta: '48 h' },
  { id: 'abidjan', name: 'Abidjan', delivery: 9000, eta: '3-5 j' },
  { id: 'bamako', name: 'Bamako', delivery: 9500, eta: '3-5 j' },
];

export const PAYMENTS = [
  { id: 'orange', name: 'Orange Money', short: 'OM', color: '#ff7900' },
  { id: 'wave', name: 'Wave', short: 'W', color: '#00b8de' },
  { id: 'mtn', name: 'MTN MoMo', short: 'M', color: '#ffcc00' },
  { id: 'cash', name: 'À la livraison', short: '₣', color: '#4ade80' },
];

export const VEHICLES = [
  {
    id: 'hilux-2020', brand: 'Toyota', model: 'Hilux', year: 2020,
    engine: '2.4L D-4D 4x4', plate: 'DK-4821-AM', km: 84500,
    spec: 'Golfe / Afrique', role: 'Principal', fuel: 'Diesel', color: '#f59e0b',
  },
  {
    id: 'tucson-2019', brand: 'Hyundai', model: 'Tucson', year: 2019,
    engine: '1.6 GDi', plate: 'DK-7742-BC', km: 62000,
    spec: 'Famille', role: 'Famille', fuel: 'Essence', color: '#38bdf8',
  },
  {
    id: '308-2018', brand: 'Peugeot', model: '308', year: 2018,
    engine: '1.6 HDi', plate: 'DK-1190-ED', km: 118000,
    spec: 'Taxi / urbain', role: 'Taxi', fuel: 'Diesel', color: '#a78bfa',
  },
];

export const BRANDS = [
  { id: "toyota", name: "Toyota", origin: "Japon", segment: "4x4 & utilitaire" },
  { id: "hyundai", name: "Hyundai", origin: "Corée", segment: "Citadine & SUV" },
  { id: "peugeot", name: "Peugeot", origin: "France", segment: "Citadine & taxi" },
  { id: "renault", name: "Renault", origin: "France", segment: "Citadine" },
  { id: "nissan", name: "Nissan", origin: "Japon", segment: "4x4 & utilitaire" },
  { id: "mitsubishi", name: "Mitsubishi", origin: "Japon", segment: "4x4 & pickup" },
  { id: "ford", name: "Ford", origin: "USA", segment: "Pickup & utilitaire" },
  { id: "chevrolet", name: "Chevrolet", origin: "USA", segment: "Pickup" },
  { id: "volkswagen", name: "Volkswagen", origin: "Allemagne", segment: "Berline" },
  { id: "kia", name: "Kia", origin: "Corée", segment: "Citadine & SUV" },
  { id: "honda", name: "Honda", origin: "Japon", segment: "Berline" },
  { id: "mazda", name: "Mazda", origin: "Japon", segment: "Berline" },
  { id: "suzuki", name: "Suzuki", origin: "Japon", segment: "Citadine & 4x4" },
  { id: "tata", name: "Tata", origin: "Inde", segment: "Utilitaire" },
  { id: "mahindra", name: "Mahindra", origin: "Inde", segment: "Utilitaire & 4x4" },
  { id: "mercedes-benz", name: "Mercedes-Benz", origin: "Allemagne", segment: "Premium & poids lourd" },
  { id: "bmw", name: "BMW", origin: "Allemagne", segment: "Premium" },
  { id: "audi", name: "Audi", origin: "Allemagne", segment: "Premium" },
  { id: "fiat", name: "Fiat", origin: "Italie", segment: "Citadine & utilitaire" },
  { id: "citro-n", name: "Citroën", origin: "France", segment: "Citadine & utilitaire" },
  { id: "dacia", name: "Dacia", origin: "Roumanie", segment: "Citadine & 4x4" },
  { id: "opel", name: "Opel", origin: "Allemagne", segment: "Berline" },
  { id: "jeep", name: "Jeep", origin: "USA", segment: "4x4" },
  { id: "dodge", name: "Dodge", origin: "USA", segment: "Pickup" },
  { id: "chrysler", name: "Chrysler", origin: "USA", segment: "Berline" },
  { id: "isuzu", name: "Isuzu", origin: "Japon", segment: "Pickup & poids lourd" },
  { id: "daihatsu", name: "Daihatsu", origin: "Japon", segment: "Citadine" },
  { id: "subaru", name: "Subaru", origin: "Japon", segment: "4x4" },
  { id: "lexus", name: "Lexus", origin: "Japon", segment: "Premium" },
  { id: "infiniti", name: "Infiniti", origin: "Japon", segment: "Premium" },
  { id: "acura", name: "Acura", origin: "Japon", segment: "Premium" },
  { id: "volvo", name: "Volvo", origin: "Suède", segment: "Premium & poids lourd" },
  { id: "koda", name: "Škoda", origin: "Tchéquie", segment: "Berline" },
  { id: "seat", name: "SEAT", origin: "Espagne", segment: "Citadine" },
  { id: "lada", name: "Lada", origin: "Russie", segment: "Utilitaire" },
  { id: "chery", name: "Chery", origin: "Chine", segment: "SUV" },
  { id: "geely", name: "Geely", origin: "Chine", segment: "Berline" },
  { id: "byd", name: "BYD", origin: "Chine", segment: "Électrique & SUV" },
  { id: "great-wall", name: "Great Wall", origin: "Chine", segment: "Pickup" },
  { id: "haval", name: "Haval", origin: "Chine", segment: "SUV" },
  { id: "jac", name: "JAC", origin: "Chine", segment: "Utilitaire" },
  { id: "lifan", name: "Lifan", origin: "Chine", segment: "Citadine" },
  { id: "changan", name: "Changan", origin: "Chine", segment: "Berline" },
  { id: "dongfeng", name: "Dongfeng", origin: "Chine", segment: "Utilitaire" },
  { id: "foton", name: "Foton", origin: "Chine", segment: "Utilitaire" },
  { id: "hino", name: "Hino", origin: "Japon", segment: "Poids lourd" },
  { id: "man", name: "MAN", origin: "Allemagne", segment: "Poids lourd" },
  { id: "iveco", name: "Iveco", origin: "Italie", segment: "Poids lourd" },
  { id: "scania", name: "Scania", origin: "Suède", segment: "Poids lourd" },
  { id: "tesla", name: "Tesla", origin: "USA", segment: "Électrique" },
  { id: "jaguar", name: "Jaguar", origin: "UK", segment: "Premium" },
  { id: "land-rover", name: "Land Rover", origin: "UK", segment: "4x4 premium" },
  { id: "porsche", name: "Porsche", origin: "Allemagne", segment: "Premium" },
  { id: "bentley", name: "Bentley", origin: "UK", segment: "Luxe" },
  { id: "rolls-royce", name: "Rolls-Royce", origin: "UK", segment: "Luxe" },
  { id: "ferrari", name: "Ferrari", origin: "Italie", segment: "Sport" },
  { id: "lamborghini", name: "Lamborghini", origin: "Italie", segment: "Sport" },
  { id: "maserati", name: "Maserati", origin: "Italie", segment: "Premium" },
  { id: "alfa-romeo", name: "Alfa Romeo", origin: "Italie", segment: "Berline" },
  { id: "lancia", name: "Lancia", origin: "Italie", segment: "Citadine" },
  { id: "saab", name: "Saab", origin: "Suède", segment: "Berline" },
  { id: "buick", name: "Buick", origin: "USA", segment: "Berline" },
  { id: "gmc", name: "GMC", origin: "USA", segment: "Pickup" },
  { id: "cadillac", name: "Cadillac", origin: "USA", segment: "Premium" },
  { id: "lincoln", name: "Lincoln", origin: "USA", segment: "Premium" },
  { id: "smart", name: "Smart", origin: "Allemagne", segment: "Citadine" },
  { id: "mini", name: "MINI", origin: "UK", segment: "Citadine" },
  { id: "cupra", name: "CUPRA", origin: "Espagne", segment: "Sport" },
  { id: "polestar", name: "Polestar", origin: "Suède", segment: "Électrique" },
  { id: "lucid", name: "Lucid", origin: "USA", segment: "Électrique" },
  { id: "rivian", name: "Rivian", origin: "USA", segment: "Électrique & 4x4" },
  { id: "abarth", name: "Abarth", origin: "Italie", segment: "Sport" },
  { id: "alpine", name: "Alpine", origin: "France", segment: "Sport" },
  { id: "ds", name: "DS", origin: "France", segment: "Premium" },
  { id: "borgward", name: "Borgward", origin: "Chine", segment: "SUV" },
  { id: "ssangyong", name: "SsangYong", origin: "Corée", segment: "4x4 & utilitaire" },
  { id: "proton", name: "Proton", origin: "Malaisie", segment: "Citadine" },
  { id: "perodua", name: "Perodua", origin: "Malaisie", segment: "Citadine" },
  { id: "maruti-suzuki", name: "Maruti Suzuki", origin: "Inde", segment: "Citadine" },
  { id: "bajaj", name: "Bajaj", origin: "Inde", segment: "Utilitaire" },
  { id: "tata-motors", name: "Tata Motors", origin: "Inde", segment: "Poids lourd" },
  { id: "ashok-leyland", name: "Ashok Leyland", origin: "Inde", segment: "Poids lourd" },
  { id: "iran-khodro", name: "Iran Khodro", origin: "Iran", segment: "Citadine" },
  { id: "saipa", name: "SAIPA", origin: "Iran", segment: "Citadine" }
];

export const CATEGORIES = [
  { id: 'Freinage', name: 'Freinage', icon: 'brake' },
  { id: 'Filtration', name: 'Filtration & Huile', icon: 'filter' },
  { id: 'Suspension', name: 'Suspension & Train', icon: 'shock' },
  { id: 'Moteur', name: 'Moteur & Injection', icon: 'engine' },
  { id: 'Électrique', name: 'Électrique', icon: 'bolt' },
  { id: 'Refroidissement', name: 'Refroidissement', icon: 'thermo' },
  { id: 'Transmission', name: 'Transmission', icon: 'gear' },
  { id: 'Carrosserie', name: 'Carrosserie', icon: 'body' },
  { id: "Climatisation", name: "Climatisation", icon: "snowflake" },
  { id: "Pneus & Jantes", name: "Pneus & Jantes", icon: "circle" },
  { id: "Échappement", name: "Échappement", icon: "wind" },
  { id: "Direction", name: "Direction", icon: "compass" },
  { id: "Outils & Entretien", name: "Outils & Entretien", icon: "wrench" }
];

/**
 * Catalog: 24 pieces, cross-references, regional spec, stock and service interval.
 * `compatible` holds vehicle ids; `oem` and `cross` are fictional references.
 */
export const PARTS = [
  { id: 'p01', photo: 'assets/parts/brake-pad.jpg', name: 'Plaquettes de frein avant', category: 'Freinage', brand: 'Toyota', oem: '04465-0K030', cross: ['D1060-AD001', 'LPZ007'], price: 18500, oldPrice: 22000, stock: 12, rating: 4.8, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 40000, warranty: 12, badge: 'Renforcé poussière', desc: 'Formule céramique renforcée pour les routes poussiéreuses et les chargements lourds.' },
  { id: 'p02', photo: 'assets/parts/brake-disc.jpg', name: 'Disques de frein avant (paire)', category: 'Freinage', brand: 'Toyota', oem: '43512-0K040', cross: ['DF4479', 'RBR008'], price: 42000, stock: 7, rating: 4.7, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 80000, warranty: 12, badge: 'Ventilé', desc: 'Disques ventilés traités anti-corrosion, épaisseur contrôlée.' },
  { id: 'p03', photo: 'assets/parts/brake-pad.jpg', name: 'Plaquettes de frein arrière', category: 'Freinage', brand: 'Hyundai', oem: '58302-2EA00', cross: ['SP1249', 'LPZ211'], price: 16000, stock: 9, rating: 4.6, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 45000, warranty: 12, badge: 'Ouverture', desc: 'Jeu de 4 plaquettes avec capteur d’usure et graisse anti-grincement.' },
  { id: 'p04', photo: 'assets/parts/oil-filter.jpg', name: 'Filtre à huile moteur', category: 'Filtration', brand: 'Toyota', oem: '90915-YZZE2', cross: ['W68/3', 'OC608'], price: 4500, stock: 48, rating: 4.9, compatible: ['hilux-2020', 'tucson-2019'], spec: 'Golfe / Afrique', intervalKm: 10000, warranty: 6, badge: 'Haute filtration', desc: 'Média multicouche : retient 98 % des particules dès 20 microns.' },
  { id: 'p05', photo: 'assets/parts/oil-filter.jpg', name: 'Filtre à air', category: 'Filtration', brand: 'Toyota', oem: '17801-0L010', cross: ['A1418', 'WA5235'], price: 7200, oldPrice: 8900, stock: 31, rating: 4.7, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 20000, warranty: 6, badge: 'Anti-poussière', desc: 'Cartouche double couche, adaptée aux pistes et aux Harmattan.' },
  { id: 'p06', photo: 'assets/parts/fuel-prefilter.jpg', name: 'Filtre à carburant diesel', category: 'Filtration', brand: 'Peugeot', oem: '1901-87', cross: ['FCU2030', 'KL148'], price: 9800, stock: 22, rating: 4.6, compatible: ['308-2018', 'hilux-2020'], spec: 'Taxi / urbain', intervalKm: 20000, warranty: 6, badge: 'Séparateur d’eau', desc: 'Protège la pompe d’injection contre l’eau et les impuretés du gazole local.' },
  { id: 'p07', photo: 'assets/parts/fuel-filter.jpg', name: 'Filtre d’habitacle charbon', category: 'Filtration', brand: 'Hyundai', oem: '97133-2E200', cross: ['CUK2330', 'AC8068'], price: 8500, stock: 18, rating: 4.5, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 15000, warranty: 6, badge: 'Charbon actif', desc: 'Filtre antipollen et odeurs, utile en ville et lors des pics de poussière.' },
  { id: 'p08', photo: 'assets/parts/oil-filter.jpg', name: 'Huile moteur 10W-30 (5 L)', category: 'Filtration', brand: 'Motul', oem: 'MOT-10W30-5L', cross: ['API-CF4', 'ACEA-A3'], price: 28500, stock: 26, rating: 4.9, compatible: ['hilux-2020', '308-2018'], spec: 'Golfe / Afrique', intervalKm: 10000, warranty: 0, badge: 'Tout climat', desc: 'Huile minérale haute tenue, formulée pour les températures sahéliennes.' },
  { id: 'p09', photo: 'assets/parts/shock-absorber.jpg', name: 'Amortisseur avant renforcé', category: 'Suspension', brand: 'Toyota', oem: '48511-0K080', cross: ['KG5431', 'MS110'], price: 34500, stock: 10, rating: 4.8, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 60000, warranty: 24, badge: 'Charges lourdes', desc: 'Amortisseur gaz à double piston pour pistes et chargements.' },
  { id: 'p10', photo: 'assets/parts/shock-absorber.jpg', name: 'Ressort de suspension arrière', category: 'Suspension', brand: 'Toyota', oem: '48220-0K010', cross: ['RC0213', 'LSK610'], price: 27000, stock: 8, rating: 4.6, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 70000, warranty: 18, badge: 'Renforcé', desc: 'Ressort hélicoïdal épais, traitement anti-sel et anti-abrasion.' },
  { id: 'p11', photo: 'assets/parts/shock-absorber.jpg', name: 'Barre stabilisatrice avant', category: 'Suspension', brand: 'Hyundai', oem: '54830-1G000', cross: ['SLS8160', 'B7060'], price: 22500, stock: 6, rating: 4.4, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 80000, warranty: 18, badge: 'Silentblocs inclus', desc: 'Barre complète avec silentblocs en polyuréthane renforcé.' },
  { id: 'p12', photo: 'assets/parts/shock-absorber.jpg', name: 'Rotule de suspension', category: 'Suspension', brand: 'Peugeot', oem: '3640-88', cross: ['SQ1091', 'JTI430'], price: 11500, stock: 15, rating: 4.5, compatible: ['308-2018'], spec: 'Taxi / urbain', intervalKm: 50000, warranty: 12, badge: 'Graphité', desc: 'Rotule étanche, graissage longue durée pour les mauvaises routes.' },
  { id: 'p13', photo: 'assets/parts/spark-plugs.jpg', name: 'Bougies d’allumage iridium (4)', category: 'Moteur', brand: 'Hyundai', oem: '18844-10160', cross: ['IKR20E8', 'SILZKFR8'], price: 19800, stock: 20, rating: 4.8, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 40000, warranty: 12, badge: 'Iridium', desc: 'Allumage stable à faible régime, réduction de la consommation urbaine.' },
  { id: 'p14', photo: 'assets/parts/catalytic-converter.jpg', name: 'Injecteur diesel common rail', category: 'Moteur', brand: 'Peugeot', oem: '1980-45', cross: ['DLLA150P', 'EJBR01401'], price: 78000, stock: 4, rating: 4.7, compatible: ['308-2018'], spec: 'Taxi / urbain', intervalKm: 120000, warranty: 12, badge: 'Reconditionné + garantie', desc: 'Injecteur contrôlé sur banc, buse nettoyée et étalonnée.' },
  { id: 'p15', photo: 'assets/parts/radiator.jpg', name: 'Pompe à eau moteur', category: 'Refroidissement', brand: 'Toyota', oem: '16100-09240', cross: ['WPQ856', 'GWT-72A'], price: 31500, stock: 9, rating: 4.6, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 90000, warranty: 12, badge: 'Joint inclus', desc: 'Corps aluminium, turbine renforcée et joint d’étanchéité fourni.' },
  { id: 'p16', photo: 'assets/parts/radiator.jpg', name: 'Radiateur aluminium grand volume', category: 'Refroidissement', brand: 'Toyota', oem: '16400-0K230', cross: ['RDI2075', 'KA-2060'], price: 64500, oldPrice: 72000, stock: 5, rating: 4.8, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 120000, warranty: 18, badge: 'Grand volume', desc: 'Noyau aluminium 3 rangées conçu pour les longs trajets en plein soleil.' },
  { id: 'p17', photo: 'assets/parts/radiator.jpg', name: 'Durite de radiateur haute', category: 'Refroidissement', brand: 'Peugeot', oem: '5750-FP', cross: ['DH1782', 'TCH404'], price: 8900, stock: 17, rating: 4.4, compatible: ['308-2018'], spec: 'Taxi / urbain', intervalKm: 60000, warranty: 12, badge: 'EPDM', desc: 'Durite renforcée résistante au glycol et aux hautes températures.' },
  { id: 'p18', photo: 'assets/parts/car-battery-2.jpg', name: 'Alternateur 12V 90A', category: 'Électrique', brand: 'Toyota', oem: '27060-0K030', cross: ['CAL35216', 'JA1132'], price: 56500, stock: 6, rating: 4.7, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 150000, warranty: 18, badge: 'Charge renforcée', desc: 'Régulateur intégré, adapté aux accessoires GPS et chargeurs multiples.' },
  { id: 'p19', photo: 'assets/parts/car-battery.jpg', name: 'Batterie 12V 70Ah', category: 'Électrique', brand: 'Varta', oem: 'BAT-70Ah-D', cross: ['EB70', 'DIN74'], price: 89000, stock: 11, rating: 4.9, compatible: ['hilux-2020', 'tucson-2019', '308-2018'], spec: 'Tous modèles', intervalKm: 80000, warranty: 24, badge: 'Démarrage renforcé', desc: 'Batterie sans entretien, haute résistance aux cycles de démarrage à chaud.' },
  { id: 'p20', photo: 'assets/parts/wiper.jpg', name: 'Éclairage LED phare avant', category: 'Électrique', brand: 'Hyundai', oem: '92101-2E500', cross: ['LED-H4-60', 'LUM900'], price: 24000, stock: 13, rating: 4.6, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 100000, warranty: 18, badge: 'LED 6000K', desc: 'Feu LED homologué, faisceau large pour les routes non éclairées.' },
  { id: 'p21', photo: 'assets/parts/car-battery-2.jpg', name: 'Kit embrayage complet', category: 'Transmission', brand: 'Peugeot', oem: '2050-56', cross: ['KC603', 'CTR211'], price: 96000, oldPrice: 110000, stock: 3, rating: 4.8, compatible: ['308-2018'], spec: 'Taxi / urbain', intervalKm: 130000, warranty: 18, badge: 'Kit complet', desc: 'Disque, mécanisme et butée : montage direct sans reprise.' },
  { id: 'p22', photo: 'assets/parts/brake-disc.jpg', name: 'Cardan transmission avant', category: 'Transmission', brand: 'Toyota', oem: '43430-0K010', cross: ['CVT8040', 'JAWA102'], price: 73500, stock: 4, rating: 4.7, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 140000, warranty: 18, badge: 'Soufflets inclus', desc: 'Cardan neuf avec soufflets et graisse, pour 4x4 et chargements.' },
  { id: 'p23', photo: 'assets/parts/wiper.jpg', name: 'Rétroviseur extérieur droit', category: 'Carrosserie', brand: 'Hyundai', oem: '87620-2E000', cross: ['MRV8021', 'TYC512'], price: 29500, stock: 8, rating: 4.3, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 0, warranty: 12, badge: 'Prêt à peindre', desc: 'Rétroviseur électrique avec clignotant intégré.' },
  { id: 'p24', photo: 'assets/parts/car-battery-2.jpg', name: 'Pare-chocs avant renforcé', category: 'Carrosserie', brand: 'Toyota', oem: '52119-0K902', cross: ['BPH440', 'TUF130'], price: 118000, stock: 2, rating: 4.6, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 0, warranty: 12, badge: 'Acier 3 mm', desc: 'Pare-chocs renforcé avec plaque de protection et fixations incluses.' },
  {"id":"p25","photo":"assets/parts/brake-pad.jpg","name":"Disques de frein arrière","category":"Freinage","brand":"Toyota","oem":"43512-0K050","cross":[],"price":34000,"stock":6,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Ventilé","intervalKm":80000,"warranty":12,"badge":"Ventilé","desc":"Disques arrière traités pour pistes et charges lourdes."},
  {"id":"p26","photo":"assets/parts/brake-pad.jpg","name":"Maître-cylindre de frein","category":"Freinage","brand":"Toyota","oem":"47201-0K060","cross":[],"price":39000,"stock":5,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Golfe / Afrique","intervalKm":120000,"warranty":18,"badge":"Golfe / Afrique","desc":"Maître-cylindre neuf, joint inclus, compatible routes chaudes."},
  {"id":"p27","photo":"assets/parts/brake-pad.jpg","name":"Flexible de frein avant","category":"Freinage","brand":"Hyundai","oem":"58731-1G000","cross":[],"price":9500,"stock":18,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Anti-abrasion","intervalKm":60000,"warranty":12,"badge":"Anti-abrasion","desc":"Durite tressée résistante aux cailloux et à la chaleur."},
  {"id":"p28","photo":"assets/parts/brake-pad.jpg","name":"Tambour de frein arrière","category":"Freinage","brand":"Peugeot","oem":"4247-38","cross":[],"price":27500,"stock":7,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Utilitaire","intervalKm":90000,"warranty":12,"badge":"Utilitaire","desc":"Tambour renforcé pour taxis et utilitaires urbains."},
  {"id":"p29","photo":"assets/parts/brake-pad.jpg","name":"Capteur d’usure plaquettes","category":"Freinage","brand":"Universel","oem":"WSS-001","cross":[],"price":3500,"stock":40,"rating":4.3,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Universel","intervalKm":40000,"warranty":6,"badge":"Universel","desc":"Capteur de contact simple à remplacer."},
  {"id":"p30","photo":"assets/parts/brake-pad.jpg","name":"Jeu de freins complet","category":"Freinage","brand":"Toyota","oem":"KIT-FR-0K","cross":[],"price":72000,"stock":4,"rating":4.8,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Renforcé","intervalKm":80000,"warranty":12,"badge":"Renforcé","desc":"Plaquettes + disques + flexibles, montage direct."},
  {"id":"p31","photo":"assets/parts/oil-filter.jpg","name":"Filtre habitacle anti-poussière","category":"Filtration","brand":"Universel","oem":"CUK-2420","cross":[],"price":6800,"stock":28,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Harmattan","intervalKm":15000,"warranty":6,"badge":"Harmattan","desc":"Média épais pour les pics de poussière et le sable."},
  {"id":"p32","photo":"assets/parts/oil-filter.jpg","name":"Filtre à carburant essence","category":"Filtration","brand":"Renault","oem":"7700-147-864","cross":[],"price":8200,"stock":19,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Urbain","intervalKm":20000,"warranty":6,"badge":"Urbain","desc":"Protège les injecteurs des impuretés du carburant local."},
  {"id":"p33","photo":"assets/parts/oil-filter.jpg","name":"Filtre de transmission automatique","category":"Filtration","brand":"Toyota","oem":"35330-0C010","cross":[],"price":24500,"stock":8,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Auto","intervalKm":60000,"warranty":12,"badge":"Auto","desc":"Filtre + joint pour boîte automatique, climat urbain."},
  {"id":"p34","photo":"assets/parts/oil-filter.jpg","name":"Filtre à eau moteur","category":"Filtration","brand":"Universel","oem":"FW-120","cross":[],"price":5400,"stock":22,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Eau","intervalKm":20000,"warranty":6,"badge":"Eau","desc":"Séparateur d’eau pour gazole de mauvaise qualité."},
  {"id":"p35","photo":"assets/parts/oil-filter.jpg","name":"Kit vidange 5L + filtre","category":"Filtration","brand":"Universel","oem":"KIT-VID-5L","cross":[],"price":31500,"stock":24,"rating":4.9,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Tout climat","intervalKm":10000,"warranty":6,"badge":"Tout climat","desc":"Huile 10W-30 + filtre : le duo anti-chaleur sahélienne."},
  {"id":"p36","photo":"assets/parts/oil-filter.jpg","name":"Additif gazole nettoyant","category":"Filtration","brand":"Universel","oem":"ADD-DIE-500","cross":[],"price":4800,"stock":35,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Carburant","intervalKm":10000,"warranty":0,"badge":"Carburant","desc":"Nettoie injecteurs et limite la fumée au démarrage."},
  {"id":"p37","photo":"assets/parts/spark-plugs.jpg","name":"Bougies iridium 4 cylindres","category":"Moteur","brand":"Toyota","oem":"90919-01253","cross":[],"price":21500,"stock":17,"rating":4.8,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Iridium","intervalKm":40000,"warranty":12,"badge":"Iridium","desc":"Allumage stable en ville comme sur route."},
  {"id":"p38","photo":"assets/parts/spark-plugs.jpg","name":"Courroie de distribution","category":"Moteur","brand":"Peugeot","oem":"0816-37","cross":[],"price":32000,"stock":11,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Renforcée","intervalKm":100000,"warranty":12,"badge":"Renforcée","desc":"Courroie haute résistance, kit dents inclus."},
  {"id":"p39","photo":"assets/parts/spark-plugs.jpg","name":"Pompe à carburant électrique","category":"Moteur","brand":"Renault","oem":"8200-685-473","cross":[],"price":34500,"stock":9,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Tout climat","intervalKm":120000,"warranty":12,"badge":"Tout climat","desc":"Pompe immergée-compatible, livrée avec joint."},
  {"id":"p40","photo":"assets/parts/spark-plugs.jpg","name":"Turbo reconditionné","category":"Moteur","brand":"Hyundai","oem":"28200-4A201","cross":[],"price":145000,"stock":3,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Reconditionné","intervalKm":180000,"warranty":12,"badge":"Reconditionné","desc":"Turbo contrôlé et équilibré, garantie 12 mois."},
  {"id":"p41","photo":"assets/parts/spark-plugs.jpg","name":"Joint de culasse renforcé","category":"Moteur","brand":"Toyota","oem":"11115-0K010","cross":[],"price":28500,"stock":6,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Haute température","intervalKm":150000,"warranty":12,"badge":"Haute température","desc":"Joint multi-couches pour moteurs sollicités."},
  {"id":"p42","photo":"assets/parts/spark-plugs.jpg","name":"Capteur de position vilebrequin","category":"Moteur","brand":"Universel","oem":"CRS-1204","cross":[],"price":12500,"stock":21,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Universel","intervalKm":100000,"warranty":12,"badge":"Universel","desc":"Capteur PMH étanche à la poussière."},
  {"id":"p43","photo":"assets/parts/shock-absorber.jpg","name":"Silentbloc de suspension","category":"Suspension","brand":"Toyota","oem":"48061-0K010","cross":[],"price":9800,"stock":26,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Polyuréthane","intervalKm":60000,"warranty":12,"badge":"Polyuréthane","desc":"Silentbloc renforcé, meilleure tenue sur pistes."},
  {"id":"p44","photo":"assets/parts/shock-absorber.jpg","name":"Biellette de barre stabilisatrice","category":"Suspension","brand":"Hyundai","oem":"54840-1G000","cross":[],"price":11200,"stock":20,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Renforcée","intervalKm":50000,"warranty":12,"badge":"Renforcée","desc":"Biellette courte avec rotules étanches."},
  {"id":"p45","photo":"assets/parts/shock-absorber.jpg","name":"Coupelle d’amortisseur avant","category":"Suspension","brand":"Peugeot","oem":"5031-72","cross":[],"price":8900,"stock":18,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Caoutchouc renforcé","intervalKm":70000,"warranty":12,"badge":"Caoutchouc renforcé","desc":"Coupelle + roulement, réduction des bruits de route."},
  {"id":"p46","photo":"assets/parts/shock-absorber.jpg","name":"Ressort arrière extra-load","category":"Suspension","brand":"Toyota","oem":"48220-0K020","cross":[],"price":31000,"stock":8,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Charges lourdes","intervalKm":80000,"warranty":18,"badge":"Charges lourdes","desc":"Ressort renforcé pour pickups et chargements."},
  {"id":"p47","photo":"assets/parts/shock-absorber.jpg","name":"Kit suspension avant complet","category":"Suspension","brand":"Toyota","oem":"KIT-SUS-0K","cross":[],"price":89000,"stock":4,"rating":4.8,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Pistes","intervalKm":80000,"warranty":18,"badge":"Pistes","desc":"Amortisseurs + ressorts + coupelles."},
  {"id":"p48","photo":"assets/parts/radiator.jpg","name":"Thermostat moteur","category":"Refroidissement","brand":"Toyota","oem":"16320-0K010","cross":[],"price":11500,"stock":16,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Tout climat","intervalKm":90000,"warranty":12,"badge":"Tout climat","desc":"Thermostat à ouverture rapide, évite la surchauffe."},
  {"id":"p49","photo":"assets/parts/radiator.jpg","name":"Ventilateur électrique radiateur","category":"Refroidissement","brand":"Hyundai","oem":"25380-2E000","cross":[],"price":42500,"stock":7,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Silencieux","intervalKm":120000,"warranty":12,"badge":"Silencieux","desc":"Ventilateur complet avec moteur et protection."},
  {"id":"p50","photo":"assets/parts/radiator.jpg","name":"Liquide de refroidissement 5L","category":"Refroidissement","brand":"Universel","oem":"LC-5L","cross":[],"price":12500,"stock":30,"rating":4.8,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Tout climat","intervalKm":40000,"warranty":0,"badge":"Tout climat","desc":"Liquide prêt à l’emploi, protection haute température."},
  {"id":"p51","photo":"assets/parts/radiator.jpg","name":"Bouchon radiateur pression","category":"Refroidissement","brand":"Universel","oem":"RC-108","cross":[],"price":4500,"stock":32,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Pression 1.1 bar","intervalKm":60000,"warranty":6,"badge":"Pression 1.1 bar","desc":"Bouchon étanche avec soupape de décharge."},
  {"id":"p52","photo":"assets/parts/car-battery.jpg","name":"Démarreur 12V","category":"Électrique","brand":"Toyota","oem":"28100-0K030","cross":[],"price":48000,"stock":6,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Démarrage renforcé","intervalKm":150000,"warranty":18,"badge":"Démarrage renforcé","desc":"Démarreur neuf pour démarrages à chaud."},
  {"id":"p53","photo":"assets/parts/car-battery.jpg","name":"Capteur ABS roue avant","category":"Électrique","brand":"Hyundai","oem":"59830-2E000","cross":[],"price":18500,"stock":12,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Étanche","intervalKm":100000,"warranty":12,"badge":"Étanche","desc":"Capteur ABS résistant à l’eau et à la boue."},
  {"id":"p54","photo":"assets/parts/car-battery.jpg","name":"Feu arrière LED","category":"Électrique","brand":"Peugeot","oem":"6350-K5","cross":[],"price":22500,"stock":10,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Homologué","intervalKm":100000,"warranty":12,"badge":"Homologué","desc":"Feu arrière LED avec clignotant intégré."},
  {"id":"p55","photo":"assets/parts/car-battery.jpg","name":"Coffret fusibles universel","category":"Électrique","brand":"Universel","oem":"FUSE-KIT-30","cross":[],"price":7800,"stock":25,"rating":4.3,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Universel","intervalKm":0,"warranty":6,"badge":"Universel","desc":"30 fusibles de calibres variés, coffret rigide."},
  {"id":"p56","photo":"assets/parts/car-battery.jpg","name":"Câble batterie renforcé","category":"Électrique","brand":"Universel","oem":"CAB-BAT-25","cross":[],"price":9500,"stock":19,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Cuivre 25mm²","intervalKm":0,"warranty":12,"badge":"Cuivre 25mm²","desc":"Câbles positives et négatives avec cosses."},
  {"id":"p57","photo":"assets/parts/car-battery.jpg","name":"Klaxon 12V double ton","category":"Électrique","brand":"Universel","oem":"HL-12-2T","cross":[],"price":5500,"stock":28,"rating":4.3,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Double ton","intervalKm":0,"warranty":6,"badge":"Double ton","desc":"Klaxon puissant, utilisation urbaine."},
  {"id":"p58","photo":"assets/parts/brake-disc.jpg","name":"Huile boîte manuelle 75W-90","category":"Transmission","brand":"Universel","oem":"HBM-75W90","cross":[],"price":13500,"stock":23,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Tout climat","intervalKm":60000,"warranty":0,"badge":"Tout climat","desc":"Huile de transmission résistante à la chaleur."},
  {"id":"p59","photo":"assets/parts/brake-disc.jpg","name":"Joint cardan soufflet","category":"Transmission","brand":"Toyota","oem":"04438-0K010","cross":[],"price":7200,"stock":24,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Renforcé","intervalKm":50000,"warranty":12,"badge":"Renforcé","desc":"Soufflet + colliers, protège la graisse."},
  {"id":"p60","photo":"assets/parts/brake-disc.jpg","name":"Roulement de roue avant","category":"Transmission","brand":"Hyundai","oem":"51720-2E000","cross":[],"price":19500,"stock":13,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Étanche","intervalKm":120000,"warranty":12,"badge":"Étanche","desc":"Roulement à double bague, joint inclus."},
  {"id":"p61","photo":"assets/parts/brake-disc.jpg","name":"Câble commande de vitesses","category":"Transmission","brand":"Peugeot","oem":"2440-78","cross":[],"price":8900,"stock":15,"rating":4.3,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Renforcé","intervalKm":80000,"warranty":12,"badge":"Renforcé","desc":"Câble de commande boîte, montage direct."},
  {"id":"p62","photo":"assets/parts/wiper.jpg","name":"Rétroviseur extérieur gauche","category":"Carrosserie","brand":"Hyundai","oem":"87610-2E000","cross":[],"price":27500,"stock":9,"rating":4.3,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Prêt à peindre","intervalKm":0,"warranty":12,"badge":"Prêt à peindre","desc":"Rétroviseur électrique avec clignotant."},
  {"id":"p63","photo":"assets/parts/wiper.jpg","name":"Phare avant halogène","category":"Carrosserie","brand":"Toyota","oem":"81150-0K030","cross":[],"price":32500,"stock":8,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Homologué","intervalKm":100000,"warranty":12,"badge":"Homologué","desc":"Phare complet avec réglette et ampoule."},
  {"id":"p64","photo":"assets/parts/wiper.jpg","name":"Poignée de porte avant","category":"Carrosserie","brand":"Peugeot","oem":"9141-Z1","cross":[],"price":9900,"stock":17,"rating":4.3,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Renforcée","intervalKm":0,"warranty":12,"badge":"Renforcée","desc":"Poignée plastique renforcée, couleur neutre."},
  {"id":"p65","photo":"assets/parts/wiper.jpg","name":"Essuie-glaces avant (paire)","category":"Carrosserie","brand":"Universel","oem":"WIP-600","cross":[],"price":11500,"stock":30,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Anti-poussière","intervalKm":20000,"warranty":6,"badge":"Anti-poussière","desc":"Lames renforcées pour pare-brise poussiéreux."},
  {"id":"p66","photo":"assets/parts/radiator.jpg","name":"Compresseur de climatisation","category":"Climatisation","brand":"Toyota","oem":"88310-0K030","cross":[],"price":125000,"stock":3,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Remis à neuf","intervalKm":150000,"warranty":12,"badge":"Remis à neuf","desc":"Compresseur remis à neuf et testé."},
  {"id":"p67","photo":"assets/parts/radiator.jpg","name":"Condensateur climatisation","category":"Climatisation","brand":"Hyundai","oem":"97600-2E000","cross":[],"price":42000,"stock":7,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Aluminium","intervalKm":100000,"warranty":12,"badge":"Aluminium","desc":"Condensateur aluminium haute efficacité."},
  {"id":"p68","photo":"assets/parts/radiator.jpg","name":"Gaz réfrigérant R134a","category":"Climatisation","brand":"Universel","oem":"R134A-1KG","cross":[],"price":18500,"stock":20,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Recharge","intervalKm":0,"warranty":0,"badge":"Recharge","desc":"Bouteille 1 kg avec additif lubrifiant."},
  {"id":"p69","photo":"assets/parts/radiator.jpg","name":"Joint torique clim (kit)","category":"Climatisation","brand":"Universel","oem":"O-RING-KIT","cross":[],"price":3500,"stock":35,"rating":4.3,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Universel","intervalKm":0,"warranty":6,"badge":"Universel","desc":"Kit de joints pour remontage du circuit."},
  {"id":"p70","photo":"assets/parts/brake-disc.jpg","name":"Pneu 195/65 R15 été","category":"Pneus & Jantes","brand":"Universel","oem":"P195-65R15","cross":[],"price":68500,"stock":14,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Route","intervalKm":60000,"warranty":0,"badge":"Route","desc":"Pneu route renforcé, charge indices 91H."},
  {"id":"p71","photo":"assets/parts/brake-disc.jpg","name":"Pneu 265/65 R17 tout terrain","category":"Pneus & Jantes","brand":"Universel","oem":"P265-65R17","cross":[],"price":145000,"stock":6,"rating":4.8,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Tout terrain","intervalKm":70000,"warranty":0,"badge":"Tout terrain","desc":"Pneu 4x4 pour pistes et Routes Nationales."},
  {"id":"p72","photo":"assets/parts/brake-disc.jpg","name":"Jante acier 15 pouces","category":"Pneus & Jantes","brand":"Universel","oem":"JANTE-15","cross":[],"price":38500,"stock":11,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Acier","intervalKm":150000,"warranty":12,"badge":"Acier","desc":"Jante acier épaisse, traitement anti-rouille."},
  {"id":"p73","photo":"assets/parts/brake-disc.jpg","name":"Valve pneu renforcée","category":"Pneus & Jantes","brand":"Universel","oem":"VALVE-TR413","cross":[],"price":1800,"stock":60,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Universel","intervalKm":20000,"warranty":6,"badge":"Universel","desc":"Valve avec bouchon étanche."},
  {"id":"p74","photo":"assets/parts/catalytic-converter.jpg","name":"Silencieux arrière","category":"Échappement","brand":"Toyota","oem":"17430-0K030","cross":[],"price":38000,"stock":8,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Acier","intervalKm":100000,"warranty":12,"badge":"Acier","desc":"Silencieux acier aluminisé, soudures renforcées."},
  {"id":"p75","photo":"assets/parts/catalytic-converter.jpg","name":"Catalyseur universel","category":"Échappement","brand":"Universel","oem":"CAT-UNIV","cross":[],"price":95000,"stock":4,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Universel","intervalKm":150000,"warranty":12,"badge":"Universel","desc":"Catalyseur homologué, corps inox."},
  {"id":"p76","photo":"assets/parts/catalytic-converter.jpg","name":"Collecteur d’échappement","category":"Échappement","brand":"Peugeot","oem":"0341-CT","cross":[],"price":55000,"stock":5,"rating":4.5,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Fonte","intervalKm":150000,"warranty":12,"badge":"Fonte","desc":"Collecteur fonte avec joint de portée."},
  {"id":"p77","photo":"assets/parts/shock-absorber.jpg","name":"Crémaillère de direction","category":"Direction","brand":"Toyota","oem":"44250-0K010","cross":[],"price":165000,"stock":3,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Remis à neuf","intervalKm":180000,"warranty":18,"badge":"Remis à neuf","desc":"Crémaillère remise à neuf et testée."},
  {"id":"p78","photo":"assets/parts/shock-absorber.jpg","name":"Soufflet de direction","category":"Direction","brand":"Hyundai","oem":"57731-2E000","cross":[],"price":9800,"stock":18,"rating":4.4,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Étanche","intervalKm":60000,"warranty":12,"badge":"Étanche","desc":"Soufflet + colliers, protège la crémaillère."},
  {"id":"p79","photo":"assets/parts/shock-absorber.jpg","name":"Pompe de direction assistée","category":"Direction","brand":"Peugeot","oem":"4001-N9","cross":[],"price":72000,"stock":5,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Renforcée","intervalKm":150000,"warranty":18,"badge":"Renforcée","desc":"Pompe remise à neuf pour climats chauds."},
  {"id":"p80","photo":"assets/parts/oil-filter.jpg","name":"Cric hydraulique 2 tonnes","category":"Outils & Entretien","brand":"Universel","oem":"CRIC-2T","cross":[],"price":24500,"stock":16,"rating":4.8,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Atelier","intervalKm":0,"warranty":12,"badge":"Atelier","desc":"Cric 2 t avec manivelle et selle caoutchouc."},
  {"id":"p81","photo":"assets/parts/oil-filter.jpg","name":"Clé à molette 300 mm","category":"Outils & Entretien","brand":"Universel","oem":"CLE-300","cross":[],"price":8500,"stock":25,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Atelier","intervalKm":0,"warranty":12,"badge":"Atelier","desc":"Clé acier chromé, mâchoires renforcées."},
  {"id":"p82","photo":"assets/parts/oil-filter.jpg","name":"Kit outils 52 pièces","category":"Outils & Entretien","brand":"Universel","oem":"KIT-OUT-52","cross":[],"price":39000,"stock":12,"rating":4.7,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"Atelier","intervalKm":0,"warranty":12,"badge":"Atelier","desc":"Coffret clés, tournevis et douilles."},
  {"id":"p83","photo":"assets/parts/oil-filter.jpg","name":"Gonfleur 12V portable","category":"Outils & Entretien","brand":"Universel","oem":"GONF-12V","cross":[],"price":18500,"stock":14,"rating":4.6,"compatible":["hilux-2020","tucson-2019","308-2018"],"spec":"12V","intervalKm":0,"warranty":12,"badge":"12V","desc":"Gonfleur compact avec manomètre, prise allume-cigare."}
];

/** Service rules used by the maintenance radar. */
export const REGION_TIPS = [
  {
    "id": "t1",
    "title": "Filtres anti-poussière",
    "text": "En saison sèche et au Harmattan, privilégie un filtre à air double couche et un filtre d’habitacle charbon.",
    "partIds": [
      "p05",
      "p25",
      "p07"
    ],
    "icon": "filter"
  },
  {
    "id": "t2",
    "title": "Huile tout climat",
    "text": "Une 10W-30 haute tenue supporte mieux les démarrages à chaud et les longs trajes entre Dakar et Thiès.",
    "partIds": [
      "p08",
      "p32"
    ],
    "icon": "engine"
  },
  {
    "id": "t3",
    "title": "Suspension charges lourdes",
    "text": "Pickups et utilitaires : amortisseurs gaz et ressorts renforcés pour les pistes et les chargements.",
    "partIds": [
      "p09",
      "p10",
      "p56"
    ],
    "icon": "shock"
  },
  {
    "id": "t4",
    "title": "Refroidissement grand volume",
    "text": "Radiateur aluminium et liquide de qualité : la surchauffe reste la première panne en ville et sur route nationale.",
    "partIds": [
      "p16",
      "p59",
      "p61"
    ],
    "icon": "thermo"
  }
];

export const MAINTENANCE_RULES = [
  { id: 'huile', label: 'Vidange + filtre à huile', intervalKm: 10000, partIds: ['p04', 'p08'] },
  { id: 'filtre-air', label: 'Filtre à air', intervalKm: 20000, partIds: ['p05'] },
  { id: 'freins', label: 'Plaquettes de frein', intervalKm: 40000, partIds: ['p01', 'p03'] },
  { id: 'suspension', label: 'Contrôle suspension', intervalKm: 60000, partIds: ['p09', 'p11'] },
  { id: 'courroie', label: 'Courroie / accessoires', intervalKm: 80000, partIds: ['p18', 'p15'] },
];

export const GARAGES = [
  { id: 'g1', name: 'Garage Fadji Auto', area: 'Ouakam, Dakar', distance: 1.8, rating: 4.8, open: true, services: 'Mécanique générale', phone: '+221 00 000 00 01' },
  { id: 'g2', name: 'Atelier Kebba', area: 'Grand Dakar, Dakar', distance: 3.4, rating: 4.6, open: true, services: 'Freins & suspension', phone: '+221 00 000 00 02' },
  { id: 'g3', name: 'Auto Secours Sénégal', area: 'Colobane, Dakar', distance: 5.1, rating: 4.9, open: true, services: 'Dépannage 24/7', phone: '+221 00 000 00 03' },
];

/** Remove diacritics and punctuation noise so "plaquettes" matches "Plaquettes". */
export function normalize(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function findPart(id) {
  return PARTS.find((part) => part.id === id) ?? null;
}

export function findVehicle(id) {
  return VEHICLES.find((vehicle) => vehicle.id === id) ?? null;
}

/**
 * Score a part against a free-text query. Returns matched parts with reasons.
 * `filters` may contain vehicleId, category and maxPrice.
 */
export function searchParts(query, filters = {}, source = PARTS) {
  const tokens = normalize(query).split(' ').filter(Boolean);
  return source
    .map((part) => {
      let score = 0;
      const haystacks = [
        { text: normalize(part.name), weight: 6 },
        { text: normalize(part.brand), weight: 3 },
        { text: normalize(part.category), weight: 3 },
        { text: normalize(part.oem), weight: 5 },
        { text: normalize(part.cross.join(' ')), weight: 4 },
        { text: normalize(part.spec), weight: 2 },
        { text: normalize(part.badge), weight: 2 },
        { text: normalize(part.desc), weight: 1 },
      ];
      for (const token of tokens) {
        let tokenScore = 0;
        for (const h of haystacks) {
          if (!h.text) continue;
          if (h.text === token) tokenScore = Math.max(tokenScore, h.weight * 2);
          else if (h.text.includes(token)) tokenScore = Math.max(tokenScore, h.weight);
        }
        score += tokenScore;
      }
      return { part, score };
    })
    .filter(({ part }) => !filters.category || part.category === filters.category)
    .filter(({ part }) => !filters.vehicleId || part.compatible.includes(filters.vehicleId))
    .filter(({ part }) => !filters.maxPrice || part.price <= filters.maxPrice)
    .filter(({ score }) => !tokens.length || score > 0)
    .sort((a, b) => b.score - a.score || b.part.rating - a.part.rating || a.part.price - b.part.price);
}

/** Parse a natural-language request into structured intent for the VIN/IA assistant. */
export function parseAssistantQuery(query) {
  const text = normalize(query);
  const brand = VEHICLES.map((v) => normalize(v.brand)).find((b) => text.includes(b)) ?? null;
  const model = VEHICLES.map((v) => normalize(v.model)).find((m) => text.includes(m)) ?? null;
  const yearMatch = text.match(/\b(20\d{2}|19\d{2})\b/);
  const vinMatch = text.match(/\b[a-hj-npr-z0-9]{17}\b/i);
  const category = CATEGORIES.find((c) => text.includes(normalize(c.name)))?.id ?? null;
  const keywords = ['plaquette', 'frein', 'huile', 'filtre', 'amortisseur', 'batterie', 'courroie', 'injecteur', 'radiateur', 'alternateur', 'embrayage']
    .filter((k) => text.includes(k));
  return {
    text, brand, model, year: yearMatch ? Number(yearMatch[1]) : null,
    vin: vinMatch ? vinMatch[0].toUpperCase() : null,
    category, keywords,
  };
}

/**
 * The assistant: matches a request to the best parts and writes a plain explanation.
 * Deliberately local/deterministic — no external AI call, no fabricated live data.
 */
export function assistantRecommend(query, vehicleId) {
  const parsed = parseAssistantQuery(query);
  const vehicle = findVehicle(vehicleId) ?? VEHICLES[0];
  let candidates = PARTS.filter((p) => p.compatible.includes(vehicle.id));

  if (parsed.brand) {
    const matching = candidates.filter((p) => normalize(p.brand).includes(parsed.brand) || normalize(vehicle.brand).includes(parsed.brand));
    if (matching.length) candidates = matching;
  }
  if (parsed.category) {
    const matching = candidates.filter((p) => p.category === parsed.category);
    if (matching.length) candidates = matching;
  }
  const keywordHits = candidates.filter((p) => parsed.keywords.some((k) => normalize(`${p.name} ${p.category}`).includes(k)));
  if (keywordHits.length) candidates = keywordHits;

  const ranked = candidates
    .map((part) => ({ part, score: part.rating * 2 + (part.stock > 0 ? 2 : -4) + (part.oldPrice ? 1 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const bits = [];
  if (parsed.vin) bits.push(`VIN ${parsed.vin}`);
  if (parsed.brand || parsed.model) bits.push(`${parsed.brand ?? ''} ${parsed.model ?? ''}`.trim());
  if (parsed.year) bits.push(`année ${parsed.year}`);
  bits.push(`${vehicle.brand} ${vehicle.model} ${vehicle.year} (profil actif)`);
  if (parsed.keywords.length) bits.push(`besoin : ${parsed.keywords.join(', ')}`);

  return {
    parsed,
    items: ranked,
    explanation: ranked.length
      ? `D’après ${bits.join(' · ')}, voici les ${ranked.length} pièces les plus pertinentes, compatibles avec votre véhicule.`
      : `Aucune pièce ne correspond à cette demande pour le ${vehicle.brand} ${vehicle.model}. Essayez « plaquettes », « filtre à huile » ou « batterie ».`,
  };
}

export function formatPrice(value, lang = 'fr') {
  const formatted = new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'fr-FR', {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
  return `${formatted} ${CURRENCY}`;
}

export function cartLines(cart, source = PARTS) {
  return (cart ?? [])
    .map(({ id, qty }) => {
      const part = findPart(id) ?? source.find((p) => p.id === id);
      return part ? { part, qty: Math.max(1, Number(qty) || 1) } : null;
    })
    .filter(Boolean);
}

export function cartCount(cart) {
  return cartLines(cart).reduce((sum, line) => sum + line.qty, 0);
}

export function cartTotals(cart, cityId = 'dakar', express = false) {
  const city = CITIES.find((c) => c.id === cityId) ?? CITIES[0];
  const lines = cartLines(cart);
  const subtotal = lines.reduce((sum, line) => sum + line.part.price * line.qty, 0);
  const savings = lines.reduce((sum, line) => sum + ((line.part.oldPrice ?? line.part.price) - line.part.price) * line.qty, 0);
  const delivery = subtotal === 0 ? 0 : (express ? 7500 : city.delivery);
  return { subtotal, savings, delivery, total: subtotal + delivery, eta: express ? '2 h' : city.eta, lines };
}

/**
 * Maintenance status for one vehicle.
 * `phase` shifts the hypothetical last-service points for demo purposes.
 */
export function maintenanceFor(vehicle, rules = MAINTENANCE_RULES, phase = 0.37) {
  return rules.map((rule, index) => {
    const lastService = Math.round((vehicle.km * (0.25 + index * 0.11) * (1 - phase)) / 1000) * 1000;
    const travelled = Math.max(0, vehicle.km - lastService);
    const remaining = rule.intervalKm - (travelled % rule.intervalKm);
    const ratio = remaining / rule.intervalKm;
    const status = ratio <= 0.12 ? 'due' : ratio <= 0.3 ? 'soon' : 'ok';
    return { ...rule, remaining, ratio, status, parts: rule.partIds.map(findPart).filter(Boolean) };
  }).sort((a, b) => a.remaining - b.remaining);
}

export function orderReference(seed = Date.now()) {
  const base = Math.abs(Math.floor(seed)).toString(36).toUpperCase().padStart(8, '0').slice(-8);
  return `ML-${base}`;
}

export const I18N = {
  fr: {
    home: 'Accueil', catalog: 'Catalogue', garage: 'Garage', orders: 'Commandes', profile: 'Profil',
    search: 'Rechercher une pièce, une réf OEM, une marque…', assistant: 'VIN / IA',
    sos: 'SOS 24/7', favorites: 'Favoris', cart: 'Panier', myCars: 'Mes autos',
    add: 'Ajouter', added: 'Ajouté au panier', viewAll: 'Voir tout', results: 'résultats',
    compatible: 'Compatible', inStock: 'en stock', checkout: 'Payer', total: 'Total',
    delivery: 'Livraison', subtotal: 'Sous-total', continue: 'Continuer', close: 'Fermer',
    due: 'À faire', soon: 'Bientôt', ok: 'OK', km: 'km', welcome: 'Bonjour, Mo 👋',
    tagline: 'La bonne pièce. Au bon endroit. Sur votre route.',
    demo: 'Démo — données fictives', emptyCart: 'Votre panier est vide',
  },
  en: {
    home: 'Home', catalog: 'Catalog', garage: 'Garage', orders: 'Orders', profile: 'Profile',
    search: 'Search a part, OEM ref, brand…', assistant: 'VIN / AI',
    sos: 'SOS 24/7', favorites: 'Favorites', cart: 'Cart', myCars: 'My cars',
    add: 'Add', added: 'Added to cart', viewAll: 'See all', results: 'results',
    compatible: 'Fits', inStock: 'in stock', checkout: 'Pay', total: 'Total',
    delivery: 'Delivery', subtotal: 'Subtotal', continue: 'Continue', close: 'Close',
    due: 'Due', soon: 'Soon', ok: 'OK', km: 'km', welcome: 'Hello, Mo 👋',
    tagline: 'The right part. In the right place. On your road.',
    demo: 'Demo — fictional data', emptyCart: 'Your cart is empty',
  },
};

export function translator(lang = 'fr') {
  const dict = I18N[lang] ?? I18N.fr;
  return (key) => dict[key] ?? I18N.fr[key] ?? key;
}
