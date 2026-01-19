import PageHeader from '@/components/PageHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ExpandableSection from '@/components/ExpandableSection'
import ArabicNumberItem from '@/components/ArabicNumberItem'
import ArabicAlphabetItem from '@/components/ArabicAlphabetItem'
import NumberConverter from '@/components/NumberConverter'
import AudioPlayer from '@/components/AudioPlayer'
import { createArabicTitle } from '@/utils/arabicTitle'

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

  // Arabic alphabet (28 letters) with English and Bangla pronunciations, and letter forms
  const arabicAlphabet = [
    { letter: 'ا', arabicName: 'أَلِف', english: 'Alif', bangla: 'আলিফ', isolated: 'ا', initial: 'ا', medial: 'ا', final: 'ا', initialExample: 'أب', medialExample: 'رأس', finalExample: 'سماء', initialExampleTrans: 'Ab (Father)', medialExampleTrans: 'Ra\'s (Head)', finalExampleTrans: 'Sama\' (Sky)' },
    { letter: 'ب', arabicName: 'بَاء', english: 'Ba', bangla: 'বা', isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب', initialExample: 'باب', medialExample: 'كتاب', finalExample: 'حب', initialExampleTrans: 'Baab (Door)', medialExampleTrans: 'Kitab (Book)', finalExampleTrans: 'Hubb (Love)' },
    { letter: 'ت', arabicName: 'تَاء', english: 'Ta', bangla: 'তা', isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت', initialExample: 'تاج', medialExample: 'كتاب', finalExample: 'بيت', initialExampleTrans: 'Taj (Crown)', medialExampleTrans: 'Kitab (Book)', finalExampleTrans: 'Bayt (House)' },
    { letter: 'ث', arabicName: 'ثَاء', english: 'Tha', bangla: 'থা', isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث', initialExample: 'ثوب', medialExample: 'مثل', finalExample: 'ميث', initialExampleTrans: 'Thawb (Garment)', medialExampleTrans: 'Mithl (Like)', finalExampleTrans: 'Mith (Like)' },
    { letter: 'ج', arabicName: 'جِيم', english: 'Jim', bangla: 'জিম', isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج', initialExample: 'جبل', medialExample: 'مجد', finalExample: 'خبز', initialExampleTrans: 'Jabal (Mountain)', medialExampleTrans: 'Majd (Glory)', finalExampleTrans: 'Khubz (Bread)' },
    { letter: 'ح', arabicName: 'حَاء', english: 'Ha', bangla: 'হা', isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح', initialExample: 'حجر', medialExample: 'محمد', finalExample: 'روح', initialExampleTrans: 'Hajar (Stone)', medialExampleTrans: 'Muhammad', finalExampleTrans: 'Ruh (Soul)' },
    { letter: 'خ', arabicName: 'خَاء', english: 'Kha', bangla: 'খা', isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ', initialExample: 'خبز', medialExample: 'مخزن', finalExample: 'روح', initialExampleTrans: 'Khubz (Bread)', medialExampleTrans: 'Makhzan (Store)', finalExampleTrans: 'Ruh (Soul)' },
    { letter: 'د', arabicName: 'دَال', english: 'Dal', bangla: 'দাল', isolated: 'د', initial: 'د', medial: 'د', final: 'د', initialExample: 'دار', medialExample: 'مدينة', finalExample: 'جند', initialExampleTrans: 'Dar (House)', medialExampleTrans: 'Madina (City)', finalExampleTrans: 'Jund (Army)' },
    { letter: 'ذ', arabicName: 'ذَال', english: 'Dhal', bangla: 'ধাল', isolated: 'ذ', initial: 'ذ', medial: 'ذ', final: 'ذ', initialExample: 'ذهب', medialExample: 'مذهب', finalExample: 'عرض', initialExampleTrans: 'Dhahab (Gold)', medialExampleTrans: 'Madhhab (School)', finalExampleTrans: 'Ard (Land)' },
    { letter: 'ر', arabicName: 'رَاء', english: 'Ra', bangla: 'রা', isolated: 'ر', initial: 'ر', medial: 'ر', final: 'ر', initialExample: 'رجل', medialExample: 'مركز', finalExample: 'بحر', initialExampleTrans: 'Rajul (Man)', medialExampleTrans: 'Markaz (Center)', finalExampleTrans: 'Bahr (Sea)' },
    { letter: 'ز', arabicName: 'زَاي', english: 'Zay', bangla: 'যায়', isolated: 'ز', initial: 'ز', medial: 'ز', final: 'ز', initialExample: 'زهر', medialExample: 'مزهر', finalExample: 'عز', initialExampleTrans: 'Zahr (Flower)', medialExampleTrans: 'Mazhar (Appearance)', finalExampleTrans: 'Izz (Honor)' },
    { letter: 'س', arabicName: 'سِين', english: 'Sin', bangla: 'সীন', isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس', initialExample: 'سيف', medialExample: 'مسجد', finalExample: 'نفس', initialExampleTrans: 'Sayf (Sword)', medialExampleTrans: 'Masjid (Mosque)', finalExampleTrans: 'Nafs (Self)' },
    { letter: 'ش', arabicName: 'شِين', english: 'Shin', bangla: 'শীন', isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش', initialExample: 'شمس', medialExample: 'مشكل', finalExample: 'نش', initialExampleTrans: 'Shams (Sun)', medialExampleTrans: 'Mushkil (Problem)', finalExampleTrans: 'Nash (Rising)' },
    { letter: 'ص', arabicName: 'صَاد', english: 'Sad', bangla: 'সাদ', isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص', initialExample: 'صبر', medialExample: 'مصطفى', finalExample: 'نص', initialExampleTrans: 'Sabr (Patience)', medialExampleTrans: 'Mustafa', finalExampleTrans: 'Nas (Text)' },
    { letter: 'ض', arabicName: 'ضَاد', english: 'Dad', bangla: 'দাদ', isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض', initialExample: 'ضرب', medialExample: 'مضرب', finalExample: 'عرض', initialExampleTrans: 'Darb (Strike)', medialExampleTrans: 'Madrab (Struck)', finalExampleTrans: 'Ard (Land)' },
    { letter: 'ط', arabicName: 'طَاء', english: 'Ta', bangla: 'তা', isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط', initialExample: 'طالب', medialExample: 'مطعم', finalExample: 'خط', initialExampleTrans: 'Talib (Student)', medialExampleTrans: 'Mat\'am (Restaurant)', finalExampleTrans: 'Khatt (Line)' },
    { letter: 'ظ', arabicName: 'ظَاء', english: 'Za', bangla: 'জা', isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ', initialExample: 'ظلم', medialExample: 'مظلم', finalExample: 'عظم', initialExampleTrans: 'Zulm (Injustice)', medialExampleTrans: 'Muzlim (Dark)', finalExampleTrans: 'Azm (Bone)' },
    { letter: 'ع', arabicName: 'عَيْن', english: 'Ayn', bangla: 'আইন', isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع', initialExample: 'عبد', medialExample: 'معلم', finalExample: 'دع', initialExampleTrans: 'Abd (Servant)', medialExampleTrans: 'Mu\'allim (Teacher)', finalExampleTrans: 'Da\' (Call)' },
    { letter: 'غ', arabicName: 'غَيْن', english: 'Ghayn', bangla: 'ঘাইন', isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ', initialExample: 'غرب', medialExample: 'مغرب', finalExample: 'بغ', initialExampleTrans: 'Gharb (West)', medialExampleTrans: 'Maghrib (Sunset)', finalExampleTrans: 'Baghd (Baghdad)' },
    { letter: 'ف', arabicName: 'فَاء', english: 'Fa', bangla: 'ফা', isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف', initialExample: 'فهم', medialExample: 'مفتاح', finalExample: 'خوف', initialExampleTrans: 'Fahm (Understanding)', medialExampleTrans: 'Miftah (Key)', finalExampleTrans: 'Khawf (Fear)' },
    { letter: 'ق', arabicName: 'قَاف', english: 'Qaf', bangla: 'কাফ', isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق', initialExample: 'قلم', medialExample: 'مقعد', finalExample: 'حق', initialExampleTrans: 'Qalam (Pen)', medialExampleTrans: 'Maq\'ad (Seat)', finalExampleTrans: 'Haqq (Right)' },
    { letter: 'ك', arabicName: 'كَاف', english: 'Kaf', bangla: 'কাফ', isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك', initialExample: 'كتاب', medialExample: 'مكتب', finalExample: 'شك', initialExampleTrans: 'Kitab (Book)', medialExampleTrans: 'Maktab (Office)', finalExampleTrans: 'Shakk (Doubt)' },
    { letter: 'ل', arabicName: 'لاَم', english: 'Lam', bangla: 'লাম', isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل', initialExample: 'لبن', medialExample: 'مدرسة', finalExample: 'بعل', initialExampleTrans: 'Laban (Milk)', medialExampleTrans: 'Madrasa (School)', finalExampleTrans: 'Ba\'l (Husband)' },
    { letter: 'م', arabicName: 'مِيم', english: 'Mim', bangla: 'মীম', isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم', initialExample: 'ماء', medialExample: 'أمير', finalExample: 'كرم', initialExampleTrans: 'Ma\' (Water)', medialExampleTrans: 'Amir (Prince)', finalExampleTrans: 'Karim (Generous)' },
    { letter: 'ن', arabicName: 'نُون', english: 'Nun', bangla: 'নুন', isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن', initialExample: 'نور', medialExample: 'منزل', finalExample: 'عين', initialExampleTrans: 'Nur (Light)', medialExampleTrans: 'Manzil (House)', finalExampleTrans: 'Ayn (Eye)' },
    { letter: 'ه', arabicName: 'هَاء', english: 'Ha', bangla: 'হা', isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه', initialExample: 'هلال', medialExample: 'مهندس', finalExample: 'روح', initialExampleTrans: 'Hilal (Crescent)', medialExampleTrans: 'Muhandis (Engineer)', finalExampleTrans: 'Ruh (Soul)' },
    { letter: 'و', arabicName: 'وَاو', english: 'Waw', bangla: 'ওয়াও', isolated: 'و', initial: 'و', medial: 'و', final: 'و', initialExample: 'ولد', medialExample: 'موعد', finalExample: 'عرو', initialExampleTrans: 'Walad (Boy)', medialExampleTrans: 'Maw\'id (Appointment)', finalExampleTrans: 'Aru (I see)' },
    { letter: 'ي', arabicName: 'يَاء', english: 'Ya', bangla: 'ইয়া', isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي', initialExample: 'يوم', medialExample: 'مدرسة', finalExample: 'علي', initialExampleTrans: 'Yawm (Day)', medialExampleTrans: 'Madrasa (School)', finalExampleTrans: 'Ali' },
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
        sectionCount={3}
      />

      <SectionWrapper className="duas-section">
        {/* Number Converter Section */}
        <div style={{ marginBottom: '2rem' }}>
          <NumberConverter arabicNumbersMap={arabicNumbersMap} />
        </div>

        {/* Arabic Numbers Section */}
        <ExpandableSection 
          id="arabic-numbers" 
          title={createArabicTitle("প্রাথমিক আরবি শিক্ষা - Basic Arabic learning", "تعلم العربية الأساسي", "Taʿallum al-ʿarabiyya al-asāsī")}
          defaultOpen={false}
          className="dua-category-wrapper"
          number={1}
        >
          <div className="dua-item">
            {/* Arabic Alphabet Subsection */}
            <ExpandableSection 
              id="arabic-alphabet-subsection" 
              title={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span>আরবি বর্ণমালা (Arabic Alphabet)</span>
                  <span style={{ fontSize: '1rem', direction: 'rtl' }}>الأبجدية العربية</span>
                  <AudioPlayer arabicText="الأبجدية العربية" className="alphabet-audio-btn" tone="default" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>(Al-abjadīya al-ʿarabiyya)</span>
                </span>
              }
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-light)' }}>
                  আরবি ভাষা শেখার জন্য আরবি বর্ণমালা জানা অত্যন্ত গুরুত্বপূর্ণ। নিচে ২৮টি আরবি বর্ণের আরবি নাম, ইংরেজি ও বাংলা উচ্চারণ দেওয়া হয়েছে:
                </p>
                <div className="arabic-alphabet-grid">
                  {arabicAlphabet.map((item, index) => (
                    <ArabicAlphabetItem
                      key={index}
                      letter={item.letter}
                      arabicName={item.arabicName}
                      english={item.english}
                      bangla={item.bangla}
                    />
                  ))}
                </div>

                {/* All Letters Forms Table */}
                  <div style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                    <div style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                      সব বর্ণের বিভিন্ন অবস্থান (All Letters in Different Positions):
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                          <tr style={{ background: 'rgba(13, 79, 28, 0.1)' }}>
                            <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid rgba(13, 79, 28, 0.2)', fontWeight: '600' }}>বর্ণ</th>
                            <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(13, 79, 28, 0.2)', fontWeight: '600' }}>একা</th>
                            <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(13, 79, 28, 0.2)', fontWeight: '600' }}>শুরুতে</th>
                            <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(13, 79, 28, 0.2)', fontWeight: '600' }}>মাঝে</th>
                            <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(13, 79, 28, 0.2)', fontWeight: '600' }}>শেষে</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid rgba(13, 79, 28, 0.2)', fontWeight: '600' }}>উদাহরণ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {arabicAlphabet.map((item, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid rgba(13, 79, 28, 0.1)' }}>
                              <td style={{ padding: '0.75rem', border: '1px solid rgba(13, 79, 28, 0.1)' }}>
                                <div style={{ fontSize: '1.5rem', direction: 'rtl', fontWeight: '600', marginBottom: '0.25rem' }}>{item.letter}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{item.english} ({item.bangla})</div>
                              </td>
                              <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(13, 79, 28, 0.1)' }}>
                                <div style={{ fontSize: '1.8rem', direction: 'rtl' }}>{item.isolated}</div>
                              </td>
                              <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(13, 79, 28, 0.1)' }}>
                                <div style={{ fontSize: '1.8rem', direction: 'rtl', marginBottom: '0.25rem' }}>{item.initial}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', direction: 'rtl' }}>{item.initialExample}</div>
                                <div style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>{item.initialExampleTrans}</div>
                              </td>
                              <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(13, 79, 28, 0.1)' }}>
                                <div style={{ fontSize: '1.8rem', direction: 'rtl', marginBottom: '0.25rem' }}>{item.medial}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', direction: 'rtl' }}>{item.medialExample}</div>
                                <div style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>{item.medialExampleTrans}</div>
                              </td>
                              <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(13, 79, 28, 0.1)' }}>
                                <div style={{ fontSize: '1.8rem', direction: 'rtl', marginBottom: '0.25rem' }}>{item.final}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', direction: 'rtl' }}>{item.finalExample}</div>
                                <div style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>{item.finalExampleTrans}</div>
                              </td>
                              <td style={{ padding: '0.75rem', border: '1px solid rgba(13, 79, 28, 0.1)' }}>
                                <div style={{ fontSize: '1rem', direction: 'rtl', fontWeight: '600', marginBottom: '0.25rem' }}>
                                  {item.initialExample} / {item.medialExample} / {item.finalExample}
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>
                                  {item.initialExampleTrans.split('(')[0]} / {item.medialExampleTrans.split('(')[0]} / {item.finalExampleTrans.split('(')[0]}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '6px', fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                  <strong style={{ color: 'var(--primary-color)' }}>মনে রাখবেন:</strong> কিছু বর্ণ (যেমন: ا, د, ذ, ر, ز, و) সবসময় একই রূপে থাকে এবং অন্য বর্ণের সাথে যুক্ত হয় না।
                </div>
              </div>
            </ExpandableSection>

            {/* Arabic Numbers Subsection */}
            <ExpandableSection 
              id="arabic-numbers-subsection" 
              title={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span>আরবি সংখ্যা (Arabic Numbers 0-100)</span>
                  <span style={{ fontSize: '1rem', direction: 'rtl' }}>أرقام عربية</span>
                  <AudioPlayer arabicText="أرقام عربية" className="alphabet-audio-btn" tone="default" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>(Arqām ʿarabiyya)</span>
                </span>
              }
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
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

            {/* Days of the Week Subsection */}
            <ExpandableSection 
              id="days-of-week-subsection" 
              title={createArabicTitle("সপ্তাহের দিন (Days of the Week)", "أيام الأسبوع", "Ayyām al-usbūʿ")}
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', marginTop: '1rem' }}>
              <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• Sunday:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الأحد</span>
                    <AudioPlayer arabicText="الأحد" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Al-aḥad</strong> (al-ah-had)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-আহাদ
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• Monday:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الاثنين</span>
                    <AudioPlayer arabicText="الاثنين" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Al-ithnayn</strong> (al-ith-nayn)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-ইসনাইন
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• Tuesday:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الثلاثاء</span>
                    <AudioPlayer arabicText="الثلاثاء" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Ath-thulāthāʾ</strong> (ath-thu-laa-thaa)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আস-ছুলাছা
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• Wednesday:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الأربعاء</span>
                    <AudioPlayer arabicText="الأربعاء" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Al-arbaʿāʾ</strong> (al-ar-ba-aa)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-আরবাআ
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• Thursday:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الخميس</span>
                    <AudioPlayer arabicText="الخميس" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Al-khamīs</strong> (al-kha-mees)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-খামীস
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• Friday:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الجمعة</span>
                    <AudioPlayer arabicText="الجمعة" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Al-jumʿa</strong> (al-jum-a)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-জুমআ
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• Saturday:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>السبت</span>
                    <AudioPlayer arabicText="السبت" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>As-sabt</strong> (as-sabt)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আস-সাবত
                  </div>
                </li>
              </ul>
              </div>
            </ExpandableSection>

            {/* Months of the Year Subsection */}
            <ExpandableSection 
              id="months-of-year-subsection" 
              title={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span>মাসের নাম (Months of the Year)</span>
                  <span style={{ fontSize: '1rem', direction: 'rtl' }}>أشهر السنة</span>
                  <AudioPlayer arabicText="أشهر السنة" className="alphabet-audio-btn" tone="default" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>(Ashhur as-sana)</span>
                </span>
              }
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', marginTop: '1rem' }}>
              <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• January:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>يناير</span>
                    <AudioPlayer arabicText="يناير" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Yanāyir</strong> (ya-naa-yir)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইয়ানাইর
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• February:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>فبراير</span>
                    <AudioPlayer arabicText="فبراير" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Fibrayir</strong> (fib-ra-yir)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ফিবরাইর
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• March:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مارس</span>
                    <AudioPlayer arabicText="مارس" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Māris</strong> (maa-ris)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> মারিস
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• April:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أبريل</span>
                    <AudioPlayer arabicText="أبريل" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Abrīl</strong> (ab-reel)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আবরীল
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• May:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مايو</span>
                    <AudioPlayer arabicText="مايو" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Māyū</strong> (maa-yoo)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> মায়ূ
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• June:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>يونيو</span>
                    <AudioPlayer arabicText="يونيو" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Yūniyū</strong> (yoo-ni-yoo)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইউনিয়ূ
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• July:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>يوليو</span>
                    <AudioPlayer arabicText="يوليو" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Yūliyū</strong> (yoo-li-yoo)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইউলিয়ূ
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• August:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أغسطس</span>
                    <AudioPlayer arabicText="أغسطس" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Aghusṭus</strong> (a-ghus-tus)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আগুসতুস
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• September:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>سبتمبر</span>
                    <AudioPlayer arabicText="سبتمبر" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Sibtambir</strong> (sib-tam-bir)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> সিবতামবির
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• October:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أكتوبر</span>
                    <AudioPlayer arabicText="أكتوبر" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Uktūbar</strong> (uk-too-bar)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> উক্তূবার
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• November:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>نوفمبر</span>
                    <AudioPlayer arabicText="نوفمبر" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Nūfambir</strong> (noo-fam-bir)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> নূফামবির
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span>• December:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ديسمبر</span>
                    <AudioPlayer arabicText="ديسمبر" className="alphabet-audio-btn" tone="default" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                    <strong>Dīsambir</strong> (dee-sam-bir)<br />
                    <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> দীসামবির
                  </div>
                </li>
              </ul>
              </div>
            </ExpandableSection>

            {/* Daily Words Subsection */}
            <ExpandableSection 
              id="daily-words-subsection" 
              title={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span>Numbers, Colors, Family, Common Things</span>
                  <span style={{ fontSize: '1rem', direction: 'rtl' }}>أرقام، ألوان، عائلة، أشياء شائعة</span>
                  <AudioPlayer arabicText="أرقام ألوان عائلة أشياء شائعة" className="alphabet-audio-btn" tone="default" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>(Arqām, alwān, ʿāʾila, ashyaʾ shāʾiʿa)</span>
                </span>
              }
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', marginTop: '1rem' }}>
                {/* Numbers 1-20 */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span>Numbers</span>
                    <span style={{ fontSize: '1.2rem', direction: 'rtl' }}>أرقام</span>
                    <AudioPlayer arabicText="أرقام" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.85rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>(Arqām)</span>
                    <span>1–20</span>
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(num => {
                      const item = arabicNumbersMap[num];
                      return item ? (
                        <div key={num} style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontWeight: '600' }}>{num}:</span>
                            <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>{item.arabicNumber}</span>
                            <span style={{ fontSize: '1.1rem', color: 'var(--primary-color)', fontWeight: '600', direction: 'rtl' }}>{item.arabicName}</span>
                            <AudioPlayer arabicText={item.arabicName} className="alphabet-audio-btn" tone="default" />
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                            <strong>{item.english}</strong><br />
                            <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> {item.bangla}
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Colors */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>Colors</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Red:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أحمر</span>
                        <AudioPlayer arabicText="أحمر" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Aḥmar</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আহমার
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Blue:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أزرق</span>
                        <AudioPlayer arabicText="أزرق" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Azraq</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আজরাক
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Green:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أخضر</span>
                        <AudioPlayer arabicText="أخضر" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Akhḍar</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আখদার
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• White:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أبيض</span>
                        <AudioPlayer arabicText="أبيض" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Abyaḍ</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আবিয়াদ
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Black:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أسود</span>
                        <AudioPlayer arabicText="أسود" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Aswad</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আসওয়াদ
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Family */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>Family</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Mother:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أم</span>
                        <AudioPlayer arabicText="أم" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Umm</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> উম্ম
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Father:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أب</span>
                        <AudioPlayer arabicText="أب" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Ab</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আব
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Son:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>ابن</span>
                        <AudioPlayer arabicText="ابن" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Ibn</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইবন
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Daughter:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>ابنة</span>
                        <AudioPlayer arabicText="ابنة" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Ibnah</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইবনাহ
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Brother:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أخ</span>
                        <AudioPlayer arabicText="أخ" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Akh</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আখ
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Sister:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أخت</span>
                        <AudioPlayer arabicText="أخت" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Ukht</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> উখত
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Common Things */}
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>Common Things</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Water:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>ماء</span>
                        <AudioPlayer arabicText="ماء" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Māʾ</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> মা
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Food:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>طعام</span>
                        <AudioPlayer arabicText="طعام" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Ṭaʿām</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> তাআম
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Phone:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>هاتف</span>
                        <AudioPlayer arabicText="هاتف" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Hātif</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হাতিফ
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Door:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>باب</span>
                        <AudioPlayer arabicText="باب" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Bāb</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> বাব
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• House:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>بيت</span>
                        <AudioPlayer arabicText="بيت" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Bayt</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> বাইত
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Car:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>سيارة</span>
                        <AudioPlayer arabicText="سيارة" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Sayyāra</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> সাইয়ারা
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Book:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>كتاب</span>
                        <AudioPlayer arabicText="كتاب" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Kitāb</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> কিতাব
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Pen:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>قلم</span>
                        <AudioPlayer arabicText="قلم" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Qalam</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> কালাম
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Daily Sentences */}
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '8px', border: '1px solid rgba(13, 79, 28, 0.2)' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '0.75rem', fontWeight: '600' }}>Daily Sentences (say out loud):</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    👉 Say each sentence 10 times aloud.
                  </p>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"My name is ___."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>اسمي</span>
                        <AudioPlayer arabicText="اسمي" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Ismī ___</span>
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I am from ___."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا من</span>
                        <AudioPlayer arabicText="أنا من" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā min ___</span>
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I live in ___."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا أعيش في</span>
                        <AudioPlayer arabicText="أنا أعيش في" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā aʿīshu fī ___</span>
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I want water."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد ماء</span>
                        <AudioPlayer arabicText="أريد ماء" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Urīdu māʾ</span>
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I don't understand."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لا أفهم</span>
                        <AudioPlayer arabicText="لا أفهم" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Lā afham</span>
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"Please repeat."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>من فضلك كرر</span>
                        <AudioPlayer arabicText="من فضلك كرر" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Min faḍlik karrir</span>
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"How much is this?"</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كم ثمن هذا؟</span>
                        <AudioPlayer arabicText="كم ثمن هذا" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Kam thaman hādhā?</span>
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"Where is the bathroom?"</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أين الحمام؟</span>
                        <AudioPlayer arabicText="أين الحمام" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Ayna al-ḥammām?</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ExpandableSection>

            {/* Pronunciation First Subsection */}
            <ExpandableSection 
              id="pronunciation-subsection" 
              title={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span>Step 2: Pronunciation first (very important)</span>
                  <span style={{ fontSize: '1rem', direction: 'rtl' }}>النطق أولاً</span>
                  <AudioPlayer arabicText="النطق أولاً" className="alphabet-audio-btn" tone="default" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>(An-nuṭq awwalan)</span>
                </span>
              }
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', marginTop: '1rem' }}>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '6px' }}>
                  <p style={{ fontSize: '1rem', color: 'var(--text-color)', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                    If you can say words clearly, you'll learn faster.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                    Practice these every day (5 minutes)
                  </p>
                </div>

                {/* Vowel Sounds */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>A, E, I, O, U (sound practice)</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.75rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem' }}>A</div>
                      <div style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>أ</div>
                      <AudioPlayer arabicText="أ" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Alif<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আলিফ</div>
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem' }}>E</div>
                      <div style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>ي</div>
                      <AudioPlayer arabicText="ي" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Yāʾ<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইয়া</div>
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem' }}>I</div>
                      <div style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>إ</div>
                      <AudioPlayer arabicText="إ" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Alif<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আলিফ</div>
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem' }}>O</div>
                      <div style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>و</div>
                      <AudioPlayer arabicText="و" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Wāw<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ওয়াউ</div>
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem' }}>U</div>
                      <div style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>و</div>
                      <AudioPlayer arabicText="و" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Wāw<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ওয়াউ</div>
                    </div>
                  </div>
                </div>

                {/* Simple Words */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>Simple words: me, you, go, no, yes, name, water</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Me:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا</span>
                        <AudioPlayer arabicText="أنا" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• You:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنت</span>
                        <AudioPlayer arabicText="أنت" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anta</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনতা
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Go:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>اذهب</span>
                        <AudioPlayer arabicText="اذهب" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Idhhab</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইযহাব
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• No:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>لا</span>
                        <AudioPlayer arabicText="لا" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Lā</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> লা
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Yes:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>نعم</span>
                        <AudioPlayer arabicText="نعم" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Naʿam</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> নাআম
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Name:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>اسم</span>
                        <AudioPlayer arabicText="اسم" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Ism</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইসম
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• Water:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>ماء</span>
                        <AudioPlayer arabicText="ماء" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Māʾ</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> মা
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Practice Tip */}
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '8px', border: '1px solid rgba(13, 79, 28, 0.2)' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '0.75rem', fontWeight: '600' }}>A good beginner trick:</h4>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-color)', lineHeight: '1.8' }}>
                    <div style={{ marginBottom: '0.5rem' }}>1. <strong>Listen</strong> → Click the audio button</div>
                    <div style={{ marginBottom: '0.5rem' }}>2. <strong>Repeat</strong> → Say it out loud</div>
                    <div style={{ marginBottom: '0.5rem' }}>3. <strong>Record yourself</strong> → Use your phone</div>
                    <div>4. <strong>Repeat again</strong> → Compare and improve</div>
                  </div>
                </div>
              </div>
            </ExpandableSection>

            {/* Speaking from Day 1 Subsection */}
            <ExpandableSection 
              id="speaking-day1-subsection" 
              title={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span>Step 4: Speaking from Day 1 (even alone)</span>
                  <span style={{ fontSize: '1rem', direction: 'rtl' }}>التحدث من اليوم الأول</span>
                  <AudioPlayer arabicText="التحدث من اليوم الأول" className="alphabet-audio-btn" tone="default" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>(At-taḥadduth min al-yawm al-awwal)</span>
                </span>
              }
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', marginTop: '1rem' }}>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '6px' }}>
                  <p style={{ fontSize: '1rem', color: 'var(--text-color)', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                    You can talk to yourself—this works.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                    Daily speaking (5–10 minutes)
                  </p>
                </div>

                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"Today is Monday."</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>اليوم هو الاثنين</span>
                      <AudioPlayer arabicText="اليوم هو الاثنين" className="alphabet-audio-btn" tone="default" />
                      <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Al-yawm huwa al-ithnayn</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-ইয়াউম হুওয়া আল-ইসনাইন
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I am at home."</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا في البيت</span>
                      <AudioPlayer arabicText="أنا في البيت" className="alphabet-audio-btn" tone="default" />
                      <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā fī al-bayt</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ ফী আল-বাইত
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I eat rice."</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا آكل الأرز</span>
                      <AudioPlayer arabicText="أنا آكل الأرز" className="alphabet-audio-btn" tone="default" />
                      <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā ākul al-aruzz</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ আকুল আল-আরুয
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I drink water."</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا أشرب الماء</span>
                      <AudioPlayer arabicText="أنا أشرب الماء" className="alphabet-audio-btn" tone="default" />
                      <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā ashrab al-māʾ</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ আশরাব আল-মা
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I like tea."</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا أحب الشاي</span>
                      <AudioPlayer arabicText="أنا أحب الشاي" className="alphabet-audio-btn" tone="default" />
                      <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā uḥibb ash-shāy</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ উহিব্ব আশ-শাই
                    </div>
                  </li>
                </ul>

                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '6px', border: '1px solid rgba(13, 79, 28, 0.2)' }}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-color)', lineHeight: '1.6', fontStyle: 'italic' }}>
                    <strong>Keep it simple.</strong> Don't worry about mistakes.
                  </p>
                </div>
              </div>
            </ExpandableSection>

            {/* Tiny Grammar Subsection */}
            <ExpandableSection 
              id="tiny-grammar-subsection" 
              title={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span>Step 5: Tiny grammar (only after 2 weeks)</span>
                  <span style={{ fontSize: '1rem', direction: 'rtl' }}>قواعد صغيرة</span>
                  <AudioPlayer arabicText="قواعد صغيرة" className="alphabet-audio-btn" tone="default" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>(Qawāʿid ṣaghīra)</span>
                </span>
              }
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', marginTop: '1rem' }}>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '6px' }}>
                  <p style={{ fontSize: '1rem', color: 'var(--text-color)', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                    Just these 3 basics:
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--primary-color)', fontWeight: '600', fontStyle: 'italic' }}>
                    That's enough to start speaking correctly.
                  </p>
                </div>

                {/* I / You / He / She */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>I / You / He / She</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>I</div>
                      <div style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.25rem' }}>أنا</div>
                      <AudioPlayer arabicText="أنا" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>Anā<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ</div>
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>You (m)</div>
                      <div style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.25rem' }}>أنت</div>
                      <AudioPlayer arabicText="أنت" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>Anta<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনতা</div>
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>He</div>
                      <div style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.25rem' }}>هو</div>
                      <AudioPlayer arabicText="هو" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>Huwa<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হুওয়া</div>
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>She</div>
                      <div style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.25rem' }}>هي</div>
                      <AudioPlayer arabicText="هي" className="alphabet-audio-btn" tone="default" />
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>Hiya<br /><span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হিয়া</div>
                    </div>
                  </div>
                </div>

                {/* am / is / are */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>am / is / are</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• I am:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا</span>
                        <AudioPlayer arabicText="أنا" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ<br />
                        Example: أنا طالب (I am a student) - <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ তালিব
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• He/She is:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>هو / هي</span>
                        <AudioPlayer arabicText="هو هي" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Huwa / Hiya</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হুওয়া / হিয়া<br />
                        Example: هو طبيب (He is a doctor) - <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হুওয়া তাবীব
                      </div>
                    </li>
                    <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>• You are:</span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنت</span>
                        <AudioPlayer arabicText="أنت" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anta</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনতা<br />
                        Example: أنت طالب (You are a student) - <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনতা তালিব
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Simple Present */}
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>Simple present: "I eat." "He eats."</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"I eat."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا آكل</span>
                        <AudioPlayer arabicText="أنا آكل" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anā ākul</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ আকুল
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"He eats."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هو يأكل</span>
                        <AudioPlayer arabicText="هو يأكل" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Huwa yaʾkul</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হুওয়া ইয়াকুল
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"She eats."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هي تأكل</span>
                        <AudioPlayer arabicText="هي تأكل" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Hiya taʾkul</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হিয়া তাকুল
                      </div>
                    </li>
                    <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                      <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-color)' }}>"You eat."</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنت تأكل</span>
                        <AudioPlayer arabicText="أنت تأكل" className="alphabet-audio-btn" tone="default" />
                        <span style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>Anta taʾkul</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </ExpandableSection>

        {/* 30-Day Arabic Speaking Practice Plan */}
        <div style={{ marginTop: '2rem' }}>
        <ExpandableSection 
          id="30-day-practice" 
          title={createArabicTitle("৩০ দিনের আরবি কথা বলা অনুশীলন (30-Day Arabic Speaking Practice)", "ممارسة التحدث بالعربية لمدة 30 يوماً", "Mumārasat at-taḥadduth bi-l-ʿarabiyya li-muddat thalāthīn yawman")}
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
              title={createArabicTitle("Day 1 — Greetings (basic) (দিন ১ — অভিবাদন)", "اليوم الأول — التحيات (أساسي)", "Al-yawm al-awwal — At-taḥiyyāt (asāsī)")}
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
                      <strong>As-salāmu ʿalaykum</strong> (as-sa-laa-mu a-lay-kum)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আস-সালামু আলাইকুম
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• And upon you too:</span>
                        <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>وعليكم السلام</span>
                        <AudioPlayer arabicText="وعليكم السلام" className="alphabet-audio-btn" tone="default" />
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                        <strong>Wa ʿalaykum as-salām</strong> (wa a-lay-kum as-sa-laam)<br />
                        <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ওয়া আলাইকুম আস-সালাম
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
              title={createArabicTitle("Day 2 — Polite words (দিন ২ — শিষ্টাচারপূর্ণ শব্দ)", "اليوم الثاني — كلمات مهذبة", "Al-yawm ath-thānī — Kalimāt muḥadhdhaba")} 
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
                      <strong>Shukran</strong> (shuk-ran)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> শুকরান
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
              title={createArabicTitle('Day 3 — "I am / you are" (super important) (দিন ৩ — "আমি / আপনি")', 'اليوم الثالث — "أنا / أنت" (مهم جداً)', 'Al-yawm ath-thālith — "Anā / Anta" (muhimm jiddan)')} 
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
                      <strong>Anta…</strong> (an-ta)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনতা
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am Zaman:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا زمان</span>
                      <AudioPlayer arabicText="أنا زمان" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā Zaman</strong><br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ জামান
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
              title={createArabicTitle("Day 4 — Daily needs (দিন ৪ — দৈনন্দিন প্রয়োজন)", "اليوم الرابع — الاحتياجات اليومية", "Al-yawm ar-rābiʿ — Al-iḥtiyājāt al-yawmiyya")}
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
                      <strong>Aḥtāju…</strong> (ah-taa-ju)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আহতাজু
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I don't understand:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لا أفهم</span>
                      <AudioPlayer arabicText="لا أفهم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Lā afham</strong> (laa af-ham)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> লা আফহাম
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
              title={createArabicTitle("Day 5 — Numbers 1–10 (speak fast) (দিন ৫ — সংখ্যা ১-১০)", "اليوم الخامس — الأرقام 1-10 (تحدث بسرعة)", "Al-yawm al-khāmis — Al-arqām 1-10 (taḥaddath bi-surʿa)")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span>1:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>واحد</span>
                    <AudioPlayer arabicText="واحد" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>wāḥid</strong></span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', marginLeft: '0.5rem' }}>বাংলা: ওয়াহিদ</span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span>2:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>اثنان</span>
                    <AudioPlayer arabicText="اثنان" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>ithnayn</strong></span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', marginLeft: '0.5rem' }}>বাংলা: ইসনান</span>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span>3:</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ثلاثة</span>
                    <AudioPlayer arabicText="ثلاثة" className="alphabet-audio-btn" tone="default" />
                    <span style={{ fontSize: '0.9rem' }}><strong>thalātha</strong></span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', marginLeft: '0.5rem' }}>বাংলা: থালাসা</span>
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
              title={createArabicTitle("Day 6 — Food & drink basics (দিন ৬ — খাবার ও পানীয়ের মূল বিষয়)", "اليوم السادس — أساسيات الطعام والشراب", "Al-yawm as-sādis — Asāsiyyāt aṭ-ṭaʿām wa-sh-sharāb")} 
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
                      <strong>Mā'</strong> (maa')<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> মা
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Tea:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>شاي</span>
                      <AudioPlayer arabicText="شاي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Shāy</strong> (shaay)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> শাই
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
              title={createArabicTitle("Day 7 — Review Day (no new words) (দিন ৭ — পর্যালোচনা দিন)", "اليوم السابع — يوم المراجعة (لا كلمات جديدة)", "Al-yawm as-sābiʿ — Yawm al-murājaʿa (lā kalimāt jadīda)")} 
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
              title={createArabicTitle("Day 8 — Directions (street talk) (দিন ৮ — দিকনির্দেশনা)", "اليوم الثامن — الاتجاهات (كلام الشارع)", "Al-yawm ath-thāmin — Al-ittijāhāt (kalām ash-shāriʿ)")}
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
                      <strong>Hunā / Hunāk</strong> (hu-naa / hu-naak)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হুনা / হুনাক
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
              title={createArabicTitle("Day 9 — Time basics", "اليوم التاسع — أساسيات الوقت", "Al-yawm at-tāsiʿ — Asāsiyyāt al-waqt")} 
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
                      <strong>Al-ān</strong> (al-aan)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-আন
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
              title={createArabicTitle("Day 10 — Family (দিন ১০ — পরিবার)", "اليوم العاشر — العائلة", "Al-yawm al-ʿāshir — Al-ʿāʾila")} 
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
                      <strong>Akh / Ukht</strong><br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আখ / উখত
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
              title={createArabicTitle("Day 11 — Shopping phrases (দিন ১১ — কেনাকাটার বাক্য)", "اليوم الحادي عشر — عبارات التسوق", "Al-yawm al-ḥādī ʿashar — ʿIbārāt at-tasawwuq")} 
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
                      <strong>Rakhīṣ / Ghalī</strong> (ra-khees / gha-lee)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> রাখীস / গালী
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
              title={createArabicTitle("Day 12 — Compliments + friendly talk (দিন ১২ — প্রশংসা + বন্ধুত্বপূর্ণ কথা)", "اليوم الثاني عشر — المجاملات + الحديث الودي", "Al-yawm ath-thānī ʿashar — Al-mujāmalāt + Al-ḥadīth al-wadī")}
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
                      <strong>Jamīl</strong> (ja-meel)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> জামীল
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
              title={createArabicTitle("Day 13 — At the restaurant (দিন ১৩ — রেস্তোরাঁয়)", "اليوم الثالث عشر — في المطعم", "Al-yawm ath-thālith ʿashar — Fī al-maṭʿam")} 
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
                      <strong>Urīdu dajāj / laḥm</strong> (da-jaaj / lahm)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> উরীদু দাজাজ / লাহম
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
              title={createArabicTitle("Day 14 — Review Day (দিন ১৪ — পর্যালোচনা দিন)", "اليوم الرابع عشر — يوم المراجعة", "Al-yawm ar-rābiʿ ʿashar — Yawm al-murājaʿa")}
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
              title={createArabicTitle("Day 15 — Simple verbs (speak) (দিন ১৫ — সহজ ক্রিয়া)", "اليوم الخامس عشر — أفعال بسيطة (تحدث)", "Al-yawm al-khāmis ʿashar — Afʿāl basīṭa (taḥaddath)")} 
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
                      <strong>Ātī</strong> (aa-tee)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আতী
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I eat:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>آكل</span>
                      <AudioPlayer arabicText="آكل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ākul</strong> (aa-kul)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আকুল
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
              title={createArabicTitle('Day 16 — "Can you...?" + "I can..." (দিন ১৬ — "আপনি পারবেন...?" + "আমি পারি...")', 'اليوم السادس عشر — "هل تستطيع...؟" + "أستطيع..."', 'Al-yawm as-sādis ʿashar — "Hal tastatīʿ...?" + "Astatīʿ..."')} 
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
                      <strong>Astatīʿ</strong> (as-ta-tee')<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আসতাতী
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I can't:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لا أستطيع</span>
                      <AudioPlayer arabicText="لا أستطيع" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Lā astatīʿ</strong><br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> লা আসতাতী
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 17 */}
            <ExpandableSection 
              id="day-17" 
              title={createArabicTitle("Day 17 — Feelings (দিন ১৭ — অনুভূতি)", "اليوم السابع عشر — المشاعر", "Al-yawm as-sābiʿ ʿashar — Al-mashāʿir")} 
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
                      <strong>Taʿbān</strong> (ta'-baan)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> তাবান
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
              title={createArabicTitle("Day 18 — At the airport / travel", "اليوم الثامن عشر — في المطار / السفر", "Al-yawm ath-thāmin ʿashar — Fī al-maṭār / As-safar")} 
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
                      <strong>Tadhkira</strong> (taz-ki-ra)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> তাযকিরা
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
              title={createArabicTitle("Day 19 — In a taxi (দিন ১৯ — ট্যাক্সিতে)", "اليوم التاسع عشر — في التاكسي", "Al-yawm at-tāsiʿ ʿashar — Fī at-tāksī")}
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
                      <strong>Ilā… min faḍlik</strong><br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইলা মিন ফাদলিক
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• How long?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كم المدة؟</span>
                      <AudioPlayer arabicText="كم المدة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kam al-mudda?</strong> (kam al-mud-da)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> কাম আল-মুদ্দা?
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 20 */}
            <ExpandableSection 
              id="day-20" 
              title={createArabicTitle("Day 20 — Making requests (দিন ২০ — অনুরোধ করা)", "اليوم العشرون — تقديم الطلبات", "Al-yawm al-ʿishrūn — Taqdīm aṭ-ṭalabāt")} 
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
                      <strong>Iftaḥ / Ighlaq</strong> (if-tah / igh-laq)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইফতাহ / ইগলাক
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Wait:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>انتظر</span>
                      <AudioPlayer arabicText="انتظر" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Intaẓir</strong> (in-ta-zir)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইনতাযির
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 21 */}
            <ExpandableSection 
              id="day-21" 
              title={createArabicTitle("Day 21 — Review Day (দিন ২১ — পর্যালোচনা দিন)", "اليوم الحادي والعشرون — يوم المراجعة", "Al-yawm al-ḥādī wa-l-ʿishrūn — Yawm al-murājaʿa")} 
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
              title={createArabicTitle("Day 22 — Questions (the magic set) (দিন ২২ — প্রশ্ন)", "اليوم الثاني والعشرون — الأسئلة (المجموعة السحرية)", "Al-yawm ath-thānī wa-l-ʿishrūn — Al-asʾila (al-majmūʿa as-siḥriyya)")} 
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
                      <strong>Ayna?</strong><br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আইনা?
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
              title={createArabicTitle("Day 23 — Describing things (দিন ২৩ — জিনিস বর্ণনা করা)", "اليوم الثالث والعشرون — وصف الأشياء", "Al-yawm ath-thālith wa-l-ʿishrūn — Waṣf al-ashyāʾ")}
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
                      <strong>Ḥārr / bārid</strong><br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হার / বারিদ
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
              title={createArabicTitle("Day 24 — Talking about your day (দিন ২৪ — আপনার দিন সম্পর্কে কথা বলা)", "اليوم الرابع والعشرون — الحديث عن يومك", "Al-yawm ar-rābiʿ wa-l-ʿishrūn — Al-ḥadīth ʿan yawmik")} 
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
                      <strong>Aʿmal</strong> (a'-mal)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আমাল
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
              title={createArabicTitle("Day 25 — Common mistakes fixer (pronunciation focus) (দিন ২৫ — সাধারণ ভুল সংশোধন)", "اليوم الخامس والعشرون — إصلاح الأخطاء الشائعة (تركيز على النطق)", "Al-yawm al-khāmis wa-l-ʿishrūn — Iṣlāḥ al-akhṭāʾ ash-shāʾiʿa (tarkīz ʿalā an-nuṭq)")} 
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
              title={createArabicTitle("Day 26 — Simple conversation builder (templates)", "اليوم السادس والعشرون — بناء محادثة بسيطة (قوالب)", "Al-yawm as-sādis wa-l-ʿishrūn — Bināʾ muḥādatha basīṭa (qawālib)")} 
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
              title={createArabicTitle("Day 27 — Conversation: meeting someone (দিন ২৭ — কথোপকথন: কারো সাথে দেখা)", "اليوم السابع والعشرون — محادثة: لقاء شخص", "Al-yawm as-sābiʿ wa-l-ʿishrūn — Muḥādatha: liqāʾ shakhṣ")} 
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
              title={createArabicTitle("Day 28 — Conversation: shopping + directions (দিন ২৮ — কথোপকথন: কেনাকাটা + দিকনির্দেশনা)", "اليوم الثامن والعشرون — محادثة: التسوق + الاتجاهات", "Al-yawm ath-thāmin wa-l-ʿishrūn — Muḥādatha: At-tasawwuq + Al-ittijāhāt")}
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
              title={createArabicTitle("Day 29 — Conversation: restaurant + taxi (দিন ২৯ — কথোপকথন: রেস্তোরাঁ + ট্যাক্সি)", "اليوم التاسع والعشرون — محادثة: المطعم + التاكسي", "Al-yawm at-tāsiʿ wa-l-ʿishrūn — Muḥādatha: al-maṭʿam + at-tāksī")} 
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
              title={createArabicTitle('Day 30 — Your "real life speaking test" (দিন ৩০ — আপনার "বাস্তব জীবনের কথা বলা পরীক্ষা")', 'اليوم الثلاثون — "اختبار التحدث في الحياة الحقيقية"', 'Al-yawm ath-thalāthūn — "Ikhtibār at-taḥadduth fī al-ḥayāh al-ḥaqīqiyya"')} 
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
        </div>

        {/* 31-60 Day Arabic Speaking Practice Plan */}
        <div style={{ marginTop: '2rem' }}>
        <ExpandableSection 
          id="31-60-day-practice" 
          title={createArabicTitle("৩১-৬০ দিনের আরবি কথা বলা অনুশীলন (31-60 Day Arabic Speaking Practice)", "ممارسة التحدث بالعربية من اليوم 31 إلى 60", "Mumārasat at-taḥadduth bi-l-ʿarabiyya min al-yawm 31 ilā 60")}
          defaultOpen={false}
          className="dua-category-wrapper"
          number={3}
        >
          <div className="dua-item">
            <div className="practice-plan-intro" style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(13, 79, 28, 0.05)', borderRadius: '8px', border: '1px solid rgba(13, 79, 28, 0.2)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                ৩১-৬০ দিনে আরবি কথা বলা শিখুন (Learn Arabic Speaking in Days 31-60)
              </h3>
              <p style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-color)', lineHeight: '1.6' }}>
                প্রথম ৩০ দিন সম্পন্ন করার পর, এখন আপনি আরও উন্নত আরবি শিখবেন। এই অংশে আপনি অতীত ও ভবিষ্যৎ কাল, আবেগ, মতামত, এবং আরও অনেক ব্যবহারিক কথোপকথন শিখবেন।
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

            {/* Day 31 */}
            <ExpandableSection 
              id="day-31" 
              title={createArabicTitle("Day 31 — Past tense verbs (I did...) (দিন ৩১ — অতীত কালের ক্রিয়া)", "اليوم الحادي والثلاثون — أفعال الماضي (فعلت...)", "Al-yawm al-ḥādī wa-th-thalāthūn — Afʿāl al-māḍī (faʿaltu...)")}
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I went:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ذهبت</span>
                      <AudioPlayer arabicText="ذهبت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Dhahabtu</strong> (dha-hab-tu)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I ate:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أكلت</span>
                      <AudioPlayer arabicText="أكلت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Akalatu</strong> (a-ka-la-tu)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আকালাতু
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I drank:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>شربت</span>
                      <AudioPlayer arabicText="شربت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Sharabtu</strong> (sha-rab-tu)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I bought:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>اشتريت</span>
                      <AudioPlayer arabicText="اشتريت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ishtaraytu</strong> (ish-ta-ray-tu)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I saw:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>رأيت</span>
                      <AudioPlayer arabicText="رأيت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Raʾaytu</strong> (ra-ay-tu)
                    </div>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Make sentences: <strong>Dhahabtu ilā... / Akalatu... / Sharabtu...</strong></p>
              </div>
            </ExpandableSection>

            {/* Day 32 */}
            <ExpandableSection 
              id="day-32" 
              title={createArabicTitle("Day 32 — Future tense (I will...) (দিন ৩২ — ভবিষ্যৎ কাল)", "اليوم الثاني والثلاثون — المستقبل (سأفعل...)", "Al-yawm ath-thānī wa-th-thalāthūn — Al-mustaqbal (sa-afʿal...)")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I will go:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>سأذهب</span>
                      <AudioPlayer arabicText="سأذهب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Sa-adhhab</strong> (sa-adh-hab)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I will eat:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>سآكل</span>
                      <AudioPlayer arabicText="سآكل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Sa-ākul</strong> (sa-aa-kul)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> সা-আকুল
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I will buy:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>سأشتري</span>
                      <AudioPlayer arabicText="سأشتري" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Sa-ashtarī</strong> (sa-ash-ta-ree)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I will come:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>سأتي</span>
                      <AudioPlayer arabicText="سأتي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Sa-ātī</strong> (sa-aa-tee)
                    </div>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Practice: <strong>Sa-adhhab ghadan... / Sa-ākul al-ān...</strong></p>
              </div>
            </ExpandableSection>

            {/* Day 33 */}
            <ExpandableSection 
              id="day-33" 
              title={createArabicTitle("Day 33 — Weather & seasons (দিন ৩৩ — আবহাওয়া ও ঋতু)", "اليوم الثالث والثلاثون — الطقس والفصول", "Al-yawm ath-thālith wa-th-thalāthūn — Aṭ-ṭaqs wa-l-fuṣūl")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Hot:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>حار</span>
                      <AudioPlayer arabicText="حار" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ḥārr</strong> (haar)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Cold:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>بارد</span>
                      <AudioPlayer arabicText="بارد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Bārid</strong> (baa-rid)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> বারিদ
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Rain:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مطر</span>
                      <AudioPlayer arabicText="مطر" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Maṭar</strong> (ma-tar)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• How is the weather?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كيف الطقس؟</span>
                      <AudioPlayer arabicText="كيف الطقس" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kayfa aṭ-ṭaqs?</strong> (kay-fa at-taqs)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 34 */}
            <ExpandableSection 
              id="day-34" 
              title={createArabicTitle("Day 34 — Body parts (দিন ৩৪ — শরীরের অংশ)", "اليوم الرابع والثلاثون — أجزاء الجسم", "Al-yawm ar-rābiʿ wa-th-thalāthūn — Ajzāʾ al-jism")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Head:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>رأس</span>
                      <AudioPlayer arabicText="رأس" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Raʾs</strong> (ras)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Hand:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>يد</span>
                      <AudioPlayer arabicText="يد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Yad</strong> (yad)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইয়াদ
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Foot:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>قدم</span>
                      <AudioPlayer arabicText="قدم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Qadam</strong> (qa-dam)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Eye:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>عين</span>
                      <AudioPlayer arabicText="عين" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>ʿAyn</strong> (ayn)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• My head hurts:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>رأسي يؤلمني</span>
                      <AudioPlayer arabicText="رأسي يؤلمني" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Raʾsī yuʾlimunī</strong> (ras-ee yu-lim-u-nee)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 35 */}
            <ExpandableSection 
              id="day-35" 
              title={createArabicTitle("Day 35 — Colors (দিন ৩৫ — রং)", "اليوم الخامس والثلاثون — الألوان", "Al-yawm al-khāmis wa-th-thalāthūn — Al-alwān")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Red:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أحمر</span>
                      <AudioPlayer arabicText="أحمر" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aḥmar</strong> (ah-mar)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Blue:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أزرق</span>
                      <AudioPlayer arabicText="أزرق" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Azraq</strong> (az-raq)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আজরাক
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Green:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أخضر</span>
                      <AudioPlayer arabicText="أخضر" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Akhḍar</strong> (akh-dar)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আখদার
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• White:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أبيض</span>
                      <AudioPlayer arabicText="أبيض" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Abyaḍ</strong> (ab-yad)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Black:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أسود</span>
                      <AudioPlayer arabicText="أسود" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aswad</strong> (as-wad)
                    </div>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Practice: <strong>Urīdu qamīṣan aḥmar... / Al-bayt akhḍar...</strong></p>
              </div>
            </ExpandableSection>

            {/* Day 36 */}
            <ExpandableSection 
              id="day-36" 
              title={createArabicTitle("Day 36 — At the hotel (দিন ৩৬ — হোটেলে)", "اليوم السادس والثلاثون — في الفندق", "Al-yawm as-sādis wa-th-thalāthūn — Fī al-funduq")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Room:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>غرفة</span>
                      <AudioPlayer arabicText="غرفة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ghurfa</strong> (ghur-fa)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I need a room:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أحتاج غرفة</span>
                      <AudioPlayer arabicText="أحتاج غرفة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aḥtāju ghurfa</strong> (ah-taa-ju ghur-fa)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আহতাজু ঘুরফা
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Key:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مفتاح</span>
                      <AudioPlayer arabicText="مفتاح" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Miftāḥ</strong> (mif-tah)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> মিফতাহ
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Where is my room?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أين غرفتي؟</span>
                      <AudioPlayer arabicText="أين غرفتي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ayna ghurfatī?</strong> (ay-na ghur-fa-tee)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আইনা ঘুরফাতী?
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 37 */}
            <ExpandableSection 
              id="day-37" 
              title={createArabicTitle("Day 37 — Review Day (দিন ৩৭ — পর্যালোচনা দিন)", "اليوم السابع والثلاثون — يوم المراجعة", "Al-yawm as-sābiʿ wa-th-thalāthūn — Yawm al-murājaʿa")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Review Days 31-36. Practice: <strong>Tell what you did yesterday + what you will do tomorrow + describe weather + body parts + colors</strong>.</p>
              </div>
            </ExpandableSection>

            {/* Day 38 */}
            <ExpandableSection 
              id="day-38" 
              title={createArabicTitle("Day 38 — More verbs (daily actions) (দিন ৩৮ — আরও ক্রিয়া)", "اليوم الثامن والثلاثون — المزيد من الأفعال (أفعال يومية)", "Al-yawm ath-thāmin wa-th-thalāthūn — Al-mazīd min al-afʿāl (afʿāl yawmiyya)")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
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
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I wake up:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أستيقظ</span>
                      <AudioPlayer arabicText="أستيقظ" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Astayqiẓ</strong> (as-tay-qiz)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আসতাইকিয
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I work:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أعمل</span>
                      <AudioPlayer arabicText="أعمل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aʿmal</strong> (a-mal)
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
                      <span>• I read:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أقرأ</span>
                      <AudioPlayer arabicText="أقرأ" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aqraʾ</strong> (aq-ra)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 39 */}
            <ExpandableSection 
              id="day-39" 
              title={createArabicTitle("Day 39 — Clothes & shopping (দিন ৩৯ — পোশাক ও কেনাকাটা)", "اليوم التاسع والثلاثون — الملابس والتسوق", "Al-yawm at-tāsiʿ wa-th-thalāthūn — Al-malābis wa-t-tasawwuq")}
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Shirt:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>قميص</span>
                      <AudioPlayer arabicText="قميص" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Qamīṣ</strong> (qa-mees)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Pants:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>بنطلون</span>
                      <AudioPlayer arabicText="بنطلون" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Bantalūn</strong> (ban-ta-loon)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> বানতালূন
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Shoes:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أحذية</span>
                      <AudioPlayer arabicText="أحذية" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aḥdhiya</strong> (ah-dhi-ya)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আহধিয়া
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I want to try this:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد أن أجرب هذا</span>
                      <AudioPlayer arabicText="أريد أن أجرب هذا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Urīdu an ujarriba hādhā</strong> (u-ree-du an u-jar-ri-ba haa-dhaa)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 40 */}
            <ExpandableSection 
              id="day-40" 
              title={createArabicTitle("Day 40 — Health & doctor (দিন ৪০ — স্বাস্থ্য ও ডাক্তার)", "اليوم الأربعون — الصحة والطبيب", "Al-yawm al-arbaʿūn — Aṣ-ṣiḥḥa wa-ṭ-ṭabīb")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Doctor:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>طبيب</span>
                      <AudioPlayer arabicText="طبيب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ṭabīb</strong> (ta-beeb)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am sick:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا مريض</span>
                      <AudioPlayer arabicText="أنا مريض" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā marīḍ</strong> (a-naa ma-reed)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ মারীদ
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Medicine:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>دواء</span>
                      <AudioPlayer arabicText="دواء" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Dawāʾ</strong> (da-waa)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> দাওয়া
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Where is the hospital?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أين المستشفى؟</span>
                      <AudioPlayer arabicText="أين المستشفى" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ayna al-mustashfā?</strong> (ay-na al-mus-tash-faa)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আইনা আল-মুস্তাশফা?
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 41 */}
            <ExpandableSection 
              id="day-41" 
              title={createArabicTitle("Day 41 — Phone & technology", "اليوم الحادي والأربعون — الهاتف والتكنولوجيا", "Al-yawm al-ḥādī wa-l-arbaʿūn — Al-hātif wa-t-tiknūlūjiyā")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Phone:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هاتف</span>
                      <AudioPlayer arabicText="هاتف" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Hātif</strong> (haa-tif)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• What is your phone number?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ما رقم هاتفك؟</span>
                      <AudioPlayer arabicText="ما رقم هاتفك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Mā raqm hātifika?</strong> (maa raqm haa-ti-fi-ka)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> মা রাকম হাতিফিকা?
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Internet:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>إنترنت</span>
                      <AudioPlayer arabicText="إنترنت" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Internet</strong> (in-ter-net)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইন্টারনেট
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Wi-Fi password:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كلمة سر الواي فاي</span>
                      <AudioPlayer arabicText="كلمة سر الواي فاي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kalimat sirr al-wāy fāy</strong> (ka-li-mat sirr al-waa-y faa-y)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 42 */}
            <ExpandableSection 
              id="day-42" 
              title={createArabicTitle("Day 42 — Money & banking (দিন ৪২ — টাকা ও ব্যাংকিং)", "اليوم الثاني والأربعون — المال والبنوك", "Al-yawm ath-thānī wa-l-arbaʿūn — Al-māl wa-l-bunūk")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Money:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مال</span>
                      <AudioPlayer arabicText="مال" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Māl</strong> (maal)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Bank:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>بنك</span>
                      <AudioPlayer arabicText="بنك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Bank</strong> (bank)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ব্যাংক
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• ATM:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>صراف آلي</span>
                      <AudioPlayer arabicText="صراف آلي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ṣarrāf ālī</strong> (sar-raaf aa-lee)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> সাররাফ আলী
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I want to exchange money:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد صرف النقود</span>
                      <AudioPlayer arabicText="أريد صرف النقود" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Urīdu ṣarf an-nuqūd</strong> (u-ree-du sarf an-nu-quud)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 43 */}
            <ExpandableSection 
              id="day-43" 
              title={createArabicTitle("Day 43 — Transportation (advanced) (দিন ৪৩ — পরিবহন)", "اليوم الثالث والأربعون — النقل (متقدم)", "Al-yawm ath-thālith wa-l-arbaʿūn — An-naql (mutaqaddim)")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Bus:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>حافلة</span>
                      <AudioPlayer arabicText="حافلة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ḥāfila</strong> (haa-fi-la)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Train:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>قطار</span>
                      <AudioPlayer arabicText="قطار" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Qiṭār</strong> (qi-taar)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Ticket:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>تذكرة</span>
                      <AudioPlayer arabicText="تذكرة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Tadhkira</strong> (tadh-ki-ra)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> তাযকিরা
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Where does this bus go?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>إلى أين تذهب هذه الحافلة؟</span>
                      <AudioPlayer arabicText="إلى أين تذهب هذه الحافلة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ilā ayna tadhhab hādhihi al-ḥāfila?</strong> (i-laa ay-na tadh-hab haa-dhi-hi al-haa-fi-la)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইলা আইনা তাযহাব হাধিহি আল-হাফিলা?
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 44 */}
            <ExpandableSection 
              id="day-44" 
              title={createArabicTitle("Day 44 — Review Day (দিন ৪৪ — পর্যালোচনা দিন)", "اليوم الرابع والأربعون — يوم المراجعة", "Al-yawm ar-rābiʿ wa-l-arbaʿūn — Yawm al-murājaʿa")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Review Days 38-43. Practice: <strong>Describe your daily routine + shopping for clothes + health issues + phone conversation + banking</strong>.</p>
              </div>
            </ExpandableSection>

            {/* Day 45 */}
            <ExpandableSection 
              id="day-45" 
              title={createArabicTitle("Day 45 — Emotions & expressions (দিন ৪৫ — আবেগ ও অভিব্যক্তি)", "اليوم الخامس والأربعون — المشاعر والتعبيرات", "Al-yawm al-khāmis wa-l-arbaʿūn — Al-mashāʿir wa-t-taʿbīrāt")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am happy:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا سعيد</span>
                      <AudioPlayer arabicText="أنا سعيد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā saʿīd</strong> (a-naa sa-eed)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am sad:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا حزين</span>
                      <AudioPlayer arabicText="أنا حزين" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā ḥazīn</strong> (a-naa ha-zeen)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am tired:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا متعب</span>
                      <AudioPlayer arabicText="أنا متعب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā mutʿab</strong> (a-naa mut-ab)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ মুতাব
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I am excited:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أنا متحمس</span>
                      <AudioPlayer arabicText="أنا متحمس" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Anā mutaḥammis</strong> (a-naa mu-ta-ham-mis)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আনাআ মুতাহাম্মিস
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 46 */}
            <ExpandableSection 
              id="day-46" 
              title={createArabicTitle("Day 46 — Making plans (দিন ৪৬ — পরিকল্পনা করা)", "اليوم السادس والأربعون — وضع الخطط", "Al-yawm as-sādis wa-l-arbaʿūn — Waḍʿ al-khuṭuṭ")}
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Tomorrow:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>غدا</span>
                      <AudioPlayer arabicText="غدا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ghadan</strong> (gha-dan)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Next week:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الأسبوع القادم</span>
                      <AudioPlayer arabicText="الأسبوع القادم" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Al-usbūʿ al-qādim</strong> (al-us-buu' al-qa-dim)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-উসবূআ আল-কাদিম
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Let's meet:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>دعنا نلتقي</span>
                      <AudioPlayer arabicText="دعنا نلتقي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Daʿnā naltaqī</strong> (da-naa nal-ta-qee)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> দানা নালতাকী
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• What time?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>في أي ساعة؟</span>
                      <AudioPlayer arabicText="في أي ساعة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Fī ayyi sāʿa?</strong> (fee ay-yi saa-a)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ফী আইয়ি সাআ?
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 47 */}
            <ExpandableSection 
              id="day-47" 
              title={createArabicTitle("Day 47 — Hobbies & interests (দিন ৪৭ — শখ ও আগ্রহ)", "اليوم السابع والأربعون — الهوايات والاهتمامات", "Al-yawm as-sābiʿ wa-l-arbaʿūn — Al-hawāyāt wa-l-ihtimāmāt")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I like:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أحب</span>
                      <AudioPlayer arabicText="أحب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Uḥibb</strong> (u-hibb)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Reading:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>القراءة</span>
                      <AudioPlayer arabicText="القراءة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Al-qirāʾa</strong> (al-qi-raa-a)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> আল-কিরাআ
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Sports:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>الرياضة</span>
                      <AudioPlayer arabicText="الرياضة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ar-riyāḍa</strong> (ar-ri-yaa-da)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• What do you like?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ماذا تحب؟</span>
                      <AudioPlayer arabicText="ماذا تحب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Mādhā tuḥibb?</strong> (maa-dhaa tu-hibb)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 48 */}
            <ExpandableSection 
              id="day-48" 
              title={createArabicTitle("Day 48 — At the market (দিন ৪৮ — বাজারে)", "اليوم الثامن والأربعون — في السوق", "Al-yawm ath-thāmin wa-l-arbaʿūn — Fī as-sūq")}
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Market:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>سوق</span>
                      <AudioPlayer arabicText="سوق" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Sūq</strong> (sooq)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• How much per kilo?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>كم للكيلو؟</span>
                      <AudioPlayer arabicText="كم للكيلو" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Kam lil-kilū?</strong> (kam lil-ki-loo)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Fresh:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>طازج</span>
                      <AudioPlayer arabicText="طازج" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ṭāzij</strong> (taa-zij)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> তাজিজ
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Give me half a kilo:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أعطني نصف كيلو</span>
                      <AudioPlayer arabicText="أعطني نصف كيلو" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aʿṭinī niṣf kilū</strong> (a-ti-nee nisf ki-loo)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 49 */}
            <ExpandableSection 
              id="day-49" 
              title={createArabicTitle("Day 49 — Giving directions (detailed) (দিন ৪৯ — দিকনির্দেশনা দেওয়া)", "اليوم التاسع والأربعون — إعطاء الاتجاهات (مفصل)", "Al-yawm at-tāsiʿ wa-l-arbaʿūn — Iʿṭāʾ al-ittijāhāt (mufaṣṣal)")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Turn right:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>انعطف يمينا</span>
                      <AudioPlayer arabicText="انعطف يمينا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Inʿaṭif yamīnan</strong> (in-a-tif ya-mee-nan)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Turn left:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>انعطف يسارا</span>
                      <AudioPlayer arabicText="انعطف يسارا" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Inʿaṭif yasāran</strong> (in-a-tif ya-saa-ran)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Go straight:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>امش مباشرة</span>
                      <AudioPlayer arabicText="امش مباشرة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Imshi mubāsharatan</strong> (im-shi mu-baa-sha-ra-tan)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> ইমশি মুবাশারাতান
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• It's near:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>إنه قريب</span>
                      <AudioPlayer arabicText="إنه قريب" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Innahu qarīb</strong> (in-na-hu qa-reeb)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 50 */}
            <ExpandableSection 
              id="day-50" 
              title={createArabicTitle("Day 50 — Review Day (দিন ৫০ — পর্যালোচনা দিন)", "اليوم الخمسون — يوم المراجعة", "Al-yawm al-khamsūn — Yawm al-murājaʿa")}
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Review Days 45-49. Practice: <strong>Talk about emotions + make plans + discuss hobbies + market shopping + give detailed directions</strong>.</p>
              </div>
            </ExpandableSection>

            {/* Day 51 */}
            <ExpandableSection 
              id="day-51" 
              title={createArabicTitle("Day 51 — Numbers 11-20 (speaking) (দিন ৫১ — সংখ্যা ১১-২০)", "اليوم الحادي والخمسون — الأرقام 11-20 (التحدث)", "Al-yawm al-ḥādī wa-l-khamsūn — Al-arqām 11-20 (at-taḥadduth)")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Practice saying numbers 11-20 fast:</p>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>١١</span>
                    <AudioPlayer arabicText="أحد عشر" className="alphabet-audio-btn" tone="default" />
                    <span style={{ marginLeft: '0.5rem', fontFamily: 'monospace' }}>Aḥada ʿashar</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>١٥</span>
                    <AudioPlayer arabicText="خمسة عشر" className="alphabet-audio-btn" tone="default" />
                    <span style={{ marginLeft: '0.5rem', fontFamily: 'monospace' }}>Khamsata ʿashar</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '600' }}>٢٠</span>
                    <AudioPlayer arabicText="عشرون" className="alphabet-audio-btn" tone="default" />
                    <span style={{ marginLeft: '0.5rem', fontFamily: 'monospace' }}>ʿIshrūn</span>
                  </li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Practice prices: <strong>Kam thaman hādhā? Thamānīya ʿashar riyālan.</strong></p>
              </div>
            </ExpandableSection>

            {/* Day 52 */}
            <ExpandableSection 
              id="day-52" 
              title={createArabicTitle("Day 52 — Time expressions (advanced) (দিন ৫২ — সময়ের অভিব্যক্তি)", "اليوم الثاني والخمسون — تعبيرات الوقت (متقدم)", "Al-yawm ath-thānī wa-l-khamsūn — Taʿbīrāt al-waqt (mutaqaddim)")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Morning:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>صباح</span>
                      <AudioPlayer arabicText="صباح" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ṣabāḥ</strong> (sa-bah)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Evening:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مساء</span>
                      <AudioPlayer arabicText="مساء" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Masāʾ</strong> (ma-saa)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Night:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ليل</span>
                      <AudioPlayer arabicText="ليل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Layl</strong> (layl)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> লাইল
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Good morning:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>صباح الخير</span>
                      <AudioPlayer arabicText="صباح الخير" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ṣabāḥ al-khayr</strong> (sa-bah al-khayr)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 53 */}
            <ExpandableSection 
              id="day-53" 
              title={createArabicTitle("Day 53 — Asking for help (দিন ৫৩ — সাহায্য চাওয়া)", "اليوم الثالث والخمسون — طلب المساعدة", "Al-yawm ath-thālith wa-l-khamsūn — Ṭalab al-musāʿada")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Help me please:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>ساعدني من فضلك</span>
                      <AudioPlayer arabicText="ساعدني من فضلك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Sāʿidnī min faḍlik</strong> (saa-id-nee min fad-lik)
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
                      <span>• Can you repeat?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هل يمكنك التكرار؟</span>
                      <AudioPlayer arabicText="هل يمكنك التكرار" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Hal yumkinuka at-tikrār?</strong> (hal yum-ki-nu-ka at-tik-raar)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হাল ইয়ুমকিনুকা আত-তিকরার?
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Speak slowly:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>تحدث ببطء</span>
                      <AudioPlayer arabicText="تحدث ببطء" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Tahaḍdath bi-buṭʾ</strong> (ta-had-dath bi-but')
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 54 */}
            <ExpandableSection 
              id="day-54" 
              title={createArabicTitle("Day 54 — Expressing opinions (দিন ৫৪ — মতামত প্রকাশ করা)", "اليوم الرابع والخمسون — التعبير عن الآراء", "Al-yawm ar-rābiʿ wa-l-khamsūn — At-taʿbīr ʿan al-ārāʾ")}
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I think:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أعتقد</span>
                      <AudioPlayer arabicText="أعتقد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aʿtaqid</strong> (a-ta-qid)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• In my opinion:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>في رأيي</span>
                      <AudioPlayer arabicText="في رأيي" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Fī raʾyī</strong> (fee ra-yee)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I agree:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أوافق</span>
                      <AudioPlayer arabicText="أوافق" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ūāfiq</strong> (u-aa-fiq)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> উআফিক
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I disagree:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لا أوافق</span>
                      <AudioPlayer arabicText="لا أوافق" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Lā ūāfiq</strong> (laa u-aa-fiq)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 55 */}
            <ExpandableSection 
              id="day-55" 
              title={createArabicTitle("Day 55 — Making comparisons (দিন ৫৫ — তুলনা করা)", "اليوم الخامس والخمسون — المقارنات", "Al-yawm al-khāmis wa-l-khamsūn — Al-muqāranāt")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Bigger:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أكبر</span>
                      <AudioPlayer arabicText="أكبر" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Akbar</strong> (ak-bar)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Smaller:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أصغر</span>
                      <AudioPlayer arabicText="أصغر" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Aṣghar</strong> (as-ghar)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Better:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أفضل</span>
                      <AudioPlayer arabicText="أفضل" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Afḍal</strong> (af-dal)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• This is better than that:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هذا أفضل من ذلك</span>
                      <AudioPlayer arabicText="هذا أفضل من ذلك" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Hādhā afḍal min dhālik</strong> (haa-dhaa af-dal min dhaa-lik)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 56 */}
            <ExpandableSection 
              id="day-56" 
              title={createArabicTitle("Day 56 — Review Day (দিন ৫৬ — পর্যালোচনা দিন)", "اليوم السادس والخمسون — يوم المراجعة", "Al-yawm as-sādis wa-l-khamsūn — Yawm al-murājaʿa")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <p style={{ lineHeight: '1.8' }}>Review Days 51-55. Practice: <strong>Numbers 11-20 + time expressions + asking for help + expressing opinions + making comparisons</strong>.</p>
              </div>
            </ExpandableSection>

            {/* Day 57 */}
            <ExpandableSection 
              id="day-57" 
              title={createArabicTitle("Day 57 — Conversation: At the post office (দিন ৫৭ — কথোপকথন: ডাকঘরে)", "اليوم السابع والخمسون — محادثة: في مكتب البريد", "Al-yawm as-sābiʿ wa-l-khamsūn — Muḥādatha: Fī maktab al-barīd")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Post office:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>مكتب البريد</span>
                      <AudioPlayer arabicText="مكتب البريد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Maktab al-barīd</strong> (mak-tab al-ba-reed)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Stamp:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>طابع</span>
                      <AudioPlayer arabicText="طابع" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ṭābiʿ</strong> (taa-bi')
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I want to send a letter:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد إرسال رسالة</span>
                      <AudioPlayer arabicText="أريد إرسال رسالة" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Urīdu irsāl risāla</strong> (u-ree-du ir-saal ri-saa-la)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> উরীদু ইরসাল রিসালা
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 58 */}
            <ExpandableSection 
              id="day-58" 
              title={createArabicTitle("Day 58 — Conversation: At the pharmacy (দিন ৫৮ — কথোপকথন: ফার্মেসিতে)", "اليوم الثامن والخمسون — محادثة: في الصيدلية", "Al-yawm ath-thāmin wa-l-khamsūn — Muḥādatha: Fī aṣ-ṣaydaliyya")}
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Pharmacy:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>صيدلية</span>
                      <AudioPlayer arabicText="صيدلية" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ṣaydaliyya</strong> (say-da-liy-ya)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I have a headache:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>لدي صداع</span>
                      <AudioPlayer arabicText="لدي صداع" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Ladī ṣadāʿ</strong> (la-dee sa-daa')
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Do you have medicine for...?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هل لديك دواء لـ...؟</span>
                      <AudioPlayer arabicText="هل لديك دواء" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Hal ladayka dawāʾ li-...?</strong> (hal la-day-ka da-waa li)
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 59 */}
            <ExpandableSection 
              id="day-59" 
              title={createArabicTitle("Day 59 — Conversation: Making appointments (দিন ৫৯ — কথোপকথন: অ্যাপয়েন্টমেন্ট করা)", "اليوم التاسع والخمسون — محادثة: تحديد المواعيد", "Al-yawm at-tāsiʿ wa-l-khamsūn — Muḥādatha: Taḥdīd al-mawāʿīd")} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '2' }}>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Appointment:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>موعد</span>
                      <AudioPlayer arabicText="موعد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Mawʿid</strong> (maw-id)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• I want to make an appointment:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>أريد تحديد موعد</span>
                      <AudioPlayer arabicText="أريد تحديد موعد" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Urīdu taḥdīd mawʿid</strong> (u-ree-du tah-deed maw-id)
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(13, 79, 28, 0.03)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span>• Is tomorrow available?:</span>
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600' }}>هل غدا متاح؟</span>
                      <AudioPlayer arabicText="هل غدا متاح" className="alphabet-audio-btn" tone="default" />
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '1rem' }}>
                      <strong>Hal ghadan mutāḥ?</strong> (hal gha-dan mu-taah)<br />
                      <span style={{ color: 'var(--primary-color)' }}>বাংলা:</span> হাল ঘাদান মুতাহ?
                    </div>
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Day 60 */}
            <ExpandableSection 
              id="day-60" 
              title={createArabicTitle('Day 60 — Final speaking test (60 days milestone) (দিন ৬০ — চূড়ান্ত কথা বলা পরীক্ষা)', 'اليوم الستون — اختبار التحدث النهائي (معلم 60 يوماً)', 'Al-yawm as-sittūn — Ikhtibār at-taḥadduth an-nihāʾī (maʿlam 60 yawman)')} 
              defaultOpen={false}
              className="practice-day-wrapper"
            >
              <div className="practice-day" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', border: '2px solid var(--primary-color)' }}>
                <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Congratulations! You've completed 60 days. Do a <strong>10-minute recording</strong> covering:</p>
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Introduce yourself (name, country, work/study)</li>
                  <li>Describe your daily routine (past, present, future)</li>
                  <li>Talk about your hobbies and interests</li>
                  <li>Describe a shopping experience (clothes, market, pharmacy)</li>
                  <li>Ask for directions to 3 different places</li>
                  <li>Make plans for next week</li>
                  <li>Express opinions about something</li>
                  <li>Ask for help with something</li>
                  <li>Have a conversation about weather and health</li>
                  <li>Close with polite farewell</li>
                </ol>
                <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--primary-color)', fontWeight: '600' }}>
                  مبروك! (Mabrūk!) — Congratulations! Keep practicing daily!
                </p>
              </div>
            </ExpandableSection>
          </div>
        </ExpandableSection>
        </div>
      </SectionWrapper>
    </>
  )
}
