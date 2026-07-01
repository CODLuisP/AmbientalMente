import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Building2, ShieldCheck, AlertCircle, RefreshCw, Navigation } from 'lucide-react';
import { ContactFormData } from '../types';
import Reveal from './Reveal';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    ruc: "",
    serviceInterest: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const servicesInterestOptions = [
    { value: "residuos", label: "Gestión Integral de Residuos" },
    { value: "monitoreo", label: "Monitoreo Ambiental Ocupacional" },
    { value: "consultoria", label: "Consultoría e Instrumentos Legales" },
    { value: "sostenibilidad", label: "Ecoeficiencia y Sostenibilidad" },
    { value: "general", label: "Consulta General" },
  ];

  const validateForm = (): boolean => {
    const errors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) errors.name = "El nombre es obligatorio.";

    if (!formData.email.trim()) {
      errors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El formato del correo electrónico no es válido.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "El teléfono es obligatorio.";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      errors.phone = "El número telefónico no es válido.";
    }

    if (formData.ruc.trim() && !/^[0-9]{11}$/.test(formData.ruc)) {
      errors.ruc = "El RUC debe constar de exactamente 11 dígitos numéricos.";
    }

    if (!formData.serviceInterest) {
      errors.serviceInterest = "Por favor, seleccione un área de interés.";
    }

    if (!formData.message.trim()) {
      errors.message = "Por favor, detalle su requerimiento o consulta.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    emailjs.send(
      'default_service',
      'template_2b2znyi',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName || 'No especificado',
        ruc: formData.ruc || 'No especificado',
        serviceInterest: formData.serviceInterest,
        message: formData.message,
        time: new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' }),
      },
      { publicKey: 'CmpTorxLRw7Bosms1' }
    ).then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const randomTicket = `AMV-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketNumber(randomTicket);
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        ruc: "",
        serviceInterest: "",
        message: "",
      });
    }).catch(() => {
      setIsSubmitting(false);
      alert('Ocurrió un error al enviar su solicitud. Por favor intente nuevamente o contáctenos directamente.');
    });
  };

  const handleReset = () => {
    setSubmitSuccess(false);
    setTicketNumber("");
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative accent background circles */}
      <div className="absolute top-10 left-[-10%] w-100 h-100 rounded-full bg-brand-claro/5 blur-3xl" />
      <div className="absolute bottom-10 right-[-10%] w-100 h-100 rounded-full bg-brand-agua/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <Reveal className="flex flex-row mb-16 h-47.5 items-center">
          <div className="h-full shrink-0 mr-2">
            <img
              src="/sobre01.webp"
              alt="Canales de Atención"
              className="h-full w-auto object-cover rounded-2xl"
            />
          </div>
          <div className="px-4">
            <span className="text-xs font-semibold text-brand-hoja uppercase tracking-widest">
              Canales de Atención
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-bosque mt-2 tracking-tight">
              ¿Listo para iniciar su proyecto sostenible?
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 leading-relaxed max-w-2xl">
              Póngase en contacto con nuestros ingenieros especialistas. Le
              responderemos en menos de 24 horas laborables.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Contact Channels & Map Mockup (5 cols) */}
          <Reveal direction="right" className="lg:col-span-5 h-full">
            <div className="h-full flex flex-col bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-brand-bosque mb-2">
                Información Corporativa
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                Empresa peruana con sede en Cajamarca, comprometida con la
                gestión ambiental sostenible a nivel nacional.
              </p>

              {/* Channels List */}
              <div className="space-y-5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-bosque/5 text-brand-bosque flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                      Dirección Central
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-brand-bosque font-semibold mt-0.5">
                      Jr. Villa Tres Molinos Mz. C Lote 16 E, Cajamarca – Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-agua/15 text-brand-agua flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                      Correo Electrónico
                    </h4>
                    <a
                      id="contact-email"
                      href="mailto:ambientalmente531@gmail.com"
                      className="font-sans text-xs sm:text-sm text-brand-bosque font-semibold mt-0.5 hover:text-brand-hoja transition-colors block"
                    >
                      ambientalmente531@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-hoja/10 text-brand-hoja flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                      Teléfonos de Contacto
                    </h4>
                    <a
                      id="contact-phone"
                      href="https://wa.me/51958671088"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs sm:text-sm text-brand-bosque font-semibold mt-0.5 hover:text-brand-hoja transition-colors block"
                    >
                      +51 958 671 088
                    </a>
                    <span className="font-sans text-xs text-slate-500 block">
                      WhatsApp disponible
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-tierra/10 text-brand-tierra flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                      Horario de Atención
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-brand-bosque font-semibold mt-0.5">
                      Lunes a Viernes: 8:00 AM — 6:00 PM
                    </p>
                    <p className="font-sans text-xs text-slate-500">
                      Sábados: 9:00 AM — 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Feedback Contact Form (7 cols) */}
          <Reveal
            direction="left"
            delay={0.1}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <img
              src="/formulariof.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none select-none"
            />
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  id="contact-form-el"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-brand-bosque uppercase tracking-wider mb-1.5"
                      >
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Dr. Carlos Mendoza"
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm transition-all focus:outline-none focus:ring-1 ${
                          formErrors.name
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/10"
                            : "border-slate-200 focus:border-brand-hoja focus:ring-brand-hoja/10 bg-slate-50/50 focus:bg-white"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-brand-bosque uppercase tracking-wider mb-1.5"
                      >
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contacto@clinica.com.pe"
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm transition-all focus:outline-none focus:ring-1 ${
                          formErrors.email
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/10"
                            : "border-slate-200 focus:border-brand-hoja focus:ring-brand-hoja/10 bg-slate-50/50 focus:bg-white"
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-brand-bosque uppercase tracking-wider mb-1.5"
                      >
                        Teléfono / Celular *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ej. +51 976 543 210"
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm transition-all focus:outline-none focus:ring-1 ${
                          formErrors.phone
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/10"
                            : "border-slate-200 focus:border-brand-hoja focus:ring-brand-hoja/10 bg-slate-50/50 focus:bg-white"
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-semibold text-brand-bosque uppercase tracking-wider mb-1.5"
                      >
                        Razón Social de la Empresa
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Ej. Clínica San Marcos S.A.C."
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-brand-hoja focus:ring-1 focus:ring-brand-hoja/10 font-sans text-sm transition-all"
                        />
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* RUC (Peruvian corporate Tax ID, 11 digits) */}
                    <div>
                      <label
                        htmlFor="ruc"
                        className="block text-xs font-semibold text-brand-bosque uppercase tracking-wider mb-1.5"
                      >
                        Número de RUC (11 dígitos)
                      </label>
                      <input
                        type="text"
                        id="ruc"
                        name="ruc"
                        maxLength={11}
                        value={formData.ruc}
                        onChange={handleChange}
                        placeholder="Ej. 20601234567"
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm transition-all focus:outline-none focus:ring-1 ${
                          formErrors.ruc
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/10"
                            : "border-slate-200 focus:border-brand-hoja focus:ring-brand-hoja/10 bg-slate-50/50 focus:bg-white"
                        }`}
                      />
                      {formErrors.ruc && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.ruc}
                        </p>
                      )}
                    </div>

                    {/* Service Interest Area */}
                    <div>
                      <label
                        htmlFor="serviceInterest"
                        className="block text-xs font-semibold text-brand-bosque uppercase tracking-wider mb-1.5"
                      >
                        Servicio Requerido *
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm transition-all focus:outline-none focus:ring-1 ${
                          formErrors.serviceInterest
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/10"
                            : "border-slate-200 focus:border-brand-hoja focus:ring-brand-hoja/10 bg-slate-50/50 focus:bg-white"
                        }`}
                      >
                        <option value="">Seleccione una opción...</option>
                        {servicesInterestOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {formErrors.serviceInterest && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />{" "}
                          {formErrors.serviceInterest}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message details */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-brand-bosque uppercase tracking-wider mb-1.5"
                    >
                      Detalle de su Requerimiento *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ej. Gestión de residuos biocontaminados de nuestra clínica, volumen estimado mensual, frecuencia de retiro requerida y ubicación del establecimiento de salud..."
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-sm transition-all focus:outline-none focus:ring-1 ${
                        formErrors.message
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/10"
                          : "border-slate-200 focus:border-brand-hoja focus:ring-brand-hoja/10 bg-slate-50/50 focus:bg-white"
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button with active loading state */}
                  <button
                    type="submit"
                    id="submit-contact-btn"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-brand-bosque hover:bg-brand-bosque/95 text-white font-sans text-sm font-semibold rounded-2xl transition-all shadow-md shadow-brand-bosque/10 hover:shadow-lg disabled:bg-slate-350 disabled:cursor-not-allowed group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                        Procesando en CRM de Ingeniería...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-brand-claro group-hover:translate-x-0.5 transition-transform" />
                        Enviar Solicitud de Cotización
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-400 font-medium text-center">
                    * Campos obligatorios. Sus datos están protegidos por la Ley
                    N° 29733 de Protección de Datos Personales en el Perú.
                  </p>
                </motion.form>
              ) : (
                /* Success Screen Panel */
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-hoja/15 text-brand-hoja flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-brand-bosque tracking-tight">
                      ¡Requerimiento Recibido con Éxito!
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-hoja font-semibold uppercase tracking-wider mt-1.5">
                      AmbientalMente LV E.I.R.L.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 max-w-sm w-full space-y-2">
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                      Código de Trazabilidad
                    </div>
                    <div className="font-mono text-lg font-bold text-brand-bosque">
                      {ticketNumber}
                    </div>
                    <p className="font-sans text-[11px] text-slate-500 leading-snug">
                      Se ha generado un ticket de atención en nuestro sistema de
                      CRM Técnico. Un ingeniero especialista se pondrá en
                      contacto con usted a través de su correo corporativo
                      registrado.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-brand-hoja" />
                    <span className="font-sans text-[11px] font-medium">
                      Registro seguro y encriptado
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-brand-bosque hover:text-brand-hoja transition-colors cursor-pointer mt-4"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>

        {/* Google Maps — ancho completo con marcador y tarjeta de ubicación */}
        <Reveal
          direction="up"
          delay={0.1}
          className="mt-12 relative rounded-3xl overflow-hidden border border-slate-100 shadow-sm w-full h-80 sm:h-96"
        >
          <iframe
            title="Ubicación AmbientalMente LV"
            src="https://maps.google.com/maps?q=-7.132930,-78.511903&z=17&hl=es&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-15 contrast-[1.03]"
          />

          {/* Tarjeta flotante con la dirección de la empresa */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-end p-4 sm:p-6">
            <div className="pointer-events-auto w-full sm:max-w-xs bg-white/90 backdrop-blur-md rounded-2xl shadow-xl ring-1 ring-black/5 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                {/* Marcador con pulso animado */}
                <span className="relative shrink-0">
                  <span className="absolute inset-0 rounded-full bg-brand-claro/40 animate-ping" />
                  <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-brand-bosque text-white shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </span>
                </span>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm text-brand-bosque leading-tight">AmbientalMente LV</h4>
                  <p className="font-sans text-xs text-slate-500 leading-snug mt-1">
                    Jr. Villa Tres Molinos Mz. C Lote 16 E, Cajamarca – Perú
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=-7.132930,-78.511903"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-white bg-brand-bosque hover:bg-brand-bosque/90 transition-colors rounded-full px-3.5 py-2 shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
