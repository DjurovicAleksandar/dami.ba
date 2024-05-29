import Image from "next/image";
import ContactForm from "./ContactForm";
import background from "@/assets/img/contact/background.webp";

export default function ContactFormWrapper() {
  return (
    <div className="px-56 py-28 relative">
      <h2 className="text-6xl font-bold mb-28 relative z-10">Vaši detalji</h2>
      <div className="absolute z-0 w-4/5 bottom-0 left-0 opacity-50">
        <Image src={background} alt="Dami.ba" className="w-full h-auto" />
      </div>
      <div className="flex items-start justify-between gap-10 relative z-10">
        <ContactForm />
        <div className="w-1/2">
          <h3 className="mb-5">
            <strong>Detalji kompanije</strong>
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="font-semibold text-2xl">Dami.ba</li>
            <li>
              Dzemala Bijedica St 134/B,
              <br /> Sarajevo 71000,
              <br /> Bosnia and Herzegovina
            </li>
            <li className="flex gap-2 group">
              Pozovite nas:
              <div>
                <a href="tel:0038765345241">0038765999999</a>
                <div className="h-[1px] w-[0rem] group-hover:w-[8rem] group-hover:bg-black duration-300 ease-linear"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-md mt-28 w-full relative z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.2659322279706!2d18.360801695271803!3d43.850316466986996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9c89673728d%3A0x7aad0feac9c2e5f6!2sDAMI%20Fitness%20and%20Health!5e0!3m2!1sen!2sba!4v1716970009206!5m2!1sen!2sba"
          width="600"
          height="450"
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
}
