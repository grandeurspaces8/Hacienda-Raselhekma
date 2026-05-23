import { useState } from 'react'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}/?text=مرحباً، أنا مهتم بمشروع Hacienda Ras El Hekma — بالم هيلز`
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/leads@grandeur-spaces.com'

export default function LeadForm({ dark = false, title, subtitle, id }) {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name, phone: form.phone,
          _subject: `ليد جديد — Hacienda Ras El Hekma | ${form.name} - ${form.phone}`,
          _template: 'table', _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('success'); setForm({ name: '', phone: '' })
      } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  const fields = (
    <>
      {status === 'success' ? (
        <div className="form-success">✅ تم استلام بياناتك!<br /><span style={{ fontSize: 13, fontWeight: 400 }}>سيتواصل معك فريق المبيعات قريباً</span></div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-field"><input type="text" name="name" placeholder="الاسم الكامل *" value={form.name} onChange={handleChange} required /></div>
          <div className="form-field"><input type="tel" name="phone" placeholder="رقم الهاتف *" value={form.phone} onChange={handleChange} required /></div>
          <button type="submit" className="btn-submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'جاري الإرسال...' : 'سجّل الآن — احصل على البروشور'}
          </button>
          {status === 'error' && <p className="form-error">⚠️ حدث خطأ، يرجى المحاولة مرة أخرى</p>}
        </form>
      )}
      <div className="form-contact-row">
        <a href={`tel:${PHONE}`} className="btn-form-call">📞 {PHONE}</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-form-wa">💬 واتساب</a>
      </div>
    </>
  )

  if (!dark) return (
    <div className="hero-form" id={id || 'register'}>
      <h3>{title || 'سجّل اهتمامك الآن'}</h3>
      <p>{subtitle || 'احصل على البروشور والأسعار التفصيلية وخطط السداد'}</p>
      {fields}
    </div>
  )

  return (
    <section className="dark-form-section" id={id || 'contact'}>
      <div className="dark-form-box">
        <p className="dark-form-title">{title || 'ابدأ رحلتك في رأس الحكمة'}</p>
        <p className="dark-form-sub">{subtitle || 'سجّل بياناتك واحصل على البروشور والأسعار التفصيلية وخطط السداد. فريقنا هيتواصل معاك خلال 24 ساعة.'}</p>
        {fields}
      </div>
    </section>
  )
}
