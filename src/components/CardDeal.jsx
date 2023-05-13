import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Embrace Health with <br className="sm:block hidden" /> Sustainable
        Choices
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Coffee Zero takes pride in its eco-friendly packaging. Free from
        artificial materials, our recyclable packaging reflects our commitment
        to both your well-being and the planet. Sip guilt-free, knowing you're
        making a sustainable choice for a healthier future.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
