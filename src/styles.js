import styled, { css, keyframes } from "styled-components";

const mobile = (...args) => css`
  @media (max-width: ${({ theme }) => theme.bp}) { ${css(...args)} }
`;

export const Wrap = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;  
`;

/* Header */
export const Header = styled.header`
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 5;
  padding-top: env(safe-area-inset-top, 0px);
  background: rgba(0, 0, 0, 0.92);
  border-bottom: 2px solid ${p => p.theme.line}; 
  box-shadow: 0 4px 18px rgba(184, 178, 178, 0.21);
`;
export const HeaderInner = styled(Wrap)`
 position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px; 
`;

export const Nav = styled.nav`
  a { margin-left: 18px; 
    text-decoration: none; 
    color: ${p => p.theme.muted}; 
    font-size: 1.15rem; 
    padding: 8px 8px; 
    margin: 6px 8px; }

  a:hover { 
    color: ${p => p.theme.fg}; 
  }
  ${mobile`
    display: ${p => (p.$open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 8px 20px 20px;
    background: #000;
    border-bottom: 1px solid ${p => p.theme.line};

    a {
      margin: 0;
      padding: 14px 0;
      font-size: 1.1rem;
      color: ${p => p.theme.fg};
      border-bottom: 1px solid ${p => p.theme.line};
    }
  `}
`;
  
export const MenuButton = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${p => p.theme.fg};

  span {
    display: block;
    width: 24px;
    height: 2px;
    margin: 5px auto;
    background: currentColor;
    border-radius: 2px;
    transition: transform 0.25s, opacity 0.25s;
  }

  ${p => p.$open && css`
    span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  `}

  ${mobile`display: block;`}
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-decoration: none;
`;
 export const SpanTitulo= styled.span`
  font-size: 1.5rem;
  color: ${p => p.theme.fg};`;

export const LogoImg = styled.img`
  display: block;
  height: 80px;
  width: auto;
`;

/* Botones */
export const Button = styled.a`
  display: inline-block;
  padding: 13px 24px;
  border: 2px solid ${p => p.theme.fg};
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, opacity 0.2s;
  background: ${p => (p.$solid ? p.theme.fg : "transparent")};
  color: ${p => (p.$solid ? p.theme.bg : p.theme.fg)};
  &:hover { transform: translateY(-2px); opacity: 0.85; }
  &:focus-visible { outline: 3px solid ${p => p.theme.fg}; outline-offset: 3px; }
`;
export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
`;
export const FloatWA = styled(Button)`
  position: fixed;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 60px;
  height: 60px; */
  padding: 0;
  /* border-radius: 50%; */
  box-shadow: 0 4px 18px rgba(255, 255, 255, 0.18);
  gap: 10px; padding: 14px 20px;
  background: #25d366; border-color: #25d366; color: #fff;
`;

/* Hero */
export const Hero = styled(Wrap)`
  padding-top: 64px;
  padding-bottom: 48px;
  display: grid;
  gap: 36px;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  ${mobile`grid-template-columns: 1fr; padding-top: 36px;`}
`;
export const Badge = styled.span`
  display: inline-block;
  border: 1px solid #df7411;
  border-radius: 999px;
  padding: 4px 14px;
  font-size: 0.85rem;
  margin-bottom: 16px;
  color: #df7411;
`;
export const Title = styled.h1`
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  line-height: 1.08;
  margin: 0 0 16px;
`;
export const Lead = styled.p`
  color: ${p => p.theme.muted};
  font-size: 1.1rem;
  max-width: 520px;
`;

/* Secciones */
export const Section = styled.section`
  padding: 56px 0;
  border-top: 1px solid ${p => p.theme.line};
`;
export const H2 = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.3rem);
  margin: 0 0 8px;
`;
export const Sub = styled.p`
  color: ${p => p.theme.muted};
  margin: 0 0 28px;
`;
export const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 

   @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.div`
  background: ${p => p.theme.card};
  border: 1px solid ${p => p.theme.line};
  border-radius: 14px;
  padding: 16px;
  h3 { margin: 14px 0 4px; font-size: 1.1rem; }
  p { margin: 0; color: ${p => p.theme.muted}; font-size: 0.95rem; } 
`;
export const Big = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #df7411;
`;
export const Quote = styled(Card)`
  font-size: 1.05rem;
  small { display: block; margin-top: 10px; color: ${p => p.theme.muted}; }
`;
export const Stars = styled.span`
 color: #fbbc04;
  letter-spacing: 3px;
`;

/* Imagen / espacio vacío */
export const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: ${p => (p.$tall ? "340px" : "180px")};
  padding: 12px;
  border: 2px dashed ${p => p.theme.dashed};
  border-radius: 14px;
  background: ${p => p.theme.card};
  color: #777;
  font-size: 0.9rem; 
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: ${p => (p.$tall ? "340px" : "180px")};
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(114, 113, 113, 0.41);
`;

/* Ubicación */
export const Info = styled(Wrap)`
  display: grid;
  gap: 28px;
  grid-template-columns: 1fr 1fr;
  ${mobile`grid-template-columns: 1fr;`}
  dt { margin-top: 16px; color: ${p => p.theme.muted}; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }
  dd { margin: 2px 0 0; font-size: 1.1rem; }
`;

export const Footer = styled.footer`
  border-top: 1px solid ${p => p.theme.line};
  padding: 28px 0;
  color: ${p => p.theme.muted};
  text-align: center;
  font-size: 0.9rem;
`;
export const Credit = styled.p`
  margin: 14px 0 0;
  color: ${p => p.theme.muted};
  a {
    display: inline-block;
    margin-left: 6px;
    padding: 4px 10px;
    /* border: 1px solid ${p => p.theme.fg}; */
    border-radius: 999px;
    color: ${p => p.theme.fg};
    font-weight: 700;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }
  a:hover, a:focus-visible {
    background: ${p => p.theme.fg};
    background: #bdbbbbf5;
    color: ${p => p.theme.bg};
    outline: none;
  }
`;

export const MapFrame = styled.iframe`
  display: block;
  width: 100%;
  min-height: 340px;
  height: 100%;
  border: 1px solid ${p => p.theme.line};
  border-radius: 14px;
`;

const desdeIzquierda = keyframes`
  from { opacity: 0; transform: translateX(-80px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const desdeDerecha = keyframes`
  from { opacity: 0; transform: translateX(80px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const SlideLeft = styled.div`
  animation: ${desdeIzquierda} 0.9s ease-out both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

export const SlideRight = styled.div`
  animation: ${desdeDerecha} 0.9s ease-out 0.15s both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

export const Producto = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 12px;
`;

export const ProductoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 4px 4px;
  h3 {
    margin: 0;
    font-size: 1.05rem;
    text-transform: capitalize;
  }
`;

export const Precio = styled.span`
  font-weight: 800;
  font-size: 1.25rem;
  white-space: nowrap;

  svg {
    color: ${p => p.theme.orange};
    vertical-align: -2px;
  }
`;

// export const RevealBox = styled.div`
//   opacity: 0;
//   transform: translateY(60px);
//   transition: opacity 0.8s ease-out, transform 0.8s ease-out; 

//   ${p => p.$visible && css`
//     opacity: 1;
//     transform: translateY(0);
//   `}

//   @media (prefers-reduced-motion: reduce) {
//     opacity: 1;
//     transform: none;
//     transition: none;
//   }
// `;

export const RevealBox = styled.div`
  opacity: 0;
  transform: translateY(${p => (p.$from === "top" ? "-60px" : "60px")});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  ${p => p.$visible && css`
    opacity: 1;
    transform: translateY(0);
  `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

// --------------------------boton naranja----------------------------

export const OrangeButton = styled(Button)`
  background: transparent;
  border-color: ${p => p.theme.orange};
  color: ${p => p.theme.orange};

  &:hover {
    background: ${p => p.theme.orange};
    color: #000;
    opacity: 1;
  }

  &:focus-visible {
    outline-color: ${p => p.theme.orange};
  }
`;