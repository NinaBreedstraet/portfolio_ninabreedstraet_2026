import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactgegevens}>
        <h2>Let's get to know each other!</h2>
        <p>
          email address:
          <a href="mailto:breedstraetnina@gmail.com">
            breedstraetnina@gmail.com
          </a>
        </p>
        <p>
          personal instagram:
          <a href="https://www.instagram.com/ninabreedstraet/">
            @ninabreedstraet
          </a>
        </p>
        <p>
          graphic design instagram:
          <a href="https://www.instagram.com/n.breedstraet/">@n.breedstraet</a>
        </p>
        <p>
          linked-in:
          <a href="https://be.linkedin.com/in/nina-breedstraet-895a88236">
            Nina Breedstraet
          </a>
        </p>
      </div>
    </div>
  );
}
