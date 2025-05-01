"use client";

import React from "react";
import ProfileCard from "@/components/profile/ProfileCard/ProfileCard";
import ContactMethods from "@/components/profile/ContactMethods/ContactMethods";
import SocialMediaLinks from "@/components/profile/SocialMediaLinks/SocialMediaLinks";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal";
import Slider from "@/components/cardContent/Slider/Slider";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience";
import BankInfo from "@/components/cardContent/PaymentInfo/PaymentInfo";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDisplay";
import CallToAction from "@/components/cardContent/cta/cta";
import SimpleYouTubeEmbed from "@/components/cardContent/VideoPlayer/SimpleYouTubeEmbed";
import VideoPlayer from "@/components/cardContent/VideoPlayer/VideoPlayer";
import GalleryImagesSlider from "@/components/cardContent/GalleyImageSlider/GalleryImageSlider";

import { servicesItems } from "@/data/products";
import { educationEntries } from "@/data/education";
import { slidesData } from "@/data/slides";
import { banksData } from "@/data/banks";
import { contactsData } from "@/data/contact";
import { socialLinks } from "@/data/socialLinks";
import { profileData } from "@/data/profile";
import { profileGalleryItems } from "@/data/profileGallery";
import { galleryItems } from "@/data/gallery";
import CTAWithForm from "@/components/cardContent/CTAWithForm/CTAWithForm";

export default function TemplateCard() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-light">
      {/* Perfil */}
      <section id="inicio" className="w-full bg-gradient-primary text-light">
        <ProfileCard
          profile={profileData}
          // 🎨 Layout del texto
          layoutOptions={{
            bgColor: "bg-transparent",
            textColor: "text-light",
            borderColor: "border-terciary",
            nameSize: "text-size-6 sm:text-size-9",
            titleSize: "text-size-3 sm:text-size-4",
            descriptionSize: "text-size-2 sm:text-size-3",
          }}
          // 🖼️ Imagen (reemplazada por slider si useSliderAsProfile = true)
          imageOptions={{
            width: 300,
            height: 300,
            size: "w-60 h-60",
            rounded: "rounded-xl",
            shadow: "shadow-md shadow-accent",
          }}
          // 🎞️ Animación
          animationOptions={{
            duration: 0.8,
          }}
          // 📦 Botones
          buttonOptions={{
            type: "btn-solid",
            bgColor: "bg-secondary shadow-lg shadow-dark",
            textColor: "text-black",
            textSize: "text-size-2 sm:text-3",
            saveLabel: "Guardar Contacto",
            whatsappLabel1: "Asesor 1",
            whatsappLabel2: "Asesor 2",
            vcfLink: "/assets/vcards/vacationdays.vcf",
            whatsappMessage1: "Hola, estoy interesado en un viaje",
            whatsappMessage2: "Hola, estoy interesado en un viaje",
          }}
          // 🎠 Activar imagen de perfil como slider
          useSliderAsProfile={true}
          profileSliderItems={profileGalleryItems}
        />
        <ContactMethods
          contacts={contactsData}
          variant="with-text"
          layoutOptions={{
            bgColor: "bg-transparent",
            gap: "gap-4",
            padding: "pt-spacing-4 pb-spacing-2",
          }}
          buttonOptions={{
            buttonType: "btn-rounded",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            textSize: "text-size-2",
            iconSize: "w-9 h-9 sm:w-12 sm:h-12",
          }}
        />
        <SocialMediaLinks
          socialLinks={socialLinks}
          variant="icon-only"
          layoutOptions={{
            layout: "row",
            gap: "gap-2",
            componentBgColor: "bg-transparent",
            padding: "p-4 pb-spacing-3",
          }}
          buttonOptions={{
            buttonType: "btn-rounded",
            bgColor: "bg-secondary",
            hoverColor: "hover:bg-accent hover:text-dark",
            iconSize: "w-9 h-9 sm:w-12 sm:h-12",
          }}
          animate={true}
        />
      </section>

      {/* Video principal */}
      <section className="bg-gradient-contrast py-8">
        <VideoPlayer
          videoUrl="/assets/videos/video1.mp4"
          titleOptions={{
            text: "¡Vibra con la energía en vivo!",
            color: "text-black",
            size: "text-size-5 sm:text-size-7",
            weight: "font-bold",
            alignment: "text-center",
            marginBottom: "mb-spacing-3",
          }}
          containerOptions={{
            bgColor: "bg-gradient-primary",
            padding: "p-10",
            borderColor: "border border-secondary",
            borderRadius: "rounded-xl",
            shadow: "shadow-md shadow-secondary",
            maxWidth: "max-w-10xl",
            ratio: "16/9",
          }}
        />
      </section>

      {/* Galería de fotos
      <section className="bg-gradient-secondary py-spacing-2">
        <GalleryImagesSlider
          items={galleryItems}
          titleOptions={{
            text: "Nuestros Servicios en Imágenes",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
            alignment: "text-center",
            margin: "mb-spacing-3",
          }}
          carouselOptions={{
            transitionDuration: 1500,
            delay: 4000,
            stopAtEnd: true,
            restartOnClick: true,
          }}
          itemOptions={{
            width: "w-72 sm:w-96 md:w-[30rem] lg:w-[40rem]",
            height: "h-48 sm:h-60 md:h-90 lg:h-[40rem]",
            rounded: "rounded-2xl",
            shadow: "shadow-xl shadow-secondary",
            objectFit: "object-cover",
          }}
          // 📝 Texto sobre la imagen
          overlayOptions={{
            showOverlay: true,
            overlayTextSize: "text-size-2 sm:text-size-3",
            overlayTextColor: "text-light",
            overlayFont: "font-primary",
            overlayBg: "bg-dark bg-opacity-60",
          }}
          // 🔘 Indicadores visuales
          indicatorOptions={{
            showIndicators: true,
            indicatorSize: "w-3 h-3",
            activeColor: "bg-red-500",
            inactiveColor: "bg-gray-300",
            gap: "gap-3",
          }}
        />
      </section> */}

      {/* Beneficios */}
      <section className="bg-gradient-contrast">
        <EducationExperience
          entries={educationEntries}
          componentTitle="¿Por qué elegir a Javier Egas?"
          titleOptions={{
            text: "¿Por qué elegirnos?",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
          }}
          blockOptions={{ gap: "gap-6", bgColor: "bg-transparent" }}
          accordionOptions={{
            bgColor: "bg-light",
            borderColor: "border border-gray-300",
            contentBgColor: "bg-dark-light",
          }}
          textOptions={{
            titleColor: "text-dark",
            titleSize: "text-size-2 sm:text-3",
            detailColor: "text-light",
            detailSize: "text-size-1 sm:text-2",
          }}
          behaviorOptions={{ useBulletPoints: true, animate: true }}
        />
      </section>

      {/* Servicios */}
      <section id="services" className="bg-gradient-deep">
        <GalleryWithModal
          items={servicesItems}
          whatsappNumber="593999938448"
          titleOptions={{
            text: "Servicios Musicales",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
            subtitle:
              "Descubre todo lo que podemos ofrecerte. Haz clic en cada imagen para más información.",
          }}
          galleryOptions={{
            bgColor: "bg-transparent",
            itemBg: "bg-light shadow-lg shadow-dark",
            titleColor: "text-light",
            titleSize: "text-size-2 sm:text-3",
          }}
          modalOptions={{
            bgColor: "bg-gradient-primary",
            titleColor: "text-dark",
            titleSize: "text-size-4 sm:text-size-5",
            descriptionColor: "text-light",
            descriptionSize: "text-base sm:text-lg",
            highlightColor: "text-secondary",
            highlightSize: "text-size-4 sm:text-size-5",
            aspectRatio: "4/3",
          }}
          buttonOptions={{
            text: "Solicitar Información",
            type: "btn-rounded",
            size: "text-base sm:text-lg",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            hoverColor: "hover:bg-light hover:text-dark",
          }}
        />
      </section>

      {/* Segundo video
      <section className="bg-gradient-subtle py-8">
        <VideoPlayer
          videoUrl="/assets/videos/video2.mp4"
          titleOptions={{
            text: "Así se siente un verdadero show",
            color: "text-black",
            size: "text-size-5 sm:text-size-7",
            weight: "font-bold",
            alignment: "text-center",
            marginBottom: "mb-spacing-3",
          }}
          containerOptions={{
            bgColor: "bg-gradient-primary",
            padding: "p-10",
            borderColor: "border border-secondary",
            borderRadius: "rounded-xl",
            shadow: "shadow-md shadow-secondary",
            maxWidth: "max-w-5xl",
            ratio: "16/9",
          }}
        />
      </section> */}

      {/* Slider de shows */}
      <section id="galeria" className="bg-gradient-secondary">
        <Slider
          slides={slidesData}
          titleOptions={{
            text: "Momentos Inolvidables",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
            weight: "font-semibold",
          }}
          carouselOptions={{
            bgColor: "bg-transparent",
            borderColor: "border border-light",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            imageSize: "w-3/4 sm:w-1/2",
            gap: "gap-6",
          }}
          buttonOptions={{
            bgColor: "bg-dark",
            textColor: "text-light",
            hoverColor: "hover:bg-light hover:text-dark",
            activeBgColor: "bg-primary",
            activeTextColor: "text-light",
          }}
          behaviorOptions={{
            animationSpeed: 1.0,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000,
            showIndicators: false,
          }}
        />
      </section>

      {/* Testimonios
      <section className="bg-gradient-accent">
        <Testimonials
          testimonials={testimonialsData}
          titleOptions={{
            text: "Lo que dicen nuestros clientes",
            color: "text-light",
            size: "text-size-5 sm:text-size-7 ",
            alignment: "text-center ",
          }}
          carouselOptions={{
            autoplay: true,
            loop: true,
            animationSpeed: 0.8,
          }}
          cardOptions={{
            bgColor: "bg-light",
            textColor: "text-dark",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl shadow-dark",
          }}
          textOptions={{
            nameColor: "text-dark",
            nameSize: "text-size-3",
            titleColor: "text-secondary",
            titleSize: "text-size-1",
            messageColor: "text-dark",
            messageSize: "text-size-1 sm:text-size-3",
          }}
        />
      </section> */}

      {/* Tercer video */}
      <section className="bg-gradient-primary py-8">
        <SimpleYouTubeEmbed
          video="https://youtube.com/watch?v=Oi3iLzrpEAU&si=m3VySbhJ4FkaY7Qv"
          titleOptions={{
            text: "Javier Egas: La experiencia musical definitiva",
            color: "text-black",
            size: "text-size-4 sm:text-size-7",
            weight: "font-bold",
            alignment: "text-center",
            marginBottom: "mb-spacing-3",
          }}
          containerOptions={{
            bgColor: "bg-gradient-primary",
            padding: "p-1 sm:p-2",
            borderColor: "border border-secondary",
            borderRadius: "rounded-xl",
            shadow: "shadow-md shadow-secondary",
            maxWidth: "max-w-6xl",
            ratio: "16/9",
          }}
        />
      </section>

      {/* Información de Pago */}
      <section id="info_pago" className="bg-gradient-subtle">
        <BankInfo
          banks={banksData}
          titleOptions={{
            text: "Formas de Pago",
            color: "text-dark",
            size: "text-size-4 sm:text-size-5",
          }}
          layoutOptions={{
            bgColor: "bg-transparent",
            layout: "row",
            iconSize: 100,
            borderColor: "border border-accent",
          }}
          modalOptions={{
            bgColor: "bg-gradient-primary",
            titleColor: "text-light",
            textColor: "text-light",
            buttonType: "btn-rounded",
            buttonBgColor: "bg-secondary",
            buttonTextColor: "text-dark",
            copyButtonText: "Copiar",
            closeButtonText: "Cerrar",
          }}
        />
      </section>

      {/* QR para contacto */}
      <section className="bg-gradient-contrast">
        <QRDisplay
          titleOptions={{
            text: "Escanea y contáctanos",
            color: "text-dark",
            size: "text-size-4 sm:text-size-5",
            weight: "font-semibold",
          }}
          qrOptions={{
            image: "/assets/images/qrcode.png",
            size: "w-52 h-52",
            alt: "Código QR para contacto",
            borderColor: "border border-dark",
            borderRadius: "rounded-xl",
            shadow: "shadow-lg shadow-dark",
            bgColor: "bg-gradient-primary",
            gap: "gap-6",
          }}
        />
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-dark">
        <CallToAction
          titleOptions={{
            text: "Reserva tu show ahora",
            color: "text-light",
            size: "text-3xl sm:text-4xl",
            weight: "font-extrabold",
          }}
          buttonOptions={{
            text: "Contáctanos",
            phoneNumber: "+593999938448",
            type: "btn-rounded",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            hoverColor: "hover:bg-light hover:text-dark",
            borderColor: "border border-transparent",
            textSize: "text-lg sm:text-xl",
          }}
          layoutOptions={{
            bgColor: "bg-transparent",
            borderColor: "border-none",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            backgroundImage: "/assets/images/cta-back.jpg",
          }}
        />
      </section>

      {/* CTA con formulario

      <section className="bg-gradient-dark">
        <CTAWithForm
          // 🎯 Título del CTA
          titleOptions={{
            text: "Reserva tu show ahora",
            color: "text-light",
            size: "text-3xl sm:text-4xl",
            weight: "font-extrabold",
          }}
          // 🔘 Botón para abrir el modal
          buttonOptions={{
            text: "Contáctanos",
            phoneNumber: "+593999938448",
            type: "btn-rounded",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            hoverColor: "hover:bg-light hover:text-dark",
            borderColor: "border border-transparent",
            textSize: "text-lg sm:text-xl",
          }}
          // 🎨 Estilo de la sección CTA
          layoutOptions={{
            bgColor: "bg-transparent",
            borderColor: "border-none",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            backgroundImage: "/assets/images/cta-back.jpg",
          }}
          // 🧩 Modal (formulario)
          modalOptions={{
            modalBg: "bg-secondary",
            modalTextColor: "text-dark",
            modalPadding: "p-6",
            modalRounded: "rounded-xl",
            modalShadow: "shadow-xl shadow-dark",
            buttonCloseText: "Cerrar",
            buttonCloseStyles: "btn btn-dark mt-4",
          }}
          // 📝 Formulario personalizado
          formOptions={{
            titleOptions: {
              text: "Déjanos tu mensaje",
              color: "text-dark",
              size: "text-2xl",
              margin: "mb-4",
              alignment: "text-center",
            },
            inputOptions: {
              bgColor: "bg-light",
              textColor: "text-dark",
              border: "input input-bordered",
              width: "w-full max-w-xs",
              spacing: "space-y-4",
            },
            buttonOptions: {
              submitText: "Preparar Mensaje",
              submitStyles: "btn btn-dark w-full",
              whatsappText: "Enviar por WhatsApp",
              whatsappStyles: "btn btn-outline w-full mt-4 text-dark border-dark",
              confirmationTextColor: "text-dark",
            },
          }}
        />
      </section> */}
    </main>
  );
}
