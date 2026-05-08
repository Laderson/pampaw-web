import ServiceCard from "./service-card";

type Service = {
  id: string;
  name: string;
  description: string | null;
  price: number;
};

type ServicesGridProps = {
  services: Service[];
};

export default function ServicesGrid({
  services,
}: ServicesGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          name={service.name}
          description={service.description}
          price={service.price}
        />
      ))}
    </div>
  );
}