import React from 'react';
import { cn } from "@/lib/utils";

export interface SeasonCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  winnerLogo?: string;
}

interface SeasonalHoverCardsProps {
  cards: SeasonCardProps[];
  className?: string;
}

const SeasonCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
  winnerLogo,
}: SeasonCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end p-6 w-full md:w-1/3 h-[350px] lg:h-[450px] bg-background/40 backdrop-blur-xl rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:w-2/3 border border-border/30",
        className
      )}
    >
      <img
        src={imageSrc}
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt={imageAlt || title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
      
      {winnerLogo && (
        <div className="absolute top-4 right-4 z-20">
          <img 
            src={winnerLogo} 
            alt="Winner" 
            className="w-16 h-16 object-contain rounded-lg ring-2 ring-accent/50 bg-background/20 backdrop-blur-sm p-1"
          />
        </div>
      )}
      
      <div className="relative md:absolute md:bottom-20 z-10 space-y-2">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="mt-4 transform translate-y-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-lg text-foreground relative z-10">{description}</p>
      </div>
    </div>
  );
};

export function SeasonalHoverCards({
  cards,
  className,
}: SeasonalHoverCardsProps) {
  return (
    <div className={cn("flex flex-wrap md:flex-nowrap gap-4 w-full px-4", className)}>
      {cards.map((card, index) => (
        <SeasonCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          winnerLogo={card.winnerLogo}
        />
      ))}
    </div>
  );
}
