"use client";

import { motion } from "framer-motion";
import { Monitor, Send, Users, Building2, Package } from "lucide-react";

export default function Onboarding() {
  const steps = [
    {
      icon: Monitor,
      title: "Onboarding",
      description: "Verbinde deine Blogs mit wenigen Klicks",
    },
    {
      icon: Send,
      title: "Synchronization",
      description: "Synchronisiere deine Produkte",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Wir kümmern uns um Warenausgang, Qualitätskontrolle und Fulfillment in einem professionellen Lager mit unserem Netzwerk",
    },
    {
      icon: Building2,
      title: "Fulfillment",
      description:
        "Die gülte der Sortierung für das Fulfillment. Bestellte Bestellungen werden automatisch importiert und bearbeitet",
    },
    {
      icon: Package,
      title: "Delivery",
      description:
        "Melde deinen ersten Warenausgang an und lass deine Pakete zügig versenden",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center text-center ${
                index % 2 === 1 ? "md:mt-32" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl" />
                <div className="relative w-16 h-16 bg-background border border-border rounded-xl shadow-lg flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
