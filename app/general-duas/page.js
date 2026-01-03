import GeneralDuaCategory from '@/components/GeneralDuaCategory'
import PageHeader from '@/components/PageHeader'
import DuaItem from '@/components/DuaItem'
import SectionWrapper from '@/components/SectionWrapper'

export default function GeneralDuas() {
  return (
    <>
      <PageHeader 
        title="সাধারণ দোয়া (General Duas)"
        subtitle="প্রতিদিনের জীবনে ব্যবহার করা হয় এমন গুরুত্বপূর্ণ দোয়া"
        sectionCount={16}
      />

      <SectionWrapper className="duas-section">
          <GeneralDuaCategory title="সকালের দোয়া" number={1} defaultOpen={false}>
            <DuaItem 
              title="১. ঘুম থেকে উঠার দু'আ"
              arabic="اَلْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ"
              transliteration="আলহামদু লিল্লাহিল্লাযী আহইয়ানা বা'দা মা আমাতানা ওয়া ইলাইহিন নুশূর"
              translation="সব প্রশংসা আল্লাহর, যিনি আমাদের মৃত্যুর (ঘুমের) পর জীবিত করলেন; তাঁরই কাছে পুনরুত্থান।"
            />
            <DuaItem 
              title="সকালে পড়ার দোয়া"
              arabic="أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ"
              transliteration="আসবাহনা ওয়া আসবাহাল মূলকু লিল্লাহি রাব্বিল আলামিন, আল্লাহুম্মা ইন্নি আসআলুকা খাইরা হাযাল ইয়াওমি, ফাতহাহু ওয়া নাসরাহু ওয়া নুরাহু ওয়া বারাকাতাহু ওয়া হুদাহু"
              translation="আমরা সকালে উপনীত হয়েছি এবং রাজত্ব আল্লাহর, যিনি বিশ্বজগতের রব। হে আল্লাহ, আমি আপনার কাছে এই দিনের কল্যাণ চাই, এর বিজয়, সাহায্য, আলো, বরকত এবং হিদায়াত।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="টয়লেটের দোয়া" number={2} defaultOpen={false}>
            <DuaItem 
              title="২. টয়লেটে ঢোকার আগে"
              arabic="اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ"
              transliteration="আল্লাহুম্মা ইন্নী আ'ঊযু বিকা মিনাল খুবুথি ওয়াল খাবায়িছ"
              translation="হে আল্লাহ! আমি আপনার কাছে আশ্রয় চাই নাপাক জিন ও নাপাকতা থেকে।"
            />
            <DuaItem 
              title="৩. টয়লেট থেকে বের হলে"
              arabic="غُفْرَانَكَ"
              transliteration="গুফরানাক"
              translation="হে আল্লাহ! আপনার ক্ষমা চাই।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="ওযুর দোয়া" number={3} defaultOpen={false}>
            <DuaItem 
              title="৪. ওযু শুরুতে (বিসমিল্লাহ)"
              arabic="بِسْمِ اللّٰهِ"
              transliteration="বিসমিল্লাহ"
              translation="আল্লাহর নামে।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="আযানের দোয়া" number={4} defaultOpen={false}>
            <DuaItem 
              title="৫. আযানের পর"
              arabic="اللّٰهُمَّ رَبَّ هٰذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ"
              transliteration="আল্লাহুম্মা রাব্বা হাযিহিদ দা'ওয়াতিত তাম্মাহ ওয়াস সালাতিল কায়িমাহ, আতি মুহাম্মাদানিল ওয়াসীলাতা ওয়াল ফাদীলাতা ওয়াব'আসহু মাকামান মাহমুদানিল্লাযী ওয়া'আদতাহু"
              translation="হে আল্লাহ! এই পূর্ণ আহ্বান ও প্রতিষ্ঠিত নামাজের রব, মুহাম্মদ (সা.)-কে ওয়াসিলা ও মর্যাদা দান করুন এবং তাকে মাকামে মাহমুদে (প্রশংসিত স্থানে) প্রতিষ্ঠিত করুন, যা আপনি তাকে প্রতিশ্রুতি দিয়েছেন।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="সকাল-সন্ধ্যার যিকির" number={5} defaultOpen={false}>
            <DuaItem>
              <h3>৬. সকাল-সন্ধ্যার যিকির (ছোট কিন্তু নিয়মিত)</h3>
              <ul className="list-spaced">
                <li><strong>সুবহানাল্লাহ</strong> - ৩৩ বার</li>
                <li><strong>আলহামদুলিল্লাহ</strong> - ৩৩ বার</li>
                <li><strong>আল্লাহু আকবার</strong> - ৩৪ বার</li>
              </ul>
              <p className="info-text">মোট ১০০ বার যিকির। প্রতিদিন সকাল ও সন্ধ্যায় পড়া উত্তম।</p>
            </DuaItem>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="সন্ধ্যার দোয়া" number={6} defaultOpen={false}>
            <DuaItem 
              title="সন্ধ্যায় পড়ার দোয়া"
              arabic="أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا وَهُدَاهَا"
              transliteration="আমসাইনা ওয়া আমসাল মূলকু লিল্লাহি রাব্বিল আলামিন, আল্লাহুম্মা ইন্নি আসআলুকা খাইরা হাযিহিল লাইলাতি, ফাতহাহা ওয়া নাসরাহা ওয়া নুরাহা ওয়া বারাকাতাহা ওয়া হুদাহা"
              translation="আমরা সন্ধ্যায় উপনীত হয়েছি এবং রাজত্ব আল্লাহর, যিনি বিশ্বজগতের রব। হে আল্লাহ, আমি আপনার কাছে এই রাতের কল্যাণ চাই, এর বিজয়, সাহায্য, আলো, বরকত এবং হিদায়াত।"
            />
            <DuaItem 
              title="১৫. সন্ধ্যায়/রাতে ঘুমানোর আগে"
              arabic="بِاسْمِكَ اللّٰهُمَّ أَمُوتُ وَأَحْيَا"
              transliteration="বিসমিকা আল্লাহুম্মা আমূতু ওয়া আহইয়া"
              translation="হে আল্লাহ! আপনার নামে আমি মৃত্যুবরণ করি ও জীবিত হই।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="খাবার ও পানীয়ের দোয়া" number={7} defaultOpen={false}>
            <DuaItem 
              title="৯. খাবার শুরুর আগে"
              arabic="بِسْمِ اللّٰهِ"
              transliteration="বিসমিল্লাহ"
              translation="আল্লাহর নামে।"
            />
            <DuaItem 
              title="১০. খাবার শেষে"
              arabic="اَلْحَمْدُ لِلّٰهِ الَّذِي أَطْعَمَنِي هٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ"
              transliteration="আলহামদু লিল্লাহিল্লাযী আত'আমানী হাযা ওয়া রাযাকানীহি মিন গাইরি হাওলিম মিন্নী ওয়া লা কুওয়াহ"
              translation="আল্লাহর প্রশংসা, যিনি আমাকে খাওয়ালেন ও রিজিক দিলেন—আমার শক্তি ছাড়াই।"
            />
            <DuaItem 
              title="পানি পান করার দোয়া"
              arabic="اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ"
              transliteration="আল্লাহুম্মা বারিক লানা ফিহি ওয়া জিদনা মিনহু"
              translation="হে আল্লাহ, এতে আমাদের জন্য বরকত দিন এবং আরও দিন।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="বাড়ি থেকে বের হওয়ার দোয়া" number={8} defaultOpen={false}>
            <DuaItem 
              title="৭. ঘর থেকে বের হওয়ার দু'আ"
              arabic="بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ"
              transliteration="বিসমিল্লাহি তাওয়াক্কালতু 'আলাল্লাহ, ওয়া লা হাওলা ওয়া লা কুওয়াতা ইল্লা বিল্লাহ"
              translation="আল্লাহর নামে বের হচ্ছি, আল্লাহর ওপর ভরসা; আল্লাহ ছাড়া শক্তি নেই।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="দিনের শুরুতে/বাজারে/কাজে" number={9} defaultOpen={false}>
            <DuaItem 
              title="৮. বাজার/কাজ/দিনের শুরুতে নিয়ত"
              arabic="اللّٰهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هٰذَا الْيَوْمِ وَخَيْرَ مَا فِيهِ"
              transliteration="আল্লাহুম্মা ইন্নী আসআলুকা খাইর হাযাল ইয়াওমি ওয়া খাইর মা ফীহি"
              translation="হে আল্লাহ! আজকের দিনের কল্যাণ ও এর মধ্যে যা কল্যাণ আছে তা দান করুন।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="বাড়িতে প্রবেশের দোয়া" number={10} defaultOpen={false}>
            <DuaItem 
              arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا"
              transliteration="আল্লাহুম্মা ইন্নি আসআলুকা খাইরাল মাওলিজি ওয়া খাইরাল মাখরাজি, বিসমিল্লাহি ওয়ালাজনা ওয়া বিসমিল্লাহি খারাজনা ওয়া 'আলাল্লাহি রাব্বিনা তাওয়াক্কালনা"
              translation="হে আল্লাহ, আমি আপনার কাছে প্রবেশের কল্যাণ এবং বের হওয়ার কল্যাণ চাই। আল্লাহর নামে আমরা প্রবেশ করেছি এবং আল্লাহর নামে আমরা বের হয়েছি এবং আমাদের রব আল্লাহর উপর আমরা ভরসা করেছি।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="মসজিদে প্রবেশ ও বের হওয়ার দোয়া" number={11} defaultOpen={false}>
            <DuaItem 
              title="১১. মসজিদে ঢোকার দু'আ"
              arabic="اللّٰهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ"
              transliteration="আল্লাহুম্মাফতাহ লী আবওয়াবা রহমাতিক"
              translation="হে আল্লাহ! আপনার রহমতের দরজা খুলে দিন।"
            />
            <DuaItem 
              title="১২. মসজিদ থেকে বের হওয়ার দু'আ"
              arabic="اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ"
              transliteration="আল্লাহুম্মা ইন্নী আসআলুকা মিন ফাদলিক"
              translation="হে আল্লাহ! আপনার অনুগ্রহ চাই।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="দুশ্চিন্তা ও রাগের দোয়া" number={12} defaultOpen={false}>
            <DuaItem 
              title="১৩. দুশ্চিন্তা/মন খারাপ হলে (খুব দরকারি)"
              arabic="حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيلُ"
              transliteration="হাসবুনাল্লাহু ওয়া নি'মাল ওয়াকীল"
              translation="আল্লাহই আমাদের জন্য যথেষ্ট, তিনিই উত্তম অভিভাবক।"
            />
            <DuaItem 
              title="১৪. রাগ উঠলে"
              arabic="أَعُوذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِيمِ"
              transliteration="আ'ঊযু বিল্লাহি মিনাশ শাইতানির রজীম"
              translation="বিতাড়িত শয়তান থেকে আল্লাহর আশ্রয় চাই।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="যাত্রা শুরু করার দোয়া" number={13} defaultOpen={false}>
            <DuaItem 
              arabic="سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ"
              transliteration="সুবহানাল্লাযি সাখখারা লানা হাযা ওয়া মা কুন্না লাহু মুকরিনিন, ওয়া ইন্না ইলা রাব্বিনা লামুনকালিবুন"
              translation="পবিত্র তিনি যিনি আমাদের জন্য এটিকে (যানবাহন) নিয়ন্ত্রণে রেখেছেন এবং আমরা এর মালিক ছিলাম না, এবং নিশ্চয়ই আমরা আমাদের রবের দিকে প্রত্যাবর্তন করব।"
            />
          </GeneralDuaCategory>

          <GeneralDuaCategory title="ঘুমানোর আগে বিশেষ দোয়া" number={14} defaultOpen={false}>
            <DuaItem>
              <h3>১৬. ঘুমানোর আগে ৩ কুল + আয়াতুল কুরসি (প্রতিদিন)</h3>
              <p className="info-text">প্রতিদিন রাতে ঘুমানোর আগে পড়া উত্তম:</p>
              <ul className="list-spaced">
                <li><strong>আয়াতুল কুরসি</strong> - ১ বার</li>
                <li><strong>সূরা ইখলাস</strong> - ৩ বার</li>
                <li><strong>সূরা ফালাক</strong> - ৩ বার</li>
                <li><strong>সূরা নাস</strong> - ৩ বার</li>
              </ul>
              <p className="info-text mt-md">এই দোয়াগুলো পড়লে আল্লাহর রহমত ও হেফাজত পাওয়া যায়।</p>
            </DuaItem>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="উপরে উঠা ও নিচে নামার দোয়া" number={15} defaultOpen={false}>
            <DuaItem 
              title="উপরে উঠার সময় (সিঁড়ি/লিফট/উঁচুতে)"
              arabic="اللّٰهُ أَكْبَرُ"
              transliteration="আল্লাহু আকবার"
              translation="আল্লাহ মহান।"
            />
            <DuaItem 
              title="নিচে নামার সময় (সিঁড়ি/লিফট/নিচে)"
              arabic="سُبْحَانَ اللّٰهِ"
              transliteration="সুবহানাল্লাহ"
              translation="আল্লাহ পবিত্র।"
            />
            <p className="info-text mt-md">উঁচুতে উঠলে তাকবীর (আল্লাহু আকবার), নিচে নামলে তাসবীহ (সুবহানাল্লাহ)—এই নীতির সাথে মিলে যায় এবং অনেক আলেম দৈনন্দিন চলাফেরায় এটাকে ব্যবহার করেন।</p>
          </GeneralDuaCategory>

          <GeneralDuaCategory title="সাক্ষাত ও হ্যান্ডশেক" number={16} defaultOpen={false}>
            <DuaItem 
              title="হ্যান্ডশেক/সাক্ষাতে বলার সবচেয়ে ভালো দোয়া"
              arabic="يَغْفِرُ اللّٰهُ لِي وَلَكَ"
              transliteration="ইয়াগফিরুল্লাহু লী ওয়া লাক"
              translation="আল্লাহ আমাকে ও আপনাকে ক্ষমা করুন।"
            />
          </GeneralDuaCategory>
      </SectionWrapper>
    </>
  )
}
