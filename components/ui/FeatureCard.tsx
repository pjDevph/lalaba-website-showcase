import {
  CalendarCheck2,
  Clock3,
  ClipboardList,
  Eye,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Users,
  WashingMachine,
} from "lucide-react";
import type { IconName } from "@/types/site";
import { cn } from "@/lib/utils";

const iconMap = {
  "map-pin": MapPin,
  calendar: CalendarCheck2,
  truck: Truck,
  route: Route,
  store: Store,
  "washing-machine": WashingMachine,
  clock: Clock3,
  clipboard: ClipboardList,
  sparkles: Sparkles,
  messages: MessageCircle,
  eye: Eye,
  smartphone: Smartphone,
  users: Users,
  shirt: Shirt,
  "package-check": PackageCheck,
} satisfies Record<IconName, typeof ShoppingBag>;

export function SiteIcon({ name, size = 22, className }: { name: IconName; size?: number; className?: string }) {
  const Icon = iconMap[name];
  return <Icon size={size} className={className} aria-hidden="true" />;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconName;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <article className={cn("feature-card", className)}>
      <span className="icon-tile"><SiteIcon name={icon} /></span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
