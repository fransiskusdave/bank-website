import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-full h-full relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="hidden sm:block" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultricies ametodio
        aenean neque. Fusce ipsum rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-wrap mt-6 sm:mt-10">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] cursor-pointer mr-5 object-contain"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] cursor-pointer object-contain"
        />
      </div>
    </div>
  </section>
);

export default Billing;
