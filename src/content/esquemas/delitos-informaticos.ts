import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Descubrimiento y revelación de secretos informáticos (art. 197 CP)",
      puntos: [
        "Tipo básico (art. 197.1): apoderarse de papeles, cartas, correos electrónicos u otros documentos, o interceptar telecomunicaciones, para descubrir secretos o vulnerar la intimidad de otro sin su consentimiento; prisión de uno a cuatro años y multa de doce a veinticuatro meses.",
        "Datos reservados en soportes informáticos (art. 197.2): apoderarse, utilizar, modificar o acceder sin autorización a datos reservados de carácter personal registrados en ficheros o soportes informáticos, electrónicos o telemáticos; mismas penas que el apartado 1.",
        "Difusión de lo descubierto (art. 197.3): prisión de dos a cinco años por difundir, revelar o ceder a terceros los datos, hechos o imágenes descubiertos.",
        "Agravantes por sujeto activo o medios (art. 197.4): prisión de tres a cinco años cuando los hechos los cometan los encargados o responsables de los ficheros, o se utilicen datos personales de la víctima sin autorización.",
        "Agravantes por categoría de datos o víctima (art. 197.5): mitad superior cuando los datos revelen ideología, religión, salud, origen racial o vida sexual, o la víctima sea menor o persona con discapacidad necesitada de especial protección.",
        "Finalidad lucrativa (art. 197.6): mitad superior de las penas de los apartados 1 a 4; hasta prisión de cuatro a siete años si además afectan a los datos especialmente sensibles del apartado 5.",
      ],
    },
    {
      titulo: "Estafa informática (art. 249.1 CP)",
      puntos: [
        "Manipulación informática (art. 249.1.a): obstaculizar o interferir un sistema de información, o introducir/alterar/borrar/suprimir datos informáticos, logrando una transferencia patrimonial no consentida en perjuicio de otro; prisión de seis meses a tres años.",
        "Uso fraudulento de instrumentos de pago (art. 249.1.b): utilizar de forma fraudulenta tarjetas de crédito o débito, cheques de viaje u otro instrumento de pago distinto del efectivo, o sus datos, en perjuicio del titular o de un tercero.",
        "Actos preparatorios (art. 249.2): fabricar, poseer o facilitar a terceros dispositivos, datos o programas diseñados para cometer estas estafas; misma pena.",
      ],
    },
    {
      titulo: "Daños informáticos (art. 264 CP)",
      puntos: [
        "Tipo básico (art. 264.1): borrar, dañar, deteriorar, alterar, suprimir o hacer inaccesibles datos, programas o documentos electrónicos ajenos, sin autorización y de manera grave, con resultado grave; prisión de seis meses a tres años.",
        "Agravado (art. 264.2): prisión de dos a cinco años y multa del tanto al décuplo del perjuicio, cuando concurra organización criminal, daños de especial gravedad o a un número elevado de sistemas, perjuicio grave a servicios públicos esenciales, o afectación a infraestructuras críticas o a la seguridad del Estado.",
        "Uso de datos personales ajenos para el acceso (art. 264.3): las penas se imponen en su mitad superior.",
      ],
    },
  ],
};
