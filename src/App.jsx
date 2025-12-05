// Proyecto Ambiental React - Archivo único corregido y mejorado
// Este archivo contiene TODOS los componentes en un solo módulo.
// Importa React una sola vez para evitar el error "Identifier 'React' has already been declared".
// Asegúrate de usar este archivo como `App.jsx` (o adaptarlo a `App.tsx` si usas TypeScript).

import React from "react";

// -----------------------------------------------------------------------------
// Datos iniciales (puedes cambiarlos o moverlos a un archivo separado)
// -----------------------------------------------------------------------------
const proyectos = [
  {
    titulo: "Barriendo calles",
    descripcion: "Actividad de limpieza y mantenimiento de zonas urbanas.",
    imagen: "trabajo5.jpg",
    claseImagen: "w-full h-64 object-cover rounded-lg" // nueva clase para imagen más grande
  },
  {
    titulo: "Regando plantas",
    descripcion: "Cuidado y mantenimiento de áreas verdes de la comunidad.",
    imagen: "trabajo4.jpg",
    claseImagen: "w-full h-64 object-cover rounded-lg"
  },
  {
    titulo: "Recogiendo basura de las calles",
    descripcion: "Jornadas para eliminar desechos y mejorar el espacio público.",
    imagen: "trabajo2.jpg",
    claseImagen: "w-full h-64 object-cover rounded-lg"
  }
];

const faqItems = [
  { q: "¿Cómo puedo unirme al proyecto?", a: "Solo contáctanos en la sección de contacto." },
  { q: "¿Necesito experiencia previa?", a: "No, cualquier persona puede participar." },
  { q: "¿Qué actividades realizan?", a: "Limpieza, reciclaje, cuidado de áreas verdes, campañas educativas y más." }
];

// -----------------------------------------------------------------------------
// COMPONENTES
// -----------------------------------------------------------------------------

import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow z-50 px-8 py-4 flex justify-between items-center animate-fade-down">

      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-green-700 tracking-tight">
        Proyecto Ambiental
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <a href="#objetivo" className="hover:text-green-600 transition">Objetivo</a>
        <a href="#realizados" className="hover:text-green-600 transition">Realizados</a>
        <a href="#porrealizar" className="hover:text-green-600 transition">Por Realizar</a>
        <a href="#integrantes" className="hover:text-green-600 transition">Integrantes</a>
        <a href="#galeria" className="hover:text-green-600 transition">Galería</a>
        <a href="#contacto" className="hover:text-green-600 transition">Contacto</a>
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-green-700 text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden animate-fade-down">
          <div className="flex flex-col items-center text-lg py-4 space-y-4 font-medium">
            <a href="#objetivo" className="hover:text-green-600" onClick={() => setOpen(false)}>Objetivo</a>
            <a href="#realizados" className="hover:text-green-600" onClick={() => setOpen(false)}>Realizados</a>
            <a href="#porrealizar" className="hover:text-green-600" onClick={() => setOpen(false)}>Por Realizar</a>
            <a href="#integrantes" className="hover:text-green-600" onClick={() => setOpen(false)}>Integrantes</a>
            <a href="#galeria" className="hover:text-green-600" onClick={() => setOpen(false)}>Galería</a>
            <a href="#contacto" className="hover:text-green-600" onClick={() => setOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-10 pt-32 pb-20 bg-gradient-to-br from-green-200 via-green-100 to-white animate-fade-up">

      {/* Columna de texto */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 leading-tight drop-shadow">
          Cuidemos el planeta,
          <span className="block text-green-900 mt-2">Juntos.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mt-6 leading-relaxed">
          Somos un grupo comprometido con la protección del medio ambiente.
          Trabajamos con dedicación para transformar nuestra comunidad a través
          de proyectos ecológicos y acciones responsables.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#realizados"
            className="px-7 py-3 bg-green-600 text-white font-medium rounded-xl shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="px-7 py-3 border border-green-700 text-green-700 font-medium rounded-xl hover:bg-green-50 shadow-lg transition transform hover:-translate-y-1"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Imagen decorativa */}
      <div className="relative">
        <img
          src="lolg.png"
          alt="Planeta Tierra"
          className="w-72 md:w-96 drop-shadow-2xl animate-fade-up"
        />

        {/* Glow decorativo */}
        <div className="absolute inset-0 bg-green-300 opacity-20 blur-3xl rounded-full -z-10"></div>
      </div>
    </section>
  );
}

function Objetivo() {
  return (
    <section
      id="objetivo"
      className="py-24 px-10 bg-gradient-to-br from-green-50 to-white animate-fade-up"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Nuestro Objetivo
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Buscamos fomentar una cultura de responsabilidad ambiental
            mediante proyectos sostenibles que involucren a nuestra comunidad.
            Nuestro grupo trabaja para proteger áreas verdes, reducir la
            contaminación y educar sobre la importancia del cuidado de la naturaleza.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

            {/* Mini objetivos */}
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 bg-green-100 text-green-700 flex items-center justify-center rounded-xl text-xl shadow">
                🌱
              </div>
              <p className="text-gray-700">
                Promover acciones eco-amigables.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-10 w-10 bg-green-100 text-green-700 flex items-center justify-center rounded-xl text-xl shadow">
                ♻️
              </div>
              <p className="text-gray-700">
                Implementar proyectos de reciclaje y conservación.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-10 w-10 bg-green-100 text-green-700 flex items-center justify-center rounded-xl text-xl shadow">
                🌍
              </div>
              <p className="text-gray-700">
                Crear conciencia ambiental en estudiantes y vecinos.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-10 w-10 bg-green-100 text-green-700 flex items-center justify-center rounded-xl text-xl shadow">
                🌿
              </div>
              <p className="text-gray-700">
                Proteger áreas verdes mediante acciones colectivas.
              </p>
            </div>

          </div>
        </div>

        {/* Imagen decorativa */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="iki.png"
              alt="Objetivo ambiental"
              className="w-80 md:w-96 drop-shadow-xl animate-fade-up"
            />

            {/* Resplandor decorativo */}
            <div className="absolute inset-0 bg-green-200 blur-3xl opacity-30 rounded-full -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
}


function ProyectosRealizados() {
  return (
    <section id="realizados" className="py-20 px-10 bg-green-50 animate-fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-10">Proyectos Realizados</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {proyectos.map((p, index) => (
            <article key={index} className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition transform">
              {/* Espacio para tu imagen: reemplaza el div por <img src={p.imagen} alt={p.titulo} /> cuando subas imágenes */}
              <div className="h-40 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {p.imagen ? (
                  <img src={p.imagen} alt={p.titulo} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-500">Imagen {index + 1} (pon tu URL aquí)</span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-green-700">{p.titulo}</h3>
              <p className="text-gray-600 mt-2">{p.descripcion}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-green-600 font-semibold">Completado</span>
                <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition">Ver más</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProyectosPorRealizar() {
  const proyectos = [
    {
      titulo: "Campaña escolar de reciclaje",
      desc: "Promoveremos la correcta separación de residuos en instituciones educativas.",
    },
    {
      titulo: "Reforestación en parques locales",
      desc: "Plantaremos árboles y plantas nativas en áreas verdes de la comunidad.",
    },
    {
      titulo: "Charlas sobre cuidado ambiental",
      desc: "Capacitaciones dirigidas a estudiantes y familias sobre prácticas sostenibles.",
    },
    {
      titulo: "Instalación de contenedores ecológicos",
      desc: "Colocaremos puntos de reciclaje accesibles en lugares estratégicos.",
    },
  ];

  return (
    <section
      id="porrealizar"
      className="py-20 px-10 bg-gradient-to-b from-white to-green-50 animate-fade-up"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Próximos Proyectos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {proyectos.map((p, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-green-900">
                  {p.titulo}
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrantes() {
  const miembros = [
    { nombre: "Sheyla", rol: "Fernandez Cusi", img: "grupo6.jpg" },
    { nombre: "Josue", rol: "Flores Pacaya", img: "grupo2.jpg" },
    { nombre: "Amira", rol: "Espinoza Godoy", img: "grupo1.jpg" },
    { nombre: "Heydi", rol: "Castro Chirinos", img: "grupo4.jpg" },
    { nombre: "Milagros", rol: "Becerra Murrugarra", img: "grupo3.jpg" }
  ];

  return (
    <section id="integrantes" className="py-20 px-10 bg-green-50 animate-fade-up">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Nuestro Equipo
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Conoce al equipo detrás de nuestras acciones ambientales. 
          Cada integrante aporta talento, dedicación y pasión por un futuro más verde.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center">
          {miembros.map((m, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                         border border-transparent hover:border-green-200"
            >

              {/* Foto circular */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={m.img}
                  alt={m.nombre}
                  className="w-full h-full object-cover rounded-full shadow-md 
                             transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => (e.target.src = "/team/default.jpg")}
                />

                {/* Anillo decorativo animado */}
                <div className="absolute inset-0 rounded-full border-2 border-green-300 
                                opacity-0 group-hover:opacity-100 group-hover:scale-110 
                                transition-all duration-300"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-green-900">{m.nombre}</h3>
              <p className="text-sm text-gray-600 mt-1">{m.rol}</p>

              {/* Línea decorativa */}
              <div className="h-1 w-10 bg-green-300 mx-auto mt-4 rounded-full 
                              opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// Importa las imágenes desde src/assets (o la carpeta que uses)
import trabajo2 from "/trabajo2.jpg";
import trabajo3 from "/trabajo3.jpg";
import trabajo4 from "/trabajo4.jpg";
import trabajo5 from "/trabajo5.jpg";
import trabajo6 from "/trabajo6.jpg";
import trabajo8 from "/trabajo8.jpg";

function Galeria() {
  const imagenes = [
    { id: 1, titulo: "Reforestación", desc: "Riego de plantas en zonas urbanas.", img: trabajo4 },
    { id: 2, titulo: "Campaña de reciclaje", desc: "Estudiantes participando activamente.", img: trabajo2 },
    { id: 3, titulo: "Limpieza comunitaria", desc: "Recojo de residuos en parques.", img: trabajo3 },
    { id: 4, titulo: "Limpieza de calles abandonadas", desc: "Recojo de residuos.", img: trabajo5 },
    { id: 5, titulo: "Limpieza de veredas", desc: "Recojo de residuos.", img: trabajo6 },
    { id: 6, titulo: "Limpieza de calles", desc: "Recojo de residuos.", img: trabajo8 },
  ];

  return (
    <section id="galeria" className="py-20 px-10 bg-white animate-fade-up">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Galería de Actividades
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Un vistazo a nuestras acciones por el medio ambiente, demostrando el compromiso de nuestra comunidad.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {imagenes.map((img) => (
            <div
              key={img.id}
              className="relative group rounded-2xl shadow-lg overflow-hidden bg-gray-200 h-64 cursor-pointer"
            >
              {/* Imagen con efecto de zoom */}
              <img
                src={img.img}
                alt={img.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

          
              {/* Texto al hacer hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                <h3 className="text-white text-xl font-semibold drop-shadow-lg">
                  {img.titulo}
                </h3>
                <p className="text-gray-200 text-sm mt-2">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section
      id="contacto"
      className="py-24 px-10 bg-gradient-to-b from-green-50 to-white animate-fade-up"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Contacto</h2>
        <p className="text-lg text-gray-700 mb-10">
          Si deseas comunicarte con nosotros, dar sugerencias o unirte a nuestras actividades,
          completa el siguiente formulario. ¡Siempre respondemos!
        </p>

        <form className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 grid gap-5">
          {/* Campo nombre */}
          <div className="text-left">
            <label className="block text-green-800 font-semibold mb-1">Nombre</label>
            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
              placeholder="Tu nombre completo"
            />
          </div>

          {/* Campo correo */}
          <div className="text-left">
            <label className="block text-green-800 font-semibold mb-1">Correo</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
              placeholder="tucorreo@example.com"
            />
          </div>

          {/* Campo mensaje */}
          <div className="text-left">
            <label className="block text-green-800 font-semibold mb-1">Mensaje</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
              rows={5}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          {/* Botón */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl active:scale-95 transition"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>

        {/* Datos de contacto extra */}
        <div className="mt-12 text-gray-700">
          <p className="text-lg font-medium">También puedes escribirnos directamente a:</p>
          <p className="text-green-700 font-bold text-xl">proyectoambiental@gmail.com</p>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="py-6 bg-green-700 text-white text-center mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2025 Proyecto Ambiental - Todos los derechos reservados</p>
        <div className="space-x-4">
          <a href="#" className="underline">Términos</a>
          <a href="#" className="underline">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

function Testimonios() {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-green-100 to-white animate-fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">Testimonios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((t) => (
            <div key={t} className="p-6 bg-white shadow-xl rounded-2xl hover:scale-105 transition transform">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-700 italic text-center">“Excelente labor ambiental, sigan adelante.”</p>
              <p className="text-green-700 font-bold text-center mt-3">Persona {t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LineaTiempo() {
  const eventos = [
    {
      titulo: "Inicio del proyecto",
      desc: "Se definieron los objetivos principales y se conformó oficialmente el equipo de trabajo.",
      fecha: "2023"
    },
    {
      titulo: "Primeras campañas",
      desc: "Se realizaron jornadas de limpieza y sensibilización ambiental en zonas locales.",
      fecha: "2024"
    },
    {
      titulo: "Expansión de actividades",
      desc: "Sumamos más voluntarios, más zonas de intervención y más actividades educativas.",
      fecha: "2024 - 2025"
    },
    {
      titulo: "Alianzas con instituciones",
      desc: "Se establecieron conexiones con escuelas, municipios y organizaciones ambientales.",
      fecha: "2025"
    }
  ];

  return (
    <section
      className="py-20 px-10 bg-gradient-to-b from-green-50 to-white animate-fade-up"
      id="lineatiempo"
    >
      <h2 className="text-4xl font-bold text-green-800 mb-14 text-center">
        Línea del Tiempo
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* Línea vertical central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 to-green-300 rounded-full"></div>

        <div className="space-y-16">
          {eventos.map((ev, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-10 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Punto verde */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 bg-green-600 rounded-full border-[6px] border-green-200 shadow-lg"></div>
              </div>

              {/* Tarjeta */}
              <div
                className="bg-white p-6 rounded-2xl shadow-xl border border-green-100 w-1/2 hover:shadow-2xl hover:-translate-y-1 transition transform"
              >
                <p className="text-green-700 font-bold text-lg mb-1">{ev.fecha}</p>
                <h3 className="text-2xl font-semibold text-green-900 mb-2">
                  {ev.titulo}
                </h3>
                <p className="text-gray-700 leading-relaxed">{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 px-10 bg-white animate-fade-up">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqItems.map((it, i) => (
            <details key={i} className="bg-green-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="text-xl font-semibold text-green-800">{it.q}</summary>
              <p className="text-gray-700 mt-3">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// ÚNICO App: compone TODAS las secciones. Solo una declaración de App y una exportación.
// -----------------------------------------------------------------------------
function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Objetivo />
      <ProyectosRealizados />
      <ProyectosPorRealizar />
      <Integrantes />
      <Galeria />
      <Contacto />

      {/* Secciones adicionales */}
      <Testimonios />
      <LineaTiempo />
      <FAQ />

      <Footer />
    </div>
  );
}

export default App;
