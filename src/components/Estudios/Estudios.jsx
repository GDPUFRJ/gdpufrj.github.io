import styles from "./Estudios.module.css";

import oduLogo from "../../assets/estudios/Odu.png"
import garoaLogo from "../../assets/estudios/Garoa.png"
import verbenaLogo from "../../assets/estudios/Verbena.png"
import cottoncatLogo from "../../assets/estudios/CottonCat.png"
import hexfrogLogo from "../../assets/estudios/HexFrog.png"

import itchioLogo from "../../assets/redes/itchio.svg";
import instagramLogo from "../../assets/redes/instagram.svg";
import websiteLogo from "../../assets/redes/website.svg";
import steamLogo from "../../assets/redes/steam.svg";
import tiktokLogo from "../../assets/redes/tiktok.svg";

const estudioCards = [
    {
        name: "Odu Studios",
        logo: oduLogo,
        redes: [
            {
                name: "Website",
                logo: websiteLogo,
                url: "https://www.odustudios.com.br"
            },
            {
                name: "Steam",
                logo: steamLogo,
                url: "https://store.steampowered.com/curator/45613930"
            },
            {
                name: "Instagram",
                logo: instagramLogo,
                url: "https://www.instagram.com/odustudios"
            }
        ] 
    },
    {
        name: "Garoa Studios",
        logo: garoaLogo,
        redes: [
            {
                name: "Website",
                logo: websiteLogo,
                url: "https://garoastudios.com/"
            },
            {
                name: "Steam",
                logo: steamLogo,
                url: "https://store.steampowered.com/publisher/garoastudios"
            },
            {
                name: "Instagram",
                logo: instagramLogo,
                url: "https://www.instagram.com/garoastudios"
            }
        ] 
    },
    {
        name: "Verbena Studios",
        logo: verbenaLogo,
        redes: [
            {
                name: "Itch.io",
                logo: itchioLogo,
                url: "https://verbenastudio.itch.io/"
            },
            {
                name: "Instagram",
                logo: instagramLogo,
                url: "https://www.instagram.com/verbenagamestudio/"
            }
        ] 
    },
    {
        name: "Cotton Cat",
        logo: cottoncatLogo,
        redes: [
            {
                name: "Itch.io",
                logo: itchioLogo,
                url: "https://cottoncatstudios.itch.io/"
            },
            {
                name: "Tiktok",
                logo: tiktokLogo,
                url: "https://www.tiktok.com/@cottoncatstudios"
            }
        ] 
    },
    {
        name: "Hex Frog",
        logo: hexfrogLogo,
        redes: [
            {
                name: "Itch.io",
                logo: itchioLogo,
                url: "https://hexfroggames.itch.io/"
            }
        ] 
    }
]

const Estudios = () => {
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <div className={styles.intro}>
          <h1>Estúdios</h1>

          <p>
            Ao longo dos anos, integrantes da GDP UFRJ se juntaram e levaram seu trabalho em equipe do
            ambiente acadêmico para o ambiente profissional e, em conjunto com outros membros, montaram seus próprios estúdios de jogos.
          </p>

        </div>

        <section className={styles.estudios_section}>
            {estudioCards.map((card) => (
              <div className={styles.estudios_card}>
                <img src={card.logo} alt={`Logo ${card.name}`} className={styles.estudios_card_logo}/>
                <div className={styles.estudios_card_info}>
                    <h2>{card.name}</h2>
                    <div className={styles.social_media_container}>
                        <ul>
                        {card.redes.map((social) => (
                            <li key={social.name}>
                            <a
                                href={social.url}
                                aria-label={`${social.name} - ${card.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={social.logo} alt={`Logo ${social.name}`} width={50} height={50} />
                            </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
              </div>
            ))}
          
        </section>
      </section>
    </main>
  );
};

export default Estudios;
