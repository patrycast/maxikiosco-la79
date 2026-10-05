import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle";
import { NEGOCIO, PRODUCTOS, VENTAJAS, GALERIA, OPINIONES, AUTORA } from "./data";
import * as S from "./styles";
import logo from "../public/img/la79_logo.png";
import { useEffect, useRef, useState } from "react";
import { BsFire } from "react-icons/bs";


function Imagen({ src, alt, etiqueta, tall }) {
  return src ? (
    <S.Img src={src} alt={alt} $tall={tall} loading="lazy" />
  ) : (
    <S.Placeholder $tall={tall}>{etiqueta}</S.Placeholder>
  );
}

function Reveal({ children, from = "bottom" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <S.RevealBox ref={ref} $visible={visible} $from={from}>{children}</S.RevealBox>;
}

const autoraLink = `https://wa.me/${AUTORA.whatsapp}?text=${encodeURIComponent(AUTORA.mensaje)}`;

const waLink = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent("Hola! Quisiera hacer una consulta")}`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cerrarMenu = () => setMenuOpen(false);

  return (
    <ThemeProvider theme={theme}>
      {/* <S.Header>
        <S.HeaderInner>
          <S.Logo href="#inicio" aria-label="Maxikiosco La 79, ir al inicio"> <S.SpanTitulo>Maxikiosco </S.SpanTitulo>
            <S.LogoImg src={logo} alt="Logo del Maxikiosco La 79" />  
          </S.Logo>
          <S.Nav>
            <a href="#productos">Productos</a>
            <a href="#opiniones">Opiniones</a>
            <a href="#ubicacion">Ubicación</a>
          </S.Nav>
        </S.HeaderInner>
      </S.Header> */}

      <S.Header>
        <S.HeaderInner>
          <S.Logo href="#inicio" aria-label="Maxikiosco La 79, ir al inicio" onClick={cerrarMenu}> MAXIKIOSCO
            <S.LogoImg src={logo} alt="Logo del Maxikiosco La 79" />
          </S.Logo>

          <S.MenuButton
            type="button"
            $open={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </S.MenuButton>

          <S.Nav $open={menuOpen}>
            <a href="#productos" onClick={cerrarMenu}>Productos</a>
            <a href="#opiniones" onClick={cerrarMenu}>Opiniones</a>
            <a href="#ubicacion" onClick={cerrarMenu}>Ubicación</a>
            <a href={`tel:${NEGOCIO.tel}`} onClick={cerrarMenu}>Llamar</a>
          </S.Nav>
        </S.HeaderInner>
</S.Header>

      <main id="inicio">
        <S.Hero>
          <S.SlideLeft>
            <S.Badge>● Abierto las 24 horas</S.Badge>
            <S.Title>Lo que necesitás, a cualquier hora.</S.Title>
            <S.Lead>
              Tu maxikiosco de confianza en Mar del Tuyú. Buena atención, buenos precios y las
              puertas abiertas de día, de tarde y de madrugada.
            </S.Lead>
            <S.Actions>
              <S.Button $solid href={waLink} target="_blank" rel="noopener noreferrer">
                Escribinos por WhatsApp
              </S.Button>
              <S.Button href={NEGOCIO.mapsUrl} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </S.Button>
            </S.Actions>
          </S.SlideLeft>
          {/* IMAGEN PRINCIPAL: pasá src="/img/frente.jpg" */}
          <S.SlideRight>
            <Imagen tall src="/img/maxi-la79-portada.jpg" alt="Frente del Maxikiosco La 79" etiqueta="imagen principal (frente del local o productos)" />
          </S.SlideRight>
        </S.Hero>

        <S.Section id="galeria">
         <S.Wrap>
           <Reveal>
            <S.H2>Promos del mes</S.H2>
            <S.Sub>Aprovecha estas ofertas exclusivas antes que seagoten!🔥</S.Sub>
            <S.Grid>
              {GALERIA.map(g => (
                <S.Producto key={g.texto}>
                  <Imagen tall src={g.img} alt={g.texto} etiqueta={g.etiqueta} />
                  <S.ProductoInfo>
                    <h3>{g.texto}</h3>
                    <S.Precio>${g.price}  {g.hot && <BsFire aria-label="Oferta" />}</S.Precio>
                  </S.ProductoInfo>
                </S.Producto>
              ))}
            </S.Grid>
          </Reveal>
        </S.Wrap>
        </S.Section>

        <S.Section id="productos">
          <S.Wrap>
            <Reveal>
              <S.H2>Qué vas a encontrar</S.H2>
              <S.Sub>Lo de todos los días, siempre a mano.</S.Sub>
              <S.Grid>
                {PRODUCTOS.map(p => (
                  <S.Card key={p.titulo}>
                    <Imagen src={p.img} alt={p.titulo} etiqueta={`Imagen: ${p.titulo.toLowerCase()}`} />
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                  </S.Card>
                ))}
              </S.Grid>
            </Reveal>
          </S.Wrap>
        </S.Section>

        

        <S.Section>
          <S.Wrap>
            <Reveal from="top">
              <S.H2>Por qué elegirnos</S.H2>
              <S.Sub>Un kiosco del barrio que nunca cierra.</S.Sub>
              <S.Grid>
                {VENTAJAS.map(v => (
                  <S.Card key={v.titulo}>
                    <S.Big>{v.dato}</S.Big>
                    <h3>{v.titulo}</h3>
                    <p>{v.texto}</p>
                  </S.Card>
                ))}
              </S.Grid>
            </Reveal>
          </S.Wrap>
        </S.Section>

        

        <S.Section id="opiniones">
          <S.Wrap>
            <S.H2>Lo que dicen nuestros clientes</S.H2>
            <S.Sub><S.Stars aria-hidden="true">★★★★☆</S.Stars> 4,2 en Google Maps</S.Sub>
            <S.Grid>
              {OPINIONES.map(o => (
                <S.Quote key={o.texto}>
                  “{o.texto}”
                  <small>— {o.autor}, Google Maps</small>
                </S.Quote>
              ))}
            </S.Grid>
            <S.Actions>
              <S.OrangeButton href={NEGOCIO.mapsUrl} target="_blank" rel="noopener noreferrer">
                Dejá tu opinión
              </S.OrangeButton>
            </S.Actions>
          </S.Wrap>
        </S.Section>


        <S.Section id="ubicacion">
          <S.Info>
            <div>
              <S.H2>Visitanos</S.H2>
              <dl>
                <dt>Dirección</dt><dd>{NEGOCIO.direccion}</dd>
                <dt>Horario</dt><dd>Abierto las 24 horas</dd>
                <dt>Teléfono / WhatsApp</dt>
                <dd><a href={`tel:${NEGOCIO.tel}`}>{NEGOCIO.telefono}</a></dd>
              </dl>
              {/* <S.Actions>
                <S.Button $solid href={waLink} target="_blank" rel="noopener noreferrer">WhatsApp</S.Button>
              </S.Actions> */}
            </div>
            <S.MapFrame
              title="Mapa del Maxikiosco La 79"
              src={NEGOCIO.mapaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </S.Info>
        </S.Section>
      </main>

      <S.Footer>
        © 2026 {NEGOCIO.nombre} · Mar del Tuyú, Buenos Aires
        <S.Credit>
          Desarrollado por 
          <a
            href={autoraLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escribile por WhatsApp a ${AUTORA.nombre}`}
          >
            {AUTORA.nombre}
          </a>
        </S.Credit>
      </S.Footer>

      <S.FloatWA
        $solid
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg> 
      </S.FloatWA>
    </ThemeProvider>
  );
}
