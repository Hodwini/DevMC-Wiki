import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Это легко',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Создавать сервера просто, вас удерживают только
        ваши знания, навыки и усилия.
      </>
    ),
  },
  {
    title: 'У нас есть опыт',
    Svg: require('@site/static/img/experience.svg').default,
    description: (
      <>
        Мы знаем как делать сервера. За
        плечами <code>6</code> лет разработки.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
