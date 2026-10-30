import { useState } from 'react';
import { useDarkMode } from '../Context/contexts';
import { FaGithubAlt, FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const EMAIL = "sabrinabessa754@gmail.com";
const PHONE_DISPLAY = "+213 797 81 76 23";
const PHONE_LINK = "tel:+213797817623";
const WHATSAPP_NUMBER = "213797817623";
// FormSubmit forwards submissions to EMAIL (no backend needed). The first
// submission from the live site sends an activation email that must be confirmed once.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const emptyForm = { name: '', email: '', service: '', message: '', _honey: '' };

export default function Contact({ lang }) {
  const { isDark } = useDarkMode();
  const c = lang.contact;
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const contacts = [
    { icon: SiFiverr, label: "Fiverr", url: "https://www.fiverr.com/s/qDrvwjZ" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/saab-imm-4697a8320" },
    { icon: FaGithubAlt, label: "GitHub", url: "https://github.com/SaabImm" },
  ];

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form._honey) return; // bot filled the hidden field
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service || '-',
          message: form.message,
          _replyto: form.email,
          _subject: `Portfolio: new message from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message);
      setStatus('success');
      setForm(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  const heading = isDark ? 'text-white' : 'text-gray-900';
  const body = isDark ? 'text-gray-300' : 'text-gray-700';
  const muted = isDark ? 'text-gray-400' : 'text-gray-500';
  const card = isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200/50';
  const input = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] ${
    isDark ? 'bg-black/40 border-white/10 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
  }`;
  const label = `block text-xs font-semibold mb-1.5 ${muted}`;

  return (
    <div className={`min-h-screen px-4 py-16 md:px-8 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl ${
        isDark ? 'bg-[#ff0000]/5' : 'bg-[#ff0000]/10'
      }`}></div>

      <div className="relative z-10 max-w-5xl mx-auto font-[Montserrat]">
        <h1 className={`font-[Aclonica] text-3xl md:text-4xl w-max mx-auto mb-8 border-b-4 border-[#ff0000] pb-2 ${heading}`}>
          {c.title}
        </h1>

        <p className={`text-center text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 ${body}`}>
          {c.text}
        </p>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className={`lg:col-span-3 p-6 md:p-8 rounded-2xl border shadow-xl backdrop-blur-sm space-y-5 ${card}`}>
            <h2 className={`font-[Aclonica] text-xl ${heading}`}>{c.form.title}</h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cf-name" className={label}>{c.form.name}</label>
                <input id="cf-name" name="name" required value={form.name} onChange={update} placeholder={c.form.namePh} className={input} />
              </div>
              <div>
                <label htmlFor="cf-email" className={label}>{c.form.email}</label>
                <input id="cf-email" name="email" type="email" required value={form.email} onChange={update} placeholder={c.form.emailPh} className={input} />
              </div>
            </div>

            <div>
              <label htmlFor="cf-service" className={label}>{c.form.service}</label>
              <select id="cf-service" name="service" value={form.service} onChange={update} className={input}>
                <option value="">{c.form.servicePh}</option>
                {Object.values(lang.services.offers).map((o) => (
                  <option key={o.title} value={o.title}>{o.title}</option>
                ))}
                <option value={c.form.other}>{c.form.other}</option>
              </select>
            </div>

            <div>
              <label htmlFor="cf-message" className={label}>{c.form.message}</label>
              <textarea id="cf-message" name="message" required rows={5} value={form.message} onChange={update} placeholder={c.form.messagePh} className={`${input} resize-y`} />
            </div>

            {/* Honeypot: hidden from people, filled in by spam bots */}
            <input type="text" name="_honey" value={form._honey} onChange={update} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-[#ff0000] rounded-full hover:bg-[#ff0000]/80 transition-all duration-300 shadow-lg shadow-[#ff0000]/25 disabled:opacity-60 disabled:cursor-wait"
            >
              <FaPaperPlane className="text-xs" /> {status === 'sending' ? c.form.sending : c.form.send}
            </button>

            {status === 'success' && (
              <p role="status" className="flex items-center gap-2 text-sm text-green-500">
                <FaCheckCircle /> {c.form.success}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="flex items-start gap-2 text-sm text-[#ff0000]">
                <FaExclamationCircle className="mt-0.5 shrink-0" />
                <span>{c.form.error} <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a></span>
              </p>
            )}
          </form>

          {/* Direct contact */}
          <div className="lg:col-span-2 space-y-4">
            <a href={`mailto:${EMAIL}`} className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#ff0000]/30 ${card}`}>
              <div className="p-3 rounded-xl bg-[#ff0000]/10 text-[#ff0000]"><FaEnvelope /></div>
              <div className="min-w-0">
                <div className={`text-xs ${muted}`}>{c.emailLabel}</div>
                <div className={`text-sm font-semibold break-all ${heading} group-hover:text-[#ff0000]`}>{EMAIL}</div>
              </div>
            </a>
            <a href={PHONE_LINK} className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#ff0000]/30 ${card}`}>
              <div className="p-3 rounded-xl bg-[#ff0000]/10 text-[#ff0000]"><FaPhoneAlt /></div>
              <div>
                <div className={`text-xs ${muted}`}>{c.phoneLabel}</div>
                <div className={`text-sm font-semibold ${heading} group-hover:text-[#ff0000]`}>{PHONE_DISPLAY}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(c.whatsapp.text)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#25d366]/50 ${card}`}
            >
              <div className="p-3 rounded-xl bg-[#25d366]/10 text-[#25d366]"><FaWhatsapp /></div>
              <div>
                <div className={`text-xs ${muted}`}>{c.whatsapp.label}</div>
                <div className={`text-sm font-semibold ${heading} group-hover:text-[#25d366]`}>{c.whatsapp.value}</div>
              </div>
            </a>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ff0000]/30 ${card}`}
                  >
                    <Icon className={`text-2xl mx-auto mb-2 transition-colors ${muted} group-hover:text-[#ff0000]`} />
                    <div className={`text-xs ${body}`}>{contact.label}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`mt-16 text-xs text-center border-t pt-8 ${
          isDark ? 'text-gray-600 border-white/5' : 'text-gray-400 border-gray-200/30'
        }`}>
          © {new Date().getFullYear()} Bessa Sabrina · {lang.contact.footer}
        </div>
      </div>
    </div>
  );
}
