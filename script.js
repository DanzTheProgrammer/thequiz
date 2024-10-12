const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        answer: 0
    },
    {
        question: "Siapa penemu telepon?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
        answer: 1
    },
    {
        question: "Apa lambang kimia untuk air?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: 0
    },
    {
        question: "Benua manakah yang terluas?",
        options: ["Afrika", "Asia", "Eropa", "Australia"],
        answer: 1
    },
    {
        question: "Apa nama gunung tertinggi di dunia?",
        options: ["K2", "Kilimanjaro", "Everest", "Aconcagua"],
        answer: 2
    },
    {
        question: "Apa nama ibukota Jepang?",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        answer: 0
    },
    {
        question: "Siapa penulis novel 'Laskar Pelangi'?",
        options: ["Andrea Hirata", "Habiburrahman El Shirazy", "Tere Liye", "Risa Sati"],
        answer: 0
    },
    {
        question: "Apa warna bendera Indonesia?",
        options: ["Merah dan Putih", "Merah dan Kuning", "Putih dan Hijau", "Biru dan Putih"],
        answer: 0
    },
    {
        question: "Apa satuan dasar dari panjang?",
        options: ["Kilogram", "Meter", "Liter", "Joule"],
        answer: 1
    },
    {
        question: "Siapa yang menciptakan teori relativitas?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        answer: 1
    },
    {
        question: "Apa alat musik tradisional dari Bali?",
        options: ["Gamelan", "Angklung", "Sasando", "Suling"],
        answer: 0
    },
    {
        question: "Apa nama hewan yang dikenal sebagai raja hutan?",
        options: ["Harimau", "Beruang", "Singa", "Serigala"],
        answer: 2
    },
    {
        question: "Siapa presiden pertama Republik Indonesia?",
        options: ["Sukarno", "Suharto", "BJ Habibie", "Megawati"],
        answer: 0
    },
    {
        question: "Apa nama planet terdekat dari matahari?",
        options: ["Venus", "Mars", "Merkurius", "Jupiter"],
        answer: 2
    },
    {
        question: "Apa simbol kimia untuk emas?",
        options: ["Au", "Ag", "Fe", "Pb"],
        answer: 0
    },
    {
        question: "Apa nama pulau terbesar di Indonesia?",
        options: ["Sumatra", "Jawa", "Kalimantan", "Sulawesi"],
        answer: 2
    },
    {
        question: "Apa nama alat untuk mengukur suhu?",
        options: ["Termometer", "Barometer", "Higrometer", "Anemometer"],
        answer: 0
    },
    {
        question: "Apa nama penyanyi lagu 'Cinta Luar Biasa'?",
        options: ["Andmesh Kamaleng", "Rizky Febian", "Glenn Fredly", "Judika"],
        answer: 1
    },
    {
        question: "Apa warna bendera Rusia?",
        options: ["Merah, Putih, dan Biru", "Merah dan Putih", "Hijau dan Putih", "Hitam dan Putih"],
        answer: 0
    },
    {
        question: "Apa alat transportasi yang terbang?",
        options: ["Mobil", "Kapal", "Pesawat", "Kereta"],
        answer: 2
    },
    {
        question: "Siapa yang dikenal sebagai Bapak Proklamasi?",
        options: ["Sukarno", "Suharto", "Hatta", "Sudirman"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[type=radio]:checked');
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        if (answerIndex === questions[currentQuestionIndex].answer) {
            score += 5; // 5 poin per jawaban benar
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    } else {
        alert('Silakan pilih jawaban!');
    }
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        optionsElement.innerHTML += `
            <div>
                <input type="radio" id="option${index}" name="option" value="${index}">
                <label for="option${index}">${option}</label>
            </div>
        `;
    });
}

function showScore() {
    questionElement.innerHTML = ''; // Sembunyikan pertanyaan
    optionsElement.innerHTML = ''; // Sembunyikan opsi
    nextButton.classList.add('hidden'); // Sembunyikan tombol berikutnya
    scoreContainer.classList.remove('hidden'); // Tampilkan skor
    scoreDisplay.innerText = score;
}

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add('hidden');
    nextButton.classList.remove('hidden'); // Tampilkan tombol berikutnya
    loadQuestion();
});

// Load the first question when the page is loaded
loadQuestion();