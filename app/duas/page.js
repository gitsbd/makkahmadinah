import DuaCategory from '@/components/DuaCategory'
import PageHeader from '@/components/PageHeader'
import DuaItem from '@/components/DuaItem'
import SectionWrapper from '@/components/SectionWrapper'
import InfoText from '@/components/InfoText'
import SurahItem from '@/components/SurahItem'

export default function Duas() {
  return (
    <>
      <PageHeader 
        title="উমরাহ ও হজ্জ দোয়া"
        subtitle="উমরাহ ও হজ্জের জন্য প্রয়োজনীয় সমস্ত গুরুত্বপূর্ণ দোয়া ও সূরা"
        sectionCount={8}
      />

      <SectionWrapper className="duas-section">
          <DuaCategory id="ihram" title="ইহরামের দোয়া" defaultOpen={false} number={1}>
            <DuaItem 
              title="ইহরামের নিয়ত"
              arabic="لَبَّيْكَ اللَّهُمَّ عُمْرَةً"
              transliteration="Labbaik Allahumma Umratan"
              translation="হে আল্লাহ, আমি উমরাহর জন্য উপস্থিত"
            />
            <DuaItem 
              title="তালবিয়া"
              arabic="لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ"
              transliteration="Labbaik Allahumma Labbaik, Labbaik La Sharika Laka Labbaik, Innal Hamda Wan Ni'mata Laka Wal Mulk, La Sharika Lak"
              translation="হে আল্লাহ, আমি উপস্থিত, আমি উপস্থিত। আপনার কোন শরীক নেই, আমি উপস্থিত। নিশ্চয়ই সকল প্রশংসা, নেয়ামত ও রাজত্ব আপনার, আপনার কোন শরীক নেই।"
            />
          </DuaCategory>

          <DuaCategory id="mosque-entry" title="মসজিদে প্রবেশের দোয়া" defaultOpen={false} number={2}>
            <DuaItem 
              title="মসজিদে প্রবেশ"
              arabic="اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ"
              transliteration="Allahumma Iftah Li Abwaba Rahmatik"
              translation="হে আল্লাহ, আমার জন্য আপনার রহমতের দরজা খুলে দিন"
            />
            <DuaItem 
              title="মসজিদ থেকে বের হওয়ার দোয়া"
              arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ"
              transliteration="Allahumma Inni As'aluka Min Fadlik"
              translation="হে আল্লাহ, আমি আপনার কাছে আপনার অনুগ্রহ প্রার্থনা করি"
            />
          </DuaCategory>

          <DuaCategory id="tawaf-duas" title="তাওয়াফের দোয়া" defaultOpen={false} number={3}>
            <DuaItem 
              title="তাওয়াফ শুরু"
              arabic="بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ"
              transliteration="Bismillahi Wallahu Akbar"
              translation="আল্লাহর নামে শুরু করছি এবং আল্লাহ সর্বশ্রেষ্ঠ"
            />
            <DuaItem 
              title="তাওয়াফের সময়"
              arabic="سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ"
              transliteration="Subhanallahi Walhamdulillahi Wa La Ilaha Illallahu Wallahu Akbar"
              translation="আল্লাহ পবিত্র, সকল প্রশংসা আল্লাহর, আল্লাহ ছাড়া কোন ইলাহ নেই, আল্লাহ সর্বশ্রেষ্ঠ"
            />
            <DuaItem 
              title="রুকনে ইয়ামানির কাছে"
              arabic="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
              transliteration="Rabbana Atina Fid Dunya Hasanatan Wa Fil Akhirati Hasanatan Wa Qina Azaban Nar"
              translation="হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন এবং আখিরাতে কল্যাণ দিন এবং আমাদেরকে জাহান্নামের শাস্তি থেকে রক্ষা করুন"
            />
          </DuaCategory>

          <DuaCategory id="zamzam" title="জমজম পান করার দোয়া" defaultOpen={false} number={4}>
            <DuaItem 
              title="জমজম পান"
              arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ"
              transliteration="Allahumma Inni As'aluka Ilman Nafian Wa Rizqan Wasian Wa Shifaan Min Kulli Dain"
              translation="হে আল্লাহ, আমি আপনার কাছে উপকারী জ্ঞান, প্রশস্ত রিজিক এবং সকল রোগ থেকে আরোগ্য চাই"
            />
          </DuaCategory>

          <DuaCategory id="sai-duas" title="সাঈ (সাফা-মারওয়া) এর দোয়া" defaultOpen={false} number={5}>
            <DuaItem 
              title="সাফায় দোয়া"
              arabic="إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا"
              transliteration="Innas Safa Wal Marwata Min Sha'airillah"
              translation="নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনসমূহের অন্তর্গত"
            />
            <DuaItem>
              <h3>সাঈর সময়</h3>
              <InfoText><strong>প্রধান দোয়া:</strong></InfoText>
              <p className="arabic">رَبِّ اغْفِرْ وَارْحَمْ وَتَجَاوَزْ عَمَّا تَعْلَمُ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ</p>
              <p className="transliteration">Rabbighfir Warham Wa Tajawaz Amma Ta'lamu Innaka Antal A'azzul Akram</p>
              <p className="translation"><strong>অনুবাদ:</strong> হে রব, ক্ষমা করুন, রহম করুন এবং আপনি যা জানেন তা থেকে অগ্রাহ্য করুন, নিশ্চয়ই আপনি সর্বশ্রেষ্ঠ ও সর্বাধিক সম্মানিত</p>

              <InfoText className="mt-md"><strong>বিকল্প দোয়া সমূহ:</strong></InfoText>
              
              <h4>বিকল্প ১ (সংক্ষিপ্ত):</h4>
              <p className="arabic">رَبِّ اغْفِرْ وَارْحَمْ</p>
              <p className="transliteration">Rabbighfir Warham</p>
              <p className="translation"><strong>অনুবাদ:</strong> হে রব, ক্ষমা করুন এবং রহম করুন।</p>

              <h4>বিকল্প ২:</h4>
              <p className="arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</p>
              <p className="transliteration">Rabbana Atina Fid Dunya Hasanatan Wa Fil Akhirati Hasanatan Wa Qina Azaban Nar</p>
              <p className="translation"><strong>অনুবাদ:</strong> হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন এবং আখিরাতে কল্যাণ দিন এবং আমাদেরকে জাহান্নামের শাস্তি থেকে রক্ষা করুন।</p>

              <h4>বিকল্প ৩:</h4>
              <p className="arabic">رَبِّ اغْفِرْ وَارْحَمْ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ</p>
              <p className="transliteration">Rabbighfir Warham, Innaka Antal A'azzul Akram</p>
              <p className="translation"><strong>অনুবাদ:</strong> হে রব, ক্ষমা করুন এবং রহম করুন, নিশ্চয়ই আপনি সর্বশ্রেষ্ঠ ও সর্বাধিক সম্মানিত</p>
            </DuaItem>
          </DuaCategory>

          <DuaCategory id="arafat" title="আরাফাতের দোয়া" defaultOpen={false} number={6}>
            <div className="dua-item">
              <h3>আরাফাতে বিশেষ দোয়া</h3>
              <p className="arabic">لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
              <p className="transliteration">La Ilaha Illallahu Wahdahu La Sharika Lah, Lahul Mulku Wa Lahul Hamdu Wa Huwa Ala Kulli Shai'in Qadir</p>
              <p className="translation"><strong>অনুবাদ:</strong> আল্লাহ ছাড়া কোন ইলাহ নেই, তিনি এক, তাঁর কোন শরীক নেই, রাজত্ব তাঁর, প্রশংসা তাঁর এবং তিনি সবকিছুর উপর ক্ষমতাবান</p>
            </div>
          </DuaCategory>

          <DuaCategory id="rami" title="রমি (পাথর মারার) দোয়া" defaultOpen={false} number={7}>
            <div className="dua-item">
              <h3>পাথর মারার সময়</h3>
              <p className="arabic">بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ</p>
              <p className="transliteration">Bismillahi, Allahu Akbar</p>
              <p className="translation"><strong>অনুবাদ:</strong> আল্লাহর নামে, আল্লাহ সর্বশ্রেষ্ঠ</p>
            </div>
          </DuaCategory>

          <DuaCategory id="surahs" title="সূরা" defaultOpen={false} number={8}>
            <div className="surah-item">
              <h3>সূরা আল-ফাতিহা</h3>
              <p className="arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (١) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (٢) الرَّحْمَٰنِ الرَّحِيمِ (٣) مَالِكِ يَوْمِ الدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (٦) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (٧)</p>
              <p className="translation"><strong>অনুবাদ:</strong> পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে শুরু করছি। (১) সমস্ত প্রশংসা আল্লাহর, যিনি বিশ্বজগতের রব। (২) পরম করুণাময় ও অসীম দয়ালু। (৩) বিচার দিনের মালিক। (৪) আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই কাছে সাহায্য চাই। (৫) আমাদেরকে সরল পথ দেখান। (৬) তাদের পথ, যাদের উপর আপনি অনুগ্রহ করেছেন, তাদের পথ নয় যাদের উপর আপনার গজব নেমেছে এবং যারা পথভ্রষ্ট হয়েছে। (৭)</p>
            </div>
            <div className="surah-item">
              <h3>সূরা আল-ইখলাস</h3>
              <p className="arabic">قُلْ هُوَ اللَّهُ أَحَدٌ (١) اللَّهُ الصَّمَدُ (٢) لَمْ يَلِدْ وَلَمْ يُولَدْ (٣) وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ (٤)</p>
              <p className="translation"><strong>অনুবাদ:</strong> বলুন, তিনি আল্লাহ, এক। (১) আল্লাহ অমুখাপেক্ষী। (২) তিনি কাউকে জন্ম দেননি এবং কেউ তাকে জন্ম দেয়নি। (৩) এবং তার সমতুল্য কেউ নেই। (৪)</p>
            </div>
            <div className="surah-item">
              <h3>সূরা আল-কাফিরুন</h3>
              <p className="arabic">قُلْ يَا أَيُّهَا الْكَافِرُونَ (١) لَا أَعْبُدُ مَا تَعْبُدُونَ (٢) وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ (٣) وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ (٤) وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ (٥) لَكُمْ دِينُكُمْ وَلِيَ دِينِ (٦)</p>
              <p className="translation"><strong>অনুবাদ:</strong> বলুন, হে কাফিরগণ! (১) আমি তোমাদের ইবাদত করি না যা তোমরা ইবাদত কর। (২) এবং তোমরাও ইবাদতকারী নও যা আমি ইবাদত করি। (৩) এবং আমি ইবাদতকারী নই যা তোমরা ইবাদত করেছ। (৪) এবং তোমরাও ইবাদতকারী নও যা আমি ইবাদত করি। (৫) তোমাদের জন্য তোমাদের ধর্ম এবং আমার জন্য আমার ধর্ম। (৬)</p>
            </div>
          </DuaCategory>
      </SectionWrapper>
    </>
  )
}
