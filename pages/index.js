import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'

export default function Home({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" hrefLang="fr" />
      </Head>

      <header>
        <div>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>

      <nav>
        <div className={styles.topNav}>
          <div>LEARNING HUB</div>
          <div>MYBCIT</div>
          <div>STUDENTS</div>
          <div>STAFF</div>
          <div>EVENTS</div>
        </div>

        <div className={styles.mainNav}>
          <img src="https://issp.bcit.ca/BCIT_logo.png" width={80} height={80} />
          <div>Program & Courses</div>
          <div>Admission</div>
          <div>Student Services</div>
          <div>Research</div>
          <div>About BCIT</div>

          <div>
            <form className={styles.searchbox}>
              <input className={styles.input}/>
              <button>
                <img width={20} height={20} src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/OOjs_UI_icon_search-ltr-progressive.svg/240px-OOjs_UI_icon_search-ltr-progressive.svg.png"/>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className={styles.topBody}>
          <div>STUDY</div>
          <div>▶ BUSINESS & MEDIA</div>
          <div>▶ DIGITAL DESIGN AND DEVELOPMENT</div>
        </div>

        <main dir={dir} className={styles.main}>
      <div className={styles.intro}>
        <h1>
          <FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b> }} />
        </h1>
        <p className={styles.description}>
          <FormattedMessage id="page.home.description" />
        </p>
      </div>
      </main>
    </>
  )
}
