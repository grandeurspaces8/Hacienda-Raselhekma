import Head from 'next/head'
import LeadForm from '../components/LeadForm'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}/?text=مرحباً، أنا مهتم بمشروع Hacienda Ras El Hekma — بالم هيلز`

export default function Home() {
  return (
    <>
      <Head>
        <title>Hacienda Ras El Hekma — Palm Hills | رأس الحكمة</title>
        <meta name="description" content="Hacienda Ras El Hekma من Palm Hills — 1,400 فدان، 4.8 كم شاطئ، تصميم OBMI. فلل وشاليهات وبيتش هومز بأفضل الأسعار." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/images/aerial.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="navbar-brand">
            PALM HILLS <span>·</span> HACIENDA
          </a>
          <ul className="navbar-links">
            <li><a href="#about">المشروع</a></li>
            <li><a href="#masterplan">الماستر بلان</a></li>
            <li><a href="#units">الأسعار</a></li>
            <li><a href="#contact">تواصل</a></li>
            <li><a href="#register" className="btn-nav">سجّل الآن</a></li>
          </ul>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div>
            <span className="hero-eyebrow">Palm Hills Developments · رأس الحكمة</span>
            <h1>
              Hacienda
              <strong>Ras El Hekma</strong>
            </h1>
            <p className="hero-sub">
              أول مطور مصري في رأس الحكمة — مدينة ذكية متكاملة على مدار العام
              على مساحة 1,400 فدان بتصميم OBMI العالمي.
            </p>
            <div className="hero-stats">
              <div className="hero-stat"><h3>1,400</h3><p>فدان</p></div>
              <div className="hero-stat"><h3>4.8 كم</h3><p>شاطئ</p></div>
              <div className="hero-stat"><h3>كيلو 238</h3><p>رأس الحكمة</p></div>
              <div className="hero-stat"><h3>95%</h3><p>إطلالة بحر أو لاجون</p></div>
            </div>
            <div className="hero-btns">
              <a href="#register" className="btn-primary">سجّل الآن ←</a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost">💬 واتساب</a>
            </div>
          </div>
          <LeadForm id="register" />
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="sbar-item"><h3>1,400</h3><p>فدان مساحة إجمالية</p></div>
          <div className="sbar-item"><h3>4.8 كم</h3><p>واجهة شاطئية</p></div>
          <div className="sbar-item"><h3>84%</h3><p>مياه وخضرة</p></div>
          <div className="sbar-item"><h3>95%</h3><p>إطلالة بحر أو لاجون</p></div>
          <div className="sbar-item"><h3>5%</h3><p>مقدم فقط</p></div>
        </div>
      </div>

      {/* ─── ABOUT ─── */}
      <section className="section section-bg" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-img">
              <img src="/images/aerial.jpeg" alt="Hacienda Ras El Hekma" loading="lazy" />
            </div>
            <div className="about-text">
              <span className="sec-eye">عن المشروع</span>
              <h2 className="sec-title">مدينة متكاملة<br /><strong>في رأس الحكمة</strong></h2>
              <p className="sec-desc">
                أول مطور مصري في رأس الحكمة — مدينة ذكية متكاملة على مدار العام
                على مساحة 1,400 فدان بتصميم OBMI العالمي. تقع على كيلو 238
                بواجهة شاطئية 4.8 كم.
              </p>
              <ul>
                <li>مطار دولي ومارينا دولية</li>
                <li>منطقة أعمال مركزية وشبكة نقل سريع</li>
                <li>منطقة حرة ومدينة ذكية</li>
                <li>3 فنادق فاخرة ونوادي رياضية</li>
                <li>84% من المشروع مساحات مائية وخضرة</li>
                <li>95% من الوحدات بإطلالة لاجونز أو بحر مباشر</li>
              </ul>
              <a href="#register" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
                احصل على البروشور الآن ←
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION ─── */}
      <section className="section section-navy2" id="location">
        <div className="section-inner">
          <div className="about-grid">
            <div>
              <span className="sec-eye">الموقع</span>
              <h2 className="sec-title light">كيلو 238<br /><strong>رأس الحكمة</strong></h2>
              <p className="sec-desc light">
                يقع المشروع على كيلو 238 بالساحل الشمالي — رأس الحكمة.
                على بُعد 247 كم من القاهرة و238 كم من الإسكندرية.
              </p>
              <div className="features-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)', marginTop: 24 }}>
                {[
                  ['✈️', 'مطار دولي', 'على مقربة من المطار الدولي الجديد'],
                  ['⚓', 'مارينا دولية', 'مارينا عالمية داخل المشروع'],
                  ['🏖️', '4.8 كم شاطئ', 'واجهة شاطئية مباشرة على البحر'],
                  ['🌊', 'لاجونز', '95% من الوحدات بإطلالة مباشرة'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="feat-card">
                    <div className="feat-icon">{icon}</div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-img">
              <img src="/images/location.jpeg" alt="Hacienda Ras El Hekma Location" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* FORM 1 */}
      <LeadForm dark id="form1" title="سجّل اهتمامك الآن" subtitle="احصل على البروشور والأسعار التفصيلية وخطط السداد" />

      {/* ─── MASTERPLAN ─── */}
      <section className="section section-bg" id="masterplan">
        <div className="section-inner">
          <div style={{ textAlign: 'center' }}>
            <span className="sec-eye">الماستر بلان</span>
            <h2 className="sec-title">4 صفوف فلل<br /><strong>كلها بإطلالة بحر كاملة</strong></h2>
            <p className="sec-desc" style={{ maxWidth: 600, margin: '0 auto' }}>
              تصميم OBMI يضمن إن كل الصفوف الأربعة ليها إطلالة بحر كاملة.
              84% من المشروع مياه وخضرة.
            </p>
          </div>
          <div className="masterplan-img">
            <img src="/images/masterplan2.jpeg" alt="Hacienda Ras El Hekma Masterplan" loading="lazy" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginTop: 28 }}>
            {[
              ['الصف الأول', '7 غرف · طابق واحد', 'أرض 1,300 م² · بناء 1,150 م²'],
              ['الصف الثاني', '6 غرف · طابق واحد', 'أرض 850 م² · بناء 700 م²'],
              ['الصف الثالث', '5 غرف · طابقين', 'أرض 750 م² · بناء 700 م²'],
              ['الصف الرابع', 'طابقين', 'أرض 770 م² · بناء 515 م²'],
            ].map(([title, sub, desc]) => (
              <div key={title} style={{
                background: '#fff', borderRadius: 12, padding: '20px 16px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                borderTop: '3px solid var(--teal)', textAlign: 'center'
              }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: 'var(--navy)', marginBottom: 6 }}>{title}</h4>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--teal)', marginBottom: 4 }}>{sub}</p>
                <p style={{ fontSize: 12, color: 'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VILLA ─── */}
      <section className="section section-navy">
        <div className="section-inner">
          <div className="about-grid">
            <div>
              <span className="sec-eye">تصميم OBMI</span>
              <h2 className="sec-title light">تجربة معيشية<br /><strong>لا مثيل لها</strong></h2>
              <p className="sec-desc light">
                وحدات مصممة بأعلى معايير الفخامة والراحة، تطل مباشرة على البحر المتوسط
                والمسطحات المائية الداخلية.
              </p>
              <div className="features-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)', marginTop: 20 }}>
                {[
                  ['🏖️', 'شاطئ خاص', 'شاطئ رملي خاص على المتوسط'],
                  ['🌊', 'لاجونز', 'مسطحات مائية داخلية فريدة'],
                  ['⛵', 'مارينا', 'مارينا دولية داخل المشروع'],
                  ['🏨', 'فنادق فاخرة', '3 فنادق 5 نجوم داخل المشروع'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="feat-card">
                    <div className="feat-icon">{icon}</div>
                    <h3>{title}</h3><p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-img">
              <img src="/images/villa.jpeg" alt="Hacienda Villa" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── UNITS & PRICES ─── */}
      <section className="section section-bg" id="units">
        <div className="section-inner">
          <div style={{ textAlign: 'center' }}>
            <span className="sec-eye">الوحدات والأسعار</span>
            <h2 className="sec-title">اختر وحدتك<br /><strong>في Hacienda Ras El Hekma</strong></h2>
          </div>
          <div className="units-grid">
            {[
              { title: 'Duo — توين هاوس', size: 'مساحات متنوعة', price: '44,000,000', currency: 'جنيه', badge: null, payment: '5% مقدم + 5% تعاقد · تقسيط 8 سنوات' },
              { title: 'Senior Chalet كبير', size: 'مساحات واسعة', price: '32,500,000', currency: 'جنيه', badge: 'الأكثر طلباً', payment: '5% مقدم + 5% تعاقد · تقسيط 10 سنوات' },
              { title: 'Senior Chalet صغير', size: 'مساحة مريحة', price: '27,500,000', currency: 'جنيه', badge: null, payment: '5% مقدم + 5% تعاقد · تقسيط 10 سنوات' },
              { title: 'Junior Chalet', size: 'مثالي للاستثمار', price: '23,500,000', currency: 'جنيه', badge: null, payment: '5% مقدم + 5% تعاقد · تقسيط 10 سنوات' },
              { title: 'Beach Home — 2 غرفة', size: 'مباشر على الشاطئ', price: '14,700,000', currency: 'جنيه', badge: null, payment: '5% مقدم + 5% تعاقد · تقسيط 10 سنوات' },
              { title: 'Beach Home — 3 غرف', size: 'مباشر على الشاطئ', price: '21,900,000', currency: 'جنيه', badge: null, payment: '5% مقدم + 5% تعاقد · تقسيط 10 سنوات' },
            ].map((u, i) => (
              <div key={i} className="unit-card" style={i === 1 ? { borderColor: 'var(--teal)' } : {}}>
                {u.badge && <div className="unit-badge-top">{u.badge}</div>}
                <h3>{u.title}</h3>
                <div className="unit-size">{u.size}</div>
                <div className="unit-price">{u.price} <span>{u.currency}</span></div>
                <div className="unit-payment">{u.payment}</div>
                <a href="#contact" className="unit-cta">سجّل الآن ←</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAYMENT ─── */}
      <section className="section section-navy2" id="payment">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="sec-eye">نظام السداد</span>
            <h2 className="sec-title light">أنظمة سداد<br /><strong>مرنة للجميع</strong></h2>
          </div>
          <div className="payment-grid">
            <div className="pay-card">
              <h4>جميع الأنواع</h4>
              <div className="pay-val">5% + 5%</div>
              <p>مقدم + تعاقد<br />تقسيط 10 سنوات</p>
            </div>
            <div className="pay-card">
              <h4>فلل صف 1–4</h4>
              <div className="pay-val">5% + 5%</div>
              <p>مقدم + تعاقد<br />تقسيط 8 سنوات</p>
            </div>
            <div className="pay-card">
              <h4>الأجانب</h4>
              <div className="pay-val">نظام كامل</div>
              <p>نظام سداد خاص للأجانب<br />مش لحد التسليم فقط</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="section section-bg">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span className="sec-eye">صور المشروع</span>
            <h2 className="sec-title">لمحات من<br /><strong>Hacienda Ras El Hekma</strong></h2>
          </div>
          <div className="gallery-grid">
            {[
              ['/images/aerial.jpeg', 'إطلالة جوية'],
              ['/images/masterplan2.jpeg', 'Hacienda Ras El Hekma'],
              ['/images/masterplan.jpeg', 'الماستر بلان'],
              ['/images/villa.jpeg', 'تصميم الفيلا'],
              ['/images/location.jpeg', 'الموقع'],
              ['/images/aerial.jpeg', 'المشروع'],
            ].map(([src, alt], i) => (
              <a key={i} href={src} target="_blank" rel="noreferrer" className="gallery-item">
                <img src={src} alt={alt} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PALM HILLS ─── */}
      <section className="section section-navy">
        <div className="section-inner" style={{ maxWidth: 800, textAlign: 'center' }}>
          <span className="sec-eye">Palm Hills Developments</span>
          <h2 className="sec-title light">أول مطور مصري<br /><strong>في رأس الحكمة</strong></h2>
          <p className="sec-desc light" style={{ maxWidth: 600, margin: '0 auto 32px' }}>
            Palm Hills Developments واحدة من أكبر المطورين العقاريين في مصر والشرق الأوسط.
            تأسست عام 1997 ومدرجة في البورصة المصرية وبورصة لندن.
            أكثر من 35 مشروع متكامل ومحفظة أراضي 29 مليون متر مربع.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {[['35+','مشروع'],['1997','تأسست'],['29M م²','محفظة أراضي'],['EGX & LSE','مدرجة بالبورصة']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: 'var(--teal)' }}>{val}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL FORM */}
      <LeadForm dark id="contact" />

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-name">PALM HILLS <span>·</span> HACIENDA</div>
            <p>Hacienda Ras El Hekma — أول مطور مصري في رأس الحكمة. 1,400 فدان، 4.8 كم شاطئ، تصميم OBMI العالمي.</p>
          </div>
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="#about">المشروع</a></li>
              <li><a href="#masterplan">الماستر بلان</a></li>
              <li><a href="#units">الأسعار</a></li>
              <li><a href="#payment">نظام السداد</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <p>
              <a href={`tel:${PHONE}`} style={{ color: 'var(--teal)', textDecoration: 'none', display: 'block', marginBottom: 8, fontSize: 16, fontWeight: 700 }}>
                📞 {PHONE}
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ color: '#25d366', textDecoration: 'none', display: 'block', marginBottom: 8 }}>
                💬 واتساب
              </a>
              leads@grandeur-spaces.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Hacienda Ras El Hekma — Palm Hills Developments | وكيل معتمد</div>
      </footer>

      {/* ─── STICKY CTA ─── */}
      <div className="sticky-cta">
        <a href={`tel:${PHONE}`}>📞 اتصل بنا</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer">💬 واتساب</a>
      </div>
    </>
  )
}
