"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const options = ["Popularité", "Date", "Titre"];

type Props = {
  onSortChange?: (sortBy: string) => void;
};

export default function SortSelect({ onSortChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSortChange?.(option);
  };

  return (
    <div className="flex items-center gap-4 md:gap-5">
      <span id="8" className="text-base font-bold text-primary">
        Trier par
      </span>

      <div className="relative">
        <button
          id="sort-select"
          type="button"
          role="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex min-w-[140px] items-center justify-between rounded-[5px] bg-primary px-4 py-3 text-base font-bold text-white outline-none"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="8"
        >
          <span>{selected}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isOpen && (
          <ul role="listbox" aria-labelledby="8" className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-[5px] bg-primary text-white shadow-lg">
            {options.map((option, index) => {
              const isSelected = option === selected;

              return (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-base font-bold transition-colors ${
                      isSelected ? "bg-primary/90" : "bg-primary hover:bg-primary/90"
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span>{option}</span>
                    {isSelected && <ChevronUp className="w-4 h-4" />}
                  </button>
                  {index < options.length - 1 && <div className="h-px mx-[10px] bg-white" ></div>}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}