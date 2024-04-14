"use client";
import { motion } from "framer-motion";

export default function ProductsSkeleton() {
  const preFechList = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid w-full grid-cols-2 lg:grid-cols-4 md:grid-rows-2 gap-12">
      {preFechList.map((item) => (
        <motion.div
        key={item}
          whileInView={{
            opacity: 0,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              duration: 1.2,
            },
          }}
          initial={{ opacity: 1 }}
          className="border w-52 min-h-80 lg:max-w-72 lg:max-h-104 rounded-lg bg-slate-200"
        ></motion.div>
      ))}
    </div>
  );
}
