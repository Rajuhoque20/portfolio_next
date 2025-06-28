'use client'
import { useEffect } from "react";

export const useShow = (hidden: string, show: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         entry.target.classList.remove(show); 
        if (entry.isIntersecting) {
          entry.target.classList.add(show);
        } else {
          entry.target.classList.remove(show); // ✅ Fix this line
        }
      });
    });

    const elements = document.querySelectorAll(`.${hidden}`);
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [hidden, show]);
};
