import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '硬件设计',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        SpinalHDL Arduino
      </>
    ),
  },
  {
    title: '全栈开发',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        React FastApi Rust Go
      </>
    ),
  },
  {
    title: '深度学习',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        学习中……(开润，学nm)
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className={styles.featuresDocs}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
      
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title={"Home"}
      description="开摆就完了">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">啊对对对</h1>
          <p className="hero__subtitle">开摆就完了</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              开润
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
