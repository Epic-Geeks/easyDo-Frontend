export default function Stats() {
    return (
      <section 
      className="stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto -mt-8 px-4">
        <div>
          <h1 className="md:text-[40px] text-[25px] font-bold">120k+</h1>
          <p>Happy Customers</p>
        </div>
        <div>
          <h1 className="md:text-[40px] text-[25px] font-bold">20k</h1>
          <p>Providers</p>
        </div>
        <div>
          <h1 className="md:text-[40px] text-[25px] font-bold">24/7</h1>
          <p>Availability</p>
        </div>
        <div>
          <h1 className="md:text-[40px] text-[25px] font-bold">70+</h1>
          <p>Services</p>
        </div>
      </section>
    );
  }
  