import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <section className={styles.featuresSection}>
          <div className={styles.grid}>
            <Link to="/docs/configuration" className={styles.card}>
              <div>
                <Heading as="h3" className={styles.cardTitle}>
                  Configuration
                </Heading>
                <p className={styles.cardDescription}>
                  Learn how to configure library options to customize your
                  telemetry setup.
                </p>
              </div>
              <span className={styles.cardLink}>Configure telemetry</span>
            </Link>

            <Link to="/docs/plugins/getting-started" className={styles.card}>
              <div>
                <Heading as="h3" className={styles.cardTitle}>
                  Get Started with Plugins
                </Heading>
                <p className={styles.cardDescription}>
                  Extend the library's functionality by installing and
                  configuring plugins.
                </p>
              </div>
              <span className={styles.cardLink}>Explore plugins</span>
            </Link>

            <Link to="/docs/exporters/extra-exporters" className={styles.card}>
              <div>
                <Heading as="h3" className={styles.cardTitle}>
                  Extra Exporters
                </Heading>
                <p className={styles.cardDescription}>
                  Configure Prometheus, OTEL Collector or any other extra
                  exporters.
                </p>
              </div>
              <span className={styles.cardLink}>Set up exporters</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
