import React from 'react'
import { Link } from 'gatsby'

import { Helmet } from 'react-helmet'

import styles from './index.module.css'

const Index = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>אור ביטוח - נגה</title>
        <meta
          name="description"
          content="כל הביטוחים וההטבות לקבוצת נגה מאור ביטוח"
        />
        <meta property="og:title" content="אור ביטוח - נגה" />
        <meta
          property="og:description"
          content="כל הביטוחים וההטבות לקבוצת נגה מאור ביטוח"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0255853e-ff20-4639-a2cd-543c2b5fd869/4dd31c47-a8ed-4aff-9895-80006867d31e?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['Space-Top']}></div>
      <div className={styles['Header']}>
        <div className={styles['Logo-Or']}>
          <Link to="/" className={styles['navlink']}>
            <img
              alt="image"
              src="/playground_assets/logo-1-300w.png"
              loading="lazy"
              className={styles['Logo-Or1']}
            />
          </Link>
        </div>
        <div className={styles['Space-Header']}></div>
        <div className={styles['Logo-Noga']}>
          <Link to="/" className={styles['navlink1']}>
            <img
              alt="image"
              src="/playground_assets/g782-200h.png"
              loading="lazy"
              className={styles['Logo-Noga1']}
            />
          </Link>
        </div>
      </div>
      <div className={styles['Space-Head']}></div>
      <div className={styles['Title-Travel']}>
        <div className={styles['container01']}>
          <span className={styles['text']}>כיסוי מורחב לקורונה</span>
          <span className={styles['text01']}>וכיסוי לסמארטפון</span>
        </div>
      </div>
      <div className={styles['Component-A-Desktop']}>
        <div className={styles['Titles-Mortgage-Text-Titles']}>
          <div className={styles['Title-Mortgage-Desktop']}>
            <div className={styles['Title-Mortgage-Text-Desktop']}>
              <span className={styles['Text-1']}>משכנתא בהנחה קבועה</span>
              <span className={styles['Text-2']}>!לכל החיים</span>
            </div>
          </div>
          <div className={styles['Sub-Title-Mortgage-Desktop']}>
            <div className={styles['container02']}>
              <div className={styles['container03']}>
                <span className={styles['text02']}>כיסויים בפוליסה:</span>
              </div>
              <div className={styles['container04']}>
                <span className={styles['text03']}>צד ג&apos;</span>
                <span className={styles['text04']}>נזקי צנרת</span>
                <span className={styles['text05']}>רעידת אדמה</span>
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image']}
                />
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image01']}
                />
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image02']}
                />
              </div>
              <div className={styles['container05']}>
                <img
                  alt="image"
                  src="/playground_assets/botton-200h.png"
                  className={styles['Button-Travel-Desktop']}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['Space-Mortgage-Desktop']}></div>
        <div className={styles['Image-Mortgage-Desktop']}>
          <img
            alt="Mortgage Insurance"
            src="/playground_assets/2-500h.jpg"
            loading="lazy"
            className={styles['image03']}
          />
        </div>
        <div className={styles['Space-Center-Desktop-Div-A']}></div>
        <div className={styles['Desktop-Travel-Titles']}>
          <div className={styles['Title-Travel-Desktop']}>
            <div className={styles['Title-Travel-Text-Desktop']}>
              <span className={styles['Text-11']}>כיסוי מורחב לקורונה</span>
              <span className={styles['Text-21']}>וכיסוי לסמארטפון</span>
            </div>
          </div>
          <div className={styles['Sub-Title-Travel-Desktop']}>
            <div className={styles['Sub-Title-Travel-Text-Desktop']}>
              <span className={styles['text06']}>
                <span>ביטוח חו&quot;ל בפרמיה יומית</span>
                <span></span>
              </span>
              <span className={styles['text09']}>!מהנמוכות בשוק</span>
            </div>
            <div className={styles['Travel-Button-Desktop']}>
              <img
                alt="image"
                src="/playground_assets/botton-200h.png"
                className={styles['Button-Travel-Desktop1']}
              />
            </div>
          </div>
        </div>
        <div className={styles['Space-Travel-Desktop']}></div>
        <div className={styles['Desktop-Image-Travel']}>
          <img
            alt="Travel Insurance"
            src="/playground_assets/1-500h.jpg"
            loading="lazy"
            className={styles['Image-Travel-Desktop']}
          />
        </div>
      </div>
      <div className={styles['Image-Travel']}>
        <img
          alt="image"
          src="/playground_assets/1.m-1500w.jpg"
          loading="lazy"
          className={styles['image04']}
        />
      </div>
      <div className={styles['Sub-Title-Travel']}>
        <div className={styles['container06']}>
          <span className={styles['text10']}>
            <span>ביטוח חו&quot;ל בפרמיה יומית</span>
            <span></span>
          </span>
          <span className={styles['text13']}>!מהנמוכות בשוק</span>
          <div className={styles['container07']}>
            <img
              alt="image"
              src="/playground_assets/botton-200h.png"
              loading="lazy"
              className={styles['image05']}
            />
          </div>
        </div>
      </div>
      <div className={styles['Space-Components']}></div>
      <div className={styles['Component-B-Desktop']}>
        <div className={styles['container08']}>
          <div className={styles['container09']}>
            <div className={styles['Title-Travel-Text-Desktop1']}>
              <span className={styles['Text-12']}>הטבת נהג צעיר</span>
              <span className={styles['Text-22']}>
                <span>משלמים רק על רכב אחד</span>
                <br></br>
                <span>ונוהגים על השאר!</span>
              </span>
            </div>
          </div>
          <div className={styles['container10']}>
            <div className={styles['container11']}>
              <div className={styles['container12']}>
                <span className={styles['text17']}>שירות אישי!</span>
                <span className={styles['text18']}>אי מיצוי פוליסה!</span>
                <span className={styles['text19']}>פוליסה רחבה ומקיפה!</span>
                <span className={styles['text20']}>
                  ביטול השתתפות במוסך הסדר
                </span>
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image06']}
                />
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image07']}
                />
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image08']}
                />
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image09']}
                />
              </div>
              <div className={styles['container13']}>
                <img
                  alt="image"
                  src="/playground_assets/botton-200h.png"
                  className={styles['Button-Travel-Desktop2']}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['container14']}></div>
        <div className={styles['container15']}>
          <img
            alt="image"
            src="/playground_assets/4-500h.jpg"
            loading="lazy"
            className={styles['image10']}
          />
        </div>
        <div className={styles['container16']}></div>
        <div className={styles['container17']}>
          <div className={styles['container18']}>
            <div className={styles['Title-Travel-Desktop1']}>
              <div className={styles['Title-Travel-Text-Desktop2']}>
                <span className={styles['Text-13']}>פוליסת דירה רחבה</span>
                <span className={styles['Text-23']}>חודש נוסף חינם!</span>
              </div>
            </div>
          </div>
          <div className={styles['container19']}>
            <div className={styles['container20']}>
              <div className={styles['container21']}>
                <span className={styles['text21']}>שירות אישי</span>
                <span className={styles['text22']}>
                  ביטוח הדירה המקיף ביותר במחיר הטוב ביותר!
                </span>
                <span className={styles['text23']}>
                  אפשרות לביצוע הפוליסה בצורה מהירה ונוחה
                </span>
                <span className={styles['text24']}>רעידת אדמה</span>
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image11']}
                />
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image12']}
                />
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image13']}
                />
                <img
                  alt="image"
                  src="/playground_assets/vi-300h.png"
                  className={styles['image14']}
                />
              </div>
              <div className={styles['container22']}>
                <img
                  alt="image"
                  src="/playground_assets/botton-200h.png"
                  className={styles['Button-Travel-Desktop3']}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['container23']}></div>
        <div className={styles['container24']}>
          <img
            alt="image"
            src="/playground_assets/3-500h.jpg"
            loading="lazy"
            className={styles['image15']}
          />
        </div>
      </div>
      <div className={styles['Space-Pre-Footer-Desktop']}></div>
      <div className={styles['Space-Travel']}></div>
      <div className={styles['Title-Mortgadge']}>
        <div className={styles['container25']}>
          <span className={styles['text25']}>משכנתא בהנחה קבועה</span>
          <span className={styles['text26']}>!לכל החיים</span>
        </div>
      </div>
      <div className={styles['Image-Mortgage']}>
        <img
          alt="image"
          src="/playground_assets/2.m-1500w.jpg"
          loading="lazy"
          className={styles['image16']}
        />
      </div>
      <div className={styles['Sub-Title-Mortgage']}>
        <div className={styles['container26']}>
          <div className={styles['container27']}>
            <span className={styles['text27']}>:כיסויים בפוליסה</span>
          </div>
          <div className={styles['container28']}>
            <div className={styles['container29']}>
              <span className={styles['text28']}>&apos;צד ג</span>
              <span className={styles['text29']}>נזקי צנרת</span>
              <span className={styles['text30']}>רעידת אדמה</span>
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image17']}
              />
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image18']}
              />
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image19']}
              />
            </div>
          </div>
          <div className={styles['container30']}>
            <img
              alt="image"
              src="/playground_assets/botton-200h.png"
              loading="lazy"
              className={styles['image20']}
            />
          </div>
        </div>
      </div>
      <div className={styles['Space-Mortgage']}></div>
      <div className={styles['Title-House']}>
        <div className={styles['container31']}>
          <span className={styles['text31']}>פוליסת דירה רחבה</span>
          <span className={styles['text32']}>!חודש נוסף חינם</span>
        </div>
      </div>
      <div className={styles['Image-House']}>
        <img
          alt="image"
          src="/playground_assets/3.m-1500w.jpg"
          loading="lazy"
          className={styles['image21']}
        />
      </div>
      <div className={styles['Sub-Title-House']}>
        <div className={styles['container32']}>
          <div className={styles['container33']}>
            <div className={styles['container34']}>
              <span className={styles['text33']}>שירות אישי</span>
              <span className={styles['text34']}>
                !ביטוח הדירה המקיף ביותר במחיר הטוב ביותר
              </span>
              <span className={styles['text35']}>
                אפשרות לביצוע הפוליסה בצורה מהירה ונוחה
              </span>
              <span className={styles['text36']}>רעידת אדמה</span>
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image22']}
              />
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image23']}
              />
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image24']}
              />
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image25']}
              />
            </div>
          </div>
        </div>
        <div className={styles['container35']}>
          <img
            alt="image"
            src="/playground_assets/botton-200h.png"
            loading="lazy"
            className={styles['image26']}
          />
        </div>
      </div>
      <div className={styles['Space-House']}></div>
      <div className={styles['Title-Car']}>
        <div className={styles['container36']}>
          <span className={styles['text37']}>הטבת נהג צעיר</span>
          <span className={styles['text38']}>
            <span className={styles['text39']}>שמשלמים רק על רכב אחד</span>
            <br></br>
            <span className={styles['text41']}> ונוהגים על השאר!</span>
          </span>
        </div>
      </div>
      <div className={styles['Image-Car']}>
        <img
          alt="image"
          src="/playground_assets/4.m-1500w.jpg"
          loading="lazy"
          className={styles['image27']}
        />
      </div>
      <div className={styles['Sub-Title-Car']}>
        <div className={styles['container37']}>
          <div className={styles['container38']}>
            <div className={styles['container39']}>
              <span className={styles['text42']}>שירות אישי!</span>
              <span className={styles['text43']}>אי מיצוי פוליסה!</span>
              <span className={styles['text44']}>פוליסה רחבה ומקיפה!</span>
              <span className={styles['text45']}>ביטול השתתפות במוסך הסדר</span>
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image28']}
              />
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image29']}
              />
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image30']}
              />
              <img
                alt="image"
                src="/playground_assets/vi-300h.png"
                loading="lazy"
                className={styles['image31']}
              />
            </div>
          </div>
        </div>
        <div className={styles['container40']}>
          <img
            alt="image"
            src="/playground_assets/botton-200h.png"
            loading="lazy"
            className={styles['image32']}
          />
        </div>
      </div>
      <div className={styles['Space-Car']}></div>
      <div className={styles['Footer-Mobile']}></div>
      <div className={styles['container41']}></div>
      <div className={styles['Footer-Desktop']}></div>
      <div className={styles['Space-Bottom']}></div>
    </div>
  )
}

export default Index
