import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] flex-1`}
        >
          <img
            src={client.logo}
            alt="client"
            className="w-[100px] sm:w-[192px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
