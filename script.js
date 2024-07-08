function generateLottoNumbers() {
    // 1에서 45까지의 숫자 배열 생성
    let numbers = Array.from(Array(28), (_, index) => index + 1);

    // 번호를 섞기 위해 Fisher-Yates 알고리즘 활용
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // 첫 6개의 숫자를 선택하여 정렬
    const selectedNumbers = numbers.slice(0, 6).sort((a, b) => a - b);

    // 결과를 화면에 출력
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.textContent = selectedNumbers.join(', ');

    // Sweetalert2 팝업 띄우기
    Swal.fire({
        title: '당번 추첨 완료!',
        html: `<p>${selectedNumbers.join(', ')}</p>`,
        icon: 'success',
        confirmButtonColor: '#4caf50',
        confirmButtonText: '확인'
    });
}
