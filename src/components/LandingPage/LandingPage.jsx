/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../../icons/Button";
import { IconIconoirArrowRight } from "../../icons/IconIconoirArrowRight";
import { IconJamIconsOutlineLogosArrowLeft } from "../../icons/IconJamIconsOutlineLogosArrowLeft";
import { IconJamIconsOutlineLogosArrowRight2 } from "../../icons/IconJamIconsOutlineLogosArrowRight2";
import { IconJamIconsOutlineLogosFacebook } from "../../icons/IconJamIconsOutlineLogosFacebook";
import { IconJamIconsOutlineLogosInstagram4 } from "../../icons/IconJamIconsOutlineLogosInstagram4";
import { IconJamIconsOutlineLogosLinkedin4 } from "../../icons/IconJamIconsOutlineLogosLinkedin4";
import { IconJamIconsOutlineLogosTwitter } from "../../icons/IconJamIconsOutlineLogosTwitter";
import { IconJamIconsOutlineLogosYoutube2 } from "../../icons/IconJamIconsOutlineLogosYoutube2";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { Picture } from "../Picture";
import { UserCard } from "../UserCard";
import { UserThumb } from "../UserThumb";
import "./style.css";

export const LandingPage = ({ headerClassName, picturePictureClassName }) => {
  return (
    <div className="landing-page">
      <div className={`header ${headerClassName}`}>
        <div className="left">
          <div className="text-wrapper-2">SliceTicket</div>
        </div>
        <div className="div-2">
          <div className="menu-item">
            <div className="text-wrapper-3">Home</div>
          </div>
          <div className="menu-item">
            <div className="text-wrapper-3">How it works</div>
          </div>
          <div className="menu-item">
            <div className="text-wrapper-3">Features</div>
          </div>
          <div className="menu-item">
            <div className="text-wrapper-3">Contact</div>
          </div>
        </div>
        <div className="buttons-group">
          <button className="text-container-wrapper">
            <div className="button-text-wrapper">
              <div className="text-wrapper-3">Ingresar</div>
            </div>
          </button>
          <button className="div-wrapper">
            <div className="button-text-wrapper">
              <div className="button-text-2">Registrate</div>
            </div>
          </button>
        </div>
      </div>
      <div className="section">
        <div className="section-text">
          <div className="top">
            <div className="caption">Herramienta divisora de tickets</div>
            <p className="main-headline">Divide tus gastos fácilmente con SliceTicket</p>
          </div>
          <p className="paragraph">
            SliceTicket simplifica el proceso de gestión de gastos compartidos al permitirle cargar recibos de compra,
            calcular automáticamente la contribución de cada miembro del grupo y mantener a todos en sintonía con
            desgloses financieros transparentes. Perfecto para equipos, compañeros de cuarto o amigos que dividen
            costos, SliceTicket garantiza que todos paguen su parte justa, sin complicaciones.
          </p>
          <div className="buttons-group-2">
            <button className="button-2">
              <div className="button-text-wrapper">
                <div className="button-text-3">Registrate Gratis</div>
              </div>
            </button>
            <button className="button-3">
              <div className="button-text-wrapper">
                <div className="button-text-3">Seguir Leyendo</div>
              </div>
            </button>
          </div>
        </div>
        <div className="shapes">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-text-2">
          <div className="top">
            <div className="main-headline-2">Compartir gastos sin esfuerzo</div>
            <div className="secondary-headline">para cualquier grupo</div>
          </div>
          <p className="paragraph">
            SliceTicket hace que dividir los gastos dentro de cualquier grupo sea sencillo y sin estrés. Ya sea que esté
            planeando un viaje con amigos, administrando las facturas del hogar u organizando un proyecto en equipo,
            nuestra plataforma intuitiva lo ayuda a realizar un seguimiento y dividir los costos con solo unos pocos
            clics. No más confusión ni cálculos complicados: SliceTicket garantiza que todos paguen su parte justa, de
            forma automática y precisa.
          </p>
        </div>
      </div>
      <div className="section-2">
        <div className="col">
          <div className="section-text-3">
            <div className="top-2">
              <div className="main-headline-3">Simplifique sus finanzas,</div>
              <div className="secondary-headline-2">Fortalezca su grupo.</div>
            </div>
            <p className="p">
              SliceTicket le ahorra tiempo y elimina el estrés de dividir gastos al automatizar el proceso. Con cálculos
              claros y un seguimiento transparente, puede evitar malentendidos y centrarse en lo que realmente importa:
              colaborar de forma eficaz y disfrutar del tiempo juntos. Diga adiós a las conversaciones incómodas y deje
              que SliceTicket se encargue de los detalles, asegurándose de que todos estén en sintonía&#34;.
            </p>
          </div>
        </div>
        <div className="col-2">
          <div className="row">
            <Picture className={picturePictureClassName} />
            <Picture className="picture-instance" />
          </div>
          <div className="row-2">
            <Picture className="design-component-instance-node" />
            <Picture className="picture-2" />
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="top-wrapper">
          <div className="top">
            <div className="main-headline-2">Nuestros socios. Nuestros amigos.</div>
            <div className="secondary-headline">Todos cuentan.</div>
          </div>
        </div>
        <div className="slider">
          <div className="content-box">
            <div className="content">
              <p className="paragraph-2">
                Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit
                varius turpis. Sed pretium semper rhoncus, tellus semper.
              </p>
              <UserCard
                categoryClassName="user-card-3"
                categoryClassNameOverride="user-card-4"
                className="user-card-instance"
                layout="horizontal"
                name="Ralph Edwards"
                role="Product Designer"
                size="l"
                userThumbSizeMClassName="user-card-2"
              />
            </div>
          </div>
          <div className="content-box">
            <div className="content">
              <p className="paragraph-2">
                ¡Increíble! La aplicación me ha ahorrado mucho tiempo. No más discusiones sobre quién paga qué. ¡Muy
                recomendado!
              </p>
              <div className="user-card-5">
                <UserThumb className="user-thumb-instance" size="m" />
                <div className="div-3">
                  <div className="category-3">Hellen Jummy</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box">
            <div className="content">
              <p className="paragraph-2">
                Esta herramienta es un salvavidas. Dividir los gastos de viaje nunca ha sido tan fácil. ¡La interfaz es
                súper intuitiva!
              </p>
              <div className="user-card-5">
                <UserThumb className="user-thumb-2" size="m" />
                <div className="div-3">
                  <div className="category-3">Hellena John</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box">
            <div className="content">
              <p className="paragraph-2">
                La forma en que calcula los gastos es muy precisa. ¡Me encanta lo fácil que es agregar nuevos gastos y
                generar informes!
              </p>
              <div className="user-card-5">
                <UserThumb className="user-thumb-3" size="m" />
                <div className="div-3">
                  <div className="category-3">David Oshodi</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box">
            <div className="content">
              <p className="paragraph-2">
                Confío 100% en esta herramienta para dividir los gastos de mis viajes con amigos. Los cálculos son
                siempre correctos y transparentes.
              </p>
              <UserCard
                categoryClassName="user-card-3"
                categoryClassNameOverride="user-card-4"
                className="user-card-instance"
                layout="horizontal"
                name="Charolette Hanlin"
                role="CEO"
                size="l"
                userThumbSizeMClassName="user-card-6"
              />
            </div>
          </div>
        </div>
        <div className="arrows">
          <div className="button-4">
            <IconJamIconsOutlineLogosArrowLeft className="icon-instance-node" color="white" />
            <div className="button-text-wrapper">
              <div className="text-wrapper-3">Anterior</div>
            </div>
          </div>
          <div className="button-4">
            <div className="button-text-wrapper">
              <div className="text-wrapper-3">Siguiente</div>
            </div>
            <IconIconoirArrowRight className="icon-instance-node" />
          </div>
        </div>
      </div>
      <div className="section-text-wrapper">
        <div className="section-text-2">
          <div className="top">
            <div className="main-headline-2">Tu equipo. Tus proyectos.</div>
            <div className="secondary-headline">Siempre juntos.</div>
          </div>
          <div className="buttons-group-2">
            <button className="button-2">
              <div className="button-text-wrapper">
                <div className="button-text-3">Empieza gratis</div>
              </div>
            </button>
            <button className="button-3">
              <div className="button-text-wrapper">
                <div className="button-text-3">más información</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="columns">
          <div className="div-3">
            <div className="footer-components">
              <div className="link-name">Recursos</div>
            </div>
            <div className="links">
              <div className="footer-components">
                <div className="link-name-2">Centro de ayuda</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Blog</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Tutoriales</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">FAQs</div>
              </div>
            </div>
          </div>
          <div className="div-3">
            <div className="footer-components">
              <div className="link-name">Apoyo</div>
            </div>
            <div className="links">
              <div className="footer-components">
                <div className="link-name-2">Contacta con nosotros</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Desarrolladores</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Documentación</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Integraciones</div>
              </div>
            </div>
          </div>
          <div className="div-3">
            <div className="footer-components">
              <div className="link-name">Compañía</div>
            </div>
            <div className="links">
              <div className="footer-components">
                <div className="link-name-2">Acerca de</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Prensa</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Eventos</div>
              </div>
              <div className="footer-components">
                <div className="text-wrapper-4">Solicitar demostración</div>
                <IconJamIconsOutlineLogosArrowRight2 className="icon-instance-node" color="#E2E8F0" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="text-wrapper-4">SliceTicket@ 2023</div>
          <div className="footer-components-2">
            <div className="link-name-wrapper">
              <div className="link-name-2">Términos de servicio</div>
            </div>
            <div className="link-name-wrapper">
              <div className="link-name-2">política de privacidad</div>
            </div>
            <div className="link-name-wrapper">
              <div className="link-name-2">Administrar cookies</div>
            </div>
          </div>
          <div className="div-2">
            <IconJamIconsOutlineLogosYoutube2 className="icon-instance-node" color="#E2E8F0" />
            <IconJamIconsOutlineLogosFacebook className="icon-instance-node" color="#E2E8F0" />
            <IconJamIconsOutlineLogosTwitter className="icon-instance-node" color="#E2E8F0" />
            <IconJamIconsOutlineLogosInstagram4 className="icon-instance-node" color="#E2E8F0" />
            <IconJamIconsOutlineLogosLinkedin4 className="icon-instance-node" color="#E2E8F0" />
          </div>
          <div className="app-download">
            <Button className="button-instance" />
            <ConcreteComponentNode
              brand="google-play"
              img="/img/vector-2.svg"
              overlapGroupClassName="button-6"
              size="m"
              style="outline"
              styleFilledSizeXlClassName="button-5"
              vector="/img/vector-1.svg"
              vector1="/img/vector-3.svg"
              vector2="/img/vector-4.svg"
              vector3="/img/vector-5.svg"
              vector4="/img/vector-6.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
