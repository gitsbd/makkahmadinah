import PageHeader from '@/components/PageHeader'
import DuaCategory from '@/components/DuaCategory'
import DuaItem from '@/components/DuaItem'
import ExpandableSection from '@/components/ExpandableSection'
import UmrahProcessSteps from '@/components/UmrahProcessSteps'

export default function UmrahDuas() {
  return (
    <>
      <PageHeader 
        title="উমরাহ দোয়া"
        subtitle="উমরাহ পালনের জন্য প্রয়োজনীয় সমস্ত দোয়া ও সূরা"
        sectionCount={11}
      />

      <section className="duas-section">
        <div className="container">
          <ExpandableSection 
            id="umrah-process" 
            title="উমরাহ সম্পাদনের সম্পূর্ণ প্রক্রিয়া (Step by Step Process)" 
            defaultOpen={false}
            className="dua-category-wrapper"
            number={0}
          >
            <UmrahProcessSteps />
          </ExpandableSection>

          <DuaCategory id="ihram-intention" title="ইহরামের নিয়ত ও তালবিয়া" defaultOpen={false} number={1}>
            <DuaItem 
              title="ইহরামের নিয়ত"
              arabic="لَبَّيْكَ اللَّهُمَّ عُمْرَةً"
              transliteration="Labbaik Allahumma Umratan"
              translation="হে আল্লাহ, আমি উমরাহর জন্য উপস্থিত"
            />
            <DuaItem 
              title="তালবিয়া (ইহরামের পর থেকে তাওয়াফ শুরু পর্যন্ত)"
              arabic="لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ"
              transliteration="Labbaik Allahumma Labbaik, Labbaik La Sharika Laka Labbaik, Innal Hamda Wan Ni'mata Laka Wal Mulk, La Sharika Lak"
              translation="হে আল্লাহ, আমি উপস্থিত, আমি উপস্থিত। আপনার কোন শরীক নেই, আমি উপস্থিত। নিশ্চয়ই সকল প্রশংসা, নেয়ামত ও রাজত্ব আপনার, আপনার কোন শরীক নেই।"
            />
            <div className="info-text">
              <p><strong>মনে রাখবেন:</strong> তালবিয়া উচ্চস্বরে পাঠ করতে হবে। পুরুষরা উচ্চস্বরে এবং মহিলারা নিম্নস্বরে পাঠ করবেন।</p>
            </div>
          </DuaCategory>

          <DuaCategory id="makkah-entry" title="মক্কায় প্রবেশের দোয়া" defaultOpen={false} number={2}>
            <DuaItem 
              title="মক্কায় প্রবেশের সময়"
              arabic="اللَّهُمَّ هَذَا حَرَمُكَ وَأَمْنُكَ فَحَرِّمْ لَحْمِي وَدَمِي وَشَعْرِي وَبَشَرِي عَلَى النَّارِ"
              transliteration="Allahumma Hazha Haramuka Wa Amnuka Faharrim Lahmi Wa Dami Wa Sha'ri Wa Bashari Alannar"
              translation="হে আল্লাহ, এটি আপনার হারাম ও নিরাপত্তার স্থান, তাই আমার গোশত, রক্ত, চুল ও চামড়াকে জাহান্নামের উপর হারাম করুন"
            />
            <DuaItem 
              title="মক্কা দেখার সময়"
              arabic="اللَّهُمَّ زِدْ هَذَا الْبَلَدَ تَعْظِيمًا وَتَكْرِيمًا وَتَحْرِيمًا وَبَرًّا وَمُهَيْمِنًا"
              transliteration="Allahumma Zid Hazhal Balada Ta'ziman Wa Takriman Wa Tahriman Wa Barran Wa Muhaiminan"
              translation="হে আল্লাহ, এই শহরকে আরও সম্মান, মর্যাদা, পবিত্রতা, কল্যাণ ও নিরাপত্তা বৃদ্ধি করুন"
            />
          </DuaCategory>

          <DuaCategory id="masjid-haram-entry" title="মসজিদুল হারামে প্রবেশের দোয়া" defaultOpen={false} number={3}>
            <DuaItem 
              title="মসজিদুল হারামে প্রবেশ"
              arabic="اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ"
              transliteration="Allahumma Iftah Li Abwaba Rahmatik"
              translation="হে আল্লাহ, আমার জন্য আপনার রহমতের দরজা খুলে দিন"
            />
            <DuaItem 
              title="কাবা শরীফ দেখার সময়"
              arabic="اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً"
              transliteration="Allahumma Zid Hazhal Baita Tashrifan Wa Ta'ziman Wa Takriman Wa Mahabatan"
              translation="হে আল্লাহ, এই ঘরকে আরও সম্মান, মর্যাদা, শ্রদ্ধা ও ভয় বৃদ্ধি করুন"
            />
            <DuaItem 
              title="কাবা শরীফ দেখার দোয়া"
              arabic="اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ فَحَيِّنَا رَبَّنَا بِالسَّلَامِ"
              transliteration="Allahumma Antas Salamu Wa Minkas Salamu Fahayyina Rabbana Bis Salam"
              translation="হে আল্লাহ, আপনি শান্তি এবং শান্তি আপনার কাছ থেকে, তাই হে আমাদের রব, আমাদেরকে শান্তি দিয়ে জীবন দান করুন"
            />
          </DuaCategory>

          <DuaCategory id="tawaf-duas" title="তাওয়াফের দোয়া" defaultOpen={false} number={4}>
            <DuaItem 
              title="তাওয়াফ শুরু করার সময় (হাজরে আসওয়াদ স্পর্শ করে)"
              arabic="بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ"
              transliteration="Bismillahi Wallahu Akbar"
              translation="আল্লাহর নামে শুরু করছি এবং আল্লাহ সর্বশ্রেষ্ঠ"
            />
            <DuaItem 
              title="তাওয়াফের সময় পাঠ করা দোয়া"
              arabic="سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ"
              transliteration="Subhanallahi Walhamdulillahi Wa La Ilaha Illallahu Wallahu Akbar"
              translation="আল্লাহ পবিত্র, সকল প্রশংসা আল্লাহর, আল্লাহ ছাড়া কোন ইলাহ নেই, আল্লাহ সর্বশ্রেষ্ঠ"
            />
            <DuaItem 
              title="রুকনে ইয়ামানির কাছে (প্রতিটি চক্করে)"
              arabic="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
              transliteration="Rabbana Atina Fid Dunya Hasanatan Wa Fil Akhirati Hasanatan Wa Qina Azaban Nar"
              translation="হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন এবং আখিরাতে কল্যাণ দিন এবং আমাদেরকে জাহান্নামের শাস্তি থেকে রক্ষা করুন"
            />
            <DuaItem 
              title="হাতিমের কাছে"
              arabic="اللَّهُمَّ إِنَّ الْبَيْتَ بَيْتُكَ وَالْحَرَمَ حَرَمُكَ وَالْأَمْنَ أَمْنُكَ وَهَذَا مَقَامُ الْعَائِذِ بِكَ"
              transliteration="Allahumma Innal Baita Baituka Wal Harama Haramuka Wal Amna Amnuka Wa Hazha Maqamul A'idhi Bika"
              translation="হে আল্লাহ, নিশ্চয়ই এই ঘর আপনার ঘর, হারাম আপনার হারাম, নিরাপত্তা আপনার নিরাপত্তা এবং এটি আপনার কাছে আশ্রয় প্রার্থনাকারীর স্থান"
            />
            <DuaItem 
              title="মাকামে ইব্রাহিমের কাছে"
              arabic="وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى"
              transliteration="Wattakhizu Min Maqami Ibrahima Musallan"
              translation="তোমরা মাকামে ইব্রাহিমকে নামাজের স্থান হিসেবে গ্রহণ কর"
            />
            <div className="info-text">
              <p><strong>মনে রাখবেন:</strong> তাওয়াফের সময় যে কোন দোয়া করা যায়। নিজের ভাষায় আল্লাহর কাছে দোয়া করতে পারেন।</p>
            </div>
          </DuaCategory>

          <DuaCategory id="zamzam-duas" title="জমজম পান করার দোয়া" defaultOpen={false} number={5}>
            <DuaItem 
              title="জমজম পান করার সময়"
              arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ"
              transliteration="Allahumma Inni As'aluka Ilman Nafian Wa Rizqan Wasian Wa Shifaan Min Kulli Dain"
              translation="হে আল্লাহ, আমি আপনার কাছে উপকারী জ্ঞান, প্রশস্ত রিজিক এবং সকল রোগ থেকে আরোগ্য চাই"
            />
            <DuaItem 
              title="জমজম পান করার পর"
              arabic="اللَّهُمَّ اجْعَلْهُ لِي عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ"
              transliteration="Allahumma Ij'alhu Li Ilman Nafian Wa Rizqan Wasian Wa Shifaan Min Kulli Dain"
              translation="হে আল্লাহ, এটিকে আমার জন্য উপকারী জ্ঞান, প্রশস্ত রিজিক এবং সকল রোগ থেকে আরোগ্য করুন"
            />
            <div className="info-text">
              <p><strong>মনে রাখবেন:</strong> জমজম পান করার সময় দাঁড়িয়ে, বসে বা শুয়ে পান করা যায়। তিনবার পান করা সুন্নাত।</p>
            </div>
          </DuaCategory>

          <DuaCategory id="safa-marwa" title="সাফা-মারওয়ার দোয়া (সাঈ)" defaultOpen={false} number={6}>
            <DuaItem 
              title="সাফায় উঠে কাবা শরীফের দিকে মুখ করে"
              arabic="إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا"
              transliteration="Innas Safa Wal Marwata Min Sha'airillah Faman Hajjal Baita Awi'tamara Fala Junaha Alaihi An Yattawwafa Bihima"
              translation="নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনসমূহের অন্তর্গত, সুতরাং যে ব্যক্তি কাবা ঘরের হজ বা উমরাহ করে, তার জন্য এ দুটির মধ্যে সাঈ করা দোষণীয় নয়"
            />
            <DuaItem 
              title="সাঈর সময় প্রধান দোয়া"
              arabic="رَبِّ اغْفِرْ وَارْحَمْ وَتَجَاوَزْ عَمَّا تَعْلَمُ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ"
              transliteration="Rabbighfir Warham Wa Tajawaz Amma Ta'lamu Innaka Antal A'azzul Akram"
              translation="হে রব, ক্ষমা করুন, রহম করুন এবং আপনি যা জানেন তা থেকে অগ্রাহ্য করুন, নিশ্চয়ই আপনি সর্বশ্রেষ্ঠ ও সর্বাধিক সম্মানিত"
            />
            <DuaItem 
              title="বিকল্প দোয়া ১ (সংক্ষিপ্ত)"
              arabic="رَبِّ اغْفِرْ وَارْحَمْ"
              transliteration="Rabbighfir Warham"
              translation="হে রব, ক্ষমা করুন এবং রহম করুন"
            />
            <DuaItem 
              title="বিকল্প দোয়া ২"
              arabic="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
              transliteration="Rabbana Atina Fid Dunya Hasanatan Wa Fil Akhirati Hasanatan Wa Qina Azaban Nar"
              translation="হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন এবং আখিরাতে কল্যাণ দিন এবং আমাদেরকে জাহান্নামের শাস্তি থেকে রক্ষা করুন"
            />
            <DuaItem 
              title="বিকল্প দোয়া ৩"
              arabic="رَبِّ اغْفِرْ وَارْحَمْ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ"
              transliteration="Rabbighfir Warham, Innaka Antal A'azzul Akram"
              translation="হে রব, ক্ষমা করুন এবং রহম করুন, নিশ্চয়ই আপনি সর্বশ্রেষ্ঠ ও সর্বাধিক সম্মানিত"
            />
            <div className="info-text">
              <p><strong>মনে রাখবেন:</strong> সাঈর সময় দুই সবুজ স্তম্ভের মধ্যে দৌড়াতে হবে (পুরুষদের জন্য)। মহিলারা স্বাভাবিকভাবে হাঁটবেন।</p>
            </div>
          </DuaCategory>

          <DuaCategory id="hair-cut" title="চুল কাটার দোয়া" defaultOpen={false} number={7}>
            <DuaItem 
              title="চুল কাটার সময়"
              arabic="اللَّهُمَّ حَلَقَ أَوْ قَصَّرَ فَأَحَلَّ"
              transliteration="Allahumma Halaqa Aw Qassara Fa Ahlal"
              translation="হে আল্লাহ, (ইহরাম থেকে) মুক্ত করুন"
            />
            <div className="info-text">
              <p><strong>মনে রাখবেন:</strong> উমরাহর জন্য পুরুষদের চুল কাটা বা মুন্ডন করা যায়। মহিলাদের শুধু চুলের অগ্রভাগ কাটতে হবে (এক আঙ্গুল পরিমাণ)।</p>
            </div>
          </DuaCategory>

          <DuaCategory id="general-duas" title="সাধারণ দোয়া" defaultOpen={false} number={8}>
            <DuaItem 
              title="যে কোন সময় পাঠ করা যায়"
              arabic="رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ"
              transliteration="Rabbana Taqabbal Minna Innaka Antas Sami'ul Alim"
              translation="হে আমাদের রব, আমাদের থেকে কবুল করুন, নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞাতা"
            />
            <DuaItem 
              title="ক্ষমা প্রার্থনার দোয়া"
              arabic="رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ"
              transliteration="Rabbana Ighfir Lana Dhunubana Wa Kaffir Anna Sayyiatina Wa Tawaffana Ma'al Abrar"
              translation="হে আমাদের রব, আমাদের গুনাহসমূহ ক্ষমা করুন, আমাদের পাপসমূহ মোচন করুন এবং আমাদেরকে সৎকর্মশীলদের সাথে মৃত্যু দিন"
            />
            <DuaItem 
              title="কল্যাণ কামনার দোয়া"
              arabic="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
              transliteration="Rabbana Atina Fid Dunya Hasanatan Wa Fil Akhirati Hasanatan Wa Qina Azaban Nar"
              translation="হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন এবং আখিরাতে কল্যাণ দিন এবং আমাদেরকে জাহান্নামের শাস্তি থেকে রক্ষা করুন"
            />
          </DuaCategory>

          <DuaCategory id="important-surahs" title="গুরুত্বপূর্ণ সূরা" defaultOpen={false} number={9}>
            <DuaItem 
              title="সূরা আল-ফাতিহা"
              arabic="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (١) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (٢) الرَّحْمَٰنِ الرَّحِيمِ (٣) مَالِكِ يَوْمِ الدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (٦) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (٧)"
              translation="পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে শুরু করছি। (১) সমস্ত প্রশংসা আল্লাহর, যিনি বিশ্বজগতের রব। (২) পরম করুণাময় ও অসীম দয়ালু। (৩) বিচার দিনের মালিক। (৪) আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই কাছে সাহায্য চাই। (৫) আমাদেরকে সরল পথ দেখান। (৬) তাদের পথ, যাদের উপর আপনি অনুগ্রহ করেছেন, তাদের পথ নয় যাদের উপর আপনার গজব নেমেছে এবং যারা পথভ্রষ্ট হয়েছে। (৭)"
            />
            <DuaItem 
              title="সূরা আল-ইখলাস"
              arabic="قُلْ هُوَ اللَّهُ أَحَدٌ (١) اللَّهُ الصَّمَدُ (٢) لَمْ يَلِدْ وَلَمْ يُولَدْ (٣) وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ (٤)"
              translation="বলুন, তিনি আল্লাহ, এক। (১) আল্লাহ অমুখাপেক্ষী। (২) তিনি কাউকে জন্ম দেননি এবং কেউ তাকে জন্ম দেয়নি। (৩) এবং তার সমতুল্য কেউ নেই। (৪)"
            />
            <DuaItem 
              title="সূরা আল-কাফিরুন"
              arabic="قُلْ يَا أَيُّهَا الْكَافِرُونَ (١) لَا أَعْبُدُ مَا تَعْبُدُونَ (٢) وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ (٣) وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ (٤) وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ (٥) لَكُمْ دِينُكُمْ وَلِي دِينِ (٦)"
              translation="বলুন, হে কাফিরগণ! (১) আমি তোমাদের ইবাদত করি না যা তোমরা ইবাদত কর। (২) এবং তোমরাও ইবাদতকারী নও যা আমি ইবাদত করি। (৩) এবং আমি ইবাদতকারী নই যা তোমরা ইবাদত করেছ। (৪) এবং তোমরাও ইবাদতকারী নও যা আমি ইবাদত করি। (৫) তোমাদের জন্য তোমাদের ধর্ম এবং আমার জন্য আমার ধর্ম। (৬)"
            />
            <DuaItem 
              title="সূরা আন-নাস"
              arabic="قُلْ أَعُوذُ بِرَبِّ النَّاسِ (١) مَلِكِ النَّاسِ (٢) إِلَٰهِ النَّاسِ (٣) مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (٤) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (٥) مِنَ الْجِنَّةِ وَالنَّاسِ (٦)"
              translation="বলুন, আমি আশ্রয় গ্রহণ করছি মানুষের রবের কাছে। (১) মানুষের মালিকের কাছে। (২) মানুষের ইলাহের কাছে। (৩) কুমন্ত্রণাদাতার অনিষ্ট থেকে। (৪) যে মানুষের অন্তরে কুমন্ত্রণা দেয়। (৫) জিন ও মানুষের মধ্য থেকে। (৬)"
            />
            <DuaItem 
              title="সূরা আল-ফালাক"
              arabic="قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (١) مِن شَرِّ مَا خَلَقَ (٢) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (٣) وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (٤) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (٥)"
              translation="বলুন, আমি আশ্রয় গ্রহণ করছি ভোরের রবের কাছে। (১) তাঁর সৃষ্টির অনিষ্ট থেকে। (২) অন্ধকার রাতের অনিষ্ট থেকে যখন তা ছেয়ে যায়। (৩) গিটে ফুঁ দেওয়া জাদুকরীদের অনিষ্ট থেকে। (৪) এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে। (৫)"
            />
          </DuaCategory>

          <DuaCategory id="madinah-visit" title="মদিনা যিয়ারতের দোয়া" defaultOpen={false} number={10}>
            <DuaItem 
              title="মদিনায় প্রবেশের দোয়া"
              arabic="اللَّهُمَّ هَذَا حَرَمُ نَبِيِّكَ فَاجْعَلْهُ لِي وِقَايَةً مِنَ النَّارِ وَأَمَانًا مِنَ الْعَذَابِ وَسِتْرًا مِنَ السَّيِّئَاتِ"
              transliteration="Allahumma Hazha Haramu Nabiyyika Faj'alhu Li Wiqayatan Minannar Wa Amana Minal Azabi Wa Sitran Minas Sayyiat"
              translation="হে আল্লাহ, এটি আপনার নবীর হারাম, তাই এটিকে আমার জন্য জাহান্নাম থেকে রক্ষা, শাস্তি থেকে নিরাপত্তা এবং পাপ থেকে আড়াল করুন"
            />
            <DuaItem 
              title="মসজিদে নববীতে প্রবেশ"
              arabic="اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ"
              transliteration="Allahumma Iftah Li Abwaba Rahmatik"
              translation="হে আল্লাহ, আমার জন্য আপনার রহমতের দরজা খুলে দিন"
            />
            <DuaItem 
              title="রওজা শরীফে সালাম (প্রথম সালাম)"
              arabic="السَّلَامُ عَلَيْكَ يَا أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ"
              transliteration="Assalamu Alaika Ya Ayyuhan Nabiyyu Wa Rahmatullahi Wa Barakatuhu"
              translation="হে নবী, আপনার উপর শান্তি, আল্লাহর রহমত ও বরকত বর্ষিত হোক"
            />
            <DuaItem 
              title="রওজা শরীফে সালাম (বিস্তারিত)"
              arabic="السَّلَاتُ وَالسَّلَامُ عَلَيْكَ يَا أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ"
              transliteration="Assalatu Wassalamu Alaika Ya Ayyuhan Nabiyyu Wa Rahmatullahi Wa Barakatuhu"
              translation="হে নবী, আপনার উপর সালাত ও সালাম, আল্লাহর রহমত ও বরকত বর্ষিত হোক"
            />
            <div className="info-text">
              <p><strong>রওজা শরীফে সালামের বিভিন্ন পাঠ:</strong></p>
              <ul className="list-styled">
                <li>আসসালাতু ওয়াসসালামু আলাইকা ইয়া আইয়ুহাননাবী ওয়া রাহমাতুল্লাহ ওয়া বারাকাতুহু</li>
                <li>আসসালাতু ওয়াসসালামু আলাইকা ইয়া নাবীআল্লাহ</li>
                <li>আসসালাতু ওয়াসসালামু আলাইকা ইয়া হাবীবাল্লাহ</li>
                <li>আসসালাতু ওয়াসসালামু আলাইকা ইয়া খায়রা খালকিল্লাহ</li>
                <li>আসসালাতু ওয়াসসালামু আলাইকা ইয়া সাইয়িদাল মুরসালীন</li>
                <li>আসসালাতু ওয়াসসালামু আলাইকা ইয়া খাতামান নাবীয়ীন</li>
                <li>আসসালাতু ওয়াসসালামু আলাইকা ইয়া রাহমাতাল্লির আলামীন</li>
                <li>আসসালাতু ওয়াসসালামু আলাইকা ইয়া শাফীয়াল মুয়নিবীন</li>
              </ul>
            </div>
            <DuaItem 
              title="হযরত আবু বকর (রা.) এর জন্য সালাম"
              arabic="السَّلَامُ عَلَيْكَ يَا خَلِيفَةَ رَسُولِ اللَّهِ أَبَا بَكْرٍ"
              transliteration="Assalamu Alaika Ya Khalifata Rasulillahi Aba Bakr"
              translation="হে রাসূলুল্লাহর খলিফা আবু বকর, আপনার উপর শান্তি"
            />
            <DuaItem 
              title="হযরত উমর (রা.) এর জন্য সালাম"
              arabic="السَّلَامُ عَلَيْكَ يَا أَمِيرَ الْمُؤْمِنِينَ عُمَرَ الْفَارُوقَ"
              transliteration="Assalamu Alaika Ya Amirul Muminina Umaral Faruq"
              translation="হে মুমিনদের আমীর উমর ফারুক, আপনার উপর শান্তি"
            />
            <div className="info-text">
              <p><strong>মনে রাখবেন:</strong> রওজা শরীফে সালাম দেওয়ার সময় কিবলার দিকে পিঠ করে, রাসূলুল্লাহ (সা.) এর দিকে মুখ করে দাঁড়াতে হবে।</p>
            </div>
            <div className="info-text">
              <h4>মদীনায় যেসব জায়গা যিয়ারত করা সুন্নাত:</h4>
              <ul className="list-styled">
                <li>বাকী'র কবরস্থান</li>
                <li>মসজিদে কুবা</li>
                <li>শুহাদায়ে উহুদের কবরস্থান</li>
              </ul>
            </div>
            <div className="important-note important-note-green">
              <h4>রওজা শরীফে যিয়ারতের আদব:</h4>
              <ul>
                <li>কিবলার দিকে পিঠ করে, রাসূলুল্লাহ (সা.) এর দিকে মুখ করে দাঁড়াতে হবে</li>
                <li>পৃথিবীর যাবতীয় চিন্তাভাবনা থেকে মনকে মুক্ত করে একাগ্রচিত্তে সালাম পেশ করতে হবে</li>
                <li>মধ্যম আওয়াজে সালাম পেশ করতে হবে</li>
                <li>ভিড়ের মধ্যে ধাক্কাধাক্কি করে অন্যকে কষ্ট দিবেন না</li>
                <li>কবরের সামনে বেশিক্ষণ দাঁড়াবেন না</li>
                <li>কোনো কথা বলবেন না</li>
              </ul>
            </div>
          </DuaCategory>
        </div>
      </section>
    </>
  )
}

