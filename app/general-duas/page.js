import GeneralDuaCategory from '@/components/GeneralDuaCategory'

export default function GeneralDuas() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>সাধারণ দোয়া (General Duas)</h1>
          <p>প্রতিদিনের জীবনে ব্যবহার করা হয় এমন গুরুত্বপূর্ণ দোয়া</p>
          <p className="section-count">মোট <strong>৭</strong>টি দোয়া বিভাগ</p>
        </div>
      </section>

      <section className="duas-section">
        <div className="container">
          <GeneralDuaCategory title="সকালের দোয়া" number={1} defaultOpen={false}>
            <div className="dua-item">
              <h3>সকালে ঘুম থেকে উঠে</h3>
                <p className="arabic">اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ</p>
                <p className="transliteration">আল্লাহুম্মা বিকা আসবাহনা ওয়া বিকা আমসাইনা ওয়া বিকা নাহইয়া ওয়া বিকা নামুতু ওয়া ইলাইকান নুশুর</p>
                <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহ, আপনারই মাধ্যমে আমরা সকালে উপনীত হয়েছি এবং আপনারই মাধ্যমে আমরা সন্ধ্যায় উপনীত হয়েছি, আপনারই মাধ্যমে আমরা জীবন ধারণ করি এবং আপনারই মাধ্যমে আমরা মৃত্যুবরণ করব এবং আপনারই দিকে আমাদের প্রত্যাবর্তন।</p>
                
                <h3>সকালে পড়ার দোয়া</h3>
                <p className="arabic">أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ</p>
                <p className="transliteration">আসবাহনা ওয়া আসবাহাল মূলকু লিল্লাহি রাব্বিল আলামিন, আল্লাহুম্মা ইন্নি আসআলুকা খাইরা হাযাল ইয়াওমি, ফাতহাহু ওয়া নাসরাহু ওয়া নুরাহু ওয়া বারাকাতাহু ওয়া হুদাহু</p>
              <p className="translation"><strong>অনুবাদ:</strong> আমরা সকালে উপনীত হয়েছি এবং রাজত্ব আল্লাহর, যিনি বিশ্বজগতের রব। হে আল্লাহ, আমি আপনার কাছে এই দিনের কল্যাণ চাই, এর বিজয়, সাহায্য, আলো, বরকত এবং হিদায়াত।</p>
            </div>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="সন্ধ্যার দোয়া" number={2} defaultOpen={false}>
            <div className="dua-item">
                <h3>সন্ধ্যায় পড়ার দোয়া</h3>
                <p className="arabic">أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا وَهُدَاهَا</p>
                <p className="transliteration">আমসাইনা ওয়া আমসাল মূলকু লিল্লাহি রাব্বিল আলামিন, আল্লাহুম্মা ইন্নি আসআলুকা খাইরা হাযিহিল লাইলাতি, ফাতহাহা ওয়া নাসরাহা ওয়া নুরাহা ওয়া বারাকাতাহা ওয়া হুদাহা</p>
                <p className="translation"><strong>অনুবাদ:</strong> আমরা সন্ধ্যায় উপনীত হয়েছি এবং রাজত্ব আল্লাহর, যিনি বিশ্বজগতের রব। হে আল্লাহ, আমি আপনার কাছে এই রাতের কল্যাণ চাই, এর বিজয়, সাহায্য, আলো, বরকত এবং হিদায়াত।</p>
                
                <h3>রাতে ঘুমানোর আগে</h3>
                <p className="arabic">اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ</p>
                <p className="transliteration">আল্লাহুম্মা বিকা আমসাইনা ওয়া বিকা আসবাহনা ওয়া বিকা নাহইয়া ওয়া বিকা নামুতু ওয়া ইলাইকাল মাসীর</p>
              <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহ, আপনারই মাধ্যমে আমরা সন্ধ্যায় উপনীত হয়েছি এবং আপনারই মাধ্যমে আমরা সকালে উপনীত হয়েছি, আপনারই মাধ্যমে আমরা জীবন ধারণ করি এবং আপনারই মাধ্যমে আমরা মৃত্যুবরণ করব এবং আপনারই দিকে আমাদের প্রত্যাবর্তন।</p>
            </div>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="খাবার ও পানীয়ের দোয়া" number={3} defaultOpen={false}>
            <div className="dua-item">
                <h3>খাবার শুরু করার দোয়া</h3>
                <p className="arabic">بِسْمِ اللَّهِ</p>
                <p className="transliteration">বিসমিল্লাহ</p>
                <p className="translation"><strong>অনুবাদ:</strong> আল্লাহর নামে শুরু করছি।</p>
                
                <h3>খাবার শেষ করার দোয়া</h3>
                <p className="arabic">الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ</p>
                <p className="transliteration">আলহামদু লিল্লাহিল্লাযি আত'আমানা ওয়া সাকানা ওয়া জা'আলানা মুসলিমিন</p>
                <p className="translation"><strong>অনুবাদ:</strong> সমস্ত প্রশংসা আল্লাহর, যিনি আমাদেরকে খাবার দিয়েছেন, পানীয় দিয়েছেন এবং আমাদেরকে মুসলিম করেছেন।</p>
                
                <h3>পানি পান করার দোয়া</h3>
                <p className="arabic">اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ</p>
                <p className="transliteration">আল্লাহুম্মা বারিক লানা ফিহি ওয়া জিদনা মিনহু</p>
              <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহ, এতে আমাদের জন্য বরকত দিন এবং আরও দিন।</p>
            </div>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="বাড়ি থেকে বের হওয়ার দোয়া" number={4} defaultOpen={false}>
            <div className="dua-item">
              <p className="arabic">بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ</p>
                <p className="transliteration">বিসমিল্লাহি তাওয়াক্কালতু 'আলাল্লাহি ওয়া লা হাওলা ওয়া লা কুওয়াতা ইল্লা বিল্লাহ</p>
              <p className="translation"><strong>অনুবাদ:</strong> আল্লাহর নামে, আমি আল্লাহর উপর ভরসা করছি এবং আল্লাহ ছাড়া কোন শক্তি ও ক্ষমতা নেই।</p>
            </div>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="বাড়িতে প্রবেশের দোয়া" number={5} defaultOpen={false}>
            <div className="dua-item">
              <p className="arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا</p>
                <p className="transliteration">আল্লাহুম্মা ইন্নি আসআলুকা খাইরাল মাওলিজি ওয়া খাইরাল মাখরাজি, বিসমিল্লাহি ওয়ালাজনা ওয়া বিসমিল্লাহি খারাজনা ওয়া 'আলাল্লাহি রাব্বিনা তাওয়াক্কালনা</p>
              <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহ, আমি আপনার কাছে প্রবেশের কল্যাণ এবং বের হওয়ার কল্যাণ চাই। আল্লাহর নামে আমরা প্রবেশ করেছি এবং আল্লাহর নামে আমরা বের হয়েছি এবং আমাদের রব আল্লাহর উপর আমরা ভরসা করেছি।</p>
            </div>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="মসজিদে প্রবেশ ও বের হওয়ার দোয়া" number={6} defaultOpen={false}>
            <div className="dua-item">
              <h3>মসজিদে প্রবেশ</h3>
                <p className="arabic">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</p>
                <p className="transliteration">আল্লাহুম্মা ইফতাহ লি আবওয়াবা রহমাতিক</p>
                <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহ, আমার জন্য আপনার রহমতের দরজা খুলে দিন।</p>
                
                <h3>মসজিদ থেকে বের হওয়া</h3>
                <p className="arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ</p>
                <p className="transliteration">আল্লাহুম্মা ইন্নি আসআলুকা মিন ফাদলিক</p>
              <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহ, আমি আপনার কাছে আপনার অনুগ্রহ প্রার্থনা করি।</p>
            </div>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="যাত্রা শুরু করার দোয়া" number={7} defaultOpen={false}>
            <div className="dua-item">
              <p className="arabic">سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ</p>
              <p className="transliteration">সুবহানাল্লাযি সাখখারা লানা হাযা ওয়া মা কুন্না লাহু মুকরিনিন, ওয়া ইন্না ইলা রাব্বিনা লামুনকালিবুন</p>
              <p className="translation"><strong>অনুবাদ:</strong> পবিত্র তিনি যিনি আমাদের জন্য এটিকে (যানবাহন) নিয়ন্ত্রণে রেখেছেন এবং আমরা এর মালিক ছিলাম না, এবং নিশ্চয়ই আমরা আমাদের রবের দিকে প্রত্যাবর্তন করব।</p>
            </div>
          </GeneralDuaCategory>
        </div>
      </section>
    </>
  )
}
