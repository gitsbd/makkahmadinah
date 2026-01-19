import PageHeader from '@/components/PageHeader'
import SectionWrapper from '@/components/SectionWrapper'
import InfoBox from '@/components/InfoBox'
import ExpandableSection from '@/components/ExpandableSection'
import AudioPlayer from '@/components/AudioPlayer'
import { createArabicTitle } from '@/utils/arabicTitle'

export default function Quran() {
  return (
    <>
      <PageHeader 
        title="পবিত্র কুরআন (Holy Qur'an)"
        subtitle="আল্লাহর বাণী"
        sectionCount={1}
      />

      <SectionWrapper className="duas-section">
        <ExpandableSection 
          id="quran-intro" 
          title={createArabicTitle("কুরআন সম্পর্কে", "عن القرآن", "ʿAn al-Qurʾān")}
          defaultOpen={true}
          className="dua-category-wrapper"
          number={1}
        >
          <div className="dua-item">
            <InfoBox variant="blue">
              <h4>📖 পবিত্র কুরআন</h4>
              <p>কুরআন হল ইসলামের পবিত্র গ্রন্থ, যা আল্লাহ তায়ালা হযরত মুহাম্মদ (সা.) এর উপর অবতীর্ণ করেছেন। এটি মানবজাতির জন্য পথনির্দেশিকা।</p>
            </InfoBox>

            <h3>কুরআনের গুরুত্ব</h3>
            <ul className="list-spaced">
              <li><strong>আল্লাহর বাণী:</strong> কুরআন হল আল্লাহর সরাসরি বাণী</li>
              <li><strong>পথনির্দেশিকা:</strong> মানবজাতির জন্য পূর্ণাঙ্গ জীবন বিধান</li>
              <li><strong>আলো:</strong> অন্ধকার থেকে আলোর দিকে পথ দেখায়</li>
              <li><strong>রহমত:</strong> বিশ্বাসীদের জন্য রহমত</li>
              <li><strong>সুসংবাদ:</strong> মুমিনদের জন্য সুসংবাদ</li>
            </ul>

            <h3>কুরআন পাঠের ফজিলত</h3>
            <p>রাসূলুল্লাহ (সা.) বলেছেন:</p>
            <p className="arabic">
              <span className="arabic-text">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</span>
              <AudioPlayer arabicText="خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ" />
            </p>
            <p className="transliteration">Khayrukum man ta'allamal Qur'ana wa 'allamahu</p>
            <p className="translation"><strong>অনুবাদ:</strong> "তোমাদের মধ্যে সর্বোত্তম ব্যক্তি হল সে যে কুরআন শিখে এবং অন্যকে শেখায়।" (সহীহ বুখারী)</p>

            <InfoBox variant="green" className="mt-md">
              <h4>💡 পরামর্শ</h4>
              <p>কুরআন পাঠ করা, বুঝা, এবং আমল করা প্রতিটি মুসলমানের কর্তব্য। প্রতিদিন কিছু সময় কুরআন পাঠ করুন এবং এর অর্থ বুঝার চেষ্টা করুন।</p>
            </InfoBox>

            <h3>কুরআনের বৈশিষ্ট্য</h3>
            <ul className="list-spaced">
              <li><strong>৩০ পারা:</strong> কুরআন ৩০ পারায় বিভক্ত</li>
              <li><strong>১১৪ সূরা:</strong> মোট ১১৪টি সূরা</li>
              <li><strong>৬,২৩৬ আয়াত:</strong> মোট ৬,২৩৬টি আয়াত</li>
              <li><strong>আরবি ভাষায়:</strong> মূল কুরআন আরবি ভাষায়</li>
              <li><strong>অনুবাদ:</strong> বিভিন্ন ভাষায় অনুবাদ করা হয়েছে</li>
            </ul>

            <h3>কুরআন পাঠের আদব</h3>
            <ul className="list-spaced">
              <li>ওজু করে কুরআন স্পর্শ করা</li>
              <li>কিবলার দিকে মুখ করে বসা</li>
              <li>আস্তে আস্তে এবং স্পষ্টভাবে পাঠ করা</li>
              <li>কুরআনের অর্থ চিন্তা করা</li>
              <li>বিসমিল্লাহির রহমানির রহিম দিয়ে শুরু করা</li>
            </ul>
          </div>
        </ExpandableSection>
      </SectionWrapper>
    </>
  )
}

