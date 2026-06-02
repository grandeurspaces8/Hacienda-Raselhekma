import { useState } from 'react'
import Script from 'next/script'
const PHONE = '01008900076'
const WA = `https://wa.me/2${PHONE}/?text=مرحباً، أريد الاستفسار عن مشروع هاسيندا رأس الحكمة من بالم هيلز`
const URL = 'https://api.web3forms.com/submit'

const UNITS = ['Duo — توين هاوس', 'Senior Chalet كبير', 'Senior Chalet صغير', 'Junior Chalet', 'Beach Home — 1 غرفة', 'Beach Home — 2 غرفة', 'Beach Home — 3 غرف', 'فلل الصف الأول', 'فلل الصف الثاني', 'فلل الصف الثالث', 'فلل الصف الرابع']

export default function LeadForm({ dark, title, subtitle, id }) {
  const [form, setForm] = useState({ name: '', phone: '', unit: '' })
  const [status, setStatus] = useState(null)
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '21ee661f-c349-4659-b167-5226bbc1f74d',
          name: form.name, phone: form.phone,
          unit: form.unit || 'لم يحدد',
          _subject: `ليد جديد — هاسيندا رأس الحكمة | ${form.name} — ${form.phone}`,
          _template: 'table', _captcha: 'false',
        }),
      })
      const d = await res.json() 
      if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'generate_lead', {
    value: 1,
    currency: 'USD'
  })
}
      if (d.success === 'true' || d.success === true) { setStatus('success'); setForm({ name: '', phone: '', unit: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const fields = (
    <>
      {status === 'success' ? (
        <div className="form-success">✅ تم استلام بياناتك!<br /><span style={{ fontSize: 13, fontWeight: 400, color: dark ? 'rgba(255,255,255,0.5)' : '#777' }}>سيتواصل معك فريق المبيعات قريباً</span></div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="form-field"><input type="text" name="name" placeholder="الاسم الكامل *" value={form.name} onChange={onChange} required /></div>
          <div className="form-field"><input type="tel" name="phone" placeholder="رقم الموبايل *" value={form.phone} onChange={onChange} required /></div>
          <div className="form-field">
            <select name="unit" value={form.unit} onChange={onChange}>
              <option value="">اختر نوع الوحدة</option>
              {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <button type="submit" className="btn-submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'جاري الإرسال...' : 'سجّل الآن — احصل على البروشور'}
          </button>
          {status === 'error' && <p className="form-error">⚠️ حدث خطأ، يرجى المحاولة مرة أخرى</p>}
        </form>
      )}
      <div className="form-row">
        <a href={`tel:${PHONE}`} className="btn-fcall">📞 هاتف</a>
        <a href={WA} target="_blank" rel="noreferrer" className="btn-fwa">💬 واتساب</a>
      </div>
    </>
  )

  if (!dark) return (
    <div className="hero-form" id={id || 'register'}>
      <h3>{title || 'سجّل الآن'}</h3>
      <p>{subtitle || 'احصل على البروشور والأسعار التفصيلية وخطط السداد'}</p>
      {fields}
    </div>
  )

  return (
    <section className="dark-form-section" id={id || 'register2'}>
      <div className="dark-form-box">
        <p className="dark-form-title">{title || 'ابدأ رحلتك في رأس الحكمة'}</p>
        <p className="dark-form-sub">{subtitle || 'سجّل بياناتك واحصل على البروشور والأسعار التفصيلية وخطط السداد. فريقنا هيتواصل معاك خلال 24 ساعة.'}</p>
        {fields}
      </div>
    </section>
  )
}
