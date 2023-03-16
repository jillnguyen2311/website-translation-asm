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
              <input className={styles.input} />
              <button>
                <img width={20} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/OOjs_UI_icon_search-ltr-progressive.svg/240px-OOjs_UI_icon_search-ltr-progressive.svg.png" />
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className={styles.underNav}>
        <div>STUDY</div>
        <div>▶ BUSINESS & MEDIA</div>
        <div>▶ DIGITAL DESIGN AND DEVELOPMENT</div>
      </div>
      
      <img src={image} className={styles.image}/>


      <main dir={dir}>

        <header className={styles.lang}>
          <h3>LANGUAGE: </h3>
          <div>
            {[...locales].sort().map((locale) => (
              <Link key={locale} href="/" locale={locale}>
                <div>{locale}</div>
              </Link>
            ))}
          </div>
        </header>

        <div className={styles.intro}>
          <h1>
            <FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b> }} />
          </h1>
          <p>
            <FormattedMessage id="page.home.description" />
          </p>
        </div>

        <div className={styles.mainBody}>
          <div className={styles.leftSide}>
            <div>
              <h3 className={styles.lefth2}>ABOUT THIS PROGRAM</h3>
              <div className={styles.list}>
                <p>Overview</p>
                <p>Entrance Requirements</p>
                <p>Advanced Placement</p>
                <p>Costs & Supplies</p>
                <p>Courses</p>
                <p>Program Details</p>
                <p className={styles.linking}>Graduating & Jobs</p>
                <p>Contact Us</p>
                <p>Subscribe</p>
              </div>
            </div>

            <div>
              <h2>Info sessions</h2>
              <p>
                Attend an upcoming information session for this program:
              </p>
              <ul>
                <li> <span className={styles.linking}>April 3rd at 5:30pm</span></li>
                <li> <span className={styles.linking}>May 8th at 5:30pm</span></li>
                <li> <span className={styles.linking}>June 19th at 5:30pm</span></li>
                <li> <span className={styles.linking}>July 10th at 5:30pm</span></li>
              </ul>
              <p>Explore all upcoming <span className={styles.linking}> BCIT info sessions.</span></p>
            </div>

            <div>
              <h2>Program Overview</h2>
              <div className={styles.list}>
                <p><b>Credential:</b> Diploma</p>
                <p><b>Format:</b> Full-time</p>
                <p><b>Length:</b> 2 years</p>
                <p><b>Start Date:</b> September</p>
                <p><b>Campus:</b> Burnaby</p>
                <p><b>Domestic Tuition:</b> $18,000*</p>
                <p><b>International Tuition:</b> $37,600*</p>
                <p>*cost estimate</p>
              </div>
              <p className={styles.linking}><b>All Business + Media Programs</b></p>
            </div>

            <div>
              <h2>Recently visited programs</h2>
              <div className={styles.gap}>
                <div><p className={styles.linking}>Digital Design and Development</p> <p>Diploma</p></div>
                <div><p className={styles.linking}>Bachelor of Business Administration</p> <p>Bachelor of Business Administration</p></div>
                <div><p className={styles.linking}>Computer Systems Technology</p> <p>Diploma</p></div>
                <div><p className={styles.linking}>Computer Systems (Games Development Option)</p> <p>Bachelor of Technology</p></div>
              </div>
            </div>
          </div>

          <div className={styles.rightSide}>
            <h1 className={styles.righth1}>Graduating & Jobs </h1>
            <p>Graduates have a variety of digital media skills that can lead them to various content design and development jobs with digital media production studios, advertising companies, design firms, and web and mobile app developers. Graduates may also have opportunities to be part of a team that creates games, digital animations, and dynamic content.</p>
            <p>Job opportunities:</p>
            <ul>
              <li>Mobile and Web Content Artist</li>
              <li>Internet Marketing Coordinator</li>
              <li>Digital Media Coordinator</li>
              <li>Web and Mobile Developer</li>
              <li>Interface Designer</li>
              <li>Game User Interface Designer</li>
              <li>Project Manager</li>
              <li>Digital Media Manager</li>
              <li>Digital Media Producer</li>
              <li>Web Development Manager</li>
              <li>Dynamic Media Designer</li>
              <li>Digital Media Product Designer</li>
            </ul>

            <div>
              <h2 className={styles.righth2}>Graduate employment outcomes</h2>
              <p>The BCIT student outcomes report presents summary findings from the annual survey of former students administered by BC Stats one to two years after graduation. These reports combine the last three years of available results for the 2020-2022 BCIT Outcomes Surveys of 2019-2021 graduates and for Degree 2017-2019 graduates. The reports are organized into three-page summaries containing information on graduates’ labour market experiences and opinions regarding their education. More detailed information can be accessed at the <span className={styles.underlineLink}>BC Student Outcomes</span> website.</p>
              <p>To view these results, you may need to have the <span className={styles.underlineLink}>Adobe Acrobat Reader</span> installed in your Web browser.</p>
              <ul>
                <li><span className={styles.underlineLink}>Digital Design and Development</span></li>
              </ul>

              <div className={styles.backandnext}>
                <div>
                  <p className={styles.rightp}>Go back</p>
                  <span className={styles.boldUnderline}>PROGRAM DETAILS</span>
                </div>

                <div>
                  <p className={styles.rightp}>Next up</p>
                  <span className={styles.boldUnderline}>CONTACT US</span>
                </div>
                </div>
                <p className={styles.lastLine}>Programs and courses are subject to change without notice.</p>

              
            </div>
          </div>
        </div>
      </main>

      <footer class={styles.footer}>
        <div class={styles.col1}>
          <h3 className={styles.footerTitle}><span className={styles.beforeLine}>____</span>CONTACT</h3>
          <div className={styles.footerpSmall}>
            <div>3700 Willingdon Ave.</div>
            <div>Burnaby, British Columbia</div>
            <div>Canada V5G 3H2</div>
            <div className={styles.linking}><b>bcit.ca</b></div>
          </div>
          <div className={styles.footerpSmall}>
            <div>Telephone: 604-434-5734</div>
            <div>Toll-free (Can/US): 1-866-434-1610</div>
            <div className={styles.linking}><b>More contact numbers</b></div>
          </div>
          <img src='/socialmedia.png'/>
        </div>

        <div class={styles.col2}>
          <div class={styles.footerpLink}>
            <div>Visit</div>
            <div>Apply Now</div>
            <div>Give</div>
          </div>
        </div>

        <div class={styles.col3}>
          <div class={styles.footerpLink}>
            <div>News</div>
            <div>Events</div>
            <div>Careers</div>
          </div>
        </div>

        <div class={styles.col4}>
          <h3 className={styles.footerTitle}><span className={styles.beforeLine}>____</span> CAMPUS INFORMATION</h3>
          <div class={styles.footerpLink}>
            <div>Burnaby Campus</div>
            <div>Downtown Campus</div>
            <div>Marine Campus</div>
            <div>Aerospace Technology Campus</div>
            <div>Annacis Island Campus</div>
          </div>
          <div className={styles.footerpSmallLink}>
            <div>Feedback</div>
            <div>Copyright</div>
            <div>Privacy</div>
          </div>
        </div>
      </footer>
    </>
  )
}
