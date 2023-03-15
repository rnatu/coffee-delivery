import { IconProps } from 'phosphor-react';
import React, { ReactNode } from 'react';
import { InfoWithIconContainer } from './style';

interface InfoWithIconProps {
  backgroundColor: string;
  children: ReactNode;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function InfoWithIcon({
  backgroundColor,
  icon,
  children,
}: InfoWithIconProps) {
  return (
    <InfoWithIconContainer backgroundColor={backgroundColor}>
      <span>{React.createElement(icon, { weight: 'fill' })}</span>
      {children}
    </InfoWithIconContainer>
  );
}
