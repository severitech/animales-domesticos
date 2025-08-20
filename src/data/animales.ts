type Animal = {
  nombre: string;
  imagen: string;
  color: string;
  datosCuriosos: string[];
  cuidados: string;
  esperanzaVida: string;
  origen: string;
  razas: string;
  inteligencia: string;
  nutricion: string;
  ejercicio: string;
  salud: string;
  comportamiento: string;
  nutricionSnippet?: string;
};

const ANIMALES_BASE: Animal[] = [
  {
    nombre: "Perros",
    imagen: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
    color: "bg-sky-500",
    datosCuriosos: [
      "Los perros pueden aprender más de 150 palabras y algunos hasta 250",
      "Su sentido del olfato es 40 veces mejor que el nuestro",
      "Pueden detectar enfermedades como diabetes y cáncer en humanos",
      "Los perros sueñan igual que los humanos durante el sueño REM",
      "Pueden ver algunos colores, especialmente azul y amarillo",
      "Su nariz es única como nuestras huellas dactilares",
      "Los perros pueden leer las emociones humanas en nuestras caras",
      "Tienen tres párpados: superior, inferior y uno protector",
    ],
    cuidados:
      "Necesitan ejercicio diario (30-120 min según raza), alimentación balanceada 2-3 veces al día, agua fresca, cepillado regular, visitas veterinarias anuales y mucho amor y socialización",
    esperanzaVida: "10-15 años",
    origen: "Domesticados hace más de 15,000 años a partir de lobos",
    razas: "Más de 340 razas reconocidas mundialmente",
    inteligencia: "Tercera especie más inteligente después de humanos y primates",
    nutricion:
      "Requieren proteínas (18-25%), grasas (8-15%), carbohidratos, vitaminas y minerales. Evitar chocolate, uvas, cebolla y ajo que son tóxicos",
    ejercicio:
      "Razas pequeñas: 30-60 min/día. Razas medianas: 60-90 min/día. Razas grandes: 90-120 min/día",
    salud:
      "Vacunas anuales, desparasitación cada 3-6 meses, revisión dental, control de peso, chequeos geriátricos después de los 7 años",
    comportamiento:
      "Animales de manada, necesitan jerarquía clara, socialización temprana, entrenamiento positivo y rutinas consistentes",
  },
  {
    nombre: "Gatos",
    imagen: "https://images.pexels.com/photos/18060316/pexels-photo-18060316.jpeg",
    color: "bg-emerald-500",
    datosCuriosos: [
      "Los gatos duermen entre 12-16 horas al día para conservar energía",
      "Pueden hacer más de 100 sonidos diferentes (los perros solo 10)",
      "Sus bigotes les ayudan a medir espacios y detectar cambios de aire",
      "Pueden rotar sus orejas 180 grados independientemente",
      "Su ronroneo tiene frecuencias que ayudan a sanar huesos",
      "Pueden saltar hasta 6 veces su altura corporal",
      "Los gatos tienen un órgano especial para 'saborear' olores",
      "Pueden correr hasta 48 km/h en distancias cortas",
    ],
    cuidados:
      "Requieren caja de arena limpia diariamente, alimentación 2-3 veces al día, agua fresca, juguetes para estimulación mental, espacios para trepar y esconderse, cepillado regular",
    esperanzaVida: "12-18 años ",
    origen: "Domesticados hace 9,000 años en el Medio Oriente",
    razas: "Más de 40 razas reconocidas oficialmente",
    inteligencia:
      "Excelente memoria a largo plazo y habilidades de resolución de problemas",
    nutricion:
      "Carnívoros obligados, necesitan taurina, proteína alta (26-30%), grasas moderadas, evitar lácteos, cebolla, ajo y plantas tóxicas",
    ejercicio:
      "15-30 minutos de juego activo diario, juguetes interactivos, rascadores, espacios verticales para trepar",
    salud:
      "Vacunas anuales, control dental, revisión renal después de los 7 años, prevención de bolas de pelo, esterilización recomendada",
    comportamiento:
      "Territoriales, independientes pero sociales, necesitan rutinas, marcan territorio, comunicación vocal y corporal compleja",
  },
  {
    nombre: "Conejos",
    imagen: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg",
    color: "bg-purple-500",
    datosCuriosos: [
      "Sus dientes nunca dejan de crecer, por eso necesitan roer constantemente",
      "Pueden saltar hasta 1 metro de altura y 3 metros de longitud",
      "Son animales muy sociales que necesitan compañía",
      "Pueden vivir hasta 12 años con cuidados adecuados",
      "Tienen una visión de casi 360 grados",
      "Pueden correr hasta 50 km/h cuando huyen del peligro",
      "Practican cecotrofia: comen sus propias heces especiales para obtener nutrientes",
      "Sus orejas pueden medir hasta 10 cm y regular su temperatura corporal",
    ],
    cuidados:
      "Necesitan heno fresco ilimitado, pellets de calidad, verduras frescas diarias, agua limpia, espacio amplio para correr y saltar, juguetes para roer, compañía social",
    esperanzaVida: "8-12 años",
    origen: "Domesticados por los romanos hace 2,000 años",
    razas: "Más de 50 razas reconocidas mundialmente",
    inteligencia: "Pueden aprender su nombre y trucos simples, muy curiosos",
    nutricion:
      "80% heno timothy, 10-15% verduras frescas, 5% pellets de calidad, evitar lechuga iceberg, aguacate y semillas",
    ejercicio:
      "Mínimo 3-4 horas diarias fuera de la jaula, espacio para correr, saltar y explorar, juguetes para masticar",
    salud:
      "Esterilización recomendada, cuidado dental constante, vacunas según región, prevención de estasis gastrointestinal",
    comportamiento:
      "Muy sociales, necesitan compañía de otros conejos o mucha atención humana, territoriales, comunicación por postura corporal",
  },
  {
    nombre: "Peces",
    imagen: "https://images.pexels.com/photos/2053815/pexels-photo-2053815.jpeg",
    color: "bg-cyan-500",
    datosCuriosos: [
      "Algunos peces pueden reconocer a sus dueños y responder a su presencia",
      "Tienen memoria de meses, no solo 3 segundos como se cree",
      "Pueden vivir muchos años: goldfish hasta 20 años, algunos koi más de 100",
      "Sienten dolor y estrés igual que otros animales",
      "Algunos pueden aprender trucos y navegar laberintos",
      "Los peces dorados pueden ver más colores que los humanos",
      "Pueden comunicarse mediante sonidos y señales químicas",
      "Algunos peces cambian de sexo según las condiciones ambientales",
    ],
    cuidados:
      "Requieren agua limpia con filtración adecuada, temperatura estable según especie, alimentación balanceada sin sobrealimentar, plantas y decoración, espacio suficiente para nadar",
    esperanzaVida: "2-20 años",
    origen: "Peces ornamentales desde hace 4,000 años en China",
    razas: "Miles de especies, desde goldfish hasta peces exóticos",
    inteligencia: "Pueden reconocer formas, colores y aprender rutinas alimentarias",
    nutricion:
      "Alimento específico por especie, alimentar 1-2 veces al día, cantidad que consuman en 2-3 minutos, variedad con escamas, pellets y alimento vivo",
    ejercicio:
      "Espacio adecuado para nadar (mínimo 40L para goldfish), decoración para explorar, corrientes de agua moderadas",
    salud:
      "Calidad del agua crítica (pH, temperatura, amoníaco), cuarentena para peces nuevos, observación diaria de comportamiento",
    comportamiento:
      "Muchas especies son sociales, necesitan cardúmenes, establecen jerarquías, algunos construyen nidos y cuidan crías",
  },
  {
    nombre: "Hamsters",
    imagen: "https://images.pexels.com/photos/3586056/pexels-photo-3586056.jpeg",
    color: "bg-pink-500",
    datosCuriosos: [
      "Son nocturnos y más activos durante la noche",
      "Pueden almacenar comida en sus mejillas hasta duplicar el tamaño de su cabeza",
      "Corren hasta 8 km por noche en su rueda",
      "Tienen muy buena memoria espacial y pueden recordar túneles complejos",
      "Se comunican mediante ultrasonidos que los humanos no pueden oír",
      "Pueden vivir hasta 3-4 años con cuidados adecuados",
      "Sus dientes crecen continuamente y necesitan roer para desgastarlos",
      "Pueden hibernar en temperaturas muy frías",
    ],
    cuidados:
      "Necesitan jaula espaciosa con rueda, sustrato absorbente, comida balanceada, agua fresca, juguetes para roer, temperatura estable 18-24°C, limpieza semanal",
    esperanzaVida: "2-4 años",
    origen: "Descubiertos en Siria en 1930, todos los hamsters domésticos descienden de una familia",
    razas: "Sirio, enano ruso, roborovski, chino",
    inteligencia: "Pueden aprender su nombre y reconocer rutinas diarias",
    nutricion:
      "Mezcla de semillas de calidad, pequeñas cantidades de frutas y verduras, evitar cítricos y alimentos pegajosos, agua fresca diaria",
    ejercicio:
      "Rueda de ejercicio apropiada para su tamaño, túneles, laberintos, tiempo supervisado fuera de la jaula",
    salud:
      "Propensos a diabetes, problemas dentales, tumores, mantener temperatura estable, evitar corrientes de aire",
    comportamiento:
      "Solitarios (sirios), algunos enanos pueden vivir en parejas, territoriales, acumulan comida, muy activos de noche",
  },
  {
    nombre: "Aves",
    imagen: "https://images.pexels.com/photos/849218/pexels-photo-849218.jpeg",
    color: "bg-teal-500",
    datosCuriosos: [
      "Algunas especies pueden vivir más de 100 años",
      "Los loros pueden aprender cientos de palabras y usarlas en contexto",
      "Tienen huesos huecos que les permiten volar eficientemente",
      "Pueden ver colores ultravioleta que los humanos no perciben",
      "Son muy sociales y necesitan interacción constante",
      "Algunas especies pueden resolver problemas complejos y usar herramientas",
      "Su corazón late hasta 1,000 veces por minuto durante el vuelo",
      "Pueden imitar no solo sonidos sino también entonaciones y emociones",
    ],
    cuidados:
      "Requieren jaula amplia, dieta variada con frutas y verduras, interacción social diaria, juguetes para estimulación mental, luz natural, ambiente sin corrientes de aire",
    esperanzaVida: "5-100+ años",
    origen: "Domesticación varía por especie, algunas desde hace miles de años",
    razas: "Canarios, periquitos, loros, cacatúas, agapornis",
    inteligencia:
      "Entre los animales más inteligentes, pueden resolver puzzles y comunicarse",
    nutricion:
      "Pellets de alta calidad (75%), frutas y verduras frescas (20%), semillas como premio (5%), evitar aguacate, chocolate, cafeína",
    ejercicio:
      "Mínimo 2-3 horas fuera de la jaula diariamente, vuelo supervisado, juguetes rotativos, interacción social constante",
    salud:
      "Muy sensibles a vapores tóxicos, necesitan 10-12 horas de sueño, revisiones veterinarias especializadas, cuidado del plumaje",
    comportamiento:
      "Extremadamente sociales, necesitan compañía constante, establecen vínculos fuertes, pueden desarrollar problemas de comportamiento por soledad",
  },
];

export const ANIMALES: Animal[] = ANIMALES_BASE.map(a => ({
  ...a,
  nutricionSnippet: a.nutricion.length > 80 ? a.nutricion.slice(0, 80) + "..." : a.nutricion
}));