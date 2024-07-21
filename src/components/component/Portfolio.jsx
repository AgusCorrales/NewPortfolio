"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image';
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { useState } from "react";



export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    (<div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Hola, soy Agustín</h1>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#about" className="text-sm font-medium hover:underline" prefetch={false}>
              Sobre mí
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline" prefetch={false}>
              Proyectos
            </Link>
            <Link href="#education" className="text-sm font-medium hover:underline" prefetch={false}>
              Educación
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline" prefetch={false}>
              Habilidades
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline" prefetch={false}>
              Contacto
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
            <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
          </Button>
        </div>
        {/* Menú móvil */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-background/90 backdrop-blur-sm`}>
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link href="#about" className="text-sm font-medium hover:underline" prefetch={false} onClick={toggleMenu}>
              Sobre mí
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline" prefetch={false} onClick={toggleMenu}>
              Proyectos
            </Link>
            <Link href="#education" className="text-sm font-medium hover:underline" prefetch={false} onClick={toggleMenu}>
              Educación
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline" prefetch={false} onClick={toggleMenu}>
              Habilidades
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline" prefetch={false} onClick={toggleMenu}>
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
              <p className="text-muted-foreground">
                Soy un desarrollador web apasionado con experiencia en el diseño y desarrollo de aplicaciones web
                utilizando tecnologías modernas. Me enfoco en crear soluciones escalables y eficientes que mejoren la
                experiencia del usuario.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Foto de perfil"
                className="rounded-full" />
            </div>
          </div>
        </section>
        <section id="projects" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Proyectos destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="mb-2">E-learning Experience</CardTitle>
                  <CardDescription>Proyecto para el cliente Samoo by Pentec con el fin de mejorar el networking entre asistentes a los eventos realizados por la empresa. Hecho con un equipo de 12 personas, incluyendo desarrolladores Full Stack, UX/UI Designers y Data Science.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/E-learning.png"
                    width="500"
                    height="500"
                    alt="Imagen del proyecto 4"
                    className="rounded-t-lg" />
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Link href="https://github.com/sentobc13/Front-Proyecto-Final-Tripulaciones" className="text-sm font-medium hover:underline" prefetch={false}>
                      Ver proyecto
                    </Link>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>Julio 2024</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="mb-2">E-comerce</CardTitle>
                  <CardDescription>Proyecto que trata de una página E-comerce, con Frontend y Backend. Puedes publicar productos, actualizarlos, borrarlos, etc. Y como usuario puedes visitar la página, crear usuarios y comprar.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Ecomerce.png"
                    width="500"
                    height="300"
                    alt="Imagen del proyecto 2"
                    className="rounded-t-lg mt-10" />
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Link href="https://github.com/AgusCorrales/ProyectoReactEcomerce" className="text-sm font-medium hover:underline" prefetch={false}>
                      Ver proyecto
                    </Link>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>Junio 2024</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="mb-2">Pagina Tesla</CardTitle>
                  <CardDescription>Proyecto que trata de una página sobre Tesla, con imágenes y un apartado para leer noticias sobre la marca. También con un formulario para publicar las noticias que desees</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Tesla.png"
                    width="500"
                    height="300"
                    alt="Imagen del proyecto 1"
                    className="rounded-t-lg mt-10" />
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Link href="https://github.com/AgusCorrales/MiniProyectoReact" className="text-sm font-medium hover:underline" prefetch={false}>
                      Ver proyecto
                    </Link>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>Mayo 2024</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="mb-2">Trivia Game</CardTitle>
                  <CardDescription>Un juego de trivia que consiste en diez preguntas sobre videojuegos. Las preguntas y respuestas son traidas de una API. Tambien cuenta con un registro de usuarios, un login y una puntuacion final.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Trivia.png"
                    width="500"
                    height="300"
                    alt="Imagen del proyecto 3"
                    className="rounded-t-lg mt-10" />
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Link href="https://github.com/AgusCorrales/ProyectoQuiz" className="text-sm font-medium hover:underline" prefetch={false}>
                      Ver proyecto
                    </Link>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>Abril 2024</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>

            </div>
          </div>
        </section>
        <section id="education" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Educación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold md:text-xl">Curso Frontend Developer</CardTitle>
                  <CardDescription>CoderHouse</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>2018</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold md:text-xl">Bootcamp Full Stack Developer </CardTitle>
                  <CardDescription>The Bridge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Habilidades técnicas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="flex flex-col items-center gap-2">
                <EclipseIcon className="w-8 h-8" />
                <span className="text-sm font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TypeIcon className="w-8 h-8" />
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-8 h-8" />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-8 h-8" />
                <span className="text-sm font-medium">Vue</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-8 h-8" />
                <span className="text-sm font-medium">Angular</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-8 h-8" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <XIcon className="w-8 h-8" />
                <span className="text-sm font-medium">Express</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-8 h-8" />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-8 h-8" />
                <span className="text-sm font-medium">SQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-8 h-8" />
                <span className="text-sm font-medium">MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SquircleIcon className="w-8 h-8" />
                <span className="text-sm font-medium">Sequelize</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <NutIcon className="w-8 h-8" />
                <span className="text-sm font-medium">Jest</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <MailIcon className="w-5 h-5 text-muted-foreground" />
                      <a href="mailto:aguscorrales1997@gmail.com" className="hover:underline">
                        aguscorrales1997@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="w-5 h-5 text-muted-foreground" />
                      <span>+34 643-51-88-52</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LocateIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Valencia, España</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="w-5 h-5 text-muted-foreground" />
                      <Link href="https://www.linkedin.com/in/agustincorraleszarate/" className="hover:underline" prefetch={false}>
                        Linkedin
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-5 h-5 text-muted-foreground" />
                      <Link href="https://github.com/AgusCorrales" className="hover:underline" prefetch={false}>
                        Github
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div
          className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Agustin Corrales Zarate. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/agustincorraleszarate/" className="text-sm font-medium hover:underline" prefetch={false}>
              <LinkedinIcon className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link href="https://github.com/AgusCorrales" className="text-sm font-medium hover:underline" prefetch={false}>
              <GithubIcon className="w-5 h-5 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function BriefcaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function CalendarDaysIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>)
  );
}


function CodepenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>)
  );
}


function DatabaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>)
  );
}


function EclipseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>)
  );
}


function LinkIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>)
  );
}


function LocateIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function NutIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 4V2" />
      <path
        d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
      <path
        d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function SquircleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
    </svg>)
  );
}


function TypeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
