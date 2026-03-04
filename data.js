const RAW_DATA = [
{
    "subject": "History",
    "subject_id": "SUB_1",
    "chapter": "Indian History",
    "chapter_id": "CHA_1",
    "section": "Ancient India",
    "section_id": "SEC_1",
    "topic": "Ancient India Overview",
    "topic_id": "TOP_1",
    "subtopics": [
      {
        "subtopic": "Historical Sources",
        "subtopic_id": "STOP_1",
        "questions": [
          {
            "question_id": "Q001",
            "question": "Who among the following is known as \"The Father of History\"?",
            "options": {
              "A": "Leopold von Ranke",
              "B": "Hegel",
              "C": "Herodotus",
              "D": "Karl Marx"
            },
            "correct_answer": "C",
            "explanation": "Herodotus was a Greek historian who wrote 'The Histories'. Roman philosopher Cicero first called him The Father of History.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2017"
            },
            "tags": ["ancient_history", "historians"]
          },
          {
            "question_id": "Q002",
            "question": "Who is recognized as \"The Father of Modern History\"?",
            "options": {
              "A": "E.H. Carr",
              "B": "Leopold von Ranke",
              "C": "Christoph Cellarius",
              "D": "Herodotus"
            },
            "correct_answer": "B",
            "explanation": "German historian Leopold von Ranke is known as the Father of Modern History. He believed in describing the past exactly as it was.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["modern_history", "historians"]
          },
          {
            "question_id": "Q003",
            "question": "The famous statement \"History repeats itself, first as tragedy, second as farce\" was given by?",
            "options": {
              "A": "Hegel",
              "B": "Karl Marx",
              "C": "E.H. Carr",
              "D": "Cicero"
            },
            "correct_answer": "B",
            "explanation": "German philosopher Karl Marx extended Hegel's original line (\"History repeats itself\") by adding \"first as tragedy, second as farce\".",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2019"
            },
            "tags": ["statements", "historians"]
          },
          {
            "question_id": "Q004",
            "question": "Which historian defined history as \"an unending dialogue between the present and the past\"?",
            "options": {
              "A": "Leopold von Ranke",
              "B": "Karl Marx",
              "C": "E.H. Carr",
              "D": "Herodotus"
            },
            "correct_answer": "C",
            "explanation": "British historian E.H. Carr described history as a continuous process of interaction between the Historian and his facts.",
            "difficulty": "hard",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["definitions", "historians"]
          },
          {
            "question_id": "Q005",
            "question": "The first real history book of the world, 'The Histories' (430 BC), describes the background of which war?",
            "options": {
              "A": "Peloponnesian War",
              "B": "Graeco-Persian Wars",
              "C": "Trojan War",
              "D": "Punic Wars"
            },
            "correct_answer": "B",
            "explanation": "Written by Herodotus, 'The Histories' describes the background and events of the Graeco-Persian (Greek- Iranian) wars.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["books", "ancient_wars"]
          },
          {
            "question_id": "Q006",
            "question": "What does the acronym 'AD' stand for in the dating system?",
            "options": {
              "A": "After Death",
              "B": "Anno Domini",
              "C": "Ancient Decade",
              "D": "After Domini"
            },
            "correct_answer": "B",
            "explanation": "AD stands for Anno Domini, a Latin phrase meaning 'In the year of the Lord (Jesus Christ)'. It does not mean After Death.",
            "difficulty": "easy",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB Group D 2018"
            },
            "tags": ["dating_system", "basic_history"]
          },
          {
            "question_id": "Q007",
            "question": "The 20th century AD refers to which of the following time periods?",
            "options": {
              "A": "2001 AD to 2100 AD",
              "B": "1900 AD to 1999 AD",
              "C": "1901 AD to 2000 AD",
              "D": "2000 AD to 2099 AD"
            },
            "correct_answer": "C",
            "explanation": "The 20th century AD means the period from 1901 AD to 2000 AD, because the 1st century was from 1 AD to 100 AD.",
            "difficulty": "medium",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["centuries", "time_glossary"]
          },
          {
            "question_id": "Q008",
            "question": "Which period does the 6th century BC represent?",
            "options": {
              "A": "600 BC to 501 BC",
              "B": "699 BC to 600 BC",
              "C": "599 BC to 500 BC",
              "D": "500 BC to 401 BC"
            },
            "correct_answer": "A",
            "explanation": "In BC, counting is done backwards. The 6th century BC starts at 600 BC (the earlier year) and ends at 501 BC.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["centuries", "dating_system"]
          },
          {
            "question_id": "Q009",
            "question": "What is the meaning of the word 'Circa' (Ca. or c.) used with dates in history?",
            "options": {
              "A": "Exact date",
              "B": "Century",
              "C": "Approximate date",
              "D": "After the event"
            },
            "correct_answer": "C",
            "explanation": "If the exact date is not known, the word 'Circa' is used, meaning the date is somewhere close to that or approximate.",
            "difficulty": "easy",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["time_glossary", "terminology"]
          },
          {
            "question_id": "Q010",
            "question": "Which time period represents a 'Millennium'?",
            "options": {
              "A": "10 years",
              "B": "100 years",
              "C": "500 years",
              "D": "1000 years"
            },
            "correct_answer": "D",
            "explanation": "A decade is 10 years, a century is 100 years, and a millennium represents a period of 1,000 years.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["time_glossary", "basics"]
          },
          {
            "question_id": "Q011",
            "question": "The National Calendar of India is based on which of the following eras?",
            "options": {
              "A": "Vikrama Era",
              "B": "Saka Era",
              "C": "Gupta Era",
              "D": "Harsha Era"
            },
            "correct_answer": "B",
            "explanation": "The Government of India adopted the Saka Era (which started in 78 AD) along with the Gregorian Calendar as the National Calendar on 22 March 1957.",
            "difficulty": "easy",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2019"
            },
            "tags": ["eras", "national_calendar"]
          },
          {
            "question_id": "Q012",
            "question": "In which year did the Kushana ruler Kanishka commence the Saka Era?",
            "options": {
              "A": "58 BC",
              "B": "78 AD",
              "C": "319 AD",
              "D": "622 AD"
            },
            "correct_answer": "B",
            "explanation": "The Saka Era was commenced by Kanishka in 78 AD on the occasion of his ascendence to the throne.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2021"
            },
            "tags": ["eras", "kanishka"]
          },
          {
            "question_id": "Q013",
            "question": "The Vikrama Era (Malawa Era) was commenced in 58/57 BC to commemorate the victory over which rulers?",
            "options": {
              "A": "Hunas",
              "B": "Kushanas",
              "C": "Sakas",
              "D": "Greeks"
            },
            "correct_answer": "C",
            "explanation": "Commenced by Vikramaditya, the local king of Ujjayini, to commemorate his victory over the Sakas.",
            "difficulty": "hard",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB NTPC 2016"
            },
            "tags": ["eras", "vikramaditya"]
          },
          {
            "question_id": "Q014",
            "question": "Which era was founded by Umar to commemorate the 'hijrat' of Hazrat Muhammad from Mecca to Madina?",
            "options": {
              "A": "Ilahi Era",
              "B": "Raj Saka",
              "C": "Kali Era",
              "D": "Hijri Era"
            },
            "correct_answer": "D",
            "explanation": "The Hijri Era was founded in 622 AD to commemorate the journey (hijrat) of Hazrat Muhammad from Mecca to Madina.",
            "difficulty": "medium",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["eras", "islamic_history"]
          },
          {
            "question_id": "Q015",
            "question": "To convert an AD year into the Vikrama Era, which mathematical operation is performed?",
            "options": {
              "A": "Add 78",
              "B": "Subtract 78",
              "C": "Add 57",
              "D": "Subtract 57"
            },
            "correct_answer": "C",
            "explanation": "Because the Vikrama Era started in 57 BC (before Christ), you must add 57 to the AD year to convert it into the Vikrama Era.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["eras", "conversions"]
          },
          {
            "question_id": "Q016",
            "question": "Who was the German historian who first divided history into a tripartite division (Ancient, Medieval, and Modern)?",
            "options": {
              "A": "Leopold von Ranke",
              "B": "Christoph Cellarius",
              "C": "Herodotus",
              "D": "E.H. Carr"
            },
            "correct_answer": "B",
            "explanation": "German historian Christoph Cellarius was the first to give the standard tripartite division of History into Ancient, Medieval, and Modern periods.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["divisions_of_history", "historians"]
          },
          {
            "question_id": "Q017",
            "question": "The Indus Valley Civilization belongs to which of the following historical periods?",
            "options": {
              "A": "Pre-Historic Period",
              "B": "Historic Period",
              "C": "Proto-Historic Period",
              "D": "Modern Period"
            },
            "correct_answer": "C",
            "explanation": "It belongs to the Proto-Historic period because written evidence (script) is available but it has not yet been deciphered.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2019"
            },
            "tags": ["proto_history", "indus_valley"]
          },
          {
            "question_id": "Q018",
            "question": "The list of 16 Mahajanapadas is found in which of the following Jain texts?",
            "options": {
              "A": "Kalpa Sutra",
              "B": "Parishishtaparva",
              "C": "Acharanga Sutra",
              "D": "Bhagawati Sutra"
            },
            "correct_answer": "D",
            "explanation": "'Bhagawati Sutra' is a prominent Jain text that throws light on the life of Mahavira and contains the list of the 16 Mahajanapadas.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2020"
            },
            "tags": ["jain_texts", "mahajanapadas"]
          },
          {
            "question_id": "Q019",
            "question": "Which book, written by Kalhana in the 12th century AD, is considered the first true historical work of India?",
            "options": {
              "A": "Harsha Charita",
              "B": "Rajatarangini",
              "C": "Arthashashtra",
              "D": "Mudrarakshasa"
            },
            "correct_answer": "B",
            "explanation": "'Rajatarangini' (The Stream of Kings) by Kalhana deals with the history of Kashmir and is considered India's first proper historical work.",
            "difficulty": "easy",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB NTPC 2016"
            },
            "tags": ["books_and_authors", "kashmir_history"]
          },
          {
            "question_id": "Q020",
            "question": "The 'Jataka' tales, which contain 549 stories of previous births of Gautama Buddha, are a part of which Pitaka?",
            "options": {
              "A": "Vinaya Pitaka",
              "B": "Abhidhamma Pitaka",
              "C": "Sutta Pitaka",
              "D": "None of the above"
            },
            "correct_answer": "C",
            "explanation": "Jataka tales are found in the Khuddaka Nikaya, which is a part of the Sutta Pitaka.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["buddhist_texts", "jataka"]
          },
          {
            "question_id": "Q021",
            "question": "Who is the author of the biographical text 'Harsha Charita'?",
            "options": {
              "A": "Sandhyakar Nandin",
              "B": "Chandbardai",
              "C": "Kautilya",
              "D": "Banabhatta"
            },
            "correct_answer": "D",
            "explanation": "Banabhatta composed 'Harsha Charita' in 620 AD based on the life of his patron king Harshavardhana. It is the earliest available biographical text in India.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2021"
            },
            "tags": ["biographies", "books_and_authors"]
          },
          {
            "question_id": "Q022",
            "question": "Which text provides a detailed description of Muhammad Bin Qasim's conquest of Sindh?",
            "options": {
              "A": "Rajatarangini",
              "B": "Chachanama",
              "C": "Prabandha Chintamani",
              "D": "Hammir Kavya"
            },
            "correct_answer": "B",
            "explanation": "The 'Chachanama' (also known as Fatehnama-i-Sindh) provides a detailed description of Muhammad Bin Qasim's Sindh conquest in 711-12 AD.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2018"
            },
            "tags": ["sindh_conquest", "historical_texts"]
          },
          {
            "question_id": "Q023",
            "question": "Megasthenese was a Greek ambassador sent to the court of Chandragupta Maurya. Who sent him?",
            "options": {
              "A": "Alexander the Great",
              "B": "Seleucus Nicator",
              "C": "Antiochus-I",
              "D": "Ptolemy-II"
            },
            "correct_answer": "B",
            "explanation": "Megasthenese was sent by Seleucus Nicator, the Greek king of Persia and Babylonia, to the court of Chandragupta Maurya.",
            "difficulty": "easy",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB Group D 2018"
            },
            "tags": ["foreign_travellers", "mauryan_empire"]
          },
          {
            "question_id": "Q024",
            "question": "The book 'Periplus of the Erythrean Sea' is an important foreign source primarily for understanding which of the following?",
            "options": {
              "A": "Mauryan Administration",
              "B": "Sea trade and maritime activities of ancient Indians",
              "C": "The life of Buddha",
              "D": "Alexander's invasion"
            },
            "correct_answer": "B",
            "explanation": "Written by an anonymous Greek writer, it acts as a guide for sea trade and describes ports, harbours, and the monsoon winds.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["foreign_texts", "ancient_trade"]
          },
          {
            "question_id": "Q025",
            "question": "The Chinese traveler Fa-hien visited India during the reign of which Gupta ruler?",
            "options": {
              "A": "Samudragupta",
              "B": "Skandagupta",
              "C": "Kumargupta-I",
              "D": "Chandragupta-II 'Vikramaditya'"
            },
            "correct_answer": "D",
            "explanation": "Fa-hien came to India in 399 AD during the reign of Chandragupta-Il to cover an original copy of the 'Vinaya Pitaka'.",
            "difficulty": "easy",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2019"
            },
            "tags": ["chinese_travellers", "gupta_empire"]
          },
          {
            "question_id": "Q026",
            "question": "Who among the following is known as the \"Prince of Pilgrims\" and wrote the travel account 'Si-Yu-Ki'?",
            "options": {
              "A": "Fa-hien",
              "B": "Itsing",
              "C": "Hiuen Tsang",
              "D": "Sung Yun"
            },
            "correct_answer": "C",
            "explanation": "Hiuen Tsang came to India during Harshavardhana's reign, studied at Nalanda, and wrote 'Si-Yu- Ki'. He is known as the Prince of Pilgrims.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2019"
            },
            "tags": ["chinese_travellers", "books_and_authors"]
          },
          {
            "question_id": "Q027",
            "question": "Which foreign traveler is regarded as the \"First Real Indologist\" and wrote 'Tehqiq-i-Hind' (Kitab-ul-Hind)?",
            "options": {
              "A": "Ibn Batuta",
              "B": "Alberuni",
              "C": "Al Masudi",
              "D": "Sulaiman"
            },
            "correct_answer": "B",
            "explanation": "Alberuni came to India with Mahmud Ghaznavi. Because of his extensive study of Indian society and culture, he is called the First Real Indologist.",
            "difficulty": "medium",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB NTPC 2021"
            },
            "tags": ["arab_writers", "indology"]
          },
          {
            "question_id": "Q028",
            "question": "Ibn Batuta, the Moroccan traveler who wrote 'Rihla', came to India during the reign of which Sultan?",
            "options": {
              "A": "Alauddin Khalji",
              "B": "Iltutmish",
              "C": "Muhammadbin-Tughlaq",
              "D": "Firoz Shah Tughlaq"
            },
            "correct_answer": "C",
            "explanation": "Ibn Batuta came to India in 1333 AD and was appointed as Qazi of Delhi by Muhammadbin-Tughlaq.",
            "difficulty": "easy",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2018"
            },
            "tags": ["foreign_travellers", "delhi_sultanate"]
          },
          {
            "question_id": "Q029",
            "question": "Which Roman historian wrote 'Naturalis Historica' (Natural History), detailing the trade relations between Rome and India?",
            "options": {
              "A": "Justin",
              "B": "Pliny",
              "C": "Ptolemy",
              "D": "Strabo"
            },
            "correct_answer": "B",
            "explanation": "Pliny (23-99 AD) was a Roman historian who wrote the encyclopedic text 'Naturalis Historica' detailing animals, plants, and Indo-Roman trade.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["roman_writers", "ancient_books"]
          },
          {
            "question_id": "Q030",
            "question": "Who was the Greek ambassador sent by the Syrian ruler Antiochus-I to the court of Mauryan ruler Bindusara?",
            "options": {
              "A": "Megasthenese",
              "B": "Dionysios",
              "C": "Deimachus",
              "D": "Nearchus"
            },
            "correct_answer": "C",
            "explanation": "Deimachus was the Greek ambassador sent by Antiochus-I of Syria to the court of Bindusara.",
            "difficulty": "hard",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["greek_ambassadors", "mauryan_empire"]
          },
          {
            "question_id": "Q031",
            "question": "Who founded the Asiatic Society of Bengal in 1784 AD?",
            "options": {
              "A": "James Princep",
              "B": "Sir William Jones",
              "C": "Sir Alexander Cunninghum",
              "D": "Sir John Marshall"
            },
            "correct_answer": "B",
            "explanation": "Eminent orientalist Sir William Jones founded the Asiatic Society of Bengal in Calcutta in 1784 to study Asian languages, literature, and later archaeology.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2017"
            },
            "tags": ["archaeology", "asiatic_society"]
          },
          {
            "question_id": "Q032",
            "question": "Who successfully deciphered the ancient Brahmi script in 1837 AD?",
            "options": {
              "A": "James Princep",
              "B": "Sir Alexander Cunninghum",
              "C": "Mortimer Wheeler",
              "D": "George Turnour"
            },
            "correct_answer": "A",
            "explanation": "James Princep, an officer of the East India Company, deciphered the Brahmi script in 1837, unlocking the secrets of Ashokan inscriptions.",
            "difficulty": "easy",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB NTPC 2020"
            },
            "tags": ["epigraphy", "decipherment"]
          },
          {
            "question_id": "Q033",
            "question": "Who is known as the \"Father of Indian Archaeology\"?",
            "options": {
              "A": "Sir John Marshall",
              "B": "Dayaram Sahani",
              "C": "Sir Alexander Cunninghum",
              "D": "James Burgess"
            },
            "correct_answer": "C",
            "explanation": "Sir Alexander Cunninghum, the first Archaeological Surveyor of the ASI, is called the Father of Indian Archaeology for his extensive explorations.",
            "difficulty": "easy",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2021"
            },
            "tags": ["archaeology", "asi"]
          },
          {
            "question_id": "Q034",
            "question": "The formal announcement of the discovery of the Indus Civilization was made in 1924 by whom?",
            "options": {
              "A": "Dayaram Sahani",
              "B": "Rakhal Das Bannerji",
              "C": "Mortimer Wheeler",
              "D": "Sir John Marshall"
            },
            "correct_answer": "D",
            "explanation": "Sir John Marshall, the Director-General of ASI, formally announced the discovery of the Indus Civilization in 1924, pushing India's history back by 2500 years.",
            "difficulty": "medium",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["indus_valley", "archaeology"]
          },
          {
            "question_id": "Q035",
            "question": "The Boghazkoi Inscription (1380 BC) found in Turkey mentions which of the following groups of Vedic deities?",
            "options": {
              "A": "Agni, Soma, Vayu, Surya",
              "B": "Indra, Mitra, Varun, Nasatya",
              "C": "Brahma, Vishnu, Shiva, Indra",
              "D": "Yama, Varun, Agni, Indra"
            },
            "correct_answer": "B",
            "explanation": "The Boghazkoi Inscription confirms the Central Asian Theory of Aryans as it mentions four Vedic deities: Indra, Mitra, Varun, and Nasatya.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2018"
            },
            "tags": ["foreign_inscriptions", "vedic_gods"]
          },
          {
            "question_id": "Q036",
            "question": "Which script was primarily used in Ashokan inscriptions found in North-Western India?",
            "options": {
              "A": "Brahmi Script",
              "B": "Kharosthi Script",
              "C": "Greek Script",
              "D": "Aramaic Script"
            },
            "correct_answer": "B",
            "explanation": "In North-Western India (like Manshera and Shahbajgadhi), Ashokan inscriptions were written in the Kharosthi script, which is written right to left.",
            "difficulty": "medium",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB Group D 2018"
            },
            "tags": ["ashoka", "inscriptions", "scripts"]
          },
          {
            "question_id": "Q037",
            "question": "The word 'Bharatvarsha' is mentioned for the first time in which of the following inscriptions?",
            "options": {
              "A": "Hathigumpha Inscription",
              "B": "Junagadh Inscription",
              "C": "Prayag Prashasti",
              "D": "Aihole Inscription"
            },
            "correct_answer": "A",
            "explanation": "Kharavela's Hathigumpha Inscription (1st Century BC) is the first inscription where the word 'Bharatvarsha' is mentioned.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["inscriptions", "kharavela"]
          },
          {
            "question_id": "Q038",
            "question": "Which inscription is considered the first long Sanskrit inscription of India?",
            "options": {
              "A": "Eran Inscription",
              "B": "Mehrauli Iron Pillar Inscription",
              "C": "Junagadh/Girnar Inscription of Rudradaman",
              "D": "Banskhera Copper-Plate Inscription"
            },
            "correct_answer": "C",
            "explanation": "Saka ruler Rudradaman's Junagadh Inscription (150 AD) is the first long Sanskrit inscription. It details the repair of the Sudarsana Lake.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2020"
            },
            "tags": ["sanskrit_inscriptions", "rudradaman"]
          },
          {
            "question_id": "Q039",
            "question": "Who composed the 'Prayag Prashasti' (Allahabad Pillar Inscription) describing the conquests of Samudragupta?",
            "options": {
              "A": "Banabhatta",
              "B": "Harishena",
              "C": "Ravikirti",
              "D": "Kalidasa"
            },
            "correct_answer": "B",
            "explanation": "Harishena, the minister of peace and war of Samudragupta, composed the eulogy on the Prayag Prashasti.",
            "difficulty": "easy",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB NTPC 2016"
            },
            "tags": ["gupta_empire", "inscriptions"]
          },
          {
            "question_id": "Q040",
            "question": "The first archaeological evidence of the 'Sati' system is found in which inscription?",
            "options": {
              "A": "Eran Inscription of Bhanugupta",
              "B": "Bhitari Pillar Inscription",
              "C": "Damodarpur Copper Plate Inscription",
              "D": "Aihole Prashasti"
            },
            "correct_answer": "A",
            "explanation": "The Eran Stone Inscription (510 AD) of Bhanugupta provides the first archaeological evidence of Sati, detailing the immolation of Goparaj's wife.",
            "difficulty": "medium",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2019"
            },
            "tags": ["sati_system", "gupta_empire"]
          },
          {
            "question_id": "Q041",
            "question": "The 'Aihole Prashasti' throws light on the victory of Pulkeshin-II over which North Indian king?",
            "options": {
              "A": "Chandragupta-II",
              "B": "Yashovarman",
              "C": "Harshavardhana",
              "D": "Mihirkula"
            },
            "correct_answer": "C",
            "explanation": "Composed by Ravikirti, the Aihole Inscription states that the Chalukya king Pulkeshin-Il defeated Harshavardhana on the banks of the Narmada river.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["chalukya_dynasty", "inscriptions"]
          },
          {
            "question_id": "Q042",
            "question": "The scientific study of coins is known as?",
            "options": {
              "A": "Epigraphy",
              "B": "Numismatics",
              "C": "Archaeology",
              "D": "Palaeography"
            },
            "correct_answer": "B",
            "explanation": "Numismatics is the study of coins. Epigraphy is the study of inscriptions.",
            "difficulty": "easy",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB Group D 2018"
            },
            "tags": ["terminology", "coins"]
          },
          {
            "question_id": "Q043",
            "question": "Who were the first rulers in India to issue gold coins?",
            "options": {
              "A": "Kushanas",
              "B": "Mauryas",
              "C": "Guptas",
              "D": "Indo-Bactrians"
            },
            "correct_answer": "D",
            "explanation": "The Indo-Bactrian rulers were the first to issue gold coins in India, and the first to write names of kings and deities on coins.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2017"
            },
            "tags": ["gold_coins", "indo_bactrians"]
          },
          {
            "question_id": "Q044",
            "question": "Which dynasty issued the largest number of gold coins in ancient India?",
            "options": {
              "A": "Kushana Dynasty",
              "B": "Gupta Dynasty",
              "C": "Maurya Dynasty",
              "D": "Satavahana Dynasty"
            },
            "correct_answer": "B",
            "explanation": "The Gupta rulers issued the largest number of gold coins, which were known as 'Dinar'.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2021"
            },
            "tags": ["gupta_empire", "coins"]
          },
          {
            "question_id": "Q045",
            "question": "Roman coins of emperors Augustus and Tiberius found in South India indicate a strong trade relationship with which region?",
            "options": {
              "A": "China",
              "B": "Roman Empire (Italy)",
              "C": "Egypt",
              "D": "Persia"
            },
            "correct_answer": "B",
            "explanation": "Coins found in regions like Arikamedu (Pondicherry) confirm that ancient South India had flourishing maritime trade with the Roman Empire.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["foreign_trade", "roman_coins"]
          },
          {
            "question_id": "Q046",
            "question": "Which of the following is the largest Buddhist temple in the world?",
            "options": {
              "A": "Angkor-Wat Temple",
              "B": "Anand Pagoda",
              "C": "Borobodur Temple",
              "D": "Mahabodhi Temple"
            },
            "correct_answer": "C",
            "explanation": "The Borobodur Temple in Java (Indonesia), built by the Shailendra dynasty in the 8th century AD, is the largest Buddhist temple in the world.",
            "difficulty": "medium",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "RRB NTPC 2021"
            },
            "tags": ["world_monuments", "buddhism"]
          },
          {
            "question_id": "Q047",
            "question": "The famous Vaishnava temple of Angkor-Wat, built by Suryavarma in the 12th Century AD, is located in?",
            "options": {
              "A": "Indonesia",
              "B": "Cambodia",
              "C": "Myanmar",
              "D": "Sri Lanka"
            },
            "correct_answer": "B",
            "explanation": "Angkor-Wat is located in Kambuj (modern-day Cambodia).",
            "difficulty": "easy",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2019"
            },
            "tags": ["world_monuments", "cambodia"]
          },
          {
            "question_id": "Q048",
            "question": "The earliest temple found in India, the Dashavtar Temple of the Gupta period, represents which style of architecture?",
            "options": {
              "A": "Dravida Style",
              "B": "Vesara Style",
              "C": "Nagara Style",
              "D": "Mathura Style"
            },
            "correct_answer": "C",
            "explanation": "The Dashavtar Temple in Deogarh (Uttar Pradesh) is the earliest temple found in India and represents the Nagara (Shikhar) style of architecture.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["temple_architecture", "gupta_empire"]
          }
        ]
      }
    ]
  },
{
    "subject": "History",
    "subject_id": "SUB_1",
    "chapter": "Indian History",
    "chapter_id": "CHA_1",
    "section": "Ancient India",
    "section_id": "SEC_2",
    "topic": "Pre-Historic Period",
    "topic_id": "TOP_2",
    "subtopics": [
      {
        "subtopic": "Human Evolution",
        "subtopic_id": "STOP_1",
        "questions": [
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_1_Q001",
            "question": "Which continent is considered the original homeland of humans, often called 'the Cradle of Humankind'?",
            "options": {
              "A": "Asia",
              "B": "Africa",
              "C": "Europe",
              "D": "Australia"
            },
            "correct_answer": "B",
            "explanation": "Africa is the original homeland of humans according to the most accepted theories, where early humans first evolved.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2022"
            },
            "tags": ["human_evolution", "geography", "origin"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_1_Q002",
            "question": "According to archaeological findings, which early human species is credited with the discovery of fire?",
            "options": {
              "A": "Australopithecus Africanus",
              "B": "Homo Sapien Neanderthal",
              "C": "Homo Erectus",
              "D": "Cro-Magnon"
            },
            "correct_answer": "C",
            "explanation": "Homo Erectus (Pithecanthropus) was the earliest biped human and accidentally discovered fire by striking quartzite stones together.",
            "difficulty": "medium",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "Railway Group D 2018"
            },
            "tags": ["fire_discovery", "homo_erectus", "ancient_history"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_1_Q003",
            "question": "The first human species to start the practice of burying their dead was:",
            "options": {
              "A": "Homo Erectus",
              "B": "Homo Sapien Neanderthal",
              "C": "Homo Sapien Sapien",
              "D": "Australopithecus"
            },
            "correct_answer": "B",
            "explanation": "Homo Sapien Neanderthal introduced the practice of performing funeral rites and burying their dead.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["burial_practice", "neanderthal", "evolution"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_1_Q004",
            "question": "In 1982, Arun Sonakia discovered the earliest human fossil in India (a woman's skull) at which of the following sites?",
            "options": {
              "A": "Bhimbetka",
              "B": "Pallavaram",
              "C": "Hathnora",
              "D": "Baghore"
            },
            "correct_answer": "C",
            "explanation": "Arun Sonakia, a geologist, discovered the Homo Erectus female skull fossil at Hathnora in the Narmada River Valley (MP).",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2020"
            },
            "tags": ["fossil", "narmada_valley", "hathnora", "discoveries"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_1_Q005",
            "question": "Which theory of human evolution suggests that modern humans evolved originally from Homo erectus in Africa and then migrated to other regions?",
            "options": {
              "A": "Parallel Origin Theory",
              "B": "Unitary Origin Theory",
              "C": "Continental Drift Theory",
              "D": "Out of Asia Theory"
            },
            "correct_answer": "B",
            "explanation": "The Unitary Origin Theory states that humans originated in Africa and later dispersed across the earth, and it is the most widely accepted theory.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["unitary_origin", "evolution_theories"]
          }
        ]
      },
      {
        "subtopic": "Paleolithic Age",
        "subtopic_id": "STOP_2",
        "questions": [
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_2_Q001",
            "question": "Who among the following is known as the 'Father of Pre-historic Archaeology' in India?",
            "options": {
              "A": "Alexander Cunningham",
              "B": "Robert Bruce Foote",
              "C": "John Marshall",
              "D": "Arun Sonakia"
            },
            "correct_answer": "B",
            "explanation": "Robert Bruce Foote, a geologist, discovered the first Paleolithic implement (Hand Axe) at Pallavaram in 1863, earning him this title.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2021"
            },
            "tags": ["pre_historic_archaeology", "robert_bruce_foote", "discoveries"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_2_Q002",
            "question": "What was the primary lifestyle of the people during the Paleolithic Age?",
            "options": {
              "A": "Agriculture and Pastoralism",
              "B": "Hunters and Food-gatherers",
              "C": "Settled farming",
              "D": "Industrial trade"
            },
            "correct_answer": "B",
            "explanation": "Paleolithic humans were purely food-consumers; they depended largely on hunting animals and gathering nature-given fruits and roots.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["paleolithic_lifestyle", "hunters_gatherers"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_2_Q003",
            "question": "The Lower Paleolithic culture in India, characterized by Hand Axe implements first found at Badmadurai and Attirampakkam, is also known as:",
            "options": {
              "A": "Sohan Culture",
              "B": "Madrasian Culture",
              "C": "Jorwe Culture",
              "D": "Malwa Culture"
            },
            "correct_answer": "B",
            "explanation": "Since the Hand Axe tools were first found in regions near Madras (now Chennai), this culture is termed the Madrasian Culture.",
            "difficulty": "hard",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["madrasian_culture", "hand_axe", "lower_paleolithic"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_2_Q004",
            "question": "During which phase of the Paleolithic Age did bone and horn-made implements become prominent?",
            "options": {
              "A": "Lower Paleolithic Age",
              "B": "Middle Paleolithic Age",
              "C": "Upper/Later Paleolithic Age",
              "D": "Mesolithic Age"
            },
            "correct_answer": "C",
            "explanation": "In the Upper/Later Paleolithic Age, besides Flake-Blade stones, implements made from long bones and animal horns were widely used.",
            "difficulty": "medium",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["bone_implements", "upper_paleolithic"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_2_Q005",
            "question": "The famous Bhimbetka rock shelters, known for prehistoric cave paintings, belong primarily to which period?",
            "options": {
              "A": "Lower Paleolithic",
              "B": "Upper Paleolithic and Mesolithic",
              "C": "Neolithic",
              "D": "Chalcolithic"
            },
            "correct_answer": "B",
            "explanation": "Remains of paintings at Bhimbetka are ascertained to begin with the last phase of the Paleolithic Age (Upper Paleolithic) and extend into the Mesolithic Age.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "Railway RRB NTPC 2021"
            },
            "tags": ["bhimbetka", "cave_paintings", "rock_shelters"]
          }
        ]
      },
      {
        "subtopic": "Mesolithic Age",
        "subtopic_id": "STOP_3",
        "questions": [
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_3_Q001",
            "question": "The stone implements of the Mesolithic Age were very tiny in size (1 to 8 cm). What are they commonly called?",
            "options": {
              "A": "Megaliths",
              "B": "Monoliths",
              "C": "Microliths",
              "D": "Neoliths"
            },
            "correct_answer": "C",
            "explanation": "Microliths (or Pigmy implements) were the refined, tiny stone tools characteristic of the Mesolithic Age.",
            "difficulty": "easy",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2022"
            },
            "tags": ["microliths", "tools", "mesolithic"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_3_Q002",
            "question": "The earliest evidence of animal domestication in India has been found at which of the following sites?",
            "options": {
              "A": "Sarainahar Rai and Mahdaha",
              "B": "Adamgarh and Baghore",
              "C": "Chopanimando and Koldihwa",
              "D": "Pallavaram and Hathnora"
            },
            "correct_answer": "B",
            "explanation": "Adamgarh (Madhya Pradesh) and Baghore (Rajasthan) provide the earliest evidence of taming animals during the Mesolithic Age.",
            "difficulty": "hard",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2021"
            },
            "tags": ["animal_domestication", "adamgarh", "baghore"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_3_Q003",
            "question": "Which animal is considered the earliest to be domesticated by humans during the Mesolithic period?",
            "options": {
              "A": "Cow",
              "B": "Horse",
              "C": "Dog",
              "D": "Sheep"
            },
            "correct_answer": "C",
            "explanation": "Skeletons of dogs are frequently found alongside human skeletons at Mesolithic sites, indicating the dog was man's first companion.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2019"
            },
            "tags": ["first_pet", "dog_domestication"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_3_Q004",
            "question": "Chopanimando in the Belan Valley (Uttar Pradesh) is globally recognized for which of the following early discoveries?",
            "options": {
              "A": "Earliest evidence of rice cultivation",
              "B": "Earliest evidence of clay pottery use",
              "C": "First human fossil",
              "D": "First copper implement"
            },
            "correct_answer": "B",
            "explanation": "Chopanimando is the earliest site in the world from where remains of the use of hand-made clay pottery have been found.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["clay_pottery", "chopanimando", "world_first"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_3_Q005",
            "question": "At which Mesolithic site in Uttar Pradesh were graves found containing human burials along with grave goods like foodstuff and tools?",
            "options": {
              "A": "Sarainahar Rai and Mahdaha",
              "B": "Bhimbetka and Adamgarh",
              "C": "Hathnora and Pallavaram",
              "D": "Chirand and Chechar"
            },
            "correct_answer": "A",
            "explanation": "Sarainahar Rai and Mahdaha (Pratapgarh district, UP) provide clear evidence of burial practices, including graves with grave goods.",
            "difficulty": "medium",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["burials", "sarainahar_rai", "mahdaha"]
          }
        ]
      },
      {
        "subtopic": "Neolithic Age",
        "subtopic_id": "STOP_4",
        "questions": [
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_4_Q001",
            "question": "The earliest evidence of agriculture (wheat and barley) in the Indian subcontinent was found at which Neolithic site?",
            "options": {
              "A": "Burzahom",
              "B": "Koldihwa",
              "C": "Mehargarh",
              "D": "Chirand"
            },
            "correct_answer": "C",
            "explanation": "Mehargarh in Baluchistan (Pakistan) is known as the earliest village site in the Indian subcontinent and provides the earliest evidence of agriculture, specifically wheat and barley.",
            "difficulty": "easy",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2020"
            },
            "tags": ["agriculture", "mehargarh", "neolithic"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_4_Q002",
            "question": "Koldihwa in Uttar Pradesh is globally famous for providing the earliest evidence of the cultivation of which crop?",
            "options": {
              "A": "Cotton",
              "B": "Wheat",
              "C": "Sugarcane",
              "D": "Paddy (Rice)"
            },
            "correct_answer": "D",
            "explanation": "Koldihwa holds the oldest evidence of paddy (rice) cultivation in the Indian subcontinent as well as in the world.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2021"
            },
            "tags": ["paddy_cultivation", "rice", "koldihwa"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_4_Q003",
            "question": "At which Neolithic site was the unique custom of burying pet dogs along with their masters in the grave discovered?",
            "options": {
              "A": "Gufkaral",
              "B": "Burzahom",
              "C": "Mehargarh",
              "D": "Sangankallu"
            },
            "correct_answer": "B",
            "explanation": "The custom of burying the pet animal dog with his master was exclusively practiced at Burzahom in Kashmir.",
            "difficulty": "medium",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": true,
              "details": "SSC MTS 2019"
            },
            "tags": ["dog_burial", "burzahom", "kashmir"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_4_Q004",
            "question": "The architectural feature known as 'pit-dwelling' (digging circular pits in the ground to live in) was predominantly found in which region during the Neolithic age?",
            "options": {
              "A": "Narmada Valley",
              "B": "Kashmir Valley",
              "C": "Belan Valley",
              "D": "Indus Valley"
            },
            "correct_answer": "B",
            "explanation": "In the Kashmir Valley (at sites like Burzahom and Gufkaral), Neolithic men dwelled in pits to protect themselves from extreme weather.",
            "difficulty": "hard",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["pit_dwelling", "kashmir", "architecture"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_4_Q005",
            "question": "Which important technological invention took place around 4,000 BC that revolutionized the making of earthen vessels?",
            "options": {
              "A": "Iron smelting",
              "B": "Potter's Wheel",
              "C": "Spindle and Loom",
              "D": "Copper casting"
            },
            "correct_answer": "B",
            "explanation": "In 4,000 BC, Neolithic men invented the Potter's Wheel, which allowed them to make advanced wheel-made pottery instead of hand-made pots.",
            "difficulty": "easy",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["potters_wheel", "invention", "neolithic"]
          }
        ]
      },
      {
        "subtopic": "Chalco-Lithic Age",
        "subtopic_id": "STOP_5",
        "questions": [
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_5_Q001",
            "question": "Which was the first metal used by humans to make implements?",
            "options": {
              "A": "Iron",
              "B": "Bronze",
              "C": "Copper",
              "D": "Silver"
            },
            "correct_answer": "C",
            "explanation": "Copper was the first metal used by early humans (around 5,000 BC), marking the beginning of the Chalcolithic (Copper-Stone) Age.",
            "difficulty": "easy",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "Railway RRB NTPC 2021"
            },
            "tags": ["first_metal", "copper", "chalcolithic"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_5_Q002",
            "question": "In South India, the Lithic Age was directly succeeded by which age, skipping the Copper Age entirely?",
            "options": {
              "A": "Bronze Age",
              "B": "Iron Age",
              "C": "Megalithic Age",
              "D": "Harappan Age"
            },
            "correct_answer": "B",
            "explanation": "Since Copper is not indigenous to South India, they bypassed the Copper Age, and the Lithic Age was succeeded directly by the Iron Age.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["south_india", "iron_age", "chronology"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_5_Q003",
            "question": "The Post-Harappan regional culture known as 'Ahar Culture', located in Rajasthan, is also famous by which other name due to the abundance of copper?",
            "options": {
              "A": "Jorwe",
              "B": "Tambvati",
              "C": "Navdatoli",
              "D": "Prabhaspattan"
            },
            "correct_answer": "B",
            "explanation": "The Ahar culture is also called 'Tambvati' (a place having copper) because copper was readily available in the Banas river valley region of Rajasthan.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["ahar_culture", "tambvati", "rajasthan"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_5_Q004",
            "question": "Daimabad and Inamgaon are the most prominent archaeological sites associated with which Chalcolithic culture?",
            "options": {
              "A": "Jorwe Culture",
              "B": "Malwa Culture",
              "C": "Kayatha Culture",
              "D": "Chirand Culture"
            },
            "correct_answer": "A",
            "explanation": "Daimabad (famous for copper animal figures) and Inamgaon (famous for 5-room houses) are the key sites of the Jorwe Culture in Maharashtra.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2022"
            },
            "tags": ["jorwe_culture", "daimabad", "inamgaon"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_5_Q005",
            "question": "The Indus Valley Civilization (Harappan Age) falls under which technological period of human history?",
            "options": {
              "A": "Paleolithic Age",
              "B": "Iron Age",
              "C": "Chalco-Lithic (Copper/Bronze) Age",
              "D": "Mesolithic Age"
            },
            "correct_answer": "C",
            "explanation": "The Harappan Civilization was a civilization of the Copper/Bronze Age, fitting into the timeline of the Chalco-Lithic period (2500 BC - 1750 BC).",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["harappan_civilization", "chalcolithic", "indus_valley"]
          }
        ]
      },
      {
        "subtopic": "Iron Age",
        "subtopic_id": "STOP_6",
        "questions": [
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_6_Q001",
            "question": "In the Later Vedic texts, the terms 'Krishna Ayas' and 'Shyama Ayas' were used to refer to which metal?",
            "options": {
              "A": "Copper",
              "B": "Bronze",
              "C": "Iron",
              "D": "Gold"
            },
            "correct_answer": "C",
            "explanation": "'Krishna Ayas' or 'Shyama Ayas' strictly referred to Iron (due to its dark color), while 'Lohit Ayas' referred to Copper in Later Vedic texts.",
            "difficulty": "medium",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": true,
              "details": "Railway Group D 2018"
            },
            "tags": ["krishna_ayas", "iron", "vedic_texts"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_6_Q002",
            "question": "The term 'Megalith', associated with South Indian history, specifically refers to:",
            "options": {
              "A": "Tiny stone tools used for hunting",
              "B": "Large stone graves or memorials",
              "C": "The first iron swords",
              "D": "Copper hoards found in caves"
            },
            "correct_answer": "B",
            "explanation": "'Megalith' (Mega = Huge, Lith = Stone) refers to graves or memorials made from large pieces of stone to bury or commemorate the dead in South India.",
            "difficulty": "easy",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": true,
              "details": "SSC CHSL 2020"
            },
            "tags": ["megalith", "south_india", "graves"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_6_Q003",
            "question": "The second urban revolution in ancient India (during the Mahajanapada period) was primarily dependent on the extension of which technology?",
            "options": {
              "A": "Bronze casting",
              "B": "Iron technology",
              "C": "Wheel pottery",
              "D": "Cotton weaving"
            },
            "correct_answer": "B",
            "explanation": "The use of iron tools helped clear the dense forests of the Gangetic valley and boosted agriculture, directly leading to the Second Urban Revolution.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["iron_technology", "second_urban_revolution"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_6_Q004",
            "question": "Which of the following is NOT a type of Megalith found in South India?",
            "options": {
              "A": "Menhir",
              "B": "Dolmen",
              "C": "Hood Stone",
              "D": "Microlith"
            },
            "correct_answer": "D",
            "explanation": "Microlith refers to tiny stone tools of the Mesolithic age, whereas Menhir, Dolmen, and Hood Stone are types of massive Megalithic graves.",
            "difficulty": "medium",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["megalith_types", "menhir", "dolmen"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_6_Q005",
            "question": "Painted Grey Ware (PGW) and Northern Black Polished Ware (NBPW) cultures are primarily associated with the use of which metal?",
            "options": {
              "A": "Copper",
              "B": "Bronze",
              "C": "Iron",
              "D": "Gold"
            },
            "correct_answer": "C",
            "explanation": "Both PGW and NBPW cultures flourished during the Iron Age in India, utilizing iron implements extensively alongside their specific pottery styles.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2019"
            },
            "tags": ["pgw", "nbpw", "iron_age_cultures"]
          }
        ]
      },
      {
        "subtopic": "Pottery Culture",
        "subtopic_id": "STOP_7",
        "questions": [
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_7_Q001",
            "question": "The nomenclature of ancient pottery cultures is usually based on which of the following elements of the vessels?",
            "options": {
              "A": "The soil used to make them",
              "B": "Colour, polish, and figure (design)",
              "C": "The food cooked in them",
              "D": "The weight of the vessel"
            },
            "correct_answer": "B",
            "explanation": "A pottery culture is named based on its specific visual elements like the color, polish, or painted figures which form its basic identity.",
            "difficulty": "easy",
            "exam": "SSC_MTS",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["pottery_culture", "nomenclature"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_7_Q002",
            "question": "The name of Ochre Coloured Pottery (OCP) culture is commonly associated with which other archaeological culture?",
            "options": {
              "A": "Megalith Culture",
              "B": "Copper Hoard Culture (CHC)",
              "C": "Painted Grey Ware (PGW)",
              "D": "Iron Age Culture"
            },
            "correct_answer": "B",
            "explanation": "OCP culture is linked with Copper Hoard Culture because massive copper hoards (like the 424 implements at Gungeria) are found at almost every OCP site.",
            "difficulty": "hard",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["ocp", "copper_hoard_culture"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_7_Q003",
            "question": "The biggest copper hoard in India, comprising 424 copper implements, was discovered at which of the following places?",
            "options": {
              "A": "Hastinapur",
              "B": "Gungeria (Madhya Pradesh)",
              "C": "Ataranjikhera",
              "D": "Saipai"
            },
            "correct_answer": "B",
            "explanation": "Gungeria, located in the Balaghat district of Madhya Pradesh, yielded the largest known copper hoard.",
            "difficulty": "hard",
            "exam": "RAILWAY",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["gungeria", "copper_hoard", "discoveries"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_7_Q004",
            "question": "Which highly polished pottery culture existed precisely during the time of the 16 Mahajanapadas and the Second Urbanization (600 BC-300 BC)?",
            "options": {
              "A": "Ochre Coloured Pottery (OCP)",
              "B": "Black and Red Ware (BRW)",
              "C": "Painted Grey Ware (PGW)",
              "D": "Northern Black Polished Ware (NBPW)"
            },
            "correct_answer": "D",
            "explanation": "NBPW culture, characterized by black, highly polished pottery, was prevalent from 600 BC to 300 BC, corresponding with the rise of the Mahajanapadas.",
            "difficulty": "medium",
            "exam": "SSC_CHSL",
            "prev_year": {
              "asked": false,
              "details": ""
            },
            "tags": ["nbpw", "mahajanapadas", "pottery"]
          },
          {
            "question_id": "SUB_1_CHA_1_SEC_2_TOP_2_STOP_7_Q005",
            "question": "Which Indian archaeological site provides the earliest evidence of the use of pottery in the world?",
            "options": {
              "A": "Chopanimando",
              "B": "Kalibangan",
              "C": "Lothal",
              "D": "Bhimbetka"
            },
            "correct_answer": "A",
            "explanation": "Chopanimando in the Allahabad district of Uttar Pradesh holds the earliest global evidence for the use of hand-made clay pottery.",
            "difficulty": "medium",
            "exam": "SSC_CGL",
            "prev_year": {
              "asked": true,
              "details": "SSC CGL 2019"
            },
            "tags": ["chopanimando", "earliest_pottery"]
          }
        ]
      }
    ]
  },
{
  "subject": "History",
  "subject_id": "SUB_1",
  "chapter": "Indian History",
  "chapter_id": "CHA_1",
  "section": "Ancient India",
  "section_id": "SEC_2",
  "topic": "Harappan/Indus Civilization",
  "topic_id": "TOP_3",
  "subtopics": [
    {
      "subtopic": "Introduction, Nomenclature & Time Period",
      "subtopic_id": "STOP_1",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_1_Q001",
          "question": "Who among the following was the first scholar to use the term 'Indus Civilization'?",
          "options": {
            "A": "A.J. Toynbee",
            "B": "John Marshall",
            "C": "Daya Ram Sahni",
            "D": "Rakhal Das Bannerji"
          },
          "correct_answer": "B",
          "explanation": "John Marshall was the first scholar to use the term 'Indus Civilization' for the Harappan culture.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": ["nomenclature", "scholars"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_1_Q002",
          "question": "The most accepted period of the Indus Civilization based on Carbon-14 dating is:",
          "options": {
            "A": "3000 BC - 2000 BC",
            "B": "2500 BC - 1750 BC",
            "C": "3500 BC - 2500 BC",
            "D": "2000 BC - 1500 BC"
          },
          "correct_answer": "B",
          "explanation": "The most accepted period is 2500 BC-1750 BC, determined by Carbon-14 dating.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["time_period", "dating"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_1_Q003",
          "question": "The Indus Civilization belongs to which of the following ages?",
          "options": {
            "A": "Paleolithic Age",
            "B": "Neolithic Age",
            "C": "Chalcolithic Age / Bronze Age",
            "D": "Iron Age"
          },
          "correct_answer": "C",
          "explanation": "The Indus Civilization belongs to the Proto-Historic Period, also known as the Chalcolithic Age or Bronze Age.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2019"
          },
          "tags": ["historical_period"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_1_Q004",
          "question": "According to archaeological tradition, the most appropriate name for the civilization is Harappan Civilization because:",
          "options": {
            "A": "Harappa was the largest city",
            "B": "Harappa was the first site to be discovered",
            "C": "Harappa was the capital city",
            "D": "Harappa had the highest population"
          },
          "correct_answer": "B",
          "explanation": "It is called Harappan Civilization because Harappa was the first site from where a city buried under earth was discovered.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["nomenclature", "archaeology"]
        }
      ]
    },
    {
      "subtopic": "Geographical Extent & Boundaries",
      "subtopic_id": "STOP_2",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_2_Q005",
          "question": "Which is the Northernmost site of the Indus Civilization?",
          "options": {
            "A": "Daimabad",
            "B": "Alamgirpur",
            "C": "Manda",
            "D": "Sutkagendor"
          },
          "correct_answer": "C",
          "explanation": "Manda, located on the Chenab river in Jammu-Kashmir, is the northernmost site.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2017"
          },
          "tags": ["extreme_points", "geography"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_2_Q006",
          "question": "The Easternmost site of the Indus Civilization, Alamgirpur, is situated on the banks of which river?",
          "options": {
            "A": "Yamuna",
            "B": "Ganga",
            "C": "Hindon",
            "D": "Ghaggar"
          },
          "correct_answer": "C",
          "explanation": "Alamgirpur is the easternmost site, located on the Hindon river in Uttar Pradesh.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["extreme_points", "rivers"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_2_Q007",
          "question": "Daimabad, the southernmost site of the civilization, is located in which present-day state?",
          "options": {
            "A": "Gujarat",
            "B": "Maharashtra",
            "C": "Karnataka",
            "D": "Madhya Pradesh"
          },
          "correct_answer": "B",
          "explanation": "Daimabad is situated on the Pravara river in Maharashtra.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["extreme_points", "states"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_2_Q008",
          "question": "The westernmost site, Sutkagendor, is located on which coast?",
          "options": {
            "A": "Malabar Coast",
            "B": "Coromandel Coast",
            "C": "Makran Coast",
            "D": "Konkan Coast"
          },
          "correct_answer": "C",
          "explanation": "Sutkagendor is located on the Makran Coast near the Pakistan-Iran border.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["extreme_points", "geography"]
        }
      ]
    },
    {
      "subtopic": "Important Cities (Capitals & Ports)",
      "subtopic_id": "STOP_3",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_3_Q009",
          "question": "Which of the following pair of cities is considered as the capital cities of the Indus Civilization?",
          "options": {
            "A": "Lothal and Kalibanga",
            "B": "Harappa and Mohenjodaro",
            "C": "Dholavira and Banawali",
            "D": "Chanhudaro and Surkotada"
          },
          "correct_answer": "B",
          "explanation": "Harappa and Mohenjodaro are widely recognized as the twin capital cities of the civilization.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["capital_cities"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_3_Q010",
          "question": "Which of the following is NOT a port city of the Indus Valley Civilization?",
          "options": {
            "A": "Lothal",
            "B": "Balakot",
            "C": "Kalibanga",
            "D": "Sutkagendor"
          },
          "correct_answer": "C",
          "explanation": "Kalibanga was an inland city in Rajasthan. Lothal, Balakot, Sutkagendor, Allahdino, and Kuntasi were port cities.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": ["port_cities"]
        }
      ]
    },
    {
      "subtopic": "Major Sites, Rivers & Excavators",
      "subtopic_id": "STOP_4",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_4_Q011",
          "question": "Harappa is situated on the banks of which river?",
          "options": {
            "A": "Indus",
            "B": "Ravi",
            "C": "Sutlej",
            "D": "Ghaggar"
          },
          "correct_answer": "B",
          "explanation": "Harappa is situated on the banks of the Ravi river in the Sahiwal district of Punjab (Pakistan).",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": ["rivers", "sites"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_4_Q012",
          "question": "Who discovered Mohenjodaro in 1922?",
          "options": {
            "A": "Daya Ram Sahni",
            "B": "Rakhal Das Bannerji",
            "C": "N.G. Mazumdar",
            "D": "S.R. Rao"
          },
          "correct_answer": "B",
          "explanation": "Mohenjodaro was excavated by Rakhal Das Bannerji (R.D. Bannerji) in the year 1922.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["excavators", "history"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_4_Q013",
          "question": "The site of Kalibanga is located in which Indian state?",
          "options": {
            "A": "Gujarat",
            "B": "Haryana",
            "C": "Rajasthan",
            "D": "Punjab"
          },
          "correct_answer": "C",
          "explanation": "Kalibanga is located in the Hanumangarh district of Rajasthan, on the banks of the Ghaggar river.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["geography", "states"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_4_Q014",
          "question": "Which river is associated with the Harappan site of Dholavira?",
          "options": {
            "A": "Luni",
            "B": "Bhogava",
            "C": "Hindon",
            "D": "Kim"
          },
          "correct_answer": "A",
          "explanation": "Dholavira, located in the Kutchh district of Gujarat, is situated near the Luni river.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2023"
          },
          "tags": ["rivers", "sites"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_4_Q015",
          "question": "Who among the following is associated with the excavation of Lothal?",
          "options": {
            "A": "Amalanand Ghosh",
            "B": "R.S. Bist",
            "C": "J.P. Joshi",
            "D": "S.R. Rao"
          },
          "correct_answer": "D",
          "explanation": "S.R. Rao led the excavations at the port city of Lothal in 1954.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["excavators"]
        }
      ]
    },
    {
      "subtopic": "Archaeological Finds by Site",
      "subtopic_id": "STOP_5",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q016",
          "question": "At which site were 6 granaries found in a row?",
          "options": {
            "A": "Mohenjodaro",
            "B": "Harappa",
            "C": "Lothal",
            "D": "Kalibanga"
          },
          "correct_answer": "B",
          "explanation": "6 Granaries in a row is a unique and major archaeological find from Harappa.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["discoveries", "architecture"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q017",
          "question": "The 'Great Bath', the largest building of the civilization, was discovered at:",
          "options": {
            "A": "Harappa",
            "B": "Dholavira",
            "C": "Mohenjodaro",
            "D": "Banawali"
          },
          "correct_answer": "C",
          "explanation": "The Great Bath was discovered in Mohenjodaro. It was a large rectangular tank used for ritual bathing.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2021"
          },
          "tags": ["architecture", "discoveries"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q018",
          "question": "Which was the only city of the Indus Valley Civilization without a citadel?",
          "options": {
            "A": "Kalibanga",
            "B": "Chanhudaro",
            "C": "Surkotada",
            "D": "Lothal"
          },
          "correct_answer": "B",
          "explanation": "Chanhudaro was primarily an industrial town (bead-making, etc.) and is the only known city without a fortified citadel.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": ["town_planning", "architecture"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q019",
          "question": "Traces of a ploughed field surface (Pre-Harappan) and 7 fire altars were found at:",
          "options": {
            "A": "Kalibanga",
            "B": "Lothal",
            "C": "Banawali",
            "D": "Harappa"
          },
          "correct_answer": "A",
          "explanation": "Kalibanga yielded evidence of a ploughed field and 7 fire altars, indicating advanced agriculture and ritualistic practices.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2019"
          },
          "tags": ["agriculture", "discoveries"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q020",
          "question": "A dockyard used for ships and trade was discovered in which Harappan city?",
          "options": {
            "A": "Dholavira",
            "B": "Mohenjodaro",
            "C": "Lothal",
            "D": "Surkotada"
          },
          "correct_answer": "C",
          "explanation": "Lothal was a major port city in Gujarat where a massive brick dockyard was discovered.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["trade", "architecture"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q021",
          "question": "Which site is unique for being divided into 3 parts instead of the usual 2?",
          "options": {
            "A": "Harappa",
            "B": "Chanhudaro",
            "C": "Dholavira",
            "D": "Kalibanga"
          },
          "correct_answer": "C",
          "explanation": "Dholavira is the only Indus site that is divided into three parts (citadel, middle town, and lower town).",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["town_planning", "architecture"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q022",
          "question": "The bronze image of a nude woman dancer and the steatite statuette of a Priest King were found at:",
          "options": {
            "A": "Harappa",
            "B": "Mohenjodaro",
            "C": "Lothal",
            "D": "Chanhudaro"
          },
          "correct_answer": "B",
          "explanation": "Both the famous bronze dancing girl and the bearded Priest King statuette were excavated from Mohenjodaro.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["sculpture", "art"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q023",
          "question": "Remains of a horse (actually considered an onager/wild ass) were found at which specific site?",
          "options": {
            "A": "Surkotada",
            "B": "Banawali",
            "C": "Lothal",
            "D": "Daimabad"
          },
          "correct_answer": "A",
          "explanation": "Surkotada in Gujarat is the only Indus site where bones of a horse (or onager) have been reported.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["animals", "discoveries"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q024",
          "question": "At which site was an inkpot, lipstick, and the imprint of a dog's paw chasing a cat discovered?",
          "options": {
            "A": "Kalibanga",
            "B": "Chanhudaro",
            "C": "Harappa",
            "D": "Mohenjodaro"
          },
          "correct_answer": "B",
          "explanation": "Chanhudaro was an industrial center where these everyday items and the unique brick imprint were found.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["artifacts", "discoveries"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_5_Q025",
          "question": "Evidence of a unique water harnessing system, giant water reservoirs, and a stadium comes from:",
          "options": {
            "A": "Dholavira",
            "B": "Banawali",
            "C": "Lothal",
            "D": "Harappa"
          },
          "correct_answer": "A",
          "explanation": "Dholavira had a highly advanced water management system with large reservoirs and is also the site of a large stadium.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["water_management", "architecture"]
        }
      ]
    },
    {
      "subtopic": "Town Planning & Architecture",
      "subtopic_id": "STOP_6",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_6_Q026",
          "question": "The systematic town-planning of the Indus Valley Civilization was primarily based on:",
          "options": {
            "A": "Circular pattern",
            "B": "Grid system (Chessboard pattern)",
            "C": "Radial pattern",
            "D": "Star-like pattern"
          },
          "correct_answer": "B",
          "explanation": "The cities were systematically planned on the lines of a 'grid system' where roads cut across one another at right angles.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["town_planning", "architecture"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_6_Q027",
          "question": "Which of the following sites lacked the typical chessboard or iron-grid pattern of town planning?",
          "options": {
            "A": "Banawali",
            "B": "Kalibanga",
            "C": "Harappa",
            "D": "Mohenjodaro"
          },
          "correct_answer": "A",
          "explanation": "Banawali is noted for its lack of a systematic chessboard pattern and proper drainage system.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["town_planning", "exceptions"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_6_Q028",
          "question": "The houses in the Indus Valley Civilization were generally built using:",
          "options": {
            "A": "Stone blocks",
            "B": "Mud and straw",
            "C": "Sun-dried bricks",
            "D": "Burnt bricks"
          },
          "correct_answer": "D",
          "explanation": "The extensive use of burnt bricks in construction is a hallmark of the Indus Valley Civilization.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB JE 2019"
          },
          "tags": ["architecture", "materials"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_6_Q029",
          "question": "What was a common feature of the drainage system in major Harappan cities?",
          "options": {
            "A": "Open drains",
            "B": "Drains made of wood",
            "C": "Underground drainage system",
            "D": "Dumping water directly into the river"
          },
          "correct_answer": "C",
          "explanation": "The civilization is famous for its highly advanced and systematic underground drainage system.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["town_planning", "drainage"]
        }
      ]
    },
    {
      "subtopic": "Agriculture & Animal Husbandry",
      "subtopic_id": "STOP_7",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_7_Q030",
          "question": "Who were the earliest people in the world to produce cotton?",
          "options": {
            "A": "Egyptians",
            "B": "Mesopotamians",
            "C": "Harappans (Indus people)",
            "D": "Chinese"
          },
          "correct_answer": "C",
          "explanation": "The Indus people were the earliest in the world to produce cotton, which the Greeks referred to as 'Sindon'.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": ["agriculture", "firsts"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_7_Q031",
          "question": "Which of the following crops was generally NOT cultivated widely by the Harappans, except for evidence found in Lothal and Rangpur?",
          "options": {
            "A": "Wheat",
            "B": "Barley",
            "C": "Sesamum",
            "D": "Rice"
          },
          "correct_answer": "D",
          "explanation": "Wheat and barley were main crops. Evidence of rice cultivation is limited and found only in Lothal and Rangpur (Gujarat).",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["agriculture", "crops"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_7_Q032",
          "question": "Which animal was NOT known to the people of the Indus Valley Civilization?",
          "options": {
            "A": "Elephant",
            "B": "Lion",
            "C": "Rhinoceros",
            "D": "Tiger"
          },
          "correct_answer": "B",
          "explanation": "The lion was not known to the Indus people, whereas elephants, tigers, and rhinoceros were known.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2020"
          },
          "tags": ["animals", "unknowns"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_7_Q033",
          "question": "From which Harappan site has a single instance of the Indian rhinoceros been reported?",
          "options": {
            "A": "Amri",
            "B": "Lothal",
            "C": "Harappa",
            "D": "Banawali"
          },
          "correct_answer": "A",
          "explanation": "A single instance of the Indian rhinoceros has been reported from the site of Amri.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["animals", "specific_sites"]
        }
      ]
    },
    {
      "subtopic": "Economy, Trade & Commerce (Imports & Exports)",
      "subtopic_id": "STOP_8",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_8_Q034",
          "question": "Which of the following metals was NOT known to the Indus Valley people?",
          "options": {
            "A": "Copper",
            "B": "Bronze",
            "C": "Silver",
            "D": "Iron"
          },
          "correct_answer": "D",
          "explanation": "Iron was not known to the people of the Indus Valley Civilization; they primarily used copper and bronze.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2021"
          },
          "tags": ["metals", "unknowns"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_8_Q035",
          "question": "What was the normal method of exchange of goods in the Harappan economy?",
          "options": {
            "A": "Gold coins",
            "B": "Silver coins",
            "C": "Barter system",
            "D": "Paper currency"
          },
          "correct_answer": "C",
          "explanation": "As there is no evidence of coins, the barter system is assumed to have been the normal method of exchange.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["economy", "trade"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_8_Q036",
          "question": "In the Sumerian texts, what name was given to the Indus region?",
          "options": {
            "A": "Dilmun",
            "B": "Makan",
            "C": "Meluha",
            "D": "Ur"
          },
          "correct_answer": "C",
          "explanation": "The Sumerian texts refer to trade relations with 'Meluha', which was the name given to the Indus region.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2019"
          },
          "tags": ["trade", "nomenclature"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_8_Q037",
          "question": "The Harappans imported Lapis Lazuli and Sapphire primarily from:",
          "options": {
            "A": "Kolar (Karnataka)",
            "B": "Khetri (Rajasthan)",
            "C": "Badak-shan (Afghanistan)",
            "D": "Central Asia"
          },
          "correct_answer": "C",
          "explanation": "Lapis Lazuli and Sapphire were imported from Badak-shan in Afghanistan.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["trade", "imports"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_8_Q038",
          "question": "Shatughai and Mundigaq were the Indus trading sites located in which present-day country?",
          "options": {
            "A": "Iran",
            "B": "Afghanistan",
            "C": "Oman",
            "D": "Iraq"
          },
          "correct_answer": "B",
          "explanation": "Shatughai and Mundigaq were the Indus sites found in Afghanistan, likely serving as trading outposts.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["trade", "geography"]
        }
      ]
    },
    {
      "subtopic": "Religion, Worship & Burial Practices",
      "subtopic_id": "STOP_9",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_9_Q039",
          "question": "The chief male deity of the Indus Valley Civilization, 'Pashupati Mahadeva', is surrounded by which four animals on the seal?",
          "options": {
            "A": "Elephant, Tiger, Rhino, Buffalo",
            "B": "Lion, Tiger, Rhino, Bull",
            "C": "Elephant, Lion, Horse, Deer",
            "D": "Tiger, Rhino, Camel, Dog"
          },
          "correct_answer": "A",
          "explanation": "The Proto-Shiva on the seal is surrounded by four animals: elephant, tiger, rhino, and buffalo (and two deer at his feet).",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2022"
          },
          "tags": ["religion", "seals", "animals"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_9_Q040",
          "question": "Which tree was most prominently worshipped by the Indus Valley people?",
          "options": {
            "A": "Banyan",
            "B": "Neem",
            "C": "Peepal",
            "D": "Mango"
          },
          "correct_answer": "C",
          "explanation": "There is evidence of tree worship among Harappans, especially the worship of the peepal tree.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["religion", "nature_worship"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_9_Q041",
          "question": "The origin of which sacred symbol can be traced back to the Indus Civilization?",
          "options": {
            "A": "Om",
            "B": "Swastika",
            "C": "Trishul",
            "D": "Lotus"
          },
          "correct_answer": "B",
          "explanation": "The origin of the 'Swastika' symbol can be traced to the Indus Civilization.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["religion", "symbols"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_9_Q042",
          "question": "What was the most common method of disposal of the dead in the Indus Valley Civilization?",
          "options": {
            "A": "Cremation",
            "B": "Floating in the river",
            "C": "Inhumation (complete burial)",
            "D": "Leaving for scavengers"
          },
          "correct_answer": "C",
          "explanation": "Inhumation or complete burial was the most common method of disposal of the dead.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["burial_practices"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_9_Q043",
          "question": "The most commonly found figurine associated with their religion is that of:",
          "options": {
            "A": "Dancing Girl",
            "B": "Mother-Goddess",
            "C": "Priest King",
            "D": "Pashupati"
          },
          "correct_answer": "B",
          "explanation": "The most commonly found terracotta figurine is that of Mother-Goddess (Matridevi or Shakti).",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": ["religion", "artifacts"]
        }
      ]
    },
    {
      "subtopic": "Script & Decline of the Civilization",
      "subtopic_id": "STOP_10",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_10_Q044",
          "question": "What is the nature of the script of the Indus Valley Civilization?",
          "options": {
            "A": "Brahmi",
            "B": "Kharoshthi",
            "C": "Pictographic and Undeciphered",
            "D": "Cuneiform"
          },
          "correct_answer": "C",
          "explanation": "The script is pictographic and has not been deciphered so far.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2018"
          },
          "tags": ["script", "writing"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_10_Q045",
          "question": "The overlap of letters on some potsherds from Kalibanga shows that their writing style was 'boustrophedon'. What does this mean?",
          "options": {
            "A": "Written entirely from left to right",
            "B": "Written entirely from right to left",
            "C": "Written top to bottom",
            "D": "Written right to left and left to right in alternate lines"
          },
          "correct_answer": "D",
          "explanation": "Boustrophedon refers to writing from right to left in one line, and from left to right in the alternate line.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["script", "writing_style"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_10_Q046",
          "question": "Which material was mainly used in the manufacture of Harappan seals?",
          "options": {
            "A": "Gold",
            "B": "Iron",
            "C": "Steatite",
            "D": "Ivory"
          },
          "correct_answer": "C",
          "explanation": "Steatite (a soft stone) was primarily used in the manufacture of the thousands of seals found.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["artifacts", "seals", "materials"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_10_Q047",
          "question": "Who among the following scholars accused the Aryan God 'Indra' of causing the decline of the Indus Civilisation?",
          "options": {
            "A": "John Marshall",
            "B": "M. Wheeler",
            "C": "Daya Ram Sahni",
            "D": "A.J. Toynbee"
          },
          "correct_answer": "B",
          "explanation": "M. Wheeler famously stated that Indra is accused of causing the decline of the Indus Civilisation based on Rigvedic battle mentions.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["decline", "scholars"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_10_Q048",
          "question": "The majority of scholars believe that the makers of the Indus Civilization were:",
          "options": {
            "A": "Aryans",
            "B": "Mongoloids",
            "C": "Dravidians",
            "D": "Greeks"
          },
          "correct_answer": "C",
          "explanation": "Based on linguistic (Proto-Dravidian script) and other evidence, the majority of scholars believe the makers were Dravidians.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["origins", "makers"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_10_Q049",
          "question": "Which animal is most frequently represented on the Indus seals?",
          "options": {
            "A": "Humped Bull",
            "B": "Humpless Bull",
            "C": "Elephant",
            "D": "Tiger"
          },
          "correct_answer": "B",
          "explanation": "According to the text, the humpless bull is represented in most of the Indus seals.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["seals", "animals"]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_3_STOP_10_Q050",
          "question": "The oldest script in the Indian subcontinent is the Harappan script, but which is the oldest DECIPHERED script?",
          "options": {
            "A": "Kharoshthi",
            "B": "Devanagari",
            "C": "Brahmi",
            "D": "Aramaic"
          },
          "correct_answer": "C",
          "explanation": "While Harappan is the oldest script, it's undeciphered. Brahmi is the oldest deciphered script, known from about the 5th century BC.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": ["script", "history"]
        }
      ]
    }
  ]
},
{
  "subject": "History",
  "subject_id": "SUB_1",
  "chapter": "Indian History",
  "chapter_id": "CHA_1",
  "section": "Ancient India",
  "section_id": "SEC_2",
  "topic": "4. Vedic Culture (1500 BC-600 BC)",
  "topic_id": "TOP_4",
  "subtopics": [
    {
      "subtopic": "4.1 Original Home of the Aryan",
      "subtopic_id": "STOP_1",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_1_Q001",
          "question": "According to Max Muller, which region was the original home of the Aryans?",
          "options": {
            "A": "Europe",
            "B": "Arctic region",
            "C": "Central Asia",
            "D": "Indian subcontinent"
          },
          "correct_answer": "C",
          "explanation": "According to Max Muller, the Aryans migrated to India from Central Asia.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Aryan Migration",
            "Central Asia",
            "Max Muller"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_1_Q002",
          "question": "Who propounded the theory that the original home of the Aryans was the Arctic region?",
          "options": {
            "A": "Max Muller",
            "B": "B. G. Tilak",
            "C": "Dayanand Saraswati",
            "D": "Sir William Jones"
          },
          "correct_answer": "B",
          "explanation": "B. G. Tilak believed that the Aryans came from the Arctic region.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Arctic Region",
            "B.G. Tilak"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_1_Q003",
          "question": "In which time period are the Aryans supposed to have migrated into the Indian subcontinent?",
          "options": {
            "A": "3000 BC - 2500 BC",
            "B": "2500 BC - 2000 BC",
            "C": "2000 BC - 1500 BC",
            "D": "1500 BC - 1000 BC"
          },
          "correct_answer": "C",
          "explanation": "The Aryans migrated from Central Asia into the Indian subcontinent in waves during 2000 BC-1500 BC.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Timeline",
            "Aryan Migration"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_1_Q004",
          "question": "Which inscription proves the Central Asian Theory of the Aryans' homeland by mentioning 4 Vedic gods?",
          "options": {
            "A": "Hathigumpha Inscription",
            "B": "Boghazkai Inscription",
            "C": "Junagadh Inscription",
            "D": "Allahabad Pillar Inscription"
          },
          "correct_answer": "B",
          "explanation": "The Boghazkai Inscription in Asia Minor (Turkey) mentions Vedic gods, proving the Central Asian homeland theory.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2018"
          },
          "tags": [
            "Boghazkai Inscription",
            "Asia Minor"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_1_Q005",
          "question": "Which of the following Vedic gods is NOT mentioned in the Boghazkai Inscription?",
          "options": {
            "A": "Indra",
            "B": "Varuna",
            "C": "Agni",
            "D": "Nasatyas"
          },
          "correct_answer": "C",
          "explanation": "The Boghazkai Inscription mentions 4 Vedic gods: Indra, Varuna, Mitra, and Nasatyas. Agni is not included.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Vedic Gods",
            "Boghazkai"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_1_Q006",
          "question": "What was the region called where the first group of Aryans settled in India?",
          "options": {
            "A": "Aryavarta",
            "B": "Sapta Sindhu",
            "C": "Brahmavarta",
            "D": "Dakshinapatha"
          },
          "correct_answer": "B",
          "explanation": "The group that came to India first settled in the Frontier Province and Punjab, then called Sapta Sindhu (region of seven rivers).",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Sapta Sindhu",
            "Early Settlements"
          ]
        }
      ]
    },
    {
      "subtopic": "4.2 Vedic Literature (1500 BC-600 BC)",
      "subtopic_id": "STOP_2",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q007",
          "question": "Which Veda is presumed to have been composed while the Aryans were still in the Punjab?",
          "options": {
            "A": "Sama Veda",
            "B": "Yajur Veda",
            "C": "Atharva Veda",
            "D": "Rig Veda"
          },
          "correct_answer": "D",
          "explanation": "It is presumed that the Rig Veda was composed while the Aryans were still settled in the Punjab region.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Rig Veda",
            "Punjab"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q008",
          "question": "The Vedic Literature is called 'Shruti'. What is the literal meaning of 'Shruti'?",
          "options": {
            "A": "To hear",
            "B": "To write",
            "C": "To remember",
            "D": "To speak"
          },
          "correct_answer": "A",
          "explanation": "Vedic literature was handed down from generation to generation by word of mouth, hence it is called Shruti (to hear).",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Shruti",
            "Vedic Literature"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q009",
          "question": "Which three Vedas are jointly called 'Vedatrayi'?",
          "options": {
            "A": "Rig, Yajur, and Atharva",
            "B": "Rig, Sama, and Atharva",
            "C": "Rig, Yajur, and Sama",
            "D": "Yajur, Sama, and Atharva"
          },
          "correct_answer": "C",
          "explanation": "The first three Vedas (Rig Veda, Yajur Veda, Sama Veda) are jointly called Vedatrayi i.e., trio of Vedas.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2016"
          },
          "tags": [
            "Vedatrayi",
            "Vedas"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q010",
          "question": "Which text is also known as 'the first testament of mankind'?",
          "options": {
            "A": "Sama Veda",
            "B": "Rig Veda",
            "C": "Upanishads",
            "D": "Shatapatha Brahmana"
          },
          "correct_answer": "B",
          "explanation": "The Rig Veda is the oldest text in the world and is known as 'the first testament of mankind'.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Rig Veda",
            "Oldest Text"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q011",
          "question": "How many hymns and mandalas are there in the Rig Veda?",
          "options": {
            "A": "1028 hymns and 10 mandalas",
            "B": "1549 hymns and 8 mandalas",
            "C": "1028 hymns and 12 mandalas",
            "D": "1549 hymns and 10 mandalas"
          },
          "correct_answer": "A",
          "explanation": "The Rig Veda contains 1028 hymns and 10,580 verses, divided into 10 mandalas.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2022"
          },
          "tags": [
            "Rig Veda",
            "Hymns",
            "Mandalas"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q012",
          "question": "Which mandalas of the Rig Veda are known as the Gotra or Vamsha Mandalas (Kula Granth)?",
          "options": {
            "A": "1st to 6th",
            "B": "2nd to 7th",
            "C": "3rd to 8th",
            "D": "8th to 10th"
          },
          "correct_answer": "B",
          "explanation": "Six mandalas (from 2nd to 7th) are called Gotra/Vamsha Mandalas.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Gotra Mandala",
            "Rig Veda"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q013",
          "question": "The famous 'Purushasukta' which explains the 4 Varnas is found in which mandala of the Rig Veda?",
          "options": {
            "A": "1st Mandala",
            "B": "3rd Mandala",
            "C": "7th Mandala",
            "D": "10th Mandala"
          },
          "correct_answer": "D",
          "explanation": "The 10th mandala contains the famous Purushasukta which explains the 4 Varnas—Brahmana, Kshatriya, Vaishya, and Shudra.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2019"
          },
          "tags": [
            "Purushasukta",
            "10th Mandala",
            "Varnas"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q014",
          "question": "What were the priests who recited the hymns of the Rig Veda called?",
          "options": {
            "A": "Adhvaryus",
            "B": "Udgatri",
            "C": "Hotri",
            "D": "Brahman"
          },
          "correct_answer": "C",
          "explanation": "The hymns of the Rig Veda were recited by Hotri.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Hotri",
            "Rig Veda",
            "Priests"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q015",
          "question": "Which Veda is considered a ritual veda and is divided into Krishna and Shukla parts?",
          "options": {
            "A": "Rig Veda",
            "B": "Sama Veda",
            "C": "Yajur Veda",
            "D": "Atharva Veda"
          },
          "correct_answer": "C",
          "explanation": "The Yajur Veda is a ritual veda divided into Krishna Yajur Veda and Shukla Yajur Veda. It contains both verse and prose.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Yajur Veda",
            "Krishna",
            "Shukla"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q016",
          "question": "Who recited the hymns of the Yajur Veda?",
          "options": {
            "A": "Hotri",
            "B": "Adhvaryus",
            "C": "Udgatri",
            "D": "Brahman"
          },
          "correct_answer": "B",
          "explanation": "Its hymns were recited by Adhvaryus.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Yajur Veda",
            "Adhvaryus"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q017",
          "question": "Which Veda is known as the book of chants and is important for Indian music?",
          "options": {
            "A": "Rig Veda",
            "B": "Yajur Veda",
            "C": "Sama Veda",
            "D": "Atharva Veda"
          },
          "correct_answer": "C",
          "explanation": "The Sama Veda (book of chants) had 1549 verses and is important for Indian music. Its hymns were recited by Udgatri.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2021"
          },
          "tags": [
            "Sama Veda",
            "Indian Music"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q018",
          "question": "Which Veda contains charms and spells to ward off evils and diseases?",
          "options": {
            "A": "Rig Veda",
            "B": "Sama Veda",
            "C": "Yajur Veda",
            "D": "Atharva Veda"
          },
          "correct_answer": "D",
          "explanation": "The Atharva Veda contains charms and spells to ward off evils and diseases.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": [
            "Atharva Veda",
            "Charms",
            "Spells"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q019",
          "question": "The Shatapatha Brahmana, which is the oldest and largest Brahmana, is attached to which Veda?",
          "options": {
            "A": "Rig Veda",
            "B": "Yajur Veda",
            "C": "Sama Veda",
            "D": "Atharva Veda"
          },
          "correct_answer": "B",
          "explanation": "The Shatapatha and Taittariya Brahmanas are attached to the Yajur Veda.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Shatapatha Brahmana",
            "Yajur Veda"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_2_Q020",
          "question": "Which is considered the oldest Upanishad among the 108 Upanishads?",
          "options": {
            "A": "Chhandogya",
            "B": "Mundaka",
            "C": "Vrihadaranyaka",
            "D": "Jabala"
          },
          "correct_answer": "C",
          "explanation": "Vrihadaranyaka is the oldest Upanishada.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Upanishads",
            "Vrihadaranyaka"
          ]
        }
      ]
    },
    {
      "subtopic": "4.3 Literature of Vedic Tradition (600 BC-600 AD)",
      "subtopic_id": "STOP_3",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q021",
          "question": "How many Vedangas are there in the Literature of Vedic Tradition?",
          "options": {
            "A": "4",
            "B": "6",
            "C": "8",
            "D": "12"
          },
          "correct_answer": "B",
          "explanation": "There are six Vedangas: Shiksha, Kalpa, Vyakarana, Nirukta, Chhanda, and Jyotisha.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Vedangas"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q022",
          "question": "Which Vedanga deals with the rules of Grammar and includes the oldest grammar text 'Ashtadhyayi'?",
          "options": {
            "A": "Kalpa Sutras",
            "B": "Shiksha",
            "C": "Vyakarana",
            "D": "Nirukta"
          },
          "correct_answer": "C",
          "explanation": "Vyakarana deals with Grammar. 'Ashtadhyayi' written by Panini is the oldest grammar of the world.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2017"
          },
          "tags": [
            "Vedangas",
            "Vyakarana",
            "Ashtadhyayi",
            "Panini"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q023",
          "question": "'Nirukta', considered the oldest dictionary of the world, is based on etymology. Who wrote it?",
          "options": {
            "A": "Pingal",
            "B": "Yask",
            "C": "Panini",
            "D": "Kashyap"
          },
          "correct_answer": "B",
          "explanation": "'Nirukta' was written by Yask based on 'Nighantu' (Kashyap), a collection of difficult vedic words.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Nirukta",
            "Yask",
            "Etymology"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q024",
          "question": "Which among the following is the oldest Smriti text (Pre-Gupta Period)?",
          "options": {
            "A": "Narad Smriti",
            "B": "Parashara Smriti",
            "C": "Manu Smriti",
            "D": "Yajnvalkya Smriti"
          },
          "correct_answer": "C",
          "explanation": "Manu Smriti (Pre-Gupta Period) is the oldest Smriti text.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Smriti",
            "Manu Smriti"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q025",
          "question": "How many shlokas does the Ramayana currently consist of?",
          "options": {
            "A": "6,000",
            "B": "12,000",
            "C": "24,000",
            "D": "1,00,000"
          },
          "correct_answer": "C",
          "explanation": "The Ramayana currently consists of 24,000 shlokas (verses). Originally it was 6,000, then 12,000.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Epics",
            "Ramayana"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q026",
          "question": "From which Parvan (chapter) of the Mahabharata is the Bhagavad Gita extracted?",
          "options": {
            "A": "Shanti Parvan",
            "B": "Bhishma Parvan",
            "C": "Drona Parvan",
            "D": "Karna Parvan"
          },
          "correct_answer": "B",
          "explanation": "Bhagavad Gita is extracted from the Bhishma Parvan of Mahabharata.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": [
            "Mahabharata",
            "Bhagavad Gita",
            "Bhishma Parvan"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q027",
          "question": "What was the original name of the Mahabharata when it had 8,800 shlokas?",
          "options": {
            "A": "Bharata",
            "B": "Jay Samhita",
            "C": "Shatasahastri Samhita",
            "D": "Adi Kavya"
          },
          "correct_answer": "B",
          "explanation": "Originally the Mahabharata was called Jay Samhita and had 8,800 shlokas.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2016"
          },
          "tags": [
            "Mahabharata",
            "Jay Samhita"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q028",
          "question": "Which of the following is considered the oldest Puranic text among the 18 famous Puranas?",
          "options": {
            "A": "Vishnu Purana",
            "B": "Vayu Purana",
            "C": "Matsya Purana",
            "D": "Bhagavata Purana"
          },
          "correct_answer": "C",
          "explanation": "The Matsya Purana is the oldest Puranic text.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2018"
          },
          "tags": [
            "Puranas",
            "Matsya Purana"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q029",
          "question": "Which Upaveda is associated with the Sama Veda?",
          "options": {
            "A": "Ayurveda",
            "B": "Dhanurveda",
            "C": "Shilpveda",
            "D": "Gandharvaveda"
          },
          "correct_answer": "D",
          "explanation": "Gandharvaveda (Music) is the Upaveda associated with Sama Veda.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Upaveda",
            "Sama Veda",
            "Gandharvaveda"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q030",
          "question": "Who is considered the founder of the Sankhya Darshana?",
          "options": {
            "A": "Kapila",
            "B": "Patanjali",
            "C": "Akshapada Gautama",
            "D": "Uluka Kanada"
          },
          "correct_answer": "A",
          "explanation": "Kapila is the founder of Sankhya Darshana.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2019"
          },
          "tags": [
            "Darshanas",
            "Sankhya",
            "Kapila"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q031",
          "question": "Which school of philosophy rejects the Vedas as an authoritative source of knowledge and was founded by Brihaspati/Charvaka?",
          "options": {
            "A": "Vaishesika",
            "B": "Lokayat Mat (Charvaka)",
            "C": "Mimansa",
            "D": "Vedant"
          },
          "correct_answer": "B",
          "explanation": "Lokayat Mat/Charvaka is a Nastik Darshana (rejects Vedas) and is the earliest Darshana.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Nastik Darshanas",
            "Charvaka"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_3_Q032",
          "question": "Which school of philosophy was founded by Patanjali?",
          "options": {
            "A": "Nyaya Darshana",
            "B": "Vaishesika Darshana",
            "C": "Yoga Darshana",
            "D": "Sankhya Darshana"
          },
          "correct_answer": "C",
          "explanation": "Yoga Darshana was founded by Patanjali.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Yoga Darshana",
            "Patanjali"
          ]
        }
      ]
    },
    {
      "subtopic": "4.4 Rig Vedic / Early Vedic Period (1500 BC-1000 BC)",
      "subtopic_id": "STOP_4",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q033",
          "question": "Which river is most mentioned in the Rig Veda?",
          "options": {
            "A": "Saraswati",
            "B": "Ganges",
            "C": "Sindhu (Indus)",
            "D": "Yamuna"
          },
          "correct_answer": "C",
          "explanation": "According to the Rig Veda, Sindhu is the most mentioned river.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2018"
          },
          "tags": [
            "Rivers",
            "Sindhu",
            "Early Vedic"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q034",
          "question": "Which river was considered the most pious river in the early Vedic Period?",
          "options": {
            "A": "Sindhu",
            "B": "Saraswati",
            "C": "Ganges",
            "D": "Kubha"
          },
          "correct_answer": "B",
          "explanation": "Saraswati was considered the most pious river in the Rig Veda.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Saraswati",
            "Pious River"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q035",
          "question": "What is the modern name of the ancient Rigvedic river 'Parushni'?",
          "options": {
            "A": "Sutlej",
            "B": "Beas",
            "C": "Jhelum",
            "D": "Ravi"
          },
          "correct_answer": "D",
          "explanation": "Parushni is the ancient name for the modern river Ravi.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": [
            "Parushni",
            "Ravi",
            "Rivers"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q036",
          "question": "The famous 'Dasrajan War' (The Battle of Ten Kings) was fought on the banks of which river?",
          "options": {
            "A": "Vitasta",
            "B": "Asikani",
            "C": "Parushni",
            "D": "Vipas"
          },
          "correct_answer": "C",
          "explanation": "The battle was fought on the bank of the river Parushni (Ravi) in which Sudas emerged victorious.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2021"
          },
          "tags": [
            "Dasrajan War",
            "Parushni"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q037",
          "question": "In early Vedic polity, what was the basic unit of both social and political organisations?",
          "options": {
            "A": "Grama",
            "B": "Vis",
            "C": "Kula (the family)",
            "D": "Jana"
          },
          "correct_answer": "C",
          "explanation": "The Kula (the family) was the basis of both social and political organisations.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Polity",
            "Kula"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q038",
          "question": "Who was the first ranking official, serving as the king's preceptor, friend, philosopher, and guide?",
          "options": {
            "A": "Senani",
            "B": "Purohita",
            "C": "Gramani",
            "D": "Vispati"
          },
          "correct_answer": "B",
          "explanation": "The Purohita or domestic priest was the first ranking official for the king.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Polity",
            "Purohita"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q039",
          "question": "Which two popular assemblies acted as checks on the arbitrary rule of kings in the early Vedic period?",
          "options": {
            "A": "Kula and Grama",
            "B": "Sabha and Samiti",
            "C": "Vidatha and Gana",
            "D": "Rashtra and Vis"
          },
          "correct_answer": "B",
          "explanation": "Sabha and Samiti were popular assemblies that acted as checks on the king's power.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2016"
          },
          "tags": [
            "Sabha",
            "Samiti",
            "Polity"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q040",
          "question": "In the Rigvedic society, the classification of society into four varnas was based on what?",
          "options": {
            "A": "Birth",
            "B": "Wealth",
            "C": "Professions or occupations",
            "D": "Gender"
          },
          "correct_answer": "C",
          "explanation": "The classification into Brahmana, Kshatriya, Vaishya, and Shudra was based on professions or occupations, not birth, at this stage.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Society",
            "Varna System",
            "Occupations"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q041",
          "question": "Which animal was deemed 'Aghanya' (not to be killed) in the Rigvedic society?",
          "options": {
            "A": "Horse",
            "B": "Cow",
            "C": "Elephant",
            "D": "Bull"
          },
          "correct_answer": "B",
          "explanation": "The cow was already deemed Aghanya i.e., not to be killed. The Rig Veda prescribed a penalty of death or expulsion for injuring cows.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2020"
          },
          "tags": [
            "Aghanya",
            "Cow",
            "Society"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q042",
          "question": "Which god played the role of warlord, rain god, and was known as 'Purandara' (destroyer of fort)?",
          "options": {
            "A": "Agni",
            "B": "Varuna",
            "C": "Indra",
            "D": "Surya"
          },
          "correct_answer": "C",
          "explanation": "Indra or Purandara was the most important god (250 hymns), known as the warlord and rain god.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2019"
          },
          "tags": [
            "Religion",
            "Indra",
            "Purandara"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q043",
          "question": "Which Vedic god personified water and was supposed to uphold 'Rita' or the natural order?",
          "options": {
            "A": "Varuna",
            "B": "Agni",
            "C": "Soma",
            "D": "Yama"
          },
          "correct_answer": "A",
          "explanation": "Varuna personified water and was supposed to uphold Rita (natural order).",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Religion",
            "Varuna",
            "Rita"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q044",
          "question": "The famous Gayatri Mantra is addressed to which solar deity?",
          "options": {
            "A": "Pushan",
            "B": "Savitri",
            "C": "Mitra",
            "D": "Vishnu"
          },
          "correct_answer": "B",
          "explanation": "Savitri (the god of light) is the deity to whom the famous Gayatri Mantra is addressed.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": [
            "Religion",
            "Gayatri Mantra",
            "Savitri"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q045",
          "question": "The 9th mandala of the Rig Veda contains 114 hymns attributed to which god, known as the king of plants?",
          "options": {
            "A": "Agni",
            "B": "Rudra",
            "C": "Soma",
            "D": "Dyaus"
          },
          "correct_answer": "C",
          "explanation": "Soma was a plant producing a potent drink; the 9th mandala is entirely attributed to Soma.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Religion",
            "Soma",
            "9th Mandala"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q046",
          "question": "What was the nature of Rigvedic religion where they believed in many gods but worshipped each in turn as the highest?",
          "options": {
            "A": "Monotheism",
            "B": "Henotheism",
            "C": "Polytheism",
            "D": "Pantheism"
          },
          "correct_answer": "B",
          "explanation": "The nature of Rigvedic religion was Henotheism, meaning belief in many gods but each god standing out in turns as the highest.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Religion",
            "Henotheism"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_4_Q047",
          "question": "Which two animals were probably NOT familiar to the early Vedic people?",
          "options": {
            "A": "Lion and Elephant",
            "B": "Cat and Camel",
            "C": "Horse and Cow",
            "D": "Dog and Boar"
          },
          "correct_answer": "B",
          "explanation": "The Vedic people were probably not familiar with the cat and camel. Tiger was also not known.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Economy",
            "Animals"
          ]
        }
      ]
    },
    {
      "subtopic": "4.5 Later Vedic Period (1000 BC-600 BC)",
      "subtopic_id": "STOP_5",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q048",
          "question": "During the later Vedic Period, the centre of culture shifted from the Saraswati region to which area?",
          "options": {
            "A": "Indus Valley",
            "B": "Ganges (Madhya desa)",
            "C": "Godavari basin",
            "D": "Narmada Valley"
          },
          "correct_answer": "B",
          "explanation": "The centre of culture shifted from Saraswati to Ganges (Madhya desa) during the Later Vedic Period.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Geography",
            "Ganges",
            "Later Vedic"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q049",
          "question": "The emergence of large Janapadas occurred in the Later Vedic Period. The 'Kuru' Janapada was a combination of which two tribes?",
          "options": {
            "A": "Turvashas and Krivis",
            "B": "Purus and Bharatas",
            "C": "Yadus and Anus",
            "D": "Alinas and Pakhtas"
          },
          "correct_answer": "B",
          "explanation": "Kuru was a combination of the Purus and Bharatas.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Janapadas",
            "Kuru"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q050",
          "question": "Which official in the Later Vedic polity was responsible for the collection of taxes?",
          "options": {
            "A": "Suta",
            "B": "Akshavapa",
            "C": "Bhagadudha",
            "D": "Sangrahitri"
          },
          "correct_answer": "C",
          "explanation": "The Bhagadudha was the Collector of taxes in the Later Vedic Period.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": [
            "Polity",
            "Bhagadudha",
            "Taxes"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q051",
          "question": "According to the Satapatha Brahamana, how many 'Ratnins' (important royal officials) were there?",
          "options": {
            "A": "7",
            "B": "9",
            "C": "12",
            "D": "15"
          },
          "correct_answer": "C",
          "explanation": "There were 12 Ratnins mentioned in the Satapatha Brahamana.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Polity",
            "Ratnins"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q052",
          "question": "The earliest reference to the 4 Ashramas (the stages of life) is found in which Upanishad?",
          "options": {
            "A": "Vrihadaranyaka Upanishad",
            "B": "Jabala Upanishad",
            "C": "Chhandogya Upanishad",
            "D": "Mundaka Upanishad"
          },
          "correct_answer": "B",
          "explanation": "The earliest reference to the 4 Ashramas (Brahmacharya, Grihastha, Vanprastha, Sanyasa) is found in the Jabala Upanishad.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2017"
          },
          "tags": [
            "Society",
            "Ashramas",
            "Jabala Upanishad"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q053",
          "question": "What type of marriage was called 'Gandharva Vivaha'?",
          "options": {
            "A": "Giving the girl with dowry",
            "B": "Marriage with a purchased girl",
            "C": "By free mutual choice or Love marriage",
            "D": "Marriage after seducing a girl"
          },
          "correct_answer": "C",
          "explanation": "Gandharva Vivaha refers to a marriage by free mutual choice or love marriage.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Society",
            "Vivaha",
            "Marriage types"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q054",
          "question": "Which god rose to prominence as the supreme creator of the universe in the Later Vedic Period, replacing Indra and Agni?",
          "options": {
            "A": "Vishnu",
            "B": "Prajapati",
            "C": "Rudra",
            "D": "Pushana"
          },
          "correct_answer": "B",
          "explanation": "Prajapati (creator of the Universe, later known as Brahma) became the supreme God.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2016"
          },
          "tags": [
            "Religion",
            "Prajapati"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q055",
          "question": "The Brihadaranyaka Upanishad was the first work to give the doctrine of:",
          "options": {
            "A": "Monotheism",
            "B": "Varna system",
            "C": "Transmigration (Punarjanma) and deeds (Karma)",
            "D": "Ashrama system"
          },
          "correct_answer": "C",
          "explanation": "Brihadaranyaka Upanishad was the first work to give the doctrine of transmigration (Punarjanma/Samsara-chakra) and deeds (Karma).",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Religion",
            "Transmigration",
            "Upanishads"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q056",
          "question": "Which grand sacrifice represented the Royal consecration and comprised a series of sacrifices lasting over a year?",
          "options": {
            "A": "Vajapeya Yajna",
            "B": "Asvamedha Yajna",
            "C": "Agnishtoma Yajna",
            "D": "Rajasuya Yajna"
          },
          "correct_answer": "D",
          "explanation": "Rajasuya Yajna was the Royal consecration sacrifice.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Religion",
            "Sacrifices",
            "Rajasuya"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q057",
          "question": "The 'Asvamedha Yajna' (Horse sacrifice) lasted for how many days?",
          "options": {
            "A": "One day",
            "B": "Three days",
            "C": "Seventeen days",
            "D": "One year"
          },
          "correct_answer": "B",
          "explanation": "The Asvamedha Yajna lasted for three days.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Religion",
            "Asvamedha Yajna"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q058",
          "question": "In the Later Vedic economy, what began to replace the rearing of cattle as the primary source of wealth?",
          "options": {
            "A": "Trade and Commerce",
            "B": "Pottery making",
            "C": "Agriculture and land ownership",
            "D": "Metal forging"
          },
          "correct_answer": "C",
          "explanation": "Land had now become more valuable than cows, and agriculture began to replace the rearing of cattle.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Economy",
            "Agriculture"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q059",
          "question": "Considerable advance was made in the knowledge of metals. In the Later Vedic literature, 'Ayas' referred to:",
          "options": {
            "A": "Gold",
            "B": "Silver or Tin",
            "C": "Copper or Iron",
            "D": "Bronze"
          },
          "correct_answer": "C",
          "explanation": "'Ayas' was used to refer to either copper or iron.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Economy",
            "Metals",
            "Ayas"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_4_STOP_5_Q060",
          "question": "Which pottery culture is associated with the period between 1100 BC to 600 BC (Later Vedic Period)?",
          "options": {
            "A": "OCP (Ochre Coloured Pottery)",
            "B": "PGW (Painted Grey Ware)",
            "C": "NBPW (Northern Black Polished Ware)",
            "D": "BRW (Black and Red Ware)"
          },
          "correct_answer": "B",
          "explanation": "PGW (Painted Grey Ware) Culture is associated with 1100 BC - 600 BC.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2017"
          },
          "tags": [
            "PGW",
            "Pottery",
            "Later Vedic"
          ]
        }
      ]
    }
  ]
},
{
  "subject": "History",
  "subject_id": "SUB_1",
  "chapter": "Indian History",
  "chapter_id": "CHA_1",
  "section": "Ancient India",
  "section_id": "SEC_2",
  "topic": "Mahajanapada Period & Religious Movements",
  "topic_id": "TOP_5",
  "subtopics": [
    {
      "subtopic": "16 Mahajanapadas & The Rise of Magadha",
      "subtopic_id": "STOP_1",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_1_Q001",
          "question": "Which of the following ancient Buddhist texts presents a list of 16 Mahajanapadas?",
          "options": {
            "A": "Anguttara Nikaya",
            "B": "Kalpasutra",
            "C": "Bhagavati Sutta",
            "D": "Milindapanho"
          },
          "correct_answer": "A",
          "explanation": "The Buddhist texts Anguttara Nikaya and Mahavastu, along with the Jain text Bhagavati Sutta, provide a list of the 16 Mahajanapadas.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2017"
          },
          "tags": [
            "Mahajanapadas",
            "Buddhist Texts",
            "Ancient India"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_1_Q002",
          "question": "Which of the following Mahajanapadas was a non-monarchical or Republican State (Gana)?",
          "options": {
            "A": "Magadha",
            "B": "Kosala",
            "C": "Vajji",
            "D": "Avanti"
          },
          "correct_answer": "C",
          "explanation": "Vajji, Malla, Kuru, Panchal, and Shakya were Republican States, whereas Magadha, Kosala, and Avanti were Monarchical states.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2019"
          },
          "tags": [
            "Vajji",
            "Mahajanapadas",
            "Republics"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_1_Q003",
          "question": "What was the earliest capital of the Magadha Empire before it was shifted to Patliputra?",
          "options": {
            "A": "Vaishali",
            "B": "Rajgriha (Girivraj)",
            "C": "Kashi",
            "D": "Champa"
          },
          "correct_answer": "B",
          "explanation": "Rajgriha (or Girivraj) was the earliest capital of Magadha. It was strategically located near rich iron deposits.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2020"
          },
          "tags": [
            "Magadha",
            "Rajgriha",
            "Capitals"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_1_Q004",
          "question": "Which ancient Indian state was the first to use elephants on a large scale in its wars against its neighbours?",
          "options": {
            "A": "Kashi",
            "B": "Avanti",
            "C": "Kosala",
            "D": "Magadha"
          },
          "correct_answer": "D",
          "explanation": "While other states used horses and chariots, Magadha gained a special advantage in military organization by using elephants on a large scale.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2016"
          },
          "tags": [
            "Magadha",
            "Military",
            "Elephants"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_1_Q005",
          "question": "The political history of India from the 6th century BC is the history of struggle for supremacy between four states: Magadha, Kosala, Avanti, and ?",
          "options": {
            "A": "Vatsa",
            "B": "Kuru",
            "C": "Anga",
            "D": "Matsya"
          },
          "correct_answer": "A",
          "explanation": "The struggle for supremacy was primarily between Magadha, Kosala, Vatsa, and Avanti. Ultimately, Magadha emerged as the most powerful.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Mahajanapadas",
            "Vatsa",
            "Political History"
          ]
        }
      ]
    },
    {
      "subtopic": "Magadhan Dynasties (Haryanaka, Shisunaga, Nanda)",
      "subtopic_id": "STOP_2",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_2_Q006",
          "question": "Who was the founder of the Haryanaka dynasty and known as the first Indian king to have a regular and standing army?",
          "options": {
            "A": "Ajatashatru",
            "B": "Bimbisara",
            "C": "Udayin",
            "D": "Shisunaga"
          },
          "correct_answer": "B",
          "explanation": "Bimbisara (also known as Seniya) was the founder of the Haryanaka dynasty and the first to maintain a regular standing army.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2018"
          },
          "tags": [
            "Haryanaka Dynasty",
            "Bimbisara"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_2_Q007",
          "question": "Which Magadhan king sent his royal physician 'Jivaka' to Ujjain for the treatment of Avanti King Pradyota?",
          "options": {
            "A": "Ajatashatru",
            "B": "Mahapadma Nanda",
            "C": "Bimbisara",
            "D": "Kalashoka"
          },
          "correct_answer": "C",
          "explanation": "Bimbisara sent Jivaka to Ujjain when the Avanti King Pradyota was suffering from jaundice.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": [
            "Bimbisara",
            "Jivaka",
            "Avanti"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_2_Q008",
          "question": "The war engines 'Rathamusala' (a chariot with a mace) and 'Mahashilakantaka' (stone catapult) were used to defeat the Vajji confederation by which king?",
          "options": {
            "A": "Udayin",
            "B": "Dhanananda",
            "C": "Ajatashatru",
            "D": "Shisunaga"
          },
          "correct_answer": "C",
          "explanation": "Ajatashatru used these advanced war engines to defeat the Vajji confederation after a lengthy 16-year war.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2021"
          },
          "tags": [
            "Ajatashatru",
            "Military weapons",
            "Vajji"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_2_Q009",
          "question": "Who laid the foundations of the city of Patliputra at the confluence of the Son and Ganges rivers?",
          "options": {
            "A": "Udayin",
            "B": "Ajatashatru",
            "C": "Bimbisara",
            "D": "Kalashoka"
          },
          "correct_answer": "A",
          "explanation": "Udayin, the son of Ajatashatru, built Patliputra and shifted the capital from Rajagriha to this new city.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2019"
          },
          "tags": [
            "Udayin",
            "Patliputra",
            "Capital"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_2_Q010",
          "question": "The Second Buddhist Council was convened in Vaishali (383 BC) during the reign of which king?",
          "options": {
            "A": "Dhanananda",
            "B": "Kalashoka",
            "C": "Ajatashatru",
            "D": "Mahapadma Nanda"
          },
          "correct_answer": "B",
          "explanation": "Kalashoka (Kakavarna) of the Shisunaga dynasty convened the Second Buddhist Council in Vaishali.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": [
            "Kalashoka",
            "Buddhist Council",
            "Shisunaga"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_2_Q011",
          "question": "Who is often described as 'the first empire builder of Indian history' and known as 'Uprooter of all Kshatriyas' (Sarvakshatrantak)?",
          "options": {
            "A": "Dhanananda",
            "B": "Mahapadma Nanda",
            "C": "Chandragupta Maurya",
            "D": "Bimbisara"
          },
          "correct_answer": "B",
          "explanation": "Mahapadma Nanda founded the Nanda dynasty and overthrew all contemporary ruling dynasties, earning him the title 'Ekrat' (sole monarch).",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": [
            "Nanda Dynasty",
            "Mahapadma Nanda"
          ]
        }
      ]
    },
    {
      "subtopic": "Foreign Invasions (Iranian/Persian & Macedonian/Alexander)",
      "subtopic_id": "STOP_3",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_3_Q012",
          "question": "Which Achaemenian ruler penetrated into North-West India in 518 BC and annexed Punjab and Sindh?",
          "options": {
            "A": "Alexander",
            "B": "Philip",
            "C": "Darius I",
            "D": "Xandrames"
          },
          "correct_answer": "C",
          "explanation": "Darius I (Darayabahu) of Iran invaded North-West India in 518 BC, making it the 20th province (Kshatrapi) of the Iranian empire.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2017"
          },
          "tags": [
            "Darius I",
            "Iranian Invasion",
            "Persian Empire"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_3_Q013",
          "question": "The Iranian invasion of India brought a new form of writing that was written from right to left. What was it called?",
          "options": {
            "A": "Brahmi script",
            "B": "Devanagari script",
            "C": "Kharosthi script",
            "D": "Prakrit script"
          },
          "correct_answer": "C",
          "explanation": "Iranian scribes brought the Kharosthi script to India, which was written from right to left, similar to Arabic.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2020"
          },
          "tags": [
            "Kharosthi script",
            "Iranian influence"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_3_Q014",
          "question": "In 326 BC, the famous Battle of Vitasta (Hydaspes) took place between Alexander the Great and which Indian king?",
          "options": {
            "A": "Ambhi",
            "B": "Dhanananda",
            "C": "Porus",
            "D": "Mahapadma Nanda"
          },
          "correct_answer": "C",
          "explanation": "Alexander defeated King Porus (Puru) at the Battle of Hydaspes (Jhelum/Vitasta) in 326 BC, though he was highly impressed by his bravery.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": [
            "Alexander",
            "Porus",
            "Battle of Hydaspes"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_3_Q015",
          "question": "Why did Alexander's army refuse to cross the Beas River and march further into India?",
          "options": {
            "A": "They were defeated by Porus",
            "B": "They were afraid of the Magadhan empire's huge army",
            "C": "Alexander died of an illness",
            "D": "Ambhi betrayed them"
          },
          "correct_answer": "B",
          "explanation": "The Greek forces were exhausted and deeply feared the massive army (infantry and elephants) commanded by the Nanda Dynasty of Magadha.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2016"
          },
          "tags": [
            "Alexander",
            "Nanda Dynasty",
            "Magadha"
          ]
        }
      ]
    },
    {
      "subtopic": "Causes of Religious Movements (600 BC - 400 BC)",
      "subtopic_id": "STOP_4",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_4_Q016",
          "question": "The religious movements of the 6th century BC (Jainism and Buddhism) were primarily a reaction by which class against Brahmanical domination?",
          "options": {
            "A": "Shudras",
            "B": "Kshatriyas",
            "C": "Vaishyas",
            "D": "Untouchables"
          },
          "correct_answer": "B",
          "explanation": "Supremacy of the Brahmans created unrest, and the Kshatriyas reacted strongly against the Brahmanical domination. (Both Mahavira and Buddha were Kshatriya princes).",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Religious Movements",
            "Kshatriyas",
            "Brahmans"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_4_Q017",
          "question": "Which Varna actively supported Jainism and Buddhism because they desired to improve their social position aligning with their growing economic wealth from trade?",
          "options": {
            "A": "Brahmins",
            "B": "Kshatriyas",
            "C": "Vaishyas",
            "D": "Shudras"
          },
          "correct_answer": "C",
          "explanation": "Vaishyas had improved their economic status due to trade growth but lacked upper social rank, making them favor the equality preached by the new religions.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Vaishyas",
            "Trade",
            "Religious Movements"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_4_Q018",
          "question": "The introduction of a new agricultural economy in Eastern India fueled the rise of new religions because it necessitated the protection of:",
          "options": {
            "A": "Forests",
            "B": "Cattle (from sacrifices)",
            "C": "River systems",
            "D": "Iron mines"
          },
          "correct_answer": "B",
          "explanation": "Iron ploughs required cattle (oxen) for farming, which directly conflicted with the mass animal sacrifices practiced in Vedic rituals.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": [
            "Agriculture",
            "Economy",
            "Animal Sacrifice"
          ]
        }
      ]
    },
    {
      "subtopic": "Jainism: Tirthankaras & Mahavira's Life",
      "subtopic_id": "STOP_5",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_5_Q019",
          "question": "According to Jain tradition, who was the first Tirthankara?",
          "options": {
            "A": "Parshwanath",
            "B": "Mahavira",
            "C": "Rishabhadeva",
            "D": "Ajitnath"
          },
          "correct_answer": "C",
          "explanation": "Rishabhadeva (also known as Adinatha) was the first Tirthankara, symbolized by a Bull.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2018"
          },
          "tags": [
            "Jainism",
            "Tirthankara",
            "Rishabhadeva"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_5_Q020",
          "question": "What is the symbol associated with the 23rd Tirthankara, Parshwanath?",
          "options": {
            "A": "Lion",
            "B": "Serpent",
            "C": "Conch Shell",
            "D": "Blue Lotus"
          },
          "correct_answer": "B",
          "explanation": "Parshwanath, the 23rd Tirthankara, is associated with the Serpent symbol. Mahavira's symbol is the Lion.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2019"
          },
          "tags": [
            "Parshwanath",
            "Jain Symbols"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_5_Q021",
          "question": "At what age did Mahavira attain 'Kaivalya' (supreme knowledge) under a sal tree?",
          "options": {
            "A": "30",
            "B": "35",
            "C": "42",
            "D": "72"
          },
          "correct_answer": "C",
          "explanation": "He left home at 30, and after 12 years of asceticism, attained Kaivalya at the age of 42 at Jambhikagrama.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Mahavira",
            "Kaivalya",
            "Jainism"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_5_Q022",
          "question": "At what place did Mahavira pass away (attain Nirvana) in 468 BC?",
          "options": {
            "A": "Lumbini",
            "B": "Kushinagar",
            "C": "Pavapuri",
            "D": "Sarnath"
          },
          "correct_answer": "C",
          "explanation": "Mahavira died at the age of 72 at Pavapuri, near Biharsharif in Bihar.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2020"
          },
          "tags": [
            "Mahavira",
            "Death",
            "Pavapuri"
          ]
        }
      ]
    },
    {
      "subtopic": "Jainism: Doctrines, Councils & Literature",
      "subtopic_id": "STOP_6",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_6_Q023",
          "question": "Which of the following is NOT one of the 'Triratna' (Three Gems) of Jainism?",
          "options": {
            "A": "Right Faith (Samyak Shradha)",
            "B": "Right Knowledge (Samyak Jnan)",
            "C": "Right Speech (Samyak Vani)",
            "D": "Right Action/Conduct (Samyak Karma)"
          },
          "correct_answer": "C",
          "explanation": "The Three Gems of Jainism are Right Faith, Right Knowledge, and Right Action. Right Speech is a part of Buddhism's Eightfold path.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2016"
          },
          "tags": [
            "Triratna",
            "Jainism Doctrines"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_6_Q024",
          "question": "Which vow was added by Mahavira to the four vows (Pancha Mahavratas) originally laid down by Parshwanath?",
          "options": {
            "A": "Ahimsa (non-injury)",
            "B": "Asteya (non-stealing)",
            "C": "Aparigraha (non-possession)",
            "D": "Brahmacharya (chastity)"
          },
          "correct_answer": "D",
          "explanation": "Parshwanath laid down four vows. Mahavira added the fifth vow: Brahmacharya (chastity).",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": [
            "Mahavratas",
            "Mahavira",
            "Jain Vows"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_6_Q025",
          "question": "'Syadvada' (The theory of Maybe) and 'Anekantvada' (multi-sidedness) are the core philosophical doctrines of which religion?",
          "options": {
            "A": "Buddhism",
            "B": "Jainism",
            "C": "Ajivika sect",
            "D": "Vedic Religion"
          },
          "correct_answer": "B",
          "explanation": "Syadvada dictates that all judgments are relative and conditional, a foundational theory of Jainism.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2018"
          },
          "tags": [
            "Syadvada",
            "Anekantvada",
            "Jain Philosophy"
          ]
        }
      ]
    },
    {
      "subtopic": "Jainism: Sects, Architecture, Patrons & Prominent Scholars",
      "subtopic_id": "STOP_7",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_7_Q026",
          "question": "During the severe famine in Magadha around 298 BC, who led a group of Jains to South India (Shravanbelgola) which later became the Digambara sect?",
          "options": {
            "A": "Sthulabhadra",
            "B": "Bhadrabahu",
            "C": "Hemchandra",
            "D": "Sudharma"
          },
          "correct_answer": "B",
          "explanation": "Bhadrabahu led the migration to South India. His followers maintained strict discipline including nudity and were known as Digambaras (Sky-clad).",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2019"
          },
          "tags": [
            "Jain Sects",
            "Bhadrabahu",
            "Digambara"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_7_Q027",
          "question": "The Shvetambara sect (white-clad) of Jainism was founded by the followers of which Jain scholar who stayed back in Magadha?",
          "options": {
            "A": "Sthulabhadra",
            "B": "Bhadrabahu",
            "C": "Harivijay Suri",
            "D": "Jamali"
          },
          "correct_answer": "A",
          "explanation": "Sthulabhadra and his followers remained in Magadha during the famine, began wearing white garments, and came to be known as Shvetambaras.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2020"
          },
          "tags": [
            "Jain Sects",
            "Sthulabhadra",
            "Shvetambara"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_7_Q028",
          "question": "The famous Dilwara Jain Temples, renowned for their stunning white marble architecture, are located in:",
          "options": {
            "A": "Khajuraho, Madhya Pradesh",
            "B": "Shravanbelgola, Karnataka",
            "C": "Mount Abu, Rajasthan",
            "D": "Khandagiri, Odisha"
          },
          "correct_answer": "C",
          "explanation": "Dilwara temples are situated at Mount Abu in Rajasthan and are a masterpiece of Jain architecture built by Chalukyan (Solanki) rulers.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2017"
          },
          "tags": [
            "Dilwara Temples",
            "Architecture",
            "Mount Abu"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_7_Q029",
          "question": "The massive monolithic statue of Gomateshwara (also known as Lord Bahubali) is located at?",
          "options": {
            "A": "Mount Abu",
            "B": "Pavapuri",
            "C": "Shravanbelgola",
            "D": "Vallabhi"
          },
          "correct_answer": "C",
          "explanation": "The massive stone statue of Lord Bahubali is situated in Shravanbelgola, Karnataka.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2016"
          },
          "tags": [
            "Gomateshwara",
            "Bahubali",
            "Shravanbelgola"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_7_Q030",
          "question": "Which prominent Jain scholar and polymath was given the title 'Kalikala Sarvajna' (Omniscient of the Kali Age)?",
          "options": {
            "A": "Bhadrabahu",
            "B": "Hemchandra",
            "C": "Harivijay Suri",
            "D": "Sudharma"
          },
          "correct_answer": "B",
          "explanation": "Hemchandra was a highly respected Jain scholar under the Chalukyan kings of Gujarat and was titled Kalikala Sarvajna.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Hemchandra",
            "Jain Scholars"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_7_Q031",
          "question": "Which Jain scholar was highly respected by the Mughal Emperor Akbar and bestowed with the title 'Jagat Guru'?",
          "options": {
            "A": "Harivijay Suri",
            "B": "Sthulabhadra",
            "C": "Hemchandra",
            "D": "Bhadrabahu"
          },
          "correct_answer": "A",
          "explanation": "Akbar was greatly influenced by the Jain monk Harivijay Suri and conferred the title of 'Jagat Guru' upon him.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2021"
          },
          "tags": [
            "Harivijay Suri",
            "Akbar",
            "Jain Scholars"
          ]
        }
      ]
    },
    {
      "subtopic": "Buddhism: Buddha's Life",
      "subtopic_id": "STOP_8",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_8_Q032",
          "question": "Where was Gautama Buddha born in 563 BC?",
          "options": {
            "A": "Sarnath",
            "B": "Bodh Gaya",
            "C": "Lumbinivana (Lumbini)",
            "D": "Kushinagar"
          },
          "correct_answer": "C",
          "explanation": "Gautama Buddha was born in Lumbinivana (Lumbini), which is located in present-day Nepal.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2019"
          },
          "tags": [
            "Buddha",
            "Birth",
            "Lumbini"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_8_Q033",
          "question": "Gautama Buddha belonged to which Kshatriya clan?",
          "options": {
            "A": "Jnathrika clan",
            "B": "Shakya clan",
            "C": "Kuru clan",
            "D": "Malla clan"
          },
          "correct_answer": "B",
          "explanation": "Buddha belonged to the Shakya clan of Kapilvastu, hence he is also known as 'Shakyamuni'. (Mahavira belonged to the Jnathrika clan).",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2018"
          },
          "tags": [
            "Shakya clan",
            "Buddha"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_8_Q034",
          "question": "Which of the following is NOT one of the 'Four Great Sights' that changed Siddhartha's life and prompted him to seek truth?",
          "options": {
            "A": "An old man",
            "B": "A diseased person",
            "C": "A dead body",
            "D": "A rich merchant"
          },
          "correct_answer": "D",
          "explanation": "The Four Great Sights were: an old man, a diseased person, a dead body, and an ascetic (sanyasi).",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": [
            "Buddha",
            "Four Sights"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_8_Q035",
          "question": "In Buddhism, what does the term 'Mahabhinishkramana' refer to?",
          "options": {
            "A": "Buddha's birth",
            "B": "The great renunciation or leaving of home by Buddha",
            "C": "Buddha's first sermon",
            "D": "Buddha's death"
          },
          "correct_answer": "B",
          "explanation": "Mahabhinishkramana (The Great Going Forth) refers to the event when Siddhartha left his home, wife, and child at age 29 to seek truth.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": [
            "Mahabhinishkramana",
            "Renunciation"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_8_Q036",
          "question": "After leaving his home, who was the first teacher of Gautama Buddha from whom he learned the technique of meditation?",
          "options": {
            "A": "Udraka Ramputra",
            "B": "Ananda",
            "C": "Alara Kalama",
            "D": "Makkhali Gosala"
          },
          "correct_answer": "C",
          "explanation": "Alara Kalama was Buddha's first teacher from whom he learned the technique of meditation. His next teacher was Udraka Ramputra.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2017"
          },
          "tags": [
            "Alara Kalama",
            "Buddha's Teacher"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_8_Q037",
          "question": "Which symbol represents the 'Dharmachakra Pravartana' (First Sermon) of Gautama Buddha?",
          "options": {
            "A": "Bodhi Tree",
            "B": "Lotus",
            "C": "Wheel",
            "D": "Stupa"
          },
          "correct_answer": "C",
          "explanation": "The Wheel represents the First Sermon. The Bodhi tree represents Enlightenment, the Lotus represents Birth, and the Stupa represents Death (Nirvana).",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2021"
          },
          "tags": [
            "Buddhist Symbols",
            "Dharmachakra Pravartana"
          ]
        }
      ]
    },
    {
      "subtopic": "Buddhism: Doctrines & Councils",
      "subtopic_id": "STOP_9",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_9_Q038",
          "question": "According to the Four Noble Truths (Chatwari Arya Satyani), what is the primary cause of all sorrow (Dukha)?",
          "options": {
            "A": "Poverty",
            "B": "Desire (Trishna)",
            "C": "Ignorance",
            "D": "Violence"
          },
          "correct_answer": "B",
          "explanation": "Buddha taught that Desire (Icha/Trishna) is the fundamental root cause of all worldly sorrow and suffering.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2018"
          },
          "tags": [
            "Four Noble Truths",
            "Desire",
            "Doctrines"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_9_Q039",
          "question": "Which term best describes Buddha's philosophy of avoiding both extreme luxury and extreme austerity?",
          "options": {
            "A": "Anekantvada",
            "B": "Syadvada",
            "C": "Madhya Marga (Middle Path)",
            "D": "Pratitya Samutpada"
          },
          "correct_answer": "C",
          "explanation": "Buddha advocated the 'Madhya Marga' or Middle Path, stating that one should neither lead a life of severe asceticism nor extreme indulgence.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2016"
          },
          "tags": [
            "Madhya Marga",
            "Middle Path"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_9_Q040",
          "question": "The First Buddhist Council (483 BC) was held at Rajgriha under the patronage of which king?",
          "options": {
            "A": "Ashoka",
            "B": "Kanishka",
            "C": "Kalashoka",
            "D": "Ajatashatru"
          },
          "correct_answer": "D",
          "explanation": "The First Council was held at Saptaparni cave in Rajgriha, patronized by the Haryanaka king Ajatashatru.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2019"
          },
          "tags": [
            "Buddhist Councils",
            "Ajatashatru"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_9_Q041",
          "question": "In which Buddhist Council did the monks originally split into two groups: Sthavira-vadins and Mahasanghikas?",
          "options": {
            "A": "First Council",
            "B": "Second Council",
            "C": "Third Council",
            "D": "Fourth Council"
          },
          "correct_answer": "B",
          "explanation": "During the Second Council (383 BC) at Vaishali under Kalashoka, the monks split into the orthodox Sthavira-vadins and the unorthodox Mahasanghikas.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Buddhist Councils",
            "Sthavira",
            "Mahasanghika"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_9_Q042",
          "question": "The Third Buddhist Council at Patliputra was convened under the patronage of which Mauryan Emperor?",
          "options": {
            "A": "Chandragupta Maurya",
            "B": "Bindusara",
            "C": "Ashoka",
            "D": "Brihadratha"
          },
          "correct_answer": "C",
          "explanation": "Ashoka patronized the Third Buddhist Council at Patliputra (250 BC), which was chaired by Mogaliputta Tissa.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2020"
          },
          "tags": [
            "Third Council",
            "Ashoka"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_9_Q043",
          "question": "During the Fourth Buddhist Council in Kashmir, Buddhism officially split into which two major sects?",
          "options": {
            "A": "Shvetambara and Digambara",
            "B": "Hinayana and Mahayana",
            "C": "Vajrayana and Tantrayana",
            "D": "Theravada and Zen"
          },
          "correct_answer": "B",
          "explanation": "Under the patronage of Kushana king Kanishka, the 4th Council resulted in the formal division of Buddhism into Hinayana (Lesser Vehicle) and Mahayana (Greater Vehicle).",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": [
            "Fourth Council",
            "Hinayana",
            "Mahayana"
          ]
        }
      ]
    },
    {
      "subtopic": "Buddhism: Literature, Sects & Bodhisattvas",
      "subtopic_id": "STOP_10",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_10_Q044",
          "question": "The earliest Buddhist literature, such as the Tripitakas, was written in which language?",
          "options": {
            "A": "Sanskrit",
            "B": "Prakrit",
            "C": "Pali",
            "D": "Brahmi"
          },
          "correct_answer": "C",
          "explanation": "The early Buddhist texts (Tripitakas) were composed in Pali, which was the language of the common masses. Later Mahayana texts were in Sanskrit.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2017"
          },
          "tags": [
            "Buddhist Literature",
            "Pali",
            "Tripitaka"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_10_Q045",
          "question": "Which basket (Pitaka) of the Tripitaka contains the religious discourses and sayings of the Buddha?",
          "options": {
            "A": "Vinaya Pitaka",
            "B": "Sutta Pitaka",
            "C": "Abhidhamma Pitaka",
            "D": "Khandhaka Pitaka"
          },
          "correct_answer": "B",
          "explanation": "The Sutta Pitaka contains the main teachings, sayings, and discourses of the Buddha. (Vinaya contains monastic rules, and Abhidhamma contains deep philosophy).",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2020"
          },
          "tags": [
            "Sutta Pitaka",
            "Tripitaka"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_10_Q046",
          "question": "The famous text 'Milindapanho' is a philosophical dialogue between the Indo-Greek King Menander and which Buddhist monk?",
          "options": {
            "A": "Ashvaghosha",
            "B": "Vasumitra",
            "C": "Nagasena",
            "D": "Nagarjuna"
          },
          "correct_answer": "C",
          "explanation": "Milindapanho (Questions of Milinda) documents a conversation where the monk Nagasena successfully converts King Menander (Milinda) to Buddhism.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": [
            "Milindapanho",
            "Nagasena",
            "Menander"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_10_Q047",
          "question": "Which sect of Buddhism started the practice of idol worship of the Buddha and used Sanskrit as their main language?",
          "options": {
            "A": "Hinayana",
            "B": "Mahayana",
            "C": "Vajrayana",
            "D": "Theravada"
          },
          "correct_answer": "B",
          "explanation": "The Mahayana sect elevated Buddha to the status of God, initiated idol worship, sought salvation for all beings through Bodhisattvas, and used Sanskrit.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2018"
          },
          "tags": [
            "Mahayana",
            "Sects",
            "Idol worship"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_10_Q048",
          "question": "In Mahayana Buddhism, which Bodhisattva is believed to be 'The Future Buddha' who is yet to come?",
          "options": {
            "A": "Vajrapani",
            "B": "Avalokiteshvara",
            "C": "Manjushri",
            "D": "Maitreya"
          },
          "correct_answer": "D",
          "explanation": "Maitreya is considered the future Buddha who will appear on Earth to achieve complete enlightenment and teach the pure dharma.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2019"
          },
          "tags": [
            "Bodhisattva",
            "Maitreya",
            "Future Buddha"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_10_Q049",
          "question": "The Vajrayana sect of Buddhism, which became highly popular in Bengal and Bihar, primarily believed in achieving salvation through:",
          "options": {
            "A": "Extreme fasting",
            "B": "Complete non-violence",
            "C": "Magical powers and Tantric practices",
            "D": "Building massive stupas"
          },
          "correct_answer": "C",
          "explanation": "Vajrayana (The Vehicle of the Thunderbolt) believed that salvation could be best attained by acquiring magical power (Vajra) and performing tantric rituals.",
          "difficulty": "hard",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Vajrayana",
            "Magical powers",
            "Tantric"
          ]
        }
      ]
    },
    {
      "subtopic": "Buddhism: Sacred Shrines, Patrons & Prominent Scholars",
      "subtopic_id": "STOP_11",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_11_Q050",
          "question": "Nalanda University, the most renowned educational center of ancient times, was founded by which Gupta ruler?",
          "options": {
            "A": "Samudragupta",
            "B": "Chandragupta II",
            "C": "Kumargupta I",
            "D": "Skandagupta"
          },
          "correct_answer": "C",
          "explanation": "Kumargupta I of the Gupta dynasty founded the great Nalanda University in Bihar.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2016"
          },
          "tags": [
            "Nalanda",
            "Kumargupta I",
            "Universities"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_11_Q051",
          "question": "Which Pala king was responsible for founding the Vikramshila University in Bihar?",
          "options": {
            "A": "Gopala",
            "B": "Dharmapala",
            "C": "Devapala",
            "D": "Mahipala"
          },
          "correct_answer": "B",
          "explanation": "Dharmapala, a great patron of Buddhism, founded the Vikramshila University. (Gopala founded the Odantpuri University).",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": [
            "Vikramshila",
            "Dharmapala",
            "Pala Dynasty"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_11_Q052",
          "question": "Which of the following is NOT considered one of the 'Ashtasthanas' (8 holy places) in Buddhism?",
          "options": {
            "A": "Lumbini",
            "B": "Sarnath",
            "C": "Ujjain",
            "D": "Kushinagar"
          },
          "correct_answer": "C",
          "explanation": "Ujjain is not one of the holy places. The main 4 are Lumbini, Bodh Gaya, Sarnath, and Kushinagar, along with Sravasti, Rajgriha, Vaishali, and Sankasya.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "Ashtasthanas",
            "Holy Places",
            "Buddhism"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_11_Q053",
          "question": "Who was sent by Emperor Ashoka to Sri Lanka to spread the teachings of Buddhism?",
          "options": {
            "A": "Nagasena and Vasumitra",
            "B": "Mahendra and Sanghamitra",
            "C": "Padmasambhav and Ashvaghosha",
            "D": "Mogaliputta Tissa and Upali"
          },
          "correct_answer": "B",
          "explanation": "Ashoka sent his son Mahendra and daughter Sanghamitra to Sri Lanka (Anuradhapura) with a sapling of the original Bodhi tree to spread Buddhism.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": [
            "Ashoka",
            "Sri Lanka",
            "Missions"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_11_Q054",
          "question": "Who is the author of the famous Sanskrit text 'Buddhacharita' (the biography of Buddha)?",
          "options": {
            "A": "Ashvaghosha",
            "B": "Vasumitra",
            "C": "Nagarjuna",
            "D": "Buddhaghosa"
          },
          "correct_answer": "A",
          "explanation": "Ashvaghosha was a renowned Buddhist poet and scholar who wrote 'Buddhacharita' and 'Saundaranand' in Sanskrit.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": [
            "Buddhacharita",
            "Ashvaghosha",
            "Literature"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_5_STOP_11_Q055",
          "question": "Which famous Buddhist scholar formulated the 'Shunyavad' (theory of emptiness) and was a contemporary of the Satavahana rulers?",
          "options": {
            "A": "Vasubandhu",
            "B": "Nagarjuna",
            "C": "Dingnag",
            "D": "Padmasambhav"
          },
          "correct_answer": "B",
          "explanation": "Nagarjuna was a great philosopher who founded the Madhyamika (Shunyavad) school of Mahayana Buddhism.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2021"
          },
          "tags": [
            "Nagarjuna",
            "Shunyavad",
            "Philosophers"
          ]
        }
      ]
    }
  ]
},
{
  "subject": "History",
  "subject_id": "SUB_1",
  "chapter": "Indian History",
  "chapter_id": "CHA_1",
  "section": "Ancient India",
  "section_id": "SEC_2",
  "topic": "Post-Maurya & Sangam Period",
  "topic_id": "TOP_7",
  "subtopics": [
    {
      "subtopic": "Native Successors of Mauryas",
      "subtopic_id": "STOP_1",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_1_Q001",
          "question": "Who established the Sunga Dynasty by killing the last Mauryan ruler Brihadratha?",
          "options": {
            "A": "Agnimitra",
            "B": "Pushyamitra Sunga",
            "C": "Vasudeva",
            "D": "Simuka"
          },
          "correct_answer": "B",
          "explanation": "Pushyamitra Sunga, a Brahmin Commander-in-Chief of Brihadratha, established the Sunga Dynasty in 185 BC.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2019"
          },
          "tags": [
            "sunga_dynasty",
            "mauryan_empire",
            "ancient_history"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_1_Q002",
          "question": "Patanjali, the author of 'Mahabhasya', was the priest of which ruler?",
          "options": {
            "A": "Ashoka",
            "B": "Kanishka",
            "C": "Pushyamitra Sunga",
            "D": "Gautamiputra Satakarni"
          },
          "correct_answer": "C",
          "explanation": "Patanjali was the priest of the 2 Asvamedha Yajnas performed by Pushyamitra Sunga.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": [
            "patanjali",
            "sunga_dynasty",
            "literature"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_1_Q003",
          "question": "Which famous Buddhist monument was built during the reign of the orthodox Hindu Sunga dynasty?",
          "options": {
            "A": "Amaravati Stupa",
            "B": "Sanchi Stupa",
            "C": "Bharhut Stupa",
            "D": "Nagarjunakonda"
          },
          "correct_answer": "C",
          "explanation": "The great Buddhist stupa at Bharhut (in M.P.) was built during the reign of Sungas.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2016"
          },
          "tags": [
            "monuments",
            "sunga_dynasty",
            "buddhism"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_1_Q004",
          "question": "Who was the founder of the Satavahana dynasty?",
          "options": {
            "A": "Gautamiputra Satakarni",
            "B": "Simuka",
            "C": "Hala",
            "D": "Yajna Sri Satakarni"
          },
          "correct_answer": "B",
          "explanation": "Simuka (60 BC-37 BC) was the founder of the Satavahana dynasty.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2021"
          },
          "tags": [
            "satavahana",
            "dynasty_founders"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_1_Q005",
          "question": "Which dynasty is credited with starting the practice of donating land with fiscal and administrative immunities to Brahmanas and Buddhist monks?",
          "options": {
            "A": "Mauryas",
            "B": "Guptas",
            "C": "Satavahanas",
            "D": "Kushans"
          },
          "correct_answer": "C",
          "explanation": "The Satavahanas started the practice of land grants to Brahmanas and Buddhist monks, which eventually weakened their authority.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2018"
          },
          "tags": [
            "satavahana",
            "land_grants",
            "ancient_economy"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_1_Q006",
          "question": "What was the official language of the Satavahanas?",
          "options": {
            "A": "Sanskrit",
            "B": "Pali",
            "C": "Tamil",
            "D": "Prakrit"
          },
          "correct_answer": "D",
          "explanation": "The official language of the Satavahanas was Prakrit.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB Group D 2018"
          },
          "tags": [
            "satavahana",
            "ancient_languages"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_1_Q007",
          "question": "The Hathigumpha inscription near Bhubaneshwar provides information about which famous ruler?",
          "options": {
            "A": "Ashoka",
            "B": "Kharavela",
            "C": "Rudradaman",
            "D": "Pulakesin II"
          },
          "correct_answer": "B",
          "explanation": "The Hathigumpha inscription is the sole source of information about Kharavela, the 3rd ruler of the Cheti/Chedi dynasty of Kalinga.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2020"
          },
          "tags": [
            "inscriptions",
            "kharavela",
            "chedi_dynasty"
          ]
        }
      ]
    },
    {
      "subtopic": "Foreign Successors of Mauryas",
      "subtopic_id": "STOP_2",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q008",
          "question": "Who were the first rulers in India to issue gold coins?",
          "options": {
            "A": "Guptas",
            "B": "Mauryas",
            "C": "Indo-Greeks",
            "D": "Kushans"
          },
          "correct_answer": "C",
          "explanation": "The Indo-Greeks were the first rulers in India to issue coins attributed to kings and the first to issue gold coins.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2019"
          },
          "tags": [
            "indo_greeks",
            "coins",
            "ancient_economy"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q009",
          "question": "The famous Indo-Greek ruler Menander (Milinda) was converted to Buddhism by which monk?",
          "options": {
            "A": "Vasumitra",
            "B": "Asvaghosha",
            "C": "Nagasena",
            "D": "Upagupta"
          },
          "correct_answer": "C",
          "explanation": "Menander (165 BC-145 BC) was converted to Buddhism by Nagasena (also known as Nagarjuna).",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "indo_greeks",
            "buddhism",
            "menander"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q010",
          "question": "Which Saka ruler is famous for repairing the Sudarsan Lake of the Mauryan period?",
          "options": {
            "A": "Nahapana",
            "B": "Chashtana",
            "C": "Rudradaman",
            "D": "Gondaphernes"
          },
          "correct_answer": "C",
          "explanation": "Rudradaman (130 AD-150 AD) repaired the famous Sudarsan Lake to irrigate the dry region of Saurashtra.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2021"
          },
          "tags": [
            "sakas",
            "rudradaman",
            "ancient_infrastructure"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q011",
          "question": "The Vikrama Samvat (calendar era) is reckoned from which year?",
          "options": {
            "A": "78 AD",
            "B": "58 BC",
            "C": "319 AD",
            "D": "606 AD"
          },
          "correct_answer": "B",
          "explanation": "In 58 BC, King Vikramaditya of Ujjain fought against the Sakas, and the era called Vikrama Samvat is reckoned from this year.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2020"
          },
          "tags": [
            "calendars",
            "vikrama_samvat",
            "sakas"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q012",
          "question": "St. Thomas is said to have come to India for the propagation of Christianity during the reign of which king?",
          "options": {
            "A": "Gondaphernes",
            "B": "Kanishka",
            "C": "Rudradaman",
            "D": "Kadphises I"
          },
          "correct_answer": "A",
          "explanation": "St. Thomas came to India during the reign of the most famous Parthian king, Gondaphernes.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2018"
          },
          "tags": [
            "parthians",
            "christianity",
            "gondaphernes"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q013",
          "question": "The Kushans were originally one of the five clans of which tribe from Central Asia?",
          "options": {
            "A": "Hunas",
            "B": "Yeuchi",
            "C": "Scythians",
            "D": "Pahlavas"
          },
          "correct_answer": "B",
          "explanation": "The Kushans were one of the five Yeuchi clans of Central Asia.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "kushans",
            "central_asia",
            "yeuchi"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q014",
          "question": "Who started the Saka Era in 78 AD, which is currently used by the Government of India?",
          "options": {
            "A": "Rudradaman",
            "B": "Kanishka",
            "C": "Vikramaditya",
            "D": "Kadphises II"
          },
          "correct_answer": "B",
          "explanation": "Kanishka started an era in 78 AD known as the Saka era, which is used by the Government of India.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2022"
          },
          "tags": [
            "saka_era",
            "kanishka",
            "kushans"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q015",
          "question": "During whose reign was the 4th Buddhist Council held in Kundalavana, Kashmir?",
          "options": {
            "A": "Ashoka",
            "B": "Kanishka",
            "C": "Harsha",
            "D": "Samudragupta"
          },
          "correct_answer": "B",
          "explanation": "In Kanishka's reign, the 4th Buddhist council was held where Mahayana Buddhism doctrines were finalized.",
          "difficulty": "easy",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2016"
          },
          "tags": [
            "buddhism",
            "buddhist_council",
            "kanishka"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q016",
          "question": "Which dynasty controlled the famous Silk Route starting from China and passing through their empire?",
          "options": {
            "A": "Mauryas",
            "B": "Guptas",
            "C": "Kushans",
            "D": "Satavahanas"
          },
          "correct_answer": "C",
          "explanation": "The Kushans controlled the famous silk route, which was a source of great income for their empire.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2019"
          },
          "tags": [
            "silk_route",
            "kushans",
            "ancient_trade"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_2_Q017",
          "question": "Which Kushan ruler is also known as the 'Second Ashoka'?",
          "options": {
            "A": "Vema Kadphises",
            "B": "Kanishka",
            "C": "Vasudeva I",
            "D": "Kujul Kadphises"
          },
          "correct_answer": "B",
          "explanation": "Kanishka was a great patron of Buddhism and his vast empire earned him the title 'Second Ashoka'.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2020"
          },
          "tags": [
            "kanishka",
            "kushans",
            "titles"
          ]
        }
      ]
    },
    {
      "subtopic": "Facts About Post-Mauryas",
      "subtopic_id": "STOP_3",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_3_Q018",
          "question": "Which school of sculpture shows a very evident influence of Greek art?",
          "options": {
            "A": "Amaravati School",
            "B": "Mathura School",
            "C": "Gandhar School",
            "D": "Sarnath School"
          },
          "correct_answer": "C",
          "explanation": "The influence of Greek sculpture is very evident in the Gandhar school, which developed under Saka-Kushans.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2017"
          },
          "tags": [
            "art_and_culture",
            "gandhar_school",
            "sculpture"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_3_Q019",
          "question": "Who discovered the monsoon sea-route to India from West Asia in 46-47 AD?",
          "options": {
            "A": "Ptolemy",
            "B": "Hippalus",
            "C": "Strabo",
            "D": "Pliny"
          },
          "correct_answer": "B",
          "explanation": "Hippalus, a Greek sailor, discovered the monsoon sea-route to India, greatly boosting trade.",
          "difficulty": "hard",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "trade",
            "hippalus",
            "sea_route"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_3_Q020",
          "question": "Which of the following was an important port on the Eastern Coast of India during the Post-Mauryan period?",
          "options": {
            "A": "Barygaza",
            "B": "Barbaricum",
            "C": "Aricamedu",
            "D": "Muzris"
          },
          "correct_answer": "C",
          "explanation": "Aricamedu (Podeku) was an important port near Pondicherry on the Eastern Coast.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2021"
          },
          "tags": [
            "ancient_ports",
            "aricamedu",
            "trade"
          ]
        }
      ]
    },
    {
      "subtopic": "Three Early Kingdoms",
      "subtopic_id": "STOP_4",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_4_Q021",
          "question": "What was the emblem of the Chera kingdom?",
          "options": {
            "A": "Tiger",
            "B": "Bow",
            "C": "Fish",
            "D": "Boar"
          },
          "correct_answer": "B",
          "explanation": "The emblem of the Chera kingdom was the Bow, and their capital was Vanjji.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2019"
          },
          "tags": [
            "chera",
            "sangam_age",
            "emblems"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_4_Q022",
          "question": "Who was the founder of the famous Pattini cult (worship of goddess of chastity - Kannagi)?",
          "options": {
            "A": "Karikala",
            "B": "Senguttuvan",
            "C": "Nendujeliyan",
            "D": "Elara"
          },
          "correct_answer": "B",
          "explanation": "Senguttuvan, also known as Red Chera, was the greatest Chera king and founder of the Pattini cult.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": [
            "chera",
            "senguttuvan",
            "pattini_cult"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_4_Q023",
          "question": "The Chola king Karikala is famous for constructing a 160 km embankment along which river?",
          "options": {
            "A": "Krishna",
            "B": "Godavari",
            "C": "Kaveri",
            "D": "Tungabhadra"
          },
          "correct_answer": "C",
          "explanation": "Karikala constructed a 160 km embankment along the Kaveri river with the help of 12,000 Sri Lankan slaves.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2021"
          },
          "tags": [
            "chola",
            "karikala",
            "kaveri"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_4_Q024",
          "question": "What was the coastal capital and main port of the Chola kingdom?",
          "options": {
            "A": "Uraiyaur",
            "B": "Puhar",
            "C": "Muzris",
            "D": "Korkai"
          },
          "correct_answer": "B",
          "explanation": "Puhar (Kaveripattanam) was the main port and served as the alternative coastal capital of the Cholas.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "chola",
            "ports",
            "puhar"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_4_Q025",
          "question": "The Pandya kingdom, with its capital at Madurai, was famous globally for the trade of what?",
          "options": {
            "A": "Cotton",
            "B": "Spices",
            "C": "Pearls",
            "D": "Silk"
          },
          "correct_answer": "C",
          "explanation": "Mentioned first by Megasthenes, the Pandya kingdom was famous for pearls.",
          "difficulty": "easy",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2018"
          },
          "tags": [
            "pandya",
            "pearls",
            "ancient_trade"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_4_Q026",
          "question": "Which of the three early kingdoms had the 'Tiger' as its emblem?",
          "options": {
            "A": "Chera",
            "B": "Chola",
            "C": "Pandya",
            "D": "Pallava"
          },
          "correct_answer": "B",
          "explanation": "The Chola kingdom's emblem was the Tiger.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2021"
          },
          "tags": [
            "chola",
            "emblems",
            "sangam_age"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_4_Q027",
          "question": "Which city was laid under a curse by Kannagi (Kovalan's wife) after the king unjustly accused Kovalan of theft?",
          "options": {
            "A": "Uraiyaur",
            "B": "Vanjji",
            "C": "Puhar",
            "D": "Madurai"
          },
          "correct_answer": "D",
          "explanation": "The Pandya king Nendujelian accused Kovalan of theft. As a result, Madurai was cursed by Kannagi.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "madurai",
            "kannagi",
            "pandya"
          ]
        }
      ]
    },
    {
      "subtopic": "Sangam Administration",
      "subtopic_id": "STOP_5",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_5_Q028",
          "question": "In the Sangam administration, what was the 'Avai'?",
          "options": {
            "A": "Custom duties",
            "B": "A big village",
            "C": "Court of the crowned monarch",
            "D": "The council of ministers"
          },
          "correct_answer": "C",
          "explanation": "'Avai' was the court of the crowned monarch where the King sat at the center of administration.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "sangam_admin",
            "avai"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_5_Q029",
          "question": "The term 'Karai' in Sangam administration refers to what?",
          "options": {
            "A": "Land Tax",
            "B": "Custom duties",
            "C": "Forced gift",
            "D": "Booty collected in war"
          },
          "correct_answer": "A",
          "explanation": "In the revenue administration of the Sangam Age, 'Karai' referred to the Land Tax.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2019"
          },
          "tags": [
            "sangam_admin",
            "taxation",
            "karai"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_5_Q030",
          "question": "What were the custom duties called during the Sangam period?",
          "options": {
            "A": "Irai",
            "B": "Ulgu",
            "C": "Iravu",
            "D": "Variyam"
          },
          "correct_answer": "B",
          "explanation": "'Ulgu' meant custom duties in the Sangam revenue administration.",
          "difficulty": "hard",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "sangam_admin",
            "taxation",
            "ulgu"
          ]
        }
      ]
    },
    {
      "subtopic": "Sangam Literature",
      "subtopic_id": "STOP_6",
      "questions": [
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q031",
          "question": "What does the term 'Sangam' primarily refer to in ancient Indian history?",
          "options": {
            "A": "A military alliance",
            "B": "A trade guild",
            "C": "An assembly of Tamil poets",
            "D": "A religious festival"
          },
          "correct_answer": "C",
          "explanation": "Sangam was an assembly of Tamil poets held under royal patronage of Pandyan kings in Madurai.",
          "difficulty": "easy",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": true,
            "details": "SSC MTS 2020"
          },
          "tags": [
            "sangam_literature",
            "tamil_poets"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q032",
          "question": "Which text is the only surviving work of the Second Sangam and deals with Tamil grammar?",
          "options": {
            "A": "Ettutogai",
            "B": "Tolkappiyam",
            "C": "Kural",
            "D": "Pattupattu"
          },
          "correct_answer": "B",
          "explanation": "Tolkappiyam, written by Tolakapiyyar, is an early work on Tamil grammar and the only surviving text from the second Sangam.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2021"
          },
          "tags": [
            "tolkappiyam",
            "tamil_grammar",
            "sangam_literature"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q033",
          "question": "Who is the author of the text 'Kural' or 'Tirukkural'?",
          "options": {
            "A": "Tolakapiyyar",
            "B": "Ilango Adigal",
            "C": "Sittalar Satanar",
            "D": "Tiruvalluvar"
          },
          "correct_answer": "D",
          "explanation": "'Kural' was written by Tiruvalluvar. It is a treatise on polity, ethics, and social norms.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2019"
          },
          "tags": [
            "tiruvalluvar",
            "kural",
            "sangam_literature"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q034",
          "question": "Which text is often referred to as 'The Bible of Tamil Land'?",
          "options": {
            "A": "Silappadikaram",
            "B": "Tolkappiyam",
            "C": "Kural",
            "D": "Manimekalai"
          },
          "correct_answer": "C",
          "explanation": "Kural or Tirukkural, written by Tiruvalluvar, is called 'The Bible of Tamil Land'.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": true,
            "details": "RRB NTPC 2016"
          },
          "tags": [
            "kural",
            "sangam_literature"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q035",
          "question": "The epic 'Silappadikaram', which deals with the story of Kovalan and Madhavi, was written by whom?",
          "options": {
            "A": "Ilango Adigal",
            "B": "Sittalar Satanar",
            "C": "Tiruttakrdevas",
            "D": "Perudevanar"
          },
          "correct_answer": "A",
          "explanation": "'Silappadikaram' (The story of the Anklet) was written by Ilango Adigal.",
          "difficulty": "medium",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2020"
          },
          "tags": [
            "silappadikaram",
            "ilango_adigal",
            "epics"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q036",
          "question": "Which Tamil epic is called the 'Iliad of Tamil poetry'?",
          "options": {
            "A": "Manimekalai",
            "B": "Sivaga Sindamani",
            "C": "Bharatam",
            "D": "Silappadikaram"
          },
          "correct_answer": "D",
          "explanation": "Silappadikaram is highly revered and is called the 'Iliad of Tamil poetry'.",
          "difficulty": "medium",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2021"
          },
          "tags": [
            "silappadikaram",
            "tamil_poetry"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q037",
          "question": "'Manimekalai', written by Sittalar Satanar, is a sequel to which famous Tamil epic?",
          "options": {
            "A": "Tolkappiyam",
            "B": "Silappadikaram",
            "C": "Sivaga Sindamani",
            "D": "Kural"
          },
          "correct_answer": "B",
          "explanation": "Manimekalai is a sequel to Silappadikaram and deals with the adventures of the daughter born to Kovalan and Madhavi.",
          "difficulty": "hard",
          "exam": "SSC_CGL",
          "prev_year": {
            "asked": true,
            "details": "SSC CGL 2018"
          },
          "tags": [
            "manimekalai",
            "silappadikaram",
            "epics"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q038",
          "question": "The epic 'Manimekalai' is strongly tinged with the beliefs of which religion?",
          "options": {
            "A": "Hinduism",
            "B": "Jainism",
            "C": "Buddhism",
            "D": "Ajivika"
          },
          "correct_answer": "C",
          "explanation": "Manimekalai is strongly tinged with Buddhism.",
          "difficulty": "medium",
          "exam": "RAILWAY",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "manimekalai",
            "buddhism",
            "sangam_literature"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q039",
          "question": "The text 'Sivaga Sindamani', written by Jain Tiruttakrdevas, is associated with which religion?",
          "options": {
            "A": "Buddhism",
            "B": "Hinduism",
            "C": "Jainism",
            "D": "Sikhism"
          },
          "correct_answer": "C",
          "explanation": "As the name of the author (Jain Tiruttakrdevas) suggests, Sivaga Sindamani is strongly tinged with Jainism.",
          "difficulty": "medium",
          "exam": "SSC_MTS",
          "prev_year": {
            "asked": false,
            "details": ""
          },
          "tags": [
            "sivaga_sindamani",
            "jainism",
            "sangam_literature"
          ]
        },
        {
          "question_id": "SUB_1_CHA_1_SEC_2_TOP_7_STOP_6_Q040",
          "question": "How many Sangam assemblies were held according to tradition?",
          "options": {
            "A": "Two",
            "B": "Three",
            "C": "Four",
            "D": "Five"
          },
          "correct_answer": "B",
          "explanation": "According to tradition, three Sangam assemblies were held under the royal patronage of Pandyan kings.",
          "difficulty": "easy",
          "exam": "SSC_CHSL",
          "prev_year": {
            "asked": true,
            "details": "SSC CHSL 2017"
          },
          "tags": [
            "sangam_assemblies",
            "ancient_history"
          ]
        }
      ]
    }
  ]
}
]
