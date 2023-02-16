import {
  Circle,
  FlagTriangleRight,
  CircleDot,
  LucideIcon,
  X,
} from 'lucide-react';

type IconComponentProps = { name: string; [x: string]: any };
type IconTypes = { [name: string]: LucideIcon };

const iconTypes: IconTypes = {
  circle: Circle,
  triangle: FlagTriangleRight,
  circleDot: CircleDot,
  close: X,
};

const IconComponent = ({ name, ...props }: IconComponentProps) => {
  let Icon = iconTypes[name];

  return <Icon {...props} />;
};

export default IconComponent;
