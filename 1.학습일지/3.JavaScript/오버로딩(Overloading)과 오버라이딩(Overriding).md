1️⃣ 오버로딩 (Overloading)

📌 개념 

    같은 이름의 함수를 매개변수의 개수나 타입에 따라 다르게 동작하도록 여러 개 정의하는 것.
    **Java, C++**에서는 지원하지만 JavaScript는 함수 오버로딩을 명시적으로 지원하지 않음.
    JS는 같은 이름으로 함수를 여러 번 선언하면 마지막 선언만 남음.
    arguments 객체, 디폴트 파라미터, 나머지 매개변수(...) 등을 사용해 유사하게 구현하여 사용.

📌 간단 예제

<img width="1280" height="522" alt="Image" src="https://github.com/user-attachments/assets/702b7597-d668-455d-b155-aba8a7975722" />

✅ 이처럼 JS에서는 하나의 함수 안에서 arguments.length, typeof, if문으로 내부 분기 처리하여 오버로딩처럼 사용합니다.

 
2️⃣ 오버라이딩 (Overriding)

📌 개념 (자세히)

    상속 관계에서 부모 클래스의 메서드를 자식 클래스에서 동일한 이름으로 재정의하여 사용하는 것.
    자식 클래스에서 메서드를 호출하면 부모의 메서드 대신 자식의 재정의된 메서드가 호출됨.
    필요 시 super 키워드를 사용해 부모의 메서드도 호출 가능.

📌 간단 예제

<img width="1280" height="678" alt="Image" src="https://github.com/user-attachments/assets/55c0c074-2f30-4552-9ce3-b2be2998deb3" />

✅ 여기서 Child 클래스가 Parent의 sayHello 메서드를 오버라이딩하여 자신의 로직으로 대체한 예시입니다.

 
🪐 한눈에 정리

<img width="602" height="259" alt="image" src="https://github.com/user-attachments/assets/e1570067-8a34-4290-baad-f975fb5817de" />
