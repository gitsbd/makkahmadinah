import PageHeader from '@/components/PageHeader'
import SectionWrapper from '@/components/SectionWrapper'
import InfoBox from '@/components/InfoBox'
import ExpandableSection from '@/components/ExpandableSection'
import DuaItem from '@/components/DuaItem'
import AudioPlayer from '@/components/AudioPlayer'
import ProphetsDiagram from '@/components/ProphetsDiagram'

export default function Prophets() {
  return (
    <>
      <PageHeader 
        title="নবী-রাসূলদের নামসমূহ (Names of Prophets and Messengers)"
        subtitle="ইসলামে উল্লিখিত সকল নবী-রাসূলের নাম, বর্ণনা ও ইতিহাস"
        sectionCount={25}
      />

      <ProphetsDiagram />

      <SectionWrapper className="duas-section">
        <ExpandableSection 
          id="prophets-intro" 
          title="নবী-রাসূল সম্পর্কে" 
          defaultOpen={true}
          className="dua-category-wrapper"
          number={1}
        >
          <div className="dua-item">
            <InfoBox variant="blue">
              <h4>📿 নবী-রাসূল</h4>
              <p>ইসলামে নবী-রাসূল হলেন আল্লাহ তায়ালার মনোনীত ব্যক্তিবর্গ যাদের মাধ্যমে তিনি মানবজাতির কাছে তাঁর বাণী প্রেরণ করেছিেন। কুরআনে ২৫ জন নবী-রাসূলের নাম উল্লেখ করা হয়েছে।</p>
            </InfoBox>

            <h3>নবী ও রাসূলের পার্থক্য</h3>
            <ul className="list-spaced">
              <li><strong>নবী (Nabi):</strong> যিনি আল্লাহর ওহী প্রাপ্ত হন কিন্তু নতুন শরীয়ত নিয়ে আসেন না</li>
              <li><strong>রাসূল (Rasul):</strong> যিনি আল্লাহর ওহী প্রাপ্ত হন এবং নতুন শরীয়ত নিয়ে আসেন</li>
              <li><strong>উলুল আযম:</strong> পাঁচজন প্রধান রাসূল - নূহ (আ.), ইব্রাহিম (আ.), মুসা (আ.), ঈসা (আ.), এবং মুহাম্মদ (সা.)</li>
            </ul>

            <h3>নবী-রাসূলদের বৈশিষ্ট্য</h3>
            <ul className="list-spaced">
              <li>তারা সবাই মানুষ ছিলেন</li>
              <li>তারা সবাই আল্লাহর মনোনীত</li>
              <li>তারা সবাই পাপমুক্ত (মা'সুম)</li>
              <li>তারা সবাই সত্যবাদী</li>
              <li>তারা সবাই আল্লাহর বাণী প্রচার করেছিেন</li>
            </ul>
          </div>
        </ExpandableSection>

        <ExpandableSection 
          id="adam" 
          title="১. আদম (আ.) - Adam (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={2}
        >
          <DuaItem>
            <h3>আদম (আ.) - প্রথম মানুষ ও প্রথম নবী</h3>
            <p className="arabic">
              <span className="arabic-text">آدَم</span>
              <AudioPlayer arabicText="آدَم" />
            </p>
            <p className="transliteration">Adam</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>আল্লাহর সৃষ্টি:</strong> আদম (আ.) হলেন আল্লাহর সৃষ্ট প্রথম মানুষ</li>
              <li><strong>জান্নাতে:</strong> আদম (আ.) এবং হাওয়া (আ.) জান্নাতে বসবাস করতেন</li>
              <li><strong>শয়তানের প্ররোচনা:</strong> শয়তানের প্ররোচনায় নিষিদ্ধ গাছের ফল খেয়েছিলেন</li>
              <li><strong>পৃথিবীতে প্রেরণ:</strong> এরপর তাদের পৃথিবীতে প্রেরণ করা হয়</li>
              <li><strong>তওবা:</strong> আদম (আ.) আল্লাহর কাছে তওবা করেছিিলেন এবং আল্লাহ তা কবুল করেছিিলেন</li>
              <li><strong>প্রথম নবী:</strong> আদম (আ.) হলেন প্রথম নবী</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">কুরআনের বিভিন্ন সূরায় আদম (আ.) এর কাহিনী বর্ণিত হয়েছে, বিশেষ করে সূরা আল-বাকারা, আল-আরাফ, আল-হিজর, ত্বাহা, ইয়াসিন ইত্যাদি।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="idris" 
          title="২. ইদ্রিস (আ.) - Idris (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={3}
        >
          <DuaItem>
            <h3>ইদ্রিস (আ.) - জ্ঞানী নবী</h3>
            <p className="arabic">
              <span className="arabic-text">إِدْرِيس</span>
              <AudioPlayer arabicText="إِدْرِيس" />
            </p>
            <p className="transliteration">Idris</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>জ্ঞানী নবী:</strong> ইদ্রিস (আ.) ছিলেন একজন জ্ঞানী নবী</li>
              <li><strong>লেখা-পড়া:</strong> তিনিই প্রথম মানুষ যিনি কলম দিয়ে লিখতে শিখেছিলেন</li>
              <li><strong>জ্যোতির্বিদ্যা:</strong> তিনি জ্যোতির্বিদ্যা, গণিত এবং অন্যান্য বিজ্ঞান শিক্ষা দিয়েছিলেন</li>
              <li><strong>আল্লাহর কাছে উত্থাপন:</strong> কুরআনে উল্লেখ আছে যে আল্লাহ তাকে উচ্চ মর্যাদায় উন্নীত করেছিিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="arabic">
              <span className="arabic-text">وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ ۚ إِنَّهُ كَانَ صِدِّيقًا نَّبِيًّا</span>
              <AudioPlayer arabicText="وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ ۚ إِنَّهُ كَانَ صِدِّيقًا نَّبِيًّا" />
            </p>
            <p className="transliteration">Wazkur fil kitabi Idris, innahu kana siddiqan nabiyya</p>
            <p className="translation"><strong>অনুবাদ:</strong> "আর এই কিতাবে ইদ্রিসের কথা স্মরণ করুন, তিনি ছিলেন সত্যবাদী নবী।" (সূরা মারইয়াম, আয়াত ৫৬-৫৭)</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="nuh" 
          title="৩. নূহ (আ.) - Nuh (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={4}
        >
          <DuaItem>
            <h3>নূহ (আ.) - প্রথম উলুল আযম রাসূল</h3>
            <p className="arabic">
              <span className="arabic-text">نُوح</span>
              <AudioPlayer arabicText="نُوح" />
            </p>
            <p className="transliteration">Nuh</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>দীর্ঘকাল দাওয়াত:</strong> নূহ (আ.) ৯৫০ বছর ধরে তার জাতিকে আল্লাহর দিকে আহ্বান করেছিিলেন</li>
              <li><strong>মূর্তিপূজা:</strong> তার জাতি মূর্তিপূজা করত</li>
              <li><strong>নৌকা নির্মাণ:</strong> আল্লাহর নির্দেশে তিনি একটি বিশাল নৌকা নির্মাণ করেছিিলেন</li>
              <li><strong>বন্যা:</strong> আল্লাহর নির্দেশে ভয়াবহ বন্যা এসেছিল</li>
              <li><strong>নৌকায় আরোহণ:</strong> নূহ (আ.) এবং বিশ্বাসীরা নৌকায় আরোহণ করেছিিলেন</li>
              <li><strong>কাফিরদের ধ্বংস:</strong> সমস্ত কাফির ডুবে মারা গিয়েছিল</li>
              <li><strong>উলুল আযম:</strong> নূহ (আ.) হলেন প্রথম উলুল আযম রাসূল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">কুরআনের সূরা নূহ সম্পূর্ণ নূহ (আ.) এর কাহিনী নিয়ে। এছাড়াও সূরা হুদ, আল-আরাফ, আল-মুমিনুন ইত্যাদিতে উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="hud" 
          title="৪. হুদ (আ.) - Hud (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={5}
        >
          <DuaItem>
            <h3>হুদ (আ.) - আদ জাতির নবী</h3>
            <p className="arabic">
              <span className="arabic-text">هُود</span>
              <AudioPlayer arabicText="هُود" />
            </p>
            <p className="transliteration">Hud</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>আদ জাতি:</strong> হুদ (আ.) আদ জাতির কাছে প্রেরিত হয়েছিলেন</li>
              <li><strong>শক্তিশালী জাতি:</strong> আদ জাতি ছিল শক্তিশালী এবং উন্নত সভ্যতার অধিকারী</li>
              <li><strong>মূর্তিপূজা:</strong> তারা মূর্তিপূজা করত</li>
              <li><strong>দাওয়াত:</strong> হুদ (আ.) তাদের আল্লাহর দিকে আহ্বান করেছিিলেন</li>
              <li><strong>অস্বীকার:</strong> তারা হুদ (আ.) এর দাওয়াত প্রত্যাখ্যান করেছিিল</li>
              <li><strong>শাস্তি:</strong> আল্লাহ তাদের উপর ভয়াবহ ঝড় পাঠিয়েছিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা হুদ, আল-আরাফ, আশ-শুআরা, আল-হাক্কাহ ইত্যাদিতে হুদ (আ.) এর কাহিনী বর্ণিত হয়েছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="salih" 
          title="৫. সালিহ (আ.) - Salih (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={6}
        >
          <DuaItem>
            <h3>সালিহ (আ.) - সামুদ জাতির নবী</h3>
            <p className="arabic">
              <span className="arabic-text">صَالِح</span>
              <AudioPlayer arabicText="صَالِح" />
            </p>
            <p className="transliteration">Salih</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>সামুদ জাতি:</strong> সালিহ (আ.) সামুদ জাতির কাছে প্রেরিত হয়েছিলেন</li>
              <li><strong>উন্নত সভ্যতা:</strong> তারা উন্নত সভ্যতার অধিকারী ছিল</li>
              <li><strong>মূর্তিপূজা:</strong> তারা মূর্তিপূজা করত</li>
              <li><strong>উটনী:</strong> আল্লাহর নির্দেশে একটি উটনী এসেছিল</li>
              <li><strong>হত্যা:</strong> তারা উটনীকে হত্যা করেছিিল</li>
              <li><strong>শাস্তি:</strong> আল্লাহ তাদের উপর ভয়াবহ শাস্তি পাঠিয়েছিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা হুদ, আল-আরাফ, আশ-শুআরা, আল-হাক্কাহ ইত্যাদিতে সালিহ (আ.) এর কাহিনী বর্ণিত হয়েছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="ibrahim" 
          title="৬. ইব্রাহিম (আ.) - Ibrahim (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={7}
        >
          <DuaItem>
            <h3>ইব্রাহিম (আ.) - খলীলুল্লাহ (আল্লাহর বন্ধু)</h3>
            <p className="arabic">
              <span className="arabic-text">إِبْرَاهِيم</span>
              <AudioPlayer arabicText="إِبْرَاهِيم" />
            </p>
            <p className="transliteration">Ibrahim</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>খলীলুল্লাহ:</strong> ইব্রাহিম (আ.) হলেন "খলীলুল্লাহ" (আল্লাহর বন্ধু)</li>
              <li><strong>মূর্তি ভাঙা:</strong> তিনি তার পিতার মূর্তি ভেঙে ফেলেছিলেন</li>
              <li><strong>নমরুদের সাথে বিতর্ক:</strong> তিনি নমরুদের সাথে আল্লাহ সম্পর্কে বিতর্ক করেছিিলেন</li>
              <li><strong>অগ্নিকুণ্ডে নিক্ষেপ:</strong> তাকে অগ্নিকুণ্ডে নিক্ষেপ করা হয়েছিল কিন্তু আল্লাহ তাকে রক্ষা করেছিিলেন</li>
              <li><strong>ইসমাঈল ও ইসহাক:</strong> তার দুই পুত্র ইসমাঈল (আ.) এবং ইসহাক (আ.) উভয়ই নবী ছিলেন</li>
              <li><strong>কাবা শরীফ:</strong> তিনি ইসমাঈল (আ.) এর সাথে কাবা শরীফ নির্মাণ করেছিিলেন</li>
              <li><strong>কুরবানী:</strong> তিনি আল্লাহর নির্দেশে ইসমাঈল (আ.) কে কুরবানী করতে যাচ্ছিলেন</li>
              <li><strong>উলুল আযম:</strong> ইব্রাহিম (আ.) হলেন উলুল আযম রাসূল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">কুরআনে ইব্রাহিম (আ.) এর কাহিনী বিস্তারিতভাবে বর্ণিত হয়েছে। সূরা আল-বাকারা, আল-ইমরান, আল-আনআম, ইব্রাহিম, আল-হাজ্জ, আশ-শুআরা ইত্যাদিতে উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="lut" 
          title="৭. লূত (আ.) - Lut (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={8}
        >
          <DuaItem>
            <h3>লূত (আ.) - সদম শহরের নবী</h3>
            <p className="arabic">
              <span className="arabic-text">لُوط</span>
              <AudioPlayer arabicText="لُوط" />
            </p>
            <p className="transliteration">Lut</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>ইব্রাহিম (আ.) এর ভাতিজা:</strong> লূত (আ.) ছিলেন ইব্রাহিম (আ.) এর ভাতিজা</li>
              <li><strong>সদম শহর:</strong> তিনি সদম শহরের লোকদের কাছে প্রেরিত হয়েছিলেন</li>
              <li><strong>পাপাচার:</strong> তারা ভয়াবহ পাপাচারে লিপ্ত ছিল</li>
              <li><strong>দাওয়াত:</strong> লূত (আ.) তাদের সৎপথে আহ্বান করেছিিলেন</li>
              <li><strong>অস্বীকার:</strong> তারা তার দাওয়াত প্রত্যাখ্যান করেছিিল</li>
              <li><strong>শাস্তি:</strong> আল্লাহ তাদের উপর পাথর বর্ষণ করেছিিলেন</li>
              <li><strong>রক্ষা:</strong> লূত (আ.) এবং তার পরিবার রক্ষা পেয়েছিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা হুদ, আল-আরাফ, আশ-শুআরা, আল-হিজর, আল-আনকাবুত ইত্যাদিতে লূত (আ.) এর কাহিনী বর্ণিত হয়েছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="ismail" 
          title="৮. ইসমাঈল (আ.) - Ismail (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={9}
        >
          <DuaItem>
            <h3>ইসমাঈল (আ.) - কুরবানীর নবী</h3>
            <p className="arabic">
              <span className="arabic-text">إِسْمَاعِيل</span>
              <AudioPlayer arabicText="إِسْمَاعِيل" />
            </p>
            <p className="transliteration">Ismail</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>ইব্রাহিম (আ.) এর পুত্র:</strong> ইসমাঈল (আ.) ছিলেন ইব্রাহিম (আ.) এর প্রথম পুত্র</li>
              <li><strong>হাজেরা (আ.):</strong> তার মাতা ছিলেন হাজেরা (আ.)</li>
              <li><strong>মক্কায় বসবাস:</strong> তিনি এবং তার মাতা মক্কায় বসবাস করতেন</li>
              <li><strong>জমজম:</strong> আল্লাহর রহমতে জমজম কূপের সৃষ্টি হয়েছিল</li>
              <li><strong>কুরবানী:</strong> আল্লাহর নির্দেশে ইব্রাহিম (আ.) তাকে কুরবানী করতে যাচ্ছিলেন</li>
              <li><strong>রক্ষা:</strong> আল্লাহ একটি দুম্বা পাঠিয়ে তাকে রক্ষা করেছিিলেন</li>
              <li><strong>কাবা শরীফ:</strong> তিনি ইব্রাহিম (আ.) এর সাথে কাবা শরীফ নির্মাণ করেছিিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-বাকারা, আল-ইমরান, ইব্রাহিম, মারইয়াম, আল-হাজ্জ ইত্যাদিতে ইসমাঈল (আ.) এর কাহিনী বর্ণিত হয়েছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="ishaq" 
          title="৯. ইসহাক (আ.) - Ishaq (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={10}
        >
          <DuaItem>
            <h3>ইসহাক (আ.) - ইব্রাহিম (আ.) এর পুত্র</h3>
            <p className="arabic">
              <span className="arabic-text">إِسْحَاق</span>
              <AudioPlayer arabicText="إِسْحَاق" />
            </p>
            <p className="transliteration">Ishaq</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>ইব্রাহিম (আ.) এর পুত্র:</strong> ইসহাক (আ.) ছিলেন ইব্রাহিম (আ.) এর দ্বিতীয় পুত্র</li>
              <li><strong>সারাহ (আ.):</strong> তার মাতা ছিলেন সারাহ (আ.)</li>
              <li><strong>বয়সে বৃদ্ধ:</strong> ইব্রাহিম (আ.) এবং সারাহ (আ.) বৃদ্ধ বয়সে ইসহাক (আ.) কে পেয়েছিলেন</li>
              <li><strong>ইয়াকুব (আ.):</strong> ইসহাক (আ.) এর পুত্র ইয়াকুব (আ.) ছিলেন নবী</li>
              <li><strong>বনী ইসরাঈল:</strong> ইসহাক (আ.) এর বংশধরগণ বনী ইসরাঈল নামে পরিচিত</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-বাকারা, আল-ইমরান, আল-আনআম, হুদ, ইব্রাহিম, মারইয়াম ইত্যাদিতে ইসহাক (আ.) এর উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="yaqub" 
          title="১০. ইয়াকুব (আ.) - Yaqub (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={11}
        >
          <DuaItem>
            <h3>ইয়াকুব (আ.) - ইসরাঈল (আ.)</h3>
            <p className="arabic">
              <span className="arabic-text">يَعْقُوب</span>
              <AudioPlayer arabicText="يَعْقُوب" />
            </p>
            <p className="transliteration">Yaqub</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>ইসরাঈল:</strong> ইয়াকুব (আ.) এর আরেক নাম হল ইসরাঈল</li>
              <li><strong>ইসহাক (আ.) এর পুত্র:</strong> তিনি ছিলেন ইসহাক (আ.) এর পুত্র</li>
              <li><strong>ইউসুফ (আ.):</strong> তার পুত্র ইউসুফ (আ.) ছিলেন নবী</li>
              <li><strong>বনী ইসরাঈল:</strong> তার বংশধরগণ বনী ইসরাঈল নামে পরিচিত</li>
              <li><strong>ধৈর্য:</strong> তিনি ছিলেন অত্যন্ত ধৈর্যশীল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-বাকারা, আল-ইমরান, আল-আনআম, ইউসুফ, মারইয়াম ইত্যাদিতে ইয়াকুব (আ.) এর উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="yusuf" 
          title="১১. ইউসুফ (আ.) - Yusuf (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={12}
        >
          <DuaItem>
            <h3>ইউসুফ (আ.) - সবচেয়ে সুন্দর কাহিনী</h3>
            <p className="arabic">
              <span className="arabic-text">يُوسُف</span>
              <AudioPlayer arabicText="يُوسُف" />
            </p>
            <p className="transliteration">Yusuf</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>ইয়াকুব (আ.) এর পুত্র:</strong> ইউসুফ (আ.) ছিলেন ইয়াকুব (আ.) এর প্রিয় পুত্র</li>
              <li><strong>স্বপ্ন:</strong> তিনি একটি স্বপ্ন দেখেছিলেন যে ১১টি তারকা, সূর্য ও চন্দ্র তার কাছে সিজদা করছে</li>
              <li><strong>ভাইদের ষড়যন্ত্র:</strong> তার ভাইয়েরা ঈর্ষান্বিত হয়ে তাকে কূপে ফেলে দিয়েছিল</li>
              <li><strong>মিসরে বিক্রি:</strong> তাকে মিসরে বিক্রি করা হয়েছিল</li>
              <li><strong>যুলায়খা:</strong> মিসরের মন্ত্রীর স্ত্রী যুলায়খা তার প্রতি আকৃষ্ট হয়েছিল</li>
              <li><strong>কারাগার:</strong> তাকে কারাগারে পাঠানো হয়েছিল</li>
              <li><strong>রাজা:</strong> পরে তিনি মিসরের রাজা হয়েছিলেন</li>
              <li><strong>পিতার সাথে মিলন:</strong> তিনি তার পিতা ইয়াকুব (আ.) এর সাথে মিলিত হয়েছিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা ইউসুফ সম্পূর্ণ ইউসুফ (আ.) এর কাহিনী নিয়ে। এটি কুরআনের সবচেয়ে সুন্দর কাহিনী।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="ayub" 
          title="১২. আইয়ুব (আ.) - Ayub (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={13}
        >
          <DuaItem>
            <h3>আইয়ুব (আ.) - ধৈর্যশীল নবী</h3>
            <p className="arabic">
              <span className="arabic-text">أَيُّوب</span>
              <AudioPlayer arabicText="أَيُّوب" />
            </p>
            <p className="transliteration">Ayub</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>ধৈর্যশীল:</strong> আইয়ুব (আ.) ছিলেন অত্যন্ত ধৈর্যশীল</li>
              <li><strong>সম্পদশালী:</strong> তিনি ছিলেন অত্যন্ত সম্পদশালী</li>
              <li><strong>পরীক্ষা:</strong> আল্লাহ তাকে কঠিন পরীক্ষায় ফেলেছিলেন</li>
              <li><strong>রোগ:</strong> তিনি গুরুতর রোগে আক্রান্ত হয়েছিলেন</li>
              <li><strong>সম্পদ হারানো:</strong> তার সব সম্পদ হারিয়ে গিয়েছিল</li>
              <li><strong>ধৈর্য:</strong> তিনি সব পরীক্ষায় ধৈর্য ধারণ করেছিিলেন</li>
              <li><strong>আরোগ্য:</strong> আল্লাহ তাকে আরোগ্য দান করেছিিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-আনআম, আল-আম্বিয়া, সাদ ইত্যাদিতে আইয়ুব (আ.) এর উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="shuaib" 
          title="১৩. শুআইব (আ.) - Shuaib (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={14}
        >
          <DuaItem>
            <h3>শুআইব (আ.) - মাদইয়ান জাতির নবী</h3>
            <p className="arabic">
              <span className="arabic-text">شُعَيْب</span>
              <AudioPlayer arabicText="شُعَيْب" />
            </p>
            <p className="transliteration">Shuaib</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>মাদইয়ান জাতি:</strong> শুআইব (আ.) মাদইয়ান জাতির কাছে প্রেরিত হয়েছিলেন</li>
              <li><strong>অনুপাতহীনতা:</strong> তারা ব্যবসায়ে মাপে কম দিত</li>
              <li><strong>দাওয়াত:</strong> শুআইব (আ.) তাদের সৎপথে আহ্বান করেছিিলেন</li>
              <li><strong>অস্বীকার:</strong> তারা তার দাওয়াত প্রত্যাখ্যান করেছিিল</li>
              <li><strong>শাস্তি:</strong> আল্লাহ তাদের উপর ভয়াবহ শাস্তি পাঠিয়েছিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা হুদ, আল-আরাফ, আশ-শুআরা, আল-আনকাবুত ইত্যাদিতে শুআইব (আ.) এর কাহিনী বর্ণিত হয়েছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="musa" 
          title="১৪. মুসা (আ.) - Musa (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={15}
        >
          <DuaItem>
            <h3>মুসা (আ.) - কালীমুল্লাহ (আল্লাহর সাথে কথা বলা ব্যক্তি)</h3>
            <p className="arabic">
              <span className="arabic-text">مُوسَى</span>
              <AudioPlayer arabicText="مُوسَى" />
            </p>
            <p className="transliteration">Musa</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>কালীমুল্লাহ:</strong> মুসা (আ.) হলেন "কালীমুল্লাহ" (যিনি আল্লাহর সাথে কথা বলেছেন)</li>
              <li><strong>ফেরাউনের প্রাসাদ:</strong> তিনি ফেরাউনের প্রাসাদে বেড়ে উঠেছিলেন</li>
              <li><strong>মিসর ত্যাগ:</strong> তিনি মিসর ত্যাগ করেছিিলেন</li>
              <li><strong>ওহী প্রাপ্তি:</strong> তিনি তুর পাহাড়ে আল্লাহর কাছ থেকে ওহী পেয়েছিলেন</li>
              <li><strong>তাওরাত:</strong> আল্লাহ তাকে তাওরাত (Torah) দান করেছিিলেন</li>
              <li><strong>ফেরাউনের সাথে:</strong> তিনি ফেরাউনের সাথে বিতর্ক করেছিিলেন</li>
              <li><strong>লোহিত সাগর:</strong> আল্লাহর নির্দেশে লোহিত সাগর দ্বিখণ্ডিত হয়েছিল</li>
              <li><strong>ফেরাউনের ধ্বংস:</strong> ফেরাউন এবং তার সৈন্যরা ডুবে মারা গিয়েছিল</li>
              <li><strong>বনী ইসরাঈল:</strong> তিনি বনী ইসরাঈলকে মুক্ত করেছিিলেন</li>
              <li><strong>উলুল আযম:</strong> মুসা (আ.) হলেন উলুল আযম রাসূল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">কুরআনে মুসা (আ.) এর কাহিনী সবচেয়ে বেশি বর্ণিত হয়েছে। সূরা আল-বাকারা, আল-আরাফ, ইউনুস, ত্বাহা, আশ-শুআরা, আল-কাসাস ইত্যাদিতে বিস্তারিতভাবে উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="harun" 
          title="১৫. হারুন (আ.) - Harun (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={16}
        >
          <DuaItem>
            <h3>হারুন (আ.) - মুসা (আ.) এর ভাই</h3>
            <p className="arabic">
              <span className="arabic-text">هَارُون</span>
              <AudioPlayer arabicText="هَارُون" />
            </p>
            <p className="transliteration">Harun</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>মুসা (আ.) এর ভাই:</strong> হারুন (আ.) ছিলেন মুসা (আ.) এর বড় ভাই</li>
              <li><strong>সহায়ক:</strong> তিনি মুসা (আ.) এর সহায়ক হিসেবে কাজ করেছিিলেন</li>
              <li><strong>বাকপটু:</strong> তিনি ছিলেন বাকপটু</li>
              <li><strong>বনী ইসরাঈল:</strong> তিনি বনী ইসরাঈলকে নেতৃত্ব দিয়েছিলেন</li>
              <li><strong>মূর্তি:</strong> মুসা (আ.) এর অনুপস্থিতিতে বনী ইসরাঈল একটি বাছুরের মূর্তি তৈরি করেছিিল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-আরাফ, ত্বাহা, আশ-শুআরা, আল-কাসাস ইত্যাদিতে হারুন (আ.) এর উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="dawud" 
          title="১৬. দাউদ (আ.) - Dawud (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={17}
        >
          <DuaItem>
            <h3>দাউদ (আ.) - যাবুরের নবী</h3>
            <p className="arabic">
              <span className="arabic-text">دَاوُود</span>
              <AudioPlayer arabicText="دَاوُود" />
            </p>
            <p className="transliteration">Dawud</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>যাবুর:</strong> আল্লাহ তাকে যাবুর (Psalms) দান করেছিিলেন</li>
              <li><strong>রাজা:</strong> তিনি ছিলেন বনী ইসরাঈলের রাজা</li>
              <li><strong>জালুত:</strong> তিনি জালুত (Goliath) কে হত্যা করেছিিলেন</li>
              <li><strong>লোহা নরম করা:</strong> আল্লাহ তার জন্য লোহা নরম করেছিিলেন</li>
              <li><strong>সুন্দর কণ্ঠ:</strong> তার কণ্ঠ ছিল অত্যন্ত সুন্দর</li>
              <li><strong>সুলাইমান (আ.):</strong> তার পুত্র সুলাইমান (আ.) ছিলেন নবী</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-বাকারা, আল-আনআম, আল-আম্বিয়া, সাদ, আল-ইসরা ইত্যাদিতে দাউদ (আ.) এর উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="sulaiman" 
          title="১৭. সুলাইমান (আ.) - Sulaiman (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={18}
        >
          <DuaItem>
            <h3>সুলাইমান (আ.) - রাজত্বের নবী</h3>
            <p className="arabic">
              <span className="arabic-text">سُلَيْمَان</span>
              <AudioPlayer arabicText="سُلَيْمَان" />
            </p>
            <p className="transliteration">Sulaiman</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>দাউদ (আ.) এর পুত্র:</strong> সুলাইমান (আ.) ছিলেন দাউদ (আ.) এর পুত্র</li>
              <li><strong>রাজত্ব:</strong> আল্লাহ তাকে বিশাল রাজত্ব দান করেছিিলেন</li>
              <li><strong>জিনদের নিয়ন্ত্রণ:</strong> তিনি জিনদের নিয়ন্ত্রণ করতে পারতেন</li>
              <li><strong>পশু-পাখির ভাষা:</strong> তিনি পশু-পাখির ভাষা বুঝতে পারতেন</li>
              <li><strong>বিলকিস:</strong> তিনি সাবা দেশের রাণী বিলকিসের সাথে দেখা করেছিিলেন</li>
              <li><strong>মসজিদ আল-আকসা:</strong> তিনি মসজিদ আল-আকসা নির্মাণ করেছিিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-আনআম, আল-আম্বিয়া, সাদ, আন-নামল, সাবা ইত্যাদিতে সুলাইমান (আ.) এর কাহিনী বর্ণিত হয়েছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="ilyas" 
          title="১৮. ইলিয়াস (আ.) - Ilyas (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={19}
        >
          <DuaItem>
            <h3>ইলিয়াস (আ.) - বালের উপাসকদের নবী</h3>
            <p className="arabic">
              <span className="arabic-text">إِلْيَاس</span>
              <AudioPlayer arabicText="إِلْيَاس" />
            </p>
            <p className="transliteration">Ilyas</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>বালের উপাসক:</strong> ইলিয়াস (আ.) বালের উপাসকদের কাছে প্রেরিত হয়েছিলেন</li>
              <li><strong>মূর্তিপূজা:</strong> তারা মূর্তিপূজা করত</li>
              <li><strong>দাওয়াত:</strong> ইলিয়াস (আ.) তাদের আল্লাহর দিকে আহ্বান করেছিিলেন</li>
              <li><strong>অস্বীকার:</strong> তারা তার দাওয়াত প্রত্যাখ্যান করেছিিল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-আনআম, আস-সাফফাত, আল-আম্বিয়া ইত্যাদিতে ইলিয়াস (আ.) এর উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="alyasa" 
          title="১৯. আল-ইয়াসা (আ.) - Alyasa (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={20}
        >
          <DuaItem>
            <h3>আল-ইয়াসা (আ.) - ইলিয়াস (আ.) এর পরবর্তী নবী</h3>
            <p className="arabic">
              <span className="arabic-text">الْيَسَع</span>
              <AudioPlayer arabicText="الْيَسَع" />
            </p>
            <p className="transliteration">Alyasa</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>ইলিয়াস (আ.) এর পর:</strong> আল-ইয়াসা (আ.) ইলিয়াস (আ.) এর পরবর্তী নবী ছিলেন</li>
              <li><strong>বনী ইসরাঈল:</strong> তিনি বনী ইসরাঈলের কাছে প্রেরিত হয়েছিলেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-আনআম, আস-সাফফাত, আল-আম্বিয়া ইত্যাদিতে আল-ইয়াসা (আ.) এর উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="yunus" 
          title="২০. ইউনুস (আ.) - Yunus (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={21}
        >
          <DuaItem>
            <h3>ইউনুস (আ.) - মাছের পেটে</h3>
            <p className="arabic">
              <span className="arabic-text">يُونُس</span>
              <AudioPlayer arabicText="يُونُس" />
            </p>
            <p className="transliteration">Yunus</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>নিনাওয়া:</strong> ইউনুস (আ.) নিনাওয়া শহরের লোকদের কাছে প্রেরিত হয়েছিলেন</li>
              <li><strong>তরক:</strong> তিনি আল্লাহর অনুমতি ছাড়াই শহর ত্যাগ করেছিিলেন</li>
              <li><strong>সমুদ্রে নিক্ষেপ:</strong> তাকে সমুদ্রে নিক্ষেপ করা হয়েছিল</li>
              <li><strong>মাছের পেটে:</strong> একটি বড় মাছ তাকে গিলে ফেলেছিল</li>
              <li><strong>দোয়া:</strong> তিনি মাছের পেটে থেকে আল্লাহর কাছে দোয়া করেছিিলেন</li>
              <li><strong>রক্ষা:</strong> আল্লাহ তাকে রক্ষা করেছিিলেন</li>
              <li><strong>নিনাওয়ায় ফিরে:</strong> তিনি নিনাওয়ায় ফিরে গিয়েছিলেন</li>
              <li><strong>তওবা কবুল:</strong> নিনাওয়ার লোকদের তওবা কবুল হয়েছিল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা ইউনুস, আল-আনআম, আস-সাফফাত, আল-আম্বিয়া ইত্যাদিতে ইউনুস (আ.) এর কাহিনী বর্ণিত হয়েছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="zakariya" 
          title="২১. যাকারিয়া (আ.) - Zakariya (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={22}
        >
          <DuaItem>
            <h3>যাকারিয়া (আ.) - ইয়াহইয়া (আ.) এর পিতা</h3>
            <p className="arabic">
              <span className="arabic-text">زَكَرِيَّا</span>
              <AudioPlayer arabicText="زَكَرِيَّا" />
            </p>
            <p className="transliteration">Zakariya</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>বৃদ্ধ বয়স:</strong> যাকারিয়া (আ.) বৃদ্ধ বয়সে ছিলেন</li>
              <li><strong>সন্তানহীন:</strong> তার কোনো সন্তান ছিল না</li>
              <li><strong>দোয়া:</strong> তিনি আল্লাহর কাছে সন্তানের জন্য দোয়া করেছিিলেন</li>
              <li><strong>ইয়াহইয়া (আ.):</strong> আল্লাহ তাকে ইয়াহইয়া (আ.) দান করেছিিলেন</li>
              <li><strong>মারইয়াম (আ.):</strong> তিনি মারইয়াম (আ.) এর দেখাশোনা করতেন</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-ইমরান, আল-আনআম, মারইয়াম, আল-আম্বিয়া ইত্যাদিতে যাকারিয়া (আ.) এর কাহিনী বর্ণিত হয়েছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="yahya" 
          title="২২. ইয়াহইয়া (আ.) - Yahya (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={23}
        >
          <DuaItem>
            <h3>ইয়াহইয়া (আ.) - যাকারিয়া (আ.) এর পুত্র</h3>
            <p className="arabic">
              <span className="arabic-text">يَحْيَى</span>
              <AudioPlayer arabicText="يَحْيَى" />
            </p>
            <p className="transliteration">Yahya</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>যাকারিয়া (আ.) এর পুত্র:</strong> ইয়াহইয়া (আ.) ছিলেন যাকারিয়া (আ.) এর পুত্র</li>
              <li><strong>বৃদ্ধ বয়সে জন্ম:</strong> তিনি বৃদ্ধ বয়সে জন্মগ্রহণ করেছিিলেন</li>
              <li><strong>ঈসা (আ.) এর সমকালীন:</strong> তিনি ঈসা (আ.) এর সমকালীন ছিলেন</li>
              <li><strong>তাকওয়া:</strong> তিনি ছিলেন অত্যন্ত তাকওয়াশীল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সূরা আল-ইমরান, আল-আনআম, মারইয়াম, আল-আম্বিয়া ইত্যাদিতে ইয়াহইয়া (আ.) এর উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="isa" 
          title="২৩. ঈসা (আ.) - Isa (A.S.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={24}
        >
          <DuaItem>
            <h3>ঈসা (আ.) - রুহুল্লাহ (আল্লাহর রূহ) ও মাসিহ</h3>
            <p className="arabic">
              <span className="arabic-text">عِيسَى</span>
              <AudioPlayer arabicText="عِيسَى" />
            </p>
            <p className="transliteration">Isa</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>রুহুল্লাহ:</strong> ঈসা (আ.) হলেন "রুহুল্লাহ" (আল্লাহর রূহ)</li>
              <li><strong>মারইয়াম (আ.):</strong> তার মাতা ছিলেন মারইয়াম (আ.)</li>
              <li><strong>অলৌকিক জন্ম:</strong> তিনি অলৌকিকভাবে জন্মগ্রহণ করেছিিলেন</li>
              <li><strong>ইঞ্জিল:</strong> আল্লাহ তাকে ইঞ্জিল (Gospel) দান করেছিিলেন</li>
              <li><strong>অলৌকিক কাজ:</strong> তিনি অন্ধকে চক্ষুদান, মৃতকে জীবিত করা ইত্যাদি অলৌকিক কাজ করেছিিলেন</li>
              <li><strong>আসমানে উঠানো:</strong> আল্লাহ তাকে আসমানে উঠিয়ে নিয়েছিলেন</li>
              <li><strong>দ্বিতীয় আগমন:</strong> তিনি কিয়ামতের আগে আবার পৃথিবীতে আসবেন</li>
              <li><strong>উলুল আযম:</strong> ঈসা (আ.) হলেন উলুল আযম রাসূল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">কুরআনে ঈসা (আ.) এর কাহিনী বিস্তারিতভাবে বর্ণিত হয়েছে। সূরা আল-ইমরান, আল-মায়িদাহ, মারইয়াম, আল-আম্বিয়া, আয-যুখরুফ ইত্যাদিতে উল্লেখ আছে।</p>
          </DuaItem>
        </ExpandableSection>

        <ExpandableSection 
          id="muhammad" 
          title="২৪. মুহাম্মদ (সা.) - Muhammad (S.A.W.)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={25}
        >
          <DuaItem>
            <h3>মুহাম্মদ (সা.) - শেষ নবী ও রাসূল</h3>
            <p className="arabic">
              <span className="arabic-text">مُحَمَّد</span>
              <AudioPlayer arabicText="مُحَمَّد" />
            </p>
            <p className="transliteration">Muhammad</p>
            
            <h4>ইতিহাস ও বর্ণনা:</h4>
            <ul className="list-spaced">
              <li><strong>খাতামুন নাবিয়্যীন:</strong> মুহাম্মদ (সা.) হলেন "খাতামুন নাবিয়্যীন" (সকল নবীর শেষ)</li>
              <li><strong>রাহমাতুল্লিল আলামীন:</strong> তিনি হলেন "রাহমাতুল্লিল আলামীন" (সকল জগতের জন্য রহমত)</li>
              <li><strong>জন্ম:</strong> ৫৭০ খ্রিস্টাব্দে মক্কায় জন্মগ্রহণ করেছিিলেন</li>
              <li><strong>ওহী প্রাপ্তি:</strong> ৪০ বছর বয়সে তিনি প্রথম ওহী পেয়েছিলেন</li>
              <li><strong>কুরআন:</strong> আল্লাহ তাকে কুরআন দান করেছিিলেন</li>
              <li><strong>মক্কা থেকে মদিনা:</strong> তিনি মক্কা থেকে মদিনায় হিজরত করেছিিলেন</li>
              <li><strong>ইসলামের বিজয়:</strong> তিনি ইসলামকে সমগ্র আরবে প্রতিষ্ঠিত করেছিিলেন</li>
              <li><strong>ওফাত:</strong> ৬৩ বছর বয়সে তিনি ওফাত প্রাপ্ত হয়েছিলেন</li>
              <li><strong>উলুল আযম:</strong> মুহাম্মদ (সা.) হলেন সর্বশেষ উলুল আযম রাসূল</li>
            </ul>

            <h4>কুরআনে উল্লেখ:</h4>
            <p className="info-text">সমগ্র কুরআনই মুহাম্মদ (সা.) এর উপর অবতীর্ণ হয়েছে। সূরা মুহাম্মদ, আল-ফাতহ, আল-হুজুরাত ইত্যাদিতে সরাসরি উল্লেখ আছে।</p>

            <InfoBox variant="green" className="mt-md">
              <h4>💡 গুরুত্বপূর্ণ</h4>
              <p>মুহাম্মদ (সা.) হলেন সর্বশেষ নবী ও রাসূল। তার পরে কোনো নবী আসবেন না। ইসলাম হল সর্বশেষ এবং পূর্ণাঙ্গ দ্বীন।</p>
            </InfoBox>
          </DuaItem>
        </ExpandableSection>

        <InfoBox variant="blue" className="mt-lg">
          <h4>📚 নবী-রাসূলদের উপর দরুদ</h4>
          <p>রাসূলুল্লাহ (সা.) বলেছেন: "যে ব্যক্তি আমার উপর একবার দরুদ পাঠ করে, আল্লাহ তার উপর দশবার রহমত পাঠান।"</p>
          <p className="arabic">
              <span className="arabic-text">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ</span>
              <AudioPlayer arabicText="اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ" />
            </p>
          <p className="transliteration">Allahumma salli ala Muhammadin wa ala ali Muhammad</p>
        </InfoBox>
      </SectionWrapper>
    </>
  )
}

