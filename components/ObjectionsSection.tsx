"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Eyebrow, Display } from "./ui";

const OBJECTIONS = [
  {
    q: "Will this work if I've failed other programs in the past?",
    a: "Most programs fail because they are calorie-deficient, cardio-heavy, and ignore the fundamental differences in female biology. BGSC is a built on a behavioral identity system - we change how you view strength, not just how much of it you have.",
  },
  {
    q: "Will lifting heavy weights make me look bulky?",
    a: "No. Women have a fraction of the testosterone required to build bulk like men do. Instead, you'll develop shape, definition, and structural strength. The 'bulky' myth was created to keep women out of the weight room; we're here to break it.",
  },
  {
    q: "Can I start this system if I'm a complete beginner?",
    a: "Absolutely. Phase 1 (Foundation) was engineered specifically for beginners. We start with movement patterns and joint preparation, building your strength methodically and safely from the ground up.",
  },
  {
    q: "What equipment do I need, and can I do this from home?",
    a: "You can start with just dumbbells and bodyweight. We have a dedicated home-based track built into the system so you can see elite results without needing a commercial gym membership.",
  },
  {
    q: "What happens after my 7-day free trial ends?",
    a: "After your trial, you can continue at $49/month. If you cancel any time before day 7, you pay absolutely nothing. No friction, no questions.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes. Follow the system for 30 days, and if you don't feel stronger physically and mentally, we'll refund you in full. We stand by the standard we've built.",
  },
];

export default function ObjectionsSection() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--near-black)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* <Eyebrow>Objection Handling</Eyebrow> */}
          <Display className="text-4xl md:text-5xl uppercase tracking-tighter">
            FA<span style={{ color: "var(--crimson)" }}>Q<span className="lowercase">s</span></span>
          </Display>
          <p className="text-ash text-sm md:text-base mt-4 max-w-xl opacity-70">
            Clear answers to the friction points standing between you and the standard.
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-2">
          {OBJECTIONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Accordion.Item
                value={`item-${i}`}
                className="border border-border overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left group bg-surface-1 cursor-pointer">
                    <div className="flex items-start gap-4">
                      {/* Question */}
                      <span className="text-sm font-bold text-white pr-4">
                        {item.q}
                      </span>
                    </div>

                    <ChevronDown
                      size={16}
                      className="text-white transition-transform duration-300 group-data-[state=open]:rotate-180"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp bg-surface-1">
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-white/80">
                      {item.a}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes slideUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
        .animate-slideDown {
          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .animate-slideUp {
          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
      `}</style>
    </section>
  );
}