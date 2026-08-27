import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { Esquema, Resumen } from "@/lib/temaContenido";
import { siteConfig } from "@/lib/site";

const styles = StyleSheet.create({
  page: { paddingTop: 48, paddingBottom: 56, paddingHorizontal: 48, fontSize: 10.5 },
  eyebrow: { fontSize: 9, color: "#0f2140", opacity: 0.6, marginBottom: 4, textTransform: "uppercase" },
  title: { fontSize: 18, fontWeight: 700, color: "#0f2140", marginBottom: 4 },
  subtitle: { fontSize: 10.5, color: "#1a3d70", marginBottom: 20 },
  h2: { fontSize: 13, fontWeight: 700, color: "#0f2140", marginTop: 16, marginBottom: 8 },
  h3: { fontSize: 10.5, fontWeight: 700, color: "#16305a", marginTop: 10, marginBottom: 4 },
  bullet: { flexDirection: "row", marginBottom: 3 },
  bulletDot: { width: 10, fontSize: 10.5 },
  bulletText: { flex: 1, lineHeight: 1.4 },
  parrafo: { marginBottom: 8, lineHeight: 1.5, textAlign: "justify" },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    fontSize: 8,
    color: "#666",
    textAlign: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
    paddingTop: 6,
  },
  pageNumber: {
    position: "absolute",
    bottom: 24,
    right: 48,
    fontSize: 8,
    color: "#666",
  },
});

export function TemaPdfDocument({
  numero,
  titulo,
  descripcion,
  esquema,
  resumen,
}: {
  numero: number;
  titulo: string;
  descripcion: string;
  esquema?: Esquema;
  resumen?: Resumen;
}) {
  return (
    <Document title={`Tema ${numero}. ${titulo} — ${siteConfig.name}`}>
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.eyebrow}>{siteConfig.name} · Temario Escala Básica</Text>
        <Text style={styles.title}>
          Tema {numero}. {titulo}
        </Text>
        <Text style={styles.subtitle}>{descripcion}</Text>

        {esquema && (
          <View>
            <Text style={styles.h2}>Esquema del tema</Text>
            {esquema.secciones.map((seccion, si) => (
              <View key={si} wrap={false}>
                <Text style={styles.h3}>{seccion.titulo}</Text>
                {seccion.puntos.map((punto, pi) => (
                  <View key={pi} style={styles.bullet}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>{punto}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {resumen && (
          <View break={Boolean(esquema)}>
            <Text style={styles.h2}>Resumen del tema</Text>
            {resumen.parrafos.map((parrafo, i) => (
              <Text key={i} style={styles.parrafo}>
                {parrafo}
              </Text>
            ))}
          </View>
        )}

        <Text
          style={styles.footer}
          fixed
        >
          {siteConfig.name} — material de estudio para uso personal del alumno. No redistribuir.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
}
