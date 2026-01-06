import PageHeader from '@/components/PageHeader'
import SectionWrapper from '@/components/SectionWrapper'
import DuaCategory from '@/components/DuaCategory'
import AudioPlayer from '@/components/AudioPlayer'

export default function Monajat() {
  return (
    <>
      <PageHeader 
        title="মোনাজাত"
        subtitle="আল্লাহর কাছে আন্তরিক প্রার্থনা"
        sectionCount={9}
      />

      <SectionWrapper className="duas-section">
        <DuaCategory id="monajat-1" title="বাংলা: মুনাজাত–১" defaultOpen={false} number={1}>
          <div className="dua-item">
            <p>ইয়া আল্লাহ! আমি জানি না—জেনে বা না জেনে—অতীতে কতটা পাপ করেছি, কতটা ভুল করেছি। কত মানুষকে কষ্ট-দুঃখ দিয়েছি। হয়তো কত ওয়াক্ত নামাজ কাজা হয়ে গেছে। কার কার নামে গীবত করেছি, কার কার নামে সমালোচনা করেছি, কত কিছু দেখে হিংসা করেছি। <strong>আস্তাগফিরুল্লাহ।</strong></p>
            <p>ইয়া আল্লাহ! আপনি এখন আমাদেরকে এমনভাবে তৈরি করুন, যাতে এসব থেকে ধীরে ধীরে মুক্তি পেতে পারি। আমাদেরকে আলোর পথ দেখান, আমার মনে ইসলামের প্রেম বাড়িয়ে দিন। আমাদের মনে আল্লাহ ও তাঁর রাসূল (সা.)-এর প্রতি ভালোবাসা প্রচুর পরিমাণে বৃদ্ধি করে দিন। ইসলামকে জানার আগ্রহ বাড়িয়ে দিন।</p>
            <p>ইয়া আল্লাহ! কোনো বিপদ আসার আগেই আমাকে তা থেকে রক্ষা করুন। আমাদেরকে বদনজর থেকে রক্ষা করুন। আমাদেরকে পাপ থেকে দূরে থাকার তাওফিক দান করুন!</p>
            <p>ইয়া আল্লাহ! আমাদের ঈমান বৃদ্ধি করে দিন, আমাদের মন নরম করে দিন, আমাদেরকে বেশি বেশি তওবা করার তাওফিক দিন। আমাদেরকে হেদায়াত দান করুন! 🙌 <strong>আমীন</strong> 🙌</p>
            <p className="translation"><strong>English:</strong> O Allah! I do not know how many sins and mistakes I committed—knowingly or unknowingly—in the past. I have hurt people, missed prayers, backbitten, criticized and felt envy. Astaghfirullah.</p>
            <p className="translation"><strong>English:</strong> O Allah! Shape us so that we gradually leave these wrongs. Show us the path of light. Increase love for Islam in our hearts, and love for Allah and His Messenger (ﷺ). Increase our eagerness to learn Islam.</p>
            <p className="translation"><strong>English:</strong> O Allah! Protect me from calamities before they come. Protect us from the evil eye and grant us the ability to stay away from sins.</p>
            <p className="translation"><strong>English:</strong> O Allah! Increase our iman, soften our hearts, grant us abundant tawbah and guide us. Ameen.</p>
          </div>
        </DuaCategory>

        <DuaCategory id="monajat-2" title="বাংলা: মুনাজাত–২" defaultOpen={false} number={2}>
          <div className="dua-item">
            <p>ইয়া রহমান, ইয়া রহীম, ইয়া যাল-জালালি ওয়াল ইকরাম,<br/>ইয়া গাফ্ফার, ইয়া সাত্তার, ইয়া জাব্বার, ইয়া ওয়াদূদ,<br/>ইয়া আজিজ, ইয়া আজিম, ইয়া হান্নান, ইয়া মান্নান—<br/>হে আমার রব, হে আমার সৃষ্টিকর্তা!</p>
            <p>আপনার পবিত্র নামগুলোর উসিলায়, আপনার তাওহীদের সাক্ষী <strong>“লা ইলাহা ইল্লাল্লাহ”</strong>-এর উসিলায়, এবং আপনার বন্ধু ও হাবিব হযরত মুহাম্মদ (সা.)-এর উম্মত হিসেবে—আমাদের সকলের মনের নেক ইচ্ছাগুলো পূর্ণ করে দিন।</p>
            <p>অভাব ও ঋণ দূর করে দিন। যারা যারা বিপদে আছে, তাদের সবাইকে আপনি বিপদ থেকে মুক্ত করে দিন। আমাদের মানসিক কষ্ট ও দুঃখ দূর করে দিন। আমাদের রিজিকে বরকত দান করুন। বাবা-মা ও পরিবারের সকলকে নেক হায়াত দান করুন। ❤️🤲</p>
            <p><strong>আমীন…</strong></p>
            <ul className="list-styled">
              <li>আল্লাহ—লা ইলাহা ইল্লা হুয়াল হাইয়্যুল কাইয়্যুম।</li>
              <li>আল্লাহ—লা ইলাহা ইল্লা হুয়ার রাহমানুর রাহীম।</li>
              <li>আল্লাহ—লা ইলাহা ইল্লা আনতা, সুবহানাকা, ইন্নি কুন্তু মিনাজ-জালিমীন।</li>
              <li>সল্লি ওয়া সাল্লিম ওয়া বারিক আবাদান ‘আলা নাবিয়্যিল উম্মী, ওয়া আলিহি ওয়া আসহাবিহি আজমাঈন।</li>
              <li>আল্লাহ, আল্লাহ, আল্লাহ—লা ইলাহা ইল্লাল্লাহ; মুহাম্মাদুর রাসূলুল্লাহ; সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম।</li>
              <li>ইয়া গাওসু! ইয়া গাওসু! ইয়া গাওসু! 🤲🤲</li>
            </ul>
            <p className="translation"><strong>English Pronunciation:</strong> Ya Rahman, Ya Rahim, Ya Dhul-Jalali wal-Ikram; Ya Ghaffar, Ya Sattar, Ya Jabbar, Ya Wadud; Ya Aziz, Ya Azim, Ya Hannan, Ya Mannan.</p>
            <p className="translation"><strong>English:</strong> By Your blessed Names, by the testimony of “Lā ilāha illallāh,” and as followers of Your beloved Prophet Muhammad (ﷺ), fulfill the righteous wishes of our hearts.</p>
            <p className="translation"><strong>English:</strong> Remove poverty and debt. Relieve those in hardship. Remove our mental pain and sorrow. Put barakah in our provision. Grant righteous life to our parents and families. Ameen.</p>
          </div>
        </DuaCategory>

        <DuaCategory id="monajat-3" title="🌺 একটা সুন্দর মুনাজাত–৩ 🌺" defaultOpen={false} number={3}>
          <div className="dua-item">
            <p>ইয়া আল্লাহ! ইয়া আর-রহমান! ইয়া আর-রহীম!</p>
            <p>আমরা আপনার কাছে ক্ষমা চাই আমাদের সকল গোনাহের জন্য।<br/>আমরা ক্ষমা চাই সেইসব ভুলের জন্য যা আমরা মানুষের প্রতি করেছি—জেনে অথবা না জেনে। আবার আমরা সেই ভুলগুলোও করেছি, যেগুলোর জন্য তওবা করেছিলাম—কিন্তু পুনরায় করে ফেলেছি।</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আমরা ঈমান এনেছি—আমাদের পাপগুলো ক্ষমা করুন এবং দোযখের শাস্তি থেকে রক্ষা করুন। আমাদের গোনাহ মোচন করুন, ক্ষমা করুন, আমাদের ওপর দয়া করুন—আপনি আমাদের অভিভাবক।</p>
            <p>যারা ঈমানের বিরুদ্ধে অবস্থান নেয়, তাদের বিরুদ্ধে আমাদের সাহায্য করুন।</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আমাদের দুনিয়া ও আখিরাতে কল্যাণ দিন এবং জাহান্নামের আগুন থেকে নিরাপদ রাখুন। আপনার রাসূলদের মাধ্যমে যে প্রতিশ্রুতি দিয়েছেন, তা পূর্ণ করুন এবং কিয়ামতের দিন আমাদের লাঞ্ছনা থেকে রক্ষা করুন। নিশ্চয়ই আপনি আপনার প্রতিশ্রুতি ভঙ্গ করেন না।</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আমরা নিজেদের ওপরই জুলুম করেছি—আপনি যদি আমাদের ক্ষমা না করেন এবং দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্ত হব। আমাদের সব দোয়া কবুল করুন। আমাদের দৈনন্দিন ইবাদত, আমাদের ভালো কাজ কবুল করুন এবং আমাদের খারাপ কাজ ক্ষমা করুন।</p>
            <p>যাদের স্বাস্থ্য, অর্থনৈতিক ও পারিবারিক সমস্যা আছে—সবাইকে সাহায্য করুন। আপনি ছাড়া কোনো উপাস্য নেই। আপনি ছাড়া আমরা কিছুই না। আমাদের ক্ষমা করুন এবং হেদায়াতের পথ দেখান।</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আমাদের সমাজ, গ্রাম ও এলাকাকে ফিতনা থেকে রক্ষা করুন। আমাদের এমন শক্তি দিন যাতে আমরা একে অপরকে সাহায্য করতে পারি এবং কালিমা “লা ইলাহা ইল্লাল্লাহ” আমাদের হৃদয়ে গেঁথে সমাজে ছড়িয়ে দিতে পারি।</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আমাদেরকে প্রকৃত মুসলমান হিসেবে গড়ে তুলুন। আমাদের হেদায়াত দিন। প্রতিদিন পাঁচ ওয়াক্ত নামাজ জামাতে মসজিদে আদায় করার তাওফিক দিন। সমগ্র উম্মতের জন্য এবং আমাদের জীবনের জন্য সহজতা এনে দিন। 🤲 <strong>আমীন</strong> 🤲</p>
            <p className="translation"><strong>English:</strong> O Allah, O Most Merciful, Most Compassionate! We seek Your forgiveness for all our sins—those against You and those against people, whether knowingly or unknowingly, even the ones we repented from and fell into again.</p>
            <p className="translation"><strong>English:</strong> We believe—so forgive our sins, save us from Hellfire, erase our faults, have mercy on us; You are our Protector. Help us against those who oppose faith.</p>
            <p className="translation"><strong>English:</strong> Grant us goodness in this world and the hereafter, and safety from the Fire. Fulfill the promises You made through Your Messengers and protect us from disgrace on the Day of Judgment—You never break Your promise.</p>
            <p className="translation"><strong>English:</strong> We have wronged ourselves; if You do not forgive and have mercy, we will surely be losers. Accept our duas, accept our good deeds and forgive our bad deeds. Guide the sick, distressed and those in financial or family hardship.</p>
            <p className="translation"><strong>English:</strong> Protect our communities from fitnah. Grant us strength to help one another and to spread the kalimah “Lā ilāha illallāh” in our hearts and society. Make us true Muslims, grant guidance and the tawfiq to pray in congregation. Ease for the Ummah and for our lives. Ameen.</p>
          </div>
        </DuaCategory>

        <DuaCategory id="monajat-4" title="🌺 একটা সুন্দর মুনাজাত–৪ 🌺" defaultOpen={false} number={4}>
          <div className="dua-item">
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!</p>
            <p>আমরা আপনার কাছে বিনীত প্রার্থনা করছি—আপনি যেন আমাদেরকে এমন দোয়া করার তাওফিক দেন, যা আপনার কাছে সর্বোত্তম ও কবুলযোগ্য। আপনি যেন আমাদেরকে সফলতা দান করেন—উত্তম সফলতা, উত্তম আমল, উত্তম প্রতিদান, উত্তম জীবন এবং উত্তম মৃত্যু দান করেন।</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আপনি যেন আমাদের নেক আমলের পাল্লা ভারী করে দেন, আমাদের ঈমান দৃঢ় করে দেন, মর্যাদা বৃদ্ধি করেন, দোয়া কবুল করেন, গোনাহসমূহ মাফ করেন এবং জান্নাতের সর্বোচ্চ স্থানে স্থান দান করেন। 🤲 <strong>আমীন</strong> 🤲</p>
            <p>আপনি যেন আমাদের জীবনের শুরু ও শেষ—উভয়টিই কল্যাণপূর্ণ করে দেন। বাহ্যিক ও আভ্যন্তরীণ সব দিক ভালো করে পূর্ণ করে দেন। সকল দিক থেকে কল্যাণ দান করেন এবং জান্নাতুল ফিরদাউসের সর্বোত্তম স্থানে আমাদের স্থান দান করেন। 🤲 <strong>আমীন</strong> 🤲</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আমাদের কাজগুলো যেন উত্তম হয়, আমলগুলো যেন আপনার কাছে কবুল হয়, বাহ্যিক ও অন্তরগত চরিত্র যেন সুন্দর হয়—আপনি সেই তাওফিক দিন। 🤲 <strong>আমীন</strong> 🤲</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আমাদের সন্তানদের মানুষের মনে সম্মানিত করুন, ঋণের ভার লাঘব করুন, বিষয়গুলো সহজ করুন, অন্তরকে পবিত্র করুন, লজ্জাস্থান হেফাজত করুন, অন্তরকে আলোকিত করুন এবং সকল গোনাহ মাফ করে দিন। 🤲 <strong>আমীন</strong> 🤲</p>
            <p>ইয়া আর-রহমান! ইয়া আর-রহীম!<br/>আমাদের বরকত দান করুন—কান, চোখ, আত্মা, শরীর, চরিত্র, পরিবার, জীবন ও মৃত্যুর মধ্যে বরকত দিন। আমলের মধ্যে বরকত দিন এবং সেগুলো কবুল করুন। সর্বোচ্চ জান্নাতে আমাদের স্থান দিন। 🤲 <strong>আমীন</strong> 🤲</p>
            <p className="translation"><strong>English:</strong> O Most Merciful! Grant us the ability to make duas that are best and most acceptable to You. Grant us the best success, deeds, reward, life and death.</p>
            <p className="translation"><strong>English:</strong> Make our scales of good deeds heavy, strengthen our iman, raise our rank, accept our duas, pardon our sins and grant us the highest place in Jannah.</p>
            <p className="translation"><strong>English:</strong> Make both the beginning and end of our lives blessed; perfect our outward and inward states; grant comprehensive good from every side; and place us in the best rank of Jannatul Firdaus.</p>
            <p className="translation"><strong>English:</strong> Make our actions excellent and accepted. Beautify our inner and outer character. Honor our children, lighten our debts, ease our affairs, purify our hearts, protect our chastity, illuminate our hearts and forgive all our sins. Put barakah in our hearing, sight, souls, bodies, character, families, lives and deaths; bless our deeds and accept them; grant us the highest Paradise. Ameen.</p>
          </div>
        </DuaCategory>

        <DuaCategory id="dua-khairul-masaalah" title="১) দোয়া: “খাইরুল মাসআলাহ…” (সব কল্যাণ একসাথে চাওয়া)" defaultOpen={false} number={5}>
          <div className="dua-item">
            <p className="arabic">
              <span className="arabic-text"><strong>اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَسْأَلَةِ، وَخَيْرَ الدُّعَاءِ، وَخَيْرَ النَّجَاحِ، وَخَيْرَ الْعَمَلِ، وَخَيْرَ الثَّوَابِ، وَخَيْرَ الْحَيَاةِ، وَخَيْرَ الْمَمَاتِ، وَثَبِّتْنِي، وَثَقِّلْ مَوَازِينِي، وَحَقِّقْ إِيمَانِي، وَارْفَعْ دَرَجَاتِي، وَتَقَبَّلْ صَلَاتِي، وَاغْفِرْ خَطِيئَتِي، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ.</strong></span>
              <AudioPlayer arabicText="اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَسْأَلَةِ، وَخَيْرَ الدُّعَاءِ، وَخَيْرَ النَّجَاحِ، وَخَيْرَ الْعَمَلِ، وَخَيْرَ الثَّوَابِ، وَخَيْرَ الْحَيَاةِ، وَخَيْرَ الْمَمَاتِ، وَثَبِّتْنِي، وَثَقِّلْ مَوَازِينِي، وَحَقِّقْ إِيمَانِي، وَارْفَعْ دَرَجَاتِي، وَتَقَبَّلْ صَلَاتِي، وَاغْفِرْ خَطِيئَتِي، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ." />
            </p>
            <p><strong>English Pronunciation:</strong> Allāhumma innī as’aluka khayra al-mas’alah, wa khayra ad-du‘ā’, wa khayra an-najāḥ, wa khayra al-‘amal, wa khayra ath-thawāb, wa khayra al-ḥayāh, wa khayra al-mamāt; wa thabbitnī, wa thaqqil mawāzīnī, wa ḥaqqiq īmānī, warfa‘ darajātī, wa taqabbal ṣalātī, waghfir khaṭī’atī, wa as’aluka ad-darajāt al-‘ulā mina al-jannah.</p>
            <p><strong>বাংলা উচ্চারণ:</strong> আল্লাহুম্মা ইন্নী আসআলুকা খাইরাল মাসআলাহ, ওয়া খাইরাদ দুআ, ওয়া খাইরান নাজাহ, ওয়া খাইরাল আমাল, ওয়া খাইরাছ ছাওয়াব, ওয়া খাইরাল হায়াহ, ওয়া খাইরাল মামাত; ওয়া সাব্বিতনী, ওয়া ছাক্কিল মাওয়াজিনী, ওয়া হাক্কিক ঈমানী, ওয়ারফা’ দারাজাতী, ওয়া তাকাব্বাল সালাতী, ওয়াগফির খাতিয়াতী, ওয়া আসআলুকাদ দারাজাতিল উলা মিনাল জান্নাহ।</p>
            <p><strong>অর্থ:</strong> হে আল্লাহ! দোয়া/চাওয়া/সফলতা/আমল/প্রতিদান/জীবন-মৃত্যুর <strong>সব উত্তম কল্যাণ</strong> দিন; আমাকে দৃঢ় রাখুন, আমার নেক আমলের পাল্লা ভারী করুন, ঈমান দৃঢ় করুন, মর্যাদা বাড়ান, নামাজ কবুল করুন, গুনাহ মাফ করুন এবং জান্নাতের উচ্চতম মর্যাদা দিন।</p>
          </div>
        </DuaCategory>

        <DuaCategory id="dua-fawatiha" title="২) দোয়া: “ফাওয়াতিহাল খাইর…” (কল্যাণের শুরু–শেষ সব)" defaultOpen={false} number={6}>
          <div className="dua-item">
            <p className="arabic">
              <span className="arabic-text"><strong>اللَّهُمَّ إِنِّي أَسْأَلُكَ فَوَاتِحَ الْخَيْرِ وَخَوَاتِمَهُ، وَجَوَامِعَهُ، وَأَوَّلَهُ وَآخِرَهُ، وَظَاهِرَهُ وَبَاطِنَهُ، وَالدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ.</strong></span>
              <AudioPlayer arabicText="اللَّهُمَّ إِنِّي أَسْأَلُكَ فَوَاتِحَ الْخَيْرِ وَخَوَاتِمَهُ، وَجَوَامِعَهُ، وَأَوَّلَهُ وَآخِرَهُ، وَظَاهِرَهُ وَبَاطِنَهُ، وَالدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ." />
            </p>
            <p><strong>English Pronunciation:</strong> Allāhumma innī as’aluka fawātiḥa al-khayri wa khawātimah, wa jawāmi‘ah, wa awwalahu wa ākhirah, wa ẓāhirahū wa bāṭinah, wa ad-darajāt al-‘ulā mina al-jannah, āmīn.</p>
            <p><strong>বাংলা উচ্চারণ:</strong> আল্লাহুম্মা ইন্নী আসআলুকা ফাওয়াতিহাল খাইর, ওয়া খাওয়াতিমাহ, ওয়া জাওয়ামি‘আহ, ওয়া আউয়ালাহু ওয়া আখিরাহ, ওয়া জাহিরাহু ওয়া বাতিনাহ, ওয়া দারাজাতিল উলা মিনাল জান্নাহ—আমীন।</p>
            <p><strong>অর্থ:</strong> হে আল্লাহ! কল্যাণের <strong>শুরু, শেষ, সারাংশ, প্রথম-শেষ, প্রকাশ্য-অপ্রকাশ্য</strong>—সব কল্যাণ এবং জান্নাতের উচ্চ মর্যাদা দান করুন।</p>
          </div>
        </DuaCategory>

        <DuaCategory id="dua-khaira-ma-ati" title="৩) দোয়া: “খাইরা মা আতি…” (যা দেন/যা করি—সব উত্তম)" defaultOpen={false} number={7}>
          <div className="dua-item">
            <p className="arabic">
              <span className="arabic-text"><strong>اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ مَا آتِي، وَخَيْرَ مَا أَفْعَلُ، وَخَيْرَ مَا أَعْمَلُ، وَخَيْرَ مَا بَطَنَ، وَخَيْرَ مَا ظَهَرَ، وَالدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ.</strong></span>
              <AudioPlayer arabicText="اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ مَا آتِي، وَخَيْرَ مَا أَفْعَلُ، وَخَيْرَ مَا أَعْمَلُ، وَخَيْرَ مَا بَطَنَ، وَخَيْرَ مَا ظَهَرَ، وَالدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ." />
            </p>
            <p><strong>English Pronunciation:</strong> Allāhumma innī as’aluka khayra mā ātī, wa khayra mā af‘al, wa khayra mā a‘mal, wa khayra mā baṭan, wa khayra mā ẓahar, wa ad-darajāt al-‘ulā mina al-jannah, āmīn.</p>
            <p><strong>বাংলা উচ্চারণ:</strong> আল্লাহুম্মা ইন্নী আসআলুকা খাইরা মা আতি, ওয়া খাইরা মা আফ‘আল, ওয়া খাইরা মা আ‘মাল, ওয়া খাইরা মা বাতান, ওয়া খাইরা মা জাহার, ওয়া দারাজাতিল উলা মিনাল জান্নাহ—আমীন।</p>
            <p><strong>অর্থ:</strong> হে আল্লাহ! আপনি যা দেন, আমি যা করি/যা আমল করি—তার মধ্যে <strong>সবচেয়ে উত্তম</strong> দিন; প্রকাশ্য-গোপন সব কল্যাণ দিন; জান্নাতের উচ্চ মর্যাদা দিন।</p>
          </div>
        </DuaCategory>

        <DuaCategory id="dua-tarfa-a-dhikri" title="৪) দোয়া: “আন তারফা‘আ যিকরী…” (ইজ্জত, অন্তর, গুনাহ মাফ)" defaultOpen={false} number={8}>
          <div className="dua-item">
            <p className="arabic">
              <span className="arabic-text"><strong>اللَّهُمَّ إِنِّي أَسْأَلُكَ أَنْ تَرْفَعَ ذِكْرِي، وَتَضَعَ وِزْرِي، وَتُصْلِحَ أَمْرِي، وَتُطَهِّرَ قَلْبِي، وَتُحَصِّنَ فَرْجِي، وَتُنَوِّرَ لِي قَلْبِي، وَتَغْفِرَ لِي ذَنْبِي، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ.</strong></span>
              <AudioPlayer arabicText="اللَّهُمَّ إِنِّي أَسْأَلُكَ أَنْ تَرْفَعَ ذِكْرِي، وَتَضَعَ وِزْرِي، وَتُصْلِحَ أَمْرِي، وَتُطَهِّرَ قَلْبِي، وَتُحَصِّنَ فَرْجِي، وَتُنَوِّرَ لِي قَلْبِي، وَتَغْفِرَ لِي ذَنْبِي، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ." />
            </p>
            <p><strong>English Pronunciation:</strong> Allāhumma innī as’aluka an tarfa‘a dhikrī, wa taḍa‘a wizrī, wa tuṣliḥa amrī, wa tuṭahhira qalbī, wa tuḥaṣṣina farjī, wa tunawwira lī qalbī, wa taghfira lī dhanbī, wa as’aluka ad-darajāt al-‘ulā mina al-jannah, āmīn.</p>
            <p><strong>বাংলা উচ্চারণ:</strong> আল্লাহুম্মা ইন্নী আসআলুকা আন তারফা‘আ যিকরী, ওয়া তাদাআ‘ উইযরী, ওয়া তুস্লিহা আমরী, ওয়া তুতাহহিরা কালবী, ওয়া তুহাসসিনা ফারজী, ওয়াতুনাওওিরা লী কালবী, ওয়া তাগফিরা লী যানবী, ওয়া আসআলুকাদ দারাজাতিল উলা মিনাল জান্নাহ—আমীন।</p>
            <p><strong>অর্থ:</strong> হে আল্লাহ! আমার সম্মান/সুনাম বাড়ান, বোঝা হালকা করুন, আমার বিষয়গুলো ঠিক করে দিন, অন্তর পবিত্র করুন, লজ্জাস্থান হেফাজত করুন, অন্তরকে নূরানী করুন, গুনাহ মাফ করুন, জান্নাতের উচ্চ মর্যাদা দিন।</p>
          </div>
        </DuaCategory>

        <DuaCategory id="dua-tubarika-li" title="৫) দোয়া: “আন তুবারিকা লী…” (নিজে, পরিবার, জীবন-মৃত্যুতে বরকত)" defaultOpen={false} number={9}>
          <div className="dua-item">
            <p className="arabic">
              <span className="arabic-text"><strong>اللَّهُمَّ إِنِّي أَسْأَلُكَ أَنْ تُبَارِكَ لِي فِي نَفْسِي، وَفِي سَمْعِي، وَفِي بَصَرِي، وَفِي رُوحِي، وَفِي خَلْقِي، وَفِي خُلُقِي، وَفِي أَهْلِي، وَفِي مَحْيَايَ، وَفِي مَمَاتِي، وَفِي عَمَلِي، فَتَقَبَّلْ حَسَنَاتِي، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ.</strong></span>
              <AudioPlayer arabicText="اللَّهُمَّ إِنِّي أَسْأَلُكَ أَنْ تُبَارِكَ لِي فِي نَفْسِي، وَفِي سَمْعِي، وَفِي بَصَرِي، وَفِي رُوحِي، وَفِي خَلْقِي، وَفِي خُلُقِي، وَفِي أَهْلِي، وَفِي مَحْيَايَ، وَفِي مَمَاتِي، وَفِي عَمَلِي، فَتَقَبَّلْ حَسَنَاتِي، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ." />
            </p>
            <p><strong>English Pronunciation:</strong> Allāhumma innī as’aluka an tubārika lī fī nafsī, wa fī sam‘ī, wa fī baṣarī, wa fī rūḥī, wa fī khalqī, wa fī khuluqī, wa fī ahlī, wa fī maḥyāya, wa fī mamātī, wa fī ‘amalī; fataqabbal ḥasanātī, wa as’aluka ad-darajāt al-‘ulā mina al-jannah, āmīn.</p>
            <p><strong>বাংলা উচ্চারণ:</strong> আল্লাহুম্মা ইন্নী আসআলুকা আন তুবারিকা লী ফী নাফসী, ওয়া ফী সাম‘ঈ, ওয়া ফী বাসারী, ওয়া ফী রূহী, ওয়া ফী খালকী, ওয়া ফী খুলুকী, ওয়া ফী আহলী, ওয়া ফী মাহইয়ায়া, ওয়া ফী মামাতী, ওয়া ফী আমালী; ফাতাকাব্বাল হাসানাতী, ওয়া আসআলুকাদ দারাজাতিল উলা মিনাল জান্নাহ—আমীন।</p>
            <p><strong>অর্থ:</strong> হে আল্লাহ! আমার <strong>নিজে, শ্রবণশক্তি, দৃষ্টি, রূহ, গঠন, চরিত্র, পরিবার, জীবন-মৃত্যু, কাজ</strong>—সব কিছুর মধ্যে বরকত দিন; আমার নেক আমল কবুল করুন; জান্নাতের উচ্চ মর্যাদা দিন।</p>
          </div>
        </DuaCategory>
      </SectionWrapper>
    </>
  )
}

