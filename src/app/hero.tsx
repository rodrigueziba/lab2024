"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              FILMÁ  <br />EN TIERRA DEL FUEGO
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
            Es una entidad destinada a facilitar a los productores audiovisuales nacionales e internacionales toda la información que precisen para la realización de rodajes en un determinado lugar (incluyendo películas, televisión y anuncios). Con su trabajo promueven la industria audiovisual y la propia zona en la que opera.
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
              
                Prestadores
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                
                Locaciones
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/a.png"
          alt="background-image"
          layout="fill"
          objectFit="cover"
        />
      </div>
          <Image
            width={470}
            height={576}
            src="/a.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
          A QUIÉN ESTÁ DIRIGIDO: 
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            
ADMINISTRADORES: autoridades y representantes de la comunidad audiovisual de la provincia quienes lo van a administrar.


          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            


PRESTADORES: de servicios audiovisuales que se registrarán para ofrecer sus servicios. Podrán tener un perfil como: Profesional, Productora Audiovisual, Comercio o empresa audiovisual, Comercio o empresa afín.


          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            


CONTRATANTES: interesados en producir y contratar los servicios.



          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            



PRESTADORES SECUNDARIOS: de servicios de las industrias conexas al audiovisual, como por ejemplo los servicios hoteleros y gastronómicos, cuyo sistema ya existe y sólo será consultado.

          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
