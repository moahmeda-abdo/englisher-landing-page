import React from "react";
import Link from "next/link";
import Container from "./Container";

export type BreadCrumbItem = {
  title: string;
  to: string;
};

interface BreadCrumbsProps {
  items: BreadCrumbItem[];
  title: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ items, title }) => {
  return (
    <nav
      style={{
        backgroundImage: "url('/breadcrumb.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col justify-center    h-[180px] text-sm text-white/90"
      aria-label="Breadcrumb">
      <Container>
        <h2 className=" text-[40px] font-bold text-white mb-[10px]">{title}</h2>
        <div className="flex items-center">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <span key={item.to} className="flex items-center">
                {idx > 0 && <span className="mx-2 text-white/60">&gt;</span>}
                {isLast ? (
                  <span className="font-semibold text-white">{item.title}</span>
                ) : (
                  <Link
                    href={item.to}
                    className="hover:underline text-white/80">
                    {item.title}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </Container>
    </nav>
  );
};

export default BreadCrumbs;
