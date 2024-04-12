import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="hidden sm:block" />
        saying about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="feedback-container w-full flex flex-wrap justify-center sm:justify-start relative z-[1]">
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
