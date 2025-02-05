document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    let prevScrollPos = window.pageYOffset;


    if (window.location.hash === "" || window.location.hash === "#home") {
        header.classList.add('fixed');
    }


    const headerHeight = header.offsetHeight;


    const heroSection = document.querySelector('.hero');
    heroSection.style.marginTop = `${headerHeight}px`;

    window.addEventListener('scroll', function () {
        let currentScrollPos = window.pageYOffset;


        if (prevScrollPos > currentScrollPos) {
            header.classList.remove('hidden');
        } else {
            header.classList.add('hidden');
        }
        prevScrollPos = currentScrollPos;
    });


    const anchors = document.querySelectorAll('a[href^="#"]');
    for (const anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Обработчик для кнопки "Рассчитать ИМТ"
    const bmiButton = document.querySelector('.bmi-button');
    if (bmiButton) {
        bmiButton.addEventListener('click', calculateBMI);
    }

    // Функция для расчета ИМТ
    function calculateBMI() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100;

        console.log("Вес:", weight); // Отладочный вывод
        console.log("Рост:", height); // Отладочный вывод

        if (!weight || !height || height <= 0) {
            document.getElementById("result").innerText = "Пожалуйста, введите корректные данные.";
            return;
        }

        const bmi = (weight / (height ** 2)).toFixed(2);
        let status = "";

        if (bmi < 18.5) {
            status = "Недостаток веса.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = "Норма. Ты в порядке!";
        } else if (bmi >= 25 && bmi < 29.9) {
            status = "Избыток веса.";
        } else {
            status = "Ожирение.";
        }

        document.getElementById("result").innerText = `Твой ИМТ: ${bmi}. ${status}`;
        console.log("Результат ИМТ:", bmi, status); // Отладочный вывод
    }
});