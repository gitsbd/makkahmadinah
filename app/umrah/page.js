import ExpandableSection from '@/components/ExpandableSection'
import PageHeader from '@/components/PageHeader'
import ImportantNote from '@/components/ImportantNote'
import CompletionBox from '@/components/CompletionBox'
import UmrahProcessSteps from '@/components/UmrahProcessSteps'
import TripChecklist from '@/components/TripChecklist'
import AudioPlayer from '@/components/AudioPlayer'

export default function Umrah() {
  return (
    <>
      <PageHeader 
        title="উমরাহ সম্পাদনের সম্পূর্ণ গাইড"
        subtitle="ধাপে ধাপে নির্দেশিকা"
        sectionCount={15}
      />

      <section className="process-section">
        <div className="container">
          <div className="umrah-flowchart">
            <h2 className="section-heading">
              উমরাহ প্রক্রিয়া - ভিজ্যুয়াল ডায়াগ্রাম
            </h2>
            <div className="flowchart-container">
              <div className="flowchart-step start">
                <div className="flowchart-icon">🚶</div>
                <div className="flowchart-title">শুরু</div>
                <div className="flowchart-desc">মিকাতের আগে</div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">👕</div>
                <div className="flowchart-title">১. ইহরাম</div>
                <div className="flowchart-desc">ইহরাম পরিধান<br/>তালবিয়া পড়া</div>
                <div className="flowchart-dua">
                  <p className="arabic-small">لَبَّيْكَ اللَّهُمَّ عُمْرَةً</p>
                  <p className="transliteration-small">Labbaik Allahumma Umratan</p>
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🕋</div>
                <div className="flowchart-title">২. মসজিদুল হারাম</div>
                <div className="flowchart-desc">কাবা শরীফে<br/>প্রবেশ</div>
                <div className="flowchart-dua">
                  <p className="arabic-small">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</p>
                  <p className="transliteration-small">Allahumma Iftah Li Abwaba Rahmatik</p>
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🔄</div>
                <div className="flowchart-title">৩. তাওয়াফ</div>
                <div className="flowchart-desc">৭ বার কাবা<br/>প্রদক্ষিণ</div>
                <div className="flowchart-dua">
                  <p className="arabic-small">بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ</p>
                  <p className="transliteration-small">Bismillahi Wallahu Akbar</p>
                </div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🤲</div>
                <div className="flowchart-title">৪. নামাজ</div>
                <div className="flowchart-desc">মাকামে ইব্রাহিমে<br/>২ রাকাত</div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">💧</div>
                <div className="flowchart-title">৫. জমজম</div>
                <div className="flowchart-desc">জমজম পানি<br/>পান করা</div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">🏃</div>
                <div className="flowchart-title">৬. সাঈ</div>
                <div className="flowchart-desc">সাফা-মারওয়া<br/>৭ বার যাতায়াত</div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step">
                <div className="flowchart-icon">✂️</div>
                <div className="flowchart-title">৭. চুল কাটা</div>
                <div className="flowchart-desc">মুন্ডন/চুল কাটা<br/>ইহরাম খোলা</div>
              </div>
              <div className="flowchart-arrow">↓</div>
              
              <div className="flowchart-step end">
                <div className="flowchart-icon">✅</div>
                <div className="flowchart-title">উমরাহ সম্পন্ন</div>
                <div className="flowchart-desc">আল্লাহ কবুল করুন</div>
              </div>
            </div>
          </div>

          <ExpandableSection 
            id="trip-checklist" 
            title="উমরাহ ভ্রমণের প্রস্তুতি চেকলিস্ট (Umrah Trip Checklist)" 
            defaultOpen={false}
            className="dua-category-wrapper"
            number={0}
          >
            <TripChecklist />
          </ExpandableSection>

          <ExpandableSection 
            id="umrah-process-detailed" 
            title="উমরাহ সম্পাদনের সম্পূর্ণ প্রক্রিয়া (Step by Step Process)" 
            defaultOpen={false}
            className="dua-category-wrapper"
            number={1}
          >
            <UmrahProcessSteps />
          </ExpandableSection>

          <ExpandableSection 
            id="umrah-intro" 
            title="উমরাহ কি?" 
            defaultOpen={false}
            className="day-section-expandable"
           number={2}>
            <div className="dua-item">
              <p className="info-text">উমরাহ হল ইসলামের একটি গুরুত্বপূর্ণ ইবাদত যা মক্কায় কাবা শরীফ তাওয়াফ, সাফা-মারওয়ার মধ্যে সাঈ এবং চুল কাটার মাধ্যমে সম্পন্ন হয়। এটি হজ্জের মতো ফরজ নয়, তবে এটি একটি সুন্নত এবং খুবই ফজিলতপূর্ণ ইবাদত।</p>
              
              <h3>উমরাহর ধাপসমূহ:</h3>
              <ol className="list-styled">
                <li><strong>ইহরাম গ্রহণ:</strong> মিকাত থেকে উমরাহর ইহরাম গ্রহণ করতে হবে</li>
                <li><strong>তালবিয়া পড়া:</strong> ইহরাম গ্রহণের পর তালবিয়া পড়তে হবে</li>
                <li><strong>মসজিদুল হারামে প্রবেশ:</strong> মক্কায় পৌঁছে মসজিদুল হারামে প্রবেশ করতে হবে</li>
                <li><strong>তাওয়াফ:</strong> কাবা শরীফের চারপাশে ৭ বার প্রদক্ষিণ করতে হবে</li>
                <li><strong>মাকামে ইব্রাহিমে নামাজ:</strong> তাওয়াফের পর মাকামে ইব্রাহিমে ২ রাকাত নামাজ পড়তে হবে</li>
                <li><strong>জমজম পানি পান:</strong> জমজম কূপের পানি পান করতে হবে</li>
                <li><strong>সাঈ:</strong> সাফা-মারওয়ার মধ্যে ৭ বার যাতায়াত করতে হবে</li>
                <li><strong>চুল কাটা/মুন্ডন:</strong> সাঈ শেষে চুল কাটতে বা মুন্ডন করতে হবে</li>
                <li><strong>ইহরাম খোলা:</strong> চুল কাটার পর ইহরাম খুলে ফেলতে হবে</li>
              </ol>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="umrah-importance" 
            title="উমরাহর গুরুত্ব ও ফজিলত" 
            defaultOpen={false}
            className="day-section-expandable"
           number={3}>
            <div className="dua-item">
              <h3>কেন উমরাহ করি?</h3>
              
              <div className="dua-box mt-md">
                <h4>১. আল্লাহর নির্দেশ - কুরআনের নির্দেশনা:</h4>
                <p className="info-text">আল্লাহ কুরআনে বলেছেন:</p>
                <p className="arabic">
                  <span className="arabic-text">وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ</span>
                  <AudioPlayer arabicText="وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ" />
                </p>
                <p className="transliteration">Wa Atimmul Hajja Wal Umrata Lillah</p>
                <p className="translation"><strong>অনুবাদ:</strong> "হজ ও উমরাহ আল্লাহর জন্য পূর্ণ করো।" (সূরা আল-বাকারা, আয়াত ১৯৬)</p>
                <p className="info-text mt-sm">এই আয়াত থেকে বোঝা যায় যে হজ্জ ও উমরাহ আল্লাহর জন্য সম্পন্ন করতে হবে—তাই উমরাহ করি।</p>
                <p className="info-text"><strong>সূত্র:</strong> Quran.com</p>
              </div>

              <div className="dua-box mt-md">
                <h4>২. সুন্নাহ অনুসরণ - রাসূল (সা.) এর আমল:</h4>
                <p className="info-text">রাসূলুল্লাহ (সা.) নিজে উমরাহ করেছেন (একাধিকবার) — তাই সুন্নাহ অনুসরণ করে উমরাহ করি।</p>
                <p className="info-text mt-sm">রাসূলুল্লাহ (সা.) তাঁর জীবনে একাধিকবার উমরাহ করেছেন, যা আমাদের জন্য অনুসরণীয় সুন্নাহ।</p>
                <p className="info-text"><strong>সূত্র:</strong> Islam-QA</p>
              </div>

              <div className="dua-box mt-md">
                <h4>৩. গুনাহ মাফ - উমরাহ থেকে উমরাহ:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا</span>
                  <AudioPlayer arabicText="عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا" />
                </p>
                <p className="transliteration">An Abi Hurairata Radiyallahu Anhu Anna Rasulallahi Sallallahu Alaihi Wasallam Qala: Al Umratu Ila Al Umrati Kaffaratun Lima Bainahuma</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "এক উমরাহ থেকে আরেক উমরাহ—মাঝের গুনাহের কাফফারা/মাফ।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
                <p className="info-text mt-sm">উমরাহ → উমরাহ: এক উমরাহ থেকে আরেক উমরাহ—মাঝের গুনাহের কাফফারা/মাফ।</p>
                <p className="info-text"><strong>সূত্র:</strong> Sunnah.com</p>
              </div>

              <div className="dua-box mt-md">
                <h4>৪. আল্লাহর মেহমান - হাজী ও মু'তামির (উমরাহকারী):</h4>
                <p className="info-text">হাজী ও মু'তামির (উমরাহকারী) আল্লাহর মেহমান/দল: তারা দুআ করলে কবুল হয়, ক্ষমা চাইলে ক্ষমা করা হয়।</p>
                <p className="arabic mt-sm">
                  <span className="arabic-text">الْحَجَّاجُ وَالْعُمَّارُ وَفْدُ اللَّهِ، دَعَوْهُ فَأَجَابَهُمْ، وَسَأَلُوهُ فَأَعْطَاهُمْ</span>
                  <AudioPlayer arabicText="الْحَجَّاجُ وَالْعُمَّارُ وَفْدُ اللَّهِ، دَعَوْهُ فَأَجَابَهُمْ، وَسَأَلُوهُ فَأَعْطَاهُمْ" />
                </p>
                <p className="transliteration">Al Hajjaju Wal Ummaru Wafdullah, Da'awhu Fa Ajabahum, Wa Sa'aluhu Fa A'tahum</p>
                <p className="translation"><strong>অনুবাদ:</strong> "হাজী ও উমরাহকারীরা আল্লাহর মেহমান। তারা দুআ করলে তিনি কবুল করেন এবং তারা চাইলে তিনি দেন।"</p>
                <p className="info-text"><strong>সূত্র:</strong> Ahadith</p>
              </div>

              <div className="dua-box mt-md">
                <h4>৫. বহুগুণ সওয়াব - বাইতুল্লাহ/মসজিদুল হারামে সালাত:</h4>
                <p className="info-text">বাইতুল্লাহ/মসজিদুল হারামে সালাতের সওয়াব বহুগুণ (প্রচলিত: ১ লক্ষ গুণ): তাই সেখানে বেশি বেশি নামাজ পড়ার জন্য উমরাহ করি।</p>
                <p className="arabic mt-sm">
                  <span className="arabic-text">صَلَاةٌ فِي الْمَسْجِدِ الْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ</span>
                  <AudioPlayer arabicText="صَلَاةٌ فِي الْمَسْجِدِ الْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ" />
                </p>
                <p className="transliteration">Salatun Fil Masjidil Harami Afdalu Min Mi'ati Alfi Salatin Fima Siwahu</p>
                <p className="translation"><strong>অনুবাদ:</strong> "মসজিদুল হারামে এক নামাজ অন্য মসজিদে এক লক্ষ নামাজের চেয়ে উত্তম।"</p>
                <p className="info-text mt-sm">এই ফজিলতের কারণে মসজিদুল হারামে বেশি বেশি নামাজ পড়ার সুযোগ পাওয়ার জন্য উমরাহ করি।</p>
                <p className="info-text"><strong>সূত্র:</strong> Islam Web</p>
              </div>

              <div className="dua-box mt-md">
                <h4>৬. হাজরে আসওয়াদ (Black Stone) - জান্নাত থেকে নাযিল:</h4>
                <p className="info-text">হাজরে আসওয়াদ (Black Stone) জান্নাত থেকে নাযিল—এবং কিয়ামতে সত্যভাবে স্পর্শ/ইশারা করা ব্যক্তির পক্ষে সাক্ষ্য দেবে; তবে কাউকে কষ্ট না দিয়ে।</p>
                <p className="arabic mt-sm">
                  <span className="arabic-text">عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّ الرُّكْنَ وَالْمَقَامَ يَاقُوتَتَانِ مِنْ يَاقُوتِ الْجَنَّةِ، طَمَسَ اللَّهُ نُورَهُمَا، وَلَوْ لَمْ يَطْمِسْ نُورَهُمَا لَأَضَاءَتَا مَا بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ</span>
                  <AudioPlayer arabicText="عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّ الرُّكْنَ وَالْمَقَامَ يَاقُوتَتَانِ مِنْ يَاقُوتِ الْجَنَّةِ، طَمَسَ اللَّهُ نُورَهُمَا، وَلَوْ لَمْ يَطْمِسْ نُورَهُمَا لَأَضَاءَتَا مَا بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ" />
                </p>
                <p className="transliteration">An Abdullahi Ibn Amr Qala: Sami'tu Rasulallahi Sallallahu Alaihi Wasallam Yaqulu: Inna Ar Rukna Wal Maqama Yaqutatani Min Yaqutil Jannati, Tamasallahu Nurahuma, Wa Lau Lam Yatmis Nurahuma La Ad'ata Ma Baina Al Mashriqi Wal Maghribi</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবদুল্লাহ ইবনে আমর (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "নিশ্চয়ই রুকন (হাজরে আসওয়াদ) ও মাকামে ইব্রাহিম জান্নাতের দুটি ইয়াকুত (মূল্যবান পাথর)। আল্লাহ তাদের আলো ঢেকে দিয়েছেন। যদি তিনি তাদের আলো ঢেকে না দিতেন, তাহলে তারা পূর্ব ও পশ্চিমের মধ্যবর্তী সব কিছু আলোকিত করে দিত।"</p>
                <p className="info-text mt-sm"><strong>গুরুত্বপূর্ণ:</strong> হাজরে আসওয়াদ স্পর্শ বা ইশারা করার সময় কাউকে কষ্ট না দেওয়া, ভিড় এড়িয়ে শান্তভাবে করা এবং সত্যভাবে করা জরুরি।</p>
                <p className="info-text"><strong>সূত্র:</strong> Sunnah.com</p>
              </div>

              <div className="dua-box mt-md">
                <h4>৭. গুনাহ মাফের বড় কারণ:</h4>
                <p className="info-text">উমরাহ গুনাহ মাফের বড় কারণ: বিশেষ করে উমরাহ-টু-উমরাহ মাঝের গুনাহ মাফ হয়; বড় গুনাহ হলে সত্য তাওবা জরুরি।</p>
                <p className="info-text mt-sm">উমরাহ একটি গুরুত্বপূর্ণ ইবাদত যা গুনাহ মাফের জন্য অত্যন্ত কার্যকর। তবে মনে রাখতে হবে:</p>
                <ul className="list-styled">
                  <li>ছোট গুনাহগুলো উমরাহর মাধ্যমে মাফ হতে পারে</li>
                  <li>এক উমরাহ থেকে পরবর্তী উমরাহ পর্যন্ত মধ্যবর্তী গুনাহ মাফ হয়</li>
                  <li>বড় গুনাহ (কাবিরা) হলে শুধু উমরাহ যথেষ্ট নয়, সত্য তাওবা করা জরুরি</li>
                  <li>তাওবার সাথে উমরাহ করলে আল্লাহর রহমত ও ক্ষমা পাওয়ার সম্ভাবনা বেড়ে যায়</li>
                </ul>
              </div>

              <h3 className="mt-lg">উমরাহর আধ্যাত্মিক গুরুত্ব</h3>
              <p>উমরাহ শুধুমাত্র একটি ধর্মীয় রীতি নয়, এটি একটি আধ্যাত্মিক যাত্রা যা মুসলমানদের:</p>
              <ul className="list-styled">
                <li>আল্লাহর সাথে সম্পর্ক গড়ে তুলতে সাহায্য করে</li>
                <li>আত্মশুদ্ধি ও আত্মসংযম শিক্ষা দেয়</li>
                <li>ইসলামি ঐক্য ও ভ্রাতৃত্বের অনুভূতি জাগ্রত করে</li>
                <li>ধৈর্য ও সহিষ্ণুতা বৃদ্ধি করে</li>
                <li>আল্লাহর প্রতি কৃতজ্ঞতা প্রকাশের সুযোগ দেয়</li>
              </ul>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="umrah-when" 
            title="উমরাহ কখন করা যায়?" 
            defaultOpen={false}
            className="day-section-expandable"
           number={4}>
            <div className="dua-item">
              <p className="info-text"><strong>উমরাহ বছরের যেকোনো সময় করা যায়।</strong> হজ্জের মতো নির্দিষ্ট মাসে সীমাবদ্ধ নয়। তবে কিছু সময়ে উমরাহ পালনের বিশেষ ফজিলত রয়েছে।</p>
              
              <h3>উমরাহ করার উত্তম সময়:</h3>
              <ul className="list-styled">
                <li><strong>রমজান মাস:</strong> রমজানে উমরাহ একটি হজ্জের সমান</li>
                <li><strong>হজ্জের মাস ছাড়া:</strong> হজ্জের মাস (জিলহজ্জ) ছাড়া যেকোনো সময়</li>
                <li><strong>রমজানের আগে:</strong> শাবান মাসে উমরাহ করা উত্তম</li>
                <li><strong>হজ্জের পর:</strong> হজ্জ সম্পন্ন করার পর উমরাহ করা যায়</li>
              </ul>
              
              <div className="dua-box mt-md">
                <h4>রমজানে উমরাহর ফজিলত:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لِامْرَأَةٍ مِنْ الْأَنْصَارِ: مَا مَنَعَكِ أَنْ تَحُجِّي مَعَنَا؟ قَالَتْ: لَمْ يَكُنْ لَنَا إِلَّا نَاضِحَانِ فَحَجَّ أَبُو وَلَدِهَا وَابْنُهَا عَلَى نَاضِحٍ وَتَرَكَا لَنَا نَاضِحًا نَنْضَحُ بِهِ قَالَ: فَإِذَا جَاءَ رَمَضَانُ فَاعْتَمِرِي فَإِنَّ عُمْرَةً فِيهِ تَعْدِلُ حَجَّةً</span>
                  <AudioPlayer arabicText="عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لِامْرَأَةٍ مِنْ الْأَنْصَارِ: مَا مَنَعَكِ أَنْ تَحُجِّي مَعَنَا؟ قَالَتْ: لَمْ يَكُنْ لَنَا إِلَّا نَاضِحَانِ فَحَجَّ أَبُو وَلَدِهَا وَابْنُهَا عَلَى نَاضِحٍ وَتَرَكَا لَنَا نَاضِحًا نَنْضَحُ بِهِ قَالَ: فَإِذَا جَاءَ رَمَضَانُ فَاعْتَمِرِي فَإِنَّ عُمْرَةً فِيهِ تَعْدِلُ حَجَّةً" />
                </p>
                <p className="transliteration">An Ibn Abbasi Radiyallahu Anhuma Qala: Qala Rasulallahi Sallallahu Alaihi Wasallam Li Imraatin Min Al Ansari: Ma Mana'aki An Tahujji Ma'ana? Qalat: Lam Yakun Lana Illa Nadihan Fahajja Abu Waladiha Wa Ibnaha Ala Nadihin Wa Taraka Lana Nadihan Nandahu Bihi Qala: Fa Iza Ja'a Ramadhanu Fa'tamiri Fa Inna Umratan Fihi Ta'dilu Hajjatan</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত ইবনে আব্বাস (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) আনসারি এক মহিলাকে বললেন: "তোমাকে আমাদের সাথে হজ্জ করতে কী বাধা দিল?" তিনি বললেন: "আমাদের কাছে দুটি উট ছিল, আমার স্বামী ও ছেলে একটি নিয়ে হজ্জে গেছে এবং আমাদের জন্য একটি রেখে গেছে যার দ্বারা আমরা কাজ করি।" রাসূলুল্লাহ (সা.) বললেন: "যখন রমজান আসবে, তখন উমরাহ করো, কারণ রমজানে উমরাহ একটি হজ্জের সমান।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="umrah-where" 
            title="উমরাহ কোথায় করতে হয়?" 
            defaultOpen={false}
            className="day-section-expandable"
           number={5}>
            <div className="dua-item">
              <p className="info-text"><strong>উমরাহ শুধুমাত্র মক্কা শরীফে করা যায়।</strong> উমরাহর প্রধান কাজগুলো মক্কার বিভিন্ন স্থানে সম্পন্ন করতে হয়।</p>
              
              <h3>উমরাহর প্রধান স্থানসমূহ:</h3>
              <ul className="list-styled">
                <li><strong>মিকাত:</strong> উমরাহর ইহরাম গ্রহণের স্থান (মক্কার বাইরে)</li>
                <li><strong>মসজিদুল হারাম:</strong> কাবা শরীফের চারপাশে অবস্থিত মসজিদ</li>
                <li><strong>কাবা শরীফ:</strong> তাওয়াফ (প্রদক্ষিণ) করার স্থান</li>
                <li><strong>মাকামে ইব্রাহিম:</strong> তাওয়াফের পর নামাজ পড়ার স্থান</li>
                <li><strong>জমজম কূপ:</strong> জমজম পানি পান করার স্থান</li>
                <li><strong>সাফা-মারওয়া:</strong> সাঈ (দৌড়ানো) করার স্থান</li>
              </ul>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="meeqat" 
            title="মিকাত (Meeqat)" 
            defaultOpen={false}
            className="day-section-expandable"
           number={6}>
            <div className="dua-item">
              <p className="info-text">মিকাত হল সেই স্থান যেখান থেকে ইহরাম গ্রহণ করতে হয়। মক্কা থেকে বিভিন্ন দিক থেকে আসা লোকদের জন্য বিভিন্ন মিকাত নির্ধারিত:</p>
              
              <h3>মিকাতের স্থানসমূহ:</h3>
              <ul className="list-styled">
                <li><strong>যুল হুলাইফা (আবিয়ার আলী):</strong> মদিনা থেকে আসা লোকদের জন্য</li>
                <li><strong>জুহফা:</strong> সিরিয়া, মিশর ও উত্তর আফ্রিকা থেকে আসা লোকদের জন্য</li>
                <li><strong>ক্বারনুল মানাজিল:</strong> নাজদ থেকে আসা লোকদের জন্য</li>
                <li><strong>ইয়ালামলাম:</strong> ইয়েমেন ও দক্ষিণ থেকে আসা লোকদের জন্য</li>
                <li><strong>যাতু ইরক:</strong> ইরাক থেকে আসা লোকদের জন্য</li>
              </ul>
              
              <p className="info-text mt-sm"><strong>বিমানযোগে আসা ব্যক্তিরা:</strong> বিমানে মিকাত অতিক্রম করার সময় ইহরাম গ্রহণ করবেন।</p>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="umrah-frequency" 
            title="উমরাহ কতবার করা যায়?" 
            defaultOpen={false}
            className="day-section-expandable"
           number={7}>
            <div className="dua-item">
              <p className="info-text"><strong>উমরাহ যতবার ইচ্ছা ততবার করা যায়।</strong> এটি হজ্জের মতো জীবনে একবার সীমাবদ্ধ নয়।</p>
              
              <h3>উমরাহ করার সুযোগ:</h3>
              <ul className="list-styled">
                <li><strong>সীমাহীন:</strong> উমরাহ যতবার ইচ্ছা ততবার করা যায়</li>
                <li><strong>বছরে একাধিকবার:</strong> এক বছরে একাধিকবার উমরাহ করা যায়</li>
                <li><strong>হজ্জের সাথে:</strong> হজ্জের সাথে উমরাহ করা যায় (হজ্জে তামাত্তু বা কিরান)</li>
                <li><strong>স্বতন্ত্রভাবে:</strong> হজ্জ ছাড়াও স্বতন্ত্রভাবে উমরাহ করা যায়</li>
              </ul>
              
              <div className="dua-box mt-md">
                <h4>হাদীস:</h4>
                <p className="arabic">
                  <span className="arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا</span>
                  <AudioPlayer arabicText="عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا" />
                </p>
                <p className="transliteration">An Abi Hurairata Radiyallahu Anhu Anna Rasulallahi Sallallahu Alaihi Wasallam Qala: Al Umratu Ila Al Umrati Kaffaratun Lima Bainahuma</p>
                <p className="translation"><strong>অনুবাদ:</strong> হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত, রাসূলুল্লাহ (সা.) বলেছেন: "এক উমরাহ থেকে পরবর্তী উমরাহ পর্যন্ত মধ্যবর্তী গুনাহসমূহের কাফফারা (ক্ষমা)।" (সহীহ বুখারী, সহীহ মুসলিম)</p>
                <p className="info-text mt-sm">এই হাদীস থেকে বোঝা যায় যে উমরাহ বারবার করা যায় এবং প্রতিবারই এর ফজিলত রয়েছে।</p>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="who-can-perform" 
            title="কে কে উমরাহ করতে পারে?" 
            defaultOpen={false}
            className="day-section-expandable"
           number={9}>
            <div className="dua-item">
              <h3>উমরাহ করার শর্তসমূহ:</h3>
              <ul className="list-styled">
                <li><strong>ইসলাম:</strong> উমরাহকারীকে মুসলমান হতে হবে</li>
                <li><strong>বয়স:</strong> বালেগ (প্রাপ্তবয়স্ক) হতে হবে</li>
                <li><strong>বুদ্ধি:</strong> সুস্থ মস্তিষ্কের অধিকারী হতে হবে</li>
                <li><strong>স্বাধীনতা:</strong> স্বাধীন হতে হবে (দাস নয়)</li>
                <li><strong>সামর্থ্য:</strong> উমরাহ করার শারীরিক ও আর্থিক সামর্থ্য থাকতে হবে</li>
                <li><strong>সুযোগ:</strong> উমরাহে যাওয়ার সুযোগ থাকতে হবে (রাস্তা নিরাপদ, পরিবারের খরচের ব্যবস্থা থাকা)</li>
              </ul>
              
              <h3>বিশেষ ক্ষেত্রে উমরাহ:</h3>
              <ul className="list-styled">
                <li><strong>নারীদের জন্য:</strong> নারীরা উমরাহ করতে পারেন, তবে মাহরাম (স্বামী, পিতা, ভাই, পুত্র ইত্যাদি) সহ যাওয়া উত্তম</li>
                <li><strong>বৃদ্ধদের জন্য:</strong> বৃদ্ধ ব্যক্তিরা উমরাহ করতে পারেন, তবে শারীরিক সামর্থ্য থাকতে হবে</li>
                <li><strong>শিশুদের জন্য:</strong> শিশুরা উমরাহ করতে পারে, তবে তাদের উমরাহ সুন্নত হিসেবে গণ্য হবে</li>
                <li><strong>অসুস্থদের জন্য:</strong> অসুস্থ ব্যক্তিরা উমরাহ করতে পারেন, তবে শারীরিক অবস্থা বিবেচনা করতে হবে</li>
              </ul>
              
              <ImportantNote variant="blue" title="📌 নারীদের জন্য বিশেষ নির্দেশনা:">
                <ul>
                  <li>নারীরা মাহরাম ছাড়া উমরাহ করতে পারবেন না</li>
                  <li>হায়েজ বা নিফাস অবস্থায় উমরাহ করা যায় না</li>
                  <li>ইহরামের সময় মুখমণ্ডল ঢাকতে হবে না</li>
                  <li>হাতমোজা পরা যাবে না</li>
                </ul>
              </ImportantNote>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="step-1" 
            title="১. ইহরাম গ্রহণ (Ihram)" 
            defaultOpen={false}
            className="day-section-expandable"
            icon="👕"
           number={9}>
            <div className="process-step">
              <div className="step-content">
                <h3>কি করতে হবে:</h3>
                <ul>
                  <li>মিকাত (Meeqat) এর আগে ইহরাম পরিধান করুন</li>
                  <li>পুরুষদের জন্য: দুইটি সাদা কাপড় (একটি কোমরে, একটি কাঁধে)</li>
                  <li>মহিলাদের জন্য: সাধারণ পোশাক (হাত-পা ঢাকা)</li>
                  <li>গোসল করুন বা ওজু করুন</li>
                  <li>ইহরামের নিয়ত করুন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>ইহরামের নিয়ত (Niyyah):</h4>
                  <p className="arabic">
                  <span className="arabic-text">لَبَّيْكَ اللَّهُمَّ عُمْرَةً</span>
                  <AudioPlayer arabicText="لَبَّيْكَ اللَّهُمَّ عُمْرَةً" />
                </p>
                  <p className="transliteration">Labbaik Allahumma Umratan</p>
                  <p className="translation">হে আল্লাহ, আমি উমরাহর জন্য উপস্থিত</p>
                </div>
                
                <div className="dua-box">
                  <h4>তালবিয়া (Talbiyah):</h4>
                  <p className="arabic">
                  <span className="arabic-text">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ</span>
                  <AudioPlayer arabicText="لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ" />
                </p>
                  <p className="transliteration">Labbaik Allahumma Labbaik, Labbaik La Sharika Laka Labbaik, Innal Hamda Wan Ni'mata Laka Wal Mulk, La Sharika Lak</p>
                  <p className="translation">হে আল্লাহ, আমি উপস্থিত, আমি উপস্থিত। আপনার কোন শরীক নেই, আমি উপস্থিত। নিশ্চয়ই সকল প্রশংসা, নেয়ামত ও রাজত্ব আপনার, আপনার কোন শরীক নেই।</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="step-2" 
            title="২. কাবা শরীফে প্রবেশ" 
            defaultOpen={false}
            className="day-section-expandable"
            icon="🕋"
           number={10}>
            <div className="process-step">
              <div className="step-content">
                <h3>কি করতে হবে:</h3>
                <ul>
                  <li>মসজিদুল হারামে প্রবেশ করুন</li>
                  <li>কাবা শরীফের দিকে মুখ করুন</li>
                  <li>প্রবেশের সময় দোয়া পড়ুন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>মসজিদে প্রবেশের দোয়া:</h4>
                  <p className="arabic">
                  <span className="arabic-text">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</span>
                  <AudioPlayer arabicText="اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ" />
                </p>
                  <p className="transliteration">Allahumma Iftah Li Abwaba Rahmatik</p>
                  <p className="translation">হে আল্লাহ, আমার জন্য আপনার রহমতের দরজা খুলে দিন</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="step-3" 
            title="৩. তাওয়াফ (Tawaf) - কাবা প্রদক্ষিণ" 
            defaultOpen={false}
            className="day-section-expandable"
            icon="🔄"
           number={10}>
            <div className="process-step">
              <div className="step-content">
                <h3>কি করতে হবে:</h3>
                <ul>
                  <li>হাজরে আসওয়াদ (কালো পাথর) থেকে শুরু করুন</li>
                  <li>কাবা শরীফকে বাম দিকে রেখে ৭ বার প্রদক্ষিণ করুন</li>
                  <li>প্রথম ৩ চক্করে রমল (দ্রুত হাঁটা) করুন (পুরুষদের জন্য)</li>
                  <li>প্রতিটি চক্করে হাজরে আসওয়াদে চুমু দিন বা ইশারা করুন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>তাওয়াফ শুরু করার দোয়া:</h4>
                  <p className="arabic">
                  <span className="arabic-text">بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ</span>
                  <AudioPlayer arabicText="بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ" />
                </p>
                  <p className="transliteration">Bismillahi Wallahu Akbar</p>
                  <p className="translation">আল্লাহর নামে শুরু করছি এবং আল্লাহ সর্বশ্রেষ্ঠ</p>
                </div>
                
                <div className="dua-box">
                  <h4>তাওয়াফের সময় পড়ার দোয়া:</h4>
                  <p className="arabic">
                  <span className="arabic-text">سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ</span>
                  <AudioPlayer arabicText="سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ" />
                </p>
                  <p className="transliteration">Subhanallahi Walhamdulillahi Wa La Ilaha Illallahu Wallahu Akbar</p>
                  <p className="translation">আল্লাহ পবিত্র, সকল প্রশংসা আল্লাহর, আল্লাহ ছাড়া কোন ইলাহ নেই, আল্লাহ সর্বশ্রেষ্ঠ</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="step-4" 
            title="৪. মাকামে ইব্রাহিমে নামাজ" 
            defaultOpen={false}
            className="day-section-expandable"
            icon="🤲"
           number={11}>
            <div className="process-step">
              <div className="step-content">
                <h3>কি করতে হবে:</h3>
                <ul>
                  <li>তাওয়াফ শেষে মাকামে ইব্রাহিমের কাছে যান</li>
                  <li>২ রাকাত নামাজ পড়ুন</li>
                  <li>প্রথম রাকাতে সূরা কাফিরুন, দ্বিতীয় রাকাতে সূরা ইখলাস পড়ুন</li>
                </ul>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="step-5" 
            title="৫. জমজম পানি পান" 
            defaultOpen={false}
            className="day-section-expandable"
            icon="💧"
           number={12}>
            <div className="process-step">
              <div className="step-content">
                <h3>কি করতে হবে:</h3>
                <ul>
                  <li>জমজম কূপের কাছে যান</li>
                  <li>কিবলার দিকে মুখ করে পান করুন</li>
                  <li>দোয়া পড়ে পান করুন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>জমজম পান করার দোয়া:</h4>
                  <p className="arabic">
                  <span className="arabic-text">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ</span>
                  <AudioPlayer arabicText="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ" />
                </p>
                  <p className="transliteration">Allahumma Inni As'aluka Ilman Nafian Wa Rizqan Wasian Wa Shifaan Min Kulli Dain</p>
                  <p className="translation">হে আল্লাহ, আমি আপনার কাছে উপকারী জ্ঞান, প্রশস্ত রিজিক এবং সকল রোগ থেকে আরোগ্য চাই</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="step-6" 
            title="৬. সাঈ (Sai) - সাফা-মারওয়া" 
            defaultOpen={false}
            className="day-section-expandable"
            icon="🏃"
           number={13}>
            <div className="process-step">
              <div className="step-content">
                <h3>কি করতে হবে:</h3>
                <ul>
                  <li>সাফা পাহাড় থেকে শুরু করুন</li>
                  <li>মারওয়া পর্যন্ত ৭ বার যাতায়াত করুন</li>
                  <li>সাফা থেকে মারওয়া = ১ বার</li>
                  <li>মারওয়া থেকে সাফা = ১ বার</li>
                  <li>প্রতিটি পাহাড়ে উঠে দোয়া করুন</li>
                </ul>
                
                <div className="dua-box">
                  <h4>সাফায় দোয়া:</h4>
                  <p className="arabic">
                  <span className="arabic-text">إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ</span>
                  <AudioPlayer arabicText="إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ" />
                </p>
                  <p className="transliteration">Innas Safa Wal Marwata Min Sha'airillah</p>
                  <p className="translation">নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনসমূহের অন্তর্গত</p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="step-7" 
            title="৭. চুল কাটা/মুন্ডন" 
            defaultOpen={false}
            className="day-section-expandable"
            icon="✂️"
           number={14}>
            <div className="process-step">
              <div className="step-content">
                <h3>কি করতে হবে:</h3>
                <ul>
                  <li>সাঈ শেষে চুল কাটুন বা মুন্ডন করুন</li>
                  <li>পুরুষদের জন্য: মুন্ডন করা উত্তম, তবে চুল কাটাও বৈধ</li>
                  <li>মহিলাদের জন্য: শুধু চুলের অগ্রভাগ কাটতে হবে (মুন্ডন নয়)</li>
                  <li>চুল কাটার পর ইহরাম খুলে ফেলুন</li>
                </ul>
                
                <div className="important-note">
                  <strong>⚠️ গুরুত্বপূর্ণ:</strong> চুল কাটা বা মুন্ডন করার পর উমরাহ সম্পন্ন হয় এবং ইহরাম খুলে ফেলা যায়।
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            id="masjid-nabawi" 
            title="মসজিদে নববীতে যাওয়া (Visiting Masjid al-Nabawi)" 
            defaultOpen={false}
            className="day-section-expandable"
            icon="🕌"
           number={15}>
            <div className="dua-item">
              <p className="info-text">উমরাহ সম্পন্ন করার পর বা আগে মদিনা শরীফে গিয়ে মসজিদে নববীতে নামাজ পড়া এবং রাসূলুল্লাহ (সা.) এর রওজা শরীফে সালাম দেওয়া একটি সুন্নত ও অত্যন্ত ফজিলতপূর্ণ আমল।</p>
              
              <h3>মসজিদে নববীতে যাওয়ার ফজিলত সম্পর্কে হাদীস</h3>
              
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
              
              <h3>মসজিদে নববীতে কি করতে হবে?</h3>
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
                <p className="translation"><strong>অনুবাদ:</strong> হে আল্লাহ, মুহাম্মদ (সা.) ও তাঁর পরিবারের উপর রহমত বর্ষণ করুন, যেমন আপনি ইব্রাহিম (আঃ) ও তাঁর পরিবারের উপর রহমত বর্ষণ করেছেন। নিশ্চয়ই আপনি প্রশংসিত ও মহান।</p>
              </div>
              
              <h3>মসজিদে নববীতে নামাজের ফজিলত</h3>
              <ul className="list-styled">
                <li><strong>বিশেষ পুরস্কার:</strong> মসজিদে নববীতে এক নামাজ মসজিদুল হারাম ছাড়া অন্য যেকোনো মসজিদে এক হাজার নামাজের সমান</li>
                <li><strong>রওজা শরীফ:</strong> রাসূলুল্লাহ (সা.) এর ঘর ও মিম্বরের মধ্যবর্তী স্থান হল জান্নাতের বাগান</li>
                <li><strong>শাফাআত:</strong> রাসূলুল্লাহ (সা.) এর কবর জিয়ারত করলে তাঁর শাফাআত পাওয়ার সুযোগ</li>
                <li><strong>দোয়া কবুল:</strong> মসজিদে নববীতে দোয়া কবুল হওয়ার বিশেষ সময়</li>
              </ul>
              
              <ImportantNote variant="green" title="📌 গুরুত্বপূর্ণ মনে রাখবেন:">
                <ul>
                  <li>উমরাহ সম্পন্ন করার পর মদিনায় যাওয়া সুন্নত</li>
                  <li>মসজিদে নববীতে নামাজ পড়া অত্যন্ত ফজিলতপূর্ণ</li>
                  <li>রওজা শরীফে সালাম দেওয়া এবং দোয়া করা</li>
                  <li>মদিনায় অবস্থানকালে বেশি বেশি নামাজ পড়া ও দোয়া করা</li>
                  <li>রওজা শরীফে ভিড় এড়িয়ে শান্তভাবে সালাম দেওয়া</li>
                </ul>
              </ImportantNote>
            </div>
          </ExpandableSection>

          <CompletionBox 
            title="✅ উমরাহ সম্পন্ন!"
            message="আপনার উমরাহ সম্পন্ন হয়েছে। আল্লাহ আপনার উমরাহ কবুল করুন।"
            note={<><strong>📝 মনে রাখবেন:</strong> উমরাহ সম্পন্ন করার পর <strong>মদিনা শরীফে গিয়ে মসজিদে নববীতে নামাজ পড়ুন এবং রাসূলুল্লাহ (সা.) এর রওজা শরীফে সালাম দিন।</strong></>}
          />
        </div>
      </section>
    </>
  )
}
