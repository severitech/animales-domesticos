import  { useEffect, useMemo, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Sphere, Box } from "@react-three/drei";
import { ANIMALES } from "../data/animales";

const PREGUNTAS_QUIZ = [
  {
    pregunta: "¿Cuántas horas duermen los gatos al día?",
    opciones: ["8-10 horas", "12-16 horas", "20-22 horas"],
    correcta: 1,
    explicacion:
      "Los gatos duermen tanto para conservar energía para la caza, aunque sean domésticos mantienen este instinto.",
  },
  {
    pregunta: "¿Cuántas palabras pueden aprender los perros más inteligentes?",
    opciones: ["Más de 50", "Más de 150", "Más de 250"],
    correcta: 2,
    explicacion:
      "Border Collies y otras razas pueden aprender hasta 250 palabras y comandos.",
  },
  {
    pregunta: "¿Para qué usan los gatos sus bigotes?",
    opciones: [
      "Solo decoración",
      "Medir espacios y detectar aire",
      "Para verse más bonitos",
    ],
    correcta: 1,
    explicacion:
      "Los bigotes son sensores muy sensibles que les ayudan a navegar y detectar cambios en el ambiente.",
  },
  {
    pregunta: "¿Cuánto pueden saltar los conejos en longitud?",
    opciones: ["1 metro", "2 metros", "3 metros"],
    correcta: 2,
    explicacion: "Pueden saltar hasta 3 metros de longitud cuando huyen.",
  },
  {
    pregunta: "¿Cuánto tiempo pueden vivir los peces dorados?",
    opciones: ["2-3 años", "5-8 años", "15-20 años"],
    correcta: 2,
    explicacion: "Con cuidados adecuados, los goldfish pueden vivir décadas.",
  },
];

/** ==========================
 *  Subparte 3D (simple/ligero)
 *  ========================== */
function HeaderThree() {
  return (
    <div className="absolute inset-0 h-64 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 1.5]}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <Environment preset="sunset" resolution={256} />
          <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Sphere args={[0.3]} position={[-2, 0, 0]}>
                <meshStandardMaterial color="#0ea5e9" />
              </Sphere>
            </Float>
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
              <Box args={[0.4, 0.4, 0.4]} position={[2, 0, 0]}>
                <meshStandardMaterial color="#10b981" />
              </Box>
            </Float>
            <Float speed={2.5} rotationIntensity={0.7} floatIntensity={0.6}>
              <Sphere args={[0.2]} position={[0, 1.5, 0]}>
                <meshStandardMaterial color="#8b5cf6" />
              </Sphere>
            </Float>
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

/** =========================
 *  ÚNICO COMPONENTE PRINCIPAL
 *  ========================= */
export default function MascotasApp() {
  const [animalActual, setAnimalActual] = useState(0);
  const [mostrarQuiz, setMostrarQuiz] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimalActual((prev) => (prev + 1) % ANIMALES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const animal = ANIMALES[animalActual];

  const porcentaje = useMemo(
    () => (puntuacion / PREGUNTAS_QUIZ.length) * 100,
    [puntuacion]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white  to-sky-50">
      <header className="relative overflow-hidden text-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-200 to-white">
        <HeaderThree />
        <div className="relative z-10 animate-fade-slide">
          <div className="inline-block p-6 bg-white backdrop-blur-xl rounded-2xl shadow-2xl mb-6">
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-sky-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2 font-serif">
              Mundo Animal Doméstico
            </h1>
            <p className="text-xl md:text-2xl text-sky-700 font-semibold">
              Presentado por: Catalina Severiche
            </p>
          </div>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto bg-white backdrop-blur-md rounded-lg p-4 shadow transition-all hover:shadow-lg">
            Explora el fascinante mundo de nuestras mascotas favoritas con
            información detallada y efectos interactivos
          </p>
        </div>
      </header>

      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8  ">
        <div className=" backdrop-blur-lg rounded-3xl shadow-2xl max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 mb-6 font-serif leading-tight">
                {animal.nombre}
              </h2>

              <div className="space-y-4 mb-8">
                <span
                  className={`${animal.color} text-white text-sm inline-flex px-4 py-2 rounded-full shadow`}
                >
                  Esperanza de vida: {animal.esperanzaVida}
                </span>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {animal.datosCuriosos[0]}
                </p>
              </div>

              <div className="flex justify-center lg:justify-start gap-2">
                {ANIMALES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAnimalActual(i)}
                    aria-label={`Ir a ${ANIMALES[i].nombre}`}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      i === animalActual
                        ? "bg-sky-500 scale-125 shadow-md"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
              <div className="animate-[float_6s_ease-in-out_infinite]">
                <img
                  src={animal.imagen}
                  alt={animal.nombre}
                  className="w-full max-h-[320px] sm:max-h-[380px] object-cover rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                <div className="text-4xl">🏆</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ANIMALES.map((a) => (
            <div
              key={a.nombre}
              className=" shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white rounded-xl border border-gray-200"
              onClick={() =>
                setAnimalActual(
                  ANIMALES.findIndex((x) => x.nombre === a.nombre)
                )
              }
            >
              <div className="relative">
                <img
                  src={a.imagen}
                  alt={a.nombre}
                  className="w-full h-48 object-cover rounded-t-xl"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`${a.color} text-white text-xs inline-flex px-2 py-1 rounded-full`}
                  >
                    {a.razas}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-sky-600 font-serif flex items-center gap-2">
                  {a.nombre}
                  <span className="text-2xl">
                    {a.nombre === "Perros"
                      ? "🐕"
                      : a.nombre === "Gatos"
                      ? "🐱"
                      : a.nombre === "Conejos"
                      ? "🐰"
                      : a.nombre === "Peces"
                      ? "🐠"
                      : a.nombre === "Hamsters"
                      ? "🐹"
                      : "🦜"}
                  </span>
                </h3>
                <div className="space-y-2 mt-3 text-sm text-gray-600">
                  <p>
                    <strong>Origen:</strong> {a.origen}
                  </p>
                  <p>
                    <strong>Inteligencia:</strong> {a.inteligencia}
                  </p>
                  <p>
                    <strong>Nutrición:</strong> {a.nutricionSnippet}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-sky-600 font-serif">
            📚 Guía Completa de Cuidados
          </h2>
          <div className="space-y-4">
            {ANIMALES.map((a, idx) => {
              const [open, setOpen] = useState(false); 
              return null;
            })}
          </div>
          <AcordeonTodo />
        </div>
      </section>
      <section className="py-12 px-4 bg-gradient-to-br from-sky-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          {!mostrarQuiz ? (
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-2xl">
              <div className="text-7xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-sky-600">
                Quiz Interactivo sobre Mascotas
              </h3>
              <p className="text-lg mb-6 text-gray-700">
                Descubre qué tanto sabes sobre el cuidado y características
              </p>
              <button
                onClick={() => setMostrarQuiz(true)}
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-transform duration-300 hover:scale-105 shadow-lg"
              >
                🚀 Comenzar Quiz
              </button>
            </div>
          ) : (
            <Quiz
              preguntas={PREGUNTAS_QUIZ}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
              alReiniciar={() => setMostrarQuiz(false)}
            />
          )}
        </div>
      </section>
      <footer className="bg-gradient-to-r from-sky-500 to-emerald-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="text-2xl font-bold mb-2 font-serif">
                Catalina Severiche
              </h3>
              <p className="text-lg opacity-90">Proyecto Escolar</p>
              <p className="text-sm opacity-75 mt-2">
                Animales Domésticos - 2025
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">
                🎯 Objetivos del Proyecto
              </h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Educar sobre el cuidado responsable</li>
                <li>• Promover el amor por los animales</li>
                <li>• Compartir datos fascinantes</li>
                <li>• Crear conciencia sobre bienestar animal</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">
                💡 Datos Increíbles
              </h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>🐕 Los perros pueden detectar enfermedades</p>
                <p>🐱 Los gatos tienen 32 músculos en cada oreja</p>
                <p>🐰 Los conejos pueden ver detrás de ellos</p>
                <p>🐠 Los peces pueden reconocer caras humanas</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-lg font-medium">
              Los animales son nuestros mejores amigos y merecen todo nuestro
              amor y cuidado 💖
            </p>
            {/* <p className="text-sm opacity-75 mt-2">
              Desarrollado por{" "}
              <a
                href="https://github.com/severitech"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white"
              >
                Douglas Padilla
              </a>
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

/** =========================
 *  Acordeón (una sola pieza)
 *  ========================= */
function AcordeonTodo() {
  const [abierto, setAbierto] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {ANIMALES.map((a, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-lg border-2 border-sky-200 overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-4 hover:bg-sky-50 flex items-center gap-4"
            onClick={() => setAbierto(abierto === i ? null : i)}
            aria-expanded={abierto === i}
          >
            <img
              src={a.imagen}
              alt={a.nombre}
              className="w-16 h-16 object-cover rounded-full shadow-md"
              loading="lazy"
            />
            <div>
              <span className="text-xl font-semibold text-sky-600 font-serif">
                Todo sobre {a.nombre}
              </span>
              <p className="text-sm text-gray-600">{a.esperanzaVida}</p>
            </div>
            <span className="ml-auto text-sky-600 text-xl">
              {abierto === i ? "−" : "+"}
            </span>
          </button>

          {abierto === i && (
            <div className="px-6 py-6 bg-gradient-to-br from-sky-50/50 to-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Bloque
                    titulo="🏠 Cuidados Esenciales:"
                    color="text-sky-600"
                    texto={a.cuidados}
                  />
                  <Bloque
                    titulo="🥗 Nutrición Especializada:"
                    color="text-emerald-600"
                    texto={a.nutricion}
                  />
                  <Bloque
                    titulo="🏃‍♂️ Ejercicio y Actividad:"
                    color="text-purple-600"
                    texto={a.ejercicio}
                  />
                </div>
                <div className="space-y-6">
                  <Bloque
                    titulo="🏥 Salud y Prevención:"
                    color="text-red-600"
                    texto={a.salud}
                  />
                  <Bloque
                    titulo="🧠 Comportamiento Natural:"
                    color="text-indigo-600"
                    texto={a.comportamiento}
                  />
                  <div>
                    <h4 className="font-semibold text-sky-600 mb-3 text-lg">
                      📊 Información General:
                    </h4>
                    <div className="space-y-2 text-sm bg-white/70 p-4 rounded-lg">
                      <p>
                        <strong>Esperanza de vida:</strong> {a.esperanzaVida}
                      </p>
                      <p>
                        <strong>Origen:</strong> {a.origen}
                      </p>
                      <p>
                        <strong>Razas:</strong> {a.razas}
                      </p>
                      <p>
                        <strong>Inteligencia:</strong> {a.inteligencia}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-sky-600 mb-4 text-lg">
                  ✨ Datos Fascinantes:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {a.datosCuriosos.map((dato, k) => (
                    <div
                      key={k}
                      className="flex items-start gap-3 text-gray-700 text-sm bg-gradient-to-r from-sky-50 to-purple-50 p-3 rounded-lg"
                    >
                      <span className="text-sky-600 text-lg">🌟</span>
                      <span className="leading-relaxed">{dato}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Bloque({
  titulo,
  color,
  texto,
}: {
  titulo: string;
  color: string;
  texto: string;
}) {
  return (
    <div>
      <h4 className={`font-semibold ${color} mb-3 text-lg`}>{titulo}</h4>
      <p className="text-gray-700 leading-relaxed">{texto}</p>
    </div>
  );
}

/** =============
 *  Quiz inline
 *  ============= */
function Quiz({
  preguntas,
  puntuacion,
  setPuntuacion,
  alReiniciar,
}: {
  preguntas: typeof PREGUNTAS_QUIZ;
  puntuacion: number;
  setPuntuacion: (n: number) => void;
  alReiniciar: () => void;
}) {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<
    number | null
  >(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [quizCompleto, setQuizCompleto] = useState(false);

  const manejar = (i: number) => {
    setRespuestaSeleccionada(i);
    setMostrarResultado(true);
    if (i === preguntas[preguntaActual].correcta) setPuntuacion(puntuacion + 1);
    setTimeout(() => {
      if (preguntaActual < preguntas.length - 1) {
        setPreguntaActual(preguntaActual + 1);
        setRespuestaSeleccionada(null);
        setMostrarResultado(false);
      } else {
        setQuizCompleto(true);
      }
    }, 1200);
  };

  const reiniciar = () => {
    setPreguntaActual(0);
    setRespuestaSeleccionada(null);
    setMostrarResultado(false);
    setQuizCompleto(false);
    setPuntuacion(0);
    alReiniciar();
  };

  if (quizCompleto) {
    const porcentaje = (puntuacion / preguntas.length) * 100;
    return (
      <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-2xl">
        <div className="text-7xl mb-4">
          {porcentaje >= 80
            ? "🏆"
            : porcentaje >= 60
            ? "🎉"
            : porcentaje >= 40
            ? "👏"
            : "🤔"}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-sky-600 font-serif">
          ¡Quiz Completado!
        </h3>
        <p className="text-xl mb-4">
          Tu puntuación:{" "}
          <span className="font-bold text-sky-600">
            {puntuacion}/{preguntas.length}
          </span>
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-gradient-to-r from-emerald-400 to-sky-600 h-3 rounded-full transition-all"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
        <button
          onClick={reiniciar}
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105"
        >
          🔄 Intentar de Nuevo
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-2xl text-left">
      <div className="mb-4 flex justify-between items-center">
        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          Pregunta {preguntaActual + 1} de {preguntas.length}
        </span>
        <span className="text-sm text-sky-600 font-semibold bg-sky-100 px-3 py-1 rounded-full">
          Puntuación: {puntuacion} 🏆
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        {preguntas[preguntaActual].pregunta}
      </h3>

      <div className="space-y-3 mb-4">
        {preguntas[preguntaActual].opciones.map((op, i) => {
          const estado = mostrarResultado
            ? i === preguntas[preguntaActual].correcta
              ? "bg-emerald-500 text-white"
              : i === respuestaSeleccionada
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-600"
            : "bg-white border-2 border-gray-200 text-gray-800 hover:border-sky-500 hover:bg-sky-50";
          return (
            <button
              key={i}
              onClick={() => !mostrarResultado && manejar(i)}
              disabled={mostrarResultado}
              className={`w-full p-4 text-left justify-start rounded-lg ${estado}`}
            >
              <span className="mr-3 font-bold">
                {String.fromCharCode(65 + i)}.
              </span>
              {op}
            </button>
          );
        })}
      </div>

      {mostrarResultado && (
        <div className="mt-4 p-4 rounded-xl text-center bg-gradient-to-br from-sky-50 to-purple-50">
          {respuestaSeleccionada === preguntas[preguntaActual].correcta ? (
            <div className="text-emerald-600">
              <div className="text-3xl mb-2">✅</div>
              <p className="font-semibold">¡Correcto!</p>
            </div>
          ) : (
            <div className="text-red-600">
              <div className="text-3xl mb-2">❌</div>
              <p className="font-semibold">Incorrecto</p>
            </div>
          )}
          <div className="mt-3 p-3 bg-white/80 rounded-lg text-sm text-gray-700">
            <p className="text-sky-700 font-medium mb-1">💡 Explicación:</p>
            <p>{preguntas[preguntaActual].explicacion}</p>
          </div>
        </div>
      )}
    </div>
  );
}
