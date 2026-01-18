import PageHeader from '@/components/PageHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ExpandableSection from '@/components/ExpandableSection'
import ArabicNumberItem from '@/components/ArabicNumberItem'
import NumberConverter from '@/components/NumberConverter'
import AudioPlayer from '@/components/AudioPlayer'

export default function ArabicLearning() {
  // Helper function to convert number to Arabic-Indic numerals
  const toArabicIndic = (num) => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
    return num.toString().split('').map(digit => arabicDigits[parseInt(digit)]).join('')
  }

  // Arabic numbers (0-100) with English and Bangla pronunciations
  const arabicNumbers = [
    // 0
    { number: '0', arabicNumber: '٠', arabicName: 'صِفْر', english: 'Sifr', bangla: "সিফর" },
    // 1-9
    { number: '1', arabicNumber: '١', arabicName: 'وَاحِد', english: 'Wahid', bangla: "ওয়াহিদ" },
    { number: '2', arabicNumber: '٢', arabicName: 'اِثْنَان', english: 'Ithnan', bangla: "ইসনান" },
    { number: '3', arabicNumber: '٣', arabicName: 'ثَلَاثَة', english: 'Thalatha', bangla: "থালাসা" },
    { number: '4', arabicNumber: '٤', arabicName: 'أَرْبَعَة', english: "Arba'a", bangla: "আরবাআ" },
    { number: '5', arabicNumber: '٥', arabicName: 'خَمْسَة', english: 'Khamsa', bangla: "খামসা" },
    { number: '6', arabicNumber: '٦', arabicName: 'سِتَّة', english: 'Sitta', bangla: "সিত্তা" },
    { number: '7', arabicNumber: '٧', arabicName: 'سَبْعَة', english: "Sab'a", bangla: "সাবআ" },
    { number: '8', arabicNumber: '٨', arabicName: 'ثَمَانِيَة', english: 'Thamaniya', bangla: "থামানিয়া" },
    { number: '9', arabicNumber: '٩', arabicName: 'تِسْعَة', english: "Tis'a", bangla: "তিসআ" },
    // 10-19
    { number: '10', arabicNumber: '١٠', arabicName: 'عَشَرَة', english: 'Ashara', bangla: "আশারা" },
    { number: '11', arabicNumber: '١١', arabicName: 'أَحَدَ عَشَر', english: "Ahada 'ashar", bangla: "আহাদা আশার" },
    { number: '12', arabicNumber: '١٢', arabicName: 'اِثْنَا عَشَر', english: "Ithna 'ashar", bangla: "ইসনা আশার" },
    { number: '13', arabicNumber: '١٣', arabicName: 'ثَلَاثَةَ عَشَر', english: "Thalathata 'ashar", bangla: "থালাসাতা আশার" },
    { number: '14', arabicNumber: '١٤', arabicName: 'أَرْبَعَةَ عَشَر', english: "Arba'ata 'ashar", bangla: "আরবাআতা আশার" },
    { number: '15', arabicNumber: '١٥', arabicName: 'خَمْسَةَ عَشَر', english: "Khamsata 'ashar", bangla: "খামসাতা আশার" },
    { number: '16', arabicNumber: '١٦', arabicName: 'سِتَّةَ عَشَر', english: "Sittata 'ashar", bangla: "সিত্তাতা আশার" },
    { number: '17', arabicNumber: '١٧', arabicName: 'سَبْعَةَ عَشَر', english: "Sab'ata 'ashar", bangla: "সাবআতা আশার" },
    { number: '18', arabicNumber: '١٨', arabicName: 'ثَمَانِيَةَ عَشَر', english: "Thamaniyata 'ashar", bangla: "থামানিয়াতা আশার" },
    { number: '19', arabicNumber: '١٩', arabicName: 'تِسْعَةَ عَشَر', english: "Tis'ata 'ashar", bangla: "তিসআতা আশার" },
    // 20-29
    { number: '20', arabicNumber: '٢٠', arabicName: 'عِشْرُونَ', english: 'Ishrun', bangla: "ইশরুন" },
    { number: '21', arabicNumber: '٢١', arabicName: 'وَاحِدٌ وَعِشْرُونَ', english: "Wahidun wa 'ishrun", bangla: "ওয়াহিদুন ওয়া ইশরুন" },
    { number: '22', arabicNumber: '٢٢', arabicName: 'اِثْنَانِ وَعِشْرُونَ', english: "Ithnani wa 'ishrun", bangla: "ইসনানি ওয়া ইশরুন" },
    { number: '23', arabicNumber: '٢٣', arabicName: 'ثَلَاثَةٌ وَعِشْرُونَ', english: "Thalathatun wa 'ishrun", bangla: "থালাসাতুন ওয়া ইশরুন" },
    { number: '24', arabicNumber: '٢٤', arabicName: 'أَرْبَعَةٌ وَعِشْرُونَ', english: "Arba'atun wa 'ishrun", bangla: "আরবাআতুন ওয়া ইশরুন" },
    { number: '25', arabicNumber: '٢٥', arabicName: 'خَمْسَةٌ وَعِشْرُونَ', english: "Khamsatun wa 'ishrun", bangla: "খামসাতুন ওয়া ইশরুন" },
    { number: '26', arabicNumber: '٢٦', arabicName: 'سِتَّةٌ وَعِشْرُونَ', english: "Sittatun wa 'ishrun", bangla: "সিত্তাতুন ওয়া ইশরুন" },
    { number: '27', arabicNumber: '٢٧', arabicName: 'سَبْعَةٌ وَعِشْرُونَ', english: "Sab'atun wa 'ishrun", bangla: "সাবআতুন ওয়া ইশরুন" },
    { number: '28', arabicNumber: '٢٨', arabicName: 'ثَمَانِيَةٌ وَعِشْرُونَ', english: "Thamaniyatun wa 'ishrun", bangla: "থামানিয়াতুন ওয়া ইশরুন" },
    { number: '29', arabicNumber: '٢٩', arabicName: 'تِسْعَةٌ وَعِشْرُونَ', english: "Tis'atun wa 'ishrun", bangla: "তিসআতুন ওয়া ইশরুন" },
    // 30-39
    { number: '30', arabicNumber: '٣٠', arabicName: 'ثَلَاثُونَ', english: 'Thalathun', bangla: "থালাসুন" },
    { number: '31', arabicNumber: '٣١', arabicName: 'وَاحِدٌ وَثَلَاثُونَ', english: "Wahidun wa thalathun", bangla: "ওয়াহিদুন ওয়া থালাসুন" },
    { number: '32', arabicNumber: '٣٢', arabicName: 'اِثْنَانِ وَثَلَاثُونَ', english: "Ithnani wa thalathun", bangla: "ইসনানি ওয়া থালাসুন" },
    { number: '33', arabicNumber: '٣٣', arabicName: 'ثَلَاثَةٌ وَثَلَاثُونَ', english: "Thalathatun wa thalathun", bangla: "থালাসাতুন ওয়া থালাসুন" },
    { number: '34', arabicNumber: '٣٤', arabicName: 'أَرْبَعَةٌ وَثَلَاثُونَ', english: "Arba'atun wa thalathun", bangla: "আরবাআতুন ওয়া থালাসুন" },
    { number: '35', arabicNumber: '٣٥', arabicName: 'خَمْسَةٌ وَثَلَاثُونَ', english: "Khamsatun wa thalathun", bangla: "খামসাতুন ওয়া থালাসুন" },
    { number: '36', arabicNumber: '٣٦', arabicName: 'سِتَّةٌ وَثَلَاثُونَ', english: "Sittatun wa thalathun", bangla: "সিত্তাতুন ওয়া থালাসুন" },
    { number: '37', arabicNumber: '٣٧', arabicName: 'سَبْعَةٌ وَثَلَاثُونَ', english: "Sab'atun wa thalathun", bangla: "সাবআতুন ওয়া থালাসুন" },
    { number: '38', arabicNumber: '٣٨', arabicName: 'ثَمَانِيَةٌ وَثَلَاثُونَ', english: "Thamaniyatun wa thalathun", bangla: "থামানিয়াতুন ওয়া থালাসুন" },
    { number: '39', arabicNumber: '٣٩', arabicName: 'تِسْعَةٌ وَثَلَاثُونَ', english: "Tis'atun wa thalathun", bangla: "তিসআতুন ওয়া থালাসুন" },
    // 40-49
    { number: '40', arabicNumber: '٤٠', arabicName: 'أَرْبَعُونَ', english: "Arba'un", bangla: "আরবাউন" },
    { number: '41', arabicNumber: '٤١', arabicName: 'وَاحِدٌ وَأَرْبَعُونَ', english: "Wahidun wa arba'un", bangla: "ওয়াহিদুন ওয়া আরবাউন" },
    { number: '42', arabicNumber: '٤٢', arabicName: 'اِثْنَانِ وَأَرْبَعُونَ', english: "Ithnani wa arba'un", bangla: "ইসনানি ওয়া আরবাউন" },
    { number: '43', arabicNumber: '٤٣', arabicName: 'ثَلَاثَةٌ وَأَرْبَعُونَ', english: "Thalathatun wa arba'un", bangla: "থালাসাতুন ওয়া আরবাউন" },
    { number: '44', arabicNumber: '٤٤', arabicName: 'أَرْبَعَةٌ وَأَرْبَعُونَ', english: "Arba'atun wa arba'un", bangla: "আরবাআতুন ওয়া আরবাউন" },
    { number: '45', arabicNumber: '٤٥', arabicName: 'خَمْسَةٌ وَأَرْبَعُونَ', english: "Khamsatun wa arba'un", bangla: "খামসাতুন ওয়া আরবাউন" },
    { number: '46', arabicNumber: '٤٦', arabicName: 'سِتَّةٌ وَأَرْبَعُونَ', english: "Sittatun wa arba'un", bangla: "সিত্তাতুন ওয়া আরবাউন" },
    { number: '47', arabicNumber: '٤٧', arabicName: 'سَبْعَةٌ وَأَرْبَعُونَ', english: "Sab'atun wa arba'un", bangla: "সাবআতুন ওয়া আরবাউন" },
    { number: '48', arabicNumber: '٤٨', arabicName: 'ثَمَانِيَةٌ وَأَرْبَعُونَ', english: "Thamaniyatun wa arba'un", bangla: "থামানিয়াতুন ওয়া আরবাউন" },
    { number: '49', arabicNumber: '٤٩', arabicName: 'تِسْعَةٌ وَأَرْبَعُونَ', english: "Tis'atun wa arba'un", bangla: "তিসআতুন ওয়া আরবাউন" },
    // 50-59
    { number: '50', arabicNumber: '٥٠', arabicName: 'خَمْسُونَ', english: 'Khamsun', bangla: "খামসুন" },
    { number: '51', arabicNumber: '٥١', arabicName: 'وَاحِدٌ وَخَمْسُونَ', english: "Wahidun wa khamsun", bangla: "ওয়াহিদুন ওয়া খামসুন" },
    { number: '52', arabicNumber: '٥٢', arabicName: 'اِثْنَانِ وَخَمْسُونَ', english: "Ithnani wa khamsun", bangla: "ইসনানি ওয়া খামসুন" },
    { number: '53', arabicNumber: '٥٣', arabicName: 'ثَلَاثَةٌ وَخَمْسُونَ', english: "Thalathatun wa khamsun", bangla: "থালাসাতুন ওয়া খামসুন" },
    { number: '54', arabicNumber: '٥٤', arabicName: 'أَرْبَعَةٌ وَخَمْسُونَ', english: "Arba'atun wa khamsun", bangla: "আরবাআতুন ওয়া খামসুন" },
    { number: '55', arabicNumber: '٥٥', arabicName: 'خَمْسَةٌ وَخَمْسُونَ', english: "Khamsatun wa khamsun", bangla: "খামসাতুন ওয়া খামসুন" },
    { number: '56', arabicNumber: '٥٦', arabicName: 'سِتَّةٌ وَخَمْسُونَ', english: "Sittatun wa khamsun", bangla: "সিত্তাতুন ওয়া খামসুন" },
    { number: '57', arabicNumber: '٥٧', arabicName: 'سَبْعَةٌ وَخَمْسُونَ', english: "Sab'atun wa khamsun", bangla: "সাবআতুন ওয়া খামসুন" },
    { number: '58', arabicNumber: '٥٨', arabicName: 'ثَمَانِيَةٌ وَخَمْسُونَ', english: "Thamaniyatun wa khamsun", bangla: "থামানিয়াতুন ওয়া খামসুন" },
    { number: '59', arabicNumber: '٥٩', arabicName: 'تِسْعَةٌ وَخَمْسُونَ', english: "Tis'atun wa khamsun", bangla: "তিসআতুন ওয়া খামসুন" },
    // 60-69
    { number: '60', arabicNumber: '٦٠', arabicName: 'سِتُّونَ', english: 'Sittun', bangla: "সিত্তুন" },
    { number: '61', arabicNumber: '٦١', arabicName: 'وَاحِدٌ وَسِتُّونَ', english: "Wahidun wa sittun", bangla: "ওয়াহিদুন ওয়া সিত্তুন" },
    { number: '62', arabicNumber: '٦٢', arabicName: 'اِثْنَانِ وَسِتُّونَ', english: "Ithnani wa sittun", bangla: "ইসনানি ওয়া সিত্তুন" },
    { number: '63', arabicNumber: '٦٣', arabicName: 'ثَلَاثَةٌ وَسِتُّونَ', english: "Thalathatun wa sittun", bangla: "থালাসাতুন ওয়া সিত্তুন" },
    { number: '64', arabicNumber: '٦٤', arabicName: 'أَرْبَعَةٌ وَسِتُّونَ', english: "Arba'atun wa sittun", bangla: "আরবাআতুন ওয়া সিত্তুন" },
    { number: '65', arabicNumber: '٦٥', arabicName: 'خَمْسَةٌ وَسِتُّونَ', english: "Khamsatun wa sittun", bangla: "খামসাতুন ওয়া সিত্তুন" },
    { number: '66', arabicNumber: '٦٦', arabicName: 'سِتَّةٌ وَسِتُّونَ', english: "Sittatun wa sittun", bangla: "সিত্তাতুন ওয়া সিত্তুন" },
    { number: '67', arabicNumber: '٦٧', arabicName: 'سَبْعَةٌ وَسِتُّونَ', english: "Sab'atun wa sittun", bangla: "সাবআতুন ওয়া সিত্তুন" },
    { number: '68', arabicNumber: '٦٨', arabicName: 'ثَمَانِيَةٌ وَسِتُّونَ', english: "Thamaniyatun wa sittun", bangla: "থামানিয়াতুন ওয়া সিত্তুন" },
    { number: '69', arabicNumber: '٦٩', arabicName: 'تِسْعَةٌ وَسِتُّونَ', english: "Tis'atun wa sittun", bangla: "তিসআতুন ওয়া সিত্তুন" },
    // 70-79
    { number: '70', arabicNumber: '٧٠', arabicName: 'سَبْعُونَ', english: "Sab'un", bangla: "সাবউন" },
    { number: '71', arabicNumber: '٧١', arabicName: 'وَاحِدٌ وَسَبْعُونَ', english: "Wahidun wa sab'un", bangla: "ওয়াহিদুন ওয়া সাবউন" },
    { number: '72', arabicNumber: '٧٢', arabicName: 'اِثْنَانِ وَسَبْعُونَ', english: "Ithnani wa sab'un", bangla: "ইসনানি ওয়া সাবউন" },
    { number: '73', arabicNumber: '٧٣', arabicName: 'ثَلَاثَةٌ وَسَبْعُونَ', english: "Thalathatun wa sab'un", bangla: "থালাসাতুন ওয়া সাবউন" },
    { number: '74', arabicNumber: '٧٤', arabicName: 'أَرْبَعَةٌ وَسَبْعُونَ', english: "Arba'atun wa sab'un", bangla: "আরবাআতুন ওয়া সাবউন" },
    { number: '75', arabicNumber: '٧٥', arabicName: 'خَمْسَةٌ وَسَبْعُونَ', english: "Khamsatun wa sab'un", bangla: "খামসাতুন ওয়া সাবউন" },
    { number: '76', arabicNumber: '٧٦', arabicName: 'سِتَّةٌ وَسَبْعُونَ', english: "Sittatun wa sab'un", bangla: "সিত্তাতুন ওয়া সাবউন" },
    { number: '77', arabicNumber: '٧٧', arabicName: 'سَبْعَةٌ وَسَبْعُونَ', english: "Sab'atun wa sab'un", bangla: "সাবআতুন ওয়া সাবউন" },
    { number: '78', arabicNumber: '٧٨', arabicName: 'ثَمَانِيَةٌ وَسَبْعُونَ', english: "Thamaniyatun wa sab'un", bangla: "থামানিয়াতুন ওয়া সাবউন" },
    { number: '79', arabicNumber: '٧٩', arabicName: 'تِسْعَةٌ وَسَبْعُونَ', english: "Tis'atun wa sab'un", bangla: "তিসআতুন ওয়া সাবউন" },
    // 80-89
    { number: '80', arabicNumber: '٨٠', arabicName: 'ثَمَانُونَ', english: 'Thamanun', bangla: "থামানুন" },
    { number: '81', arabicNumber: '٨١', arabicName: 'وَاحِدٌ وَثَمَانُونَ', english: "Wahidun wa thamanun", bangla: "ওয়াহিদুন ওয়া থামানুন" },
    { number: '82', arabicNumber: '٨٢', arabicName: 'اِثْنَانِ وَثَمَانُونَ', english: "Ithnani wa thamanun", bangla: "ইসনানি ওয়া থামানুন" },
    { number: '83', arabicNumber: '٨٣', arabicName: 'ثَلَاثَةٌ وَثَمَانُونَ', english: "Thalathatun wa thamanun", bangla: "থালাসাতুন ওয়া থামানুন" },
    { number: '84', arabicNumber: '٨٤', arabicName: 'أَرْبَعَةٌ وَثَمَانُونَ', english: "Arba'atun wa thamanun", bangla: "আরবাআতুন ওয়া থামানুন" },
    { number: '85', arabicNumber: '٨٥', arabicName: 'خَمْسَةٌ وَثَمَانُونَ', english: "Khamsatun wa thamanun", bangla: "খামসাতুন ওয়া থামানুন" },
    { number: '86', arabicNumber: '٨٦', arabicName: 'سِتَّةٌ وَثَمَانُونَ', english: "Sittatun wa thamanun", bangla: "সিত্তাতুন ওয়া থামানুন" },
    { number: '87', arabicNumber: '٨٧', arabicName: 'سَبْعَةٌ وَثَمَانُونَ', english: "Sab'atun wa thamanun", bangla: "সাবআতুন ওয়া থামানুন" },
    { number: '88', arabicNumber: '٨٨', arabicName: 'ثَمَانِيَةٌ وَثَمَانُونَ', english: "Thamaniyatun wa thamanun", bangla: "থামানিয়াতুন ওয়া থামানুন" },
    { number: '89', arabicNumber: '٨٩', arabicName: 'تِسْعَةٌ وَثَمَانُونَ', english: "Tis'atun wa thamanun", bangla: "তিসআতুন ওয়া থামানুন" },
    // 90-99
    { number: '90', arabicNumber: '٩٠', arabicName: 'تِسْعُونَ', english: "Tis'un", bangla: "তিসউন" },
    { number: '91', arabicNumber: '٩١', arabicName: 'وَاحِدٌ وَتِسْعُونَ', english: "Wahidun wa tis'un", bangla: "ওয়াহিদুন ওয়া তিসউন" },
    { number: '92', arabicNumber: '٩٢', arabicName: 'اِثْنَانِ وَتِسْعُونَ', english: "Ithnani wa tis'un", bangla: "ইসনানি ওয়া তিসউন" },
    { number: '93', arabicNumber: '٩٣', arabicName: 'ثَلَاثَةٌ وَتِسْعُونَ', english: "Thalathatun wa tis'un", bangla: "থালাসাতুন ওয়া তিসউন" },
    { number: '94', arabicNumber: '٩٤', arabicName: 'أَرْبَعَةٌ وَتِسْعُونَ', english: "Arba'atun wa tis'un", bangla: "আরবাআতুন ওয়া তিসউন" },
    { number: '95', arabicNumber: '٩٥', arabicName: 'خَمْسَةٌ وَتِسْعُونَ', english: "Khamsatun wa tis'un", bangla: "খামসাতুন ওয়া তিসউন" },
    { number: '96', arabicNumber: '٩٦', arabicName: 'سِتَّةٌ وَتِسْعُونَ', english: "Sittatun wa tis'un", bangla: "সিত্তাতুন ওয়া তিসউন" },
    { number: '97', arabicNumber: '٩٧', arabicName: 'سَبْعَةٌ وَتِسْعُونَ', english: "Sab'atun wa tis'un", bangla: "সাবআতুন ওয়া তিসউন" },
    { number: '98', arabicNumber: '٩٨', arabicName: 'ثَمَانِيَةٌ وَتِسْعُونَ', english: "Thamaniyatun wa tis'un", bangla: "থামানিয়াতুন ওয়া তিসউন" },
    { number: '99', arabicNumber: '٩٩', arabicName: 'تِسْعَةٌ وَتِسْعُونَ', english: "Tis'atun wa tis'un", bangla: "তিসআতুন ওয়া তিসউন" },
    // 100
    { number: '100', arabicNumber: '١٠٠', arabicName: 'مِئَة', english: "Mi'a", bangla: "মিআ" },
  ]

  // Create a map for quick lookup by number
  const arabicNumbersMap = {}
  arabicNumbers.forEach(item => {
    arabicNumbersMap[parseInt(item.number)] = item
  })

  return (
    <>
      <PageHeader 
        title="Arabic Learning"
        subtitle="আরবি ভাষা শেখা"
        sectionCount={2}
      />

      <SectionWrapper className="duas-section">
        {/* Number Converter Section */}
        <div style={{ marginBottom: '2rem' }}>
          <NumberConverter arabicNumbersMap={arabicNumbersMap} />
        </div>

        {/* Arabic Numbers Section */}
        <ExpandableSection 
          id="arabic-numbers" 
          title="আরবি সংখ্যা (Arabic Numbers)" 
          defaultOpen={true}
          className="dua-category-wrapper"
          number={1}
        >
          <div className="dua-item">
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-light)' }}>
              আরবি ভাষা শেখার জন্য আরবি সংখ্যা জানা গুরুত্বপূর্ণ। নিচে ০ থেকে ১০০ পর্যন্ত সংখ্যার আরবি রূপ, ইংরেজি ও বাংলা উচ্চারণ দেওয়া হয়েছে:
            </p>
            <div className="arabic-alphabet-grid">
              {arabicNumbers.map((item, index) => (
                <ArabicNumberItem
                  key={index}
                  number={item.number}
                  arabicNumber={item.arabicNumber}
                  arabicName={item.arabicName}
                  english={item.english}
                  bangla={item.bangla}
                />
              ))}
            </div>
          </div>
        </ExpandableSection>

        {/* 30-Day Arabic Speaking Practice Plan */}
        <ExpandableSection 
          id="30-day-practice" 
          title="৩০ দিনের আরবি কথা বলা অনুশীলন (30-Day Arabic Speaking Practice)" 
          defaultOpen={false}
          className="dua-category-wrapper"
          number={2}
        >
          <div className="dua-item">
            <div className="practice-plan-intro" style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '8px', border: '1px solid rgba(13, 79, 28, 0.2)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                ৩০ দিনে আরবি কথা বলা শিখুন (Learn Arabic Speaking in 30 Days)
              </h3>
              <p style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-color)', lineHeight: '1.6' }}>
                এটি এমন একজন ব্যক্তির জন্য তৈরি করা হয়েছে যিনি <strong>একেবারেই আরবি বলতে পারেন না</strong>। এটি <strong>সহজ "কথ্য আরবি" (সরল আধুনিক মান আরবি)</strong> ব্যবহার করে <strong>ইংরেজি অক্ষর (ট্রান্সলিটারেশন)</strong> সহ যাতে আপনি প্রথম দিন থেকেই কথা বলতে পারেন।
              </p>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '0.75rem' }}>আপনার দৈনিক রুটিন (প্রতিদিন একই, ২৫-৩৫ মিনিট):</h4>
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
                  <li><strong>শুনুন + পুনরাবৃত্তি করুন (৫ মিনিট):</strong> আজকের বাক্যগুলি ৩ বার জোরে পড়ুন</li>
                  <li><strong>উচ্চারণ অনুশীলন (৫-১০ মিনিট):</strong> প্রতিটি বাক্য ধীরে → স্বাভাবিক গতিতে বলুন</li>
                  <li><strong>ছোট কথোপকথন (১০ মিনিট):</strong> "ব্যক্তি A" এবং "ব্যক্তি B" উভয়ই বলুন (হ্যাঁ, উভয়ই)</li>
                  <li><strong>ভয়েস রেকর্ডিং (৫ মিনিট):</strong> নিজেকে রেকর্ড করুন, তারপর একবার শুনুন এবং আবার পুনরাবৃত্তি করুন</li>
                </ol>
                <p style={{ marginTop: '1rem', fontSize: '1rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                  <strong>নিয়ম:</strong> খুব বেশি "অধ্যয়ন" করবেন না। <strong>যতটা পড়বেন তার চেয়ে বেশি কথা বলুন।</strong>
                </p>
              </div>
            </div>

            {/* Day 1 */}
            <ExpandableSection 
              id="day-1" 
              title="Day 1 — Greetings (basic)" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-color)', marginBottom: '0.5rem', fontWeight: '600' }}>Phrases:</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                    <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Hello:</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مرحبا</span>
                        <AudioPlayer arabicText="مرحبا" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>Marḥaban</strong> (mar-ha-ban)
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Peace be upon you:</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>السلام عليكم</span>
                        <AudioPlayer arabicText="السلام عليكم" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>As-salāmu ʿalaykum</strong> (as-sa-laa-mu a-lay-kum)
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• And upon you too:</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>وعليكم السلام</span>
                        <AudioPlayer arabicText="وعليكم السلام" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>Wa ʿalaykum as-salām</strong> (wa a-lay-kum as-sa-laam)
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• How are you? (to a man):</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كيف حالك؟</span>
                        <AudioPlayer arabicText="كيف حالك" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>Kayfa ḥāluka?</strong> (kay-fa haa-lu-ka)
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Fine, thank you:</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>بخير، شكرا</span>
                        <AudioPlayer arabicText="بخير، شكرا" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>Bikhayr, shukran</strong> (bi-khayr, shuk-ran)
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• How about you?:</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>وأنت؟</span>
                        <AudioPlayer arabicText="وأنت" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>Wa anta?</strong> (wa an-ta)
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• My name is ...:</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>اسمي</span>
                        <AudioPlayer arabicText="اسمي" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>Ismī...</strong> (is-mee)
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• What's your name?:</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ما اسمك؟</span>
                        <AudioPlayer arabicText="ما اسمك" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>Mā ismuka?</strong> (maa is-mu-ka)
                      </div>
                    </li>
                  </ul>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '6px' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: '600' }}>Speak practice (say both sides):</h4>
                  <div style={{ lineHeight: '2', fontFamily: 'monospace', fontSize: '0.95rem' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600' }}>A:</span> <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>السلام عليكم</span>
                      <AudioPlayer arabicText="السلام عليكم" className="alphabet-audio-btn" tone="default" />
                      <span style={{ marginLeft: '0.5rem' }}>As-salāmu ʿalaykum.</span>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600' }}>B:</span> <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>وعليكم السلام. كيف حالك؟</span>
                      <AudioPlayer arabicText="وعليكم السلام. كيف حالك" className="alphabet-audio-btn" tone="default" />
                      <span style={{ marginLeft: '0.5rem' }}>Wa ʿalaykum as-salām. Kayfa ḥāluka?</span>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600' }}>A:</span> <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>بخير، شكرا. ما اسمك؟</span>
                      <AudioPlayer arabicText="بخير، شكرا. ما اسمك" className="alphabet-audio-btn" tone="default" />
                      <span style={{ marginLeft: '0.5rem' }}>Bikhayr, shukran. Mā ismuka?</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: '600' }}>B:</span> <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>اسمي</span>
                      <AudioPlayer arabicText="اسمي" className="alphabet-audio-btn" tone="default" />
                      <span style={{ marginLeft: '0.5rem' }}>Ismī ___.</span>
                    </div>
                  </div>
                </div>
              </div>
            </ExpandableSection>

            {/* Day 2 */}
            <ExpandableSection 
              id="day-2" 
              title="Day 2 — Polite words" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Please:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>من فضلك</span>
                      <AudioPlayer arabicText="من فضلك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Min faḍlik</strong> (min fad-lik)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Thank you:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>شكرا</span>
                      <AudioPlayer arabicText="شكرا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Shukran</strong> (shuk-ran)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• You're welcome:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>عفوا</span>
                      <AudioPlayer arabicText="عفوا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>ʿAfwan</strong> (af-wan)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Sorry:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>آسف</span>
                      <AudioPlayer arabicText="آسف" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Āsif</strong> (aa-sif)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Excuse me:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لو سمحت</span>
                      <AudioPlayer arabicText="لو سمحت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Law samaḥt</strong> (law sa-maht)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Yes / No:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>نعم / لا</span>
                      <AudioPlayer arabicText="نعم لا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Naʿam / Lā</strong> (na-am / laa)
                    </div>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Prompt: order something politely using "please / thank you / excuse me".</p>
              </div>
            </ExpandableSection>

            {/* Day 3 */}
            <ExpandableSection 
              id="day-3" 
              title={'Day 3 — "I am / you are" (super important)'} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا</span>
                      <AudioPlayer arabicText="أنا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā…</strong> (a-naa)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• You are (man):</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنت</span>
                      <AudioPlayer arabicText="أنت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anta…</strong> (an-ta)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am Zaman:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا زمان</span>
                      <AudioPlayer arabicText="أنا زمان" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā Zaman</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am a student:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا طالب</span>
                      <AudioPlayer arabicText="أنا طالب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā ṭālib</strong> (taa-lib)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• You are my friend:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنت صديقي</span>
                      <AudioPlayer arabicText="أنت صديقي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anta ṣadīqī</strong> (sa-dee-qee)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Nice to meet you:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>تشرفنا</span>
                      <AudioPlayer arabicText="تشرفنا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Tasharrafnā</strong> (ta-shar-raf-naa)
                    </div>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Mini talk: introduce yourself in 3 lines.</p>
              </div>
            </ExpandableSection>

            {/* Day 4 */}
            <ExpandableSection 
              id="day-4" 
              title="Day 4 — Daily needs" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I want:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد</span>
                      <AudioPlayer arabicText="أريد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Urīdu…</strong> (u-ree-du)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I need:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أحتاج</span>
                      <AudioPlayer arabicText="أحتاج" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aḥtāju…</strong> (ah-taa-ju)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I don't understand:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لا أفهم</span>
                      <AudioPlayer arabicText="لا أفهم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Lā afham</strong> (laa af-ham)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Repeat please:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أعد، من فضلك</span>
                      <AudioPlayer arabicText="أعد من فضلك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aʿid, min faḍlik</strong> (a-eed)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Speak slowly:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>تكلّم ببطء</span>
                      <AudioPlayer arabicText="تكلّم ببطء" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Takallam bi-buṭ'</strong> (ta-kal-lam bi-but')
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Arabic / English:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>عربي / إنجليزي</span>
                      <AudioPlayer arabicText="عربي إنجليزي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>ʿArabī / Inglīzī</strong> (a-ra-bee / ing-lee-zee)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 5 */}
            <ExpandableSection 
              id="day-5" 
              title="Day 5 — Numbers 1–10 (speak fast)" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>1:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>واحد</span>
                    <AudioPlayer arabicText="واحد" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>wāḥid</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>2:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>اثنان</span>
                    <AudioPlayer arabicText="اثنان" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>ithnayn</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>3:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ثلاثة</span>
                    <AudioPlayer arabicText="ثلاثة" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>thalātha</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>4:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أربعة</span>
                    <AudioPlayer arabicText="أربعة" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>arbaʿa</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>5:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>خمسة</span>
                    <AudioPlayer arabicText="خمسة" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>khamsa</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>6:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ستة</span>
                    <AudioPlayer arabicText="ستة" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>sitta</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>7:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>سبعة</span>
                    <AudioPlayer arabicText="سبعة" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>sabʿa</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>8:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ثمانية</span>
                    <AudioPlayer arabicText="ثمانية" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>thamāniya</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>9:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>تسعة</span>
                    <AudioPlayer arabicText="تسعة" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>tisʿa</strong></span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>10:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>عشرة</span>
                    <AudioPlayer arabicText="عشرة" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>ʿashara</strong></span>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-light)' }}>Drill: "I want 2… I want 3…" using <strong>Urīdu</strong> + number.</p>
              </div>
            </ExpandableSection>

            {/* Day 6 */}
            <ExpandableSection 
              id="day-6" 
              title="Day 6 — Food & drink basics" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Water:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ماء</span>
                      <AudioPlayer arabicText="ماء" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Mā'</strong> (maa')
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Tea:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>شاي</span>
                      <AudioPlayer arabicText="شاي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Shāy</strong> (shaay)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Coffee:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>قهوة</span>
                      <AudioPlayer arabicText="قهوة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Qahwa</strong> (qah-wa)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Bread:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>خبز</span>
                      <AudioPlayer arabicText="خبز" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Khubz</strong> (khubz)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I'm hungry / thirsty:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا جائع / عطشان</span>
                      <AudioPlayer arabicText="أنا جائع عطشان" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā jā'iʿ / ʿaṭshān</strong> (jaa-e / at-shaan)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I want water:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد ماء</span>
                      <AudioPlayer arabicText="أريد ماء" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Urīdu mā'</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 7 */}
            <ExpandableSection 
              id="day-7" 
              title="Day 7 — Review Day (no new words)" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Do:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Repeat Day 1–6 phrases</li>
                <li>Record a 30–60 sec self-intro + what you want/need today</li>
              </ul>
              </div>
            </ExpandableSection>

            {/* Day 8 */}
            <ExpandableSection 
              id="day-8" 
              title="Day 8 — Directions (street talk)" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Where is…?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أين</span>
                      <AudioPlayer arabicText="أين" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ayna…?</strong> (ay-na)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Here / there:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هنا / هناك</span>
                      <AudioPlayer arabicText="هنا هناك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Hunā / Hunāk</strong> (hu-naa / hu-naak)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Right / left:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>يمين / يسار</span>
                      <AudioPlayer arabicText="يمين يسار" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Yamīn / Yasār</strong> (ya-meen / ya-saar)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Straight:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>على طول</span>
                      <AudioPlayer arabicText="على طول" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>ʿalā ṭūl</strong> (a-laa tool)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Near / far:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>قريب / بعيد</span>
                      <AudioPlayer arabicText="قريب بعيد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Qarīb / Baʿīd</strong> (qa-reeb / ba-eed)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 9 */}
            <ExpandableSection 
              id="day-9" 
              title="Day 9 — Time basics" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Today / tomorrow:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>اليوم / غدا</span>
                      <AudioPlayer arabicText="اليوم غدا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Al-yawm / ghadan</strong> (al-yawm / gha-dan)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Now:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الآن</span>
                      <AudioPlayer arabicText="الآن" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Al-ān</strong> (al-aan)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Morning / night:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>صباح / ليل</span>
                      <AudioPlayer arabicText="صباح ليل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ṣabāḥ / layl</strong> (sa-baah / layl)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• What time?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كم الساعة؟</span>
                      <AudioPlayer arabicText="كم الساعة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kam as-sāʿa?</strong> (kam as-saa-a)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 10 */}
            <ExpandableSection 
              id="day-10" 
              title="Day 10 — Family" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Father / mother:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أب / أم</span>
                      <AudioPlayer arabicText="أب أم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ab / Umm</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Brother / sister:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أخ / أخت</span>
                      <AudioPlayer arabicText="أخ أخت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Akh / Ukht</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Son / daughter:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ابن / بنت</span>
                      <AudioPlayer arabicText="ابن بنت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ibn / Bint</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• My family:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>عائلتي</span>
                      <AudioPlayer arabicText="عائلتي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>ʿĀ'ilatī</strong> (aa-e-la-tee)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I have…:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>عندي</span>
                      <AudioPlayer arabicText="عندي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>ʿIndī…</strong> (in-dee)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 11 */}
            <ExpandableSection 
              id="day-11" 
              title="Day 11 — Shopping phrases" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• How much?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>بكم هذا؟</span>
                      <AudioPlayer arabicText="بكم هذا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Bikam hādhā?</strong> (bi-kam haa-zaa)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Cheap / expensive:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>رخيص / غالي</span>
                      <AudioPlayer arabicText="رخيص غالي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Rakhīṣ / Ghalī</strong> (ra-khees / gha-lee)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I want this:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد هذا</span>
                      <AudioPlayer arabicText="أريد هذا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Urīdu hādhā</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Do you have…?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>عندك</span>
                      <AudioPlayer arabicText="عندك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>ʿIndak…?</strong> (in-dak)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 12 */}
            <ExpandableSection 
              id="day-12" 
              title="Day 12 — Compliments + friendly talk" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Very good:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ممتاز</span>
                      <AudioPlayer arabicText="ممتاز" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Mumtāz</strong> (moom-taaz)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Beautiful:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>جميل</span>
                      <AudioPlayer arabicText="جميل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Jamīl</strong> (ja-meel)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Good job:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أحسنت</span>
                      <AudioPlayer arabicText="أحسنت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aḥsant</strong> (ah-sant)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• God bless you:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الله يبارك فيك</span>
                      <AudioPlayer arabicText="الله يبارك فيك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Allāh yibārik fīk</strong> (dialect-friendly, common)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 13 */}
            <ExpandableSection 
              id="day-13" 
              title="Day 13 — At the restaurant" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Menu:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>قائمة</span>
                      <AudioPlayer arabicText="قائمة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Qā'ima</strong> (qaa-e-ma)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I want chicken/meat:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد دجاج / لحم</span>
                      <AudioPlayer arabicText="أريد دجاج لحم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Urīdu dajāj / laḥm</strong> (da-jaaj / lahm)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• No spicy:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>بلا شطة</span>
                      <AudioPlayer arabicText="بلا شطة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Bilā shatta</strong> (bi-laa shat-ta)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• The bill please:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الحساب، من فضلك</span>
                      <AudioPlayer arabicText="الحساب من فضلك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Al-ḥisāb, min faḍlik</strong> (al-hi-saab)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 14 */}
            <ExpandableSection 
              id="day-14" 
              title="Day 14 — Review Day" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Do a 2-minute roleplay: <strong>ask directions + buy water + say thank you</strong>.</p>
              </div>
            </ExpandableSection>

            {/* Day 15 */}
            <ExpandableSection 
              id="day-15" 
              title="Day 15 — Simple verbs (speak)" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I go:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أذهب</span>
                      <AudioPlayer arabicText="أذهب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Adhhab</strong> (adh-hab)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I come:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أتي</span>
                      <AudioPlayer arabicText="أتي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ātī</strong> (aa-tee)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I eat:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>آكل</span>
                      <AudioPlayer arabicText="آكل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ākul</strong> (aa-kul)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I drink:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أشرب</span>
                      <AudioPlayer arabicText="أشرب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ashrab</strong> (ash-rab)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I speak:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أتكلّم</span>
                      <AudioPlayer arabicText="أتكلّم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Atakallam</strong> (a-ta-kal-lam)
                    </div>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Make sentences: <strong>Anā adhhab… / Anā ākul…</strong></p>
              </div>
            </ExpandableSection>

            {/* Day 16 */}
            <ExpandableSection 
              id="day-16" 
              title={'Day 16 — "Can you...?" + "I can..."'} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Can you help me?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هل تستطيع مساعدتي؟</span>
                      <AudioPlayer arabicText="هل تستطيع مساعدتي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Hal tastatīʿ musāʿadatī?</strong> (hal tas-ta-tee' mu-saa-a-da-tee)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I can:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أستطيع</span>
                      <AudioPlayer arabicText="أستطيع" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Astatīʿ</strong> (as-ta-tee')
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I can't:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لا أستطيع</span>
                      <AudioPlayer arabicText="لا أستطيع" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Lā astatīʿ</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 17 */}
            <ExpandableSection 
              id="day-17" 
              title="Day 17 — Feelings" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Happy / sad:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>سعيد / حزين</span>
                      <AudioPlayer arabicText="سعيد حزين" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Saʿīd / ḥazīn</strong> (sa-eed / ha-zeen)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Tired:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>تعبان</span>
                      <AudioPlayer arabicText="تعبان" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Taʿbān</strong> (ta'-baan)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Sick:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مريض</span>
                      <AudioPlayer arabicText="مريض" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Marīḍ</strong> (ma-reed)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I'm okay:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا بخير</span>
                      <AudioPlayer arabicText="أنا بخير" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā bikhayr</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 18 */}
            <ExpandableSection 
              id="day-18" 
              title="Day 18 — At the airport / travel" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Passport:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>جواز سفر</span>
                      <AudioPlayer arabicText="جواز سفر" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Jawāz safar</strong> (ja-waaz sa-far)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Ticket:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>تذكرة</span>
                      <AudioPlayer arabicText="تذكرة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Tadhkira</strong> (taz-ki-ra)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Where is the gate?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أين البوابة؟</span>
                      <AudioPlayer arabicText="أين البوابة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ayna al-bawwāba?</strong> (al-baw-waa-ba)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am going to…:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا ذاهب إلى</span>
                      <AudioPlayer arabicText="أنا ذاهب إلى" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā dhāhib ilā…</strong> (daa-hib i-laa)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 19 */}
            <ExpandableSection 
              id="day-19" 
              title="Day 19 — In a taxi" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Stop here:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>وقف هنا</span>
                      <AudioPlayer arabicText="وقف هنا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Waqif hunā</strong> (wa-qif hu-naa)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Go to…:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>إلى... من فضلك</span>
                      <AudioPlayer arabicText="إلى من فضلك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ilā… min faḍlik</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• How long?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كم المدة؟</span>
                      <AudioPlayer arabicText="كم المدة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kam al-mudda?</strong> (kam al-mud-da)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 20 */}
            <ExpandableSection 
              id="day-20" 
              title="Day 20 — Making requests" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Give me…:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أعطني</span>
                      <AudioPlayer arabicText="أعطني" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aʿṭinī…</strong> (a'-ti-nee)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Open / close:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>افتح / أغلق</span>
                      <AudioPlayer arabicText="افتح أغلق" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Iftaḥ / Ighlaq</strong> (if-tah / igh-laq)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Wait:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>انتظر</span>
                      <AudioPlayer arabicText="انتظر" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Intaẓir</strong> (in-ta-zir)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 21 */}
            <ExpandableSection 
              id="day-21" 
              title="Day 21 — Review Day" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Record a <strong>3-minute</strong> speaking:</p>
              <p style={{ lineHeight: '1.8', fontStyle: 'italic', color: 'var(--text-light)' }}>"Who I am, what I need, where I go, buying something, thanking."</p>
              </div>
            </ExpandableSection>

            {/* Day 22 */}
            <ExpandableSection 
              id="day-22" 
              title="Day 22 — Questions (the magic set)" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• What?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ما؟</span>
                      <AudioPlayer arabicText="ما" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Mā?</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Where?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أين؟</span>
                      <AudioPlayer arabicText="أين" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ayna?</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• When?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>متى؟</span>
                      <AudioPlayer arabicText="متى" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Matā?</strong> (ma-taa)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Why?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لماذا؟</span>
                      <AudioPlayer arabicText="لماذا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Limādhā?</strong> (li-maa-zaa)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• How?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كيف؟</span>
                      <AudioPlayer arabicText="كيف" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kayfa?</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• How much/how many?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كم؟</span>
                      <AudioPlayer arabicText="كم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kam?</strong>
                    </div>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Drill: ask 10 questions out loud.</p>
              </div>
            </ExpandableSection>

            {/* Day 23 */}
            <ExpandableSection 
              id="day-23" 
              title="Day 23 — Describing things" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Big / small:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كبير / صغير</span>
                      <AudioPlayer arabicText="كبير صغير" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kabīr / ṣaghīr</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Hot / cold:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>حار / بارد</span>
                      <AudioPlayer arabicText="حار بارد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ḥārr / bārid</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• New / old:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>جديد / قديم</span>
                      <AudioPlayer arabicText="جديد قديم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Jadīd / qadīm</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Good / bad:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>جيد / سيء</span>
                      <AudioPlayer arabicText="جيد سيء" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Jayyid / sayyi'</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 24 */}
            <ExpandableSection 
              id="day-24" 
              title="Day 24 — Talking about your day" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I wake up:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أستيقظ</span>
                      <AudioPlayer arabicText="أستيقظ" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Astayqiẓ</strong> (as-tay-qiz)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I work:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أعمل</span>
                      <AudioPlayer arabicText="أعمل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aʿmal</strong> (a'-mal)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I study:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أدرس</span>
                      <AudioPlayer arabicText="أدرس" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Adrus</strong> (ad-rus)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I sleep:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنام</span>
                      <AudioPlayer arabicText="أنام" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anām</strong> (a-naam)
                    </div>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Make 5 sentences: "I wake up… I study… I work…"</p>
              </div>
            </ExpandableSection>

            {/* Day 25 */}
            <ExpandableSection 
              id="day-25" 
              title="Day 25 — Common mistakes fixer (pronunciation focus)" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Spend today only on these sounds:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li><strong>ḥ</strong> (strong "H"): <em>ḥāluka, ḥisāb</em></li>
                <li><strong>kh</strong>: <em>khubz</em></li>
                <li><strong>ʿ</strong> (ayn): <em>ʿalaykum, ʿindī</em> (don't stress—just a small throat sound)</li>
              </ul>
              <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Record and compare: slow → normal speed.</p>
              </div>
            </ExpandableSection>

            {/* Day 26 */}
            <ExpandableSection 
              id="day-26" 
              title="Day 26 — Simple conversation builder (templates)" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Use these speaking templates:</p>
                <div style={{ background: 'rgba(13, 79, 28, 0.05)', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا</span>
                    <AudioPlayer arabicText="أنا" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>عندي</span>
                    <AudioPlayer arabicText="عندي" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد</span>
                    <AudioPlayer arabicText="أريد" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أحتاج</span>
                    <AudioPlayer arabicText="أحتاج" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>لا أفهم</span>
                    <AudioPlayer arabicText="لا أفهم" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>من فضلك</span>
                    <AudioPlayer arabicText="من فضلك" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>شكرا</span>
                    <AudioPlayer arabicText="شكرا" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontFamily: 'monospace' }}>
                    <strong>Anā… / ʿIndī… / Urīdu… / Aḥtāju… / Lā afham… / Min faḍlik… / Shukran…</strong>
                  </div>
                </div>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Make 10 different sentences.</p>
              </div>
            </ExpandableSection>

            {/* Day 27 */}
            <ExpandableSection 
              id="day-27" 
              title="Day 27 — Conversation: meeting someone" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Practice this 1-minute script:</p>
                <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '6px' }}>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>السلام عليكم.</span>
                    <AudioPlayer arabicText="السلام عليكم" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}>As-salāmu ʿalaykum.</span>
                  </div>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>اسمي</span>
                    <AudioPlayer arabicText="اسمي" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}>Ismī ___.</span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا من</span>
                    <AudioPlayer arabicText="أنا من" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}>Anā min ___.</span>
                  </div>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا أعمل / أدرس</span>
                    <AudioPlayer arabicText="أنا أعمل أدرس" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}>Anā aʿmal / adrus ___.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>تشرفنا. كيف حالك؟</span>
                    <AudioPlayer arabicText="تشرفنا كيف حالك" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}>Tasharrafnā. Kayfa ḥāluka?</span>
                  </div>
                </div>
              </div>
            </ExpandableSection>

            {/* Day 28 */}
            <ExpandableSection 
              id="day-28" 
              title="Day 28 — Conversation: shopping + directions" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Roleplay:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Ask "where is…"</li>
                <li>Go "right/left/straight"</li>
                <li>Ask price, say "expensive/cheap"</li>
                <li>Buy with thanks</li>
              </ul>
              </div>
            </ExpandableSection>

            {/* Day 29 */}
            <ExpandableSection 
              id="day-29" 
              title="Day 29 — Conversation: restaurant + taxi" 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Roleplay:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Order food + water</li>
                <li>Ask bill</li>
                <li>Take taxi to location</li>
                <li>Stop here</li>
              </ul>
              </div>
            </ExpandableSection>

            {/* Day 30 */}
            <ExpandableSection 
              id="day-30" 
              title={'Day 30 — Your "real life speaking test"'} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', border: '2px solid var(--primary-color)' }}>
                <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Do a <strong>5-minute recording</strong> (no stopping):</p>
              <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Greetings + intro</li>
                <li>Ask 5 questions</li>
                <li>Buy something (price + request)</li>
                <li>Directions to a place</li>
                <li>Restaurant order + bill</li>
                <li>Close politely</li>
              </ol>
              </div>
            </ExpandableSection>
          </div>
        </ExpandableSection>
      </SectionWrapper>
    </>
  )
}
