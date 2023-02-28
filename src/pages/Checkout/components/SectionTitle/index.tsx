import { IconProps } from 'phosphor-react';
import React from 'react';
import { RegularText } from '../../../../components/Typography';
import { SectionTitleContainer } from './styles';

interface SectionTitleProps {
  icon: {
    phosphorIcon: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;
    color: string;
  };
  title: string;
  subtitle: string;
}

export function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {React.createElement(icon.phosphorIcon, {
        size: 22,
        color: icon.color,
      })}
      <div>
        <RegularText size="m" color={'subtitle'}>
          {title}
        </RegularText>
        <RegularText size="s" color={'text'}>
          {subtitle}
        </RegularText>
      </div>
    </SectionTitleContainer>
  );
}
