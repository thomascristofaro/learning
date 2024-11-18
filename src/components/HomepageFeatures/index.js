import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
    {
        title: 'Thomas Cristofaro',
        Img: require('@site/static/img/thomas.png').default,
        link: 'https://cristofaro.dev',
        description: (
            <>
                Mio sito web e blog.
            </>
        ),
    },
    {
        title: 'Business Central',
        Img: require('@site/static/img/home-business-central.png').default,
        link: '/docs/business-central/Introduzione/intro',
        description: (
            <>
                Corso base e avanzato per imparare a sviluppare su Microsoft Business Central.
            </>
        ),
    }
];

function Feature({ Img, title, link, description }) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center">
                <img src={Img} className={styles.featureImg} />
                <div className="text--center padding-horiz--md">
                    <p>{description}</p>
                </div>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to={link}>
                        {title}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
