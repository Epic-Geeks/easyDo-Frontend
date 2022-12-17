import ServiceCard from "./ServiceCard";
import Container from "../Container";
import { useSelector } from "react-redux";
import { fetchServices } from "../../redux/counterSlicer";
import Loading from "../pages/Loading";

export default function ServiceCards() {
  const services = useSelector(fetchServices);
  if(!services){
    return(
      <Loading/>
    )
  }
  // const pr = services.payload.counter.services.Provider.map(p=> p)
  // console.log(services.payload.counter.services[0].Provider.name)
  //react lazy
  return (
    <Container>
      <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4 mb-8">
        {services.payload.counter.services &&
        services.payload.counter.services.map((service) => (
            
          <ServiceCard
            id={service.id}
            key={service.id}
            serviceDescription={service.serviceDescription}
            averageRate={service.averageRate}
            price={service.price}
            serviceCategory={service.serviceCategory}
            providerName={service.Provider.name}
          />
        ))}
      </article>
    </Container>
  );
}
