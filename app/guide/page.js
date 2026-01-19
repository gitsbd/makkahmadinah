'use client'

import GuideCategory from '@/components/GuideCategory'
import PageHeader from '@/components/PageHeader'
import SectionWrapper from '@/components/SectionWrapper'
import AudioPlayer from '@/components/AudioPlayer'

export default function Guide() {
  return (
    <>
      <PageHeader 
        title={
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            সম্পূর্ণ গাইড (الدليل الكامل)
            <AudioPlayer arabicText="الدليل الكامل" className="alphabet-audio-btn" tone="default" />
          </span>
        }
        subtitle={
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            উমরাহ ও হজ্জের জন্য প্রয়োজনীয় সমস্ত তথ্য (جميع المعلومات الضرورية للعمرة والحج)
            <AudioPlayer arabicText="جميع المعلومات الضرورية للعمرة والحج" className="alphabet-audio-btn" tone="default" />
          </span>
        }
        sectionCount={8}
      />

      <SectionWrapper className="guide-section">
          <GuideCategory 
            id="preparation" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                প্রস্তুতি (التحضير)
                <AudioPlayer arabicText="التحضير" className="alphabet-audio-btn" tone="default" />
              </span>
            } 
            defaultOpen={false} 
            number={1}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              যা যা প্রয়োজন: (ما هو مطلوب)
              <AudioPlayer arabicText="ما هو مطلوب" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>
                <strong>পাসপোর্ট (جواز السفر):</strong> কমপক্ষে ৬ মাস বৈধ থাকতে হবে (يجب أن يكون ساري المفعول لمدة 6 أشهر على الأقل)
                <AudioPlayer arabicText="جواز السفر" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>ভিসা (التأشيرة):</strong> সৌদি আরবের হজ্জ/উমরাহ ভিসা (تأشيرة الحج/العمرة للسعودية)
                <AudioPlayer arabicText="التأشيرة" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>টিকা (التطعيم):</strong> প্রয়োজনীয় টিকা নিন (خذ التطعيمات اللازمة - التهاب السحايا، إلخ)
                <AudioPlayer arabicText="التطعيم" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>আর্থিক প্রস্তুতি (التحضير المالي):</strong> যথেষ্ট টাকা রাখুন (احتفظ بمال كافٍ)
                <AudioPlayer arabicText="التحضير المالي" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>স্বাস্থ্য (الصحة):</strong> চিকিৎসকের পরামর্শ নিন (استشر الطبيب)
                <AudioPlayer arabicText="الصحة" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>পোশাক (الملابس):</strong> ইহরামের কাপড় (পুরুষদের জন্য) (ملابس الإحرام - للرجال)
                <AudioPlayer arabicText="ملابس الإحرام" className="alphabet-audio-btn" tone="default" />
              </li>
            </ul>
          </GuideCategory>

          <GuideCategory 
            id="ihram" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ইহরাম সম্পর্কে (عن الإحرام)
                <AudioPlayer arabicText="عن الإحرام" className="alphabet-audio-btn" tone="default" />
              </span>
            } 
            defaultOpen={false} 
            number={2}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ইহরাম কি? (ما هو الإحرام؟)
              <AudioPlayer arabicText="ما هو الإحرام؟" className="alphabet-audio-btn" tone="default" />
            </h3>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ইহরাম হল উমরাহ বা হজ্জের জন্য বিশেষ পোশাক এবং নিয়ত। (الإحرام هو اللباس الخاص والنية للعمرة أو الحج)
              <AudioPlayer arabicText="الإحرام هو اللباس الخاص والنية للعمرة أو الحج" className="alphabet-audio-btn" tone="default" />
            </p>
            
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              পুরুষদের জন্য: (للرجال)
              <AudioPlayer arabicText="للرجال" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>দুইটি সাদা কাপড় (একটি কোমরে, একটি কাঁধে) (قطعتان من القماش الأبيض - واحدة على الخصر، واحدة على الكتف)</li>
              <li>স্যান্ডেল বা খোলা জুতা (الصنادل أو الأحذية المفتوحة)</li>
              <li>মাথা ঢাকা নিষিদ্ধ (غطاء الرأس محظور)</li>
            </ul>

            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              মহিলাদের জন্য: (للنساء)
              <AudioPlayer arabicText="للنساء" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>সাধারণ পোশাক (হাত-পা ঢাকা) (الملابس العادية - اليدين والقدمين مغطاة)</li>
              <li>মাথা ঢাকা (হিজাব) (غطاء الرأس - الحجاب)</li>
              <li>হাতের তালু ও মুখ খোলা রাখতে হবে (يجب أن تبقى راحة اليد والوجه مكشوفة)</li>
            </ul>

            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ইহরামে নিষিদ্ধ কাজ: (الأعمال المحظورة في الإحرام)
              <AudioPlayer arabicText="الأعمال المحظورة في الإحرام" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>চুল কাটা বা মুন্ডন (قص الشعر أو الحلاقة)</li>
              <li>নখ কাটা (قص الأظافر)</li>
              <li>সুগন্ধি ব্যবহার (استخدام العطر)</li>
              <li>শিকার করা (الصيد)</li>
              <li>বিবাহ করা বা বিবাহের প্রস্তাব দেওয়া (الزواج أو تقديم عرض الزواج)</li>
              <li>যৌন সম্পর্ক (العلاقات الجنسية)</li>
            </ul>
          </GuideCategory>

          <GuideCategory 
            id="meeqat" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                মিকাত (الميقات)
                <AudioPlayer arabicText="الميقات" className="alphabet-audio-btn" tone="default" />
              </span>
            } 
            defaultOpen={false} 
            number={3}
          >
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              মিকাত হল সেই স্থান যেখান থেকে ইহরাম গ্রহণ করতে হবে। (الميقات هو المكان الذي يجب أن يحرم منه)
              <AudioPlayer arabicText="الميقات هو المكان الذي يجب أن يحرم منه" className="alphabet-audio-btn" tone="default" />
            </p>
            <ul>
              <li>
                <strong>ধুল-হুলাইফা (ذو الحليفة):</strong> মদিনা থেকে আসা ব্যক্তিদের জন্য (للقادمين من المدينة)
                <AudioPlayer arabicText="ذو الحليفة" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>জুহফা (الجحفة):</strong> সিরিয়া, মিশর, মরক্কো থেকে আসা ব্যক্তিদের জন্য (للقادمين من سوريا ومصر والمغرب)
                <AudioPlayer arabicText="الجحفة" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>ক্বারনুল মানাজিল (قرن المنازل):</strong> নজদ থেকে আসা ব্যক্তিদের জন্য (للقادمين من نجد)
                <AudioPlayer arabicText="قرن المنازل" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>ইয়ালামলাম (يلملم):</strong> ইয়েমেন থেকে আসা ব্যক্তিদের জন্য (للقادمين من اليمن)
                <AudioPlayer arabicText="يلملم" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>ইব্রাহিম মুকাররম (إبراهيم المكرم):</strong> ইরাক থেকে আসা ব্যক্তিদের জন্য (للقادمين من العراق)
                <AudioPlayer arabicText="إبراهيم المكرم" className="alphabet-audio-btn" tone="default" />
              </li>
            </ul>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <strong>বিমানযোগে আসা ব্যক্তিরা (القادمون بالطائرة):</strong> বিমানে মিকাত অতিক্রম করার সময় ইহরাম গ্রহণ করবেন। (يجب أن يحرم عند عبور الميقات في الطائرة)
              <AudioPlayer arabicText="القادمون بالطائرة" className="alphabet-audio-btn" tone="default" />
            </p>
          </GuideCategory>

          <GuideCategory 
            id="tawaf" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                তাওয়াফ সম্পর্কে (عن الطواف)
                <AudioPlayer arabicText="عن الطواف" className="alphabet-audio-btn" tone="default" />
              </span>
            } 
            defaultOpen={false} 
            number={4}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              তাওয়াফের নিয়ম: (قواعد الطواف)
              <AudioPlayer arabicText="قواعد الطواف" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>হাজরে আসওয়াদ থেকে শুরু করুন (ابدأ من الحجر الأسود)</li>
              <li>কাবা শরীফকে বাম দিকে রেখে প্রদক্ষিণ করুন (طوف حول الكعبة مع إبقائها على يسارك)</li>
              <li>৭ বার সম্পন্ন করুন (أكمل 7 مرات)</li>
              <li>প্রথম ৩ চক্করে পুরুষরা রমল (দ্রুত হাঁটা) করবেন (الرجال يهرولون في أول 3 أشواط)</li>
              <li>প্রতিটি চক্করে হাজরে আসওয়াদে চুমু দিন বা ইশারা করুন (قبل أو أشر إلى الحجر الأسود في كل شوط)</li>
              <li>রুকনে ইয়ামানির কাছে দোয়া করুন (ادع عند الركن اليماني)</li>
            </ul>
          </GuideCategory>

          <GuideCategory 
            id="sai" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                সাঈ সম্পর্কে (عن السعي)
                <AudioPlayer arabicText="عن السعي" className="alphabet-audio-btn" tone="default" />
              </span>
            } 
            defaultOpen={false} 
            number={5}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              সাঈের নিয়ম: (قواعد السعي)
              <AudioPlayer arabicText="قواعد السعي" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>সাফা পাহাড় থেকে শুরু করুন (ابدأ من جبل الصفا)</li>
              <li>মারওয়া পর্যন্ত ৭ বার যাতায়াত করুন (اذهب ذهاباً وإياباً 7 مرات إلى المروة)</li>
              <li>সাফা থেকে মারওয়া = ১ বার (من الصفا إلى المروة = مرة واحدة)</li>
              <li>মারওয়া থেকে সাফা = ১ বার (من المروة إلى الصفا = مرة واحدة)</li>
              <li>প্রতিটি পাহাড়ে উঠে দোয়া করুন (ادع عند صعود كل جبل)</li>
            </ul>
          </GuideCategory>

          <GuideCategory 
            id="hajj-days" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জের দিনসমূহ (أيام الحج)
                <AudioPlayer arabicText="أيام الحج" className="alphabet-audio-btn" tone="default" />
              </span>
            } 
            defaultOpen={false} 
            number={6}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ৮ই জিলহজ্জ: (اليوم الثامن من ذي الحجة)
              <AudioPlayer arabicText="اليوم الثامن من ذي الحجة" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>ইহরাম গ্রহণ (الإحرام)</li>
              <li>মক্কায় তাওয়াফে কুদুম (طواف القدوم في مكة)</li>
              <li>মিনায় অবস্থান (الإقامة في منى)</li>
            </ul>

            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ৯ই জিলহজ্জ: (اليوم التاسع من ذي الحجة)
              <AudioPlayer arabicText="اليوم التاسع من ذي الحجة" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>আরাফাতের ময়দানে অবস্থান (সবচেয়ে গুরুত্বপূর্ণ) (الوقوف في عرفات - الأهم)</li>
              <li>সূর্যাস্ত পর্যন্ত আরাফাতে থাকা (البقاء في عرفات حتى غروب الشمس)</li>
              <li>মুজদালিফায় রাত কাটানো (قضاء الليل في مزدلفة)</li>
            </ul>

            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ১০ই জিলহজ্জ: (اليوم العاشر من ذي الحجة)
              <AudioPlayer arabicText="اليوم العاشر من ذي الحجة" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>জামরাতুল আকাবায় রমি (رمي جمرة العقبة)</li>
              <li>কুরবানি (الذبح)</li>
              <li>চুল কাটা/মুন্ডন (قص الشعر/الحلاقة)</li>
              <li>তাওয়াফে জিয়ারত (طواف الزيارة)</li>
              <li>সাঈ (السعي)</li>
            </ul>

            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ১১-১৩ই জিলহজ্জ: (الأيام 11-13 من ذي الحجة)
              <AudioPlayer arabicText="الأيام 11-13 من ذي الحجة" className="alphabet-audio-btn" tone="default" />
            </h3>
            <ul>
              <li>তিনটি জামরায় রমি (رمي الجمرات الثلاث)</li>
              <li>মিনায় অবস্থান (الإقامة في منى)</li>
            </ul>
          </GuideCategory>

          <GuideCategory 
            id="advice" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                গুরুত্বপূর্ণ পরামর্শ (نصائح مهمة)
                <AudioPlayer arabicText="نصائح مهمة" className="alphabet-audio-btn" tone="default" />
              </span>
            } 
            defaultOpen={false} 
            number={7}
          >
            <ul>
              <li>
                <strong>ধৈর্য (الصبر):</strong> ভিড়ের মধ্যে ধৈর্য ধারণ করুন (تحلى بالصبر في الزحام)
                <AudioPlayer arabicText="الصبر" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>সুরক্ষা (الأمان):</strong> আপনার গুরুত্বপূর্ণ জিনিসপত্র নিরাপদে রাখুন (احفظ ممتلكاتك المهمة بأمان)
                <AudioPlayer arabicText="الأمان" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>পানি (الماء):</strong> পর্যাপ্ত পানি পান করুন (اشرب كمية كافية من الماء)
                <AudioPlayer arabicText="الماء" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>সূর্য (الشمس):</strong> সূর্যের তাপ থেকে নিজেকে রক্ষা করুন (احم نفسك من حرارة الشمس)
                <AudioPlayer arabicText="الشمس" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>দোয়া (الدعاء):</strong> বেশি বেশি দোয়া করুন (ادع كثيراً)
                <AudioPlayer arabicText="الدعاء" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>তাওবা (التوبة):</strong> আল্লাহর কাছে তাওবা করুন (تب إلى الله)
                <AudioPlayer arabicText="التوبة" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>সহায়তা (المساعدة):</strong> অন্যদের সাহায্য করুন (ساعد الآخرين)
                <AudioPlayer arabicText="المساعدة" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>শান্তি (السلام):</strong> শান্ত থাকুন এবং অন্যদের সাথে ভালো ব্যবহার করুন (كن هادئاً وعامل الآخرين بلطف)
                <AudioPlayer arabicText="السلام" className="alphabet-audio-btn" tone="default" />
              </li>
            </ul>
          </GuideCategory>

          <GuideCategory 
            id="bangladeshi-advice" 
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                বাংলাদেশী হাজিদের জন্য বিশেষ পরামর্শ (نصائح خاصة للحجاج البنغلاديشيين)
                <AudioPlayer arabicText="نصائح خاصة للحجاج البنغلاديشيين" className="alphabet-audio-btn" tone="default" />
              </span>
            } 
            defaultOpen={false} 
            number={8}
          >
            <ul>
              <li>
                <strong>জলবায়ু (المناخ):</strong> সৌদি আরবের গরম আবহাওয়ার জন্য প্রস্তুত থাকুন (كن مستعداً للطقس الحار في السعودية)
                <AudioPlayer arabicText="المناخ" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>খাবার (الطعام):</strong> হালাল খাবারের ব্যবস্থা করুন (رتب للطعام الحلال)
                <AudioPlayer arabicText="الطعام" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>ভাষা (اللغة):</strong> কিছু মৌলিক আরবি শব্দ শিখে নিন (تعلم بعض الكلمات العربية الأساسية)
                <AudioPlayer arabicText="اللغة" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>টাকা (المال):</strong> রিয়াল (SAR) সাথে রাখুন (احتفظ بالريال السعودي معك)
                <AudioPlayer arabicText="المال" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>যোগাযোগ (الاتصال):</strong> পরিবারের সাথে যোগাযোগের ব্যবস্থা করুন (رتب للاتصال مع العائلة)
                <AudioPlayer arabicText="الاتصال" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>স্বাস্থ্য (الصحة):</strong> প্রয়োজনীয় ওষুধ সাথে রাখুন (احتفظ بالأدوية اللازمة معك)
                <AudioPlayer arabicText="الصحة" className="alphabet-audio-btn" tone="default" />
              </li>
              <li>
                <strong>গাইড (الدليل):</strong> একজন অভিজ্ঞ গাইডের সাথে থাকুন (كن مع دليل ذي خبرة)
                <AudioPlayer arabicText="الدليل" className="alphabet-audio-btn" tone="default" />
              </li>
            </ul>
          </GuideCategory>
      </SectionWrapper>
    </>
  )
}
