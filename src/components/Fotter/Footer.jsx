import styles from "./Footer.module.css";
import itchioLogo from "../../assets/itchio.svg";
import instagramLogo from "../../assets/instagram.svg";
import twitterXLogo from "../../assets/twitter-x.svg";
import blueskyLogo from "../../assets/bluesky.svg";
import acjogosLogo from "../../assets/acjogos.svg";

const socialMedia = [
  {
    name: "Itch.io",
    ariaLabel: "Itch.io do GDP UFRJ",
    logo: itchioLogo,
    url: "#",
  },
  {
    name: "Instagram",
    ariaLabel: "Instagram do GDP UFRJ",
    logo: instagramLogo,
    url: "#",
  },
  {
    name: "Twitter/X",
    ariaLabel: "Twitter/X do GDP UFRJ",
    logo: twitterXLogo,
    url: "#",
  },
  {
    name: "Bluesky",
    ariaLabel: "Bluesky do GDP UFRJ",
    logo: blueskyLogo,
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.social_media_container}>
        <h2>Redes Sociais</h2>

        <ul>
          {socialMedia.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.logo} alt="" width={60} height={60} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.contato_container}>
        <h2>Contato</h2>

        <a href="mailto:gdp.ufrj@gmail.com">gdp.ufrj@gmail.com</a>
      </section>

      <section className={styles.filiado_container}>
        <h2>Filiado à</h2>

        <img src={acjogosLogo} alt="Logo da ACJogos" />
      </section>
    </footer>
  );
};

export default Footer;
