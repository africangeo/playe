'use strict'

window.onload = () =>{

    const getSongs = (()=>{


            const songs = [
   
			  		    {
                    name : 'Ya Ramadhan',
                    artist : '',
                    image :'ya ramadhan.webp',
                    songUrl :'ramadan.mp3',
                    duration :'00:40' 
                },
				
				
				  {
                    name : 'Marhaba ramadhan',
                    artist : '',
                    image :'marhaba ya ramadhan.webp',
                    songUrl :'Ramadhanituifunge.mp3',
                    duration :'02:49' 
                },
				
				 { 
                    name : 'Eid Mubarak',
                    artist : '',
                   image :'eid mubarak.webp',
                    songUrl :'Ukhty-Rauhiya-EID-offcial-video.mp3',
                   duration :'02:39' 
                },
				
				 { 
                    name : 'Ramadhani kareem',
                    artist : '',
                   image :'ramadhan kareem.webp',
                    songUrl :'Ukhty Mwanacha - Ramadhani Qaswida 2023_IkMziki.mp3',
                    duration :'01:52' 
                },
				
	
				
				 { 
                    name : 'Mtukufu Ramadhan',
                    artist : '',
                   image :'holy ramadan.webp',
                    songUrl :'RamadhaniRashidzunguftUkhtyThureya.mp3',
                    duration :'06:58' 
                },
				
				 { 
                    name : 'Ya Eid',
                    artist : '',
                   image :'ya eid.webp',
                    songUrl :'UKHTYMWANACHA-YAA EID.mp3',
                    duration :'06:17' 
                },
					  
			  		   
			  
			       		    {
                    name : 'Mbaya Wangu',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'mbaya wangu.mp3',
                    duration :'02:49' 
                },
				

						  		    {
                    name : 'Leo Furaha',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Ukhty Saida - Leo Furaha Qaswida.mp3',
                    duration :'02:49' 
                },
			    	

                                {
                    name: "Allah Allahu",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Allah Allahu.mp3",
                    duration: "06:39"
                },
				
					{
 name : 'Tumetoka mbali',
 artist : '',
 image :'default-image.webp',
 songUrl :'AHIMT-MABANAT_TUMETOKA-MBALI-DADA-RAU.mp3',  
 duration :'07:20' 
                },
		{
 name : 'Siku yetu',
 artist : '',
 image :'default-image.webp',
 songUrl :'AHIMT-MABANAT-AIKHAR-_Siku-yetu-Ahimt.mp3',  
 duration :'08:45' 
                },
					{
 name : 'Jamii haya yapokeeni',
 artist : '',
 image :'default-image.webp',
 songUrl :'Jamii haya yapokeeni.mp3',  
 duration :'04:11' 
                },
					{
 name : 'Furaha ya eid',
 artist : '',
 image :'default-image.webp',
 songUrl :'AHLULMADINAFURAHAYAEID.mp3',  
 duration :'08:03' 
                },
					{
 name : 'Ahmad Ya Habibi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ahmad Ya Habibi - Wafiq Azizah.mp3',  
 duration :'04:05' 
                },
					{
 name : 'Subira Jambo la Kheeri',
 artist : '',
 image :'default-image.webp',
 songUrl :'Al - Shibib - Subira Jambo la Kheri.mp3',  
 duration :'06:05' 
                },
					{
 name : 'Allah Allah Aghisna',
 artist : '',
 image :'default-image.webp',
 songUrl :'Allah Allah Aghisna - Wafiq Azizah.mp3',  
 duration :'03:28' 
                },
					{
 name : 'Yakimwagika',
 artist : '',
 image :'default-image.webp',
 songUrl :'ALLY-ISMAIL-YAKIMWAGIKA.mp3',  
 duration :'08:54' 
                },
					{
 name : 'Jina Langu Ramadhani',
 artist : '',
 image :'default-image.webp',
 songUrl :'Arafa Abdallah - Jina Langu Ramadhani.mp3',  
 duration :'07:06' 
                },
					{
 name : 'Lailatul Qadir',
 artist : '',
 image :'default-image.webp',
 songUrl :'Arafa-Abdilah-LAILA-TUL-QADIR.mp3',  
 duration :'05:15' 
                },
					{
 name : 'Zawadi kwa mama',
 artist : '',
 image :'default-image.webp',
 songUrl :'ASHA-JAWAB-ZAWADI-KWA-MAMA.mp3',  
 duration :'05:10' 
                },
					{
 name : 'Ashangiriwe',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ashangiriwe-Madrasatul-sirajal-munira.mp3',  
 duration :'06:31' 
                },
					{
 name : 'Majina ya Allah',
 artist : '',
 image :'default-image.webp',
 songUrl :'Names-of-Allah.mp3',  
 duration :'04:13' 
                },
					{
 name : 'Assalamu alaika',
 artist : '',
 image :'default-image.webp',
 songUrl :'Assalamu alaika Hj.Wafiq Azizah.mp3',  
 duration :'04:50' 
                },
					{
 name : 'Assalamualaik Ambiya',
 artist : '',
 image :'default-image.webp',
 songUrl :'Assalamualaik-Zainal-Ambiya-Wafiq-Azizah.mp3',  
 duration :'06:03' 
                },
					{
 name : 'Deen Assalam',
 artist : '',
 image :'default-image.webp',
 songUrl :'Deen Assalam - Wafiq.mp3',  
 duration :'04:12' 
                },
					{
 name : 'Ewe tumwa salaam Alyka',
 artist : '',
 image :'default-image.webp',
 songUrl :'DIDA l QASWIDA - EWE CHUMWA SALAM ALYKA.mp3',  
 duration :'07:07' 
                },
					{
 name : 'Eid Elydina',
 artist : '',
 image :'default-image.webp',
 songUrl :'EidElAydinaUkhtyWARDA.mp3',  
 duration :'04:54' 
                },
					{
 name : 'Mwezi mwema Ramadan',
 artist : '',
 image :'default-image.webp',
 songUrl :'FAKKYMBAROUKRAMADHANMWEZIMWEMA.mp3',  
 duration :'11:49' 
                },
					{
 name : 'Mama yaangu',
 artist : '',
 image :'default-image.webp',
 songUrl :'faridi-qaswida-mama-yangu.mp3',  
 duration :'04:20' 
                },
					{
 name : 'Eid Ahlul madina',
 artist : '',
 image :'default-image.webp',
 songUrl :'IddyAhlulmadina.mp3',  
 duration :'08:41' 
                },
					{
 name : 'Insha Allah',
 artist : '',
 image :'default-image.webp',
 songUrl :'insha-Allah-arabic.mp3',  
 duration :'04:47' 
                },
					{
 name : 'Chuki uchafu wa nafsi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Johayna-Abdallah-Chuki-uchafu-wa-nafsi.mp3',  
 duration :'03:20' 
                },
					{
 name : 'Imani',
 artist : '',
 image :'default-image.webp',
 songUrl :'Johayna-Abdallah-Imani.mp3',  
 duration :'04:09' 
                },
					{
 name : 'Quran Johayna',
 artist : '',
 image :'default-image.webp',
 songUrl :'Johayna-Abdallah-Quran.mp3',  
 duration :'06:44' 
                },
					{
 name : 'Sote sawa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Johayna-Abdallah-Sote-Sawa.mp3',  
 duration :'07:16' 
                },
					{
 name : 'Umeridhia moyo wangu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Johayna-Abdallah-Umeridhia-Moyo-Wangu.mp3',  
 duration :'04:43' 
                },
					{
 name : 'Ataa Ramadhani',
 artist : '',
 image :'default-image.webp',
 songUrl :'JumaFakiFtRashidHamad-AtaaRamadhan.mp3',  
 duration :'04:35' 
                },
					{
 name : 'Kadiria sherehe',
 artist : '',
 image :'default-image.webp',
 songUrl :'kadiria-sherehe.mp3',  
 duration :'06:57' 
                },
					{
 name : 'Kaka umeshampata',
 artist : '',
 image :'default-image.webp',
 songUrl :'KAKA ABRA UMESHAMPATA.mp3',  
 duration :'15:25' 
                },
					{
 name : 'Kwaheri mgeni mwema',
 artist : '',
 image :'default-image.webp',
 songUrl :'Kwaheri-Mgeni-Mwama.mp3',  
 duration :'03:36' 
                },
					{
 name : 'Laukana Bainanal Habib',
 artist : '',
 image :'default-image.webp',
 songUrl :'Laukana Bainanal Habib - Wafiq Azizah.mp3',  
 duration :'03:34' 
                },
					{
 name : 'Ada ya harusi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Madrasatul Nah Dhat-Ada ya Harusi.mp3',  
 duration :'05:53' 
                },
					{
 name : 'Furaha ya ndoa',
 artist : '',
 image :'default-image.webp',
 songUrl :'MadrsatIstiqama-Imedhirifurahayandoa.mp3',  
 duration :'09:58' 
                },
					{
 name : 'Allah Allah Kiya Karo',
 artist : '',
 image :'default-image.webp',
 songUrl :'Maher - Allah Allah Kiya Karo.mp3',  
 duration :'05:14' 
                },
					{
 name : 'Always Be There',
 artist : '',
 image :'default-image.webp',
 songUrl :'Always Be There.mp3',  
 duration :'04:50' 
                },
					{
 name : 'Guide Me All The Way',
 artist : '',
 image :'default-image.webp',
 songUrl :'Guide Me All The Way.mp3',  
 duration :'05:03' 
                },
					{
 name : 'Maher Ramadan',
 artist : '',
 image :'default-image.webp',
 songUrl :'Maher - Ramadan.mp3',  
 duration :'05:08' 
                },
					{
 name : 'Thank You Allah',
 artist : '',
 image :'default-image.webp',
 songUrl :'Thank You Allah.mp3',  
 duration :'06:26' 
                },
					{
 name : 'Antassalam',
 artist : '',
 image :'default-image.webp',
 songUrl :'Antassalam.mp3',  
 duration :'04:09' 
                },
					{
 name : 'For the rest of my life',
 artist : '',
 image :'default-image.webp',
 songUrl :'For-The-Rest-Of-My-Life.mp3',  
 duration :'04:48' 
                },
					{
 name : 'Rahmatun Lil Alameen',
 artist : '',
 image :'default-image.webp',
 songUrl :'Rahmatun-Lil-Alameen.mp3',  
 duration :'04:21' 
                },
					{
 name : 'Makafiri hukimbia',
 artist : '',
 image :'default-image.webp',
 songUrl :'Makafiri hukimbia.mp3',  
 duration :'04:45' 
                },
					{
 name : 'Maula Ya Salle',
 artist : '',
 image :'default-image.webp',
 songUrl :'Maula-Ya-Salle.mp3',  
 duration :'02:29' 
                },
					{
 name : 'medina-arabic',
 artist : '',
 image :'default-image.webp',
 songUrl :'medina-arabic.mp3',  
 duration :'04:10' 
                },
					{
 name : 'muhammad-nabina',
 artist : '',
 image :'default-image.webp',
 songUrl :'muhammad-nabina.mp3',  
 duration :'03:53' 
                },
					{
 name : 'peace be upon you',
 artist : '',
 image :'default-image.webp',
 songUrl :'peace-be-upon-you.mp3',  
 duration :'04:56' 
                },
					{
 name : 'Qari Khamiis Ramadan',
 artist : '',
 image :'default-image.webp',
 songUrl :'Qari Khamiic - Ramadan.mp3',  
 duration :'03:21' 
                },
					{
 name : 'Burda Yarabibi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Burda Yarabibi.mp3',  
 duration :'05:16' 
                },
					{
 name : 'Ukht Naa - Bi Harusi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ukht Naa - Bi Harusi.mp3',  
 duration :'03:11' 
                },
					{
 name : 'Arobaini ya mtoto',
 artist : '',
 image :'default-image.webp',
 songUrl :'AROBAIN-YA-MTOTO-Johaina-Abdallah.mp3',  
 duration :'06:27' 
                },
					{
 name : 'Yarasullah',
 artist : '',
 image :'default-image.webp',
 songUrl :'Johayna-Abdallah-YARASULALLAH.mp3',  
 duration :'04:34' 
                },
					{
 name : 'Ziende kwao pongezi',
 artist : '',
 image :'default-image.webp',
 songUrl :'ziende-kwao-pongezi.mp3',  
 duration :'10:31' 
                },
					{
 name : 'Wana Ihsaani',
 artist : '',
 image :'default-image.webp',
 songUrl :'QASWIDEIDWANAIHSAAN.mp3',  
 duration :'07:13' 
                },
					{
 name : 'Mnajitia adhabuni',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mnajitia adhabuni.mp3',  
 duration :'05:23' 
                },
					{
 name : 'Robbi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Robbi.mp3',  
 duration :'05:31' 
                },
					{
 name : 'Saben Malam JumAt',
 artist : '',
 image :'default-image.webp',
 songUrl :'Saben Malam JumAt.mp3',  
 duration :'04:49' 
                },
					{
 name : 'Eid al Adha',
 artist : '',
 image :'default-image.webp',
 songUrl :'Sh.Hafidhi&Ust.HajiEidalAdha.mp3',  
 duration :'07:21' 
                },
					{
 name : 'Sholawat Kawakib',
 artist : '',
 image :'default-image.webp',
 songUrl :'Sholawat Kawakib.mp3',  
 duration :'04:02' 
                },
					{
 name : 'Walia nini mwanangu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Walia nini mwanangu.mp3',  
 duration :'08:47' 
                },
					{
 name : 'Team Brothers Ramadhan',
 artist : '',
 image :'default-image.webp',
 songUrl :'TeamBrothersRamadhan.mp3',  
 duration :'02:35' 
                },
					{
 name : 'Twaanza Salamu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Twaanza-Salamu.mp3',  
 duration :'09:16' 
                },
					{
 name : 'Twauaga mwezi mwema',
 artist : '',
 image :'default-image.webp',
 songUrl :'twauaga mwezi mwema.mp3',  
 duration :'03:36' 
                },
					{
 name : 'Mahaba mazito',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mahaba mazito.mp3',  
 duration :'08:26' 
                },
					{
 name : 'Mwanamke urembo',
 artist : '',
 image :'default-image.webp',
 songUrl :'mwanamke urembo.mp3',  
 duration :'02:18' 
                },
					{
 name : 'Utajua mwenyewe kutamba',
 artist : '',
 image :'default-image.webp',
 songUrl :'UKHTY-DIDA_UTAJUA-MWENYEWE-KUTAMBA.mp3',  
 duration :'04:11' 
                },
					{
 name : 'Sifa za kuoa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Sifa za kuoa.mp3',  
 duration :'07:11' 
                },
					{
 name : 'Tuwapeni maua yao',
 artist : '',
 image :'default-image.webp',
 songUrl :'UKHTYMWANACHATUWAPENIMAUAYAO.mp3',  
 duration :'12:48' 
                },
					{
 name : 'Twashangilia',
 artist : '',
 image :'default-image.webp',
 songUrl :'UKHTYMWANACHATWASHANGIRIA.mp3',  
 duration :'13:40' 
                },
					{
 name : 'Yana raha yake mapenzi',
 artist : '',
 image :'default-image.webp',
 songUrl :'UKHTYMWANACHAYANARAHA YAKEMAPENZI.mp3',  
 duration :'08:44' 
                },
					{
 name : 'Msingi wa ndoa',
 artist : '',
 image :'default-image.webp',
 songUrl :'ustadh-hafidh-rashid-msingi-wa-ndoa.mp3',  
 duration :'09:24' 
                },
					{
 name : 'Yaa Rasullah',
 artist : '',
 image :'default-image.webp',
 songUrl :'Yaa Rasullah.mp3',  
 duration :'04:51' 
                },
					{
 name : 'ya taiba',
 artist : '',
 image :'default-image.webp',
 songUrl :'ya-taiba.mp3',  
 duration :'04:35' 
                },
					{
 name : 'Al Hijrah',
 artist : '',
 image :'default-image.webp',
 songUrl :'Al Hijrah.mp3',  
 duration :'04:34' 
                },
					{
 name : 'Assalamualaik ya wazir',
 artist : '',
 image :'default-image.webp',
 songUrl :'assalamualaik-ya-wazir.mp3',  
 duration :'04:26' 
                },
					{
 name : 'Wahdana',
 artist : '',
 image :'default-image.webp',
 songUrl :'Wahdana - Wafiq Azizah.mp3',  
 duration :'04:11' 
                },
					{
 name : 'Wanaofunga mazoea',
 artist : '',
 image :'default-image.webp',
 songUrl :'WANOFUNGAMAZOEAUKHTYTHUREya.mp3',  
 duration :'03:54' 
                },
				   {
                    name: "Mama huyo",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Mama huyo.mp3",
                    duration: "10:27"
                },
				   {
                    name: "Yaarabbi Swaali",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Yaarabbi Swaali.mp3",
                    duration: "06:36"
                },
				  
				   {
                    name: "Kijicho",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Kijicho.mp3",
                    duration: "07:30"
                },
				  
				   {
                    name: "Sifa za kuoa",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Sifa za kuoa.mp3",
                    duration: "07:43"
                },
				  
				   {
                    name: "Twamsifu",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Twamsifu.mp3",
                    duration: "07:52"
                },
				  
				   {
                    name: "Binniyat",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Binniyat.mp3",
                    duration: "09:26"
                },
				  
				   {
                    name: "Heshima kwa mume",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Heshima kwa mume.mp3",
                    duration: "06:58"
                },
				  
				   {
                    name: "Zimetimu zao njozi",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Zimetimu zao njozi.mp3",
                    duration: "07:09"
                },
				  
				   {
                    name: "Vigelegele",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Vigelegele.mp3",
                    duration: "08:16"
                },
				  
				   {
                    name: "Mja umeiaga dunia",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Mja umeiaga dunia.mp3",
                    duration: ""
                },
				  
				   {
                    name: "Lengo la kuletwa",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Lengo la kuletwa duniani.mp3",
                    duration: "05:04"
                },
				  
				   {
                    name: "Da asha kwaheri",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Da asha kwaheri.mp3",
                    duration: "11:35"
                },
				  
				   {
                    name: "Ubaya",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Ubaya.mp3",
                    duration: "09:42"
                },
				  
				   {
                    name: "Twaanza salamu",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Twaanza salamu.mp3",
                    duration: "09:19"
                },
				  
				   {
                    name: "Msafara mwema",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Msafara mwema.mp3",
                    duration: "13:22"
                },
				  
				   {
                    name: "Dhuluma",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Dhuluma.mp3",
                    duration: "14:54"
                },
				  
				  
				  
				   {
                    name: "Wake wa Mtume",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Wake wa Mtume.mp3",
                    duration: "05:34"
                },
				  
				   {
                    name: "Kukosa radhi",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Kukosa radhi.mp3",
                    duration: "08:00"
                },
				  
				   {
                    name: "Bembea",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Bembea.mp3",
                    duration: "10:41"
                },
				  
				   {
                    name: "Watu wa motoni",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Watu wa motoni.mp3",
                    duration: "10:24"
                },
				  
				   {
                    name: "Ujane",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Ujane.mp3",
                    duration: "05:14"
                },
				  
				   {
                    name: "Amekuchagua wewe",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Amekuchagua wewe.mp3",
                    duration: "06:37"
                },
				  
				   {
                    name: "Twamsifu msifika",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Twamsifu msifika.mp3",
                    duration: "06:55"
                },
				  
				   {
                    name: "Swiratwi",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Swiratwi.mp3",
                    duration: "06:01"
                },
				  
				   {
                    name: "Mauti ya mbele yetu",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Mauti ya mbele yetu.mp3",
                    duration: "03:49"
                },
				  
				   {
                    name: "Njoo nao",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Njoo nao.mp3",
                    duration: "11:53"
                },
				  
				   {
                    name: "Rabi kwa mtume",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Rabi kwa mtume.mp3",
                    duration: "05:00"
                },
				  
				   {
                    name: "Allahuma swali",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Allahuma swali.mp3",
                    duration: "05:53"
                },
				  
				   {
                    name: "Dunia",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "UkhtydDunia.mp3",
                    duration: ""
                },
				  
				   {
                    name: "Natawassal",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Natawassal.mp3",
                    duration: "06:47"
                },
				  
				   {
                    name: "Enyi mliofunga ndoa",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Enyi mliofunga ndoa.mp3",
                    duration: "06:47"
                },
				  
				   {
                    name: "Yapaswa kwetu",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Yapaswa kwetu.mp3",
                    duration: ""
                },
				  
				   {
                    name: "Swalatullah salumullah",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Swalatullah salumullah.mp3",
                    duration: "06:23"
                },
				  
				   {
                    name: "Bwana wa mbingu",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Bwana wa mbingu.mp3",
                    duration: "04:43"
                },
				  
				   {
                    name: "Twakumbuka",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Twakumbuka.mp3",
                    duration: "12:08"
                },
				  
				   {
                    name: "Alikusaidia",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Alikusaidia.mp3",
                    duration: "06:57"
                },
				  
				   {
                    name: "Waswaahib",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Waswaahib.mp3",
                    duration: "05:04"
                },
				  
				   {
                    name: "Abuu Khanifa",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Abuu Khanifa.mp3",
                    duration: "09:20"
                },
				  
				   {
                    name: "Alhawariyya",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Alhawariyya.mp3",
                    duration: "04:54"
                },
				  
				   {
                    name: "Tumswifu Mtume",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Tumswifu Mtume.mp3",
                    duration: "11:16"
                },
				  
				   {
                    name: "Baya unalolifanya",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Baya unalolifanya.mp3",
                    duration: "05:25"
                },
				  
				   {
                    name: "Bi fadhli",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Bi fadhli.mp3",
                    duration: "05:15"
                },
				  
				   {
                    name: "Thummaa Rauka",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Thummaa Rauka.mp3",
                    duration: "07:22"
                },
				  
				   {
                    name: "Pepo",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Pepo.mp3",
                    duration: "06:51"
                },
				  
				   {
                    name: "Kiumbe",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Kiumbe.mp3",
                    duration: ""
                },
				  
				   {
                    name: "Yaa Rabbi",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "DyYaa Rabbi.mp3",
                    duration: ""
                },
				
							  
		
		
				   
				   {
                    name: "Nuru njema",
                    artist: "",
                    image: "default-image.webp",
                    songUrl: "Nuru njema.mp3",
                    duration: "07:01"
                },
				   

               		  		    {
                    name : 'Nipoze Mtima',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Nipoze.mp3',
                    duration :'02:49' 
                },
			    			 
                         		  		    {
                    name : 'Halali yangu',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Halali Yangu_Rahma Tashtity.mp3',
                    duration :'02:49' 
                },

                   
					    {
                    name : 'Inanawirika harusi',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Inanawirika harusi.mp3', 
                    duration :'02:49' 
                },
				
			
					    {
                    name : 'Apongezwe Mama',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Apongezwe Mama.mp3',
                    duration :'06:28' 
                },
				
				
				{
 name : 'Umpangie nani',
 artist : '',
 image :'default-image.webp',
 songUrl :'Umapangie-nani-imam-shaib.mp3',  
 duration :'12:02' 
                },
	{
 name : 'Huu mwaka',
 artist : '',
 image :'default-image.webp',
 songUrl :'Huu-mwaka-afaiz.mp3',  
 duration :'03:07' 
                },

		{
 name : 'Am sorry my friend',
 artist : '',
 image :'default-image.webp',
 songUrl :'Am-sorry-my-friend.mp3',  
 duration :'05:17' 
                },
		{
 name : 'I miss you mama',
 artist : '',
 image :'default-image.webp',
 songUrl :'i-miss-you-mama-afaiz.mp3',  
 duration :'04:41' 
                },
		{
 name : 'Rabbi mshushize swala',
 artist : '',
 image :'default-image.webp',
 songUrl :'Rabbi-mshushize-swala.mp3',  
 duration :'09:13' 
                },
		{
 name : 'Hakika ni jambo jema',
 artist : '',
 image :'default-image.webp',
 songUrl :'Hakika-ni-jambo-jema.mp3',  
 duration :'06:57' 
                },
		{
 name : 'Mahaba',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mahaba-live.mp3',  
 duration :'03:03' 
                },
		{
 name : 'Maumivu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Maumivu-afaiz.mp3',  
 duration :'03:10'
                },

		{
 name : 'Misuko ya ndoa',
 artist : '',
 image :'default-image.webp',
 songUrl :'misuko-suko-ya-ndoa.mp3',  
 duration :'06:43' 
                },

		{
 name : 'Moyo unauma',
 artist : '',
 image :'default-image.webp',
 songUrl :'Moyo-unauma.mp3',  
 duration :'05:10' 
                },
		{
 name : 'Mzuri',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mzuri-asnan.mp3',  
 duration :'05:26' 
                },
		{
 name : 'Nishajipata',
 artist : '',
 image :'default-image.webp',
 songUrl :'nishajipata.mp3',  
 duration :'03:18' 
                },
		{
 name : 'Haya haya kuolewa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Haya-haya-kuolewa.mp3',  
 duration :'06:52' 
                },
		{
 name : 'Simba mwenda pole',
 artist : '',
 image :'default-image.webp',
 songUrl :'simba-mwenda-pole.mp3',  
 duration :'09:49' 
                },
		{
 name : 'Ammy',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ammy.mp3',  
 duration :'05:54' 
                },
		{
 name : 'Nafsi kinai',
 artist : '',
 image :'default-image.webp',
 songUrl :'Nafsi-kinai.mp3',  
 duration :'04:49' 
                },
		{
 name : 'wasia',
 artist : '',
 image :'default-image.webp',
 songUrl :'wasia.mp3',  
 duration :'05:47' 
                },
		{
 name : 'Ntabaki nawe',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ntabaki-nawe.mp3',  
 duration :'05:21' 
                },
		{
 name : 'Tamaa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Tamaa-asnan.mp3',  
 duration :'04:32' 
                },
		{
 name : 'Tujinafasi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Tujinafasi.mp3',  
 duration :'09:52' 
                },
		{
 name : 'Sio mimi',
 artist : '',
 image :'default-image.webp',
 songUrl :'sio mimi.mp3',  
 duration :'16:44' 
                },
		{
 name : 'Tuliza boli kiwanja',
 artist : '',
 image :'default-image.webp',
 songUrl :'Tuliza boli.mp3',  
 duration :'17:52' 
                },
		{
 name : 'faraja',
 artist : '',
 image :'default-image.webp',
 songUrl :'faraja-soudkhaf.mp3',  
 duration :'04:58' 
                },
		{
 name : 'Dunia si mbaya',
 artist : '',
 image :'default-image.webp',
 songUrl :'Dunia si mbaya.mp3',  
 duration :'06:47' 
                },
		{
 name : 'Dua ya harusi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Dua-ya-harusi.mp3',  
 duration :'07:49' 
                },
		{
 name : 'Wamechelewa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Wamechelewa-asnan.mp3',  
 duration :'03:48' 
                },
		{
 name : 'Umeniweza my dear',
 artist : '',
 image :'default-image.webp',
 songUrl :'Umeniweza my dear.mp3',  
 duration :'04:36' 
                },
		{
 name : 'Mtu choyo',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mtu-choyo.mp3',  
 duration :'10:31' 
                },
		{
 name : 'Mola wangu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mola-wangu.mp3',  
 duration :'01:43' 
                },
		{
 name : 'Kaona tunda',
 artist : '',
 image :'default-image.webp',
 songUrl :'Kaona tunda.mp3',  
 duration :'10:53' 
                },
		{
 name : 'Mama Amina',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mama-amina.mp3',  
 duration :'07:07' 
                },
		{
 name : 'Sesena',
 artist : '',
 image :'default-image.webp',
 songUrl :'Sesena.mp3',  
 duration :'07:01' 
                },
		{
 name : 'Mashallah harus',
 artist : '',
 image :'default-image.webp',
 songUrl :'mashallah-azmin.mp3',  
 duration :'04:51' 
                },
		{
 name : 'Wapeni njia dufu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Wapeni njia dufu.mp3',  
 duration :'09:03' 
                },
		{
 name : 'Dhana Mbaya',
 artist : '',
 image :'default-image.webp',
 songUrl :'dhana-mbaya.mp3',  
 duration :'09:28' 
                },
		{
 name : 'Kurejewa Mke',
 artist : '',
 image :'default-image.webp',
 songUrl :'kurejewa mke.mp3',  
 duration :'10:14' 
                },
		{
 name : 'Furaha Asnan',
 artist : '',
 image :'default-image.webp',
 songUrl :'Furaha-asnan.mp3',  
 duration :'04:27' 
                },
		{
 name : 'Daktari nipe dawa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Daktari nipe dawa.mp3',  
 duration :'05:33' 
                },
		{
 name : 'Wangu wa halali',
 artist : '',
 image :'default-image.webp',
 songUrl :'Wangu wa halali.mp3',  
 duration :'03:14' 
                },
		{
 name : 'Uzuri wako',
 artist : '',
 image :'default-image.webp',
 songUrl :'Uzuri wako.mp3',  
 duration :'06:24' 
                },

		{
 name : 'Ropokeni mchoke',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ropokeni-mpaka-mchoke.mp3',  
 duration :'02:48' 
                },
		{
 name : 'Waache',
 artist : '',
 image :'default-image.webp',
 songUrl :'Waache-sau.mp3',  
 duration :'11:15' 
                },
		{
 name : 'Wapo bado',
 artist : '',
 image :'default-image.webp',
 songUrl :'wapo-bado.mp3',  
 duration :'08:12' 
                },
		{
 name : 'Mdodo',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mdodo-rizik.mp3',  
 duration :'06:55' 
                },
		{
 name : 'Silaha tatu za mke',
 artist : '',
 image :'default-image.webp',
 songUrl :'Silaha-tatu-za-mke.mp3',  
 duration :'06:59' 
                },
		{
 name : 'Sio levo yako',
 artist : '',
 image :'default-image.webp',
 songUrl :'Sio-levo-yako.mp3',  
 duration :'09:34' 
                },
		{
 name : 'Tabasam pambe',
 artist : '',
 image :'default-image.webp',
 songUrl :'Tabasam pambe.mp3',  
 duration :'10:51' 
                },
		{
 name : 'Kakutaa Bayana',
 artist : '',
 image :'default-image.webp',
 songUrl :'Kakutaa-bayan.mp3',  
 duration :'11:27' 
                },
		{
 name : 'Moyo wadunda',
 artist : '',
 image :'default-image.webp',
 songUrl :'Moyo wadunda.mp3',  
 duration :'05:21' 
                },
		{
 name : 'Subiria',
 artist : '',
 image :'default-image.webp',
 songUrl :'Subiria.mp3',  
 duration :'04:08' 
                },
		{
 name : 'Uke wenza sitaki',
 artist : '',
 image :'default-image.webp',
 songUrl :'Uke-wenza-sitaki.mp3',  
 duration :'04:41' 
                },
				
					{
 name : 'Ziraili',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ziraili.mp3',  
 duration :'07:01' 
                },	
				
		{
 name : 'Dhwalaltu-Twariiqa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Dhwalaltu-Twarii.mp3',  
 duration :'03:54' 
                },
		{
 name : 'Safari',
 artist : '',
 image :'default-image.webp',
 songUrl :'Safari-ismail.mp3',  
 duration :'10:28' 
                },
		{
 name : 'Ahlul Madina',
 artist : '',
 image :'default-image.webp',
 songUrl :'Eda-ahlul.mp3',  
 duration :'08:06' 
                },
		{
 name : 'Asnan Ndoa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Asnann-ndoa.mp3',  
 duration :'04:41' 
                },
		{
 name : 'Bibi harusi pambe',
 artist : '',
 image :'default-image.webp',
 songUrl :'bibi-harusi-pambe.mp3',  
 duration :'08:05'
                },
		{
 name : 'Mama yangu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mama-yangu.mp3',  
 duration :'08:32' 
                },
		{
 name : 'Leo-fahari',
 artist : '',
 image :'default-image.webp',
 songUrl :'Leo-fahari.mp3',  
 duration :'07:39' 
                },
		{
 name : 'Mwandani',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mwandani-nassoro.mp3',  
 duration :'05:02' 
                },
		{
 name : 'Moyo Thabiti',
 artist : '',
 image :'default-image.webp',
 songUrl :'Moyo-thabiti-sau.mp3',  
 duration :'10:12' 
                },
		{
 name : 'Hali tuliyonayo',
 artist : '',
 image :'default-image.webp',
 songUrl :'hali-tuliyonayo.mp3',  
 duration :'05:25' 
                },
		{
 name : 'Umasiki wangu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Umasikini-wangu.mp3',  
 duration :'13:15' 
                },

		{
 name : 'Walosema haolewi',
 artist : '',
 image :'default-image.webp',
 songUrl :'walosema haolewi.mp3',  
 duration :'08:57' 
                },
		{
 name : 'Shada la maua',
 artist : '',
 image :'default-image.webp',
 songUrl :'Shada-la-maua.mp3',  
 duration :'04:27' 
                },

		{
 name : 'Habib wangu mahabuba',
 artist : '',
 image :'default-image.webp',
 songUrl :'haib-wangu-mahbuba.mp3',  
 duration :'05:53' 
                },
		{
 name : 'Tujumuike pamoja',
 artist : '',
 image :'default-image.webp',
 songUrl :'Tujumuike pamoja.mp3',  
 duration :'09:54' 
                },
		{
 name : 'Mashauzi Shara',
 artist : '',
 image :'default-image.webp',
 songUrl :'shara-mashauzi.mp3',  
 duration :'11:44' 
                },
		{
 name : 'Nilaumu macho yangu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Nilaumu-macho-yangu.mp3',  
 duration :'13:55' 
                },
		{
 name : 'Vidomo domo',
 artist : '',
 image :'default-image.webp',
 songUrl :'vidomodomo.mp3',  
 duration :'01:38' 
                },
		{
 name : 'Tumeandaliwa',
 artist : '',
 image :'default-image.webp',
 songUrl :'tumeandaliwa.mp3',  
 duration :'07:46' 
                },
		{
 name : 'Moyo ukipendaa',
 artist : '',
 image :'default-image.webp',
 songUrl :'moyo-ukipenda-umependa-kwel.mp3',  
 duration :'06:10' 
                },
		{
 name : 'Mja Muongo',
 artist : '',
 image :'default-image.webp',
 songUrl :'sau-mja-muongo.mp3',  
 duration :'08:47' 
                },
		{
 name : 'Mama harusi cheza',
 artist : '',
 image :'default-image.webp',
 songUrl :'mama-harusi-cheza.mp3',  
 duration :'10:44' 
                },
		{
 name : 'Maaslam',
 artist : '',
 image :'default-image.webp',
 songUrl :'Maaslam.mp3',  
 duration :'15:06' 
                },
		{
 name : 'Kwisha habari zao',
 artist : '',
 image :'default-image.webp',
 songUrl :'kwisha-habari-zao.mp3',  
 duration :'08:02' 
                },

		{
 name : 'Inawakereketa',
 artist : '',
 image :'default-image.webp',
 songUrl :'Inawakereketa.mp3',  
 duration :'08:01' 
                },
		{
 name : 'Haturingi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Haturingi.mp3',  
 duration :'10:51' 
                },
		{
 name : 'Binadamu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Sau-binadamu.mp3',  
 duration :'10:42' 
                },
		{
 name : '',
 artist : '',
 image :'default-image.webp',
 songUrl :'.mp3',  
 duration :'06:52' 
                },
		{
 name : 'Apendeza',
 artist : '',
 image :'default-image.webp',
 songUrl :'Apendeza-sau.mp3',  
 duration :'13:33' 
                },


		{
 name : 'Pokea zawadi',
 artist : '',
 image :'default-image.webp',
 songUrl :'Pokea-zawadi.mp3',  
 duration :'09:56' 
                },
		{
 name : 'Yametimia',
 artist : '',
 image :'default-image.webp',
 songUrl :'Yametimia.mp3',  
 duration :'19:54' 
                },
		{
 name : 'Kwetu faraja',
 artist : '',
 image :'default-image.webp',
 songUrl :'Kwetu-faraja.mp3',  
 duration :'05:29' 
                },

		{
 name : 'Ndani ya ghar thaur',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ndani-ya-ghari-thaur.mp3',  
 duration :'06:16' 
                },
		{
 name : 'Nakupa usia',
 artist : '',
 image :'default-image.webp',
 songUrl :'Nakupa usia.mp3',  
 duration :'08:51' 
                },
		{
 name : 'Rejea tena chuoni',
 artist : '',
 image :'default-image.webp',
 songUrl :'rejea-tena-chuo.mp3',  
 duration :'12:14' 
                },
		{
 name : 'Namsifu my darlin',
 artist : '',
 image :'default-image.webp',
 songUrl :'Namsifu my darlin.mp3',  
 duration :'07:30' 
                },
		{
 name : 'Ukhty adila Birthday',
 artist : '',
 image :'default-image.webp',
 songUrl :'Ukhty adila Birthday.mp3',  
 duration :'02:08' 
                },
		{
 name : 'Mlitaka niadhirike',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mlitaka-niadhirike.mp3',  
 duration :'12:41' 
                },
		{
 name : 'Mnafiki',
 artist : '',
 image :'default-image.webp',
 songUrl :'mnafiki-unaonwa.mp3',  
 duration :'09:48' 
                },
		{
 name : 'Fikra zangu',
 artist : '',
 image :'default-image.webp',
 songUrl :'Fikra-zangu.mp3',  
 duration :'02:11' 
                },
		{
 name : 'Ramaadhan',
 artist : '',
 image :'default-image.webp',
 songUrl :'Abdul-wahid-Ramadhan.mp3',  
 duration :'05:03' 
                },
		{
 name : 'Baba',
 artist : '',
 image :'default-image.webp',
 songUrl :'Baba.mp3',  
 duration :'03:42' 
                },
		{
 name : 'tuiandae safari',
 artist : '',
 image :'default-image.webp',
 songUrl :'tuiandae safari.mp3',  
 duration :'03:40' 
                },
		{
 name : 'Vizabinabina',
 artist : '',
 image :'default-image.webp',
 songUrl :'Vizabinabina.mp3',  
 duration :'07:31' 
                },
		{
 name : 'Mazito',
 artist : '',
 image :'default-image.webp',
 songUrl :'Mazito-asnan.mp3',  
 duration :'05:52' 
                },
		{
 name : 'Wainuke',
 artist : '',
 image :'default-image.webp',
 songUrl :'Wainuke.mp3',  
 duration :'04:33' 
                },
		{
 name : 'usiye na kasoro',
 artist : '',
 image :'default-image.webp',
 songUrl :'usiye na kasoro.mp3',  
 duration :'03:07' 
                },
		{
 name : 'namtegemea karima',
 artist : '',
 image :'default-image.webp',
 songUrl :'namtegemea karima.mp3',  
 duration :'03:06' 
                },

				
			  		    {
                    name : 'Utukufu wa Allah',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Utukufu wa Allah albjn.mp3',
                    duration :'04:02' 
                },
				
				  {
                    name : 'Lisemwalo',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Lisemwalo albjn.mp3',
                    duration :'03:29' 
                },
				  {
                    name : 'Barua ya mzee',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Barua ya mzee albjn.mp3',
                    duration :'00:40' 
                },
				  {
                    name : 'Gari la mwisho',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Gari la mwisho albjn.mp3',
                    duration :'02:44' 
                },
				  {
                    name : 'Ikhtilaf',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Ikhtilaf albjn.mp3',
                    duration :'04:21' 
                },
				  {
                    name : 'Kifo',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Kifo albjn.mp3',
                    duration :'03:51' 
                },
				  {
                    name : 'Shujaa bila gwanda',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Shujaa bila gwanda albjn.mp3',
                    duration :'29:48' 
                },
				  {
                    name : 'Mama',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Mama albjn.mp3',
                    duration :'05:30' 
                },
				  {
                    name : 'Dalili za Qiyama',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Dalili za Qiyama albjn.mp3',
                    duration :'03:58' 
                },
				  {
                    name : 'Kawaambie',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Kawaambie albjn.mp3',
                    duration :'03:58' 
                },
				  {
                    name : 'Nusu ya story',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Nusu ya story albjn.mp3',
                    duration :'05:57' 
                },
				 {
                    name : 'Subira albajuun',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Subira albajuun.mp3',
                    duration :'04:05' 
                },
				
				
				  {
                    name : 'Dada Wenda',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Dada Wenda.mp3', 
                    duration :'06:51' 
                },
				
				 { 
                    name : 'Harusi Haisusiwi',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Harusi Haisusiwi.mp3',
                    duration :'04:09' 
                },
				
				
				 {
                    name : 'Jimwage Mama',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Mama Harusi Mnamjua Watambe Tambe Tuwaone.mp3',
                    duration :'03:20' 
                },
				
				
				
				 {
                    name : 'Moyo umechagua yeye',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Moyo umechagua yeye rcvd.mp3',
                    duration :'11:25' 
                },
				 {
                    name : 'Ringa ringa',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Ringa ringa rcvd.mp3',
                    duration :'04:18' 
                },
				 {
                    name : 'Gubu la mawifi',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Gubu la mawifi rcvd.mp3',
                    duration :'05:47' 
                },
				
				 {
                    name : 'Anayo alama',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Anayo alama rcvd.mp3',
                    duration :'05:49' 
                },
				 {
                    name : 'Aso Wake Ana Mungu',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Aso Wake Ana Mungu rcvd.mp3',
                    duration :'05:53' 
                },
				 {
                    name : 'Furaha Na Sururi',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Furaha Na Sururi rcvd.mp3',
                    duration :'07:06' 
                },
				
				 {
                    name : 'Taaban',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Taaban rcvd.mp3',
                    duration :'03:06' 
                },
				 {
                    name : 'Umelelewa umeleleka',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'umelelewaumeleleka.mp3',
                    duration :'10:20' 
                },
				 {
                    name : 'Kichuna',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Kichuna rcvd.mp3',
                    duration :'11:51' 
                },
				
				 {
                    name : 'Somo yake mnamjua',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Somo yake mnamjua rcvd.mp3',
                    duration :'07:30' 
                },
				 {
                    name : 'Usaliti wa ndoa',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Usaliti wa ndoa rcvd.mp3',
                    duration :'08:47' 
                },
				
				
				   {
                    name : 'Kinywaji Ndoa',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Kinywaji Cha Ndoa.mp3',
                    duration :'09:14' 
                },
				

				
					 { 
                    name : 'Chozi la mke',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'AHLUL-MADINA-CHOZI-LA-MKE-vidiget-dot-com-118913.mp3',
                    duration :'07:37' 
                },
				
						
					    {
                    name : 'Njoo Biharusi',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Njoo Biharusi.mp3',
                    duration :'03:07' 
                },
				
					    {
                    name : 'Sitara Ya Ndoa',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Sitara Ya Ndoa.mp3', 
                    duration :'07:07' 
                },
				
				
					 	    {
                    name : 'Waichukia Harusi',
                    artist : '',
                    image :'default-image.webp',
                    songUrl :'Waichukia Harusi.mp3',  
                    duration :'06:57' 
                }
				
				
					
					
					 
         
            ]

            const animeSong = [
												{
				 name : 'Je una siri',
				 artist : '',
				 image :'song-image.webp',
				 songUrl :'Je-una-siri-Abdallah.mp3',  
				 duration :'04:34' 
								},
								
														{
				 name : 'Assalam Alykum',
				 artist : '',
				 image :'song-image.webp',
				 songUrl :'Assalam Alykum.mp3',  
				 duration :'04:45' 
                },
               
				 { 
                    name : 'Mauti',
                    artist : 'Nasheed',
                    image :'song-image.webp',
                    songUrl :'BrotherNassir-Mauti.mp3',
                    duration :'03:42' 
                },
					 
				
		
                		    {
                    name : 'Ufufuo',
                    artist : 'Nasheed',
                    image :'song-image.webp',
                    songUrl :'Ufufuo.mp3',  
                    duration :'04:29' 
                },
				
				
				
						    {
                    name : 'Umeniweza Moyoni',
                    artist : 'Nasheed',
                    image :'song-image.webp',
                    songUrl :'Umeniweza Moyoni.mp3',  
                    duration :'07:42' 
                },
					
				 {
                    name : 'Maannan',
                    artist : 'Qaswida',
                    image :'song-image.webp',
                    songUrl :'MannaanSaleheAmina.mp3',
                    duration :'02:49' 
                },
				
				 {
                    name : 'Ya Habibi',
                    artist : 'Nasheed',
                    image :'song-image.webp',
                    songUrl :'Ya Habibi.mp3',
                    duration :'04:38' 
                },
				{
                    name : 'Yako Harusi',
                    artist : 'Qaswida',
                    image :'song-image.webp',
                    songUrl :'Yako Harusi.mp3',  
                    duration :'06:59' 
                },
				{
                    name : 'Cheza Sherekhe Na Mama',
                    artist : 'Qaswida',
                    image :'song-image.webp',
                    songUrl :'Cheza Sherekhe Na Mama.mp3',
                    duration :'04:05' 
                },
				{
                    name : 'Ukhty sau leo furaha',
                    artist : 'Qaswida',
                    image :'song-image.webp',
                    songUrl :'Ukhty Saida - Leo Furaha Qaswida.mp3',
                    duration :'02:58' 
                },
				{
                    name : 'Sherehe Leo',
                    artist : 'Qaswida',
                    image :'song-image.webp',
                    songUrl :'004 ALTAWAQAL - SHEREHE LEO.mp3',
                    duration :'02:13' 
                },
				{
                    name : 'Wapeni Njia Warembo',
                    artist : 'Qaswida',
                    image :'song-image.webp',
                    songUrl :'Wapeni Njia Warembo.mp3',
                    duration :'13:00' 
                },
				
				
                    { 
                    name : 'Kimasomaso',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Kimasomaso-by-ukhty-dyda.mp3',
                    duration :'02:13' 
                },
				 { 
                    name : 'Ananipenda nampenda',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyDyda-ANANIPENDA-MI-NAMPENDA.mp3',
                    duration :'07:27' 
                },
				 { 
                    name : 'Mitandao',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'YusufAbdiJauzymitandao.mp3',
                    duration :'01:50' 
                },
				 { 
                    name : 'Ikawa Kheri',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'2.Huendaikawanikheri.mp3',
                    duration :'06:36' 
                },
				 { 
                    name : 'Malezi mema',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'3.MALEZIMEMA.mp3',
                    duration :'07:12' 
                },
				 { 
                    name : 'Ni mimi',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'AL-BAJOUN-ft-MZEE-YUSSUF-NIMIMI-REMIX.mp3',
                    duration :'04:44' 
                },
				 { 
                    name : 'Kipi Adimu',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'4.NikipiAdimuNewNASHEED_audio.mp3',
                    duration :'08:51' 
                },
				
				    {
                    name : 'Dear X',
                    artist : 'Qaswida',
                    image :'song-image.webp',
                    songUrl :'Dear X.mp3', //check from server
                    duration :'06:12' 
                },
				
				
				
				 { 
                    name : 'Subira',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'5.SheikhYusufFtBeka-Subira.mp3',
                    duration :'04:07' 
                },
				 { 
                    name : 'Asanteni',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'6.ASANTENI.mp3',
                    duration :'01:56' 
                },
				 { 
                    name : 'Rasul Katulea',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'9.Rasulullahkatulea.mp3',
                    duration :'06:50' 
                },
				 { 
                    name : 'Uongofu',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'18.Nashhedyauongofu.mp3',
                    duration :'03:04' 
                },
				 { 
                    name : 'Tabia dini yako',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'25.TabianiDiniyako.mp3', //ended here
                    duration :'20:04' 
                },
				 { 
                    name : 'Ajabu kubwa',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'28.NiAjabukubwakwangu.mp3',
                    duration :'03:03' 
                },
				 { 
                    name : 'Salam Alayka',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'Ya-Nabi-Salaam-Alaika.mp3',
                    duration :'07:07' 
                },
				 { 
                    name : 'Ukhty Stumai',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyStumai-Qasida.mp3',  //check from server
                    duration :'05:22' 
                },
				 { 
                    name : 'Nenda salama',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtySiti-NendaSalama.mp3', //check from server
                    duration :'05:37' 
                },
				 { 
                    name : 'Mwali wangu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyShariffaNipeniMwariwanguNimfunze.mp3', //check from server
                    duration :'08:27' 
                },
				 { 
                    name : 'Yaliyojificha',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYSAU-YALIOJIFICHA.mp3',
                    duration :'01:29' 
                },
				 { 
                    name : 'Wabaya wamejazana',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYRAUHIYAWABAYAWAMEJAZANA.mp3',
                    duration :'08:57' 
                },
				 { 
                    name : 'Utu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'ukhtyRauhiyaUtuofficialvideo.mp3',
                    duration :'07:14' 
                },
				 { 
                    name : 'Aso kasoro',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYRAUHIYAASOKASOROHAKUNA.mp3',
                    duration :'03:49' 
                },
				 { 
                    name : 'Ladha ya pendo',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYMWANACHALADHAYAPENDO.mp3',
                    duration :'08:10' 
                },
				
				 { 
                    name : 'Wazazi walezi',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyDydaWazaziWalezi.mp3',
                    duration :'08:48' 
                },
				 { 
                    name : 'Kutolewa roho',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyDydaShidaYaKutolewaRoho.mp3',
                    duration :'08:34' 
                },
				 { 
                    name : 'Kuliani kwake',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyDydaKulianiKwake.mp3',
                    duration :'07:29' 
                },
				
					 { 
                    name : 'Twampenda Mtume',
                    artist : 'Qaswida',
                    image :'song-image.webp',
                    songUrl :'Madrasa Krimadina - Twampenda Mtume Wetu Muhammadi.mp3',
                    duration :'08:55' 
                },
					   
				
				 { 
                    name : 'Asya',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyDydaAsya.mp3',
                    duration :'05:47' 
                },
				 { 
                    name : 'Ndoa sunnah',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYDIDANDOANISUNNA.mp3',
                    duration :'06:18' 
                },
				 { 
                    name : 'Alopewa kapewa',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyAzmina-Alepewakapewa.mp3',
                    duration :'06:09' 
                },
				 { 
                    name : 'Ya Hayatirruh',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyAshaYaHayatirruh.mp3',
                    duration :'09:55' 
                },
				 { 
                    name : 'Harusi yako',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYASHALEONiHARUSIYAKOOFFICIALLYAUDIO.mp3',
                    duration :'03:41' 
                },
				 { 
                    name : 'Nataka Nimpost',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYASHAFTAHMADSAIDNATAKANIMPOSTIiLiMUMJUE.mp3',
                    duration :'02:49' 
                },
				 { 
                    name : 'Tumfunze mwana',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYADILAMANYAKANGASOGEENITUMFUNZEMWANA.mp3',
                    duration :'05:45' 
                },
				 { 
                    name : 'Hisani yangu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYADILAHISANIYANGU.mp3',
                    duration :'04:31' 
                },
				 { 
                    name : 'Harus njema',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYADILAHARUSINJEMAOFFICIALAUDIO.mp3',
                    duration :'02:14' 
                },
				 { 
                    name : 'Salamu za bibi',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UkhtyAdilaASALAMUZABIBI.mp3',
                    duration :'09:32' 
                },
				 { 
                    name : 'Hakiba kungwi',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTYADILA-TUMPEHAKIBAKUNGWIWanaNdoaTu.mp3',
                    duration :'04:07' 
                },
				 { 
                    name : 'Tunautoa',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTY-SAU-UKHTY-MAM-TUNAUTOA.mp3',
                    duration :'04:50' 
                },
				 { 
                    name : 'Ardhi na mbingu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Ukhty-Dyda-Ardhi-na-Mbingu-vidiget-dot-com-118709.mp3',
                    duration :'09:19' 
                },
				 { 
                    name : 'Tetema',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'UKHTY-DIDA-ATOA-TETEMA-2023-HIIII-NI-MOTO-SANAA-vidiget-dot-com-118882.mp3',
                    duration :'06:27' 
                },
				
				
				 { 
                    name : 'Mwenye imani',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Ukhty hasina QASWIDA MPYA - MWENYE IMANI (128 kbps).mp3',
                    duration :'07:34' 
                },
				 { 
                    name : 'Tasbih',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'tasbih.mp3',
                    duration :'01:16' 
                },
				 { 
                    name : 'Toa Sadaka',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Toa (Sadaka) By Brother Nassir.mp3',
                    duration :'03:09' 
                },
				 { 
                    name : 'Hasbi Rabbi',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Sami Yusuf Hasbi Rabbi HD.mp3',
                    duration :'03:42' 
                },
				 { 
                    name : 'Mapenzi nikupendayo',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'RAUHIYAMAPENZINIKUPENDAYO.mp3',
                    duration :'06:33' 
                },
				 { 
                    name : 'Huba zako',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'RauhiyaHubaZako.mp3',
                    duration :'08:07' 
                },
				 { 
                    name : 'Quran',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Raudha Kids - Qur-an.mp3',
                    duration :'09:03' 
                },
				
				 { 
                    name : 'Ukhty Dyna',
                    artist : ' Ukhty Dyna',
                   image :'song-image.webp',
                    songUrl :'Ramadhani By Ukhty Dyna.mp3',
                    duration :'04:49' 
                },
				 { 
                    name : 'Ramadhan Karibu',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'Ramadhan Karibu By Afaaizu Luheta.mp3',
                    duration :'07:30' 
                },
				 { 
                    name : 'Tumboni kwa mama',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'QASWIDA TUMBONI KWA MAMA   Kaswida .mp3',
                    duration :'09:47' 
                },
				 { 
                    name : 'Nafsi tubu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'QASWIDA-NAFSI-TUBU-UKHTY-ASHA-Perfomance-Video-vidiget-dot-com-118904.mp3',
                    duration :'06:20' 
                },
				 { 
                    name : 'Nafasi ya mama',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'QASWIDA-nafasi-ya-mama.mp3', 
                    duration :'05:30' 
                },
				 { 
                    name : 'Harusi Mashallah',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'QASWIDA-HARUSI-mashaallah-HD-lite-official-video-vidiget-dot-com-118929.mp3',
                    duration :'03:15' 
                },
				 { 
                    name : 'Noorul Eyn',
                    artist : 'Nasheed',
                   image :'song-image.webp',
                    songUrl :'Noorul Eyn By Afaaizu Luheta.mp3',
                    duration :'09:33' 
                },
		
				 
				 { 
                    name : 'Ada ya Harusi',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Madrasatul Nah Dhat-Ada ya Harusi.mp3',
                    duration :'08:27' 
                },
				 { 
                    name : 'Miujiza',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'MadrasatThimaluIslamiyya-Miujiza.mp3',  //check from server
                    duration :'04:42' 
                },
				 { 
                    name : 'Kilema',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'MadrasatThimaluIslamiyya-Kilema.mp3', //check from server
                    duration :'05:47' 
                },
				 { 
                    name : 'Tuwaombeeni',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'madrasatNadhat-tuwaombeeni.mp3', //check from server
                    duration :'04:26' 
                },
				 { 
                    name : 'TarjulKharous',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'madrasatNadhat-TarjulKharous.mp3', //check from server
                    duration :'05:37' 
                },
				 { 
                    name : 'Kuumbwa Dunia',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'madrasatNadhat-KuumbwaDunia.mp3',  //check from server
                    duration :'04:17' 
                },
				 { 
                    name : 'Huruma ya Allah',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'madrasatNadhat-hurumayaAllah.mp3', //check from server
                    duration :'02:35' 
                },
		
				 { 
                    name : 'Harusi Ya Baraka',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'madrasatul-nah-dhat-harusi-ya-baraka.mp3',
                    duration :'05:20' 
                },
				 { 
                    name : 'Furaha kwetu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'KHAIRIA - NI FURAHA KWETU.mp3',
                    duration :'02:21' 
                },
				 { 
                    name : 'Amka Muislam',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Johayna-AmkaMuislam.mp3',  //check from server
                    duration :'08:05' 
                },
				 { 
                    name : 'Nimeipata Bahati',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Johayna Abdallah - Nimeipata Bahati.mp3',
                    duration :'06:35' 
                },
				 { 
                    name : 'Ndoa ya lazima',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Jamila-Ndoayalazima.mp3',  //check from server
                    duration :'05:45' 
                },
				 { 
                    name : 'Hujahitimu Kusoma',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'HUJAHITIMUKUSOMANAUKHTYRAUHIYA.mp3',
                    duration :'05:14' 
                },
				
				
				 { 
                    name : 'Furaha ya Eid',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'FurahayaEidUst.IsimbulaftSabrina.mp3',
                    duration :'02:06' 
                },
				 { 
                    name : 'Fanya Hisabu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'fanyaHisabu-FaridFadhiliMassanza.mp3',  //check from the server
                    duration :'08:17' 
                },
				 { 
                    name : 'Dunia',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'FadhilinaSuleiman-Dunia.mp3',  //check from the server
                    duration :'08:38' 
                },
			
				 { 
                    name : 'Hayat Haluwa',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'BrotherNassir-HayatHaluwa.mp3',
                    duration :'07:38'
                },
				 { 
                    name : 'baraka allahu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'baraka-allahu-lakuma-arabic.mp3',
                  duration :'06:03'
                },
				 { 
                    name : 'Mwanadamu tambua',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'arafa-abdillah-mwanadamu-tambua.mp3',
                   duration :'07:59'
                },
				 { 
                    name : 'Mungu anaweza',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'arafa-abdillah-mungu-anaweza.mp3',
                   duration :'02:31'
                },
				 { 
                    name : 'Akirimiwe mgeni',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'arafa-abdillah-akirimiwe-mgeni.mp3',
                    duration :'07:22' 
                },
				 { 
                    name : 'Rabi waongoze',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Arafa Adbillah Rabi waongoze.mp3',
                   duration :'08:12'
                },
				 { 
                    name : 'Naona Unajigamba',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Arafa Abdillah Unajigamba .mp3',
                  duration :'07:02'
                },
				 { 
                    name : 'Tunaitaji Huruma',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Arafa Abdillah Tunaitaji Huruma.mp3',
                  duration :'01:49' 
                },
				 { 
                    name : 'Sanjari',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Arafa Abdillah Sanjari.mp3',
                    duration :'07:58' 
                },
				 { 
                    name : 'Niko kwenye ndoto',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Arafa Abdilah Niko kwenye ndoto.mp3',
                    duration :'09:30'
                },
				 { 
                    name : 'Mume Gubu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Aqaz-MumeGubu.mp3',  //check from server
                    duration :'09:22'
                },
				 { 
                    name : 'Kamba ya Allah',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Aqaz-Kamba-ya-Allah.mp3',
                    duration :'09:46'
                },
				 { 
                    name : 'Allah shahidi',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'Allahshahidi-Qasida.mp3',  // check from server
                   duration :'01:50' 
                },
			
				 { 
                    name : 'Nasheed Mpya',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'101.NasheedMixing.mp3',  //check from server
                    duration :'01:39'
                },
				 { 
                    name : 'Sirini',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'100.SIRINI-ABDULKADIRTHABIT.mp3',
                   duration :'08:48'
                },
				 { 
                    name : 'Sikitiko',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'99.ShaqiiqAlJameelSIKITIKO.mp3',
                    duration :'05:30'
                },
				 { 
                    name : 'Umpende mkeo',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'88.BrotherNassirUmpendeMkeWako.mp3',
                   duration :'08:59' 
                },
				 { 
                    name : 'Siku Ya Sakarati',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'86.BrotherNassirSikuYaSakarati.mp3',
                    duration :'00:59' 
                },
				 { 
                    name : 'Mahaba Ya Bwana',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'85.BrotherNassirNauguaMahabaYaBwana.mp3',
                    duration :'06:24' 
                },
				 { 
                    name : 'Nikikumbuka',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'82.AfaaizuLuhetaNikikumbuka.mp3',
                    duration :'05:28' 
                },
				 { 
                    name : 'Agash',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'80.AfaaizuLuhetaAggash.mp3',
                    duration :'03:21'
                },
				 { 
                    name : 'Mahaba Nitue',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'79.NasheedNITUE-MAHABA.mp3',
                    duration :'00:22'
                },
				 { 
                    name : 'Jeneza',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'78.BrotherNassirJeneza.mp3',
                    duration :'03:24' 
                },
				 { 
                    name : 'Soud khafa',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'77.soudkhafa.mp3',
                   duration :'01:54' 
                },
				 { 
                    name : 'Husda',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'70.BrotherLeeNasheedHusda.mp3',
                    duration :'01:22'
                },
				 { 
                    name : 'Istighfar',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'62.QasidahIstighfar.mp3',
                   duration :'03:03' 
                },
				
					
				
				 { 
                    name : 'Rasullullah',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'59.Rasullullah.mp3',
                    duration :'08:35' 
                },
				 { 
                    name : 'Ummi',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'54.Ummi_ajmi.mp3',
                   duration :'06:14' 
                },
				 { 
                    name : 'Ayat qurani',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'53.ayatqurani.mp3',
                  duration :'07:07'
                },
				 { 
                    name : 'Mapenzi wanandoa',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'45.MAPENZIKWAWANANDOA.mp3',
                    duration :'07:49'
                },
				 { 
                    name : 'Zawjati Mke Wangu',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'44.ZawjatiMkeWangu.mp3',
                    duration :'02:06'
                },
				 { 
                    name : 'Yailah twakuomba',
                    artist : 'Qaswida',
                   image :'song-image.webp',
                    songUrl :'41.YAILLAHITWAKUOMBA.mp3',
                    duration :'07:54' 
                }
				 
				
				
            ]



	

// control image rotation
// Reference to the audio element
const audioElement = document.getElementById('audio');
let currentPlayingSong = null; // Track the currently playing song

// Open IndexedDB
const request = indexedDB.open("songCache", 1);
let db;
request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore("songs", { keyPath: "url" });
};
request.onsuccess = (event) => {
    db = event.target.result;
};

// Function to start or stop rotation for the current song
const updateRotation = () => {
    const currentSongUrl = audioElement.getAttribute('src'); // Get current audio source

    document.querySelectorAll('.music-hor__item').forEach((item) => {
        const songName = item.querySelector('h3.music-artist-name').textContent.trim();
        const songImage = item.querySelector('img.music-hor__img');

        const matchingSong = animeSong.find(song => song.name === songName);
        if (matchingSong && currentSongUrl.includes(matchingSong.songUrl)) {
            if (!audioElement.paused) {
                songImage.classList.add('rotate-image'); // Add rotation when playing
            } else {
                songImage.classList.remove('rotate-image'); // Stop rotation when paused
            }
        } else {
            songImage.classList.remove('rotate-image'); // Stop rotation for non-playing songs
        }
    });
};




// Update rotation when playback changes
audioElement.addEventListener('play', updateRotation);
audioElement.addEventListener('pause', updateRotation);
audioElement.addEventListener('ended', updateRotation);

// CSS for rotating images
const style = document.createElement('style');
style.innerHTML = `
    .rotate-image {
        animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// image rotation end




            let getRecommendedSong =[{}];
            const randomValue = Math.floor(Math.random() * animeSong.length);
            getRecommendedSong[0] = animeSong[randomValue];
    
            

            return {
            songs,
            animeSong,
            getRecommendedSong
            }


    })();



    const DOMStrings = (()=>{
        

        const DOMString = {
            navMenu : document.querySelector('.nav-sec'),
            navOpenBtn : document.querySelector('.navOpen-btn'),
            musicContainer : document.querySelector('.music-sec'),
            slider : document.querySelectorAll('.music-con__list'),
            audioFullScreen : document.getElementById('audio-player-fullscreen'),
            openFullScreen : document.querySelector('.music-controller'),
            fullScreenCloseBtn : document.querySelector('.audio-player__close-btn'),

            audioPlayer : document.querySelector(".audio"),
            audioProgressBar : document.querySelectorAll(".music-controller__progress-bar"),
            audioProgressBarFill : document.querySelectorAll('.music-controller__progress-bar-fill'),
            audioListParent : document.querySelectorAll('.music-con__list'),
            audioHorListParent : document.querySelector('.music-hor__list'),
            recommendedImage : document.getElementById('recommended-image')
        }

        const audioBtnCtrl = {
            audioPlayer : document.getElementById('audio'),
            prevBtn : document.querySelectorAll('.audio-prev-btn'),
            playPauseBtn : document.querySelectorAll('.audio-play-pause-btn'),
            nextBtn : document.querySelectorAll('.audio-next-btn'),
            audioImage : document.querySelectorAll('.audio-image'),
            audioName : document.querySelectorAll('.audio-name'),
            audioSingerName : document.querySelector('.audio-singer-name'),
            audioShuffle : document.querySelectorAll('.audio-shuffle'),
            audioVolume : document.querySelectorAll('.audio-volume'),
            audioRepeat: document.querySelectorAll('.audio-repeat'),
            audioCurrentDuration : document.getElementById('current-duration'),
            audioEndDuration : document.getElementById('end-duration'),
            recommendedPlayBtn : document.getElementById('recommended-play-btn'),
        
        }


        return{
            DOMString,
            audioBtnCtrl,

        }


    })();


    const AnimationClass = (()=>{

        const nav = {
                open : 'nav-open-animation',
                close : 'nav-close-animation'
            }

            return{
                nav
            }

    })();


    const UIController = ((DOMStrings,AnimationClass,getSongs)=>{

               
            const DOM = DOMStrings.DOMString , 
                        navMenu = DOM.navMenu ,
                        navBtn = DOM.navOpenBtn , 
                        slider = DOM.slider , 
                        songs = getSongs.songs;

            // Set Cover

    	
// Initialize Hammer instance
const hammer = new Hammer(document.body);

// Set swipe direction to only down (using Hammer.DIRECTION_DOWN)
hammer.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });

// Add event listener for swipedown event
hammer.on('swipedown', function() {
  // Modify the 'openFullScreen' element style
  DOM.openFullScreen.setAttribute('style', 'height: 4.6rem; opacity: 1; z-index: 10');

  // Add the 'hidden' class to the 'audioFullScreen' element
  DOM.audioFullScreen.classList.add('hidden');
});


            // Music Horizonatal Slider Start

        
            let isDown, startX, scrollLeft;

            isDown = false;
        
        
            slider.forEach(btn => btn.addEventListener('mouseleave', () => isDown = false ));
        
            slider.forEach( btn => btn.addEventListener('mouseup', () => isDown = false ));

            slider.forEach( btn => {
                btn.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - btn.offsetLeft;
                    scrollLeft = btn.scrollLeft;
                });
            });
        
        
            slider.forEach( btn => {
                btn.addEventListener('mousemove', (e) => {
                    if(!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - btn.offsetLeft;
                    const walk = (x - startX) * 3; //scroll-fast
                    btn.scrollLeft = scrollLeft - walk;
                });
            });

            // Music Horizonatal Slider Start 


            // Add Song UI 


            const addListUI = ( listChange , i)  =>{ 

                const content = `<div class="music-con__item">
                                <div class="music-con__img">
                                    <img src="img/${songs[i].image}" alt="">
                                    <span class="music-con__play-btn">
                                        <span class="material-icons play-btn">
                                            play_circle_outline
                                        </span>
                                    </span>
                                </div>
                                <div class="music-list__text">
                                    <h3 class="heading-3"> ${songs[i].name} </h3>
                                    <p class="music-artist-name">  ${songs[i].artist} </p>
                                </div>
                            </div>`;

                DOM.audioListParent[listChange].insertAdjacentHTML('beforeend',content); 
            }

                for(let i = 0 ; i < 6 ; i++ ){
                        addListUI(0 , i);
                }

                for(let i = 6 ; i < getSongs.songs.length ; i++ ){
                    addListUI(1 , i);
            }
    
            
            // List UI Added

            for(let i in getSongs.animeSong){

                    const content = `<div class="music-hor__item">
                                        <div class="music-hor__item-inner">
                                            <img src="img/${getSongs.animeSong[i].image}" class="music-hor__img">
                                            <h3 class="music-artist-name">${getSongs.animeSong[i].name}</h3>
                                        </div>
                                        <div class="music-hor__item-inner"> 
                                            <p class="music-hor__music-duration">${getSongs.animeSong[i].duration}</p>                  
                                        </div>
                                    </div> `;
                    
                    DOM.audioHorListParent.insertAdjacentHTML('beforeend',content); 

            }



    })(DOMStrings,AnimationClass,getSongs);


    // Music Contol Model 


    const musicController = ((DOMStrings,getSongs) => {

        const DOM = DOMStrings.DOMString , player = DOM.audioPlayer , audioCtrl = DOMStrings.audioBtnCtrl ,
        musicHoriList  =  document.querySelectorAll('.music-hor__item'),
        musicItems = document.querySelectorAll('.music-con__item') ;
        let currenPlayingSongIndex = 0 , currenListObject = getSongs.songs;

        const volume = {
            off : `<span class="material-icons">
                    volume_off
                </span>`,
            on :`<span class="material-icons">
                    volume_up
                </span>`
        },
        
        HTML = {

            pause : `<span class="material-icons">
                    pause_circle_filled
                    </span>
                    ` ,
            play : ` <span class="material-icons">
                        play_circle_filled
                    </span> `
        }
        
        
// Load the seek sound effect
const seekSound = new Audio('fastForwad/fast-foward.mp3');
seekSound.volume = 0.9; // Adjust volume if needed

DOM.audioProgressBar.forEach(btn => {
    btn.addEventListener("click", function seek(e) {
        let percent = e.offsetX / this.offsetWidth;
        let seekTime = percent * player.duration;
        player.currentTime = isNaN(seekTime) ? 0.0 : seekTime;
        DOM.audioProgressBar.value = percent / 100;

        // Play the seek sound effect and stop it immediately after a short duration
        seekSound.currentTime = 0; // Restart sound if already playing
        seekSound.play().then(() => {
            setTimeout(() => seekSound.pause(), 100); // Stop after 100ms
        }).catch(err => console.warn("Seek sound error:", err));
    });
});

player.addEventListener('timeupdate', () => {
    var duration = player.duration;

    if (duration > 0) {
        DOM.audioProgressBarFill.forEach(btn => btn.style.width = ((player.currentTime / duration) * 100) + "%");
    }

    const d = player.currentTime;
    let hours = Math.floor(d / 3600);
    let minutes = Math.floor(d % 3600 / 60);
    let seconds = Math.floor(d % 3600 % 60);

    hours = (hours === 0) ? '' : (zeroPrefixer(hours) + ' : ');

    audioCtrl.audioCurrentDuration.textContent = hours + zeroPrefixer(minutes) + ' : ' + zeroPrefixer(seconds);
});

const zeroPrefixer = n => (n < 10) ? ('0' + n) : n;

audioCtrl.playPauseBtn.forEach(btn => {
    btn.addEventListener('click', () => audioCtrl.audioPlayer.paused ? audioPlayEnable() : audioPlayDisable());
});


  




let isSeeking = false;

DOM.audioPlayerProgressBar = document.querySelectorAll('.audio-player__progress-bar');

// Start seeking when mouse is down
DOM.audioPlayerProgressBar.forEach(bar => {
    bar.addEventListener("mousedown", (e) => {
        isSeeking = true;
        updateSeek(e, bar);
    });

    bar.addEventListener("mousemove", (e) => {
        if (isSeeking) updateSeek(e, bar);
    });

    bar.addEventListener("mouseup", () => {
        isSeeking = false;
    });

    bar.addEventListener("mouseleave", () => {
        isSeeking = false;
    });
});

function updateSeek(e, bar) {
    let percent = e.offsetX / bar.offsetWidth;
    let seekTime = percent * player.duration;
    player.currentTime = isNaN(seekTime) ? 0.0 : seekTime;

    // Update progress bar fill
    document.querySelectorAll(".music-controller__progress-bar-fill").forEach(fill => {
        fill.style.width = (percent * 100) + "%";
    });
}






        const audioPlayEnable = () =>{
            audioCtrl.playPauseBtn.forEach( btn => btn.innerHTML = HTML.pause);
            var playPromise  = audioCtrl.audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                }).catch(error => { });
            }
        };

        const audioPlayDisable = () =>{
            audioCtrl.playPauseBtn.forEach( btn => btn.innerHTML = HTML.play);
            audioCtrl.audioPlayer.pause();
        };

 
 //Set Data Current Playing Music

        const updateAudio = (index) =>  {
                const songObject = currenListObject[index];
                audioCtrl.audioName[0].textContent = songObject.name;
                audioCtrl.audioName[1].textContent = songObject.name;
                audioCtrl.audioImage[0].src = `img/${songObject.image}`;
                audioCtrl.audioImage[1].src = `img/${songObject.image}`;
                audioCtrl.audioSingerName.textContent = songObject.artist;
                audioCtrl.audioPlayer.src =`https://chingamedia.com/kaswida/${songObject.songUrl}`;
                audioCtrl.audioEndDuration.textContent = songObject.duration;
                DOM.audioProgressBarFill.forEach( btn => btn.style.width = 0 + "%" );
                audioPlayEnable();    
                
        }

        musicItems.forEach( (item, index) => {
                item.addEventListener('click',()=>{
                    currenListObject = getSongs.songs;
                    currenPlayingSongIndex = index;
                    updateAudio(index);    
                });
        });

        

        musicHoriList.forEach( (item, index) => {
            item.addEventListener('click',()=>{
                currenListObject = getSongs.animeSong;
                currenPlayingSongIndex = index;
                updateAudio(index);  
            });
        });



       
   audioCtrl.recommendedPlayBtn.addEventListener('click',()=>{
            currenListObject = getSongs.getRecommendedSong;
            currenPlayingSongIndex = 0;
            updateAudio(0)
        })


        audioCtrl.nextBtn.forEach( btn =>{
            btn.addEventListener('click',() =>{
                if( currenPlayingSongIndex === currenListObject.length-1)
                    currenPlayingSongIndex = -1;      
                updateAudio(++currenPlayingSongIndex);
            });  

        });

        audioCtrl.prevBtn.forEach( btn =>{
            btn.addEventListener('click',() =>{
                if( currenPlayingSongIndex === 0)
                    currenPlayingSongIndex = currenListObject.length;
                updateAudio(--currenPlayingSongIndex);
            });
        });


    
        audioCtrl.audioPlayer.addEventListener("ended",() =>{
            if(audioCtrl.audioRepeat[0].className.includes('audioSuffle')){
                updateAudio(currenPlayingSongIndex) ;
                return;
            }
            if( currenPlayingSongIndex === currenListObject.length-1)
                    currenPlayingSongIndex = -1;   
            updateAudio(++currenPlayingSongIndex) 
        });

    

        audioCtrl.audioVolume.forEach( btn =>{
            btn.addEventListener('click',() =>{
            const isMuted = audioCtrl.audioPlayer.muted;
            audioCtrl.audioPlayer.muted = !isMuted;
            const icon = isMuted ? volume.on : volume.off;
            audioCtrl.audioVolume[0].innerHTML = icon;
            audioCtrl.audioVolume[1].innerHTML = icon;
            navigator.vibrate(100);
            });
        });

        let isShuffleModeEnable = false;

        audioCtrl.audioShuffle.forEach( btn =>{
            btn.addEventListener('click',() =>{
                audioCtrl.audioShuffle[0].classList.toggle('audioSuffle');
                audioCtrl.audioShuffle[1].classList.toggle('audioSuffle');
                
                if(isShuffleModeEnable){
                    isShuffleModeEnable = false;
                    if( currenListObject.length === getSongs.songs.length)
                        currenListObject = getSongs.songs;
                    else if( currenListObject.length === getSongs.animeSong.length)
                        currenListObject = getSongs.animeSong;
                    else if( currenListObject.length === getSongs.getRecommendedSong.length)
                        currenListObject = getSongs.getRecommendedSong;
            
                }else{
                    currenListObject = shuffle(currenListObject);
                    isShuffleModeEnable = true;
                }

            });
        });


        function shuffle(array) {
            let currentIndex = array.length,
                temporaryValue, randomIndex,
                newArray = new Array(...array);
            
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = newArray[currentIndex];
            newArray[currentIndex] = newArray[randomIndex];
            newArray[randomIndex] = temporaryValue;
            }
        
            return newArray;
        }
        

        audioCtrl.audioRepeat.forEach( btn =>{
            btn.addEventListener('click',() =>{
                audioCtrl.audioRepeat[0].classList.toggle('audioSuffle');
                audioCtrl.audioRepeat[1].classList.toggle('audioSuffle');
            })
        })



     
  updateAudio(0); //set First Song
        audioPlayDisable();

    })(DOMStrings,getSongs);


    setTimeout(() => {

        const loader  = document.querySelector('.loading-sec');
        loader.setAttribute('style','opacity : 0');
        setTimeout(() => {
            loader.remove();
        }, 1000);   
        
    }, 3000);
 

}


function adjustNavbar() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.innerWidth > 896) {
      navbar.style.position = 'static'; // Or 'relative'
    } else {
      navbar.style.position = 'fixed'; // Restore the fixed position for smaller screens
    }
  }
}

window.addEventListener('resize', adjustNavbar);
window.addEventListener('load', adjustNavbar);


function removeSideMenu() {
  const sideMenu = document.getElementById('menu');
  if (sideMenu) {
    if (window.innerWidth > 896) {
      sideMenu.remove(); // Remove the side menu
    }
  }
}

window.addEventListener('resize', removeSideMenu);
window.addEventListener('load', removeSideMenu);
