'use client'

import ExpandableSection from '@/components/ExpandableSection'
import PageHeader from '@/components/PageHeader'
import ImportantNote from '@/components/ImportantNote'
import CompletionBox from '@/components/CompletionBox'
import TripChecklist from '@/components/TripChecklist'
import AudioPlayer from '@/components/AudioPlayer'

export default function Hajj() {
  return (
    <>
      <PageHeader 
        title={
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            হজ্জ সম্পাদনের সম্পূর্ণ গাইড (الدليل الكامل لأداء الحج)
            <AudioPlayer arabicText="الدليل الكامل لأداء الحج" className="alphabet-audio-btn" tone="default" />
          </span>
        }
        subtitle={
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            দিনে দিনে বিস্তারিত নির্দেশিকা (دليل مفصل يوماً بيوم)
            <AudioPlayer arabicText="دليل مفصل يوماً بيوم" className="alphabet-audio-btn" tone="default" />
          </span>
        }
        sectionCount={11}
      />

      <section className="process-section">
        <div className="container">
          <div className="umrah-flowchart">
            <h2 className="section-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              হজ্জ প্রক্রিয়া - ভিজ্যুয়াল ডায়াগ্রাম (عملية الحج - الرسم البياني)
              <AudioPlayer arabicText="عملية الحج - الرسم البياني" className="alphabet-audio-btn" tone="default" />
            </h2>
            <div className="flowchart-container">
              <div className="flowchart-step start">
                <div className="flowchart-icon">🚶</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  শুরু (البداية)
                  <AudioPlayer arabicText="البداية" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৮ই জিলহজ্জ (اليوم الثامن من ذي الحجة)<br/>মিকাত থেকে (من الميقات)
                  <AudioPlayer arabicText="اليوم الثامن من ذي الحجة من الميقات" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">👕</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ১. ইহরাম (الإحرام)
                  <AudioPlayer arabicText="الإحرام" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  হজ্জের ইহরাম (إحرام الحج)<br/>তালবিয়া (التلبية)
                  <AudioPlayer arabicText="إحرام الحج والتلبية" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-dua">
                  <p className="arabic-small">لَبَّيْكَ اللَّهُمَّ حَجًّا</p>
                  <p className="transliteration-small">Labbaik Allahumma Hajjan</p>
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🕋</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ২. তাওয়াফে কুদুম (طواف القدوم)
                  <AudioPlayer arabicText="طواف القدوم" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  মক্কায় প্রবেশ (الدخول إلى مكة)<br/>তাওয়াফ (الطواف)
                  <AudioPlayer arabicText="الدخول إلى مكة والطواف" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🏃</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৩. সাঈ (السعي)
                  <AudioPlayer arabicText="السعي" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  সাফা-মারওয়া (الصفا والمروة)<br/>৭ বার (7 مرات)
                  <AudioPlayer arabicText="7 مرات بين الصفا والمروة" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step highlight">
                <div className="flowchart-icon">⛰️</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৪. আরাফাত (عرفات)
                  <AudioPlayer arabicText="عرفات" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৯ই জিলহজ্জ (اليوم التاسع من ذي الحجة)<br/>সূর্যাস্ত পর্যন্ত (حتى غروب الشمس)
                  <AudioPlayer arabicText="اليوم التاسع من ذي الحجة حتى غروب الشمس" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🌙</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৫. মুজদালিফা (مزدلفة)
                  <AudioPlayer arabicText="مزدلفة" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৯ই রাত (ليلة التاسع)<br/>পাথর সংগ্রহ (جمع الحصى)
                  <AudioPlayer arabicText="ليلة التاسع وجمع الحصى" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step highlight">
                <div className="flowchart-icon">🎯</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৬. রমি (الرمي)
                  <AudioPlayer arabicText="الرمي" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ১০ই জিলহজ্জ (اليوم العاشر من ذي الحجة)<br/>জামরাতুল আকাবা (جمرة العقبة)
                  <AudioPlayer arabicText="اليوم العاشر من ذي الحجة جمرة العقبة" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🐑</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৭. কুরবানি (الذبح)
                  <AudioPlayer arabicText="الذبح" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ঈদুল আযহা (عيد الأضحى)<br/>কুরবানি (الذبح)
                  <AudioPlayer arabicText="عيد الأضحى والذبح" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">✂️</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৮. চুল কাটা (قص الشعر)
                  <AudioPlayer arabicText="قص الشعر" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  মুন্ডন/চুল কাটা (الحلاقة/قص الشعر)<br/>ইহরাম খোলা (إزالة الإحرام)
                  <AudioPlayer arabicText="الحلاقة وإزالة الإحرام" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🔄</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ৯. তাওয়াফে জিয়ারত (طواف الزيارة)
                  <AudioPlayer arabicText="طواف الزيارة" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  মক্কায় ফিরে (العودة إلى مكة)<br/>তাওয়াফ (الطواف)
                  <AudioPlayer arabicText="العودة إلى مكة والطواف" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🎯</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ১০. রমি (৩ দিন) (الرمي 3 أيام)
                  <AudioPlayer arabicText="الرمي 3 أيام" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  ১১-১৩ই জিলহজ্জ (الأيام 11-13 من ذي الحجة)<br/>তিন জামরা (الجمرات الثلاث)
                  <AudioPlayer arabicText="الأيام 11-13 من ذي الحجة الجمرات الثلاث" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step end">
                <div className="flowchart-icon">✅</div>
                <div className="flowchart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  হজ্জ সম্পন্ন (اكتمل الحج)
                  <AudioPlayer arabicText="اكتمل الحج" className="alphabet-audio-btn" tone="default" />
                </div>
                <div className="flowchart-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  আল্লাহ কবুল করুন (تقبل الله)
                  <AudioPlayer arabicText="تقبل الله" className="alphabet-audio-btn" tone="default" />
                </div>
              </div>
            </div>
          </div>

          <ExpandableSection 
            id="trip-checklist" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জ ভ্রমণের প্রস্তুতি চেকলিস্ট (قائمة التحضير لرحلة الحج)
                <AudioPlayer arabicText="قائمة التحضير لرحلة الحج" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="dua-category-wrapper"
            number={0}
          >
            <TripChecklist />
          </ExpandableSection>

          <ExpandableSection 
            id="hajj-importance" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জ পালনের গুরুত্ব (أهمية أداء الحج)
                <AudioPlayer arabicText="أهمية أداء الحج" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            number={1}
          >
            <div className="dua-item">
              <p className="info-text">হজ্জ হল ইসলামের পঞ্চম স্তম্ভ এবং প্রত্যেক সামর্থ্যবান মুসলমানের উপর ফরজ। এটি জীবনে একবার করা ফরজ এবং এটি ইসলামের সবচেয়ে গুরুত্বপূর্ণ ইবাদতগুলোর মধ্যে একটি।</p>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জর ফজিলত সম্পর্কে হাদীس (أحاديث عن فضائل الحج)
                <AudioPlayer arabicText="أحاديث عن فضائل الحج" className="alphabet-audio-btn" tone="default" />
              </h3>
              
              <div className="dua-box">
                <h4>হাদীস ১:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: سُئِلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيُّ الْأَعْمَالِ أَفْضَلُ؟ قَالَ: إِيمَانٌ بِاللَّهِ وَرَسُولِهِ قِيلَ: ثُمَّ مَاذَا؟ قَالَ: جِهَادٌ فِي سَبِيلِ اللَّهِ قِيلَ: ثُمَّ مَاذَا؟ قَالَ: حَجٌّ مَبْرُورٌ</span>
                  <AudioPlayer arabicText="عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: سُئِلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيُّ الْأَعْمَالِ أَفْضَلُ؟ قَالَ: إِيمَانٌ بِاللَّهِ وَرَسُولِهِ قِيلَ: ثُمَّ مَاذَا؟ قَالَ: جِهَادٌ فِي سَبِيلِ اللَّهِ قِيلَ: ثُمَّ مَاذَا؟ قَالَ: حَجٌّ مَبْرُورٌ" />
                </p>
                <p className="transliteration">An Abi Hurairata Radiyallahu Anhu Qala: Su'ila An Nabiyyi Sallallahu Alaihi Wasallam Ayyu Al A'mali Afdalu? Qala: Imanun Billahi Wa Rasulihi Qila: Thumma Matha? Qala: Jihadun Fi Sabilillahi Qila: Thumma Matha? Qala: Hajjun Mabrurun</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত, নবী (সা.) কে জিজ্ঞাসা করা হয়েছিল: "কোন আমল সবচেয়ে উত্তম?" তিনি বললেন: "আল্লাহ ও তাঁর রাসূলের প্রতি ঈমান।" বলা হল: "তারপর কী?" তিনি বললেন: "আল্লাহর পথে জিহাদ।" বলা হল: "তারপর কী?" তিনি বললেন: "কবুলকৃত হজ্জ।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
              </div>
              
              <div className="dua-box">
                <h4>হাদীস ২:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ</span>
                  <AudioPlayer arabicText="عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ" />
                </p>
                <p className="transliteration">An Abi Hurairata Radiyallahu Anhu Anna Rasulallahi Sallallahu Alaihi Wasallam Qala: Man Hajja Falam Yar Futh Wa Lam Yafsuq Raja'a Kayaumi Waladatuhu Ummuhu</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "যে ব্যক্তি হজ্জ করল এবং কোনো অশ্লীল কথা বলল না ও কোনো গুনাহ করল না, সে এমনভাবে ফিরে আসবে যেন আজই তার মা তাকে জন্ম দিয়েছে।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
              </div>
              
              <div className="dua-box">
                <h4>হাদীস ৩:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: الْحَجُّ وَالْعُمْرَةُ وَفْدَانِ إِلَى اللَّهِ عَزَّ وَجَلَّ يَدْعُونَهُ فَيُجِيبُهُمْ وَيَسْأَلُونَهُ فَيُعْطِيهِمْ</span>
                  <AudioPlayer arabicText="عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: الْحَجُّ وَالْعُمْرَةُ وَفْدَانِ إِلَى اللَّهِ عَزَّ وَجَلَّ يَدْعُونَهُ فَيُجِيبُهُمْ وَيَسْأَلُونَهُ فَيُعْطِيهِمْ" />
                </p>
                <p className="transliteration">An Abdullahi Ibn Umar Radiyallahu Anhuma Anna Rasulallahi Sallallahu Alaihi Wasallam Qala: Al Hajju Wal Umratu Wafdan Ila Allahi Azza Wa Jalla Yad'unahu Fayujibuhum Wa Yas'alunahu Fayu'tihim</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবদুল্লাহ ইবনে উমর (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "হজ্জ ও উমরাহ হল আল্লাহর কাছে প্রতিনিধি দল, তারা তাঁকে ডাকে এবং তিনি তাদের ডাকে সাড়া দেন, তারা তাঁর কাছে চায় এবং তিনি তাদের দেন।" (ইবনে মাজাহ)</p>
              </div>
              
              <div className="dua-box">
                <h4>হাদীস ৪:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قُلْتُ يَا رَسُولَ اللَّهِ أَلَا نَغْزُو وَنُجَاهِدُ مَعَكُمْ؟ فَقَالَ: لَكِنَّ أَحْسَنَ الْجِهَادِ وَأَجْمَلَهُ الْحَجُّ حَجٌّ مَبْرُورٌ</span>
                  <AudioPlayer arabicText="عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قُلْتُ يَا رَسُولَ اللَّهِ أَلَا نَغْزُو وَنُجَاهِدُ مَعَكُمْ؟ فَقَالَ: لَكِنَّ أَحْسَنَ الْجِهَادِ وَأَجْمَلَهُ الْحَجُّ حَجٌّ مَبْرُورٌ" />
                </p>
                <p className="transliteration">An Aishata Radiyallahu Anha Qalat: Qultu Ya Rasulallahi Ala Naghzu Wa Nujahidu Ma'akum? Fa Qala: Lakinnaha Ahsana Al Jihadi Wa Ajmalahu Al Hajju Hajjun Mabrurun</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আয়েশা (রা.) থেকে বর্ণিত, তিনি বলেন: আমি বললাম, হে আল্লাহর রাসূল! আমরা কি যুদ্ধ করব না এবং আপনার সাথে জিহাদ করব না? তিনি বললেন: "কিন্তু সর্বোত্তম ও সর্বোৎকৃষ্ট জিহাদ হল কবুলকৃত হজ্জ।" (সহীহ বুখারী)</p>
              </div>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জ কেন করতে হয়? (لماذا يجب أداء الحج؟)
                <AudioPlayer arabicText="لماذا يجب أداء الحج؟" className="alphabet-audio-btn" tone="default" />
              </h3>
              <ul className="list-styled">
                <li><strong>ইসলামের পঞ্চম স্তম্ভ:</strong> হজ্জ হল ইসলামের পঞ্চম ও শেষ স্তম্ভ। প্রত্যেক সামর্থ্যবান মুসলমানের উপর এটি ফরজ।</li>
                <li><strong>আল্লাহর নির্দেশ:</strong> কুরআনে আল্লাহ তা'আলা বলেন: "আর আল্লাহর জন্য মানুষের উপর হজ্জ করা ফরজ, যারা সেখানে যাওয়ার সামর্থ্য রাখে।" (সূরা আল-ইমরান, আয়াত ৯৭)</li>
                <li><strong>হযরত ইব্রাহিম (আঃ) এর সুন্নত:</strong> হজ্জ হল হযরত ইব্রাহিম (আঃ) এর সুন্নত যা রাসূলুল্লাহ (সা.) পুনরুজ্জীবিত করেছিেন।</li>
                <li><strong>গুনাহ মাফ:</strong> কবুলকৃত হজ্জ পূর্ববর্তী সমস্ত গুনাহ মাফ করে দেয়।</li>
                <li><strong>জান্নাতের নিশ্চয়তা:</strong> হাদীসে বর্ণিত আছে যে কবুলকৃত হজ্জের পুরস্কার হল জান্নাত।</li>
                <li><strong>আল্লাহর নৈকট্য:</strong> হজ্জ হল আল্লাহর সাথে সরাসরি সম্পর্ক স্থাপনের একটি মাধ্যম।</li>
                <li><strong>ইসলামি ঐক্য:</strong> হজ্জ মুসলমানদের মধ্যে ঐক্য, ভ্রাতৃত্ব ও সমতা প্রতিষ্ঠা করে।</li>
              </ul>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জ কখন করতে হয়? (متى يجب أداء الحج؟)
                <AudioPlayer arabicText="متى يجب أداء الحج؟" className="alphabet-audio-btn" tone="default" />
              </h3>
              <div className="info-text">
                <h4>হজ্জের নির্দিষ্ট সময়:</h4>
                <p>হজ্জ শুধুমাত্র ইসলামি বর্ষপঞ্জির (হিজরি) <strong>জিলহজ্জ মাসের ৮ থেকে ১২ তারিখ</strong> পর্যন্ত করা যায়। এটি বছরের অন্যান্য সময় করা যায় না।</p>
              </div>
              
              <h4>হজ্জের দিনসমূহ:</h4>
              <ul className="list-styled">
                <li><strong>৮ই জিলহজ্জ:</strong> ইহরাম গ্রহণ এবং মক্কায় প্রবেশ</li>
                <li><strong>৯ই জিলহজ্জ:</strong> আরাফাত দিবস (হজ্জের সবচেয়ে গুরুত্বপূর্ণ দিন)</li>
                <li><strong>৯ই জিলহজ্জ রাত:</strong> মুজদালিফায় অবস্থান</li>
                <li><strong>১০ই জিলহজ্জ:</strong> ঈদুল আযহা - রমি, কুরবানি, চুল কাটা</li>
                <li><strong>১১-১৩ই জিলহজ্জ:</strong> রমি (পাথর মারা) - তিন দিন</li>
              </ul>
              
              <h4>হজ্জের শর্তসমূহ:</h4>
              <ul className="list-styled">
                <li><strong>ইসলাম:</strong> হজ্জকারীকে মুসলমান হতে হবে</li>
                <li><strong>বয়স:</strong> বালেগ (প্রাপ্তবয়স্ক) হতে হবে</li>
                <li><strong>বুদ্ধি:</strong> সুস্থ মস্তিষ্কের অধিকারী হতে হবে</li>
                <li><strong>স্বাধীনতা:</strong> স্বাধীন হতে হবে (দাস নয়)</li>
                <li><strong>সামর্থ্য:</strong> হজ্জ করার শারীরিক ও আর্থিক সামর্থ্য থাকতে হবে</li>
                <li><strong>সুযোগ:</strong> হজ্জে যাওয়ার সুযোগ থাকতে হবে (রাস্তা নিরাপদ, পরিবারের খরচের ব্যবস্থা থাকা)</li>
              </ul>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জ কীভাবে করতে হয়? (كيف يؤدى الحج؟)
                <AudioPlayer arabicText="كيف يؤدى الحج؟" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p className="info-text">হজ্জ একটি জটিল প্রক্রিয়া যা কয়েক দিন ধরে সম্পন্ন হয়। নিচে হজ্জের সম্পূর্ণ প্রক্রিয়া দেওয়া হল:</p>
              
              <h4>হজ্জের প্রধান ধাপসমূহ:</h4>
              <ol className="list-styled">
                <li><strong>ইহরাম গ্রহণ:</strong> মিকাত থেকে হজ্জের ইহরাম গ্রহণ করতে হবে</li>
                <li><strong>তাওয়াফে কুদুম:</strong> মক্কায় প্রবেশ করে তাওয়াফ করতে হবে</li>
                <li><strong>সাঈ:</strong> সাফা-মারওয়ার মধ্যে সাঈ করতে হবে (যদি আগে না করে থাকেন)</li>
                <li><strong>আরাফাতে অবস্থান:</strong> ৯ই জিলহজ্জ আরাফাতের ময়দানে অবস্থান করতে হবে (এটি হজ্জের সবচেয়ে গুরুত্বপূর্ণ অংশ)</li>
                <li><strong>মুজদালিফায় রাত যাপন:</strong> ৯ই জিলহজ্জ রাত মুজদালিফায় অবস্থান করতে হবে</li>
                <li><strong>রমি:</strong> ১০ই জিলহজ্জ জামরাতুল আকাবায় ৭টি পাথর মারতে হবে</li>
                <li><strong>কুরবানি:</strong> কুরবানি করতে হবে (যদি করতে চান)</li>
                <li><strong>চুল কাটা/মুন্ডন:</strong> চুল কাটতে বা মুন্ডন করতে হবে</li>
                <li><strong>তাওয়াফে জিয়ারত:</strong> মক্কায় ফিরে তাওয়াফ করতে হবে</li>
                <li><strong>রমি (৩ দিন):</strong> ১১-১৩ই জিলহজ্জ তিনটি জামরায় পাথর মারতে হবে</li>
                <li><strong>বিদায়ী তাওয়াফ:</strong> মক্কা ত্যাগ করার আগে বিদায়ী তাওয়াফ করতে হবে</li>
              </ol>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জর বিশেষ ফজিলতসমূহ (فضائل الحج الخاصة)
                <AudioPlayer arabicText="فضائل الحج الخاصة" className="alphabet-audio-btn" tone="default" />
              </h3>
              <ul className="list-styled">
                <li><strong>গুনাহ মাফ:</strong> কবুলকৃত হজ্জ পূর্ববর্তী সমস্ত গুনাহ মাফ করে দেয়</li>
                <li><strong>জান্নাতের নিশ্চয়তা:</strong> হাদীস অনুসারে কবুলকৃত হজ্জের পুরস্কার হল জান্নাত</li>
                <li><strong>নতুন জীবন:</strong> হজ্জ থেকে ফিরে আসলে যেন নতুন জন্ম নেওয়ার মতো</li>
                <li><strong>আল্লাহর নৈকট্য:</strong> হজ্জকারী আল্লাহর বিশেষ নৈকট্য লাভ করে</li>
                <li><strong>দোয়া কবুল:</strong> হজ্জের সময় দোয়া কবুল হওয়ার বিশেষ সময়</li>
                <li><strong>ইসলামি ঐক্য:</strong> বিশ্বের সব মুসলমান একত্রিত হয়ে আল্লাহর ইবাদত করে</li>
                <li><strong>আত্মশুদ্ধি:</strong> হজ্জ আত্মার পরিশুদ্ধি ও আত্মসংযম শিক্ষা দেয়</li>
                <li><strong>ধৈর্য ও সহিষ্ণুতা:</strong> হজ্জ ধৈর্য, সহিষ্ণুতা ও সহনশীলতা বৃদ্ধি করে</li>
              </ul>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জর আধ্যাত্মিক গুরুত্ব (الأهمية الروحية للحج)
                <AudioPlayer arabicText="الأهمية الروحية للحج" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p>হজ্জ শুধুমাত্র একটি ধর্মীয় রীতি নয়, এটি একটি আধ্যাত্মিক যাত্রা যা মুসলমানদের:</p>
              <ul className="list-styled">
                <li>আল্লাহর সাথে সরাসরি সম্পর্ক গড়ে তুলতে সাহায্য করে</li>
                <li>আত্মশুদ্ধি ও আত্মসংযম শিক্ষা দেয়</li>
                <li>ইসলামি ঐক্য, ভ্রাতৃত্ব ও সমতা প্রতিষ্ঠা করে</li>
                <li>ধৈর্য, সহিষ্ণুতা ও সহনশীলতা বৃদ্ধি করে</li>
                <li>আল্লাহর প্রতি কৃতজ্ঞতা প্রকাশের সুযোগ দেয়</li>
                <li>হযরত ইব্রাহিম (আঃ) ও হযরত ইসমাইল (আঃ) এর আত্মত্যাগের স্মরণ করিয়ে দেয়</li>
                <li>মৃত্যুর প্রস্তুতি ও আখিরাতের স্মরণ করিয়ে দেয়</li>
              </ul>
              
              <ImportantNote variant="orange" title="⚠️ গুরুত্বপূর্ণ মনে রাখবেন:">
                <ul>
                  <li>হজ্জ জীবনে একবার করা ফরজ</li>
                  <li>হজ্জ শুধুমাত্র জিলহজ্জ মাসে করা যায়</li>
                  <li>আরাফাতে অবস্থান করা হজ্জের সবচেয়ে গুরুত্বপূর্ণ অংশ</li>
                  <li>হজ্জের সময় ধৈর্য ধারণ করতে হবে</li>
                  <li>হজ্জের পর নতুন জীবন শুরু করতে হবে</li>
                </ul>
              </ImportantNote>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="day-8" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ৮ই জিলহজ্জ - ইহরাম গ্রহণ (اليوم الثامن من ذي الحجة - الإحرام)
                <AudioPlayer arabicText="اليوم الثامن من ذي الحجة - الإحرام" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="📅"
            number={2}
          >
            <div className="process-step">
              <div className="step-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  কি করতে হবে: (ما يجب فعله)
                  <AudioPlayer arabicText="ما يجب فعله" className="alphabet-audio-btn" tone="default" />
                </h3>
                <ul>
                  <li>মিকাত থেকে ইহরাম গ্রহণ করুন</li>
                  <li>গোসল করুন বা ওজু করুন</li>
                  <li>ইহরামের কাপড় পরিধান করুন</li>
                  <li>হজ্জের নিয়ত করুন</li>
                  <li>তালবিয়া পড়তে থাকুন</li>
                  <li>মক্কায় পৌঁছে তাওয়াফে কুদুম (প্রবেশের তাওয়াফ) করুন</li>
                  <li>সাঈ করুন (যদি আগে না করে থাকেন)</li>
                  <li>ইহরামে থাকুন (চুল কাটবেন না)</li>
                </ul>
                
                <div className="dua-box">
                  <h4>হজ্জের নিয়ত:</h4>
                  <p className="arabic">
                  <span className="arabic-text">لَبَّيْكَ اللَّهُمَّ حَجًّا</span>
                  <AudioPlayer arabicText="لَبَّيْكَ اللَّهُمَّ حَجًّا" />
                </p>
                  <p className="transliteration">Labbaik Allahumma Hajjan</p>
                  <p className="translation">হে আল্লাহ, আমি হজ্জের জন্য উপস্থিত</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="day-9" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ৯ই জিলহজ্জ - আরাফাত দিবস (اليوم التاسع من ذي الحجة - يوم عرفات)
                <AudioPlayer arabicText="اليوم التاسع من ذي الحجة - يوم عرفات" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="⛰️"
            number={3}
          >
            <div className="process-step">
              <div className="step-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  কি করতে হবে: (ما يجب فعله)
                  <AudioPlayer arabicText="ما يجب فعله" className="alphabet-audio-btn" tone="default" />
                </h3>
                <ul>
                  <li>সূর্যোদয়ের পর মিনা থেকে আরাফাতের উদ্দেশ্যে রওনা হন</li>
                  <li>আরাফাতের ময়দানে অবস্থান করুন</li>
                  <li>জোহর ও আসর নামাজ একত্রে পড়ুন (জামাত)</li>
                  <li>সূর্যাস্ত পর্যন্ত আরাফাতে অবস্থান করুন</li>
                  <li>অনেক বেশি দোয়া, তাসবীহ, তাওবা করুন</li>
                  <li>সূর্যাস্তের পর মুজদালিফার উদ্দেশ্যে রওনা হন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>আরাফাতে পড়ার বিশেষ দোয়া:</h4>
                  <p className="arabic">
                  <span className="arabic-text">لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</span>
                  <AudioPlayer arabicText="لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ" />
                </p>
                  <p className="transliteration">La Ilaha Illallahu Wahdahu La Sharika Lah, Lahul Mulku Wa Lahul Hamdu Wa Huwa Ala Kulli Shai'in Qadir</p>
                  <p className="translation">আল্লাহ ছাড়া কোন ইলাহ নেই, তিনি এক, তাঁর কোন শরীক নেই, রাজত্ব তাঁর, প্রশংসা তাঁর এবং তিনি সবকিছুর উপর ক্ষমতাবান</p>
                </div>
                
                <div className="important-note">
                  <strong>⚠️ গুরুত্বপূর্ণ:</strong> আরাফাতে অবস্থান করা হজ্জের সবচেয়ে গুরুত্বপূর্ণ অংশ। যদি কেউ আরাফাতে না থাকে, তাহলে তার হজ্জ হবে না।
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="day-9-night" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ৯ই জিলহজ্জ রাত - মুজদালিফা (ليلة التاسع من ذي الحجة - مزدلفة)
                <AudioPlayer arabicText="ليلة التاسع من ذي الحجة - مزدلفة" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="🌙"
            number={4}
          >
            <div className="process-step">
              <div className="step-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  কি করতে হবে: (ما يجب فعله)
                  <AudioPlayer arabicText="ما يجب فعله" className="alphabet-audio-btn" tone="default" />
                </h3>
                <ul>
                  <li>আরাফাত থেকে মুজদালিফায় পৌঁছুন</li>
                  <li>মাগরিব ও এশার নামাজ একত্রে পড়ুন</li>
                  <li>রাতের কিছু অংশ মুজদালিফায় অবস্থান করুন</li>
                  <li>সকালে ফজরের নামাজ পড়ুন</li>
                  <li>সূর্যোদয়ের আগে মুজদালিফা থেকে ছোট পাথর সংগ্রহ করুন (৭০টি)</li>
                </ul>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="day-10" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ১০ই জিলহজ্জ - ঈদুল আযহা (اليوم العاشر من ذي الحجة - عيد الأضحى)
                <AudioPlayer arabicText="اليوم العاشر من ذي الحجة - عيد الأضحى" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="🎉"
            number={5}
          >
            <div className="process-step">
              <div className="step-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  কি করতে হবে: (ما يجب فعله)
                  <AudioPlayer arabicText="ما يجب فعله" className="alphabet-audio-btn" tone="default" />
                </h3>
                <ul>
                  <li>ফজরের নামাজের পর মুজদালিফা থেকে মিনায় যান</li>
                  <li>জামরাতুল আকাবা (বড় শয়তান) কে ৭টি পাথর মারুন</li>
                  <li>প্রতিটি পাথর মারার সময় "আল্লাহু আকবার" বলুন</li>
                  <li>কুরবানি করুন (যদি করতে চান)</li>
                  <li>চুল কাটুন বা মুন্ডন করুন (পুরুষদের জন্য মুন্ডন উত্তম)</li>
                  <li>ইহরাম খুলে ফেলুন</li>
                  <li>মক্কায় গিয়ে তাওয়াফে জিয়ারত করুন</li>
                  <li>সাঈ করুন</li>
                  <li>ইহরাম খুলে ফেলুন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>রমি (পাথর মারার) সময়:</h4>
                  <p className="arabic">
                  <span className="arabic-text">بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ</span>
                  <AudioPlayer arabicText="بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ" />
                  <AudioPlayer arabicText="بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ" />
                </p>
                  <p className="transliteration">Bismillahi, Allahu Akbar</p>
                  <p className="translation">আল্লাহর নামে, আল্লাহ সর্বশ্রেষ্ঠ</p>
                </div>
                
                <div className="dua-box">
                  <h4>কুরবানির দোয়া:</h4>
                  <p className="arabic">
                  <span className="arabic-text">إِنِّي وَجَّهْتُ وَجْهِي لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ</span>
                  <AudioPlayer arabicText="إِنِّي وَجَّهْتُ وَجْهِي لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ" />
                </p>
                  <p className="transliteration">Inni Wajjahtu Wajhi Lilladhi Fataras Samawati Wal Arda Hanifan Wa Ma Ana Minal Mushrikin</p>
                  <p className="translation">নিশ্চয়ই আমি আমার মুখমণ্ডল সেই সত্তার দিকে ফিরিয়েছি যিনি আসমান ও জমিন সৃষ্টি করেছিেন, একনিষ্ঠভাবে এবং আমি মুশরিকদের অন্তর্ভুক্ত নই</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="day-11" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ১১ই জিলহজ্জ - প্রথম দিন রমি (اليوم الحادي عشر من ذي الحجة - اليوم الأول للرمي)
                <AudioPlayer arabicText="اليوم الحادي عشر من ذي الحجة - اليوم الأول للرمي" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="🎯"
            number={6}
          >
            <div className="process-step">
              <div className="step-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  কি করতে হবে: (ما يجب فعله)
                  <AudioPlayer arabicText="ما يجب فعله" className="alphabet-audio-btn" tone="default" />
                </h3>
                <ul>
                  <li>সূর্য পশ্চিম দিকে হেলে যাওয়ার পর (জোহরের পর) তিনটি জামরায় পাথর মারুন</li>
                  <li>প্রথমে জামরাতুল উলা (ছোট শয়তান) - ৭টি পাথর</li>
                  <li>তারপর জামরাতুল উসতা (মাঝের শয়তান) - ৭টি পাথর</li>
                  <li>সবশেষে জামরাতুল আকাবা (বড় শয়তান) - ৭টি পাথর</li>
                  <li>প্রতিটি জামরার পর দোয়া করুন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>রমির পর দোয়া:</h4>
                  <p className="arabic">
                  <span className="arabic-text">اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَسَعْيًا مَشْكُورًا وَذَنْبًا مَغْفُورًا</span>
                  <AudioPlayer arabicText="اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَسَعْيًا مَشْكُورًا وَذَنْبًا مَغْفُورًا" />
                </p>
                  <p className="transliteration">Allahumma Ij'alhu Hajjan Mabruran Wa Sa'yan Mashkuran Wa Zanban Maghfuran</p>
                  <p className="translation">হে আল্লাহ, এটিকে কবুলকৃত হজ্জ, প্রশংসিত সাঈ এবং ক্ষমাপ্রাপ্ত গুনাহ করুন</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="day-12" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ১২ই জিলহজ্জ - দ্বিতীয় দিন রমি (اليوم الثاني عشر من ذي الحجة - اليوم الثاني للرمي)
                <AudioPlayer arabicText="اليوم الثاني عشر من ذي الحجة - اليوم الثاني للرمي" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="🎯"
            number={7}
          >
            <div className="process-step">
              <div className="step-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  কি করতে হবে: (ما يجب فعله)
                  <AudioPlayer arabicText="ما يجب فعله" className="alphabet-audio-btn" tone="default" />
                </h3>
                <ul>
                  <li>আগের দিনের মতো তিনটি জামরায় পাথর মারুন</li>
                  <li>জোহরের পর থেকে সূর্যাস্তের আগ পর্যন্ত সময়ে</li>
                  <li>রমি শেষে মিনা ত্যাগ করুন (যদি তাড়াতাড়ি যেতে চান)</li>
                  <li>অথবা মিনায় আরও এক রাত থাকুন</li>
                </ul>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="day-13" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ১৩ই জিলহজ্জ - তৃতীয় দিন রমি (اليوم الثالث عشر من ذي الحجة - اليوم الثالث للرمي)
                <AudioPlayer arabicText="اليوم الثالث عشر من ذي الحجة - اليوم الثالث للرمي" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="🎯"
            number={8}
          >
            <div className="process-step">
              <div className="step-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  কি করতে হবে: (ما يجب فعله)
                  <AudioPlayer arabicText="ما يجب فعله" className="alphabet-audio-btn" tone="default" />
                </h3>
                <ul>
                  <li>আগের দিনের মতো তিনটি জামরায় পাথর মারুন</li>
                  <li>রমি শেষে মিনা ত্যাগ করুন</li>
                  <li>মক্কায় ফিরে যান</li>
                </ul>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="farewell-tawaf" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                বিদায়ী তাওয়াফ (طواف الوداع)
                <AudioPlayer arabicText="طواف الوداع" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="🔄"
            number={9}
          >
            <div className="process-step">
              <div className="step-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  কি করতে হবে: (ما يجب فعله)
                  <AudioPlayer arabicText="ما يجب فعله" className="alphabet-audio-btn" tone="default" />
                </h3>
                <ul>
                  <li>মক্কা ত্যাগ করার আগে বিদায়ী তাওয়াফ করুন</li>
                  <li>৭ বার কাবা প্রদক্ষিণ করুন</li>
                  <li>মাকামে ইব্রাহিমে ২ রাকাত নামাজ পড়ুন</li>
                  <li>জমজম পানি পান করুন</li>
                  <li>এরপর মক্কা ত্যাগ করুন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>বিদায়ী তাওয়াফের দোয়া:</h4>
                  <p className="arabic">
                    <span className="arabic-text">اللَّهُمَّ إِنَّ بَيْتِكَ عَظَّمْتَهُ وَحَرَّمْتَهُ وَعَظَّمْتَ حُرْمَتَهُ</span>
                    <AudioPlayer arabicText="اللَّهُمَّ إِنَّ بَيْتِكَ عَظَّمْتَهُ وَحَرَّمْتَهُ وَعَظَّمْتَ حُرْمَتَهُ" />
                  </p>
                  <p className="transliteration">Allahumma Inna Baitaka Azzamatahu Wa Harramtahu Wa Azzamata Hurmatahu</p>
                  <p className="translation">হে আল্লাহ, নিশ্চয়ই আপনি আপনার ঘরকে সম্মানিত করেছিেন, হারাম করেছিেন এবং এর সম্মানকে বৃদ্ধি করেছিেন</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="masjid-nabawi" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                মসজিদে নববীতে যাওয়া (زيارة المسجد النبوي)
                <AudioPlayer arabicText="زيارة المسجد النبوي" className="alphabet-audio-btn" tone="default" />
              </span>
            }
            defaultOpen={false}
            className="day-section-expandable"
            icon="🕌"
            number={10}
          >
            <div className="dua-item">
              <p className="info-text">হজ্জ সম্পন্ন করার পর বা আগে মদিনা শরীফে গিয়ে মসজিদে নববীতে নামাজ পড়া এবং রাসূলুল্লাহ (সা.) এর রওজা শরীফে সালাম দেওয়া একটি সুন্নত ও অত্যন্ত ফজিলতপূর্ণ আমল।</p>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                মসজিদে নববীতে যাওয়ার ফজিলত সম্পর্কে হাদীস (أحاديث عن فضائل زيارة المسجد النبوي)
                <AudioPlayer arabicText="أحاديث عن فضائل زيارة المسجد النبوي" className="alphabet-audio-btn" tone="default" />
              </h3>
              
              <div className="dua-box">
                <h4>হাদীস ১:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: لَا تَشُدُّ الرِّحَالَ إِلَّا إِلَى ثَلَاثَةِ مَسَاجِدَ: الْمَسْجِدِ الْحَرَامِ وَمَسْجِدِي هَذَا وَالْمَسْجِدِ الْأَقْصَى</span>
                  <AudioPlayer arabicText="عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: لَا تَشُدُّ الرِّحَالَ إِلَّا إِلَى ثَلَاثَةِ مَسَاجِدَ: الْمَسْجِدِ الْحَرَامِ وَمَسْجِدِي هَذَا وَالْمَسْجِدِ الْأَقْصَى" />
                </p>
                <p className="transliteration">An Abi Hurairata Radiyallahu Anhu Anna Rasulallahi Sallallahu Alaihi Wasallam Qala: La Tashuddu Ar Rihala Illa Ila Thalathati Masajida: Al Masjidil Harami Wa Masjidi Hadha Wal Masjidil Aqsa</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "তিনটি মসজিদ ছাড়া অন্য কোথাও সফরের উদ্দেশ্যে যাত্রা করো না: মসজিদুল হারাম, আমার এই মসজিদ (মসজিদে নববী) এবং মসজিদুল আকসা।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
              </div>
              
              <div className="dua-box">
                <h4>হাদীস ২:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: صَلَاةٌ فِي مَسْجِدِي هَذَا خَيْرٌ مِنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ إِلَّا الْمَسْجِدَ الْحَرَامَ</span>
                  <AudioPlayer arabicText="عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: صَلَاةٌ فِي مَسْجِدِي هَذَا خَيْرٌ مِنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ إِلَّا الْمَسْجِدَ الْحَرَامَ" />
                </p>
                <p className="transliteration">An Abi Hurairata Radiyallahu Anhu Qala: Qala Rasulallahi Sallallahu Alaihi Wasallam: Salatun Fi Masjidi Hadha Khairun Min Alfi Salatin Fima Siwahu Illa Al Masjidil Haram</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "আমার এই মসজিদে (মসজিদে নববী) এক নামাজ মসজিদুল হারাম ছাড়া অন্য যেকোনো মসজিদে এক হাজার নামাজের চেয়ে উত্তম।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
              </div>
              
              <div className="dua-box">
                <h4>হাদীস ৩:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ زَارَ قَبْرِي وَجَبَتْ لَهُ شَفَاعَتِي</span>
                  <AudioPlayer arabicText="عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ زَارَ قَبْرِي وَجَبَتْ لَهُ شَفَاعَتِي" />
                </p>
                <p className="transliteration">An Abdullahi Ibn Umar Radiyallahu Anhuma Anna Rasulallahi Sallallahu Alaihi Wasallam Qala: Man Zara Qabri Wajabat Lahu Shafa'ati</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবদুল্লাহ ইবনে উমর (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "যে ব্যক্তি আমার কবর জিয়ারত করবে, তার জন্য আমার শাফাআত ওয়াজিব হবে।" (দারাকুতনি, বায়হাকী)</p>
              </div>
              
              <div className="dua-box">
                <h4>হাদীস ৪:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَا بَيْنَ بَيْتِي وَمِنْبَرِي رَوْضَةٌ مِنْ رِيَاضِ الْجَنَّةِ</span>
                  <AudioPlayer arabicText="عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَا بَيْنَ بَيْتِي وَمِنْبَرِي رَوْضَةٌ مِنْ رِيَاضِ الْجَنَّةِ" />
                </p>
                <p className="transliteration">An Abi Hurairata Radiyallahu Anhu Qala: Qala Rasulallahi Sallallahu Alaihi Wasallam: Ma Baina Baiti Wa Minbari Rawdatun Min Riyadil Jannah</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "আমার ঘর ও মিম্বরের মধ্যবর্তী স্থান হল জান্নাতের বাগানসমূহের একটি বাগান।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
              </div>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                মসজিদে নববীতে কি করতে হবে? (ماذا يجب فعله في المسجد النبوي؟)
                <AudioPlayer arabicText="ماذا يجب فعله في المسجد النبوي؟" className="alphabet-audio-btn" tone="default" />
              </h3>
              <div className="info-text">
                <h4>মদিনায় পৌঁছার পর করণীয়:</h4>
                <ol className="list-styled">
                  <li><strong>মসজিদে নববীতে প্রবেশ:</strong> প্রথমে মসজিদে নববীতে প্রবেশ করুন</li>
                  <li><strong>তাহিয়্যাতুল মসজিদ নামাজ:</strong> মসজিদে প্রবেশের পর দুই রাকাত তাহিয়্যাতুল মসজিদ নামাজ পড়ুন</li>
                  <li><strong>রওজা শরীফে সালাম:</strong> রাসূলুল্লাহ (সা.) এর রওজা শরীফের দিকে মুখ করে দাঁড়িয়ে সালাম দিন</li>
                  <li><strong>দোয়া:</strong> রাসূলুল্লাহ (সা.), হযরত আবু বকর (রা.) ও হযরত উমর (রা.) এর জন্য দোয়া করুন</li>
                  <li><strong>রওজা শরীফে নামাজ:</strong> রওজা শরীফে (মসজিদে নববীর বিশেষ স্থান) নামাজ পড়ার ফজিলত অনেক</li>
                </ol>
              </div>
              
              <h4>রওজা শরীফে সালাম দেওয়ার দোয়া:</h4>
              <div className="dua-box">
                <p className="arabic">
                  <span className="arabic-text">السَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّهِ، السَّلَامُ عَلَيْكَ يَا نَبِيَّ اللَّهِ، السَّلَامُ عَلَيْكَ يَا حَبِيبَ اللَّهِ</span>
                  <AudioPlayer arabicText="السَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّهِ، السَّلَامُ عَلَيْكَ يَا نَبِيَّ اللَّهِ، السَّلَامُ عَلَيْكَ يَا حَبِيبَ اللَّهِ" />
                </p>
                <p className="transliteration">Assalamu Alaika Ya Rasulallah, Assalamu Alaika Ya Nabiyyallah, Assalamu Alaika Ya Habiballah</p>
                <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহর রাসূল, আপনার উপর সালাম। হে আল্লাহর নবী, আপনার উপর সালাম। হে আল্লাহর প্রিয়, আপনার উপর সালাম।</p>
              </div>
              
              <div className="dua-box">
                <h4>রাসূলুল্লাহ (সা.) এর জন্য দোয়া:</h4>
                <p className="arabic">
                  <span className="arabic-text">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ</span>
                  <AudioPlayer arabicText="اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ" />
                </p>
                <p className="transliteration">Allahumma Salli Ala Muhammadin Wa Ala Ali Muhammadin Kama Sallaita Ala Ibrahima Wa Ala Ali Ibrahima Innaka Hamidun Majidun</p>
                <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহ, মুহাম্মদ (সা.) ও তাঁর পরিবারের উপর রহমত বর্ষণ করুন, যেমন আপনি ইব্রাহিম (আঃ) ও তাঁর পরিবারের উপর রহমত বর্ষণ করেছিেন। নিশ্চয়ই আপনি প্রশংসিত ও মহান।</p>
              </div>
              
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                মসজিদে নববীতে নামাজের ফজিলত (فضائل الصلاة في المسجد النبوي)
                <AudioPlayer arabicText="فضائل الصلاة في المسجد النبوي" className="alphabet-audio-btn" tone="default" />
              </h3>
              <ul className="list-styled">
                <li><strong>বিশেষ পুরস্কার:</strong> মসজিদে নববীতে এক নামাজ মসজিদুল হারাম ছাড়া অন্য যেকোনো মসজিদে এক হাজার নামাজের সমান</li>
                <li><strong>রওজা শরীফ:</strong> রাসূলুল্লাহ (সা.) এর ঘর ও মিম্বরের মধ্যবর্তী স্থান হল জান্নাতের বাগান</li>
                <li><strong>শাফাআত:</strong> রাসূলুল্লাহ (সা.) এর কবর জিয়ারত করলে তাঁর শাফাআত পাওয়ার সুযোগ</li>
                <li><strong>দোয়া কবুল:</strong> মসজিদে নববীতে দোয়া কবুল হওয়ার বিশেষ সময়</li>
              </ul>
              
              <ImportantNote variant="green" title="📌 গুরুত্বপূর্ণ মনে রাখবেন:">
                <ul>
                  <li>হজ্জ বা উমরাহ সম্পন্ন করার পর মদিনায় যাওয়া সুন্নত</li>
                  <li>মসজিদে নববীতে নামাজ পড়া অত্যন্ত ফজিলতপূর্ণ</li>
                  <li>রওজা শরীফে সালাম দেওয়া এবং দোয়া করা</li>
                  <li>মদিনায় অবস্থানকালে বেশি বেশি নামাজ পড়া ও দোয়া করা</li>
                  <li>রওজা শরীফে ভিড় এড়িয়ে শান্তভাবে সালাম দেওয়া</li>
                </ul>
              </ImportantNote>
            </div>
          </ExpandableSection>

          <CompletionBox 
            title="✅ হজ্জ সম্পন্ন!"
            message="আপনার হজ্জ সম্পন্ন হয়েছে। আল্লাহ আপনার হজ্জ কবুল করুন এবং আপনার সকল গুনাহ মাফ করুন।"
            note={<><strong>📝 মনে রাখবেন:</strong> হজ্জ সম্পন্ন করার পর নতুন জীবন শুরু করুন। আল্লাহর কাছে প্রতিশ্রুতি করুন যে আপনি আর গুনাহ করবেন না। <strong>মদিনা শরীফে গিয়ে মসজিদে নববীতে নামাজ পড়ুন এবং রাসূলুল্লাহ (সা.) এর রওজা শরীফে সালাম দিন।</strong></>}
          />
        </div>
      </section>
    </>
  )
}
