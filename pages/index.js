import Head from 'next/head';
import styles from 'styles/Home.module.css';
import MainLayout from 'components/layouts/MainLayout';
import Button from 'components/base/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pest Control Management Software</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Zero Tolerance Pest Control</h1>
        <Button color="blue" label="nothing will happen if you press me" />
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
