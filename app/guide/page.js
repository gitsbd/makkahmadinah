import GuideCategory from '@/components/GuideCategory'

export default function Guide() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>সম্পূর্ণ গাইড</h1>
          <p>উমরাহ ও হজ্জের জন্য প্রয়োজনীয় সমস্ত তথ্য</p>
          <p className="section-count">মোট <strong>৮</strong>টি বিভাগ</p>
        </div>
      </section>

      <section className="guide-section">
        <div className="container">
          <GuideCategory id="preparation" title="প্রস্তুতি" defaultOpen={false} number={1}>
            <h3>যা যা প্রয়োজন:</h3>
            <ul>
              <li><strong>পাসপোর্ট:</strong> কমপক্ষে ৬ মাস বৈধ থাকতে হবে</li>
              <li><strong>ভিসা:</strong> সৌদি আরবের হজ্জ/উমরাহ ভিসা</li>
              <li><strong>টিকা:</strong> প্রয়োজনীয় টিকা নিন (মেনিনজাইটিস, ইত্যাদি)</li>
              <li><strong>আর্থিক প্রস্তুতি:</strong> যথেষ্ট টাকা রাখুন</li>
              <li><strong>স্বাস্থ্য:</strong> চিকিৎসকের পরামর্শ নিন</li>
              <li><strong>পোশাক:</strong> ইহরামের কাপড় (পুরুষদের জন্য)</li>
            </ul>
          </GuideCategory>

          <GuideCategory id="ihram" title="ইহরাম সম্পর্কে" defaultOpen={false} number={2}>
            <h3>ইহরাম কি?</h3>
            <p>ইহরাম হল উমরাহ বা হজ্জের জন্য বিশেষ পোশাক এবং নিয়ত।</p>
            
            <h3>পুরুষদের জন্য:</h3>
            <ul>
              <li>দুইটি সাদা কাপড় (একটি কোমরে, একটি কাঁধে)</li>
              <li>স্যান্ডেল বা খোলা জুতা</li>
              <li>মাথা ঢাকা নিষিদ্ধ</li>
            </ul>

            <h3>মহিলাদের জন্য:</h3>
            <ul>
              <li>সাধারণ পোশাক (হাত-পা ঢাকা)</li>
              <li>মাথা ঢাকা (হিজাব)</li>
              <li>হাতের তালু ও মুখ খোলা রাখতে হবে</li>
            </ul>

            <h3>ইহরামে নিষিদ্ধ কাজ:</h3>
            <ul>
              <li>চুল কাটা বা মুন্ডন</li>
              <li>নখ কাটা</li>
              <li>সুগন্ধি ব্যবহার</li>
              <li>শিকার করা</li>
              <li>বিবাহ করা বা বিবাহের প্রস্তাব দেওয়া</li>
              <li>যৌন সম্পর্ক</li>
            </ul>
          </GuideCategory>

          <GuideCategory id="meeqat" title="মিকাত (Meeqat)" defaultOpen={false} number={3}>
            <p>মিকাত হল সেই স্থান যেখান থেকে ইহরাম গ্রহণ করতে হবে।</p>
            <ul>
              <li><strong>ধুল-হুলাইফা:</strong> মদিনা থেকে আসা ব্যক্তিদের জন্য</li>
              <li><strong>জুহফা:</strong> সিরিয়া, মিশর, মরক্কো থেকে আসা ব্যক্তিদের জন্য</li>
              <li><strong>ক্বারনুল মানাজিল:</strong> নজদ থেকে আসা ব্যক্তিদের জন্য</li>
              <li><strong>ইয়ালামলাম:</strong> ইয়েমেন থেকে আসা ব্যক্তিদের জন্য</li>
              <li><strong>ইব্রাহিম মুকাররম:</strong> ইরাক থেকে আসা ব্যক্তিদের জন্য</li>
            </ul>
            <p><strong>বিমানযোগে আসা ব্যক্তিরা:</strong> বিমানে মিকাত অতিক্রম করার সময় ইহরাম গ্রহণ করবেন।</p>
          </GuideCategory>

          <GuideCategory id="tawaf" title="তাওয়াফ সম্পর্কে" defaultOpen={false} number={4}>
            <h3>তাওয়াফের নিয়ম:</h3>
            <ul>
              <li>হাজরে আসওয়াদ থেকে শুরু করুন</li>
              <li>কাবা শরীফকে বাম দিকে রেখে প্রদক্ষিণ করুন</li>
              <li>৭ বার সম্পন্ন করুন</li>
              <li>প্রথম ৩ চক্করে পুরুষরা রমল (দ্রুত হাঁটা) করবেন</li>
              <li>প্রতিটি চক্করে হাজরে আসওয়াদে চুমু দিন বা ইশারা করুন</li>
              <li>রুকনে ইয়ামানির কাছে দোয়া করুন</li>
            </ul>
          </GuideCategory>

          <GuideCategory id="sai" title="সাঈ সম্পর্কে" defaultOpen={false} number={5}>
            <h3>সাঈের নিয়ম:</h3>
            <ul>
              <li>সাফা পাহাড় থেকে শুরু করুন</li>
              <li>মারওয়া পর্যন্ত ৭ বার যাতায়াত করুন</li>
              <li>সাফা থেকে মারওয়া = ১ বার</li>
              <li>মারওয়া থেকে সাফা = ১ বার</li>
              <li>প্রতিটি পাহাড়ে উঠে দোয়া করুন</li>
            </ul>
          </GuideCategory>

          <GuideCategory id="hajj-days" title="হজ্জের দিনসমূহ" defaultOpen={false} number={6}>
            <h3>৮ই জিলহজ্জ:</h3>
            <ul>
              <li>ইহরাম গ্রহণ</li>
              <li>মক্কায় তাওয়াফে কুদুম</li>
              <li>মিনায় অবস্থান</li>
            </ul>

            <h3>৯ই জিলহজ্জ:</h3>
            <ul>
              <li>আরাফাতের ময়দানে অবস্থান (সবচেয়ে গুরুত্বপূর্ণ)</li>
              <li>সূর্যাস্ত পর্যন্ত আরাফাতে থাকা</li>
              <li>মুজদালিফায় রাত কাটানো</li>
            </ul>

            <h3>১০ই জিলহজ্জ:</h3>
            <ul>
              <li>জামরাতুল আকাবায় রমি</li>
              <li>কুরবানি</li>
              <li>চুল কাটা/মুন্ডন</li>
              <li>তাওয়াফে জিয়ারত</li>
              <li>সাঈ</li>
            </ul>

            <h3>১১-১৩ই জিলহজ্জ:</h3>
            <ul>
              <li>তিনটি জামরায় রমি</li>
              <li>মিনায় অবস্থান</li>
            </ul>
          </GuideCategory>

          <GuideCategory id="advice" title="গুরুত্বপূর্ণ পরামর্শ" defaultOpen={false} number={7}>
            <ul>
              <li><strong>ধৈর্য:</strong> ভিড়ের মধ্যে ধৈর্য ধারণ করুন</li>
              <li><strong>সুরক্ষা:</strong> আপনার গুরুত্বপূর্ণ জিনিসপত্র নিরাপদে রাখুন</li>
              <li><strong>পানি:</strong> পর্যাপ্ত পানি পান করুন</li>
              <li><strong>সূর্য:</strong> সূর্যের তাপ থেকে নিজেকে রক্ষা করুন</li>
              <li><strong>দোয়া:</strong> বেশি বেশি দোয়া করুন</li>
              <li><strong>তাওবা:</strong> আল্লাহর কাছে তাওবা করুন</li>
              <li><strong>সহায়তা:</strong> অন্যদের সাহায্য করুন</li>
              <li><strong>শান্তি:</strong> শান্ত থাকুন এবং অন্যদের সাথে ভালো ব্যবহার করুন</li>
            </ul>
          </GuideCategory>

          <GuideCategory id="bangladeshi-advice" title="বাংলাদেশী হাজিদের জন্য বিশেষ পরামর্শ" defaultOpen={false} number={8}>
            <ul>
              <li><strong>জলবায়ু:</strong> সৌদি আরবের গরম আবহাওয়ার জন্য প্রস্তুত থাকুন</li>
              <li><strong>খাবার:</strong> হালাল খাবারের ব্যবস্থা করুন</li>
              <li><strong>ভাষা:</strong> কিছু মৌলিক আরবি শব্দ শিখে নিন</li>
              <li><strong>টাকা:</strong> রিয়াল (SAR) সাথে রাখুন</li>
              <li><strong>যোগাযোগ:</strong> পরিবারের সাথে যোগাযোগের ব্যবস্থা করুন</li>
              <li><strong>স্বাস্থ্য:</strong> প্রয়োজনীয় ওষুধ সাথে রাখুন</li>
              <li><strong>গাইড:</strong> একজন অভিজ্ঞ গাইডের সাথে থাকুন</li>
            </ul>
          </GuideCategory>
        </div>
      </section>
    </>
  )
}
