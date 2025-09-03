"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Setting {
  id: number;
  name: string;
  role: string;
  description: string;
}

interface Service {
  id: number;
  part: string;
  descriptionPart: string;
}

interface Testimonial {
  id: number;
  namePeople: string;
  descriptiontest: string;
}

export default function Home() {
  const [setting, setSetting] = useState<Setting | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Ambil data setting (profil)
        const resSetting = await fetch("http://localhost:3045/api/settings");
const dataSetting = await resSetting.json();
console.log("Settings:", dataSetting);

const resServices = await fetch("http://localhost:3045/api/services");
const dataServices = await resServices.json();
console.log("Services:", dataServices);

const resTestimonials = await fetch("http://localhost:3045/api/testimonials");
const dataTestimonials = await resTestimonials.json();
console.log("Testimonials:", dataTestimonials);

        setSetting(dataSetting);
        setServices(dataServices);
        setTestimonials(dataTestimonials);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-white text-2xl animate-pulse min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]">
      {/* Profile Section */}
      {setting && (
        <main className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-[1000px] w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col md:flex-row items-center md:items-start p-10 gap-10 border border-white/20 hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/arkan.svg"
              alt="Profile"
              width={240}
              height={240}
              className="rounded-full border-4 border-white shadow-xl hover:rotate-3 transition-transform duration-300"
            />
            <div className="text-left flex-1">
              <h2 className="text-4xl font-extrabold text-white mb-2 drop-shadow-md">Hi, I’m {setting?.name}</h2>
              <p className="text-yellow-300 text-lg font-semibold mb-3 tracking-wide">A {setting.role}</p>
              <p className="text-white/90 text-base leading-relaxed">{setting.description}</p>
            </div>
          </div>
        </main>
      )}

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-purple-900/70 via-red-800/70 to-orange-600/70 backdrop-blur-md text-white"
              >
                <h3 className="text-xl font-semibold mb-2">{s.part}</h3>
                <p className="text-sm">{s.descriptionPart}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-purple-900/70 via-red-800/70 to-orange-600/70 backdrop-blur-md text-white"
                  >
                    <h3 className="text-xl font-semibold mb-2">{t.namePeople}</h3>
                    <p className="text-sm">{t.descriptiontest}</p>
                  </div>
                ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
