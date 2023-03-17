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
  const image = intl.formatMessage({ id: "page.home.img" });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico.svg" />
        <link rel="icon" href="/favicon.ico.svg" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico.svg" hrefLang="en" />
        <link rel="icon" href="/favicon.ico.svg" hrefLang="fr" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.topNav}>
          <div><FormattedMessage id="nav.learninghub" /></div>
          <div><FormattedMessage id="nav.mybcit" /></div>
          <div><FormattedMessage id="nav.students" /></div>
          <div><FormattedMessage id="nav.staff" /></div>
          <div><FormattedMessage id="nav.events" /></div>
        </div>

        <div className={styles.mainNav}>
          <img src="https://issp.bcit.ca/BCIT_logo.png" width={80} height={80} />
          <div><FormattedMessage id="nav.procourse" /></div>
          <div><FormattedMessage id="nav.admission" /></div>
          <div><FormattedMessage id="nav.services" /></div>
          <div><FormattedMessage id="nav.research" /></div>
          <div><FormattedMessage id="nav.about" /></div>

          <div>
            <form className={styles.searchbox}>
              <input className={styles.input} />
              <button>
                <img width={20} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/OOjs_UI_icon_search-ltr-progressive.svg/240px-OOjs_UI_icon_search-ltr-progressive.svg.png" />
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className={styles.underNav}>
        <div><FormattedMessage id="underNav.study" /></div>
        <div><FormattedMessage id="underNav.department" /></div>
        <div><FormattedMessage id="underNav.program" /></div>
      </div>
      
      <img src={image} className={styles.image}/>


      <main dir={dir}>

        <div className={styles.intro}>
          <h1>
            <FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b> }} />
          </h1>
          <p>
            <FormattedMessage id="page.home.description" />
          </p>

          <header className={styles.lang}>
          <h1><FormattedMessage id="lang" /> </h1>
          <div className={styles.langconvert}>
            {[...locales].sort().map((locale) => (
              <Link key={locale} href="/" locale={locale}>
                <div>{locale}</div>
              </Link>
            ))}
          </div>
        </header>

        </div>

        <div className={styles.mainBody}>
          <div className={styles.leftSide}>
            <div>
              <h3 className={styles.lefth2}><FormattedMessage id="main.left.aboutProgram" /></h3>
              <div className={styles.list}>
                <p><FormattedMessage id="main.left.aboutProgram.list1" /></p>
                <p><FormattedMessage id="main.left.aboutProgram.list2" /></p>
                <p><FormattedMessage id="main.left.aboutProgram.list3" /></p>
                <p><FormattedMessage id="main.left.aboutProgram.list4" /></p>
                <p><FormattedMessage id="main.left.aboutProgram.list5" /></p>
                <p><FormattedMessage id="main.left.aboutProgram.list6" /></p>
                <p className={styles.linking}><FormattedMessage id="main.left.aboutProgram.list7"/></p>
                <p><FormattedMessage id="main.left.aboutProgram.list8" /></p>
                <p><FormattedMessage id="main.left.aboutProgram.list9" /></p>
              </div>
            </div>

            <div>
              <h2><FormattedMessage id="main.left.infoSessions" /></h2>
              <p>
              <FormattedMessage id="main.left.infoSessions.desc" />
              </p>
              <ul>
                <li> <span className={styles.linking}><FormattedMessage id="main.left.infoSessions.list1" /></span></li>
                <li> <span className={styles.linking}><FormattedMessage id="main.left.infoSessions.list2" /></span></li>
                <li> <span className={styles.linking}><FormattedMessage id="main.left.infoSessions.list3" /></span></li>
                <li> <span className={styles.linking}><FormattedMessage id="main.left.infoSessions.list4" /></span></li>
              </ul>
              <p><FormattedMessage id="main.left.infoSessions.end1"/><span className={styles.linking}><FormattedMessage id="main.left.infoSessions.end2" /></span></p>
            </div>

            <div>
              <h2><FormattedMessage id="main.left.progOverview"/></h2>
              <div className={styles.list}>
                <p><b><FormattedMessage id="main.left.overview.list1a" /></b><FormattedMessage id="main.left.overview.list1b" /></p>
                <p><b><FormattedMessage id="main.left.overview.list2a" /></b><FormattedMessage id="main.left.overview.list2b" /></p>
                <p><b><FormattedMessage id="main.left.overview.list3a" /></b><FormattedMessage id="main.left.overview.list3b" /></p>
                <p><b><FormattedMessage id="main.left.overview.list4a" /></b><FormattedMessage id="main.left.overview.list4b" /></p>
                <p><b><FormattedMessage id="main.left.overview.list5a" /></b><FormattedMessage id="main.left.overview.list5b" /></p>
                <p><b><FormattedMessage id="main.left.overview.list6a" /></b><FormattedMessage id="main.left.overview.list6b" /></p>
                <p><b><FormattedMessage id="main.left.overview.list7a" /></b><FormattedMessage id="main.left.overview.list7b" /></p>
                <p><FormattedMessage id="main.left.overview.list8a" /></p>
              </div>
              <p className={styles.linking}><b><FormattedMessage id="main.left.overview.end" /></b></p>
            </div>

            <div>
              <h2><FormattedMessage id="main.left.recent"/></h2>
              <div className={styles.gap}>
                <div><p className={styles.linking}><FormattedMessage id="main.left.recent.list1a" /></p> <p><FormattedMessage id="main.left.recent.list1b" /></p></div>
                <div><p className={styles.linking}><FormattedMessage id="main.left.recent.list2a" /></p> <p><FormattedMessage id="main.left.recent.list2b" /></p></div>
                <div><p className={styles.linking}><FormattedMessage id="main.left.recent.list3a" /></p> <p><FormattedMessage id="main.left.recent.list3b" /></p></div>
                <div><p className={styles.linking}><FormattedMessage id="main.left.recent.list4a" /></p> <p><FormattedMessage id="main.left.recent.list4b" /></p></div>
              </div>
            </div>
          </div>

          <div className={styles.rightSide}>
            <h1 className={styles.righth1}><FormattedMessage id="main.right.graduate"/></h1>
            <p><FormattedMessage id="main.right.graduate.desc"/></p>
            <p><FormattedMessage id="main.right.graduate.job"/></p>
            <ul>
              <li><FormattedMessage id="main.right.graduate.job.list1" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list2" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list3" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list4" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list5" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list6" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list7" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list8" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list9" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list10" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list11" /></li>
              <li><FormattedMessage id="main.right.graduate.job.list12" /></li>
            </ul>

            <div>
              <h2 className={styles.righth2}><FormattedMessage id="main.right.outcome" /></h2>
              <p><FormattedMessage id="main.right.outcome.summary" /><span className={styles.underlineLink}><FormattedMessage id="main.right.outcome.summary.a" /></span></p>
              <p><FormattedMessage id="main.right.result" /><span className={styles.underlineLink}><FormattedMessage id="main.right.result.a" /></span><FormattedMessage id="main.right.result.b" /></p>
              <ul>
                <li><span className={styles.underlineLink}><FormattedMessage id="main.right.underlink" /></span></li>
              </ul>

              <div className={styles.backandnext}>
                <div>
                  <p className={styles.rightp}><FormattedMessage id="main.right.goback" /></p>
                  <span className={styles.boldUnderline}><FormattedMessage id="main.right.progDetails" /></span>
                </div>

                <div>
                  <p className={styles.rightp}><FormattedMessage id="main.right.nextup" /></p>
                  <span className={styles.boldUnderline}><FormattedMessage id="main.right.contact" /></span>
                </div>
                </div>
                <p className={styles.lastLine}><FormattedMessage id="main.right.end" /></p>

              
            </div>
          </div>
        </div>
      </main>

      <footer class={styles.footer}>
        <div class={styles.col1}>
          <h3 className={styles.footerTitle}><span className={styles.beforeLine}>____</span><FormattedMessage id="footer.col1.contact" /></h3>
          <div className={styles.footerpSmall}>
            <div><FormattedMessage id="footer.col1.contact.addr1" /></div>
            <div><FormattedMessage id="footer.col1.contact.addr2" /></div>
            <div>Canada V5G 3H2</div>
            <div className={styles.linking}><b>bcit.ca</b></div>
          </div>
          <div className={styles.footerpSmall}>
            <div><FormattedMessage id="footer.col1.contact.phone" /></div>
            <div><FormattedMessage id="footer.col1.contact.phone.toll" /></div>
            <div className={styles.linking}><b><FormattedMessage id="footer.col1.contact.more" /></b></div>
          </div>
          <img src='/socialmedia.png'/>
        </div>

        <div class={styles.col2}>
          <div class={styles.footerpLink}>
            <div><FormattedMessage id="footer.col2.visit" /></div>
            <div><FormattedMessage id="footer.col2.apply" /></div>
            <div><FormattedMessage id="footer.col2.give" /></div>
          </div>
        </div>

        <div class={styles.col3}>
          <div class={styles.footerpLink}>
            <div><FormattedMessage id="footer.col3.news" /></div>
            <div><FormattedMessage id="footer.col3.events" /></div>
            <div><FormattedMessage id="footer.col3.careers" /></div>
          </div>
        </div>

        <div class={styles.col4}>
          <h3 className={styles.footerTitle}><span className={styles.beforeLine}>____</span><FormattedMessage id="footer.col4.campus" /></h3>
          <div class={styles.footerpLink}>
            <div><FormattedMessage id="footer.col4.campus.burnaby" /></div>
            <div><FormattedMessage id="footer.col4.campus.downtown" /></div>
            <div><FormattedMessage id="footer.col4.campus.marine" /></div>
            <div><FormattedMessage id="footer.col4.campus.aerospace" /></div>
            <div><FormattedMessage id="footer.col4.campus.annacis" /></div>
          </div>
          <div className={styles.footerpSmallLink}>
            <div><FormattedMessage id="footer.col4.feedback" /></div>
            <div><FormattedMessage id="footer.col4.copyright" /></div>
            <div><FormattedMessage id="footer.col4.privacy" /></div>
          </div>
        </div>
      </footer>
    </>
  )
}
