import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Clasificación de las redes",
      puntos: [
        "Por extensión geográfica: LAN (área local), MAN (área metropolitana), WAN (área extensa; Internet es su ejemplo más representativo).",
        "Por medio de transmisión: redes cableadas (cobre, fibra óptica) frente a redes inalámbricas (Wi-Fi, ondas de radiofrecuencia).",
      ],
    },
    {
      titulo: "El modelo TCP/IP",
      puntos: [
        "Conjunto de protocolos en que se basa el funcionamiento de Internet, organizado en capas: aplicación, transporte, internet y acceso a la red.",
        "Permite la interconexión e intercambio de datos entre equipos de distintos fabricantes y sistemas operativos.",
      ],
    },
    {
      titulo: "Direccionamiento y nombres",
      puntos: [
        "Dirección IP: identificador numérico único de cada dispositivo en una red; formatos IPv4 (32 bits) e IPv6 (128 bits).",
        "DNS (Domain Name System): traduce nombres de dominio legibles (www.ejemplo.es) en direcciones IP numéricas.",
      ],
    },
    {
      titulo: "Dispositivos de interconexión",
      puntos: [
        "Router (encaminador): interconecta redes distintas y dirige el tráfico entre ellas según direcciones IP.",
        "Switch (conmutador): interconecta dispositivos dentro de una misma red local, dirigiendo el tráfico según direcciones MAC.",
      ],
    },
    {
      titulo: "Seguridad en redes",
      puntos: [
        "Cortafuegos (firewall): controla el tráfico entrante y saliente conforme a reglas de seguridad predefinidas.",
        "VPN (red privada virtual): conexión cifrada a través de una red pública, que hace circular el tráfico como si el dispositivo estuviera en una red privada, protegiendo la confidencialidad de las comunicaciones.",
      ],
    },
  ],
};
