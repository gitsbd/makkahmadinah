import PageHeader from '@/components/PageHeader'
import SectionWrapper from '@/components/SectionWrapper'
import InfoBox from '@/components/InfoBox'
import ExpandableSection from '@/components/ExpandableSection'
import DuaItem from '@/components/DuaItem'
import ImportantNote from '@/components/ImportantNote'
import AudioPlayer from '@/components/AudioPlayer'

export default function Akhlaq() {
  return (
    <>
      <PageHeader 
        title="আখলাক ও আদব (Ethics and Etiquette)"
        subtitle="ইসলামী নৈতিকতা, শিষ্টাচার ও উত্তম চরিত্র"
        sectionCount={3}
      />

      <SectionWrapper className="duas-section">
        <ExpandableSection 
          id="gheebat" 
          title="১. গীবত করা (Backbiting/Gossip)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={1}
        >
          <DuaItem>
            <InfoBox variant="orange">
              <h4>⚠️ গীবত কি?</h4>
              <p>গীবত হল কারো অনুপস্থিতিতে তার এমন দোষ বা ত্রুটি আলোচনা করা যা সে শুনলে কষ্ট পাবে।</p>
            </InfoBox>

            <h3>গীবতের সংজ্ঞা</h3>
            <p className="info-text">রাসূলুল্লাহ (সা.) বলেছেন:</p>
            <p className="arabic">
              <span className="arabic-text">الْغِيبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ</span>
              <AudioPlayer arabicText="الْغِيبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ" />
            </p>
            <p className="transliteration">Al-ghibatu dhikruka akhaka bima yakruh</p>
            <p className="translation"><strong>অনুবাদ:</strong> "গীবত হল তোমার ভাইয়ের এমন বিষয় আলোচনা করা যা সে অপছন্দ করে।" (সহীহ মুসলিম)</p>

            <h3>গীবতের ভয়াবহতা</h3>
            <h4>কুরআনের আয়াতসমূহ:</h4>
            
            <h4>সূরা আল-হুজুরাত (সূরা ৪৯), আয়াত ১২ - সবচেয়ে স্পষ্ট আয়াত:</h4>
            <p className="arabic">
              <span className="arabic-text">يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ ۖ وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا ۚ أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ ۚ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ تَوَّابٌ رَّحِيمٌ</span>
              <AudioPlayer arabicText="يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ ۖ وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا ۚ أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ ۚ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ تَوَّابٌ رَّحِيمٌ" />
            </p>
            <p className="transliteration">Ya ayyuhalladhina amanu ijtannibu kathiran minaz-zanni, inna ba'daz-zanni ithmun, wa la tajassasu wa la yaghtab ba'dukum ba'dan, ayuhibbu ahadukum an ya'kula lahma akhihi maytan fakarihtumuh, wattaqullah, innallaha tawwabur rahim</p>
            <p className="translation"><strong>অনুবাদ:</strong> "হে মুমিনগণ! তোমরা অধিকাংশ ধারণা থেকে দূরে থাক। নিশ্চয়ই অনেক ধারণা পাপ। আর তোমরা গোপনীয় বিষয় অনুসন্ধান করো না এবং একে অপরের গীবত করো না। তোমাদের কেউ কি তার মৃত ভাইয়ের গোশত খেতে পছন্দ করবে? বস্তুত তোমরা তো এটা ঘৃণা কর। আর আল্লাহকে ভয় কর। নিশ্চয়ই আল্লাহ তওবা কবুলকারী, পরম দয়ালু।" (সূরা আল-হুজুরাত, আয়াত ১২)</p>
            <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি গীবত নিষিদ্ধ হওয়ার সবচেয়ে বিখ্যাত ও স্পষ্ট আয়াত। এখানে আল্লাহ গীবতকে মৃত ভাইয়ের গোশত খাওয়ার সাথে তুলনা করেছেন, যা অত্যন্ত ভয়াবহ ও ঘৃণিত কাজ।</p>

            <h4>সূরা আল-হুমাযাহ (সূরা ১০৪) - পরচর্চা ও কটাক্ষ:</h4>
            <p className="arabic">
              <span className="arabic-text">وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ</span>
              <AudioPlayer arabicText="وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ" />
            </p>
            <p className="transliteration">Wailun li-kulli humazatin lumazah</p>
            <p className="translation"><strong>অনুবাদ:</strong> "প্রত্যেক পরনিন্দাকারী ও কটাক্ষকারীর জন্য ধ্বংস।" (সূরা আল-হুমাযাহ, আয়াত ১)</p>
            <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই সূরায় "হুমাযাহ" (পরচর্চা, কটাক্ষ, বদনাম) এবং "লুমাযাহ" (পরনিন্দা) এর নিন্দা করা হয়েছে, যা গীবত/নিন্দার অন্তর্ভুক্ত।</p>

            <h4>সূরা আল-কলম (সূরা ৬৮), আয়াত ১০-১২ - অপবাদ ও চোগলখোরি:</h4>
            <p className="arabic">
              <span className="arabic-text">وَلَا تُطِعْ كُلَّ حَلَّافٍ مَّهِينٍ هُمَّازٍ مَّشَّاءٍ بِنَمِيمٍ</span>
              <AudioPlayer arabicText="وَلَا تُطِعْ كُلَّ حَلَّافٍ مَّهِينٍ هُمَّازٍ مَّشَّاءٍ بِنَمِيمٍ" />
            </p>
            <p className="transliteration">Wa la tuti' kulla hallafin mahin, hummazin mashsha'in binamim</p>
            <p className="translation"><strong>অনুবাদ:</strong> "আর তুমি প্রত্যেক শপথকারী, হীন ব্যক্তির আনুগত্য করো না, যারা পরনিন্দা করে এবং চোগলখোরি করে বেড়ায়।" (সূরা আল-কলম, আয়াত ১০-১১)</p>
            <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতে "হাম্মায" (বারবার অপবাদ/পরনিন্দাকারী) এবং "নামীম" (চোগলখোরি) ধরনের আচরণ থেকে দূরে থাকতে বলা হয়েছে, যা গীবতের সাথে সম্পর্কিত।</p>

            <h4>হাদীস:</h4>
            <p className="arabic">
              <span className="arabic-text">إِنَّ دِمَاءَكُمْ وَأَمْوَالَكُمْ وَأَعْرَاضَكُمْ عَلَيْكُمْ حَرَامٌ</span>
              <AudioPlayer arabicText="إِنَّ دِمَاءَكُمْ وَأَمْوَالَكُمْ وَأَعْرَاضَكُمْ عَلَيْكُمْ حَرَامٌ" />
            </p>
            <p className="transliteration">Inna dima'akum wa amwalakum wa a'radhakum alaikum haram</p>
            <p className="translation"><strong>অনুবাদ:</strong> "নিশ্চয়ই তোমাদের রক্ত, সম্পদ এবং সম্মান তোমাদের উপর হারাম।" (সহীহ বুখারী, সহীহ মুসলিম)</p>

            <ImportantNote variant="red" title="গীবতের পরিণতি:">
              <ul className="list-spaced">
                <li>গীবত কবীরা গুনাহ (মহাপাপ)</li>
                <li>গীবতকারীর আমলনামা থেকে নেকী গীবতকৃত ব্যক্তির আমলনামায় চলে যায়</li>
                <li>গীবতকারী কিয়ামতের দিন গীবতকৃত ব্যক্তির নেকী নিয়ে যাবে</li>
                <li>গীবত মানুষের মধ্যে শত্রুতা সৃষ্টি করে</li>
                <li>গীবত সমাজে বিশৃঙ্খলা সৃষ্টি করে</li>
              </ul>
            </ImportantNote>

            <h3>গীবত থেকে বেঁচে থাকার উপায়</h3>
            <ul className="list-spaced">
              <li><strong>আল্লাহর ভয়:</strong> সর্বদা আল্লাহর ভয় মনে রাখুন</li>
              <li><strong>নিজের দোষ চিন্তা:</strong> অন্যের দোষ নিয়ে আলোচনা করার আগে নিজের দোষ চিন্তা করুন</li>
              <li><strong>নীরবতা:</strong> অন্যের দোষ আলোচনা করার পরিবর্তে নীরব থাকুন</li>
              <li><strong>সৎকাজে ব্যস্ত থাকা:</strong> গীবত করার সময় সৎকাজে ব্যস্ত থাকুন</li>
              <li><strong>তওবা:</strong> যদি গীবত হয়ে যায়, তাহলে তওবা করুন</li>
              <li><strong>গীবতকৃত ব্যক্তির জন্য ক্ষমা প্রার্থনা:</strong> গীবতকৃত ব্যক্তির জন্য ক্ষমা প্রার্থনা করুন</li>
            </ul>

            <h3>গীবতের প্রতিকার</h3>
            <h4>তওবা ও ক্ষমা প্রার্থনা:</h4>
            <p className="arabic">
              <span className="arabic-text">اللَّهُمَّ اغْفِرْ لِي وَلِفُلَانٍ</span>
              <AudioPlayer arabicText="اللَّهُمَّ اغْفِرْ لِي وَلِفُلَانٍ" />
            </p>
            <p className="transliteration">Allahumma ighfir li wa li fulan</p>
            <p className="translation"><strong>অনুবাদ:</strong> "হে আল্লাহ, আমাকে এবং অমুককে ক্ষমা করুন।"</p>

            <InfoBox variant="green" className="mt-md">
              <h4>💡 পরামর্শ</h4>
              <p>গীবত করা থেকে বিরত থাকুন। যদি কখনো গীবত হয়ে যায়, তাহলে দ্রুত তওবা করুন এবং গীবতকৃত ব্যক্তির জন্য ক্ষমা প্রার্থনা করুন।</p>
            </InfoBox>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="arrogance" 
          title="২. অহংকার করা (Arrogance)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={2}
        >
          <DuaItem>
            <InfoBox variant="orange">
              <h4>⚠️ অহংকার কি?</h4>
              <p>অহংকার হল নিজেকে অন্যের চেয়ে শ্রেষ্ঠ মনে করা এবং আল্লাহর নেয়ামতকে নিজের যোগ্যতা মনে করা।</p>
            </InfoBox>

            <h3>অহংকারের সংজ্ঞা</h3>
            <p className="arabic">
              <span className="arabic-text">الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ</span>
              <AudioPlayer arabicText="الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ" />
            </p>
            <p className="transliteration">Al-kibru batrul haqqi wa ghamtun nas</p>
            <p className="translation"><strong>অনুবাদ:</strong> "অহংকার হল সত্যকে প্রত্যাখ্যান করা এবং মানুষকে তুচ্ছ তাচ্ছিল্য করা।" (সহীহ মুসলিম)</p>

            <h3>অহংকারের ভয়াবহতা</h3>
            <h4>কুরআনের আয়াতসমূহ:</h4>
            
            <h4>সূরা লুকমান (সূরা ৩১), আয়াত ১৮-১৯ - সবচেয়ে সুন্দর আয়াত:</h4>
            <p className="arabic">
              <span className="arabic-text">وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ</span>
              <AudioPlayer arabicText="وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ" />
            </p>
            <p className="transliteration">Wa la tus'a'ir khaddaka lin-nasi wa la tamshi fil-ardi marahan, innallaha la yuhibbu kulla mukhtalin fakhur</p>
            <p className="translation"><strong>অনুবাদ:</strong> "মানুষের দিকে তোমার গাল ফুলিয়ে রেখো না এবং পৃথিবীতে গর্বভরে চলাফেরা করো না। নিশ্চয়ই আল্লাহ কোন অহংকারী, দাম্ভিককে পছন্দ করেন না।" (সূরা লুকমান, আয়াত ১৮)</p>
            <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি অহংকার করে মানুষের সাথে মুখ ফিরিয়ে না নেওয়া এবং দম্ভভরে না চলার বিষয়ে স্পষ্ট নির্দেশ দেয়। এটি বিনয় ও আদবের জন্য খুবই গুরুত্বপূর্ণ আয়াত।</p>

            <p className="arabic">
              <span className="arabic-text">وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِن صَوْتِكَ ۚ إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ</span>
              <AudioPlayer arabicText="وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِن صَوْتِكَ ۚ إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ" />
            </p>
            <p className="transliteration">Waqsid fi mashyika waghdud min sawtika, inna ankara al-aswati lasawtu al-hamir</p>
            <p className="translation"><strong>অনুবাদ:</strong> "তোমার চলাফেরায় মধ্যপন্থা অবলম্বন করো এবং তোমার কণ্ঠস্বর নিচু করো। নিশ্চয়ই সবচেয়ে অপ্রীতিকর শব্দ হল গাধার শব্দ।" (সূরা লুকমান, আয়াত ১৯)</p>
            <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি বিনয়ী আচরণের নির্দেশ দেয় - মধ্যপন্থায় চলা এবং নরম স্বরে কথা বলা।</p>

            <h4>সূরা আল-আ'রাফ (সূরা ৭), আয়াত ১১-১৩ - ইবলিসের অহংকারের ঘটনা:</h4>
            <p className="arabic">
              <span className="arabic-text">وَلَقَدْ خَلَقْنَاكُمْ ثُمَّ صَوَّرْنَاكُمْ ثُمَّ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ لَمْ يَكُن مِّنَ السَّاجِدِينَ</span>
              <AudioPlayer arabicText="وَلَقَدْ خَلَقْنَاكُمْ ثُمَّ صَوَّرْنَاكُمْ ثُمَّ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ لَمْ يَكُن مِّنَ السَّاجِدِينَ" />
            </p>
            <p className="transliteration">Wa laqad khalaqnakum thumma sawwarnakum thumma qulna lil-malaikati usjudu li-Adama fa-sajadu illa Iblisa lam yakun minas-sajidin</p>
            <p className="translation"><strong>অনুবাদ:</strong> "আর নিশ্চয়ই আমি তোমাদের সৃষ্টি করেছি, তারপর তোমাদের আকৃতি দিয়েছি, তারপর ফেরেশতাদের বলেছি: 'আদমকে সিজদা করো', তখন তারা সিজদা করল, কিন্তু ইবলিস সিজদাকারীদের অন্তর্ভুক্ত ছিল না।" (সূরা আল-আ'রাফ, আয়াত ১১)</p>

            <p className="arabic">
              <span className="arabic-text">قَالَ مَا مَنَعَكَ أَلَّا تَسْجُدَ إِذْ أَمَرْتُكَ ۖ قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ</span>
              <AudioPlayer arabicText="قَالَ مَا مَنَعَكَ أَلَّا تَسْجُدَ إِذْ أَمَرْتُكَ ۖ قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ" />
            </p>
            <p className="transliteration">Qala ma mana'aka alla tasjuda iz amartuka, qala ana khayrun minhu khalaqtani min narin wa khalaqtahu min tin</p>
            <p className="translation"><strong>অনুবাদ:</strong> "তিনি বললেন: 'আমি তোমাকে আদেশ করলে তুমি সিজদা করতে বাধা দিলে কেন?' সে বলল: 'আমি তার চেয়ে উত্তম, আপনি আমাকে আগুন থেকে সৃষ্টি করেছেন এবং তাকে কাদামাটি থেকে সৃষ্টি করেছেন।'" (সূরা আল-আ'রাফ, আয়াত ১২)</p>

            <p className="arabic">
              <span className="arabic-text">قَالَ فَاهْبِطْ مِنْهَا فَمَا يَكُونُ لَكَ أَن تَتَكَبَّرَ فِيهَا فَاخْرُجْ إِنَّكَ مِنَ الصَّاغِرِينَ</span>
              <AudioPlayer arabicText="قَالَ فَاهْبِطْ مِنْهَا فَمَا يَكُونُ لَكَ أَن تَتَكَبَّرَ فِيهَا فَاخْرُجْ إِنَّكَ مِنَ الصَّاغِرِينَ" />
            </p>
            <p className="transliteration">Qala fahbit minha fama yakunu laka an tatakabbara fiha fakhruj innaka minas-saghirin</p>
            <p className="translation"><strong>অনুবাদ:</strong> "তিনি বললেন: 'তাহলে তুমি এখান থেকে নেমে যাও, এখানে অহংকার করা তোমার জন্য শোভনীয় নয়। সুতরাং বের হয়ে যাও, নিশ্চয়ই তুমি অপদস্থদের অন্তর্ভুক্ত।'" (সূরা আল-আ'রাফ, আয়াত ১৩)</p>
            <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতসমূহে ইবলিসের অহংকারের ঘটনা বর্ণিত হয়েছে। ইবলিস "আমি তার চেয়ে উত্তম" বলে অহংকার করেছিল, যার ফলে সে আল্লাহর রহমত থেকে বঞ্চিত হয়েছিল। এটি অহংকারের ভয়াবহতা বোঝাতে একটি দারুণ রেফারেন্স।</p>

            <h4>সূরা আল-ইসরা (সূরা ১৭), আয়াত ৩৭ - দম্ভভরে চলতে নিষেধ:</h4>
            <p className="arabic">
              <span className="arabic-text">وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّكَ لَن تَخْرِقَ الْأَرْضَ وَلَن تَبْلُغَ الْجِبَالَ طُولًا</span>
              <AudioPlayer arabicText="وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّكَ لَن تَخْرِقَ الْأَرْضَ وَلَن تَبْلُغَ الْجِبَالَ طُولًا" />
            </p>
            <p className="transliteration">Wa la tamshi fil-ardi marahan, innaka lan takhriqa al-arda wa lan tablugha al-jibala tulan</p>
            <p className="translation"><strong>অনুবাদ:</strong> "আর পৃথিবীতে দম্ভভরে চলাফেরা করো না। নিশ্চয়ই তুমি কখনো পৃথিবীকে বিদীর্ণ করতে পারবে না এবং কখনো পাহাড়ের উচ্চতায় পৌঁছতে পারবে না।" (সূরা আল-ইসরা, আয়াত ৩৭)</p>
            <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি দম্ভভরে পৃথিবীতে চলতে নিষেধ করে। এটি অহংকারের একটি বিখ্যাত ও গুরুত্বপূর্ণ আয়াত।</p>

            <h4>হাদীস:</h4>
            <p className="arabic">
              <span className="arabic-text">لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ</span>
              <AudioPlayer arabicText="لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ" />
            </p>
            <p className="transliteration">La yadkhulul jannata man kana fi qalbihi mithqalu dharratin min kib</p>
            <p className="translation"><strong>অনুবাদ:</strong> "যার অন্তরে অণু পরিমাণ অহংকার আছে, সে জান্নাতে প্রবেশ করবে না।" (সহীহ মুসলিম)</p>

            <ImportantNote variant="red" title="অহংকারের পরিণতি:">
              <ul className="list-spaced">
                <li>অহংকার জান্নাত থেকে বঞ্চিত করে</li>
                <li>অহংকার আল্লাহর কাছে ঘৃণিত</li>
                <li>অহংকার মানুষের মধ্যে শত্রুতা সৃষ্টি করে</li>
                <li>অহংকার ব্যক্তির আত্মিক উন্নতি বাধাগ্রস্ত করে</li>
                <li>অহংকার ব্যক্তিকে আল্লাহ থেকে দূরে সরিয়ে দেয়</li>
              </ul>
            </ImportantNote>

            <h3>অহংকার পরিহার</h3>
            <h4>কিভাবে অহংকার পরিহার করবেন:</h4>
            <ul className="list-spaced">
              <li><strong>আল্লাহর নেয়ামত স্মরণ:</strong> মনে রাখুন, সবকিছু আল্লাহর দান</li>
              <li><strong>নিজের দুর্বলতা চিন্তা:</strong> নিজের দুর্বলতা ও ত্রুটি চিন্তা করুন</li>
              <li><strong>অন্যের প্রতি সম্মান:</strong> সবাইকে সম্মান করুন</li>
              <li><strong>নম্রতা:</strong> নম্র ও বিনয়ী হন</li>
              <li><strong>সৎকাজে ব্যস্ত থাকা:</strong> অহংকার করার পরিবর্তে সৎকাজে ব্যস্ত থাকুন</li>
              <li><strong>তওবা:</strong> যদি অহংকার হয়ে যায়, তাহলে তওবা করুন</li>
            </ul>

            <h3>অহংকারের ক্ষতি</h3>
            <ul className="list-spaced">
              <li><strong>আত্মিক ক্ষতি:</strong> অহংকার আত্মিক উন্নতি বাধাগ্রস্ত করে</li>
              <li><strong>সমাজিক ক্ষতি:</strong> অহংকার মানুষের মধ্যে শত্রুতা সৃষ্টি করে</li>
              <li><strong>আল্লাহর কাছে ঘৃণিত:</strong> অহংকার আল্লাহর কাছে ঘৃণিত</li>
              <li><strong>জান্নাত থেকে বঞ্চিত:</strong> অহংকার জান্নাত থেকে বঞ্চিত করে</li>
            </ul>

            <h3>বিনয়ের ফজিলত</h3>
            <h4>কুরআনের আয়াত:</h4>
            <p className="arabic">
              <span className="arabic-text">وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا</span>
              <AudioPlayer arabicText="وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا" />
            </p>
            <p className="transliteration">Wa ibadur Rahman alladhina yamshuna alal-ardi hawnan</p>
            <p className="translation"><strong>অনুবাদ:</strong> "রহমানের বান্দা তারাই যারা পৃথিবীতে নম্রভাবে চলাফেরা করে।" (সূরা আল-ফুরকান, আয়াত ৬৩)</p>

            <h4>হাদীস:</h4>
            <p className="arabic">
              <span className="arabic-text">مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ</span>
              <AudioPlayer arabicText="مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ" />
            </p>
            <p className="transliteration">Ma naqasat sadaqatun min malin, wa ma zadal-lahu abdan bi-afwin illa izzan, wa ma tawada'a ahadun lillahi illa rafa'ahul-lahu</p>
            <p className="translation"><strong>অনুবাদ:</strong> "সদকা সম্পদ কমায় না, ক্ষমা করলে আল্লাহ বান্দার সম্মান বাড়িয়ে দেন, এবং আল্লাহর জন্য যে বিনয়ী হয়, আল্লাহ তাকে সম্মানিত করেন।" (সহীহ মুসলিম)</p>

            <InfoBox variant="green" className="mt-md">
              <h4>💡 পরামর্শ</h4>
              <p>অহংকার পরিহার করুন এবং বিনয়ী হন। বিনয় আল্লাহর কাছে প্রিয় এবং এটি জান্নাতের পথে নিয়ে যায়।</p>
            </InfoBox>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="three-parts" 
          title="৩. তিনটি অঙ্গের হেফাজত (Protection of Three Body Parts)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={3}
        >
          <DuaItem>
            <InfoBox variant="blue">
              <h4>📿 তিনটি অঙ্গের হেফাজত</h4>
              <p>রাসূলুল্লাহ (সা.) বলেছেন: "যে ব্যক্তি তিনটি জিনিসের হেফাজত করবে, আমি তার জন্য জান্নাতের জিম্মাদার হব।"</p>
            </InfoBox>

            <h3>হাদীস:</h3>
            <p className="arabic">
              <span className="arabic-text">مَنْ يَضْمَنْ لِي مَا بَيْنَ لَحْيَيْهِ وَمَا بَيْنَ رِجْلَيْهِ أَضْمَنْ لَهُ الْجَنَّةَ</span>
              <AudioPlayer arabicText="مَنْ يَضْمَنْ لِي مَا بَيْنَ لَحْيَيْهِ وَمَا بَيْنَ رِجْلَيْهِ أَضْمَنْ لَهُ الْجَنَّةَ" />
            </p>
            <p className="transliteration">Man yadman li ma baina lahayihi wa ma baina rijlayhi adman lahu al-jannah</p>
            <p className="translation"><strong>অনুবাদ:</strong> "যে ব্যক্তি আমার জন্য তার দুই চোয়ালের মধ্যবর্তী (জিহ্বা) এবং দুই পায়ের মধ্যবর্তী (লজ্জাস্থান) জিনিসের হেফাজত করবে, আমি তার জন্য জান্নাতের জিম্মাদার হব।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
            <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> "তিনটি অঙ্গের হেফাজত" হল একটি হাদীস-কেন্দ্রিক ধারণা। যদিও এটি কুরআনের কোনো নির্দিষ্ট সূরার নাম নয়, তবে কুরআনে এই বিষয়গুলোর মূলনীতি স্পষ্টভাবে বিভিন্ন সূরা ও আয়াতে বর্ণিত হয়েছে।</p>

            <ExpandableSection 
              id="tongue-protection" 
              title="৩.১. জিহ্বার হেফাজত (Protection of the Tongue)" 
              defaultOpen={false}
              className="day-section-expandable"
              number={3.1}
            >
              <div className="dua-item">
                <h3>জিহ্বার হেফাজত</h3>
                <p className="info-text">জিহ্বা হল মানুষের সবচেয়ে বিপজ্জনক অঙ্গ। এর মাধ্যমে মানুষ জান্নাতেও যেতে পারে এবং জাহান্নামেও যেতে পারে।</p>

                <h4>হাদীস:</h4>
                <p className="arabic">
                  <span className="arabic-text">إِنَّ الْعَبْدَ لَيَتَكَلَّمُ بِالْكَلِمَةِ مَا يَتَبَيَّنُ فِيهَا يَزِلُّ بِهَا فِي النَّارِ أَبْعَدَ مِمَّا بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ</span>
                  <AudioPlayer arabicText="إِنَّ الْعَبْدَ لَيَتَكَلَّمُ بِالْكَلِمَةِ مَا يَتَبَيَّنُ فِيهَا يَزِلُّ بِهَا فِي النَّارِ أَبْعَدَ مِمَّا بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ" />
                </p>
                <p className="transliteration">Innal abda layatakallamu bil-kalimati ma yatabayyanu fiha yazillu biha fin-nari ab'ada mimma baina al-mashriqi wal-maghrib</p>
                <p className="translation"><strong>অনুবাদ:</strong> "নিশ্চয়ই বান্দা এমন কথা বলে যার গুরুত্ব সে বুঝে না, এর ফলে সে জাহান্নামে পড়ে যায়, যা পূর্ব ও পশ্চিমের মধ্যকার দূরত্বের চেয়েও বেশি।" (সহীহ বুখারী, সহীহ মুসলিম)</p>

                <h4>জিহ্বা থেকে বেঁচে থাকার উপায়:</h4>
                <ul className="list-spaced">
                  <li><strong>সত্য কথা বলা:</strong> সর্বদা সত্য কথা বলুন</li>
                  <li><strong>ভালো কথা বলা:</strong> ভালো ও কল্যাণকর কথা বলুন</li>
                  <li><strong>গীবত পরিহার:</strong> গীবত করা থেকে বিরত থাকুন</li>
                  <li><strong>মিথ্যা পরিহার:</strong> মিথ্যা বলা থেকে বিরত থাকুন</li>
                  <li><strong>অপবাদ পরিহার:</strong> অপবাদ দেওয়া থেকে বিরত থাকুন</li>
                  <li><strong>অপমানকর কথা পরিহার:</strong> অপমানকর কথা বলা থেকে বিরত থাকুন</li>
                  <li><strong>নীরবতা:</strong> প্রয়োজন না হলে নীরব থাকুন</li>
                  <li><strong>যিকির:</strong> জিহ্বা দিয়ে আল্লাহর যিকির করুন</li>
                </ul>

                <h4>কুরআনের আয়াতসমূহ:</h4>
                
                <h4>সূরা আল-হুজুরাত (সূরা ৪৯), আয়াত ১২ - গীবত নিষিদ্ধ:</h4>
                <p className="arabic">
                  <span className="arabic-text">يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ ۖ وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا</span>
                  <AudioPlayer arabicText="يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ ۖ وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا" />
                </p>
                <p className="transliteration">Ya ayyuhalladhina amanu ijtannibu kathiran minaz-zanni, inna ba'daz-zanni ithmun, wa la tajassasu wa la yaghtab ba'dukum ba'dan</p>
                <p className="translation"><strong>অনুবাদ:</strong> "হে মুমিনগণ! তোমরা অধিকাংশ ধারণা থেকে দূরে থাক। নিশ্চয়ই অনেক ধারণা পাপ। আর তোমরা গোপনীয় বিষয় অনুসন্ধান করো না এবং একে অপরের গীবত করো না।" (সূরা আল-হুজুরাত, আয়াত ১২)</p>
                <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি জিহ্বার হেফাজতের জন্য অত্যন্ত গুরুত্বপূর্ণ। গীবত করা থেকে বিরত থাকা জিহ্বার হেফাজতের একটি প্রধান অংশ।</p>

                <h4>সূরা কাফ (সূরা ৫০), আয়াত ১৮ - প্রতিটি কথার হিসাব:</h4>
                <p className="arabic">
                  <span className="arabic-text">مَا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ</span>
                  <AudioPlayer arabicText="مَا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ" />
                </p>
                <p className="transliteration">Ma yalfizu min qawlin illa ladayhi raqibun atid</p>
                <p className="translation"><strong>অনুবাদ:</strong> "মানুষ যে কথা বলে, তার কাছে একজন প্রহরী (ফেরেশতা) প্রস্তুত থাকে।" (সূরা কাফ, আয়াত ১৮)</p>
                <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি আমাদের স্মরণ করিয়ে দেয় যে আমাদের প্রতিটি কথা লিপিবদ্ধ হচ্ছে। এটি জিহ্বার হেফাজতের জন্য একটি শক্তিশালী অনুপ্রেরণা।</p>

                <h4>সূরা আল-হুমাযাহ (সূরা ১০৪) - পরনিন্দা ও কটাক্ষকারী সম্পর্কে সতর্কতা:</h4>
                <p className="arabic">
                  <span className="arabic-text">وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ</span>
                  <AudioPlayer arabicText="وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ" />
                </p>
                <p className="transliteration">Wailun li-kulli humazatin lumazah</p>
                <p className="translation"><strong>অনুবাদ:</strong> "প্রত্যেক পরনিন্দাকারী ও কটাক্ষকারীর জন্য ধ্বংস।" (সূরা আল-হুমাযাহ, আয়াত ১)</p>
                <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই সূরায় পরনিন্দা ও কটাক্ষের নিন্দা করা হয়েছে, যা জিহ্বার হেফাজতের সাথে সরাসরি সম্পর্কিত।</p>

                <h4>সূরা আল-বাকারা (সূরা ২), আয়াত ৮৩ - ভালো কথা বলা:</h4>
                <p className="arabic">
                  <span className="arabic-text">وَقُولُوا لِلنَّاسِ حُسْنًا</span>
                  <AudioPlayer arabicText="وَقُولُوا لِلنَّاسِ حُسْنًا" />
                </p>
                <p className="transliteration">Wa qulu lin-nasi husnan</p>
                <p className="translation"><strong>অনুবাদ:</strong> "মানুষের সাথে ভালো কথা বল।" (সূরা আল-বাকারা, আয়াত ৮৩)</p>

                <ImportantNote variant="green" title="জিহ্বার সঠিক ব্যবহার:">
                  <ul>
                    <li>সত্য কথা বলা</li>
                    <li>ভালো কথা বলা</li>
                    <li>আল্লাহর যিকির করা</li>
                    <li>কুরআন তিলাওয়াত করা</li>
                    <li>দোয়া করা</li>
                    <li>সালাম দেওয়া</li>
                    <li>সৎ পরামর্শ দেওয়া</li>
                  </ul>
                </ImportantNote>
              </div>
            </ExpandableSection>

            <ExpandableSection 
              id="mouth-protection" 
              title="৩.২. ঠোঁট/মুখের হেফাজত (Protection of Lips/Mouth - Speech Etiquette)" 
              defaultOpen={false}
              className="day-section-expandable"
              number={3.2}
            >
              <div className="dua-item">
                <h3>ঠোঁট/মুখের হেফাজত (কথাবার্তার শিষ্টাচার)</h3>
                <p className="info-text">মুখ ও ঠোঁটের মাধ্যমে আমরা কথা বলি। তাই এর হেফাজত করা অত্যন্ত গুরুত্বপূর্ণ।</p>

                <h4>কথাবার্তার শিষ্টাচার:</h4>
                <ul className="list-spaced">
                  <li><strong>নরম কথা বলা:</strong> নরম ও কোমল কথা বলুন</li>
                  <li><strong>সম্মানজনক কথা:</strong> সবাইকে সম্মানজনকভাবে কথা বলুন</li>
                  <li><strong>মিষ্টি কথা:</strong> মিষ্টি ও প্রিয় কথা বলুন</li>
                  <li><strong>স্পষ্ট কথা:</strong> স্পষ্ট ও বোধগম্য কথা বলুন</li>
                  <li><strong>অপমানকর কথা পরিহার:</strong> অপমানকর কথা বলা থেকে বিরত থাকুন</li>
                  <li><strong>অশ্লীল কথা পরিহার:</strong> অশ্লীল কথা বলা থেকে বিরত থাকুন</li>
                  <li><strong>গালি দেওয়া পরিহার:</strong> গালি দেওয়া থেকে বিরত থাকুন</li>
                </ul>

                <h4>কুরআনের আয়াত:</h4>
                <p className="arabic">
                  <span className="arabic-text">وَقُل لِّعِبَادِي يَقُولُوا الَّتِي هِيَ أَحْسَنُ</span>
                  <AudioPlayer arabicText="وَقُل لِّعِبَادِي يَقُولُوا الَّتِي هِيَ أَحْسَنُ" />
                </p>
                <p className="transliteration">Wa qul li-ibadi yaqulu allati hiya ahsan</p>
                <p className="translation"><strong>অনুবাদ:</strong> "আমার বান্দাদের বল, তারা যেন সবচেয়ে ভালো কথা বলে।" (সূরা আল-ইসরা, আয়াত ৫৩)</p>

                <h4>হাদীস:</h4>
                <p className="arabic">
                  <span className="arabic-text">وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ</span>
                  <AudioPlayer arabicText="وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ" />
                </p>
                <p className="transliteration">Wal-kalimatut tayyibatu sadaqah</p>
                <p className="translation"><strong>অনুবাদ:</strong> "ভালো কথা হল সদকা।" (সহীহ বুখারী, সহীহ মুসলিম)</p>

                <h4>কথাবার্তার আদব:</h4>
                <ul className="list-spaced">
                  <li><strong>বিসমিল্লাহ:</strong> কথা বলার আগে বিসমিল্লাহ বলুন</li>
                  <li><strong>সালাম:</strong> কথা বলার আগে সালাম দিন</li>
                  <li><strong>নরম স্বর:</strong> নরম স্বরে কথা বলুন</li>
                  <li><strong>শ্রবণ:</strong> অন্যের কথা শুনুন</li>
                  <li><strong>সম্মান:</strong> সবাইকে সম্মান করুন</li>
                  <li><strong>সত্য:</strong> সর্বদা সত্য কথা বলুন</li>
                </ul>

                <InfoBox variant="blue" className="mt-md">
                  <h4>💡 পরামর্শ</h4>
                  <p>মুখ ও ঠোঁটের মাধ্যমে ভালো কথা বলুন। ভালো কথা সদকা এবং এটি জান্নাতের পথে নিয়ে যায়।</p>
                </InfoBox>
              </div>
            </ExpandableSection>

            <ExpandableSection 
              id="private-parts-protection" 
              title="৩.৩. লজ্জাস্থানের হেফাজত (Protection of Private Parts)" 
              defaultOpen={false}
              className="day-section-expandable"
              number={3.3}
            >
              <div className="dua-item">
                <h3>লজ্জাস্থানের হেফাজত</h3>
                <p className="info-text">লজ্জাস্থানের হেফাজত করা ইসলামের একটি গুরুত্বপূর্ণ বিধান। কুরআনে এই বিষয়ে স্পষ্ট নির্দেশনা রয়েছে।</p>

                <h4>কুরআনের আয়াতসমূহ:</h4>
                
                <h4>সূরা আল-মু'মিনূন (সূরা ২৩), আয়াত ৫-৭ - মুমিনদের বৈশিষ্ট্য:</h4>
                <p className="arabic">
                  <span className="arabic-text">وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ</span>
                  <AudioPlayer arabicText="وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ" />
                </p>
                <p className="transliteration">Walladhina hum li-furujihim hafizuna illa ala azwajihim aw ma malakat aymanuhum fa-innahum ghayru malumin</p>
                <p className="translation"><strong>অনুবাদ:</strong> "এবং যারা তাদের লজ্জাস্থানের হেফাজত করে, তাদের স্ত্রী এবং তাদের অধিকারভুক্ত দাসীদের ছাড়া, নিশ্চয়ই তারা নিন্দিত হবে না।" (সূরা আল-মু'মিনূন, আয়াত ৫-৭)</p>
                <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি মুমিনদের একটি প্রধান বৈশিষ্ট্য হিসেবে লজ্জাস্থানের হেফাজতের কথা উল্লেখ করেছে।</p>

                <h4>সূরা আল-মা'আরিজ (সূরা ৭০), আয়াত ২৯-৩১ - একই বিষয়:</h4>
                <p className="arabic">
                  <span className="arabic-text">وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ</span>
                  <AudioPlayer arabicText="وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ" />
                </p>
                <p className="transliteration">Walladhina hum li-furujihim hafizuna illa ala azwajihim aw ma malakat aymanuhum fa-innahum ghayru malumin</p>
                <p className="translation"><strong>অনুবাদ:</strong> "এবং যারা তাদের লজ্জাস্থানের হেফাজত করে, তাদের স্ত্রী এবং তাদের অধিকারভুক্ত দাসীদের ছাড়া, নিশ্চয়ই তারা নিন্দিত হবে না।" (সূরা আল-মা'আরিজ, আয়াত ২৯-৩১)</p>
                <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতেও একই নীতির পুনরাবৃত্তি করা হয়েছে, যা লজ্জাস্থানের হেফাজতের গুরুত্বকে আরও জোরদার করে।</p>

                <h4>সূরা আন-নূর (সূরা ২৪), আয়াত ৩০ - দৃষ্টি নত রাখা ও লজ্জাস্থান হেফাজত:</h4>
                <p className="arabic">
                  <span className="arabic-text">قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ</span>
                  <AudioPlayer arabicText="قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ" />
                </p>
                <p className="transliteration">Qul lil-mu'minina yaghuddu min absarihim wa yahfazu furujahum</p>
                <p className="translation"><strong>অনুবাদ:</strong> "মুমিনদের বল, তারা যেন তাদের দৃষ্টি নত রাখে এবং তাদের লজ্জাস্থানের হেফাজত করে।" (সূরা আন-নূর, আয়াত ৩০)</p>
                <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি দৃষ্টি নত রাখা ও লজ্জাস্থানের হেফাজত উভয়ের নির্দেশ দেয়, যা পুরুষ ও নারী উভয়ের জন্য প্রযোজ্য।</p>

                <h4>হাদীস:</h4>
                <p className="arabic">
                  <span className="arabic-text">وَحِفْظُ فَرْجِهِ</span>
                  <AudioPlayer arabicText="وَحِفْظُ فَرْجِهِ" />
                </p>
                <p className="transliteration">Wa hifzu farjih</p>
                <p className="translation"><strong>অনুবাদ:</strong> "এবং তার লজ্জাস্থানের হেফাজত করা।" (সহীহ বুখারী, সহীহ মুসলিম)</p>

                <h4>লজ্জাস্থানের হেফাজতের উপায়:</h4>
                <ul className="list-spaced">
                  <li><strong>ব্যভিচার পরিহার:</strong> ব্যভিচার করা থেকে বিরত থাকুন</li>
                  <li><strong>অশ্লীলতা পরিহার:</strong> অশ্লীলতা থেকে বিরত থাকুন</li>
                  <li><strong>নজর নিয়ন্ত্রণ:</strong> নজর নিয়ন্ত্রণ করুন</li>
                  <li><strong>পর্দা:</strong> পর্দা মেনে চলুন</li>
                  <li><strong>বিবাহ:</strong> বিবাহের মাধ্যমে হালাল পথে চাহিদা পূরণ করুন</li>
                  <li><strong>রোজা:</strong> রোজা রাখুন (যদি বিবাহ করতে না পারেন)</li>
                  <li><strong>যিকির:</strong> আল্লাহর যিকির করুন</li>
                  <li><strong>নামাজ:</strong> নামাজ পড়ুন</li>
                </ul>

                <h4>অতিরিক্ত কুরআনিক রেফারেন্স:</h4>
                <p className="info-text">লজ্জাস্থানের হেফাজত সম্পর্কে আরও কুরআনিক নির্দেশনা উপরের সেকশনে বর্ণিত হয়েছে।</p>

                <ImportantNote variant="orange" title="লজ্জাস্থানের হেফাজতের গুরুত্ব:">
                  <ul>
                    <li>লজ্জাস্থানের হেফাজত করা ফরজ</li>
                    <li>লজ্জাস্থানের হেফাজত জান্নাতের পথে নিয়ে যায়</li>
                    <li>লজ্জাস্থানের হেফাজত সমাজে শান্তি বজায় রাখে</li>
                    <li>লজ্জাস্থানের হেফাজত ব্যক্তির সম্মান রক্ষা করে</li>
                  </ul>
                </ImportantNote>
              </div>
            </ExpandableSection>

            <ExpandableSection 
              id="eye-protection" 
              title="৩.৪. চোখের হেফাজত (Protection of Eyes)" 
              defaultOpen={false}
              className="day-section-expandable"
              number={3.4}
            >
              <div className="dua-item">
                <h3>চোখের হেফাজত</h3>
                <p className="info-text">চোখের হেফাজত করা অত্যন্ত গুরুত্বপূর্ণ। চোখের মাধ্যমে মানুষ অনেক পাপে জড়িয়ে পড়ে।</p>

                <h4>কুরআনের আয়াতসমূহ:</h4>
                
                <h4>সূরা আন-নূর (সূরা ২৪), আয়াত ৩০-৩১ - দৃষ্টি নত রাখা ও লজ্জাস্থান হেফাজত (পুরুষ ও নারী উভয়ের জন্য):</h4>
                <p className="arabic">
                  <span className="arabic-text">قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ</span>
                  <AudioPlayer arabicText="قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ" />
                </p>
                <p className="transliteration">Qul lil-mu'minina yaghuddu min absarihim wa yahfazu furujahum</p>
                <p className="translation"><strong>অনুবাদ:</strong> "মুমিনদের বল, তারা যেন তাদের দৃষ্টি নত রাখে এবং তাদের লজ্জাস্থানের হেফাজত করে।" (সূরা আন-নূর, আয়াত ৩০)</p>
                <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি চোখের হেফাজতের জন্য সবচেয়ে গুরুত্বপূর্ণ আয়াত। এটি দৃষ্টি নত রাখার নির্দেশ দেয়, যা পুরুষ ও নারী উভয়ের জন্য প্রযোজ্য।</p>

                <p className="arabic">
                  <span className="arabic-text">وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ</span>
                  <AudioPlayer arabicText="وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ" />
                </p>
                <p className="transliteration">Wa qul lil-mu'minati yaghdudna min absarihinna wa yahfazna furujahunna</p>
                <p className="translation"><strong>অনুবাদ:</strong> "মুমিন নারীদের বল, তারা যেন তাদের দৃষ্টি নত রাখে এবং তাদের লজ্জাস্থানের হেফাজত করে।" (সূরা আন-নূর, আয়াত ৩১)</p>
                <p className="info-text"><strong>💡 ব্যাখ্যা:</strong> এই আয়াতটি নারীদের জন্য একই নির্দেশ দেয়, যা চোখের হেফাজতের গুরুত্বকে আরও জোরদার করে।</p>

                <h4>হাদীস:</h4>
                <p className="arabic">
                  <span className="arabic-text">النَّظْرَةُ سَهْمٌ مِنْ سِهَامِ إِبْلِيسَ</span>
                  <AudioPlayer arabicText="النَّظْرَةُ سَهْمٌ مِنْ سِهَامِ إِبْلِيسَ" />
                </p>
                <p className="transliteration">An-nazratu sahmun min sihami iblis</p>
                <p className="translation"><strong>অনুবাদ:</strong> "নজর হল শয়তানের একটি তীর।" (মুসনাদে আহমাদ)</p>

                <h4>চোখের হেফাজতের উপায়:</h4>
                <ul className="list-spaced">
                  <li><strong>নজর নত রাখা:</strong> হারাম জিনিসের দিকে তাকানো থেকে বিরত থাকুন</li>
                  <li><strong>পর্দা:</strong> পর্দা মেনে চলুন</li>
                  <li><strong>অশ্লীলতা পরিহার:</strong> অশ্লীল ছবি, ভিডিও দেখা থেকে বিরত থাকুন</li>
                  <li><strong>ইন্টারনেট ব্যবহার:</strong> ইন্টারনেট ব্যবহারে সতর্ক থাকুন</li>
                  <li><strong>সৎকাজে ব্যবহার:</strong> চোখ দিয়ে ভালো জিনিস দেখুন</li>
                  <li><strong>কুরআন পড়া:</strong> চোখ দিয়ে কুরআন পড়ুন</li>
                  <li><strong>আল্লাহর সৃষ্টি দেখা:</strong> আল্লাহর সৃষ্টির সৌন্দর্য দেখুন</li>
                </ul>

                <h4>হাদীস:</h4>
                <p className="arabic">
                  <span className="arabic-text">إِنَّ اللَّهَ كَتَبَ عَلَى ابْنِ آدَمَ حَظَّهُ مِنَ الزِّنَا، أَدْرَكَ ذَلِكَ لَا مَحَالَةَ: الْعَيْنَانِ زِنَاهُمَا النَّظَرُ</span>
                  <AudioPlayer arabicText="إِنَّ اللَّهَ كَتَبَ عَلَى ابْنِ آدَمَ حَظَّهُ مِنَ الزِّنَا، أَدْرَكَ ذَلِكَ لَا مَحَالَةَ: الْعَيْنَانِ زِنَاهُمَا النَّظَرُ" />
                </p>
                <p className="transliteration">Innal-laha kataba ala ibni Adama hazzahu minaz-zina, adraka dhalika la mahalata: al-aynan zinahuman-nazru</p>
                <p className="translation"><strong>অনুবাদ:</strong> "নিশ্চয়ই আল্লাহ আদম সন্তানের জন্য ব্যভিচারের অংশ নির্ধারণ করেছেন, যা সে অবশ্যই পাবে: দুই চোখের ব্যভিচার হল নজর করা।" (সহীহ বুখারী, সহীহ মুসলিম)</p>

                <ImportantNote variant="blue" title="চোখের সঠিক ব্যবহার:">
                  <ul>
                    <li>কুরআন পড়া</li>
                    <li>আল্লাহর সৃষ্টি দেখা</li>
                    <li>সৎকাজে ব্যবহার</li>
                    <li>জ্ঞান অর্জন</li>
                    <li>ভালো বই পড়া</li>
                  </ul>
                </ImportantNote>

                <InfoBox variant="green" className="mt-md">
                  <h4>💡 পরামর্শ</h4>
                  <p>চোখের হেফাজত করুন। নজর নত রাখুন এবং হারাম জিনিসের দিকে তাকানো থেকে বিরত থাকুন। চোখ দিয়ে ভালো জিনিস দেখুন এবং কুরআন পড়ুন।</p>
                </InfoBox>
              </div>
            </ExpandableSection>

            <InfoBox variant="green" className="mt-lg">
              <h4>📿 তিনটি অঙ্গের হেফাজতের ফজিলত</h4>
              <p>রাসূলুল্লাহ (সা.) বলেছেন: "যে ব্যক্তি তিনটি জিনিসের হেফাজত করবে, আমি তার জন্য জান্নাতের জিম্মাদার হব।"</p>
              <ul className="list-spaced">
                <li>জিহ্বার হেফাজত</li>
                <li>লজ্জাস্থানের হেফাজত</li>
                <li>চোখের হেফাজত (নজর নিয়ন্ত্রণ)</li>
              </ul>
            </InfoBox>
          </DuaItem>
        </ExpandableSection>
      </SectionWrapper>
    </>
  )
}

