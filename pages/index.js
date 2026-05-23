import Head from 'next/head'
import LeadForm from '../components/LeadForm'

const PHONE = '01008900076'
const WA = `https://wa.me/2${PHONE}/?text=مرحباً، أريد الاستفسار عن مشروع هاسيندا رأس الحكمة من بالم هيلز`

export default function Home() {
  return (
    <>
      <Head>
        <title>هاسيندا رأس الحكمة — Palm Hills Developments</title>
        <meta name="description" content="أول مطور مصري في رأس الحكمة — 1,400 فدان، 4.8 كم شاطئ، تصميم OBMI، مارينا دولية، 3 فنادق فاخرة." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/images/aerial.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <span className="b1">PALM HILLS</span>
            <span className="b2">Hacienda Ras El Hekma</span>
          </div>
          <ul className="navbar-links">
            <li><a href="#home">المشروع</a></li>
            <li><a href="#masterplan">الماستر بلان</a></li>
            <li><a href="#units">الأسعار</a></li>
            <li><a href="#register2">تواصل</a></li>
            <li><a href="#register" className="btn-nav">سجّل الآن</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">Palm Hills Developments</div>
            <h1>هاسيندا<br /><em>رأس الحكمة</em></h1>
            <p className="hero-tagline">أول مطور مصري في رأس الحكمة</p>
            <p className="hero-desc">
              مدينة متكاملة على مدار العام على مساحة 1,400 فدان بتصميم OBMI العالمي.
              4.8 كم شاطئ · مارينا دولية · مطار دولي · 3 فنادق فاخرة.
            </p>
            <div className="hero-pills">
              <span className="hero-pill">كيلو 238</span>
              <span className="hero-pill">4.8 كم شاطئ</span>
              <span className="hero-pill">95% إطلالة بحر</span>
              <span className="hero-pill">تصميم OBMI</span>
            </div>
            <div className="hero-btns">
              <a href="#register" className="btn-primary">سجّل الآن ←</a>
              <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 واتساب</a>
            </div>
          </div>
          <LeadForm id="register" />
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item"><h3>1,400</h3><p>فدان</p></div>
          <div className="stat-item"><h3>4.8 كم</h3><p>شاطئ</p></div>
          <div className="stat-item"><h3>95%</h3><p>إطلالة بحر أو لاجون</p></div>
          <div className="stat-item"><h3>84%</h3><p>مياه وخضرة</p></div>
          <div className="stat-item"><h3>كيلو 238</h3><p>رأس الحكمة</p></div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section section-sand" id="about">
        <div className="section-inner">
          <div className="two-col">
            <div className="col-img">
              <img src="/images/masterplan2.jpeg" alt="هاسيندا رأس الحكمة" loading="lazy" />
            </div>
            <div>
              <div className="tag">عن المشروع</div>
              <h2 className="sec-title">مدينة متكاملة في رأس الحكمة</h2>
              <p className="sec-desc" style={{ marginBottom: 16 }}>
                أول مطور مصري في رأس الحكمة — مدينة ذكية متكاملة على مدار العام على مساحة
                <strong> 1,400 فدان</strong> بتصميم <strong>OBMI</strong> العالمي.
                تقع على <strong>كيلو 238</strong> بواجهة شاطئية 4.8 كم.
              </p>
              <p className="sec-desc" style={{ marginBottom: 20 }}>
                المشروع يضم مطار دولي ومارينا دولية ومنطقة أعمال مركزية وشبكة نقل سريع
                ومنطقة حرة و3 فنادق فاخرة ونوادي رياضية ومناطق ترفيه ودايننج.
                <strong> 84%</strong> من المشروع مساحات مائية وخضرة و<strong>95%</strong> من الوحدات بإطلالة لاجونز أو بحر مباشر.
              </p>
              <a href="#register" className="btn-primary">سجّل الآن واحصل على البروشور ←</a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div className="tag">مميزات المشروع</div>
            <h2 className="sec-title">تجربة سكنية لا مثيل لها</h2>
            <p className="sec-desc" style={{ maxWidth: 540, margin: '0 auto' }}>
              كل ما تحتاجه في مكان واحد — مدينة متكاملة على مدار العام
            </p>
          </div>
          <div className="features-grid">
            {[
              ['✈️', 'مطار دولي', 'مطار دولي داخل المشروع للوصول الفوري من أي مكان في العالم.'],
              ['⛵', 'مارينا دولية', 'مارينا دولية لمحبي البحر واليخوت والرياضات المائية.'],
              ['🏨', '3 فنادق فاخرة', 'ثلاثة فنادق 5 نجوم بمعايير عالمية لضيوفك وأسرتك.'],
              ['🌊', '4.8 كم شاطئ', 'أطول واجهة شاطئية خاصة في الساحل الشمالي الغربي.'],
              ['🏙️', 'منطقة أعمال', 'منطقة أعمال مركزية وMixed Use ومنطقة حرة متكاملة.'],
              ['🏡', '95% إطلالة', '95% من الوحدات بإطلالة مباشرة على البحر أو اللاجونز.'],
              ['🌿', '84% خضرة ومياه', '84% من المساحة مساحات خضراء ومسطحات مائية.'],
              ['🚄', 'نقل سريع', 'شبكة نقل داخلية سريعة تربط جميع مناطق المشروع.'],
              ['🏋️', 'نوادي رياضية', 'ملاعب ونوادي رياضية ومراكز صحة وعافية متكاملة.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="feat-card">
                <div className="feat-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM 1 */}
      <LeadForm dark id="form1" title="سجّل الآن واحصل على البروشور" subtitle="فريقنا المتخصص سيتواصل معك بالأسعار التفصيلية وخطط السداد الكاملة" />

      {/* MASTERPLAN */}
      <section className="section section-sand" id="masterplan">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="tag">الماستر بلان</div>
            <h2 className="sec-title">4 صفوف فلل — كلها بإطلالة بحر كاملة</h2>
            <p className="sec-desc" style={{ maxWidth: 600, margin: '0 auto' }}>
              تصميم OBMI يضمن إن كل الصفوف الأربعة ليها إطلالة بحر كاملة. 84% من المشروع مياه وخضرة.
            </p>
          </div>
          <img src="/images/masterplan.jpeg" alt="Masterplan هاسيندا رأس الحكمة" loading="lazy"
            style={{ width: '100%', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', marginBottom: 40 }} />

          {/* ROWS */}
          <div className="features-grid">
            {[
              ['الصف الأول', '7 غرف · طابق واحد', 'أرض 1,300 م² · بناء 1,150 م²'],
              ['الصف الثاني', '6 غرف · طابق واحد', 'أرض 850 م² · بناء 700 م²'],
              ['الصف الثالث', '5 غرف · طابقين', 'أرض 750 م² · بناء 700 م²'],
              ['الصف الرابع', 'طابقين', 'أرض 770 م² · بناء 515 م²'],
            ].map(([title, sub, desc]) => (
              <div key={title} className="feat-card" style={{ textAlign: 'center' }}>
                <div className="feat-icon">🏖️</div>
                <h3>{title}</h3>
                <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{sub}</p>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section section-navy" id="location">
        <div className="section-inner">
          <div className="two-col">
            <div>
              <div className="tag light">الموقع</div>
              <h2 className="sec-title light">كيلو 238 —<br />رأس الحكمة</h2>
              <p className="sec-desc light" style={{ marginBottom: 20 }}>
                هاسيندا رأس الحكمة في أجمل بقعة على الساحل الشمالي الغربي المصري —
                رأس الحكمة بمياهها الفيروزية الشهيرة.
              </p>
              <ul className="check-list">
                <li>كيلو 238 على الطريق الساحلي الشمالي</li>
                <li>المشروع المجاور لهاسيندا هينيش</li>
                <li>247 كم من القاهرة</li>
                <li>238 كم من الإسكندرية</li>
                <li>مطار دولي داخل المشروع</li>
              </ul>
              <a href="#register" className="btn-primary" style={{ marginTop: 24 }}>سجّل الآن ←</a>
            </div>
            <div className="col-img">
              <img src="/images/location.jpeg" alt="موقع هاسيندا رأس الحكمة" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* UNITS & PRICES */}
      <section className="section section-navy" id="units">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div className="tag light">الوحدات والأسعار</div>
            <h2 className="sec-title light">الوحدات والأسعار</h2>
            <p className="sec-desc light" style={{ maxWidth: 540, margin: '0 auto' }}>
              تشكيلة متنوعة من فلل وشاليهات وبيتش هومز تناسب مختلف الاحتياجات
            </p>
          </div>
          <div className="units-grid">
            {[
              ['Duo — توين هاوس', '44,000,000 ج'],
              ['Senior Chalet كبير', '32,500,000 ج'],
              ['Senior Chalet صغير', '27,500,000 ج'],
              ['Junior Chalet', '23,500,000 ج'],
              ['Beach Home 1 غرفة', '11,700,000 ج'],
              ['Beach Home 2 غرفة', '14,700,000 ج'],
              ['Beach Home 3 غرف', '21,900,000 ج'],
            ].map(([title, price]) => (
              <div key={title} className="unit-card">
                <h4>{title}</h4>
                <div className="unit-price">{price}</div>
                <a href="#register2">سجّل الآن</a>
              </div>
            ))}
          </div>

          {/* PAYMENT */}
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <div className="tag light">نظام السداد</div>
            <h3 className="sec-title light" style={{ fontSize: 26, marginBottom: 24 }}>أنظمة السداد المتاحة</h3>
            <div className="payment-grid">
              <div className="pay-box">
                <h4>جميع الأنواع</h4>
                <p>5% + 5%</p>
                <span>مقدم + تعاقد · تقسيط 10 سنوات</span>
              </div>
              <div className="pay-box">
                <h4>فلل صف 1–4</h4>
                <p>5% + 5%</p>
                <span>مقدم + تعاقد · تقسيط 8 سنوات</span>
              </div>
              <div className="pay-box">
                <h4>للأجانب</h4>
                <p>نظام كامل</p>
                <span>سداد مش لحد التسليم فقط</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section-sand" id="gallery">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div className="tag">صور المشروع</div>
            <h2 className="sec-title">لمحات من هاسيندا رأس الحكمة</h2>
          </div>
          <div className="gallery-grid">
            {[
              ['/images/aerial.jpeg', 'منظر جوي'],
              ['/images/villa.jpeg', 'فيلا داخلية'],
              ['/images/masterplan.jpeg', 'الماستر بلان'],
              ['/images/masterplan2.jpeg', 'المشروع الكامل'],
              ['/images/location.jpeg', 'خريطة الموقع'],
              ['/images/aerial.jpeg', 'رأس الحكمة'],
            ].map(([src, alt], i) => (
              <a key={i} href={src} target="_blank" rel="noreferrer" className="gallery-item">
                <img src={src} alt={alt} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PALM HILLS */}
      <section className="section section-navy">
        <div className="section-inner">
          <div className="two-col">
            <div>
              <div className="tag light">من نحن</div>
              <h2 className="sec-title light">Palm Hills Developments<br />أول مطور مصري في رأس الحكمة</h2>
              <p className="sec-desc light" style={{ marginBottom: 16 }}>
                Palm Hills Developments واحدة من أكبر المطورين العقاريين في مصر والشرق الأوسط.
                تأسست عام <strong style={{ color: 'var(--teal2)' }}>1997</strong> ومدرجة في البورصة المصرية وبورصة لندن.
                أكثر من <strong style={{ color: 'var(--teal2)' }}>35 مشروع</strong> متكامل ومحفظة أراضي
                <strong style={{ color: 'var(--teal2)' }}> 29 مليون متر مربع</strong>.
              </p>
              <ul className="check-list">
                <li>تأسست عام 1997</li>
                <li>مدرجة في البورصة المصرية وبورصة لندن (EGX & LSE)</li>
                <li>أكثر من 35 مشروعاً متكاملاً</li>
                <li>محفظة أراضي 29 مليون متر مربع</li>
              </ul>
            </div>
            <div className="col-img">
              <img src="/images/villa.jpeg" alt="Palm Hills فيلا" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL FORM */}
      <LeadForm dark id="register2" title="ابدأ رحلتك في رأس الحكمة" subtitle="سجّل بياناتك واحصل على البروشور والأسعار التفصيلية وخطط السداد. فريقنا هيتواصل معاك خلال 24 ساعة." />

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="b1">PALM HILLS</div>
            <span className="b2">Hacienda Ras El Hekma</span>
            <p>أول مطور مصري في رأس الحكمة — 1,400 فدان، 4.8 كم شاطئ، تصميم OBMI العالمي.</p>
          </div>
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="#about">عن المشروع</a></li>
              <li><a href="#masterplan">الماستر بلان</a></li>
              <li><a href="#location">الموقع</a></li>
              <li><a href="#units">الأسعار</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <p>
              <strong style={{ color: 'rgba(255,255,255,0.7)' }}>هاتف:</strong><br />
              <a href={`tel:${PHONE}`} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{PHONE}</a><br /><br />
              <strong style={{ color: 'rgba(255,255,255,0.7)' }}>البريد:</strong><br />
              <span style={{ color: 'rgba(255,255,255,0.45)' }}>leads@grandeur-spaces.com</span><br /><br />
              <strong style={{ color: 'rgba(255,255,255,0.7)' }}>الموقع:</strong><br />
              <span style={{ color: 'rgba(255,255,255,0.45)' }}>كيلو 238، رأس الحكمة، الساحل الشمالي</span>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Palm Hills Developments | وكيل معتمد — جميع الحقوق محفوظة
        </div>
      </footer>

      {/* STICKY CTA */}
      <div className="sticky-cta">
        <a href={`tel:${PHONE}`}>📞 اتصل بنا</a>
        <a href={WA} target="_blank" rel="noreferrer">💬 واتساب</a>
      </div>
    </>
  )
}
