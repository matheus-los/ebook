import { Download, MessageCircle } from "lucide-react";

const CONFIG = {
    nomeIgreja: "Igreja Vida Nova",
    tituloEbook: "Título de Ebook",
    subtitulo: "Um passo simples para começar essa leitura com a gente.",
    linkEbook: "https://....",
    whatsappNumero: "",
    whatsappMensagem: "Olá! Baixei o ebook e gostaria de conversar.",
    corAccent: "#9AABA2",
    corBase: "#0F3A29",
    rodape: "Deus te abençoe!",
};

export default function EbookLandingPage({ config = CONFIG }) {
    const whatsappHref = `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(
    config.whatsappMensagem
  )}`;

  return (
    <div
        className="min-h-screen w-full flex items-center justify-center px-5 py-8"
        style={{ backgroundColor: config.corBase }}
    >
        <div className="w-full max-w-[420px] flex flex-col items-center text-center">
            <div
                className="w-14 h-14 rounded-full border flex items-center justify-center mb-6"
                style={{ borderColor: config.corAccent }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    style={{ stroke: config.corAccent}}
                >
                    <path d="M4 5.5C4 4.67 4.67 4 5.5 4H12V20H5.5C4.67 20 4 19.33 4 18.5V5.5Z" />
                    <path d="M20 5.5C20 4.67 19.33 4 18.5 4H12V20H18.5C19.33 20 20 19.33 20 18.5V5.5Z" />

                </svg>
            </div>

            <div className="text-[13px] trackin-wide text-white/60 mb-7">
                {config.nomeIgreja}
            </div>

            <h1
                className="text-[28px] sm:text-[36px] leading-tight font-medium mb-3"
                style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#F4F1E9" }}
            >
                {config.tituloEbook}
            </h1>
            <p className="text-[15px] leading-relaxed text-white/60 mb-9 max-w-[320px]">
                {config.subtitulo}
            </p>

            <div className="w-full flex flex-col gap-3 mb-2">
                <a
                    href={config.linkEbook}
                    targer="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-5 rounded-[10px] text-[15px] font-medium flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ backgroundColor: config.corAccent, color: config.corBase }}
                >
                    <Download className="w-[18px] h-[18px]" strokeWidth={2} />
                    Baixar o ebook
                </a>

                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-5 rounded-[10px] text-[15px] font-medium flex items-center justify-center gap-2.5 border border-white/20 text-[#F4F1E9] transition-transform hover:-translate-y-0.5 hover:border-white/40 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2} />
                    Falar no WhatsApp
                </a>
            </div>

            <div className="mt-10 text-[12.5px] text-white/40">{config.rodape}</div>
        </div>
    </div>
  );
}