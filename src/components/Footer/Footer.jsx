import styles from "./Footer.module.css";
import itchioLogo from "../../assets/redes/itchio.svg";
import instagramLogo from "../../assets/redes/instagram.svg";
import youtubeLogo from "../../assets/redes/youtube.svg";
import twitterXLogo from "../../assets/redes/twitter-x.svg";
import blueskyLogo from "../../assets/redes/bluesky.svg";
import acjogosLogo from "../../assets/acjogos.svg";

const socialMedia = [
  {
    name: "Itch.io",
    ariaLabel: "Itch.io da GDP UFRJ",
    logo: itchioLogo,
    url: "https://gdpufrj.itch.io/",
  },
  {
    name: "Instagram",
    ariaLabel: "Instagram da GDP UFRJ",
    logo: instagramLogo,
    url: "https://www.instagram.com/gdpufrj/",
  },
  {
    name: "Youtube",
    ariaLabel: "Youtube da GDP UFRJ",
    logo: youtubeLogo,
    url: "https://www.youtube.com/@GDPUFRJ",
  },
  {
    name: "Twitter/X",
    ariaLabel: "Twitter/X da GDP UFRJ",
    logo: twitterXLogo,
    url: "https://x.com/gdpufrj",
  },
  {
    name: "Bluesky",
    ariaLabel: "Bluesky da GDP UFRJ",
    logo: blueskyLogo,
    url: "https://bsky.app/profile/gdpufrj.bsky.social",
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
                <img src={social.logo} alt={`Logo ${social.name}`} width={60} height={60} />
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
        <a
          href="https://rj.acjogos.com.br/"
          aria-label="Website ACJogos-RJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={acjogosLogo} alt="Logo da ACJogos-RJ" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
