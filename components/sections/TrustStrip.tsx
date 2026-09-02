import { CalendarCheck2, Eye, Store, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { label: "Convenient booking", Icon: CalendarCheck2 },
  { label: "Laundry provider choice", Icon: Store },
  { label: "Order progress visibility", Icon: Eye },
  { label: "Pickup and delivery where available", Icon: Truck },
];

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Lalaba experience highlights">
      <Container className="trust-grid">
        {items.map(({ label, Icon }) => (
          <div className="trust-item" key={label}>
            <Icon aria-hidden="true" size={20} />
            <span>{label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
