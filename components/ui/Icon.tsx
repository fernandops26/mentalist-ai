import {
	Circle,
	FlagTriangleRight,
	CircleDot,
	LucideIcon,
	X,
	Wand,
	Github,
	Twitter,
	AirVent,
	Lightbulb,
	Candy,
	Code,
	Menu,
} from 'lucide-react';

type IconComponentProps = { name: string; [x: string]: any };
type IconTypes = { [name: string]: LucideIcon };

const iconTypes: IconTypes = {
	circle: Circle,
	triangle: FlagTriangleRight,
	circleDot: CircleDot,
	close: X,
	want: Wand,
	github: Github,
	twitter: Twitter,
	logo: AirVent,
	idea: Lightbulb,
	candy: Candy,
	code: Code,
	menu: Menu,
};

const IconComponent = ({ name, ...props }: IconComponentProps) => {
	let Icon = iconTypes[name];

	return <Icon {...props} />;
};

export default IconComponent;
